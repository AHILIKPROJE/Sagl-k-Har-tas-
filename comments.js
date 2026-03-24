/**
 * 🛰️ SOSYALFEST VERİ VE ŞEHİR YÖNETİM SİSTEMİ
 * Bu modül 81 ili dinamik olarak yükler ve Firestore filtrelemesini yönetir.
 */

// 1. TÜRKİYE 81 İL LİSTESİ (Tam Liste & Alfabetik)
const turkiyeIlleri = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

// 2. SAYFA YÜKLENDİĞİNDE ÇALIŞACAK ANA FONKSİYON
// window.onload yerine DOMContentLoaded kullanmak daha profesyonel ve hızlıdır.
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Manager: Sistem başlatılıyor...");
    
    // Şehir listelerini doldurmaya başla
    populateCityDropdowns();
    
    // Veritabanından ilk yorumları çek
    loadReviews();
});

// 3. ŞEHİR LİSTELERİNİ HTML'E ENJEKTE ETME (İşte sorunu çözen kısım)
function populateCityDropdowns() {
    // HTML'deki select elementlerini yakala
    const postCitySelect = document.getElementById('post-city');
    const filterCitySelect = document.getElementById('filter-city');

    // Elementler sayfada var mı kontrol et (Hata koruması)
    if (!postCitySelect || !filterCitySelect) {
        console.error("❌ HATA: Şehir seçim kutuları HTML içinde bulunamadı! ID'leri kontrol et.");
        return;
    }

    // Listeyi alfabetik olarak sırala (Türkçe karakter duyarlı)
    turkiyeIlleri.sort((a, b) => a.localeCompare(b, 'tr'));

    // Her bir şehri döngüyle ekle
    turkiyeIlleri.forEach(sehir => {
        // Yorum Yazma Formu İçin
        let optionPost = document.createElement('option');
        optionPost.value = sehir;
        optionPost.textContent = sehir;
        postCitySelect.appendChild(optionPost);

        // Filtreleme Çubuğu İçin
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
    const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;
    // Form Kontrolleri
    if (!user) {
        alert("⚠️ Yorum yapmak için giriş yapmalısınız!");
        return;
    }
    if (!city || !category || !text || text.length < 5) {
        alert("⚠️ Lütfen şehir, kategori ve en az 5 karakterlik bir mesaj girin.");
        return;
    }

    try {
        // Butonu geçici olarak kilitle (Çift tıklamayı önler)
        btn.disabled = true;
        btn.innerHTML = '<span>Yükleniyor...</span>';

        await db.collection("reviews").add({
            userId: user.uid,
            userEmail: user.email,
            city: city,
            category: category,
            comment: text,
            rating: parseInt(rating),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Temizlik
        document.getElementById('review-text').value = "";
        alert("🎉 Deneyiminiz başarıyla paylaşıldı!");
        
    } catch (error) {
        console.error("Firestore Error:", error);
        alert("❌ Veri gönderilirken bir hata oluştu: " + error.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>Yorumu Yayınla</span> <span class="btn-icon">🚀</span>';
    }
}

// 5. YORUMLARI LİSTELEME VE FİLTRELEME MOTORU
function loadReviews() {
    const fCity = document.getElementById('filter-city').value;
    const fCat = document.getElementById('filter-category').value;
    const list = document.getElementById('reviews-list');
    const starsHtml = "⭐".repeat(d.rating || 0);

    // Yükleniyor animasyonu
    list.innerHTML = '<div class="loading-spinner">Veriler senkronize ediliyor...</div>';

    // Temel Sorgu
    let query = db.collection("reviews").orderBy("createdAt", "desc");

    // Filtreler 'all' değilse sorguyu daralt
    if (fCity !== "all") {
        query = query.where("city", "==", fCity);
    }
    if (fCat !== "all") {
        query = query.where("category", "==", fCat);
    }

    // Gerçek Zamanlı Dinleyici (Anlık Güncelleme)
    query.onSnapshot((snapshot) => {
        list.innerHTML = ""; // Listeyi temizle

        if (snapshot.empty) {
            list.innerHTML = '<p class="no-data">🔍 Bu kriterlere uygun yorum bulunamadı.</p>';
            return;
        }

        snapshot.forEach((doc) => {
            const d = doc.data();
            const date = d.createdAt ? new Date(d.createdAt.seconds * 1000).toLocaleDateString('tr-TR') : "Yeni";
            
            list.innerHTML += `
                <div class="review-card">
                    <div class="review-meta">
                        <span class="meta-tag city-tag">📍 ${d.city}</span>
                        <span class="meta-tag cat-tag">🏥 ${d.category}</span>
                        <span class="meta-date">📅 ${date}</span>
                    </div>

                    <div class="review-stars">${starsHtml}</div>

                    <p class="review-body">${d.comment}</p>
                    <div class="review-footer">
                        <span class="user-id">👤 ${d.userEmail.split('@')[0]}</span>
                    </div>
                </div>
            `;
        });
    });
}
