/**
 * 🛰️ CURA TR: SAĞLIK TURİZMİ YÖNETİM SİSTEMİ
 * Bu modül 81 ili dinamik olarak yükler ve Firestore filtrelemesini yönetir.
 */

// 1. TÜRKİYE 81 İL LİSTESİ
const turkiyeIlleri = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

// 2. SAYFA YÜKLENDİĞİNDE ÇALIŞACAK ANA FONKSİYON
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Manager: Sistem başlatılıyor...");
    populateCityDropdowns();
    loadReviews();
});

// 3. ŞEHİR LİSTELERİNİ HTML'E ENJEKTE ETME
function populateCityDropdowns() {
    const postCitySelect = document.getElementById('post-city');
    const filterCitySelect = document.getElementById('filter-city');

    if (!postCitySelect || !filterCitySelect) {
        console.error("❌ HATA: Şehir seçim kutuları bulunamadı.");
        return;
    }

    turkiyeIlleri.sort((a, b) => a.localeCompare(b, 'tr'));

    turkiyeIlleri.forEach(sehir => {
        let optionPost = document.createElement('option');
        optionPost.value = sehir;
        optionPost.textContent = sehir;
        postCitySelect.appendChild(optionPost);

        let optionFilter = document.createElement('option');
        optionFilter.value = sehir;
        optionFilter.textContent = sehir;
        filterCitySelect.appendChild(optionFilter);
    });
    console.log("✅ 81 İl başarıyla listelere eklendi.");
}

// 4. YENİ YORUM GÖNDERME FONKSİYONU
async function sendReview() {
    const city = document.getElementById('post-city').value;
    const category = document.getElementById('post-category').value;
    const text = document.getElementById('review-text').value;
    const user = auth.currentUser;
    const btn = document.getElementById('submit-review-btn');
    
    // Yıldız değerini güvenli al
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const ratingValue = ratingInput ? parseInt(ratingInput.value) : 0;

    if (!user) {
        alert("⚠️ Yorum yapmak için giriş yapmalısınız!");
        return;
    }
    if (!city || !category || !text || text.length < 5) {
        alert("⚠️ Lütfen tüm alanları doldurun (Yorum en az 5 karakter).");
        return;
    }

    try {
        btn.disabled = true;
        btn.innerHTML = '<span>Yükleniyor...</span>';

        await db.collection("reviews").add({
            userId: user.uid,
            userEmail: user.email,
            city: city,
            category: category,
            comment: text,
            rating: ratingValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        document.getElementById('review-text').value = "";
        if (ratingInput) ratingInput.checked = false;
        alert("🎉 Yorumunuz başarıyla yayınlandı!");
        
    } catch (error) {
        console.error("Gönderim Hatası:", error);
        alert("❌ Hata oluştu: " + error.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>Yorumu Yayınla</span> <span class="btn-icon">🚀</span>';
    }
}

// 5. YORUMLARI LİSTELEME VE FİLTRELEME MOTORU (Hata Düzeltildi)
function loadReviews() {
    const fCity = document.getElementById('filter-city').value;
    const fCat = document.getElementById('filter-category').value;
    const list = document.getElementById('reviews-list');

    if (!list) return;

    list.innerHTML = '<div class="loading-spinner">📡 Veriler yükleniyor...</div>';

    let query = db.collection("reviews").orderBy("createdAt", "desc");

    if (fCity !== "all") query = query.where("city", "==", fCity);
    if (fCat !== "all") query = query.where("category", "==", fCat);

    query.onSnapshot((snapshot) => {
        list.innerHTML = ""; 

        if (snapshot.empty) {
            list.innerHTML = '<p class="no-data">🔍 Henüz yorum bulunamadı.</p>';
            return;
        }

        snapshot.forEach((doc) => {
            const d = doc.data();
            const date = d.createdAt ? new Date(d.createdAt.seconds * 1000).toLocaleDateString('tr-TR') : "Yeni";
            
            // ⭐ YILDIZLAR BURADA ÜRETİLİYOR (Doğru yer burası)
            const ratingValue = d.rating || 0;
            const starsHtml = "⭐".repeat(ratingValue);

            list.innerHTML += `
                <div class="review-card">
                    <div class="review-meta">
                        <span class="meta-tag city-tag">📍 ${d.city}</span>
                        <span class="meta-tag cat-tag">🏥 ${d.category}</span>
                        <span class="meta-date">📅 ${date}</span>
                    </div>
                    <div class="review-stars" style="color: #fbbf24; margin: 10px 0;">${starsHtml}</div>
                    <p class="review-body">${d.comment}</p>
                    <div class="review-footer">
                        <span class="user-id">👤 ${d.userEmail ? d.userEmail.split('@')[0] : 'Anonim'}</span>
                    </div>
                </div>
            `;
        });
    }, (error) => {
        console.error("Firestore Hatası:", error);
        list.innerHTML = '<p class="no-data">⚠️ Veriler alınırken bir hata oluştu.</p>';
    });
}
