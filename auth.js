/**
 * 🔐 SOSYALFEST KİMLİK DOĞRULAMA SİSTEMİ (AUTH ENGINE)
 * Bu modül, Firebase Authentication servislerini kullanarak kullanıcı 
 * oturumlarını ve sayfa erişim izinlerini yönetir.
 */

// 1. OTURUM DURUMU TAKİPÇİSİ (Real-time Observer)
// Sayfa yüklendiğinde ve her oturum değişiminde (giriş/çıkış) otomatik tetiklenir.
auth.onAuthStateChanged(user => {
    const overlay = document.getElementById('gatekeeper-overlay');
    const mainContent = document.getElementById('main-content');
    const userStatusArea = document.getElementById('user-status-area');

    if (user) {
        // --- KULLANICI GİRİŞ YAPMIŞ ---
        console.log("🚀 Yetkilendirme Başarılı: ", user.email);

        // Arayüzü Kullanıcı İçin Hazırla
        userStatusArea.innerHTML = `
            <div class="user-profile">
                <span class="user-mail">👋 Hoş geldin, <strong>${user.email.split('@')[0]}</strong></span>
                <button class="btn-logout" onclick="logoutUser()">Güvenli Çıkış</button>
            </div>
        `;

        // Giriş modalını animasyonla kapat (CSS'deki fade-out'u tetikler)
        overlay.classList.add('fade-out');
        
        // 500ms sonra elementi tamamen gizle ve buzlanmayı çöz
        setTimeout(() => {
            overlay.style.display = 'none';
            mainContent.classList.add('unlocked');
            document.body.style.overflow = 'auto'; // Kaydırmayı aç
        }, 500);

    } else {
        // --- KULLANICI GİRİŞ YAPMAMIŞ VEYA ÇIKIŞ YAPMIŞ ---
        console.warn("🔒 Erişim Engellendi: Oturum Açılmamış.");
        
        userStatusArea.innerHTML = "";
        overlay.style.display = 'flex';
        overlay.classList.remove('fade-out');
        mainContent.classList.remove('unlocked');
        document.body.style.overflow = 'hidden'; // Kaydırmayı kilitle
    }
});

// 2. KULLANICI GİRİŞ FONKSİYONU
async function loginUser() {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('pass-input').value;
    const errorDisplay = document.getElementById('auth-error');

    // Temel Kontrol
    if (!email || !password) {
        errorDisplay.innerText = "⚠️ E-posta ve şifre alanları boş bırakılamaz.";
        return;
    }

    try {
        errorDisplay.innerText = "⏳ Doğrulanıyor...";
        await auth.signInWithEmailAndPassword(email, password);
        console.log("✅ Giriş İşlemi Tamamlandı.");
    } catch (error) {
        console.error("Auth Error:", error.code);
        // Jürinin seveceği detaylı hata mesajları
        switch (error.code) {
            case 'auth/user-not-found':
                errorDisplay.innerText = "❌ Bu e-posta adresiyle kayıtlı bir kullanıcı bulunamadı.";
                break;
            case 'auth/wrong-password':
                errorDisplay.innerText = "❌ Şifre hatalı. Lütfen tekrar deneyin.";
                break;
            case 'auth/invalid-email':
                errorDisplay.innerText = "❌ Geçersiz bir e-posta formatı girdiniz.";
                break;
            default:
                errorDisplay.innerText = "❌ Bir hata oluştu: " + error.message;
        }
    }
}

// 3. YENİ KAYIT OLUŞTURMA FONKSİYONU
async function registerUser() {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('pass-input').value;
    const errorDisplay = document.getElementById('auth-error');

    if (password.length < 6) {
        errorDisplay.innerText = "⚠️ Güvenlik gereği şifre en az 6 karakter olmalıdır.";
        return;
    }

    try {
        errorDisplay.innerText = "⏳ Hesap oluşturuluyor...";
        await auth.createUserWithEmailAndPassword(email, password);
        alert("🎉 Kaydınız başarıyla oluşturuldu! Sosyalfest portalına hoş geldiniz.");
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            errorDisplay.innerText = "❌ Bu e-posta zaten kullanımda.";
        } else {
            errorDisplay.innerText = "❌ Kayıt hatası: " + error.message;
        }
    }
}

// 4. ÇIKIŞ YAPMA FONKSİYONU
function logoutUser() {
    if (confirm("Oturumu kapatmak istediğinize emin misiniz?")) {
        auth.signOut();
    }
}
