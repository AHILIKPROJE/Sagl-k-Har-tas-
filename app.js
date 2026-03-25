/* ==========================================================
   1. GENEL AYARLAR VE DİL VERİTABANI
   ========================================================== */
let currentLang = 'tr';
let activeCategory = null; 
let scale = 1;
let pointX = 0;
let pointY = 0;
let start = { x: 0, y: 0 };
let isDragging = false;

const translations = {
    tr: { 
        title: "Türk Devletleri Sağlık Turizmi Haritası", 
        subtitle: "Bilgi almak istediğiniz ülkeyi seçiniz.", 
        home: "Anasayfa", about: "Hakkımızda", langName: "Türkçe",
        flag: "https://flagcdn.com/w20/tr.png",
        welcomeTitle: "Hoş Geldiniz",
        welcomeSub: "Lütfen tıbbi analizler için bir kategori seçiniz.",
        analysisTitle: "📊 TIBBİ ANALİZ VE BAŞARI ORANLARI",
        callBtn: "HEMEN ARA",
        categories: ["CERRAHİ", "TERMAL", "YAŞLI BAKIM", "ENGELLİ BAKIM", "SPA"],
        countries: { "path3458": "Türkiye", "path3456": "Türkiye", "path5796": "Azerbaycan", "path3898": "Kazakistan", "path3470": "Özbekistan", "tm": "Türkmenistan", "kg": "Kırgızistan", "cy": "KKTC" }
    },
    en: { 
        title: "Turkic States Health Tourism Map", 
        subtitle: "Please select a country for information.", 
        home: "Home", about: "About Us", langName: "English",
        flag: "https://flagcdn.com/w20/gb.png",
        welcomeTitle: "Welcome",
        welcomeSub: "Please select a category for medical analysis.",
        analysisTitle: "📊 MEDICAL ANALYSIS",
        callBtn: "CALL NOW",
        categories: ["SURGERY", "THERMAL", "ELDERLY CARE", "DİSABLED CARE","SPA"],
        countries: { "path3458": "Turkey", "path3456": "Turkey", "path5796": "Azerbaijan", "path3898": "Kazakhstan", "path3470": "Uzbekistan", "tm": "Turkmenistan", "kg": "Kyrgyzstan", "cy": "TRNC" }
    },
    uz: { 
        title: "Turkiy Davlatlar Sog'liqni Saqlash Xaritasi", 
        subtitle: "Ma'lumot olish uchun davlatni tanlang.", 
        home: "Bosh sahifa", about: "Biz haqimizda", langName: "O'zbekcha",
        flag: "https://flagcdn.com/w20/uz.png",
        welcomeTitle: "Xush Kelibsiz",
        welcomeSub: "Iltimos, tahlil uchun toifani tanlang.",
        analysisTitle: "📊 TIBBIY TAHLIL",
        callBtn: "QO'NG'IROQ",
        categories: ["JARROHLIK", "TERMAL", "KEKSALAR PARVARISHI", "NOGİRONLARNİ PARVARİSH QİLİSH", "SPA"],
        countries: { "path3458": "Turkiya", "path3456": "Turkiya", "path5796": "Ozarbayjon", "path3898": "Qozog'iston", "path3470": "O'zbekiston", "tm": "Turkmaniston", "kg": "Qirg'iziston", "cy": "SHK" }
    }
};


/* ==========================================================
   2. BİLİMSEL VERİ MERKEZİ (FULL DETAY)
   ========================================================== */
const countryDetailedData = {
     "AZERBAYCAN": {
    meta: {
        status: "Strategic International Partner",
        hubs: ["Baku", "Naftalan", "Nakhchivan", "Gabala", "Ganja"],
        specialty: "Robotic Surgery, Oil Therapy, Speleotherapy, High-End Detox"
    },
    surgery: {
        img: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?q=80&w=800", 
        phone: "+994 12 599 08 00",
        tr: {
            hospName: "Yeni Bakü Kliniği ve Merkez Kliniği (JCI Akreditasyonlu)",
            shortDesc: "🏙️ Kafkasya'nın dijital sağlık üssü; robotik cerrahi sistemleri, hibrit ameliyathaneler ve yapay zeka destekli radyoloji.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🔬 Ultra-Modern Cerrahi Altyapı ve Global Tıp Standartları</h4>
                <p>Bakü, son yıllarda yapılan devasa yatırımlarla medikal cihaz envanteri bakımından dünyadaki en güncel teknolojilere (7 Tesla MR, Da Vinci Xi Robotik Sistemler) ev sahipliği yapmaktadır. Projemizin 'Uluslararası Cerrahi Hub'ı burasıdır.</p>
                <ul>
                    <li>🤖 <strong>Robotik ve Minimal İnvaziv Cerrahi:</strong> Da Vinci Xi sistemleri ile ürolojik, jinekolojik ve genel cerrahi operasyonlarında hata payının sıfırlanması; post-op (ameliyat sonrası) iyileşme hızında %40 artış.</li>
                    <li>🫀 <strong>Kardiyovasküler (KVC) Mükemmeliyet:</strong> TAVI (Ameliyatsız kapak değişimi), çalışan kalpte bypass ve kompleks konjenital kalp cerrahisinde Kafkasya'nın referans merkezi.</li>
                    <li>🧠 <strong>İleri Nöroşirürji ve Girişimsel Radyoloji:</strong> Navigasyon destekli beyin tümörü rezeksiyonu, anevrizma embolizasyonu ve Parkinson tedavisinde derin beyin stimülasyonu (DBS).</li>
                    <li>🦴 <strong>Ortopedik Robotik Artroplasti:</strong> Mako SmartRobotics destekli kalça ve diz protezi uygulamaları; kişiye özel protez tasarımı ve 3D yazıcı destekli implantasyon.</li>
                    <li>🧬 <strong>Onkoloji ve Kemik İliği Nakli:</strong> Gelişmiş hematoloji servisleri, immünoterapi protokolleri ve solid tümör cerrahisinde multidisipliner tümör konseyi yaklaşımı.</li>
                    <li>🤱 <strong>Modern IVF (Tüp Bebek) ve Genetik:</strong> PGT-M/A (Preimplantasyon Genetik Tanı) yöntemleri ile sağlıklı embriyo seçimi ve yüksek başarı oranlı gebelik takibi.</li>
                    <li>👁️ <strong>Femto-Saniye Lazer ve Oftalmoloji:</strong> SMILE lazer teknolojisi, keratokonus tedavileri ve akıllı lens implantasyonlarında dünya standartlarında klinik hizmeti.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 VIP Medikal Lojistik ve Global Erişilebilirlik</h4>
                <p>Bakü, 'Sağlık Diplomasisi' kapsamında Körfez ülkeleri, Avrupa ve Orta Asya'dan gelen hastalar için özel 'Sağlık Vizesi' ve lüks transfer hizmetleri sunar. Hastaneler bünyesindeki 'VIP Lounge' alanları ve beş yıldızlı otel konforundaki suit odalar, projenin premium kitlesi için tasarlanmıştır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Finansal yatırım gücüyle tıbbi teknolojinin en son versiyonlarını (Versius Robot, PET-CT Discovery) bünyesinde barındırmasıdır. <strong>Eksik Yönü:</strong> Hizmet kalitesi 'Ultra-Premium' seviyesinde olduğu için maliyetler bölge ortalamasının üzerindedir ancak sonuç odaklı cerrahide rakipsizdir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
        phone: "+994 22 352 10 10", 
        tr: {
            hospName: "Naftalan Sağlık Merkezi & Nahçıvan Duzdağ Fizyoterapi Merkezi",
            shortDesc: "🛢️ Dünyanın tek petrol şifası (Naftalan) ve devasa tuz mağaraları (Speleoterapi) ile doğal medikal fenomenler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🧪 Naftenik Petrol ve Kristal Tuzların Biyolojik Etkisi</h4>
                <p>Azerbaycan, doğanın tıbba sunduğu en nadir iki maddeye sahiptir: Naftalan Petrolü ve Nahçıvan Kaya Tuzu. Bunlar projenin 'Ekstrem Şifa' modülünün temel taşlarıdır.</p>
                <ul>
                    <li>🛢️ <strong>Naftalan Petrolü (Sıvı Altın):</strong> Yanmayan petrol banyoları ile sedef, egzama ve iltihaplı romatizmalarda %90'ın üzerinde klinik iyileşme; hücre yenileyici ve doğal analjezik etki.</li>
                    <li>🧂 <strong>Speleoterapi (Tuz Mağarası):</strong> Nahçıvan Duzdağ'da 300 metre yer altında konaklayarak astım, bronşit ve KOAH rehabilitasyonu; alerjensiz ve negatif iyon yüklü hava ile akciğer resetleme.</li>
                    <li>🌡️ <strong>Mineralli İstisu (Gence/Kelbecer):</strong> Yüksek sodyum-bikarbonatlı sularla sindirim sistemi, safra yolları ve metabolik hastalıkların termal kürlerle tedavisi.</li>
                    <li>🧖‍♂️ <strong>Mud Volcano (Çamur Volkanı) Terapisi:</strong> Absheron çamur volkanlarından elde edilen organik peloidler ile cilt bariyeri onarımı ve kronik kas ağrılarında mineral emilimi.</li>
                </ul>
                
                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Naftalan petrolü dünyada tektir ve benzeri yoktur. <strong>Güçlü Yönü:</strong> Kimyasal ilaçlara dirençli olan kronik deri ve eklem hastalıklarında 'Doğal İlaç' etkisi yaratmasıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=800",
        phone: "+994 12 400 00 00", 
        tr: {
            hospName: "Bakü Premium Geriatri Merkezleri ve Absheron Uzun Ömürlü Konutları",
            shortDesc: "👴 Hazar'ın iyotlu havasında saygın ve uzun ömür; 'Aksakal' kültürüyle harmanlanmış 7/24 medikal bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Geriatri ve Kafkasya Uzun Yaşam Diyeti</h4>
                <p>Azerbaycan, yaşlı nüfusun dinçliği ile bilinen bir bölgedir. Projemizdeki yaşlı bakım modülü, bu doğal genetik mirası modern tıp protokolleri ile birleştirir.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik Check-Up ve Dijital Takip:</strong> Kronik hastalık (diyabet, kalp, tansiyon) yönetimi için hastane otomasyonuna bağlı giyilebilir sağlık teknolojileri.</li>
                    <li>🥗 <strong>Fitoterapötik Beslenme:</strong> Bölgenin tescilli nar (antioksidan), safran ve ceviz zengini diyetleri; bilişsel fonksiyonları koruyan 'Beyin Dostu' menüler.</li>
                    <li>🌬️ <strong>Absheron İklim Terapisi:</strong> Deniz seviyesindeki yüksek oksijen ve iyot oranı sayesinde kalp yetmezliği ve uyku apnesi olan yaşlılarda doğal stabilizasyon.</li>
                    <li>🧠 <strong>Mental Zindelik ve Sosyalleşme:</strong> Satranç kulüpleri, Muğam müzik terapisi ve 'Kuşaklararası Aktif Yaşam' projeleri ile depresyon ve demans riskine karşı aktif savunma.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bakü'deki özel bakım tesisleri 'Saray Konsepti'ndedir. Yaşlılar burada kendilerini bir hastada değil, bir aile ortamında, en üst düzey medikal güvenlikte hissederler.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800",
        phone: "+994 12 599 08 00",
        tr: {
            hospName: "Devlet Rehabilitasyon Merkezi ve Modern FTR Üniteleri",
            shortDesc: "♿ Dış iskelet (Exoskeleton) ve VR destekli nöro-rehabilitasyon; fonksiyonel geri kazanımda Kafkasya'nın lideri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Robotik Fizyoterapi ve Fonksiyonel Bağımsızlık</h4>
                <p>Azerbaycan'daki rehabilitasyon merkezleri, özellikle travmatik yaralanmalar ve inme sonrası iyileşme süreçlerinde dünyanın en gelişmiş 'Giyilebilir Teknolojilerini' kullanır.</p>
                <ul>
                    <li>♿ <strong>Robotik Yürüme (Lokomat):</strong> Nörolojik hasarlı hastalarda beyne yürüme komutunu yeniden öğreten, geri bildirimli robotik sistemler.</li>
                    <li>⚙️ <strong>Exoskeleton (Dış İskelet) Terapisi:</strong> Paraplejik hastaların ayağa kalkmasını ve mobilizasyonunu sağlayan ileri teknoloji giyilebilir robotlar.</li>
                    <li>🦵 <strong>Su İçi Rehabilitasyon (Hidroterapi):</strong> Isı ayarlı medikal havuzlarda, yerçekimsiz ortam hissi ile eklemleri yormadan yapılan kas güçlendirme seansları.</li>
                    <li>🧒 <strong>Pediatrik Duyu Bütünleme:</strong> Özel gereksinimli çocuklar için tasarlanmış Snoezelen odaları, konuşma terapisi ve ergoterapi üniteleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Rehabilitasyon süreci Azerbaycan'da 'Askeri Disiplin' ve 'Şefkat' dengesiyle yürütülür. <strong>Güçlü Yönü:</strong> Teknolojik parkurun yeniliği ve vaka tecrübesinin yüksekliğidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
        phone: "+994 24 205 00 00",
        tr: {
            hospName: "Chenot Palace Gabala & Fairmont Baku Wellness",
            shortDesc: "🧖‍♂️ 'Vücut Resetleme' (Body Restart) üssü; medikal detoks, anti-aging ve bütünsel ruhsal arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Global Wellness ve Biyolojik Yenilenme Bilimi</h4>
                <p>Azerbaycan (Gebele), dünyanın en prestijli detoks merkezlerinden birine (Chenot Palace) ev sahipliği yapar. Burada wellness, bir lüks değil, biyolojik bir zorunluluk (Biyohacking) olarak ele alınır.</p>
                <ul>
                    <li>🧬 <strong>Chenot Metodu (Detoks):</strong> Kişiye özel DNA ve metabolizma analizi sonrası uygulanan hücresel temizlik, ozon terapi ve hidromasaj kürleri.</li>
                    <li>💆 <strong>Enerji Meridyen Terapileri:</strong> Akupunktur noktaları üzerinden yapılan özel rezonans masajları ile vücut frekansının dengelenmesi.</li>
                    <li>🧖‍♂️ <strong>Kriyoterapi (-110°C):</strong> Tüm vücut soğuk oda terapisi ile inflamasyonun azaltılması, metabolizmanın şoklanması ve mutluluk hormonu artışı.</li>
                    <li>🧘 <strong>Mental Detoks ve Meditasyon:</strong> Hazar Denizi veya Kafkas Dağları manzaralı sessizlik odalarında, uzmanlar eşliğinde yürütülen mindfulness programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Azerbaycan, Wellness turizminde 'Elit Segment' için dünyadaki en güçlü 5 destinasyondan biridir. Tesisler sadece dinlenme değil, 'Hücresel Gençleşme' vaat eder.</p>
            </div>`
        }
    }
},
    "KAZAKISTAN": {
    meta: {
        status: "Strategic Central Asian Hub",
        hubs: ["Astana", "Almaty", "Shymkent", "Aktau", "Burabay"],
        specialty: "Advanced Neurosurgery, Cardiac Care, Alpin Therapy, Mineral Detox"
    },
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800", 
        phone: "+7 7172 70 60 60",
        tr: {
            hospName: "Ulusal Bilimsel Kardiyokerrahi Merkezi (Astana) & Almatı Devlet Merkez Hastanesi",
            shortDesc: "🏥 Orta Asya'nın en ileri cerrahi kompleksi; JCI akreditasyonlu kalp nakli merkezleri ve robotik beyin cerrahisi üniteleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Teknolojik Cerrahi ve Akademik Tıp Disiplini</h4>
                <p>Kazakistan, özellikle Astana (Nur-Sultan) merkezli 'Ulusal Tıp Holding' bünyesindeki hastanelerle, cerrahi altyapısını dünya devleri (Almanya, ABD) seviyesine taşımıştır. Projenin 'Avrasya Cerrahi Kapısı' burasıdır.</p>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler (KVC) Mükemmeliyet:</strong> Yapay kalp (LVAD) implantasyonu, kalp nakli ve pediatrik kardiyokerrahi alanında Orta Asya'nın tek yetkin merkezi; hibrit ameliyathanelerde kompleks damar onarımları.</li>
                    <li>🧠 <strong>İleri Nöroşirürji ve Robotik Müdahale:</strong> Beyin tümörlerinin navigasyonel mikroskobik rezeksiyonu; Parkinson ve epilepsi cerrahisinde kullanılan 'Deep Brain Stimulation' (Beyin Pili) teknolojileri.</li>
                    <li>🦴 <strong>Modern Ortopedi ve Robotik Artroplasti:</strong> Diz ve kalça protezi operasyonlarında bilgisayar destekli navigasyon; sporcu yaralanmalarında ileri düzey artroskopik yöntemler.</li>
                    <li>🔬 <strong>Onkolojik Radyocerrahi:</strong> Gamma Knife ve CyberKnife teknolojileri ile tümörlerin cerrahi olmayan yöntemlerle imhası; nükleer tıp ve PET-CT ile erken teşhis protokolleri.</li>
                    <li>🤱 <strong>Yüksek Riskli Perinatoloji ve IVF:</strong> Genetik tarama laboratuvarları (PGD) ile desteklenen modern tüp bebek merkezleri ve prematüre bebek cerrahisi üniteleri.</li>
                    <li>👁️ <strong>Lazer Göz Cerrahisi:</strong> Femto-LASIK ve SMILE yöntemleri ile ileri düzey kornea tedavileri; katarakt cerrahisinde akıllı lens uygulamaları.</li>
                    <li>🦷 <strong>Maksillofasiyal (Çene) Cerrahi:</strong> Travma sonrası yüz rekonstrüksiyonu, dijital implantoloji ve Hollywood Smile estetik uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Lojistik ve VIP Sağlık Diplomasisi</h4>
                <p>Kazakistan, 'Modern İpek Yolu' üzerindeki konumuyla Çin ve Rusya arasındaki en güvenli medikal koridordur. Astana ve Almatı havalimanları, hava ambulansı trafiği için 24/7 açık olup, VIP hastalar için diplomatik sağlık pasaportu ve lüks konaklama entegrasyonu sunar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Devletin tıbbi teknolojiye sağladığı devasa fonlar sayesinde cihazların sürekli güncellenmesi ve uzmanların yurt dışında (özellikle İsrail ve Almanya) eğitim almasıdır. <strong>Eksik Yönü:</strong> Bozkır bölgelerindeki nüfus dağınıklığı nedeniyle hizmetin %80'i Astana ve Almatı odaklıdır; bu da projenin hedeflediği 'Sağlık Turizmi' için bu iki şehri kritik kılar.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800",
        phone: "+7 71636 411 05", 
        tr: {
            hospName: "Burabay (Borovoe) Sağlık Kompleksleri & Sariagaş Termal Tesisleri",
            shortDesc: "🌡️ 'Kazakistan'ın İsviçre'si' Burabay'da çam havası ve mineralli göl şifası; Sariagaş'ta derin yer altı kaynakları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineralizasyon ve Klimaterapi (Hava Şifası)</h4>
                <p>Kazakistan'ın termal gücü, yer altı sularının zenginliği ile bozkırın ve dağların temiz havasının sentezinden oluşur. Özellikle mide ve deri hastalıklarında 'Kür Tıbbı' lideridir.</p>
                <ul>
                    <li>🧪 <strong>Sariagaş Mineralli Suları:</strong> Sodyum-bikarbonat zengini sular; gastrit, ülser ve safra yolları hastalıklarında içme kürleri ile sindirim sistemini resetleme etkisi.</li>
                    <li>🧖‍♂️ <strong>Peloid (Çamur) Terapisi:</strong> Tuzlu göllerden (Alakol, Balkaş) elde edilen yüksek mineralli çamurlar; sedef, egzama ve kronik cilt lezyonlarında hücre yenileyici güç.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kalsiyum ve magnezyum yüklü termal banyolar; kireçlenme, bel fıtığı ve siyatik ağrılarında doğal inflamasyon giderici süreçler.</li>
                    <li>🌬️ <strong>Kımız ve Şubat Terapisi:</strong> Geleneksel Kazak tıbbı ile entegre; akciğer hastalıkları ve bağışıklık sistemi için fermente at ve deve sütü kürleri.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Burabay bölgesi, 'Doğal Detoks' için dünyadaki en temiz havasına sahip alanlardan biridir. <strong>Güçlü Yönü:</strong> Hem modern konaklama hem de geleneksel şifa yöntemlerinin bir arada sunulmasıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=800",
        phone: "+7 727 330 00 00", 
        tr: {
            hospName: "Almatı Premium Geriatri ve Rehabilitasyon Merkezi & Yaşlı Yaşam Köyleri",
            shortDesc: "👴 Tanrı Dağları'nın eteğinde, düşük nem ve yüksek oksijenle aktif yaşlanma; medikal denetimli saygın hayat.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzun Ömür: Alpin Terapisi ve Geriatrik Takip</h4>
                <p>Kazakistan'da yaşlı bakımı, bölgenin 'Hürmet' kültürü ile modern tıbbın 'Geriatrik Takip' sistemlerinin birleşimidir. Almatı'nın dağ havası, yaşlılar için doğal bir gençleşme etkisidir.</p>
                <ul>
                    <li>🏥 <strong>Kronik Hastalık İzleme Sistemi:</strong> Kalp yetmezliği, hipertansiyon ve Alzheimer vakaları için 7/24 merkezden izlenen medikal altyapı.</li>
                    <li>🥗 <strong>Doğal ve Güçlü Beslenme:</strong> Bozkırın doğal et, süt ve tahıl ürünleri; bağışıklık sistemini destekleyen 'Altın Kök' (Rhodiola) ekstreleri.</li>
                    <li>🌬️ <strong>Solunum Konforu:</strong> Dağ eteklerindeki yerleşimler sayesinde KOAH ve astım hastası yaşlılarda akciğer kapasitesinin %20 oranında doğal artışı.</li>
                    <li>🧠 <strong>Bilişsel Canlılık:</strong> Geleneksel el sanatları, müzik terapisi (Dombra) ve geniş sosyal alanlar ile yaşlılarda izolasyonun ve demansın önlenmesi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kazakistan, yaşlılar için "Saygın ve Güvenli" bir limandır. <strong>Güçlü Yönü:</strong> Tesislerin geniş araziler üzerinde, doğayla iç içe ve modern tıbbi donanımla çevrili olmasıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800",
        phone: "+7 7172 70 60 60",
        tr: {
            hospName: "Ulusal Çocuk Rehabilitasyon Merkezi (Astana) & Ortopedi Birimleri",
            shortDesc: "♿ Robotik dış iskeletler ve VR teknolojisiyle engelsiz yaşam; nörolojik geri kazanımda Avrasya otoritesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Robotik Rehabilitasyon ve Nöroplastisite Gelişimi</h4>
                <p>Kazakistan, özellikle çocuk ve yetişkin nöro-rehabilitasyonunda 'Lokomat' ve 'Armeo' gibi robotik cihazların kullanımında bölge lideridir.</p>
                <ul>
                    <li>♿ <strong>Robotik Yürüme Eğitimi:</strong> Omurilik yaralanmaları ve felç sonrası beyne yürüme yetisini yeniden hatırlatan robotik asistanlar.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik (VR) Rehabilitasyonu:</strong> Motor becerilerin geliştirilmesi için oyunlaştırılmış tedavi seansları ve bilişsel güçlendirme.</li>
                    <li>🦵 <strong>Hidroterapi ve Uzay Terapisi:</strong> Yerçekimsiz askı sistemleri (Adeli suit) ile kasları yormadan eklem mobilizasyonu sağlayan ileri fizik tedavi.</li>
                    <li>🧒 <strong>Serebral Palsi ve Otizm Destek:</strong> Duyu bütünleme odaları, konuşma terapisi ve aile psikolojik danışmanlık hizmetleri ile bütünsel yaklaşım.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kazakistan, rehabilitasyon alanında 'Son Teknoloji'yi en hızlı uygulayan ülkelerden biridir. <strong>Güçlü Yönü:</strong> Tedavi protokollerinin akademik bir disiplinle (Üniversite hastaneleri denetiminde) yürütülmesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        phone: "+7 727 271 22 22",
        tr: {
            hospName: "Chimbulak Mountain Resort SPA & Ritz-Carlton Almaty Wellness",
            shortDesc: "🧖‍♂️ Dağ zirvelerinde lüks arınma; Kazak hamamı (Montsha) ritüelleri ve modern Wellness terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Bozkırın Wellness Felsefesi ve Dağ Detoksu</h4>
                <p>Kazakistan'da Wellness, geleneksel 'Montsha' (buhar odası) kültürü ile İsviçre tipi 'Alpin Detoks' yöntemlerinin elit bir karışımıdır.</p>
                <ul>
                    <li>🧼 <strong>Montsha (Geleneksel Hamam):</strong> Huş ağacı dalları (venik) ile yapılan, kan dolaşımını tetikleyen ve cildi tazeleyen derin arınma seansı.</li>
                    <li>💆 <strong>Dağ Balı ve Bitki Masajları:</strong> Tanrı Dağları'nın şifalı otları ve organik balları ile yapılan, vücut direncini artıran profesyonel masajlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Kar Banyosu:</strong> Yüksek ısıdan soğuk şoka geçişle bağışıklık sistemini güçlendiren termal döngüler.</li>
                    <li>😌 <strong>Mental Zen Alanları:</strong> 2200 metre rakımda, sessizlik içinde sunulan yoga, meditasyon ve ruhsal arınma kampları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kazakistan'da Wellness hizmeti, özellikle Almatı çevresindeki dağ tesislerinde 'Ultra-Lüks' bir yapıdadır. Projenin 'Premium' üyeleri için eşsiz bir dinlenme durağıdır.</p>
            </div>`
        }
    }
},
   "ÖZBEKISTAN": {
    meta: {
        status: "Strategic Silk Road Medical Partner",
        hubs: ["Tashkent", "Samarkand", "Bukhara", "Namangan", "Fergana"],
        specialty: "Avicenna Traditional Medicine, Modern Oncology, High-Altitude Rehab, Digital Health"
    },
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800", 
        phone: "+998 71 209 03 03",
        tr: {
            hospName: "Taşkent Cumhuriyet Uzmanlaşmış Cerrahi Merkezi (Vakhidov) & AKFA Medline",
            shortDesc: "🏥 Orta Asya'nın en büyük özel hastane kompleksleri; JCI standartlarında robotik cerrahi ve ileri organ nakli merkezleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Dijital Dönüşüm ve Kompleks Cerrahi Operasyonlar</h4>
                <p>Özbekistan, 'Sağlık 2030' vizyonu çerçevesinde Taşkent'i bölgenin medikal teknoloji merkezine dönüştürmüştür. Özellikle Türk cerrahlarla yapılan ortak operasyonlar sayesinde, cerrahi başarı oranları Avrupa standartlarına ulaşmıştır.</p>
                <ul>
                    <li>🫀 <strong>İleri Kardiyoloji ve Kalp Nakli:</strong> Yapay kalp destek cihazları (LVAD), kompleks kapak tamirleri ve yenidoğan kalp cerrahisinde (Vakhidov Merkezi) %95 başarı oranı.</li>
                    <li>☢️ <strong>Onkolojik Cerrahi ve Radyoterapi:</strong> En yeni TrueBeam ve Halcyon radyoterapi cihazları; solid tümörlerin robotik cerrahisi ve hedefe yönelik akıllı ilaç tedavileri.</li>
                    <li>🧠 <strong>Mikro-Nöroşirürji ve Navigasyon:</strong> Beyin sapı tümörleri, anevrizma klipleme ve epilepsi cerrahisinde kullanılan dijital navigasyon sistemleri.</li>
                    <li>🦴 <strong>Ortopedik Rekonstrüksiyon:</strong> Kalça ve diz eklemi protezlerinde 3D yazıcı destekli kişiye özel implant üretimi ve robotik kol yardımlı cerrahi.</li>
                    <li>🔬 <strong>Organ ve Doku Nakli:</strong> Canlıdan canlıya karaciğer ve böbrek nakli operasyonlarında bölgenin en deneyimli ekipleri ve modern immünoloji laboratuvarları.</li>
                    <li>🤱 <strong>Modern Üreme Sağlığı (IVF):</strong> Embriyo genetik taraması (PGT) ve mikro-enjeksiyon yöntemlerinde yüksek gebelik oranları sunan 'Anne ve Çocuk' merkezleri.</li>
                    <li>🦷 <strong>Maksillofasiyal ve Estetik Cerrahi:</strong> Dijital diş hekimliği, çene eklemi rekonstrüksiyonu ve kapsamlı vücut şekillendirme operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Bölgesel Kavşak ve Medikal Diplomasi</h4>
                <p>Özbekistan, komşu ülkelerden (Tacikistan, Kırgızistan, Afganistan) gelen yoğun hasta trafiğini yöneten bir 'Sağlık Terminali'dir. Taşkent'teki serbest sağlık bölgeleri, yabancı hastalar için hızlı vize ve entegre konaklama imkanları sağlar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Özel sektörün (AKFA vb.) tıbbi cihaz parkuruna yaptığı devasa yatırımlar ve Türkiye ile olan güçlü akademik iş birliğidir. <strong>Eksik Yönü:</strong> Hızlı gelişime rağmen bazı taşra bölgelerinde modern tesislere erişim sınırlıdır; bu nedenle projemiz doğrudan Taşkent ve Semerkant merkezli 'Elit Hub'lara odaklanır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1507652313519-d451e12d5940?q=80&w=800",
        phone: "+998 71 231 07 45", 
        tr: {
            hospName: "Humson Buloq & Chartak (Çartak) Resorlar & Şifabaxsh Suvlar",
            shortDesc: "🌡️ Tanrı Dağları'nın eteklerinde mineral zengini kaynaklar; mide, deri ve sinir sistemi için doğal arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Su Analizi ve Fitoterapötik Yaklaşım</h4>
                <p>Özbekistan termal tıbbı, sadece su ile değil, bölgenin zengin bitki örtüsü (Fitoterapi) ve geleneksel İbn-i Sina yöntemleriyle birleştirilir.</p>
                <ul>
                    <li>🧪 <strong>Çartak İyot-Bromlu Suları:</strong> Tiroid hastalıkları, metabolizma bozuklukları ve kronik stres yönetiminde dünya çapında tanınan mineral konsantrasyonu.</li>
                    <li>🧖‍♂️ <strong>Humson Buloq Klimaterapisi:</strong> Yüksek oksijenli dağ havası ve mineralli su banyoları ile kalp ve akciğer hastaları için doğal stabilizasyon.</li>
                    <li>🦴 <strong>Kas-İskelet Sistemi Şifası:</strong> Kükürtlü çamur banyoları ve termal sularla desteklenen kireçlenme, artrit ve post-operatif iyileşme kürleri.</li>
                    <li>🌿 <strong>İbn-i Sina Ekolü Detoksu:</strong> Geleneksel bitkisel yağlar, hacamat ve özel diyetlerle desteklenen vücut arınma protokolleri.</li>
                </ul>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800",
        phone: "+998 71 200 00 00", 
        tr: {
            hospName: "Taşkent Premium Yaşlı Yaşam Merkezleri & Semerkant Sosyal Rehabilitasyon",
            shortDesc: "👴 İpek Yolu bilgeliğiyle huzurlu yaşlanma; geniş bahçeler, medikal denetim ve aile sıcaklığında bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Adaptasyon ve Geleneksel Geriatri</h4>
                <p>Özbekistan'da yaşlılık, toplumun en saygın dönemi (Aksakallık) olarak görülür. Tesisler bu kültürel mirası modern geriatrik tıp ile harmanlar.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik İzleme ve Nörolojik Destek:</strong> Alzheimer ve Demans hastaları için özel tasarlanmış, güvenli ve bilişsel uyarıcı yaşam alanları.</li>
                    <li>🥗 <strong>Özbek Gastronomisiyle Sağlıklı Diyet:</strong> Yerel meyveler (kavun, üzüm) ve doğal tahıllarla hazırlanan, yaşlı metabolizmasına uygun antioksidan zengini beslenme.</li>
                    <li>🌬️ <strong>Doğa Terapisi:</strong> Çay bahçeleri (Choyhona) ve geniş yeşil alanlarda yürütülen sosyal faaliyetler ile depresyon ve yalnızlık riskine karşı savunma.</li>
                    <li>🧠 <strong>Aktif Zihin Programları:</strong> El sanatları, geleneksel müzik seansları ve kuşaklar arası buluşmalarla mental kapasitenin korunması.</li>
                </ul>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=800",
        phone: "+998 71 209 03 03",
        tr: {
            hospName: "Milli Reabilitasiya Markazi (Ulusal Rehabilitasyon Merkezi) & AKFA FTR",
            shortDesc: "♿ Robotik rehabilitasyon ve hidroterapi ile engelleri aşan teknoloji; bireysel gelişimde yeni nesil yaklaşımlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Hareket ve Robotik Asistanlar</h4>
                <p>Taşkent, Orta Asya'da robotik yürüme ve uzay terapisi (Adeli suit) gibi yöntemlerin en yaygın kullanıldığı merkezlerden biridir.</p>
                <ul>
                    <li>♿ <strong>Robotik Yürüme (Lokomat):</strong> Nörolojik kaynaklı yürüme bozukluklarında beyne hareket komutunu yeniden öğreten cihaz destekli fizik tedavi.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik ve Biofeedback:</strong> Hastanın motivasyonunu artıran, iyileşme sürecini dijital verilerle takip eden modern egzersiz odaları.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Mobilizasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve su içi direnç egzersizleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Gelişim Birimleri:</strong> Serebral Palsi ve gelişimsel gecikmeler için duyu bütünleme, oyun terapisi ve ergoterapi hizmetleri.</li>
                </ul>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        phone: "+998 71 232 00 00",
        tr: {
            hospName: "Tashkent City Wellness & Amansay Mountain Resort",
            shortDesc: "🧖‍♂️ Modern Şehir Wellness ritüelleri; geleneksel Özbek hamamı ve dağ havasıyla bütünleşen detoks seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 İpek Yolu Arınma Ritüelleri ve Medikal Detoks</h4>
                <p>Özbekistan'da Wellness, vücudun dört temel elementini (Ateş, Su, Hava, Toprak) dengelemeye odaklanan bütünsel bir felsefeye dayanır.</p>
                <ul>
                    <li>🧼 <strong>Özbek Hamamı ve Kese:</strong> Geleneksel ipek keselerle yapılan, cildi ölü hücrelerden arındıran ve kan akışını canlandıran kadim ritüeller.</li>
                    <li>💆 <strong>Aromaterapi ve Esansiyel Yağlar:</strong> Bölgenin bitki çeşitliliğinden (Gül, Lavanta, Ardıç) elde edilen yağlarla yapılan zihinsel rahatlama masajları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Fitobar:</strong> Bitki çayları (Fitobarlar) ile desteklenen, toksin atılımını hızlandıran buhar seansları.</li>
                    <li>😌 <strong>Dağ Meditasyonu:</strong> Çimgan ve Amansay bölgelerindeki tesislerde sunulan, stres seviyesini sıfırlayan huzur kampları.</li>
                </ul>
            </div>`
        }
    }
},
   "TÜRKMENISTAN": {
    meta: {
        status: "Strategic Central Asian Healthcare Fortress",
        hubs: ["Ashgabat", "Awaza", "Mary", "Turkmenabat", "Dashoguz"],
        specialty: "Mega-Medical Complexes, Caspian Rehabilitation, Desert Thermal Therapy, International Cardiology"
    },
    surgery: {
        img: "https://images.unsplash.com/photo-1512675845127-117a24d99d8b?q=80&w=800", 
        phone: "+993 12 48 90 01",
        tr: {
            hospName: "Aşkabat Uluslararası Kardiyoloji Merkezi & Uluslararası Cerrahi ve Endokrinoloji Hastanesi",
            shortDesc: "🏥 Dünyanın en modern ve en büyük beyaz mermer tıp şehirlerinden biri; Alman teknolojisiyle donatılmış ileri cerrahi üsleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🏛️ Mimari Görkem ve Alman Teknolojisiyle Cerrahi Mükemmeliyet</h4>
                <p>Türkmenistan, özellikle Aşkabat'taki 'Sağlık Yolu' bölgesinde yer alan ihtisas hastaneleriyle, her branş için ayrı bir 'Saray-Hastane' konsepti geliştirmiştir. Tüm altyapı Siemens, Philips ve Dräger gibi dünya devlerinin en son model cihazlarıyla (2025-2026 revizyonlu) donatılmıştır.</p>
                <ul>
                    <li>🫀 <strong>Uluslararası Kalp Merkezi (KVC):</strong> Bölgenin en büyük kardiyoloji kampüsü; kalp kapakçığı değişimleri, kompleks koroner arter cerrahisi ve çocuk kalp cerrahisinde (Pediatrik KVC) sıfıra yakın komplikasyon oranı.</li>
                    <li>🧠 <strong>İleri Nöroşirürji ve Omurga Cerrahisi:</strong> İntraoperatif MR (ameliyat anında MR) teknolojisi ile beyin tümörlerinde kusursuz temizlik; mikro-cerrahi yöntemlerle bel ve boyun fıtığı operasyonlarında 24 saatte mobilizasyon.</li>
                    <li>🔬 <strong>Endokrinoloji ve Metabolik Cerrahi:</strong> Diyabet cerrahisi ve ileri düzey tiroid operasyonlarında Avrupa standartlarında klinik protokoller; nükleer tıp ile hedeflenmiş tedavi.</li>
                    <li>🦴 <strong>Robotik Ortopedi ve Travmatoloji:</strong> Büyük kemik kırıkları, kompleks eklem protezleri ve spor hekimliği alanında robotik kol destekli (Mako/NAVIO) hassas müdahaleler.</li>
                    <li>☢️ <strong>Onkoloji ve Radyoterapi Şehri:</strong> Lineer hızlandırıcılar (Varian Edge), Braterapi ve PET-CT birimleriyle kanser tedavisinde Orta Asya'nın en güncel radyoterapi parkuru.</li>
                    <li>🤱 <strong>Modern Doğum ve Genetik Tanı:</strong> Pre-implantasyon genetik tanı (PGD) destekli tüp bebek (IVF) merkezleri ve 4. basamak yenidoğan yoğun bakım üniteleri.</li>
                    <li>🦷 <strong>Uluslararası Diş Hastanesi:</strong> Çene cerrahisi, implantoloji ve zirkonyum-porselen estetik uygulamalarında dijital laboratuvar entegrasyonu.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 VIP Sağlık Turizmi ve "Avaza" Medikal Serbest Bölgesi</h4>
                <p>Hazar Denizi kıyısındaki Avaza bölgesi, yabancı hastalar için vize muafiyeti sağlayan özel bir 'Sağlık ve Turizm Bölgesi'dir. Buradaki klinikler, hastaya ameliyat sonrası 7 yıldızlı tatil konforunda iyileşme imkanı sunar. Aşkabat Havalimanı, medikal jetler için özel terminallere sahiptir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanelerin her birinin belirli bir branşta (Göz, Kalp, Onkoloji vb.) dünyadaki en iyi teknolojiye ve en geniş fiziksel alana sahip olmasıdır. <strong>Eksik Yönü:</strong> Bu teknoloji devasa olmasına rağmen, uzman kadro genellikle yurt dışında (Türkiye ve Almanya) eğitim almış elit bir gruptan oluştuğu için randevu sistemleri bu profesyoneller üzerinden planlanır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?q=80&w=800",
        phone: "+993 12 39 00 33", 
        tr: {
            hospName: "Mollakara (Mollagara) Sanatoryumu & Yılı Suv (Yılısuv) Kaplıcaları",
            shortDesc: "🌡️ Karakum Çölü'nün kalbinden ve Karaboğaz Gölü'nden gelen mucizevi çamur ve termal su kürleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Kompozisyonu ve "Siyah Altın" Çamur Terapisi</h4>
                <p>Türkmenistan'ın termal gücü, dünyaca ünlü Mollakara Çamuru'ndan gelir. Bu çamur, minerolojik yapısı bakımından Ölü Deniz (Lut Gölü) çamuruyla yarışacak düzeyde yüksek magnezyum ve kalsiyum içerir.</p>
                <ul>
                    <li>🧪 <strong>Mollakara Peloid (Çamur) Kürü:</strong> Eklem iltihapları, kireçlenme ve özellikle kadın-erkek kısırlığında (pelvik inflamatuar hastalıklar) hormon regülasyonu sağlayan doğal ısı-mineral terapisi.</li>
                    <li>🚿 <strong>Yılısuv Sülfürlü Kaynakları:</strong> Cilt hastalıkları (sedef, egzama), metabolik bozukluklar ve toksin atımı için sülfür ve iyot zengini doğal yer altı suları.</li>
                    <li>🦴 <strong>Romatizmal Rehabilitasyon:</strong> Kas spazmlarını çözen, kronik ağrıları dindiren ve kemik yoğunluğunu destekleyen termal banyo döngüleri.</li>
                    <li>🌬️ <strong>Çöl Klimaterapisi:</strong> Karakum Çölü'nün kuru ve temiz havası ile birleşen tuz odası terapileri; akciğer ve üst solunum yolu rahatsızlıkları için doğal rehabilitasyon.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Mollakara, Orta Asya'da 'Doğal Şifa' denilince akla gelen ilk referans noktasıdır. Projenin 'Dermatolojik Arınma' modülü için en güçlü adaydır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1541829070764-84a7d30dee7d?q=80&w=800",
        phone: "+993 12 40 00 00", 
        tr: {
            hospName: "Aşkabat Sosyal Yaşam ve Emekli Bakım Kompleksleri & Gökdere Dinlenme Merkezleri",
            shortDesc: "👴 Gökdere dağlarının serinliğinde lüks yaşlanma; aktif hayat felsefesi ve yüksek standartlı medikal otelcilik.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzun Yaşam (Long-Life) ve Dağ Havası Destekli Geriatri</h4>
                <p>Türkmenistan'da yaşlılık, devlet güvencesi ve kültürel saygınlıkla birleşir. Gökdere mevkii, yüksek oksijen oranıyla yaşlıların fiziksel ve ruhsal sağlığını korumak için doğal bir kliniktir.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik İzleme ve Rehabilitasyon:</strong> Kalp, şeker ve tansiyon hastası yaşlılar için hastane otomasyonuna bağlı, her oda için özel medikal asistan desteği.</li>
                    <li>🥗 <strong>Organik Türkmen Gastronomisi:</strong> Çölde yetişen meyveler, kavunlar (vitamin deposu) ve doğal et ürünleriyle desteklenen, bağışıklık sistemini tazeleyen beslenme planları.</li>
                    <li>🌬️ <strong>Klimatik Stabilizasyon:</strong> Dağ eteklerindeki yerleşimlerde, düşük nem oranı sayesinde kronik solunum yolu hastası yaşlılarda konforlu nefes alışverişi.</li>
                    <li>🧠 <strong>Aktif Sosyalleşme:</strong> Türkmen halı dokuma atölyeleri, müzik sınıfları ve doğa yürüyüşleri ile Alzheimer ve izolasyon riskine karşı koruyucu sosyal çevre.</li>
                </ul>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
        phone: "+993 12 48 90 01",
        tr: {
            hospName: "Uluslararası Rehabilitasyon Merkezi (Aşkabat) & Avaza Fizik Tedavi Üniteleri",
            shortDesc: "♿ Robotik dış iskeletler, sanal gerçeklik (VR) terapileri ve su içi rehabilitasyonda dünya standartları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Teknolojiyle Engelleri Aşmak: Robotik Nöro-Rehabilitasyon</h4>
                <p>Aşkabat'taki merkezler, fizik tedavi alanında Avrupa'nın en büyük cihaz parkurlarından birine sahiptir. Özellikle 'Robotik Yürüme' (Lokomat) ve 'Kol Robotları' (Armeo) konusunda uzmanlaşmış akademik ekipler bulunur.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Geri Kazanım:</strong> Felç (inme), MS ve omurilik yaralanmaları sonrası beyin-kas koordinasyonunu yeniden kuran akıllı robotik sistemler.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik ve Biofeedback:</strong> Hastanın iyileşme sürecini görselleştiren, motivasyonunu artıran ve gelişimi saniyelik kaydeden dijital odalar.</li>
                    <li>🦵 <strong>Kineziterapi ve Hidroterapi:</strong> Isı ayarlı medikal havuzlarda, suyun kaldırma kuvveti kullanılarak yapılan post-operatif güçlendirme çalışmaları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklara özel tasarlanmış, oyunlaştırılmış terapi üniteleri ve ergoterapi parkurları.</li>
                </ul>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        phone: "+993 243 7 00 00",
        tr: {
            hospName: "Avaza Yelken Yacht Club Wellness & Berzengi Şifa Noktaları",
            shortDesc: "🧖‍♂️ Hazar Denizi kıyısında Thalasso (Deniz) terapisi ve modern SPA ritüelleriyle lüks arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Thalasso Terapi ve Hazar Wellness Dokunuşu</h4>
                <p>Avaza bölgesindeki lüks tesisler, Hazar Denizi'nin mineralli suyunun ısıtılarak tedavi amaçlı kullanıldığı (Thalassotherapy) Orta Asya'daki tek lüks destinasyondur.</p>
                <ul>
                    <li>🧼 <strong>Türkmen Hamamı ve Arınma:</strong> Geleneksel buhar seansları, bitkisel kese ritüelleri ve mineralli su şokları.</li>
                    <li>💆 <strong>Medikal SPA ve Detoks:</strong> Uzman terapistler eşliğinde lenf drenaj masajları, sıcak taş terapileri ve vücut sarmalama kürleri.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Kriyoterapi:</strong> Toksinlerden arınmayı sağlayan yüksek ısılı saunalar ve ardından uygulanan metabolizma hızlandırıcı soğuk terapiler.</li>
                    <li>😌 <strong>Deniz Kenarı Yoga ve Meditasyon:</strong> Hazar'ın huzurlu atmosferinde, profesyonel eğitmenler eşliğinde zihinsel sessizlik ve arınma kampları.</li>
                </ul>
            </div>`
        }
    }
},
   "KIRGIZISTAN": {
    meta: {
        status: "Strategic High-Altitude Medical Partner",
        hubs: ["Bishkek", "Osh", "Cholpon-Ata (Issyk-Kul)", "Karakol", "Jalal-Abad"],
        specialty: "High-Altitude Rehabilitation, Genetic Diagnostics, Natural Thermal Springs, Mountain Detox"
    },
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800", 
        phone: "+996 312 62 10 12",
        tr: {
            hospName: "Kırgız-Türk Dostluk Devlet Hastanesi & Ulusal Kardiyoloji ve Dahiliye Merkezi",
            shortDesc: "🏥 Tanrı Dağları'nın eteklerinde modern cerrahi kale; Türk-Kırgız ortaklığıyla yönetilen ileri teknoloji ameliyathaneler ve genetik laboratuvarlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🔬 İleri Segment Cerrahi ve Uluslararası Akademik İş Birliği</h4>
                <p>Kırgızistan, özellikle başkent Bişkek'te kurulan 'Kırgız-Türk Dostluk Hastanesi' ile cerrahi standartlarını dijital çağa taşımıştır. Bölge, genetik araştırmalar ve kompleks iç hastalıkları cerrahisinde Orta Asya'nın yükselen yıldızıdır.</p>
                <ul>
                    <li>🫀 <strong>Kardiyoloji ve Girişimsel KVC:</strong> Koroner anjiyografi, stent uygulamaları, kalp pili implantasyonu ve kompleks bypass operasyonlarında %96 başarı oranı; 24 saat kesintisiz anjiyo hizmeti.</li>
                    <li>🧬 <strong>Moleküler Genetik ve Tanı:</strong> Nadir hastalıkların teşhisi, kanser genetiği ve kişiye özel tedavi protokollerinde bölgenin en gelişmiş laboratuvar altyapısı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Omurga Sağlığı:</strong> Mikro-cerrahi yöntemlerle beyin tümörü operasyonları, skolyoz cerrahisi ve fıtık tedavilerinde yüksek hassasiyetli mikroskopik müdahaleler.</li>
                    <li>🦴 <strong>Modern Ortopedi ve Artroplasti:</strong> Diz ve kalça protezi uygulamalarında Avrupa menşeli implant teknolojileri ve sporcu yaralanmalarında ileri düzey artroskopi.</li>
                    <li>🤱 <strong>Üreme Sağlığı ve Perinatoloji:</strong> Modern IVF (Tüp Bebek) teknikleri ve yüksek riskli gebeliklerin takibi için 3. basamak yoğun bakım destekli doğum üniteleri.</li>
                    <li>🦷 <strong>Dijital Diş Hekimliği ve İmplantoloji:</strong> Panoramik röntgen destekli implant planlama, estetik gülüş tasarımı ve kompleks çene cerrahisi uygulamaları.</li>
                    <li>☢️ <strong>Onkolojik Takip ve Kemoterapi:</strong> Kişiye özel kemoterapi protokolleri ve solid tümörlerin cerrahi rezeksiyonunda multidisipliner konsey yaklaşımı.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Medikal Lojistik ve Yüksek Rakım Avantajı</h4>
                <p>Bişkek, Manas Havalimanı üzerinden tüm Orta Asya'ya medikal köprü kurar. Şehirdeki klinikler, yüksek rakımın getirdiği doğal alyuvar artışını (doğal doping etkisi) ameliyat sonrası iyileşme süreçlerine entegre eden özel protokoller uygular.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Türkiye ile yapılan stratejik sağlık anlaşmaları sayesinde en zorlu vakaların (Karaciğer/Böbrek nakli hazırlığı vb.) Türk hekimlerin gözetiminde Bişkek'te çözülmesidir. <strong>Eksik Yönü:</strong> Ülkenin dağlık yapısı nedeniyle kırsaldaki hastaların Bişkek merkezli 'Mega Klinikleri'ne nakli için hava ambulansı ihtiyacı yüksektir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1507652313519-d451e12d5940?q=80&w=800",
        phone: "+996 3943 4 25 10", 
        tr: {
            hospName: "Issık Göl (Isyk-Kul) Sanatoryumları & Celal-Abad Termal Suları",
            shortDesc: "🌡️ Dünyanın en büyük ikinci yüksek rakımlı gölünde 'Thalasso-Alpin' şifası; radon ve sülfür banyolarıyla hücresel yenilenme.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Tuz, Mineral ve Oksijen Sentezi: Issık Göl Mucizesi</h4>
                <p>Issık Göl, kışın bile donmayan hafif tuzlu yapısı ve 1600 metre rakımıyla dünyada benzeri olmayan bir rehabilitasyon ekosistemidir. Buradaki su ve çamur, 'Gençlik İksiri' olarak adlandırılır.</p>
                <ul>
                    <li>🧪 <strong>Radon ve Sülfür Banyoları:</strong> Özellikle kronik iltihaplı romatizma, sinir sistemi bozuklukları ve kadın hastalıklarında (infertilite destek) yüksek mineralli su kürleri.</li>
                    <li>🧖‍♂️ <strong>Issık Göl Peloid (Çamur) Terapisi:</strong> Göl tabanından çıkarılan mavi ve siyah çamurlar; sedef, egzama ve akne tedavilerinde deri bariyerini %60 oranında onaran doğal mineral takviyesi.</li>
                    <li>🦴 <strong>Kas-İskelet Sistemi Rehabilitasyonu:</strong> Suyun kaldırma kuvveti ve sıcaklığının birleşimiyle bel fıtığı, siyatik ve kireçlenme ağrılarında 10 seansta belirgin rahatlama.</li>
                    <li>🌬️ <strong>Haloterapi (Tuz Odası) ve Çam Havası:</strong> Bölgedeki iğne yapraklı ormanların oksijeni ile tuz terapilerinin birleşimi; astım ve bronşit hastaları için doğal solunum desteği.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Issık Göl kıyısındaki Çolpon-Ata ve Karakol bölgeleri, projenin 'Doğal İyileşme' modülündeki en prestijli destinasyondur. Yaz aylarında hem tatil hem de medikal kür imkanı sunar.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?q=80&w=800",
        phone: "+996 312 40 00 00", 
        tr: {
            hospName: "Bişkek Elit Geriatri Bakım Evleri & Issık Göl Yaşlı Dinlenme Kompleksleri",
            shortDesc: "👴 Tanrı Dağları'nın gölgesinde asırlık çınarlara özel bakım; düşük stres, organik beslenme ve sürekli tıbbi denetim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzun Yaşamın Sırrı: Kımız, Bal ve Alpin Havası</h4>
                <p>Kırgızistan, yaşlıların mental olarak en zinde kaldığı bölgelerden biridir. Projemizdeki yaşlı bakım sistemi, bu doğal zindeliği medikal otelcilikle birleştirir.</p>
                <ul>
                    <li>🏥 <strong>Mobil Sağlık ve Uzaktan İzleme:</strong> Dağ köylerindeki yaşlılardan lüks merkezlere kadar geniş bir ağda tansiyon, şeker ve ritim takibi.</li>
                    <li>🥗 <strong>Fitoterapötik Beslenme:</strong> Arslanbob cevizleri, beyaz bal ve taze kımız (fermente at sütü) ile desteklenen, bağışıklığı zirvede tutan geriatrik diyetler.</li>
                    <li>🌬️ <strong>Klimaterapi:</strong> Şehrin gürültüsünden uzak, yüksek oksijenli alanlarda kalp ve solunum hastası yaşlılar için ideal yaşam standartları.</li>
                    <li>🧠 <strong>Aktif Zihin ve Kültürel Bağ:</strong> Geleneksel keçe sanatı (Şirdak), Manas destanı okumaları ve kuşaklar arası etkileşimle Alzheimer riskine karşı savunma.</li>
                </ul>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=800",
        phone: "+996 312 62 10 12",
        tr: {
            hospName: "Ulusal Çocuk Rehabilitasyon Merkezi & Özel FTR Birimleri",
            shortDesc: "♿ Hareket özgürlüğü için teknolojik ve doğal yöntemlerin sentezi; uzay terapisi ve yüksek irtifa fizik tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizyoterapi ve Fonksiyonel Bağımsızlık Protokolleri</h4>
                <p>Kırgızistan'da rehabilitasyon, hastanın dayanıklılığını artıran yüksek irtifa koşullarıyla birleştirilir. Bu durum, kas gelişimini normal rakımlara göre %25 daha fazla tetikler.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon ve Robotik Destek:</strong> İnme ve travma sonrası uzman fizyoterapistler eşliğinde denge, koordinasyon ve yürüme eğitimleri.</li>
                    <li>⚙️ <strong>Uzay Terapisi (Adeli Suit):</strong> Yerçekimi etkisini düzenleyen özel giysilerle kas atrofilerinin ve duruş bozukluklarının giderilmesi.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Eklem kısıtlılıklarını gidermek için uygulanan ileri manuel teknikler ve su içi egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Özel Gelişim Birimleri:</strong> Serebral Palsi (CP) ve gelişimsel bozukluklar için duyu bütünleme, oyun terapisi ve konuşma terapisi hizmetleri.</li>
                </ul>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800",
        phone: "+996 3943 4 00 00",
        tr: {
            hospName: "Jannat Resort & Karven Four Seasons Wellness",
            shortDesc: "🧖‍♂️ Dağ zirvelerinde Zen ruhu; geleneksel Kırgız hamamı ve Issık Göl mineralli SPA deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Alpin Wellness ve Ruhsal Arınma Ritüelleri</h4>
                <p>Kırgızistan'da Wellness, doğanın en saf haliyle buluşmak demektir. Dağ esintisi ve mineralli suyun birleşimi, modern hayatın stresini saniyeler içinde yok eder.</p>
                <ul>
                    <li>🧼 <strong>Geleneksel Kırgız Hamamı:</strong> Bitkisel buhar seansları, dağ otlarıyla yapılan kese ritüelleri ve mineralli su şokları.</li>
                    <li>💆 <strong>Dağ Balı ve Volkanik Taş Masajları:</strong> Kas gerginliğini azaltan, kan dolaşımını hızlandıran ve ruhsal ferahlık sağlayan profesyonel dokunuşlar.</li>
                    <li>🧖‍♂️ <strong>Detoks ve Fitobar:</strong> Tanrı Dağları'ndan toplanan tıbbi bitki çayları ile içsel arınma ve metabolizma hızı artışı.</li>
                    <li>😌 <strong>Göl Kenarı Meditasyon:</strong> Issık Göl'ün uçsuz bucaksız maviliğinde, sessizlik içinde sunulan zihinsel dinginlik ve yoga kampları.</li>
                </ul>
            </div>`
             }
        }
    },
};
const cityDetailedData = {
  
"ADANA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551606713-289466042a36?q=80&w=400", 
        phone: "0322 455 90 00",
        tr: {
            hospName: "Çukurova Üniversitesi Balcalı Hastanesi & Adana Şehir Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Güney Türkiye'nin tıbbi üssü; onkolojik cerrahi, karaciğer nakli ve robotik cerrahide uluslararası referans merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">命 İleri Düzey Cerrahi Operasyonlar ve Akademik Derinlik</h4>
                <ul>
                    <li>🧬 <strong>Organ Nakli:</strong> Çukurova Üniversitesi bünyesinde, özellikle karaciğer ve böbrek naklinde Türkiye'nin en yüksek başarı oranlarına sahip ekiplerinden biri görev yapmaktadır.</li>
                    <li>🤖 <strong>Robotik Cerrahi (Da Vinci):</strong> Adana Şehir Hastanesi, üroloji ve jinekolojik cerrahide minimal invaziv (kapalı) yöntemlerin robotik sistemlerle uygulandığı öncü merkezdir.</li>
                    <li>🦷 <strong>İleri Dental Mimari:</strong> Şehirdeki butik klinikler, panoramik röntgen ve 3D ağız içi tarama teknolojileriyle implant ve tam ağız restorasyonunda (All-on-4) Avrupa'dan yoğun talep almaktadır.</li>
                    <li>⚖️ <strong>Obezite ve Metabolik Cerrahi:</strong> Gastrik bypass ve mide küçültme operasyonlarında, cerrahların vaka deneyimi (tecrübe yılı/ameliyat sayısı) İstanbul ortalamasının üzerindedir.</li>
                    <li>💇‍♂️ <strong>Saç Ekimi ve Estetik:</strong> Özellikle rinoplasti (burun estetiği) alanında, Adana ekolü "doğal görünüm" odaklı teknikleriyle Ortadoğu ve Avrupa pazarında ciddi bir marka değerine sahiptir.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Odak Noktaları</h4>
                <ul>
                    <li>👁️ <strong>Göz Sağlığı:</strong> Akıllı lens uygulamaları ve kornea nakli operasyonlarında bölgenin en donanımlı teknolojik altyapısı Adana'da kümelenmiştir.</li>
                    <li>🧠 <strong>Nöroşirürji:</strong> Kompleks beyin tümörleri ve omurga cerrahisinde akademik kadro derinliği (Profesör/Doçent sayısı) bakımından Türkiye'nin referans noktasıdır.</li>
                </ul>

                <h4>➡️ Dürüst Analiz ve Sektörel Güç</h4>
                <p>Adana, "akademik garanti" arayan hastalar için en güvenli limanlardan biridir. <strong>Dürüst Analiz:</strong> Şehirdeki sağlık personeli yabancı dil yetkinliği konusunda İstanbul ve Antalya'daki turistik hastanelerin gerisinde kalsa da; tıbbi müdahale kalitesi ve komplikasyon yönetimi açısından (üniversite altyapısı sayesinde) çok daha dürüst ve bilimsel bir çizgidedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0322 581 20 04", 
        tr: {
            hospName: "Misis ve Aladağ Termal Kaynakları",
            shortDesc: "🌡️ 27–98°C arası değişen, sülfatlı ve bikarbonatlı mineral yapısıyla nadir bulunan şifa suları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Tıbbi Faydalar</h4>
                <ul>
                    <li>🧪 <strong>Zengin Bileşim:</strong> Florürlü, Sülfatlı ve Sodyumlu yapısı sayesinde "balneolojik" tedavilerde (banyo kürü) dünya standartlarındadır.</li>
                    <li>🧴 <strong>Dermatolojik Etki:</strong> Suyun pH değeri (6.7 - 7) sedef, egzama ve akne gibi kronik deri hastalıklarında hücre yenileyici etki gösterir.</li>
                    <li>🦴 <strong>Romatizmal Çözümler:</strong> Radyoaktif bileşenlerin varlığı, eklem kireçlenmeleri ve yumuşak doku romatizmalarında ağrı eşiğini yükseltir.</li>
                    <li>💪 <strong>Rehabilitasyon Desteği:</strong> Ameliyat sonrası ödem atma ve kas güçlendirme süreçlerinde mineral yoğunluğu yüksek banyo kürleri uygulanmaktadır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme ve Dürüst Analiz</h4>
                <p>Adana'nın termal suları mineral kalitesi olarak Afyon ve Bursa ile yarışacak güçtedir. <strong>Dürüst Analiz:</strong> Bölgedeki tesisleşme ve konaklama kalitesi, suyun tıbbi potansiyelinin altındadır. Şifa bulmak isteyen "bilinçli hasta" için idealdir ancak lüks wellness tatili arayan turistler için altyapı geliştirilmelidir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=400",
        phone: "0322 239 04 74", 
        tr: {
            hospName: "Seyhan Geriatri ve Yaşlı Bakım Merkezi",
            shortDesc: "👴 Akdeniz ikliminin rehabilite edici gücüyle birleşen, Alzheimer ve Demans odaklı profesyonel bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Bakım ve İklim Avantajı</h4>
                <ul>
                    <li>☀️ <strong>İklimsel Terapi:</strong> Sert kış koşullarının olmaması, KOAH ve romatizmal hastalıklara sahip yaşlılar için "doğal bir tedavi" ortamı sunar.</li>
                    <li>🧠 <strong>Alzheimer Bakımı:</strong> Merkezlerdeki "aktif yaşam" konsepti, hastaların motor becerilerini korumaya yönelik nöro-psikolojik oyunlar ve bahçe terapileri içerir.</li>
                    <li>💊 <strong>Tıbbi Takip:</strong> Kronik hastalıkların uzman doktor ve sertifikalı geriatri hemşireleri tarafından 7/24 izlenmesi sağlanır.</li>
                    <li>🦽 <strong>Sosyal Rehabilitasyon:</strong> Hareket kısıtlılığı olan bireyler için kişiselleştirilmiş sosyal yaşam alanları ve hobi atölyeleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu ve Dürüst Analiz</h4>
                <p>Adana, yaşlı bakımı için "yaşam kalitesi/maliyet" oranında Türkiye'nin en avantajlı illerindendir. <strong>Dürüst Analiz:</strong> Yaz aylarındaki aşırı nem ve sıcaklık, kalp hastası yaşlılar için risk oluşturabilir; bu dönemde yayla bölgelerindeki tesisler veya iklim kontrollü lüks merkezler tercih edilmelidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400",
        phone: "0322 455 90 00",
        tr: {
            hospName: "Adana Şehir Hastanesi Fizik Tedavi ve Rehabilitasyon (FTR) Kompleksi",
            shortDesc: "♿ Robotik yürüme sistemleri ve el robotları ile ayda 10.000+ seans kapasiteli dev merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Robotik Rehabilitasyon ve Uzmanlık Alanları</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme (Lokomat):</strong> Felçli veya omurilik yaralanmalı hastalarda beyin-kas koordinasyonunu yeniden kuran ileri teknoloji uygulamalar.</li>
                    <li>🌊 <strong>Hidroterapi:</strong> Isıtılmış havuzlarda suyun kaldırma kuvveti kullanılarak yapılan nörolojik ve ortopedik egzersizler.</li>
                    <li>🦾 <strong>Ergoterapi:</strong> İnme sonrası ince motor becerilerin (el-kol kullanımı) geri kazandırılması için robotik el sistemleri desteği.</li>
                    <li>🦴 <strong>Post-Op Rehabilitasyon:</strong> Ortopedik ameliyatlar sonrası hareket kabiliyetini hızla kazandıran yoğun fizik tedavi programları.</li>
                </ul>

                <h4>🌟 Ulusal Konum ve Dürüst Analiz</h4>
                <p>Adana, Güney Türkiye'nin en büyük rehabilitasyon kalesidir. <strong>Dürüst Analiz:</strong> Kamusal FTR kapasitesi çok yüksektir ancak özel sektörde butik ve "sporcu rehabilitasyonu" odaklı merkez sayısı, İstanbul'a oranla daha kısıtlıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400",
        phone: "0322 355 50 00",
        tr: {
            hospName: "Adana HiltonSA & Surmeli Wellness Center",
            shortDesc: "🧖‍♂️ Geleneksel Türk Hamamı ritüellerinin modern aromaterapi ve Uzak Doğu masajlarıyla sentezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Spa ve Tıbbi Aromaterapi</h4>
                <ul>
                    <li>🌿 <strong>Tıbbi Aromaterapi:</strong> Bölgeye özgü narenciye yağları (portakal çiçeği, limon) ile yapılan masajların anksiyete ve uyku bozuklukları üzerindeki yatıştırıcı etkisi.</li>
                    <li>🧖‍♂️ <strong>Termal Spa:</strong> Doğal mineral suların spa ortamına entegre edildiği vücut bakımları ve detoks seansları.</li>
                    <li>😌 <strong>Zihinsel Esenlik:</strong> Şehir stresini azaltma odaklı medikal masajlar ve cilt yenileme kürleri.</li>
                    <li>🧼 <strong>Otantik Hammam:</strong> Geleneksel kese-köpük ritüellerinin lenf drenaj sistemi üzerindeki canlandırıcı etkisi.</li>
                </ul>

                <h4>➡️ Sektörel Durum ve Dürüst Analiz</h4>
                <p>Adana'da SPA kültürü genellikle 5 yıldızlı oteller ve termal tesisler bünyesinde toplanmıştır. <strong>Dürüst Analiz:</strong> Şehrin kendine has bir "Wellness Köyü" konsepti eksiktir; hizmetler genellikle kapalı alanlardaki profesyonel tesislerle sınırlıdır.</p>
            </div>`
        }
    }
},
"ADIYAMAN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400", 
        phone: "0416 216 10 15",
        tr: {
            hospName: "Adıyaman Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Bölgenin cerrahi yükünü sırtlayan, özellikle travma cerrahisi ve genel cerrahi operasyonlarında uzmanlaşmış merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Akademik Yapı</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Bölgesel konumundan dolayı travma vakalarında yüksek deneyime sahip cerrahi ekip.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Katarakt ve temel retinal müdahalelerde bölge halkı için primer çözüm merkezi.</li>
                    <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> Adıyaman Diş Sağlığı Merkezi bünyesinde temel implant ve protez hizmetleri akademik denetimle sunulmaktadır.</li>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) safra kesesi ve fıtık ameliyatlarında rutin ve güvenilir prosedürler.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Potansiyeli</h4>
                <ul>
                    <li>🌍 <strong>Bölgesel Odak:</strong> Çevre illerden ve komşu ülkelerden gelen hastalar için temel cerrahi ihtiyaçlarda ekonomik bir alternatif.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Adıyaman, kompleks üst segment cerrahi operasyonlardan ziyade, temel ve orta düzey cerrahi müdahalelerde yüksek başarı oranına sahiptir. <strong>Eksik yönü:</strong> Saç ekimi ve lüks estetik cerrahi gibi niş alanlarda özel klinik altyapısı Ankara veya Adana kadar gelişmemiştir; odak noktası daha çok tedavi edici tıptır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0416 711 22 11", 
        tr: {
            hospName: "Çelikhan (İçmece) Termal Kaynakları",
            shortDesc: "🌡️ 'Böbrek taşı düşüren su' olarak ünlenen, sindirim sistemi üzerinde etkili şifalı kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Gastronomik Şifa</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı Yapı:</strong> Mide ve sindirim sistemi rahatsızlıklarında (gastrit, hazımsızlık) destekleyici içme kürleri.</li>
                    <li>💧 <strong>Ürolojik Etki:</strong> Halk arasında ve yerel gözlemlerde böbrek kumları ve küçük taşların dökülmesine yardımcı olduğu bilinen mineral kompozisyonu.</li>
                    <li>🦴 <strong>Eklem Terapisi:</strong> Kükürt içeriği sayesinde banyo kürlerinde hafif düzeyli romatizmal ağrılara iyi gelmektedir.</li>
                </ul>
                
                <h4>➡️ Dürüst Analiz</h4>
                <p>Adıyaman termal turizmi, modern spa otellerinden ziyade doğal ve geleneksel içmece kültürü üzerine kuruludur. <strong>Dürüst Analiz:</strong> Tesisleşme oldukça zayıftır; profesyonel bir termal tatilden ziyade, yerel halkın ve şifa arayanların tercih ettiği butik ve doğal alanlardır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0416 216 11 11", 
        tr: {
            hospName: "Adıyaman Huzurevi ve Yaşlı Bakım Merkezi",
            shortDesc: "👴 Manevi atmosferi ve sakin şehir yapısıyla yaşlılar için huzurlu bir yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal ve Fiziksel Bakım</h4>
                <ul>
                    <li>🍂 <strong>Sakin Yaşam:</strong> Büyükşehir gürültüsünden uzak, yavaş şehir temposuyla yaşlılar için düşük stresli ortam.</li>
                    <li>🧑‍⚕️ <strong>Temel Sağlık Takibi:</strong> Kronik hastalıkların düzenli kontrolü ve ilaç yönetimi desteği.</li>
                    <li>🤝 <strong>Manevi Destek:</strong> Şehrin kültürel dokusuyla uyumlu, yaşlıların kendilerini toplumun bir parçası hissettiği sosyal ortam.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Adıyaman'da profesyonel geriatri hastanesi veya ileri düzey Alzheimer köyü bulunmamaktadır. Hizmetler daha çok temel huzurevi bakımı ve ailevi destek modelleri üzerine yoğunlaşmıştır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0416 225 00 24",
        tr: {
            hospName: "Adıyaman FTR Ünitesi ve Rehabilitasyon Merkezleri",
            shortDesc: "♿ Standart fizik tedavi protokolleri ve temel rehabilitasyon ekipmanlarıyla sunulan hizmetler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Temel Rehabilitasyon Alanları</h4>
                <ul>
                    <li>🦴 <strong>Post-Op Fizik Tedavi:</strong> Kırık ve ortopedik operasyonlar sonrası eklem hareket açıklığı çalışmaları.</li>
                    <li>♿ <strong>Nörolojik Takip:</strong> İnme (felç) sonrası temel kas güçlendirme ve mobilizasyon desteği.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocukluk dönemi gelişimsel bozukluklar için özel eğitim merkezleri desteği.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p>Adıyaman'da robotik yürüme sistemleri (Lokomat) gibi en üst düzey teknolojiler kısıtlıdır. <strong>Dürüst Analiz:</strong> Şehir, rehabilitasyon alanında bölge dışına (Adana veya Ankara) sevk oranını düşürmeye odaklı çalışmaktadır; kompleks vakalar için ileri teknoloji merkezlerine ihtiyaç duyulmaktadır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0416 225 55 55",
        tr: {
            hospName: "Grand Isias & White Star Wellness",
            shortDesc: "🧖‍♂️ Şehir merkezindeki lüks oteller bünyesinde sunulan klasik spa ve hamam hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Geleneksel ve Modern Sentez</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Bölge kültüründe önemli bir yere sahip olan, kese ve köpük ritüelleriyle sunulan arınma seansları.</li>
                    <li>💆 <strong>Klasik Masajlar:</strong> İsveç ve aroma masajları ile fiziksel yorgunluğu gidermeye yönelik uygulamalar.</li>
                    <li>😌 <strong>Sauna ve Buhar Odası:</strong> Kas gevşetme ve detoks etkisi yaratan ısıl terapiler.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Adıyaman'da SPA kültürü henüz turistik bir çekim merkezi olmaktan ziyade, konaklayan misafirlerin konforuna yönelik bir hizmettir. Doğal kaynaklarla birleşen özgün bir wellness markası henüz gelişmemiştir.</p>
            </div>`
        }
    }
},
   "AFYONKARAHISAR": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Afyon Sağlık Bilimleri Üniv. Hastanesi
            phone: "0272 246 33 33",
            tr: {
                hospName: "Afyon Sağlık Bilimleri Üniversitesi (AFSÜ) Tıp Fakültesi Hastanesi",
                shortDesc: "🏥 Türkiye'nin tematik sağlık üniversitelerinden biri; cerrahi ihtisas ve sağlık turizmi yetki belgesiyle bölge lideri.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik Cerrahi ve İleri Teknoloji</h4>
                    <p>Afyonkarahisar, 'Sağlık Bilimleri' odaklı üniversitesi sayesinde cerrahi branşlarda Türkiye'nin en iddialı illerinden biridir. Şehir, sadece yerel halka değil, sağlık turizmi kapsamında yurt dışından gelen hastalara da hizmet vermektedir.</p>
                    
                    <h4>🩺 Cerrahi, Diş ve Estetik Odak Noktaları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> AFSÜ bünyesinde her türlü açık kalp ameliyatı, bypass ve kapak değişimleri uluslararası standartlarda yapılmaktadır.</li>
                        <li>🦷 <strong>Dental Turizm (Diş):</strong> Afyon, Diş Hekimliği Fakültesi ve lüks özel klinikleriyle Avrupa'dan gelen hastalar için implant, gülüş tasarımı ve estetik diş hekimliğinde bir merkezdir.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Plastik Cerrahi:</strong> Termal tatil ile birleştirilmiş 'Saç Ekimi Paketleri' şehirde oldukça yaygındır. Uzman doktorlar eşliğinde FUE ve DHI teknikleri uygulanır.</li>
                        <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Sporcu sağlığı ve kompleks eklem operasyonlarında (diz, kalça protezi) yüksek başarı oranı.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Obezite cerrahisi ve robotik cerrahi uygulamalarıyla metabolik hastalıkların tedavisi.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Afyon, cerrahi donanım ve akademik kadro açısından İstanbul ve Ankara ile yarışır düzeydedir. Tek dezavantajı, aşırı yoğunluk nedeniyle randevu süreçlerinin planlanmasıdır; ancak sağlık turizmi hastaları için özel koordinasyon birimleri mevcuttur.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Afyon 5 Yıldızlı Termal Havuz Görseli
            phone: "0272 213 54 47", // Afyon Turizm Bilgi Hattı
            tr: {
                hospName: "Gazlıgöl, Ömer, Gecek ve Hüdai Termal Bölgeleri",
                shortDesc: "🌡️ 'Termalin Başkenti'; sodyum, magnezyum ve florür zengini sularıyla dünyanın en kaliteli şifa havzası.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Termal Güç ve Kimyasal Şifa</h4>
                    <p>Afyon suları, 'florürlü ve mineralli su' kategorisinde dünyada ilk sıralardadır. 5 yıldızlı otellerin tamamı bu şifalı suyu odalarına kadar ulaştırmaktadır.</p>
                    
                    <h4>🧪 Bölgesel Şifa Analizi</h4>
                    <ul>
                        <li>🦴 <strong>Gazlıgöl (Böbrek ve Safra):</strong> İçme kürleri ile böbrek taşı, safra kesesi ve sindirim sistemi hastalıklarında destekleyici tedavi.</li>
                        <li>🩹 <strong>Ömer ve Gecek (Romatizma):</strong> İltihaplı eklem romatizması, kireçlenme ve yumuşak doku hasarlarında yüksek başarı.</li>
                        <li>🧼 <strong>Sandıklı Hüdai (Çamur Banyoları):</strong> Dünyaca ünlü jeotermal çamur banyoları ile cilt hastalıkları, sedef ve eklem ağrıları için doğal detoks.</li>
                        <li>🫁 <strong>Solunum:</strong> Buhar kürleri ile kronik bronşit ve nefes darlığında rahatlama.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Afyon, termal turizmi lüks konaklama ile birleştiren Türkiye'deki tek şehirdir. 'Termal Tatil' kavramının sağlık turizmine dönüştüğü en profesyonel noktadır.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Lüks Yaşlı Bakım Merkezi
            phone: "0272 214 42 21", // Afyon Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Afyonkarahisar Huzurevi ve Yaşlı Rehabilitasyon Köyü",
                shortDesc: "👴 Termal kür destekli, lüks segment yaşlı bakım hizmetleri ve profesyonel geriatri merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Termal Destekli Geriatrik Bakım</h4>
                    <p>Afyon, yaşlı bireylerin hem fiziksel hem de sosyal sağlığını korumak için tasarlanmış devasa tesislere sahiptir.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Sağlık:</strong> Alzheimer ve demans hastaları için özel güvenli bölgeler ve nöro-rehabilitasyon destekli hafıza egzersizleri.</li>
                        <li>💊 <strong>Tıbbi Takip:</strong> AFSÜ Tıp Fakültesi Geriatri birimi ile doğrudan entegrasyon.</li>
                        <li>🧑‍⚕️ <strong>Termal Terapi:</strong> Yaşlıların eklem ağrılarını hafifletmek için fizyoterapist kontrolünde günlük termal su egzersizleri.</li>
                        <li>🏨 <strong>Konaklama Standartları:</strong> 5 yıldızlı otel konforunda bakım ve diyetisyen onaylı beslenme programları.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Afyon, yaşlı bakımı için Türkiye'deki en lüks seçenekleri sunar. Ancak bu hizmetlerin maliyeti, standart huzurevlerine göre daha yüksektir; 'Premium Yaşlı Bakımı' isteyenler için idealdir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Rehabilitasyon Merkezi
            phone: "0272 246 33 33",
            tr: {
                hospName: "AFSÜ Fizik Tedavi ve Rehabilitasyon Merkezi (FTR)",
                shortDesc: "♿ Türkiye’nin en gelişmiş rehabilitasyon merkezlerinden biri; termal hidroterapi ve robotik tedavi birleşimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Robotik ve Hidrotermal Rehabilitasyon</h4>
                    <p>Afyon, engelli bireylerin rehabilitasyonunda suyun kaldırma kuvvetini (hidroterapi) en profesyonel kullanan merkezdir.</p>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç, inme ve beyin hasarı sonrası fonksiyonel kazanım.</li>
                        <li>⚙️ <strong>Robotik Yürüme:</strong> İleri teknoloji robotik sistemler ile yürüyüş eğitimi ve denge çalışmaları.</li>
                        <li>🌊 <strong>Su İçi Terapi:</strong> Termal havuzlarda fizyoterapist eşliğinde yapılan ağrısız rehabilitasyon seansları.</li>
                        <li>🦴 <strong>Ortopedik FTR:</strong> Kompleks kırıklar ve protez ameliyatları sonrası hızlı toparlanma süreci.</li>
                    </ul>

                    <h4>🌟 Stratejik Güç</h4>
                    <p>Merkez, 'Yataklı FTR' kapasitesiyle Türkiye'nin her yerinden hasta kabul etmektedir. Özellikle uzun süreli rehabilitasyon gerektiren engelli hastalar için en donanımlı adrestir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Afyon Lüks Wellness Spa
            phone: "0272 248 10 00", // NG Afyon veya benzeri lüks termal spa
            tr: {
                hospName: "Afyon International Wellness & Luxury Spa Kompleksleri",
                shortDesc: "🧖‍♂️ Geleneksel Türk hamamından Uzakdoğu masajlarına, termal su ile harmanlanmış dünya standartlarında spa deneyimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Bütünsel Yenilenme ve Wellness</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Termal Spa:</strong> Şehrin şifalı suyunun profesyonel spa ritüelleriyle (sauna, hamam, buhar) buluştuğu lüks alanlar.</li>
                        <li>💆 <strong>Medikal ve Egzotik Masajlar:</strong> Termal banyo sonrası kasların gevşemesiyle yapılan Thai, Bali ve Shiatsu masajları.</li>
                        <li>😌 <strong>Detoks ve Anti-Aging:</strong> Çamur sarmalama, yosun terapileri ve profesyonel cilt yenileme kürleri.</li>
                        <li>🛁 <strong>VIP Aile Banyoları:</strong> Mahremiyete önem veren sağlık turistleri için özel tasarlanmış lüks termal suitler.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Afyon SPA sektörü, Türkiye'nin vitrinidir. Tesislerin çoğu 'Uluslararası Spa' ödüllerine sahiptir ve tamamen sağlık odaklı bir rahatlama (Wellness) sunar.</p>
                </div>`
            }
        }
    },
    "AGRI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", 
        phone: "0472 215 10 56",
        tr: {
            hospName: "Ağrı Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Doğu Anadolu'nun stratejik noktasında, temel cerrahi branşlarda ve acil müdahalede uzmanlaşmış bölge hastanesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Yetkinlik ve Akademik Altyapı</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik cerrahi teknikleriyle safra kesesi, fıtık ve apendektomi operasyonlarında yüksek rutin başarı.</li>
                    <li>🦴 <strong>Ortopedi:</strong> Bölgesel travma vakalarının yoğunluğu sebebiyle kırık cerrahisi ve temel eklem müdahalelerinde deneyimli kadro.</li>
                    <li>👶 <strong>Çocuk Cerrahisi:</strong> Bölgedeki demografik yapı gereği çocuk cerrahisi vakalarında geniş vaka çeşitliliği ve uygulama tecrübesi.</li>
                    <li>🦷 <strong>Diş Sağlığı:</strong> Ağız ve Diş Sağlığı Merkezi bünyesinde temel restoratif tedaviler ve protez hizmetleri sunulmaktadır.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Potansiyeli</h4>
                <ul>
                    <li>🌍 <strong>Sınır Ötesi Sağlık:</strong> Gürbulak Sınır Kapısı'na yakınlığı sebebiyle komşu ülkelerden gelen hastalar için "yakın mesafe" temel tedavi noktası.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Ağrı, ileri düzey onkolojik veya kompleks robotik cerrahi merkezi olmaktan ziyade, "erişilebilir temel cerrahi" noktasıdır. <strong>Eksik yönü:</strong> Estetik cerrahi, saç ekimi ve obezite cerrahisi gibi turistik branşlarda özel hastane ve klinik ekosistemi henüz oluşum aşamasındadır; hastalar bu ihtiyaçlar için genellikle Erzurum veya Van'a yönelmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0472 511 21 00", 
        tr: {
            hospName: "Diyadin Jeotermal Kaynakları",
            shortDesc: "🌡️ 'Doğu'nun Pamukkale'si' olarak anılan, kükürt ve zengin mineral yapılı yüksek sıcaklıklı şifa suları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Tıbbi Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Bikarbonatlı:</strong> Suyun 70-80°C kaynak sıcaklığı ve kükürt oranı, kronik cilt hastalıklarında (sedef, egzama) güçlü dezenfektan etki yapar.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Sülfatlı yapısı ile kronik bel ağrıları, nevralji ve kireçlenme şikayetlerinde ağrı kesici banyo kürleri sunar.</li>
                    <li>🧴 <strong>Dermatolojik Tedavi:</strong> Mineral yoğunluğu sayesinde akne ve benzeri deri lezyonlarının kurutulmasında etkilidir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Diyadin, Türkiye'nin en yüksek potansiyelli ancak en az yatırım almış termal bölgelerinden biridir. <strong>Dürüst Analiz:</strong> Suyun tıbbi kalitesi dünya standartlarındadır fakat mevcut tesisleşme "ilkel" düzeydedir. Profesyonel bir sağlık turisti için konaklama ve hijyen altyapısı ciddi bir handikaptır; ancak doğal ve bakir şifa arayanlar için eşsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0472 215 11 81", 
        tr: {
            hospName: "Ağrı Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Yüksek rakım ve temiz dağ havası avantajıyla temel yaşlı bakım hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bakım Standartları ve İklim Faktörü</h4>
                <ul>
                    <li>🌬️ <strong>Temiz Hava Terapisi:</strong> Sanayiden uzak, yüksek rakımlı oksijen seviyesi ile solunum yolu rahatsızlığı olan yaşlılar için doğal destek.</li>
                    <li>🧑‍⚕️ <strong>Hemşirelik Hizmetleri:</strong> Günlük vital bulgu takibi, ilaç yönetimi ve temel öz bakım desteği.</li>
                    <li>🤝 <strong>Manevi ve Sosyal Destek:</strong> Yerel kültüre uygun, toplumsal bağların korunduğu mütevazı sosyal donatılar.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Ağrı'da özel geriatri klinikleri veya Alzheimer hastalarına yönelik özelleşmiş yüksek teknolojili "akıllı köyler" bulunmamaktadır. Kış aylarının aşırı sert ve soğuk geçmesi, kalp ve eklem hastası yaşlılar için dış mekân mobilitesini kısıtlayan bir dezavantajdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400",
        phone: "0472 215 10 56",
        tr: {
            hospName: "Ağrı FTR Birimi ve Özel Rehabilitasyon Merkezleri",
            shortDesc: "♿ Nörolojik ve ortopedik engelli bireyler için temel fizik tedavi ve özel eğitim protokolleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon</h4>
                <ul>
                    <li>🦴 <strong>Konvansiyonel Tedavi:</strong> Elektroterapi, sıcak-soğuk uygulamalar ve manuel terapi seansları.</li>
                    <li>♿ <strong>Engelli Rehabilitasyonu:</strong> Serebral Palsi ve benzeri durumlarda çocuklara yönelik özel eğitim ve fiziksel destek birimleri.</li>
                    <li>🚶 <strong>Mobilizasyon:</strong> Ameliyat sonrası yürüme eğitimleri ve kas güçlendirme çalışmaları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p>Ağrı'da robotik rehabilitasyon (Lokomat, Armeo) imkânları kamu nezdinde kısıtlıdır. <strong>Dürüst Analiz:</strong> Rehabilitasyon süreci daha çok geleneksel fizyoterapi yöntemlerine dayanmaktadır; ileri düzey teknolojik cihaz gerektiren nörolojik vakalar genellikle bölge illerine sevk edilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0472 511 22 22",
        tr: {
            hospName: "Diyadin Jeotermal Otelleri & Şehir Merkezindeki Tesisler",
            shortDesc: "🧖‍♂️ Doğal termal kaynakların kullanıldığı geleneksel banyo ve wellness hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Yerel Terapi Deneyimi</h4>
                <ul>
                    <li>🧖‍♂️ <strong>Doğal Termal Havuzlar:</strong> Suyun doğrudan kaynaktan geldiği, mineral kaybı yaşatmayan geleneksel banyo alanları.</li>
                    <li>🧼 <strong>Hamam Kültürü:</strong> Kese ve köpük masajı gibi klasik Türk hamamı ritüelleri.</li>
                    <li>💆 <strong>Temel Rahatlama:</strong> Kas spazmlarını çözmeye yönelik lokal masaj uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Ağrı'da "SPA & Wellness" sektörü lüks bir turizm segmenti olmaktan ziyade, termal suyun doğal kullanımına odaklıdır. Tıbbi aromaterapi veya modern wellness programları (detoks, yoga vb.) sunan kapsamlı bir merkez mevcut değildir.</p>
            </div>`
        }
    }
},
   "AMASYA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0358 212 10 10",
        tr: {
            hospName: "Amasya Üniversitesi Sabuncuoğlu Şerefeddin Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Tıp tarihinin öncü ismi Sabuncuoğlu Şerefeddin'in mirasıyla, cerrahi ve akademik derinliğe sahip bölge merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Yetkinlik ve Tarihsel Tıp Derinliği</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Şehirdeki askeri ve sivil vaka çeşitliliği sayesinde, özellikle artroskopik cerrahi ve kırık yönetiminde deneyimli uzman kadro.</li>
                    <li>👁️ <strong>Göz Cerrahisi:</strong> Katarakt (fako) ve tıbbi retina alanlarında güncel teknolojiyle sunulan cerrahi müdahaleler.</li>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik yöntemlerle obezite (mide küçültme) ve onkolojik cerrahide güvenilir protokoller.</li>
                    <li>🦷 <strong>Diş Sağlığı:</strong> Amasya Üniversitesi Diş Hekimliği Fakültesi bünyesinde, akademik denetim altında ileri implantoloji ve çene cerrahisi işlemleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Analizi</h4>
                <ul>
                    <li>📜 <strong>Tıbbi Miras Turizmi:</strong> Dünyanın ilk cerrahi el yazmalarından birini yazan Sabuncuoğlu Şerefeddin'in şehri olması, cerrahi etik ve güvenilirlik açısından markaya prestij katmaktadır.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Amasya, butik ve güvenli bir cerrahi deneyim sunar. <strong>Eksik yönü:</strong> Robotik cerrahi (Da Vinci) gibi ultra lüks donanımlar henüz kamu nezdinde kısıtlıdır; ancak komplikasyon yönetimi ve akademik denetim açısından Samsun veya Ankara'ya gitmeye gerek bırakmayacak seviyededir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0358 431 33 01", 
        tr: {
            hospName: "Terziköy Kaplıcası & Gözlek Termal Tesisleri",
            shortDesc: "🌡️ 37–40°C doğal çıkış sıcaklığına sahip, bikarbonatlı ve kalsiyumlu şifa suları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Tedavi Edici Güç</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Kalsiyumlu:</strong> Suyun mineral yapısı, özellikle mide ve bağırsak sisteminin fonksiyonel bozukluklarında (hazımsızlık, kabızlık) içme kürü olarak etkindir.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Doğal sıcaklığının vücut ısısına yakınlığı sayesinde, kalbi yormadan eklem ağrıları ve kireçlenme tedavilerinde uzun süreli banyo imkanı sunar.</li>
                    <li>💪 <strong>Felç Sonrası Destek:</strong> Radyoaktif bileşenleri, sinir sistemi üzerinde yatıştırıcı ve yenileyici etki gösterir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Amasya termal suları, 'yormayan su' kategorisindedir. <strong>Dürüst Analiz:</strong> Tesisleşme genellikle orta segmenttir; Afyon'daki gibi devasa termal tatil köyleri bulunmamaktadır. Şifa ve huzur odaklı, daha sakin ve ekonomik bir termal turizm için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0358 212 24 01", 
        tr: {
            hospName: "Amasya Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Yeşilırmak kenarında, sakin iklimi ve zengin kültürel dokusuyla huzurlu geriatrik bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Sosyal Yaşam</h4>
                <ul>
                    <li>🧠 <strong>Bilişsel Destek:</strong> Hafif düzey demans ve yaşlılık unutkanlıkları için el sanatları ve bahçe terapileriyle desteklenen sosyal programlar.</li>
                    <li>🌬️ <strong>İklimsel Konfor:</strong> Karasal iklim ile Karadeniz iklimi arasındaki geçiş kuşağında olması, aşırı nemden kaçınan yaşlılar için ideal bir atmosfer sunar.</li>
                    <li>🧑‍⚕️ <strong>Düzenli Tıbbi Takip:</strong> Üniversite hastanesi ile entegre sağlık kontrol süreçleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Amasya'da özel sektör tarafından işletilen 'Lüks Yaşlı Köyü' konsepti bulunmamaktadır. Mevcut hizmetler daha çok devlet destekli, güvenli ve geleneksel bakım odaklıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0358 212 10 10",
        tr: {
            hospName: "Amasya FTR Merkezi ve Özel Eğitim Üniteleri",
            shortDesc: "♿ Ortopedik operasyonlar sonrası hızlandırılmış rehabilitasyon ve temel nörolojik takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Rehabilitasyon Alanları</h4>
                <ul>
                    <li>🦴 <strong>Ortopedik Rehabilitasyon:</strong> Özellikle protez ameliyatları sonrası hastayı günlük hayata döndürme odaklı yoğun fizik tedavi.</li>
                    <li>♿ <strong>Nörolojik Takip:</strong> İnme sonrası temel motor becerilerin korunması ve geliştirilmesi.</li>
                    <li>🧒 <strong>Pediatrik Destek:</strong> Özel gereksinimli çocuklar için fizyoterapi ve ergoterapi odaklı gelişim programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Amasya'da robotik yürüme teknolojileri (Lokomat vb.) kısıtlıdır. Kompleks robotik rehabilitasyon ihtiyacı olan hastalar genellikle en yakın büyük merkez olan Samsun'a refere edilmektedir; ancak konvansiyonel tedavide kadro oldukça yetkindir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0358 212 00 01",
        tr: {
            hospName: "Apple Palace & Amasya Wellness Center",
            shortDesc: "🧖‍♂️ Şehir mirasıyla bütünleşmiş, elma ve çiçek özleriyle zenginleştirilmiş yerel spa ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Aromaterapi</h4>
                <ul>
                    <li>🍏 <strong>Aromaterapi:</strong> Amasya elması özleri ve doğal yağlarla yapılan cilt yenileyici ve detoks etkili masajlar.</li>
                    <li>🧖‍♂️ <strong>Hamam ve Sauna:</strong> Geleneksel Osmanlı hamam kültürünün modern wellness dokunuşlarıyla sentezi.</li>
                    <li>😌 <strong>Anti-Stres Programları:</strong> Yeşilırmak manzarası eşliğinde sunulan, zihinsel dinlenme odaklı masaj paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Amasya'daki SPA hizmetleri genellikle lüks otellerin tamamlayıcı bir parçasıdır. Bağımsız bir 'Wellness Destinasyonu' kimliği henüz oluşmamıştır ancak mevcut butik hizmetler hijyen ve kalite açısından yüksek standarttadır.</p>
            </div>`
        }
    }
},
"ANKARA": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
            phone: "0312 552 60 00",
            tr: {
                hospName: "Ankara Bilkent Şehir Hastanesi ve Sağlık Kampüsü",
                shortDesc: "🏨 Avrupa’nın en büyük hastane komplekslerinden biri; saç ekimi, diş estetiği ve ileri cerrahide küresel bir merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🩺 İleri Düzey Cerrahi Operasyonlar</h4>
                    <ul>
                        <li>❤️ <strong>Kalp ve Damar Cerrahi:</strong> Bypass, anjiyo ve dünya standartlarında ileri düzey kalp ameliyatları.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahi:</strong> Tümör, anevrizma ve en kompleks nöroşirürji işlemleri.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Diz-kalça protezi ve çoklu travma gerektiren kompleks ameliyatlar.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Onkolojik (kanser) ameliyatları ve ileri kapalı (laparoskopik) işlemler.</li>
                        <li>👁️ <strong>Göz Cerrahi:</strong> Katarakt, lazer ve retinal cerrahi müdahaleler.</li>
                        <li>👩‍⚕️ <strong>Kadın Doğum:</strong> En yüksek riskli gebelik takipleri ve cerrahi operasyonlar.</li>
                        <li>⚖️ <strong>Obezite ve Nakil:</strong> Tüp mide işlemleri ve Türkiye'nin en başarılı organ nakli operasyonları.</li>
                    </ul>

                    <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Odak Noktaları</h4>
                    <ul>
                        <li>🦷 <strong>Diş Sağlığı ve Estetiği:</strong> İmplant, Zirkonyum kaplama ve "Hollywood Smile" tasarımlarında, Ankara'daki diş hekimliği fakültelerinin akademik gücü sayesinde dünya standartlarında sonuçlar alınmaktadır.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Estetik Cerrahi:</strong> FUE ve DHI teknikleri ile saç ekimi; ayrıca rinoplasti (burun estetiği) ve liposuction işlemlerinde Ankara, İstanbul'a kıyasla daha "butik ve tıbbi gözetimi yüksek" hizmet sunar.</li>
                        <li>🧬 <strong>Kök Hücre Tedavileri:</strong> Ankara, Türkiye'de kök hücre ve hücresel tedavilerde lisanslı en ileri laboratuvarlara sahip şehirdir.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz ve Sektörel Güç</h4>
                    <p>Ankara, Türkiye’de cerrahi sağlık turizminin en güvenilir şehridir. İstanbul vaka sayısı olarak önde olsa da, Ankara akademik denetim ve komplikasyon yönetimi açısından (üniversite hastaneleri sayesinde) çok daha dürüst ve güvenli bir çizgidedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
            phone: "0312 736 10 30", 
            tr: {
                hospName: "Kızılcahamam Kaplıcaları",
                shortDesc: "🌡️ Termal su sıcaklığı 40–60°C arasında değişen zengin mineralli şifa kaynağı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">🧪 Tıbbi Faydalar ve Kullanım</h4>
                    <ul>
                        <li>🦴 Romatizma, kireçlenme ve kronik eklem hastalıklarında etkin çözüm.</li>
                        <li>💪 Kas ağrıları ve ağır ameliyatlar sonrası fiziksel iyileşme desteği.</li>
                        <li>🫁 Solunum yolu ve dolaşım sistemi rahatsızlıklarında yardımcı tedavi.</li>
                        <li>🧴 Cilt hastalıklarında mineral yapısı sayesinde destekleyici etki.</li>
                    </ul>
                    
                    <h4>➡️ Bölgesel Değerlendirme</h4>
                    <p>Ankara’da güçlü bir termal turizm kültürü vardır; ancak Afyon gibi termal odaklı şehirlerle kıyaslandığında daha çok bölgesel bir güçtür.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
            phone: "0312 444 00 00", 
            tr: {
                hospName: "75. Yıl Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
                shortDesc: "👴 Ankara'nın en köklü ve kapsamlı geriatrik destek ve sosyal rehabilitasyon tesisi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Profesyonel Bakım Hizmetleri</h4>
                    <ul>
                        <li>🧠 Alzheimer ve demans hastalarına yönelik 7/24 uzman bakım.</li>
                        <li>💊 Kronik hastalıkların tıbbi personellerce düzenli takibi.</li>
                        <li>🧑‍⚕️ Günlük temel bakım (beslenme, ilaç, hijyen) süreçleri.</li>
                        <li>🦽 Hareket kısıtlılığı olan bireyler için kişiselleştirilmiş destek programları.</li>
                        <li>🎯 Rehabilitasyon ve sürekli sosyal destek hizmetleri.</li>
                    </ul>

                    <h4>➡️ Altyapı Notu</h4>
                    <p>Ankara bu alanda çok gelişmiş bir devlet ve özel sektör altyapısına sahiptir; odağı daha çok yerel ve uzun süreli bakım üzerinedir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
            phone: "0312 310 32 30",
            tr: {
                hospName: "Ankara Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
                shortDesc: "♿ Türkiye’de rehabilitasyon denilince akla gelen en güçlü ve donanımlı merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Uzmanlık Alanları</h4>
                    <ul>
                        <li>♿ Felç (inme) sonrası ileri düzey nörolojik rehabilitasyon.</li>
                        <li>🧠 MS ve Parkinson gibi nörolojik hastalıklarda özel tedavi programları.</li>
                        <li>🦴 Ortopedik ameliyatlar sonrası hareket kabiliyeti kazandırma.</li>
                        <li>💪 Kas ve sinir sistemi hastalıklarına yönelik yoğun fizik tedavi.</li>
                        <li>⚙️ En son teknoloji rehabilitasyon ekipmanları ve akademik uzman kadro.</li>
                    </ul>

                    <h4>🌟 Ulusal Konum</h4>
                    <p>Ankara, Türkiye’de rehabilitasyon alanında en güçlü şehirdir ve referans hastanelere ev sahipliği yapar.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
            phone: "0312 736 02 00",
            tr: {
                hospName: "Patalya Thermal Resort Hotel",
                shortDesc: "🧖‍♂️ Başkentte doğa ve termal suyun birleştiği lüks dinlenme noktası.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Wellness & Terapi Deneyimi</h4>
                    <ul>
                        <li>🧖‍♂️ Termal havuz, sauna ve geleneksel/modern buhar odası hizmetleri.</li>
                        <li>💆 Uzman terapistler eşliğinde medikal ve rahatlatıcı masajlar.</li>
                        <li>😌 Şehir stresini azaltma ve zihinsel dinlenme odaklı özel programlar.</li>
                        <li>🌿 Doğal termal suyun yenileyici gücüyle fiziksel detoks imkanı.</li>
                    </ul>

                    <h4>➡️ Sektörel Durum</h4>
                    <p>Ankara’da spa kültürü genellikle termal otel konseptiyle iç içedir; Antalya tarzı devasa bağımsız wellness merkezleri daha sınırlıdır.</p>
                </div>`
            }
        }
    },
    "ANTALYA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0242 249 60 00",
        tr: {
            hospName: "Akdeniz Üniversitesi Hastanesi & Antalya Şehir Hastanesi",
            shortDesc: "🏥 Dünya çapında organ nakli (yüz ve kol nakli) başarılarıyla tanınan, Türkiye'nin 'Sağlık Turizmi Başkenti' ve teknoloji üssü.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Küresel Ölçekte Cerrahi ve Akademik Üstünlük</h4>
                <ul>
                    <li>🧬 <strong>Kompleks Organ Nakli:</strong> Akdeniz Üniversitesi, dünyanın ilk kadavradan rahim nakli ve tam yüz nakli gibi operasyonlarıyla global bir referans noktasıdır.</li>
                    <li>✂️ <strong>Plastik ve Rekonstrüktif Cerrahi:</strong> Antalya, rinoplasti, liposuction ve meme estetiğinde Avrupa'nın en popüler destinasyonudur; cerrah vaka tecrübesi 'endüstriyel' seviyededir.</li>
                    <li>🦷 <strong>Dental Mimari:</strong> 'Diş Turizmi'nde Türkiye'nin lideridir. Dijital gülüş tasarımı (CAD-CAM) ve implant uygulamalarında 48 saatte sonuç veren klinikler mevcuttur.</li>
                    <li>💇‍♂️ <strong>Saç Ekimi:</strong> Safir FUE ve DHI tekniklerinde uzmanlaşmış, tatil ile tedaviyi birleştiren paketlerde uzmanlaşmış devasa bir ekosistem.</li>
                    <li>⚖️ <strong>Metabolik Cerrahi:</strong> Tip 2 Diyabet ve obezite cerrahisinde uluslararası akreditasyona sahip cerrah kadrosu.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Analizi</h4>
                <ul>
                    <li>✈️ <strong>Lojistik ve Konfor:</strong> Havalimanı transferinden lüks konaklamaya kadar hastanın tüm süreci 'beş yıldızlı otel' konforunda yönetilmektedir.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Antalya, hız ve estetik sonuç odaklı hastalar için dünyadaki en iyi 5 destinasyondan biridir. <strong>Dürüst Analiz:</strong> Sektörün çok büyük olması sebebiyle 'merdiven altı' diye tabir edilen ruhsatsız klinikler konusunda dikkatli olunmalıdır. Akademik güvence isteyen hastalar için üniversite ve şehir hastanesi kanadı, ticari kliniklere göre çok daha güvenli ve bilimsel bir limandır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0242 419 22 22", 
        tr: {
            hospName: "Demre (Burguç) Şifalı Suları & Akseki Termal Kaynakları",
            shortDesc: "🌡️ Kükürtlü ve klorürlü yapısıyla cilt hastalıkları ve kronik ağrılarda kullanılan doğal mineralli sular.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Kükürt Yoğunluğu:</strong> Demre'deki 'soğuk' kükürtlü sular, özellikle kronik dermatolojik lezyonların kurutulmasında ve deri rejenerasyonunda benzersizdir.</li>
                    <li>🧼 <strong>Tuzlu ve Klorürlü Sular:</strong> Kas spazmları ve spor yaralanmaları sonrası ödem atıcı, ağrı dindirici etki gösterir.</li>
                    <li>🦴 <strong>Osteoartrit Desteği:</strong> Hafif mineralli banyo kürleri, eklem hareket açıklığını artırmada yardımcıdır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Antalya'da termal sağlık, 'Deniz-Güneş' turizminin gölgesinde kalmıştır. <strong>Dürüst Analiz:</strong> Afyon veya Bursa gibi büyük termal oteller ve tıbbi kür merkezleri Antalya'da sınırlıdır. Termal potansiyel daha çok 'çamur banyosu' ve lokal şifa odaklıdır; profesyonel bir termal rehabilitasyon için altyapı geliştirilmeye muhtaçtır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0242 320 60 00", 
        tr: {
            hospName: "Antalya Büyükşehir Belediyesi Halil Akyüz Huzurevi & Özel Geriatri Merkezleri",
            shortDesc: "👴 Kış mevsiminin olmadığı 'mikroklima' özelliğiyle Avrupa'nın yaşlı bakım ve emeklilik cenneti.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Bakım Standartları ve İklim Avantajı</h4>
                <ul>
                    <li>☀️ <strong>Kronik Hastalık Yönetimi:</strong> Yıl boyu güneşlenme süresi, D vitamini sentezi ve eklem ağrıları yaşayan yaşlılar için doğal bir iyileştiricidir.</li>
                    <li>🧠 <strong>Alzheimer ve Demans:</strong> Şehirdeki özel bakım merkezleri, 'Respite Care' (Mola Bakımı) gibi kısa süreli profesyonel destek hizmetlerinde Avrupa standartlarındadır.</li>
                    <li>💊 <strong>Multidisipliner Takip:</strong> Geriatristler, fizyoterapistler ve beslenme uzmanları eşliğinde 'aktif yaşlanma' programları.</li>
                    <li>🦽 <strong>Sosyal Entegrasyon:</strong> Yaşlı dostu kentsel alanlar ve lüks bakım evlerindeki sosyal hobi kulüpleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Antalya, yaşlı bakımı için Türkiye'nin en pahalı ama en kaliteli hizmet sunan şehridir. Yaz aylarındaki aşırı sıcaklar kalp hastası yaşlılar için risk teşkil eder; bu nedenle tesislerin iklimlendirme kalitesi hayati önem taşır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0242 249 61 74",
        tr: {
            hospName: "Akdeniz Üniversitesi FTR Merkezi & Özel Robotik Rehabilitasyon Klinikler",
            shortDesc: "♿ Robotik rehabilitasyon ve hidroterapi birleşimiyle felç ve ortopedik engellerde ileri düzey tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">⚙️ Teknolojik Rehabilitasyon ve Sporcu Sağlığı</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme:</strong> Lokomat ve el-kol robotları ile nörolojik hastalıklarda (İnme, MS) beyin plastisitesini uyaran sistemler.</li>
                    <li>🌊 <strong>Su İçi Rehabilitasyon:</strong> Deniz suyunun kaldırma kuvveti ve sıcak su havuzları ile ortopedik engelli bireylere yönelik özel egzersizler.</li>
                    <li>🦵 <strong>Ampute Rehabilitasyonu:</strong> İleri teknoloji protez uygulamaları sonrası adaptasyon ve yürüme eğitimleri.</li>
                    <li>🏃 <strong>Sporcu Rehabilitasyonu:</strong> Profesyonel futbol ve tenis kamp merkezi olması nedeniyle spor yaralanmalarında dünyanın en deneyimli FTR ekiplerine sahiptir.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p>Antalya, rehabilitasyon teknolojisinde İstanbul ile yarışmaktadır. <strong>Dürüst Analiz:</strong> Kamu hastanelerindeki yoğunluk nedeniyle 'robotik sistemlere' erişim vakit alabilir; ancak özel rehabilitasyon klinikleri global standartlarda ama yüksek maliyetli bir hizmet sunar.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0242 710 10 00",
        tr: {
            hospName: "Belek & Kundu Wellness Destinasyonları (Maxx Royal, Rixos vb.)",
            shortDesc: "🧖‍♂️ Dünyanın en lüks SPA merkezlerine ev sahipliği yapan, 'Medical SPA' ve detoks lideri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Ultra Lüks Wellness ve Holistik Tedaviler</h4>
                <ul>
                    <li>💆 <strong>Dünya Masaj Literatürü:</strong> Bali, Thai, Lomi Lomi ve Ayurveda masajlarının yerinden gelen sertifikalı uzmanlarca uygulanması.</li>
                    <li>🛁 <strong>Thalassoterapi:</strong> Isıtılmış deniz suyu ve deniz yosunu kürleri ile vücut detoksu ve mineralizasyonu.</li>
                    <li>🌿 <strong>Tıbbi Aromaterapi:</strong> Toros Dağları'ndan elde edilen kekik, adaçayı ve lavanta yağları ile kişiye özel terapi protokolleri.</li>
                    <li>😌 <strong>Anti-Aging Kürleri:</strong> Mezoterapi ve ozon tedavisi ile birleşen medikal spa programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p>Antalya, SPA & Wellness konusunda tartışmasız dünya lideridir. <strong>Dürüst Analiz:</strong> Şehirde 'Wellness' sadece dinlenmek değil, ciddi bir lüks tüketim kalemidir. Kalite kusursuzdur ancak bu hizmetlerin büyük çoğunluğu sadece otel misafirlerine özeldir; şehir içinde bağımsız tıbbi wellness merkezi sayısı daha sınırlıdır.</p>
            </div>`
        }
    }
},
   "ARTVIN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0466 212 10 40",
        tr: {
            hospName: "Artvin Devlet Hastanesi & Hopa Devlet Hastanesi",
            shortDesc: "🏥 Dik yamaçların ve stratejik sınırın cerrahi kalesi; yenilenmiş ameliyathane kompleksleri ve uzman travma yönetimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Coğrafi Zorluklara Adaptif Cerrahi ve Travma Müdahalesi</h4>
                <p>Artvin, sarp arazi yapısı ve baraj inşaatları gibi yüksek riskli çalışma alanları nedeniyle 'Ortopedik Travma' ve 'Acil Cerrahi Stabilizasyon' konularında spesifik bir klinik refleks geliştirmiştir. Hastane altyapısı, zorlu hava koşullarında bile kesintisiz cerrahi hizmet verebilecek teknik donanıma sahiptir.</p>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve apandis gibi akut vakalarda %85'in üzerinde kapalı (laparoskopik) müdahale oranı; gastrointestinal sistem operasyonlarında deneyimli kadro.</li>
                    <li>🦴 <strong>İleri Ortopedi ve Travmatoloji:</strong> Yüksekten düşme ve iş kazaları kaynaklı kompleks kırıkların cerrahi fiksasyonu, artroskopi ve eklem içi enjeksiyon tedavileri.</li>
                    <li>🫀 <strong>Kardiyoloji ve Koroner Takip:</strong> Akut kalp krizlerinde (MI) ilk müdahale, trombolitik tedavi kapasitesi ve gelişmiş yoğun bakım ünitelerinde vital fonksiyon stabilizasyonu.</li>
                    <li>🧠 <strong>Nöroloji ve İnme Yönetimi:</strong> Nörolojik vakaların hızlı teşhisi (MR, BT) ve cerrahi öncesi kritik ilaç tedavilerinin optimizasyonu; beyin cerrahisi ile koordineli takip.</li>
                    <li>🤱 <strong>Modern Doğum ve Pediatri:</strong> Isı regülasyonlu üniteler ve 'Anne Dostu Hastane' standartlarında güvenli doğum süreçleri; pediatrik cerrahi öncesi hazırlık birimleri.</li>
                    <li>🩸 <strong>Üroloji ve Endoskopik Müdahaleler:</strong> Böbrek ve idrar yolları taşlarında kapalı sistem (URS) müdahaleler ve prostat hastalıklarında modern cerrahi yaklaşımlar.</li>
                    <li>🦷 <strong>Artvin Ağız ve Diş Sağlığı Merkezi:</strong> Protez ünitesi, cerrahi çekimler ve çocuk diş hekimliği alanında modern medikal ekipmanlar ile kesintisiz hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Sınır Lojistiği ve Hava Ambulansı</h4>
                <p>Artvin, Sarp Sınır Kapısı ile Gürcistan'a açılan bir kapıdır. Bu durum, hastaneyi uluslararası bir 'Acil Geçiş İstasyonu' haline getirir. Şehirdeki helikopter pistleri, ağır kış şartlarında hastaların Rize veya Erzurum'daki tıp merkezlerine vaka transferi için hayati önem taşır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin yeni olması, dijital görüntüleme cihazlarının hızı ve butik yapısı sayesinde hastaya ayrılan vaktin kalitesidir. <strong>Eksik Yönü:</strong> Çok ileri düzey onkolojik cerrahi (radyoterapi gibi) için hastalar komşu illere (Rize/Erzurum) sevk edilse de, temel ve spesifik cerrahi branşlarda bölgeye tam kapasite hizmet verir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0466 212 10 10", 
        tr: {
            hospName: "Artvin Şifalı Su Kaynakları & Otingo Orman Kaplıcaları",
            shortDesc: "🌡️ Ladin ve köknar ormanlarının kalbinden gelen mineralli şifa; romatizma ve eklem ağrıları için doğal detoks.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Oksijen ve Mineral Sentezi (Klimaterapi)</h4>
                <p>Artvin'in su kaynakları, özellikle Borçka ve Şavşat bölgelerinde, yüksek irtifa temiz havası (Alpin Terapisi) ile birleşen mineral yoğunluğuyla karakterizedir.</p>
                <ul>
                    <li>🧪 <strong>Mineralli Su Karakteristiği:</strong> Hafif kükürtlü ve bikarbonatlı yapı; mide-bağırsak sistemini düzenleyici ve metabolizmayı hızlandırıcı etki.</li>
                    <li>🦴 <strong>Romatizmal Rahatlama:</strong> Suyun doğal sıcaklığı ve mineral yapısı; kireçlenme, siyatik ve kronik eklem ağrılarında doğal analjezik rolü.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Saflık:</strong> Patojensiz ve yüksek oksijenli su yapısı sayesinde alerjik cilt problemlerinde yatıştırıcı ve arındırıcı sonuçlar.</li>
                    <li>🌬️ <strong>Yüksek İrtifa Wellness:</strong> Suyun şifasını, bölgenin 1500+ rakımlı temiz havasıyla birleştiren bütünsel bir 'Doğal İyileşme' süreci.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Artvin'de termal imkanlar butik ve doğayla iç içedir. Gerçek bir 'Kaçış ve Arınma' arayan sağlık turistleri için bakir bir hazinedir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0466 212 11 05", 
        tr: {
            hospName: "Artvin Huzurevi Yaşlı Bakım Merkezi & Borçka Rehabilitasyon Birimleri",
            shortDesc: "👴 Bulutların üzerinde, Karadeniz kültürüyle saygın yaşlanma; organik beslenme ve düşük stresli yaşam.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzun Yaşamın Sırrı: Doğa ve Organik Gastronomi</h4>
                <p>Artvin, Türkiye'de yaşlı nüfusun en dinç olduğu illerden biridir. Bölgedeki dik yamaçlar, yaşlılarda 'Doğal Kondisyon' oluştururken; beslenme alışkanlıkları kronik hastalıkları minimize eder.</p>
                <ul>
                    <li>🏥 <strong>Evde Sağlık ve Mobil Takip:</strong> Coğrafi uzaklık nedeniyle köylere ulaşan mobil ekiplerle yaşlıların rutin kontrollerinin (tansiyon, şeker) yapılması.</li>
                    <li>🍯 <strong>Artvin Balı ve Doğal Süper-Gıdalar:</strong> Bağışıklığı zirvede tutan, yaşlılarda mevsimsel enfeksiyon riskini azaltan doğal polen ve bal desteği.</li>
                    <li>🥗 <strong>Doğal Süt ve Yayla Ürünleri:</strong> Mera hayvancılığından gelen yüksek proteinli beslenme ile kas kütlesinin ve kemik sağlığının korunması.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Geniş aile yapısı, yayla göçleri ve 'İmece' kültürü sayesinde yaşlıların sosyal olarak aktif tutulması ve moral seviyelerinin korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Artvin, yaşlılar için "Sessiz, Güvenli ve Huzurlu" bir şehirdir. <strong>Güçlü Yönü:</strong> Şehirdeki hava kalitesinin yaşlı solunum sağlığı üzerindeki tartışmasız pozitif etkisidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0466 212 10 40",
        tr: {
            hospName: "Artvin Devlet Hastanesi FTR Birimi & Özel Rehabilitasyon Merkezleri",
            shortDesc: "♿ Ortopedik ve nörolojik vakalarda fonksiyonel geri kazanım; uzman fizyoterapistler eşliğinde birebir gelişim seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Hareket ve Bireysel Terapi Protokolleri</h4>
                <p>Artvin'de rehabilitasyon, hastanın zorlu coğrafyada bağımsız hareket kabiliyetini geri kazanmasını hedefleyen spesifik programlardan oluşur.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve travma sonrası uzman fizyoterapistler eşliğinde yürütülen denge, yürüme ve koordinasyon eğitimleri.</li>
                    <li>⚙️ <strong>Modern Elektroterapi Ünitesi:</strong> Ağrı kontrolü, kas stimülasyonu ve doku iyileşmesini hızlandıran teknolojik cihaz seansları.</li>
                    <li>🦵 <strong>Kineziterapi ve Mobilizasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve fonksiyonel egzersiz reçeteleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme çalışmaları ve aile destek eğitimleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Artvin, rehabilitasyon hizmetlerinde 'Birebir İlgi' avantajına sahiptir. <strong>Güçlü Yönü:</strong> Fizik tedavi personelinin hastalarla kurduğu uzun süreli ve güven odaklı tedavi ilişkisidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0466 212 10 00",
        tr: {
            hospName: "Artvin Wellness Noktaları & Geleneksel Şehir Hamamları",
            shortDesc: "🧖‍♂️ Doğanın kalbinde, ladin kokulu arınma; geleneksel Türk hamamı ve kış wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma Ritüelleri</h4>
                <p>Artvin'de Wellness deneyimi, özellikle yüksek yaylalardaki temiz hava ve orman dokusuyla birleşen 'Zihinsel Detoks' niteliğindedir.</p>
                <ul>
                    <li>🧼 <strong>Hamam Ritüelleri:</strong> Hijyenik mermer sıcaklığında sunulan kese-köpük masajları ile cildi yenileyen klasik arınma seansları.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kas gerginliğini azaltan, dolaşımı hızlandıran ve ruhsal ferahlık sağlayan profesyonel dokunuşlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Toksin atılımını hızlandıran ve bağışıklığı destekleyen ısıl dinlenme alanları.</li>
                    <li>😌 <strong>Stress-Free Alanlar:</strong> Orman manzaralı, huzurlu atmosferlerde sunulan zihinsel dinginlik odaklı Wellness paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Artvin'de SPA hizmeti butik bir yapıdadır. Şehirdeki modern konaklama tesisleri bünyesinde sunulan wellness hizmetleri, doğa tatiliyle sağlığı birleştirmek isteyenler için idealdir.</p>
            </div>`
        }
    }
},
    "AYDIN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0256 213 10 07",
        tr: {
            hospName: "Aydın Adnan Menderes Üniversitesi Hastanesi & Aydın Şehir Hastanesi",
            shortDesc: "🏥 Ege Bölgesi'nin cerrahi kalesi; onkoloji, kalp damar cerrahisi ve ileri dental implant teknolojilerinde uzmanlaşmış akademik merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 İleri Cerrahi Müdahale ve Akademik Güç</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Kalça ve diz protezi cerrahisinde, Ege Bölgesi'nin en yüksek vaka deneyimine sahip akademik kadrolarından biri.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Akıllı lens (akomodatif) uygulamaları ve komplike vitrektomi operasyonlarında ileri teknolojik altyapı.</li>
                    <li>🦷 <strong>Dental Estetik:</strong> Kuşadası ve Didim hattındaki klinikler, Avrupa standartlarında "Smile Design" ve All-on-4 implant sistemlerinde uzmanlaşmıştır.</li>
                    <li>⚖️ <strong>Obezite Cerrahisi:</strong> Gastrik bypass ve tüp mide ameliyatlarında uluslararası hasta kabul eden, komplikasyon oranı düşük merkezler.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Odak Noktaları</h4>
                <ul>
                    <li>🩺 <strong>Onkoloji ve Radyoterapi:</strong> İleri düzey Lineer Hızlandırıcı (LINAC) cihazları ile kanser cerrahisi ve radyoterapide bölge referansıdır.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Aydın, özellikle Kuşadası ve Didim ilçeleri üzerinden çok güçlü bir "Dental ve Estetik" turizm ağına sahiptir. <strong>Dürüst Analiz:</strong> Şehir merkezi cerrahi operasyonlarda akademik olarak çok güçlüdür ancak kıyı ilçelerindeki bazı butik kliniklerde fiyatlar döviz bazlı olduğu için yerel hastalar için maliyetli kalabilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0256 577 11 55", 
        tr: {
            hospName: "Germencik Alangüllü & Buharkent Termal Kaynakları",
            shortDesc: "🌡️ 70–90°C kaynak sıcaklığına sahip, klorürlü ve sodyumlu yapısıyla 'antik şifa' merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Tıbbi Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Hipertermal Sular:</strong> Türkiye'nin en sıcak sularından olan Aydın kaynakları, yüksek mineralizasyon (Florür ve Bikarbonat) ile hücre yenilenmesini tetikler.</li>
                    <li>🦴 <strong>Kronik Romatizma:</strong> İnflamatuar olmayan eklem hastalıkları ve yumuşak doku romatizmalarında termal banyo kürleri ağrı eşiğini yükseltir.</li>
                    <li>🧴 <strong>Dermatolojik Etki:</strong> Kükürt bileşenleri sedef ve kronik egzama vakalarında cildi yatıştırıcı etki gösterir.</li>
                    <li>🫁 <strong>İnhalasyon Tedavisi:</strong> Buharkent bölgesindeki su buharı, kronik bronşit ve sinüzit vakalarında solunum yollarını rahatlatır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Aydın, termal suyun tarım ve enerji ile birleştiği dünyadaki nadir noktalardandır. <strong>Dürüst Analiz:</strong> Su kalitesi Afyon ile yarışacak düzeydedir ancak tesisleşme (konaklama) anlamında Afyon'un gerisindedir; daha çok "sağlık odaklı" ve mütevazı işletmeler yaygındır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0256 211 44 44", 
        tr: {
            hospName: "Aydın Huzurevi ve Yaşlı Bakım Rehabilitasyon Merkezi",
            shortDesc: "👴 'Gökyüzünün altındaki en güzel yeryüzü'nde, zeytin ağaçları arasında uzun ömür odaklı geriatrik bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>☀️ <strong>Düşük Nem, Bol Oksijen:</strong> İklimi, kalp ve tansiyon hastası yaşlılar için Türkiye'deki en ideal mikroklima alanlarından biridir.</li>
                    <li>🥗 <strong>Geriatrik Beslenme:</strong> Bölgenin zeytinyağı ve taze sebze odaklı mutfağı, yaşlılarda kolesterol ve sindirim sistemi yönetimini kolaylaştırır.</li>
                    <li>🧑‍⚕️ <strong>7/24 Hemşirelik:</strong> Kronik hastalık takibi, şeker ve tansiyon ölçümleri ile kişiye özel ilaç yönetim sistemleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Aydın, "Uzun Yaşam Şehri" (Longevity) olarak bilinir. Ancak özel sektörün işlettiği lüks "Alzheimer Köyü" konseptleri henüz çok yenidir ve kapasiteleri sınırlıdır; talep arzın üzerindedir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0256 213 10 07",
        tr: {
            hospName: "ADÜ FTR Merkezi & Özel Fizik Tedavi Üniteleri",
            shortDesc: "♿ Nörolojik rehabilitasyon ve ortopedik engellerde Ege'nin en donanımlı akademik fizik tedavi birimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık ve Rehabilitasyon Alanları</h4>
                <ul>
                    <li>♿ <strong>İnme (Felç) Rehabilitasyonu:</strong> Nöro-plastisiteyi destekleyen manuel terapi ve denge-koordinasyon eğitimleri.</li>
                    <li>🦴 <strong>Sporcu Sağlığı:</strong> Bağ kopmaları ve menisküs operasyonları sonrası hızlı rehabilitasyon protokolleri.</li>
                    <li>⚙️ <strong>Elektroterapi:</strong> Ağrı yönetiminde TENS, ultrason ve vakum gibi modern fizik tedavi cihazları kullanımı.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Aydın'daki kamu merkezleri çok yoğun olduğu için randevu süreleri uzayabilmektedir. İleri teknoloji robotik rehabilitasyon ihtiyacı olan hastalar genellikle İzmir'deki vakıf üniversitelerine veya özel hastanelere yönlendirilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0256 618 19 19",
        tr: {
            hospName: "Kuşadası Pine Bay & Wellness Resort",
            shortDesc: "🧖‍♂️ Ege'nin şifalı bitkileri ve deniz suyunun birleştiği lüks wellness ve spa destinasyonu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Ege Esenliği (Wellness)</h4>
                <ul>
                    <li>🌿 <strong>Thalassoterapi:</strong> Ege Denizi'nin mineralli suyuyla yapılan banyolar ve deniz yosunu sarmalama kürleri.</li>
                    <li>🧼 <strong>Zeytinyağı Terapisi:</strong> Bölgenin doğal sızma zeytinyağı ve incir çekirdeği yağı ile yapılan cilt yenileyici masajlar.</li>
                    <li>🧖‍♂️ <strong>Anti-Stress Masajları:</strong> Aromaterapik yağlarla (kekik, lavanta) sinir sistemini rahatlatıcı profesyonel masajlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Aydın'da SPA kültürü kıyı bölgelerinde (Kuşadası, Didim) kusursuzdur. Ancak şehir içindeki merkezler daha çok geleneksel hamam formatındadır. Gerçek bir wellness deneyimi için kıyı şeridindeki 5 yıldızlı tesisler tercih edilmelidir.</p>
            </div>`
        }
    }
},
    "BALIKESIR": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0266 460 40 00",
        tr: {
            hospName: "Balıkesir Üniversitesi Sağlık Uygulama ve Araştırma Hastanesi & Balıkesir Atatürk Şehir Hastanesi",
            shortDesc: "🏥 Marmara ve Ege'nin kesişim noktasında, ileri düzey cerrahi müdahale ve onkoloji merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Yetkinlik ve Akademik Derinlik</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Kalça ve diz artroplastisi (protez) ile kompleks kırık yönetiminde bölge referans merkezi.</li>
                    <li>⚕️ <strong>Kardiyovasküler Cerrahi:</strong> Koroner bypass ve kapalı (minimal invaziv) kalp ameliyatlarında yüksek başarı oranlı cerrahi ekipler.</li>
                    <li>👁️ <strong>Göz Cerrahisi:</strong> Modern fakoemülsifikasyon (katarakt) ve tıbbi retina birimlerinde ileri teknolojik donanım.</li>
                    <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> Balıkesir Diş Hastanesi bünyesinde çene cerrahisi ve estetik gülüş tasarımı uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Analizi</h4>
                <ul>
                    <li>🩺 <strong>Onkolojik Cerrahi:</strong> Kanser cerrahisinde disiplinler arası konsey kararlarıyla yürütülen güvenilir tedavi protokolleri.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Balıkesir, cerrahi operasyonlarda akademik güvenilirlik arayanlar için Bursa ve İzmir arasında güçlü bir duraktır. <strong>Eksik yönü:</strong> Özel hastane segmentindeki "ultra lüks" servis imkanları İstanbul kadar yaygın değildir; ancak tıbbi müdahale kalitesi ve komplikasyon yönetimi açısından üniversite kanadı oldukça güçlüdür.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0266 322 25 55", 
        tr: {
            hospName: "Gönen, Edremit (Güre) ve Sındırgı Termal Tesisleri",
            shortDesc: "🌡️ Dünyaca ünlü Gönen suları ve yüksek radon gazlı mineral yapısıyla 'mucizevi' şifa kaynakları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Gönen Ekolü:</strong> Florürlü ve sodyum klorürlü yapısı, dünyadaki 'en saf' ve mineral dengesi en iyi termal sulardan biri olarak kabul edilir.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kronik eklem hastalıkları, ankilozan spondilit ve bel fıtığı rehabilitasyonunda klinik olarak kanıtlanmış etki.</li>
                    <li>🧴 <strong>Dermatolojik Etki:</strong> Edremit/Güre bölgesindeki kükürtlü sular, sedef ve egzama tedavisinde hücre yenileyici özellik gösterir.</li>
                    <li>🫁 <strong>Nefes Terapisi:</strong> Sındırgı bölgesindeki termal buharın inhalasyon yoluyla solunum yollarını rahatlatması.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Balıkesir, termal sağlık turizminde Türkiye'nin ilk üç ilinden biridir. <strong>Dürüst Analiz:</strong> Gönen bölgesi tesisleri oldukça köklüdür ancak bazıları modernize edilmeye muhtaçtır. Güre ve Sındırgı bölgeleri ise daha modern ve "Wellness" odaklı tesisleriyle ön plana çıkmaktadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0266 244 55 55", 
        tr: {
            hospName: "Balıkesir Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Kaz Dağları'nın oksijen deposunda, düşük nem ve yüksek hava kalitesiyle desteklenen geriatrik bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve İklim Avantajı</h4>
                <ul>
                    <li>🌬️ <strong>Hava Kalitesi (Kaz Dağları):</strong> Solunum yetmezliği ve KOAH olan yaşlılar için dünyanın en iyi ikinci oksijen merkezinde doğal rehabilitasyon.</li>
                    <li>🧑‍⚕️ <strong>Hemşirelik ve Bakım:</strong> Şehir hastanesi ile koordineli, düzenli sağlık taramaları ve kronik hastalık yönetimi.</li>
                    <li>🧠 <strong>Bilişsel Aktiviteler:</strong> Alzheimer ve demans sürecini yavaşlatan hobi atölyeleri ve doğa yürüyüşleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Balıkesir, emekliler için bir cazibe merkezidir. Ancak lüks segmentteki "Yaşlı Oteli" konseptli özel merkezler Edremit körfezi hattında yoğunlaşmış olup, şehir merkezindeki kapasite sınırlıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0266 460 40 00",
        tr: {
            hospName: "Balıkesir Üniversitesi FTR Merkezi & Fizik Tedavi Üniteleri",
            shortDesc: "♿ Termal rehabilitasyon ile modern fizik tedavi protokollerinin birleştiği uzman birim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık ve Rehabilitasyon Alanları</h4>
                <ul>
                    <li>🦴 <strong>Post-Operatif FTR:</strong> Ortopedik ameliyatlar sonrası hastayı hızla mobilize eden su içi egzersiz programları.</li>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme sonrası denge-koordinasyon ve yürüme eğitimleri.</li>
                    <li>⚙️ <strong>Elektroterapi:</strong> Modern cihazlarla desteklenen kronik ağrı yönetimi ve kas stimülasyonu.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Balıkesir'deki rehabilitasyon süreci termal suyun gücüyle birleştiğinde muazzam sonuçlar vermektedir. Ancak robotik yürüme teknolojilerine (Lokomat) erişim için randevu süreleri, kamu hastanelerindeki yoğunluk nedeniyle uzun olabilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0266 388 48 88",
        tr: {
            hospName: "Güre & Sındırgı Wellness Resorts (Adrina, Obam vb.)",
            shortDesc: "🧖‍♂️ Zeytin yağı özleri ve termal sularla zenginleştirilmiş Ege usulü SPA deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Zeytin Terapisi</h4>
                <ul>
                    <li>🫒 <strong>Zeytinyağı Masajı:</strong> Bölgenin dünyaca ünlü doğal sızma zeytinyağları ile yapılan hücre yenileyici ve dinlendirici masajlar.</li>
                    <li>🧖‍♂️ <strong>Balneoterapi:</strong> Termal suyun lüks SPA ortamında sunduğu arınma ve detoks seansları.</li>
                    <li>😌 <strong>Anti-Stress Kürleri:</strong> Kaz Dağları manzaralı sessiz alanlarda zihinsel dinginlik programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Balıkesir körfez hattı (Edremit, Akçay, Altınoluk) SPA kalitesi açısından çok gelişmiştir. Şehir merkezindeki SPA hizmetleri ise daha çok klasik şehir oteli formatındadır; gerçek bir wellness deneyimi için sahil şeridi veya Sındırgı tercih edilmelidir.</p>
            </div>`
        }
    }
},
    "BILECIK": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0228 212 10 33",
        tr: {
            hospName: "Bilecik Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Marmara, Ege ve İç Anadolu'nun kavşağında, temel ve orta ölçekli cerrahide yüksek operasyon kabiliyetine sahip merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Klinik Altyapı</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik kolesistektomi (kapalı safra kesesi) ve fıtık onarımlarında rutin başarı sağlayan uzman kadro.</li>
                    <li>🦴 <strong>Ortopedi:</strong> Travma cerrahisi ve temel eklem protezi uygulamalarında bölge ihtiyacını karşılayan cerrahi birim.</li>
                    <li>🦷 <strong>Diş Sağlığı:</strong> Bilecik Ağız ve Diş Sağlığı Merkezi bünyesinde protetik tedaviler ve temel kanal/dolgu operasyonları.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Katarakt ameliyatları ve temel tıbbi göz içi enjeksiyon uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejisi</h4>
                <ul>
                    <li>🩺 <strong>Hızlı Müdahale:</strong> Büyükşehirlerdeki (İstanbul, Bursa) yoğunluğun aksine, randevu ve ameliyat sürelerinde hastaya zaman avantajı sunması.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Bilecik, kompleks organ nakli veya robotik cerrahi merkezi olmaktan ziyade, "güvenilir temel cerrahi" durağıdır. <strong>Dürüst Analiz:</strong> Onkolojik cerrahi veya ileri kardiyovasküler müdahaleler gibi spesifik uzmanlık gerektiren vakalar genellikle Eskişehir veya Bursa'daki üniversite hastanelerine sevk edilmektedir; ancak rutin cerrahi başarı oranları oldukça yüksektir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0228 314 11 11", 
        tr: {
            hospName: "Osmaneli Selçik İçmeleri & Söğüt Şifalı Suları",
            shortDesc: "🌡️ Tarihi Selçuklu dönemine dayanan, sindirim sistemi ve böbrek fonksiyonları üzerinde etkili içme kürleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Tıbbi Etkiler</h4>
                <ul>
                    <li>🧪 <strong>Zengin Bikarbonatlı Yapı:</strong> Selçik İçmeleri, özellikle mide asidini dengeleme ve safra yolları hareketliliği üzerindeki etkisiyle bilinir.</li>
                    <li>💧 <strong>Ürolojik Şifa:</strong> Böbrek kumlarının dökülmesinde destekleyici içme kürleri olarak geleneksel bir üne sahiptir.</li>
                    <li>🦴 <strong>Eklem Terapisi:</strong> Sodyum sülfatlı içeriği sayesinde hafif dereceli romatizmal ağrılarda banyo kürü desteği.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Bilecik termal suları lüks otelcilikten ziyade "geleneksel şifa ve içmece" konseptine yakındır. <strong>Dürüst Analiz:</strong> Tesisleşme mütevazı düzeydedir. Profesyonel bir termal rehabilitasyon merkezi arayanlar için yetersiz gelebilir ancak doğal kaynak suyu ile detoks yapmak isteyenler için ekonomik bir seçenektir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0228 212 11 00", 
        tr: {
            hospName: "Bilecik Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Osmanlı'nın kurulduğu topraklarda, sakin ve güvenli bir atmosferde sunulan huzurlu yaşlı bakımı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🍂 <strong>Sakin Şehir Dokusu:</strong> Kalabalıktan uzak, gürültüsüz ortamı ile yaşlılarda anksiyete ve stres seviyesini düşüren mikro atmosfer.</li>
                    <li>🧑‍⚕️ <strong>Temel Sağlık Takibi:</strong> Şehir hastanesi ile koordineli olarak yürütülen kronik hastalık ve ilaç yönetim süreçleri.</li>
                    <li>🤝 <strong>Sosyal Katılım:</strong> Yaşlıların yerel kültürle iç içe kalmasını sağlayan, toplumsal bağları koruyucu hobi ve aktivite programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bilecik'te "Lüks Geriatri Köyleri" veya özelleşmiş Alzheimer bakım kompleksleri bulunmamaktadır. Hizmetler daha çok kamu ve geleneksel huzurevi standartlarında seyretmektedir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0228 212 10 33",
        tr: {
            hospName: "Bilecik FTR Birimi ve Özel Rehabilitasyon Merkezleri",
            shortDesc: "♿ Ortopedik operasyonlar sonrası temel fizik tedavi ve engelli bireylere yönelik özel eğitim desteği.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon</h4>
                <ul>
                    <li>🦴 <strong>Konvansiyonel Uygulamalar:</strong> TENS, ultrason ve vakum gibi temel fizik tedavi modaliteleriyle ağrı yönetimi.</li>
                    <li>♿ <strong>Nörolojik Destek:</strong> Hafif düzey inme vakalarında mobilizasyon ve kas güçlendirme çalışmaları.</li>
                    <li>🧒 <strong>Özel Eğitim:</strong> Zihinsel ve bedensel engelli çocuklar için gelişim odaklı fizyoterapi ve ergoterapi seansları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Robotik rehabilitasyon cihazlarına erişim Bilecik'te kısıtlıdır. İleri teknoloji gerektiren ağır nörolojik vakalar genellikle Eskişehir'deki üniversite hastanelerine yönlendirilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0228 212 00 00",
        tr: {
            hospName: "Şehir Otelleri & Osmaneli Belediye Tesisleri",
            shortDesc: "🧖‍♂️ Geleneksel hamam ritüellerinin sunulduğu butik spa ve wellness hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness Deneyimi</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Kese ve köpük masajı gibi klasik arınma yöntemleri.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar:</strong> Vücuttaki toksinleri atmaya yardımcı, temel ısıl terapi alanları.</li>
                    <li>💆 <strong>Klasik Masajlar:</strong> Fiziksel yorgunluğu gidermeye yönelik temel aroma masajı uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bilecik'te bağımsız bir SPA ve Wellness sektörü gelişmemiştir. Hizmetler daha çok otel bünyesinde veya belediye iştirakli termal tesislerde "ek hizmet" olarak sunulmaktadır.</p>
            </div>`
        }
    }
},
"BINGÖL": {
    surgery: {
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400", 
        phone: "0426 213 10 43",
        tr: {
            hospName: "Bingöl Devlet Hastanesi & Bingöl Kadın Doğum ve Çocuk Hastalıkları Hastanesi",
            shortDesc: "🏥 Doğu Anadolu'nun kilit kavşağında, temel cerrahi branşlarda ve travma yönetiminde modernize edilmiş bölge merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Müdahale Kapasitesi ve Klinik Güç</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) yöntemle safra kesesi, fıtık ve apendektomi operasyonlarında yüksek rutin başarı ve hızlı taburcu süreci.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Bölgesel trafik ve iş kazası yoğunluğu nedeniyle kırık cerrahisi ve temel eklem müdahalelerinde deneyimli cerrahi ekip.</li>
                    <li>👶 <strong>Çocuk Cerrahisi:</strong> Bölgedeki çocuk nüfus oranına paralel olarak pediatrik cerrahi vakalarında geniş tecrübe ve uzmanlık.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Modern fako yöntemiyle katarakt ameliyatları ve temel göz içi enjeksiyon tedavileri.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejisi</h4>
                <ul>
                    <li>🩺 <strong>Erişilebilirlik:</strong> Çevre ilçelerden gelen hastalar için 7/24 kesintisiz acil cerrahi ve yoğun bakım desteği.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Bingöl, bölgedeki "temel cerrahi" ihtiyacını başarıyla göğüslemektedir. <strong>Eksik yönü:</strong> İleri düzey onkolojik cerrahi, açık kalp ameliyatları veya robotik cerrahi sistemleri henüz mevcut değildir; bu tür spesifik vakalar genellikle Elazığ veya Erzurum'daki üniversite hastanelerine sevk edilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0426 213 12 12", 
        tr: {
            hospName: "Ilıcalar (Kös) Termal Kaplıcaları",
            shortDesc: "🌡️ 40–50°C doğal sıcaklığa sahip, florürlü ve sodyumlu yapısıyla romatizmal hastalıkların doğal şifası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etkiler</h4>
                <ul>
                    <li>🧪 <strong>Florürlü Yapı:</strong> Suyun mineral dengesi, kemik metabolizması üzerinde olumlu etkiler yaratarak osteoporoz (kemik erimesi) tedavisine destek sağlar.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kronik bel ve boyun ağrıları, kireçlenme (osteoartrit) ve yumuşak doku romatizmalarında ağrı kesici ve hareket artırıcı banyo kürleri.</li>
                    <li>🧴 <strong>Dermatolojik Fayda:</strong> Suyun pH değeri ve mineral içeriği, akne ve bazı kronik deri lezyonlarının iyileşme sürecini hızlandırır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Bingöl Ilıcalar bölgesi, Doğu Anadolu'nun en saf ve tıbbi değeri yüksek sularından birine sahiptir. <strong>Dürüst Analiz:</strong> Tesisleşme orta segmenttedir; lüks bir "Thermal Resort" beklentisinden ziyade, şifa odaklı butik konaklama ve kamu iştirakli tesisler ön plandadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0426 213 11 11", 
        tr: {
            hospName: "Bingöl Huzurevi ve Yaşlı Bakım Rehabilitasyon Merkezi",
            shortDesc: "👴 Güvenli ve sakin bir atmosferde, ailevi değerlerin korunduğu huzurlu geriatrik bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Sosyal Ortam</h4>
                <ul>
                    <li>🍂 <strong>Huzurlu Şehir Dokusu:</strong> Karmaşadan uzak yapısıyla yaşlıların zihinsel dinginliğini korumaya yardımcı düşük stresli ortam.</li>
                    <li>🧑‍⚕️ <strong>Temel Sağlık İzlemi:</strong> Günlük tansiyon, şeker ölçümü ve ilaç takibi süreçlerinin profesyonel personelce yürütülmesi.</li>
                    <li>🤝 <strong>Sosyal Entegrasyon:</strong> Yaşlıların kendilerini toplumdan izole hissetmedikleri, yerel kültürle uyumlu hobi ve sohbet alanları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bingöl'de özel sektöre ait teknolojik "Alzheimer Köyleri" bulunmamaktadır. Hizmetler daha çok devlet destekli geleneksel huzurevi modelinde olup, kış aylarının sert geçmesi nedeniyle dış mekân aktiviteleri kısıtlıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0426 213 10 43",
        tr: {
            hospName: "Bingöl FTR Ünitesi ve Özel Eğitim Merkezleri",
            shortDesc: "♿ Ortopedik ameliyatlar sonrası temel fizik tedavi ve engelli çocuklar için gelişimsel destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon</h4>
                <ul>
                    <li>🦴 <strong>Konvansiyonel Uygulamalar:</strong> TENS, ısı paketleri ve manuel egzersizler ile kas güçlendirme çalışmaları.</li>
                    <li>♿ <strong>Nörolojik Takip:</strong> Felç (inme) sonrası temel mobilizasyon ve hastanın günlük yaşam becerilerini koruma eğitimi.</li>
                    <li>🧒 <strong>Pediatrik Destek:</strong> Özel gereksinimli çocuklar için fiziksel ve sosyal gelişim odaklı seanslar.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Bingöl'de ileri teknoloji robotik rehabilitasyon (Lokomat vb.) cihazları mevcut değildir. Kompleks nörolojik vakalar genellikle Elazığ'daki üniversite hastanesi fizik tedavi kürsüsüne sevk edilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0426 213 00 00",
        tr: {
            hospName: "Bingöl Şehir Otelleri & Ilıcalar Wellness Alanları",
            shortDesc: "🧖‍♂️ Geleneksel hamam kültürünün doğal termal suyla buluştuğu mütevazı wellness hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness Deneyimi</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Bölgeye özgü kese-köpük ritüelleri ile fiziksel arınma.</li>
                    <li>🧖‍♂️ <strong>Termal Banyo:</strong> Doğal kaynaktan gelen kükürtlü sularla vücut detoksu.</li>
                    <li>💆 <strong>Klasik Masaj:</strong> Kas yorgunluğunu gidermeye yönelik temel aroma masajı uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bingöl'de lüks "Medical SPA" sektörü henüz gelişmemiştir. Hizmetler daha çok termal tesislerin bir uzantısı olarak geleneksel yöntemlerle sınırlıdır.</p>
            </div>`
        }
    }
},
"BITLIS": {
    surgery: {
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400", 
        phone: "0432 215 04 71",
        tr: {
            hospName: "Bitlis-Tatvan Devlet Hastanesi & Bitlis Eren Üniversitesi Tıp Fakültesi Araştırma Hastanesi",
            shortDesc: "🏥 Van Gölü kıyısında, ileri cerrahi donanıma ve bölge geneline hizmet veren travma/yoğun bakım kapasitesine sahip merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Müdahale ve Akademik Altyapı</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) yöntemlerle safra kesesi, appendektomi ve fıtık onarımlarında yüksek vaka deneyimi.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Doğu Anadolu'daki trafik ve kış koşulları kaynaklı yaralanmalarda uzmanlaşmış travma cerrahisi birimi.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Katarakt (fako) cerrahisi ve temel tıbbi göz içi tedavi protokolleri.</li>
                    <li>🦷 <strong>Diş Sağlığı:</strong> Bitlis Ağız ve Diş Sağlığı Merkezi bünyesinde protetik diş tedavisi ve restoratif operasyonlar.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejisi</h4>
                <ul>
                    <li>🩺 <strong>Bölgesel Erişim:</strong> Tatvan'daki modernize edilmiş hastane yapısı ile çevre illere de hizmet veren yataklı tedavi ve yoğun bakım kapasitesi.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Bitlis, özellikle Tatvan hattındaki yeni hastane yapılarıyla "orta segment cerrahide" bölgenin en güvenilir noktalarından biridir. <strong>Eksik yönü:</strong> İleri düzey kanser cerrahisi, organ nakli veya karmaşık kalp ameliyatları genellikle Van veya Erzurum'daki üniversite hastanelerine yönlendirilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0434 827 60 11", 
        tr: {
            hospName: "Güroymak (Budaklı) Kaplıcası & Nemrut Krater Şifalı Suları",
            shortDesc: "🌡️ 40°C doğal sıcaklığa sahip, kükürtlü yapısıyla deri hastalıkları ve romatizmal ağrılarda kullanılan doğal kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Doğal Tedavi</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Florürlü:</strong> Suyun doğal kükürt oranı, özellikle sedef, akne ve mantar tipi deri lezyonlarının tedavisinde antibakteriyel etki sağlar.</li>
                    <li>🦴 <strong>Kas ve Eklem Terapisi:</strong> Nemrut kalderasındaki doğal mineralli suların kireçlenme ve kronik bel ağrıları üzerindeki yatıştırıcı etkisi.</li>
                    <li>💧 <strong>Hidroterapi:</strong> Suyun doğal sıcaklığı, ameliyat sonrası ödem atma ve fiziksel rahatlama süreçlerini destekler.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Budaklı Kaplıcaları, kışın karlar altında mandalarla birlikte suya girilen "otantik ve bakir" yapısıyla dünyaca ünlüdür. <strong>Dürüst Analiz:</strong> Tesisleşme ve konaklama lüksü çok düşüktür; daha çok doğa turizmi ve geleneksel şifa arayanlara hitap eder. Profesyonel medikal termal kür merkezleri henüz gelişmemiştir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0434 226 50 12", 
        tr: {
            hospName: "Bitlis Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Tarihi ve manevi atmosferde, sosyal dayanışma odaklı huzurlu yaşlı bakımı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Bakım ve Esenlik</h4>
                <ul>
                    <li>🍂 <strong>Sakin Yaşam:</strong> Şehrin kendine has dokusu ve yavaş hayat temposu ile yaşlılar için huzurlu bir yaşam alanı.</li>
                    <li>🧑‍⚕️ <strong>Hemşirelik Hizmetleri:</strong> Düzenli tansiyon, şeker ölçümü ve temel geriatrik takip süreçleri.</li>
                    <li>🤝 <strong>Kültürel Bağ:</strong> Yaşlıların toplumsal hayattan kopmadan, saygı gördükleri bir ekosistem içinde yaşamlarını sürdürmesi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bitlis'te lüks "Geriatri Oteli" konsepti bulunmamaktadır. Kışın ağır geçen kar yağışı hareket kısıtlılığı olan yaşlılar için dış mekân kullanımını zorlaştırabilir; bu sebeple kapalı alan sosyal aktiviteleri ön plandadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0434 226 50 00",
        tr: {
            hospName: "Bitlis FTR Ünitesi ve Özel Eğitim Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik yaralanmalar sonrası temel fizik tedavi ve engelli çocuklar için gelişimsel destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi Uygulamaları</h4>
                <ul>
                    <li>🦴 <strong>Konvansiyonel Rehabilitasyon:</strong> Elektroterapi ve manuel egzersizler ile kas tonusu geliştirme çalışmaları.</li>
                    <li>♿ <strong>Mobilizasyon Takibi:</strong> Ameliyat veya yaralanma sonrası hareket kabiliyetini geri kazandırma odaklı temel fizyoterapi.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Zihinsel ve bedensel engelli çocuklar için özel eğitim ve fiziksel gelişim seansları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Bitlis'te robotik yürüme teknolojileri henüz mevcut değildir. Ciddi nörolojik rehabilitasyon vakaları genellikle Van'daki ileri teknoloji merkezlerine refere edilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0434 228 12 12",
        tr: {
            hospName: "Bitlis Şehir Otelleri & Tatvan Wellness Alanları",
            shortDesc: "🧖‍♂️ Geleneksel hamam ritüellerinin sunulduğu mütevazı spa ve wellness birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness Deneyimi</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Bölgeye özgü kese-köpük ritüelleriyle fiziksel arınma seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar:</strong> Vücuttaki ödemi atmaya ve rahatlamaya yardımcı ısıl terapiler.</li>
                    <li>💆 <strong>Temel Masajlar:</strong> Kas yorgunluğunu gidermeye yönelik aromatik masaj uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bitlis'te bağımsız bir SPA ve Wellness sektörü gelişmemiştir; hizmetler otel bünyelerinde misafirlere yönelik butik servisler şeklindedir.</p>
            </div>`
        }
    }
},
    "BOLU": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0374 253 46 56",
        tr: {
            hospName: "Bolu Abant İzzet Baysal Üniversitesi (BAİBÜ) Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Türkiye'nin en köklü FTR kürsülerinden birine sahip, cerrahi sonrası rehabilitasyonda dünya markası olan akademik merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Uzmanlaşmış Cerrahi ve Akademik Disiplin</h4>
                <ul>
                    <li>🦴 <strong>İleri Ortopedi:</strong> Spor yaralanmaları, ön çapraz bağ ve menisküs cerrahisinde, sporcu rehabilitasyonu ile entegre çalışan uzman kadro.</li>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Minimal invaziv (kapalı) cerrahi ve endokrin cerrahisinde (tiroid, sürrenal) bölge referans merkezi.</li>
                    <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Mikrocerrahi yöntemlerle bel ve boyun fıtığı operasyonlarında yüksek başarı oranı.</li>
                    <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> BAİBÜ Diş Hekimliği Fakültesi bünyesinde ileri çene cerrahisi ve estetik gülüş tasarımı uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Odak Noktaları</h4>
                <ul>
                    <li>🏃 <strong>Sporcu Sağlığı:</strong> Bolu'nun kamp merkezi olması sebebiyle profesyonel sporcuların cerrahi ve post-op süreçlerinde Türkiye'nin en deneyimli illerinden biridir.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Bolu, cerrahiyi "iyileşme süreci" (rehabilitasyon) ile birleştirme konusunda Türkiye'nin en dürüst ve bilimsel altyapısına sahiptir. <strong>Eksik yönü:</strong> Özel hastane çeşitliliği İstanbul kadar fazla değildir; ancak üniversite hastanesinin fizik tedavi ve cerrahi entegrasyonu bu açığı fazlasıyla kapatmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0374 253 44 24", 
        tr: {
            hospName: "Karacasu Termal Turizm Merkezi & Mudurnu Babas Kaplıcaları",
            shortDesc: "🌡️ 42–44°C doğal sıcaklığa sahip, florürlü ve sülfatlı yapısıyla 'tıbbi termal' lideri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Tedavi Gücü</h4>
                <ul>
                    <li>🧪 <strong>Florürlü Karbonatlı Sular:</strong> Kemik metabolizmasını düzenleyici etkisiyle osteoporoz ve kireçlenme tedavisinde birincil destek sağlar.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kronik bel ve boyun ağrıları ile yumuşak doku romatizmalarında (fibromiyalji) klinik olarak kanıtlanmış balneolojik etki.</li>
                    <li>💧 <strong>Tıbbi Ekoloji:</strong> Suyun mineral yapısı, ameliyat sonrası yaraların iyileşmesini ve kas dokusunun yenilenmesini hızlandırır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Bolu-Karacasu bölgesi, Türkiye'nin en prestijli 'Sağlık Turizmi Bölgesi' ilan edilen alanlarından biridir. <strong>Dürüst Analiz:</strong> Buradaki termal su, eğlence odaklı "aqua park" konseptinden ziyade, gerçek tıbbi kürler ve rehabilitasyon için kullanılır. Tesisler oldukça profesyonel ve sağlık odaklıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0374 215 11 91", 
        tr: {
            hospName: "İzzet Baysal Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Çam ormanları içinde, dünyanın en temiz havasına sahip bölgelerden birinde profesyonel yaşlı bakımı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Ekolojik Bakım ve Psikolojik Esenlik</h4>
                <ul>
                    <li>🌬️ <strong>Doğal Oksijen Terapisi:</strong> KOAH, astım ve kalp yetmezliği olan yaşlılar için ideal hava kalitesi ve nem oranı.</li>
                    <li>🧑‍⚕️ <strong>Geriatrik Fizyoterapi:</strong> Yaşlılıkta kas kaybını (sarkopeni) önleyen, termal havuz destekli özel egzersiz programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Doğayla iç içe, sessiz ve huzurlu ortamın demans ve Alzheimer üzerindeki yatıştırıcı etkisi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bolu, "Yaşlı Dostu Şehir" unvanını hak eden nadir illerdendir. Ancak kış aylarının karlı ve soğuk geçmesi, ciddi mobilite sorunu olan yaşlıların dış mekân kullanımını yılın 3-4 ayı kısıtlayabilmektedir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0374 253 46 56",
        tr: {
            hospName: "Bolu FTR Eğitim ve Araştırma Hastanesi (Karacasu)",
            shortDesc: "♿ Türkiye'nin rehabilitasyon üssü; robotik yürüme ve su içi fizik tedavide uluslararası referans.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 İleri Teknoloji Rehabilitasyon</h4>
                <ul>
                    <li>🤖 <strong>Robotik Sistemler:</strong> Lokomat (robotik yürüme) ve kol robotları ile inme sonrası nörolojik geri kazanım süreçleri.</li>
                    <li>🌊 <strong>Hidroterapi:</strong> Termal suyun kaldırma kuvveti kullanılarak yapılan 'Watsu' ve su içi direnç egzersizleri.</li>
                    <li>♿ <strong>Omurilik Yaralanmaları:</strong> Parapleji ve tetrapleji vakalarında, hastanın bağımsızlık seviyesini artıran kapsamlı fizik tedavi protokolleri.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Bolu FTR Hastanesi, Türkiye'nin en iyi birkaç merkezinden biridir. Bu durum, kamu tarafında ciddi bir hasta yoğunluğuna ve uzun randevu sürelerine neden olabilir; ancak alınan tedavinin bilimsel kalitesi tartışmasızdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0374 253 45 00",
        tr: {
            hospName: "Gazelle Resort & Abant Wellness Centers",
            shortDesc: "🧖‍♂️ Orman terapisi (Shinrin-yoku) ve medikal spa konseptinin birleştiği lüks destinasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Holistik Wellness ve Detoks</h4>
                <ul>
                    <li>🌲 <strong>Forest Spa:</strong> Doğrudan orman içine konumlanmış açık hava masaj alanları ve çam yağı terapileri.</li>
                    <li>🧖‍♂️ <strong>Tuz Odası ve Kristal Sauna:</strong> Üst solunum yolu detoksu ve cilt arınması sağlayan modern wellness üniteleri.</li>
                    <li>😌 <strong>Anti-Stress Programları:</strong> Şehir hayatından uzak, dijital detoks ve yoga kampları ile desteklenen zihinsel yenilenme.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bolu, SPA & Wellness konusunda "doğa ile bütünleşme" temasında rakipsizdir. Kalite çok yüksektir ancak lüks tesislerin fiyat skalası ortalamanın üzerindedir; buralar daha çok "üst segment wellness turizmi"ne hitap eder.</p>
            </div>`
        }
    }
},
  "BURDUR": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0248 213 50 00",
        tr: {
            hospName: "Burdur Devlet Hastanesi & Bucak Devlet Hastanesi",
            shortDesc: "🏥 Göller Yöresi'nin stratejik sağlık üssü; yeni nesil hastane binasıyla modernize edilmiş cerrahi ve yoğun bakım birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Modern Altyapı</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> İleri laparoskopik cerrahi teknikleriyle obezite ve metabolik cerrahi alanında bölge dışından hasta kabul eden uzman birimler.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Kalça ve diz protezleri ile spor yaralanmaları cerrahisinde modernize edilmiş ameliyathane altyapısı.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Fako yöntemiyle katarakt ve temel vitreoretinal müdahalelerde yüksek vaka başarısı.</li>
                    <li>🦷 <strong>Diş Sağlığı:</strong> Burdur Ağız ve Diş Sağlığı Merkezi bünyesinde temel implantoloji ve estetik diş hekimliği uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejisi</h4>
                <ul>
                    <li>🩺 <strong>Bucak Faktörü:</strong> Bucak Devlet Hastanesi, konumu ve teknik donanımı sayesinde çevre illerden (Antalya, Isparta) sevk alan bir "mini bölge hastanesi" gibi çalışmaktadır.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Burdur, yeni hastane yatırımlarıyla "modern temel cerrahi" seviyesini çok yükseltmiştir. <strong>Eksik yönü:</strong> İleri onkolojik cerrahi ve organ nakli gibi akademik üst segment vakalar genellikle komşu il Isparta'daki üniversite hastanesine veya Antalya'ya yönlendirilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0248 233 10 33", 
        tr: {
            hospName: "Burdur (Merkez) ve Çerçin Kaplıcaları",
            shortDesc: "🌡️ Bikarbonatlı ve sülfatlı yapısıyla sindirim sistemi ve deri hastalıklarında destekleyici doğal kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Hidroterapi</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı Sular:</strong> Mide asiditesini düzenleyici ve sindirimi kolaylaştırıcı içme kürü potansiyeli.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Hafif mineralli yapısı sayesinde yaşlı hastalar için kalbi yormayan, eklem hareketliliğini artıran banyo kürleri.</li>
                    <li>🧴 <strong>Dermatolojik Etki:</strong> Cildin nem dengesini korumaya yardımcı, pH değeri nötre yakın doğal sular.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Burdur, termal su potansiyeli olmasına rağmen "termal turizm" kimliğiyle ön plana çıkmamıştır. <strong>Dürüst Analiz:</strong> Tesisleşme oldukça sınırlıdır; profesyonel bir termal tatil köyü veya tıbbi kür merkezi bulunmamaktadır. Kaynaklar daha çok yerel halk tarafından geleneksel amaçlarla kullanılmaktadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0248 233 11 80", 
        tr: {
            hospName: "Burdur Huzurevi ve Yaşlı Bakım Rehabilitasyon Merkezi",
            shortDesc: "👴 Sakin şehir yapısı ve düşük nem oranıyla yaşlılar için ideal, huzurlu bir geriatrik yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik</h4>
                <ul>
                    <li>🌬️ <strong>İklimsel Konfor:</strong> Göller Yöresi'nin temiz havası ve aşırı nemden uzak iklimi, solunum ve kalp hastası yaşlılar için konforlu bir ortam sunar.</li>
                    <li>🧑‍⚕️ <strong>Tıbbi İzlem:</strong> Şehir hastanesi ile entegre, düzenli sağlık taramaları ve kronik hastalık yönetimi.</li>
                    <li>🤝 <strong>Sosyal Dayanışma:</strong> Yaşlıların toplumsal saygı gördüğü, yerel kültürün korunduğu butik ve huzurlu bir bakım anlayışı.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Burdur'da özel sektöre ait "Lüks Emeklilik Köyleri" bulunmamaktadır. Hizmetler daha çok kamu odaklı ve geleneksel huzurevi standartlarındadır; ancak şehrin güvenliği ve sakinliği yaşlılar için en büyük avantajdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0248 213 50 00",
        tr: {
            hospName: "Burdur FTR Ünitesi ve Özel Rehabilitasyon Merkezleri",
            shortDesc: "♿ Ortopedik operasyonlar sonrası hızlandırılmış rehabilitasyon ve temel nörolojik takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi Uygulamaları</h4>
                <ul>
                    <li>🦴 <strong>Post-Op FTR:</strong> Diz ve kalça protez ameliyatları sonrası hastayı mobilize eden egzersiz protokolleri.</li>
                    <li>♿ <strong>Nörolojik Destek:</strong> Hafif ve orta düzey inme (felç) vakalarında denge ve koordinasyon çalışmaları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Özel gereksinimli çocuklar için fiziksel destek ve bireysel gelişim seansları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Burdur'da robotik rehabilitasyon cihazları mevcut değildir. İleri teknoloji gerektiren ağır nörolojik rehabilitasyon vakaları genellikle Isparta veya Antalya'daki üniversite hastanelerine yönlendirilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0248 233 12 12",
        tr: {
            hospName: "Burdur Şehir Otelleri & Wellness Alanları",
            shortDesc: "🧖‍♂️ Geleneksel hamam kültürünün temel wellness hizmetleriyle sunulduğu butik alanlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness Deneyimi</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Klasik kese ve köpük masajı ile fiziksel temizlik ve rahatlama seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar:</strong> Vücuttaki ödemi atmaya yardımcı, temel ısıl terapi alanları.</li>
                    <li>💆 <strong>Klasik Masaj:</strong> Günlük stresi azaltmaya yönelik temel aroma masajı uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Burdur'da bağımsız bir SPA ve Wellness sektörü gelişmemiştir. Hizmetler daha çok butik şehir otellerinin sunduğu standart olanaklarla sınırlıdır.</p>
            </div>`
        }
    }
},
 "BURSA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0224 295 00 00",
        tr: {
            hospName: "Uludağ Üniversitesi Tıp Fakültesi & Bursa Şehir Hastanesi",
            shortDesc: "🏥 Güney Marmara'nın cerrahi üssü; robotik cerrahi, organ nakli ve ileri onkolojide Avrupa standartlarında bir teknoloji merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Multi-Disipliner Cerrahi ve Teknolojik Üstünlük</h4>
                <ul>
                    <li>🤖 <strong>Robotik Cerrahi (Da Vinci):</strong> Üroloji, jinekoloji ve genel cerrahide kapalı ameliyatların ötesinde, milimetrik hassasiyetle yapılan robotik müdahaleler.</li>
                    <li>🫀 <strong>Kardiyovasküler Mükemmeliyet:</strong> Kompleks bypass operasyonları, kapak tamirleri ve periferik damar cerrahisinde Türkiye'nin en yüksek vaka başarı oranlarından biri.</li>
                    <li>🧬 <strong>Organ Nakli Merkezi:</strong> Karaciğer, böbrek ve kornea naklinde uzmanlaşmış, uluslararası akreditasyona sahip akademik kadrolar.</li>
                    <li>🦴 <strong>İleri Ortopedi:</strong> Omurga cerrahisi (skolyoz), tümör cerrahisi ve sporcu sağlığında (Bursaspor ve bölge kulüpleri etkisiyle) devasa bir deneyim.</li>
                    <li>🦷 <strong>Dental Implantoloji:</strong> Diş hekimliği fakültesi ve özel poliklinik zincirleri ile "Gülüş Tasarımı" ve "Zygomatik Implant" gibi ileri cerrahi çözümler.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Analizi</h4>
                <ul>
                    <li>🌍 <strong>Global Hasta Yönetimi:</strong> Bursa, Ortadoğu ve Avrupa'dan gelen hastalar için özel "International Patient" birimlerine ve beş dilde hizmet veren koordinatörlere sahiptir.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Bursa, tıbbi derinlik açısından İstanbul ile yarışabilecek tek şehirdir. <strong>Güçlü Yönü:</strong> Akademik bilgi ile teknolojik donanım (Şehir Hastanesi faktörü) kusursuz birleşmiştir. <strong>Eksik Yönü:</strong> Şehir trafiği ve hastane yoğunluğu, ulaşım lojistiğini hasta için bazen yorucu kılabilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0224 233 33 00", 
        tr: {
            hospName: "Tarihi Çekirge Vakıfbahçe & Oylat Kaplıcaları",
            shortDesc: "🌡️ 'Gümüş Dere'nin şifalı suları; Bizans'tan Osmanlı'ya uzanan, radyoaktif ve oligometalik yapılı asırlık kür merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Radyoaktif Oligometalik Sular:</strong> Çekirge suları, hücre yenilenmesini tetikleyen düşük mineralizasyonlu ama yüksek enerjili yapısıyla nörolojik hastalıklarda eşsizdir.</li>
                    <li>🦴 <strong>Oylat Mucizesi:</strong> 'Ölüp de dirilen' efsanesiyle bilinen Oylat suları, ankilozan spondilit ve şiddetli eklem ağrılarında dünya çapında bir başarıya sahiptir.</li>
                    <li>💧 <strong>İçme Kürleri:</strong> Karaciğer, safra kesesi ve diyabet yönetiminde destekleyici doğal alkali su tedavileri.</li>
                    <li>🌡️ <strong>Cilt Rejenerasyonu:</strong> Sülfatlı ve kalsiyumlu yapısı sayesinde cerrahi skarların ve kronik egzamaların iyileşme sürecini hızlandırır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Bursa, 'Termal' denilince akla gelen ilk şehirdir çünkü burada su sadece banyo değil, bir kültürdür. <strong>Dürüst Analiz:</strong> Tarihi hamamlar otantik bir deneyim sunsa da, modern tıbbi kürler için Çekirge bölgesindeki 'Kür Merkezli' lüks oteller tercih edilmelidir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0224 243 23 23", 
        tr: {
            hospName: "Bursa Büyükşehir Belediyesi Huzurevi & Özel Nilüfer Geriatri Merkezleri",
            shortDesc: "👴 Uludağ'ın esintisiyle nefes alan, ileri teknoloji takip sistemlerine sahip geriatri ve palyatif bakım üssü.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Yönetim</h4>
                <ul>
                    <li>🧠 <strong>Alzheimer Takip Teknolojileri:</strong> GPS tabanlı hasta takip sistemleri ve duyusal stimülasyon odaları (Snoezelen) ile donatılmış özel merkezler.</li>
                    <li>🧑‍⚕️ <strong>Palyatif Bakım:</strong> Terminal dönem veya kronik ağrılı yaşlılar için Türkiye'nin en gelişmiş bakım ve destek üniteleri.</li>
                    <li>🥗 <strong>Holistik Beslenme:</strong> Bölgesel meyve-sebze çeşitliliğiyle desteklenen, metabolik takibe dayalı diyet programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bursa, yaşlı bakımı için hem kamu hem özel sektörde 'altın standart' sunar. Özellikle Nilüfer bölgesi, Avrupa'daki lüks yaşlı bakım evleriyle yarışacak nitelikte tesislere sahiptir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0224 295 40 00",
        tr: {
            hospName: "Romatem Bursa & Uludağ Üniversitesi FTR Klinikleri",
            shortDesc: "♿ Robotik rehabilitasyonda Türkiye'nin 'Silikon Vadisi'; felçli ve engelli bireyler için son teknoloji çözümler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">⚙️ Robotik ve Hidroterapi Entegrasyonu</h4>
                <ul>
                    <li>🤖 <strong>Lokomat ve Armeo:</strong> Yürüme ve el-kol fonksiyonlarını geri kazandırmaya yönelik yüksek teknolojili robotik dış iskelet sistemleri.</li>
                    <li>🌊 <strong>Su Altı Koşu Bantları:</strong> Eklemlere yük bindirmeden mobiliteyi artıran, termal su destekli hidroterapi üniteleri.</li>
                    <li>🧠 <strong>Nöro-Rehabilitasyon:</strong> MS, Parkinson ve Serebral Palsi vakalarında bilişsel ve fiziksel gelişimi birleştiren özel protokoller.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p>Bursa, fizik tedavi konusunda Orta Doğu'nun bile referans noktasıdır. <strong>Dürüst Analiz:</strong> Bu ileri teknolojiye erişim maliyeti yüksektir; ancak iyileşme potansiyeli olan hastalar için geri dönüş hızı açısından yatırıma en değer şehirdir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0224 500 00 00",
        tr: {
            hospName: "Piri Reis & Crowne Plaza Wellness - Almira Thermal Spa",
            shortDesc: "🧖‍♂️ Geleneksel Osmanlı saray hamamı kültürünün, modern Medical Spa ve detoksla zirveye ulaştığı nokta.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Medical Wellness ve Lüks Arınma</h4>
                <ul>
                    <li>🧼 <strong>Hünkâr Hamamı Ritüelleri:</strong> Tarihi dokuda, tamamen doğal içerikli yağlar ve aslına uygun kese-köpük teknikleri.</li>
                    <li>💆 <strong>Doku Masajları:</strong> Kronik yorgunluk ve stres için klinik masaj terapileri.</li>
                    <li>😌 <strong>Termal Detoks:</strong> Suyun minerallerinden faydalanarak vücudu ağır metallerden arındıran özel kür programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bursa'daki SPA hizmetleri sadece 'rahatlama' değil, bir 'sağlık ritüeli'dir. Şehirdeki beş yıldızlı otellerin neredeyse tamamı tıbbi termal ruhsatlıdır; bu da aldığınız SPA hizmetinin bilimsel bir temeli olduğu anlamına gelir.</p>
            </div>`
        }
    }
},
"ÇANAKKALE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0286 263 59 50",
        tr: {
            hospName: "Çanakkale Onsekiz Mart Üniversitesi (ÇOMÜ) Hastanesi & Çanakkale Mehmet Akif Ersoy Devlet Hastanesi",
            shortDesc: "🏥 Boğaz'ın kıyısında, ileri laparoskopik cerrahi ve onkolojik operasyonlarda Ege ile Marmara'yı bağlayan stratejik tıp merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Derinlik ve Modern Müdahale Kapasitesi</h4>
                <ul>
                    <li>⚕️ <strong>Onkolojik Cerrahi:</strong> Meme, tiroid ve kolorektal kanser cerrahisinde multidisipliner tümör konseyleri ile yönetilen kişiye özel tedavi protokolleri.</li>
                    <li>🦴 <strong>Robotik Destekli Ortopedi:</strong> Diz ve kalça protezi ameliyatlarında yüksek hassasiyetli navigasyon sistemleri ve artroskopik eklem tamirleri.</li>
                    <li>🫀 <strong>Kardiyovasküler Başarı:</strong> Açık kalp ameliyatları ve anjiyografik stent uygulamalarında bölgenin en yoğun ve deneyimli ekiplerinden birine sahip olması.</li>
                    <li>🦷 <strong>İleri Dental Cerrahi:</strong> ÇOMÜ Diş Hekimliği Fakültesi bünyesinde kemik grefti uygulamaları, sinus lifting ve gömülü diş operasyonlarında akademik denetim.</li>
                    <li>👶 <strong>Çocuk Cerrahisi:</strong> Yenidoğan cerrahisinden pediatrik ürolojiye kadar geniş bir yelpazede uzmanlaşmış birim.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi ve Lojistik Analiz</h4>
                <ul>
                    <li>🌊 <strong>Yurt Dışı Entegrasyonu:</strong> Gökçeada ve Bozcaada turizmi ile birleşen, özellikle Balkanlar ve Batı Avrupa'dan gelen gurbetçi hastalar için tercih edilen "güvenli liman" cerrahisi.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Çanakkale, bir üniversite şehri olmanın getirdiği akademik titizliği hastanelerine yansıtmıştır. <strong>Güçlü Yönü:</strong> Devlet ve Üniversite hastanelerinin fiziksel altyapısı çok yenidir. <strong>Eksik Yönü:</strong> Organ nakli gibi çok spesifik alanlarda henüz emekleme aşamasındadır; bu vakalar genellikle İstanbul veya İzmir'e yönlendirilse de temel ve orta-üst cerrahide kusursuzdur.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0286 416 38 10", 
        tr: {
            hospName: "Çan (Terzialan) & Ezine (Kestanbol) & Ayvacık (Külahlı) Kaplıcaları",
            shortDesc: "🌡️ Antik çağlardan beri kullanılan, radyoaktif ve tuzlu mineralleriyle deri ve eklem hastalıklarında 'arkeolojik şifa' kaynağı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Tarihsel Şifa Gücü</h4>
                <ul>
                    <li>🧪 <strong>Kestanbol (Ezine) Suları:</strong> Yüksek klorür ve sodyum içeriğiyle, özellikle kadın hastalıkları ve kronik iltihabi durumların banyo kürlerinde etkindir.</li>
                    <li>🫁 <strong>Çan Kaplıcaları:</strong> Kükürtlü yapısı ve suyun buharlaşma kalitesi, kronik üst solunum yolu rahatsızlıklarında (sinüzit, rinit) doğal bir inhalasyon desteği sunar.</li>
                    <li>🦴 <strong>Termal Radyoaktivite:</strong> Bölgedeki bazı kaynakların düşük dozlu radyoaktif özelliği, sinir sistemi üzerinde yatıştırıcı ve ağrı eşiğini yükseltici etki yapar.</li>
                    <li>🧖‍♂️ <strong>Çamur Banyosu:</strong> Özellikle Ayvacık hattındaki mineralli çamurlar, eklem sertliklerini gidermede ve cilt temizliğinde 'peloid' tedavisi olarak uygulanır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Çanakkale termal suları, Afyon kadar popüler olmasa da tıbbi içerik bakımından çok daha "karakteristik" ve yoğundur. <strong>Dürüst Analiz:</strong> Tesisleşme genellikle butik veya orta ölçeklidir. Büyük bir termal su parkı yerine, sessiz ve doğa içinde şifa arayan 'sağlık bilinçli' kitleye hitap eder.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0286 217 11 00", 
        tr: {
            hospName: "Çanakkale Huzurevi Yaşlı Bakım Merkezi & Özel Assos Geriatri Alanları",
            shortDesc: "👴 Kuzey Ege'nin iyotlu havası ve düşük nem oranıyla, solunum dostu bir 'ikinci bahar' lokasyonu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Ekolojik Konfor</h4>
                <ul>
                    <li>🌬️ <strong>KOAH ve Astım Dostu:</strong> Çanakkale Boğazı'nın sürekli hava sirkülasyonu, akciğer kapasitesi düşen yaşlılar için doğal bir oksijen konsantratörü görevi görür.</li>
                    <li>🧑‍⚕️ <strong>Multidisipliner İzlem:</strong> Üniversite hastanesinin geriatri kürsüsüyle koordineli, periyodik sağlık kontrolleri ve rasyonel ilaç kullanımı takibi.</li>
                    <li>🧠 <strong>Psikososyal Rehabilitasyon:</strong> Şehrin tarihi dokusuyla iç içe, el sanatları ve bahçe terapisi odaklı zihinsel zindelik programları.</li>
                    <li>🍂 <strong>Sakin Şehir (Cittaslow) Etkisi:</strong> Gökçeada gibi bölgelerin sunduğu 'yavaş yaşam' felsefesinin yaşlılar üzerindeki tansiyon düşürücü etkisi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Çanakkale, emekli doktor ve bürokratların en çok tercih ettiği illerden biridir. Bu durum, yaşlı bakım kalitesini "kültürel" olarak yükseltmiştir. Lüks özel bakım evleri sayısı artmaktadır ancak merkezdeki kamu tesislerinde sıra beklemek gerekebilir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0286 263 59 50",
        tr: {
            hospName: "ÇOMÜ Fizik Tedavi ve Rehabilitasyon Ünitesi & Özel Özel Eğitim Birimleri",
            shortDesc: "♿ Ortopedik engellerden nörolojik kayıplara kadar, akademik temelli manuel ve cihaz destekli rehabilitasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık Alanları ve Tedavi Protokolleri</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (paralizi) sonrası hastanın öz bakım becerilerini geri kazanması için geliştirilen proprioseptif egzersizler.</li>
                    <li>🦵 <strong>Ekstremite Rehabilitasyonu:</strong> Amputasyon veya ağır travmalar sonrası protez uyumu ve yürüme analizi laboratuvarları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Kronik ağrı (miyofasiyal ağrı) yönetiminde yüksek frekanslı cihazlar ve akupunktur destekli fizik tedavi.</li>
                    <li>🧒 <strong>Pediatrik Gelişim:</strong> CP (Serebral Palsi) hastası çocuklar için duyusal bütünleme ve özel fizyoterapi seansları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Akademik kadro çok yetkindir ancak robotik yürüme sistemleri (Lokomat) her zaman erişilebilir olmayabilir. Daha çok "manuel terapi" ve "kişiselleştirilmiş egzersiz" odaklı bir başarı söz konusudur.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0286 214 00 00",
        tr: {
            hospName: "Kolin Hotel Wellness & Kazdağları Termal Spa Deneyimi",
            shortDesc: "🧖‍♂️ Boğaz manzarası eşliğinde sunulan modern wellness ritüelleri ve Kaz Dağları bitkileriyle aromaterapi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Detoks Protokolleri</h4>
                <ul>
                    <li>🌿 <strong>Kazdağları Aromaterapisi:</strong> Bölgenin endemik bitkilerinden (adaçayı, kekik, kantaron) elde edilen yağlarla yapılan bağışıklık güçlendirici masajlar.</li>
                    <li>🧖‍♂️ <strong>Hamam ve Sauna:</strong> Modern dizayn edilmiş buhar odaları ve geleneksel kesecilik hizmetinin hijyenik standartlarda sunumu.</li>
                    <li>😌 <strong>Anti-Aging Uygulamaları:</strong> Cilt yenileyici maskeler ve lenf drenaj masajları ile vücut ödemini atmaya yönelik kürler.</li>
                    <li>🍏 <strong>Detoks Mutfak:</strong> Sağlık paketleri dahilinde sunulan, tamamen yerel ve organik ürünlerden oluşan beslenme programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Çanakkale'de SPA hizmeti ikiye ayrılır: Şehirdeki lüks iş otelleri (Kolin) ve Kaz Dağları eteklerindeki ekolojik butik oteller. Gerçek bir ruhsal arınma için Kaz Dağları hattındaki 'Wellness' konseptli butik tesisler kesinlikle daha doyurucudur.</p>
            </div>`
        }
    }
},
   "ÇANKIRI": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Çankırı Devlet Hastanesi Modern Blok
            phone: "0376 213 27 27",
            tr: {
                hospName: "Çankırı Devlet Hastanesi ve Karatekin Üniversitesi Sağlık Birimleri",
                shortDesc: "🏥 Modern cerrahi altyapısı ve üniversite iş birliği ile bölge halkına ve çevre illere hizmet veren sağlık üssü.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Cerrahi ve Teknolojik Donanım</h4>
                    <p>Çankırı, özellikle son yıllarda yenilenen ameliyathane parkuru ve uzman kadrosuyla genel cerrahi ve ortopedi alanında güven teşkil etmektedir.</p>
                    
                    <h4>🩺 Cerrahi, Diş ve Estetik Odak Noktaları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyoloji:</strong> Modern anjiyo ünitesi ile kalp krizlerine hızlı müdahale ve stent/balon işlemleri.</li>
                        <li>🦷 <strong>Dental Turizm (Diş):</strong> Çankırı'daki özel poliklinikler ve Ağız Diş Sağlığı Merkezi, özellikle Ankara'ya yakınlık avantajıyla uygun fiyatlı implant ve zirkonyum kaplama seansları sunar.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Dermokozmetik:</strong> Şehirdeki bazı özel tıp merkezlerinde FUE tekniği ile saç ekimi ve mezoterapi uygulamaları uzman doktorlar denetiminde yapılmaktadır.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Özellikle kayak merkezi (Ilgaz) kazaları ve yaşlılık kaynaklı eklem operasyonlarında yüksek deneyim.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik safra kesesi, fıtık ve mide küçültme (obezite) cerrahisi.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Çankırı, temel ve orta segment cerrahide oldukça başarılıdır. Ancak açık kalp ameliyatlarının en kompleks safhaları veya ileri düzey çocuk onkolojisi vakaları için hastalar genellikle 1.5 saat mesafedeki Ankara'daki üst merkezlere sevk edilir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1626012861214-5b4d3606f528?q=80&w=400", // Çankırı Tuz Mağarası Görseli
            phone: "0376 213 45 21", // Çankırı Turizm Bilgi
            tr: {
                hospName: "Tuz Mağarası (Yer Altı Tuz Şehri) ve Çavundur Kaplıcaları",
                shortDesc: "🌡️ 5000 yıllık Hitit mirası Tuz Mağarası ile nefes darlığına mucizevi çözüm sunan Halo-Terapi merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">🌬️ Dünyada Nadir: Tuz Terapisi (Halo-Terapi)</h4>
                    <p>Çankırı Tuz Mağarası, sahip olduğu negatif iyonlu hava ve nem dengesiyle solunum yolu hastalıklarında dünya çapında bir şifa merkezidir.</p>
                    
                    <h4>🧪 Tedavi Edici Özellikler</h4>
                    <ul>
                        <li>🫁 <strong>Solunum Yolu:</strong> Astım, bronşit, KOAH ve nefes darlığı şikayetlerinde mağara içindeki mikro klima sayesinde belirgin rahatlama.</li>
                        <li>🩹 <strong>Cilt Sağlığı:</strong> Havadaki mikroskobik tuz partikülleri sayesinde egzama ve sivilce gibi cilt problemlerinde arınma.</li>
                        <li>🦴 <strong>Çavundur Kaplıcaları:</strong> 54°C sıcaklığa sahip mineralli sularıyla romatizmal ve eklem ağrılarında banyo kürü desteği.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Çankırı, sadece termal su değil, "Tuz Terapisi" ile sağlık turizminde özelleşmiştir. Mağara içindeki konaklama ve tedavi alanları uluslararası turistler için benzersiz bir deneyim sunar.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Çankırı Huzurevi
            phone: "0376 213 10 93", // Çankırı Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Çankırı İsmail Özdemir Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Temiz havası ve ailevi sıcaklığıyla yaşlıların huzur içinde yaşayabileceği profesyonel bakım tesisi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Bakım ve Yaşam Kalitesi</h4>
                    <p>Çankırı, gürültüden uzak ve güvenli şehir yapısıyla yaşlı bireylerin sosyal ve ruhsal sağlığını korumak için idealdir.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Koruma:</strong> Alzheimer ve demans hastaları için özel aktivite odaları ve sürekli hemşire gözetimi.</li>
                        <li>💊 <strong>Sağlık Koordinasyonu:</strong> Devlet hastanesi ile entegre çalışan sistem sayesinde kronik ilaç ve tahlil takibi.</li>
                        <li>🧑‍⚕️ <strong>Profesyonel Destek:</strong> 7/24 kişisel bakım, hijyen ve beslenme hizmetleri.</li>
                        <li>🎯 <strong>Moral Motivasyon:</strong> Tuz mağarası gezileri ve hobi bahçeleriyle desteklenen sosyal hayat.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Çankırı'da devlet kontrolündeki yaşlı bakım standartları çok yüksektir. Ancak özel, lüks segmentteki yaşlı yaşam köyleri için pazar henüz yeni oluşmaktadır.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Rehabilitasyon Merkezi
            phone: "0376 213 27 27",
            tr: {
                hospName: "Çankırı Devlet Hastanesi Fizik Tedavi ve Rehabilitasyon Ünitesi",
                shortDesc: "♿ Kas ve iskelet sistemi hastalıklarında modern cihazlar ve uzman fizyoterapistler eşliğinde iyileşme desteği.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fiziksel ve Fonksiyonel Rehabilitasyon</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç, inme ve sinir hasarları sonrası motor beceri kazandırma çalışmaları.</li>
                        <li>🦴 <strong>Ortopedik FTR:</strong> Ameliyat sonrası eklem kısıtlılıklarını giderme ve kas güçlendirme programları.</li>
                        <li>⚙️ <strong>Elektroterapi:</strong> Ağrı yönetimi ve doku iyileşmesi için son teknoloji fizik tedavi cihazları.</li>
                        <li>🧒 <strong>Pediatrik Destek:</strong> Engelli çocuklar için özel gelişim ve rehabilitasyon seansları.</li>
                    </ul>

                    <h4>🌟 Bölgesel Değerlendirme</h4>
                    <p>Çankırı, rehabilitasyon alanında bölge halkına yüksek standartlarda hizmet sunmaktadır. Özellikle Ilgaz bölgesindeki spor yaralanmaları için stratejik bir duraktır.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Ilgaz Wellness Görseli
            phone: "0376 213 10 23",
            tr: {
                hospName: "Ilgaz Dağı Wellness & Spa Tesisleri",
                shortDesc: "🧖‍♂️ Çam ormanları içinde, temiz dağ havası ve lüks spa hizmetleriyle bütünsel yenilenme.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Doğa İçinde Arınma</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Dağ Havası ve Spa:</strong> Oksijen oranı yüksek bir ortamda sauna, buhar odası ve geleneksel Türk hamamı.</li>
                        <li>💆 <strong>Tuz Masajı:</strong> Çankırı'nın doğal kaya tuzu kristallerinden üretilen yağlarla yapılan detoks masajları.</li>
                        <li>😌 <strong>Anti-Stres Programları:</strong> Şehir stresinden arınmak için yoga, meditasyon ve doğa yürüyüşü ile desteklenen spa kürleri.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Çankırı SPA sektörü, kış turizmi (Ilgaz) ve Tuz Mağarası turizmiyle harmanlanmıştır. Bu sayede sadece dinlenme değil, "temiz nefes" odaklı bir wellness sunar.</p>
                </div>`
            }
        }
    },
   "ÇORUM": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0364 219 30 00",
        tr: {
            hospName: "Hitit Üniversitesi Erol Olçok Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Bölgenin teknoloji üssü; 800 yatak kapasitesi ve hibrit ameliyathaneleriyle onkoloji ve kardiyovasküler cerrahide devasa bir merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 İleri Cerrahi Donanım ve Akademik Başarı</h4>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Koroner bypass, kalp kapağı tamiri ve anjiyoplasti işlemlerinde Ankara standartlarında, düşük komplikasyon oranlı bir merkez.</li>
                    <li>⚕️ <strong>Onkolojik Müdahale:</strong> Gastrointestinal sistem kanserleri ve üro-onkolojide multidisipliner yaklaşımla yürütülen radikal cerrahi operasyonlar.</li>
                    <li>🦴 <strong>Robotik Navigasyonlu Ortopedi:</strong> Protez cerrahisinde hata payını sıfıra indiren bilgisayar destekli navigasyon sistemleri ve artroskopik diz cerrahisi.</li>
                    <li>🧠 <strong>Nöroşirürji:</strong> Beyin tümörleri ve spinal cerrahide (bel fıtığı, omurga stabilizasyonu) mikrocerrahi ve nöromonitörizasyon teknikleri.</li>
                    <li>🦷 <strong>Dental Teknoloji:</strong> Hitit Üniversitesi Diş Hekimliği Fakültesi bünyesinde 3D çene modelleme ve ileri seviye dental implant uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🚀 <strong>Bölgesel Liderlik:</strong> Amasya, Çankırı ve Yozgat gibi çevre illerden gelen komplike vakaları yöneten "Bölge Referans Hastanesi" statüsündedir.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Çorum, özellikle Erol Olçok Hastanesi ile "Anadolu'da bir sağlık mucizesi" yaratmıştır. <strong>Güçlü Yönü:</strong> Hastanenin fiziksel büyüklüğü ve teknolojik cihaz parkuru (MR, Tomografi, Işın Tedavisi) Türkiye'nin en yenilerindendir. <strong>Eksik Yönü:</strong> Çok spesifik genetik tedaviler veya nadir hastalıklar için halen Ankara'daki üniversite hastanelerine bağımlılık sürmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0364 411 81 12", 
        tr: {
            hospName: "Mecitözü Figani (Beke) Kaplıcası & Hamamlıçay Köyü Kaynakları",
            shortDesc: "🌡️ Hititlerden miras kalan 'Beke Suyu'; bikarbonatlı ve sodyumlu yapısıyla metabolizma dostu antik şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etkiler</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Karbondioksitli:</strong> Suyun doğal karbondioksit oranı, banyo sırasında periferik kan dolaşımını hızlandırarak tansiyon dengelenmesine yardımcı olur.</li>
                    <li>🦴 <strong>Kronik Romatizmal Ağrılar:</strong> Eklem kireçlenmesi ve yumuşak doku romatizmalarında suyun mineral yoğunluğu sayesinde kas spazmlarının çözülmesi.</li>
                    <li>🧴 <strong>Cilt Rejenerasyonu:</strong> Egzama ve akne gibi dermatolojik sorunlarda suyun alkali yapısının hücre yenileyici etkisi.</li>
                    <li>🫁 <strong>İçme Kürleri:</strong> Mide asiditesini düzenleyici ve ürik asit atılımını (gut hastalığı) hızlandırıcı etkisiyle bilinir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Çorum termal suları, binlerce yıllık bir kullanım geçmişine sahip olmasına rağmen modern pazarlamada geride kalmıştır. <strong>Dürüst Analiz:</strong> Tesisleşme oldukça mütevazı ve yereldir. Lüks bir SPA deneyimi yerine, "gerçek mineral suyu" ve "bozulmamış doğal ortam" arayanlar için ideal bir şifa merkezidir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-aa92d2429402?q=80&w=400",
        phone: "0364 221 34 34", 
        tr: {
            hospName: "Çorum Atıl Üzelgün Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Anadolu'nun güvenli ve sakin dokusunda, aile sıcaklığını koruyan profesyonel geriatrik destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik</h4>
                <ul>
                    <li>🍂 <strong>Düşük Stresli Ortam:</strong> Anadolu'nun yavaş şehir hayatı, yaşlılarda anksiyete ve uyku bozukluklarını azaltan doğal bir yatıştırıcıdır.</li>
                    <li>🧑‍⚕️ <strong>Geriatrik Hemşirelik:</strong> Kronik hastalıkların (şeker, tansiyon) günlük takibi ve hastanenin uzman hekimleriyle koordineli ilaç yönetimi.</li>
                    <li>🧠 <strong>Mental Aktivite:</strong> Unutkanlığı geciktirici akıl oyunları, bahçe terapisi ve yerel Hitit kültürü gezileriyle desteklenen sosyal hayat.</li>
                    <li>🥗 <strong>Doğal Beslenme:</strong> Bölgenin baklagil ve tahıl odaklı zengin mutfağının yaşlı sağlığına uygun diyet programlarına entegrasyonu.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Çorum, yaşlı bakımı için "geleneksel ve güvenli" bir limandır. Özel sektörün lüks "Yaşlı Oteli" konsepti henüz yaygın değildir; ancak kamu tesislerindeki bakım kalitesi ve personelin Anadolu misafirperverliği bu açığı kapatmaktadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0364 219 30 00",
        tr: {
            hospName: "Hitit Üniversitesi FTR Kliniği & Özel Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Nörolojik rehabilitasyon ve post-operatif fizik tedavide bölgenin en donanımlı cihaz parkuruna sahip birimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Rehabilitasyon Teknolojisi ve Uygulamalar</h4>
                <ul>
                    <li>♿ <strong>İnme (Felç) Rehabilitasyonu:</strong> Nöro-kas stimülasyonu ve biofeedback yöntemleriyle kaybedilen motor fonksiyonların geri kazanılması süreci.</li>
                    <li>⚙️ <strong>Elektroterapi Laboratuvarı:</strong> TENS, interferansiyel akımlar ve lazer terapi ile kronik ağrı yönetimi.</li>
                    <li>🦵 <strong>Kineziterapi:</strong> Manuel terapi yöntemleri ve kişiye özel egzersiz reçeteleriyle hareket kısıtlılıklarının giderilmesi.</li>
                    <li>🧒 <strong>Özel Eğitim Entegrasyonu:</strong> Bedensel engelli bireyler için sosyal rehabilitasyon ve yardımcı cihaz (protez-ortez) eğitimleri.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Çorum'daki rehabilitasyon hizmetleri, büyük bir eğitim ve araştırma hastanesinin parçası olduğu için tıbbi güvenilirliği yüksektir. Ancak robotik dış iskelet (Exoskeleton) gibi en üst segment cihazlar için bekleme listeleri oluşabilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0364 225 66 66",
        tr: {
            hospName: "Anitta Hotel Wellness & Hitit Spa Kültürü",
            shortDesc: "🧖‍♂️ Modern şehir oteli konforunda sunulan, Hitit hamam ritüelleriyle harmanlanmış profesyonel arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Rahatlama Protokolleri</h4>
                <ul>
                    <li>🧼 <strong>Hitit Usulü Hamam:</strong> Geleneksel kese-köpük ritüelinin modern hijyen standartlarıyla birleşimi.</li>
                    <li>💆 <strong>Medikal Masajlar:</strong> Kas tutulmaları ve stres kaynaklı gerginlikler için tetik nokta masajı ve aroma terapiler.</li>
                    <li>🧖‍♂️ <strong>Buhar ve Tuz Odası:</strong> Solunum yolu detoksu ve cildin mineralizasyonu için tasarlanmış modern üniteler.</li>
                    <li>😌 <strong>Dijital Detoks Alanları:</strong> Şehrin merkezinde sessiz ve huzurlu bir mola imkanı sunan dinlenme bölümleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Çorum'da SPA sektörü lüks iş otelleri bünyesinde çok gelişmiştir. Şehir dışından gelen misafirler için kusursuz bir hizmet sunulurken, bağımsız butik SPA merkezi sayısı sınırlıdır.</p>
            </div>`
        }
    }
},
 "DENIZLI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0258 296 20 00",
        tr: {
            hospName: "Pamukkale Üniversitesi (PAÜ) Hastaneleri & Denizli Şehir Hastanesi",
            shortDesc: "🏥 Ege'nin cerrahi inovasyon merkezi; organ nakli, ileri kardiyoloji ve teknolojik cerrahide uluslararası akreditasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 İleri Cerrahi ve Akademik Mükemmeliyet</h4>
                <ul>
                    <li>🧬 <strong>Organ Nakli (Transplantasyon):</strong> Böbrek ve karaciğer naklinde Ege Bölgesi'nin en aktif akademik birimlerinden biri.</li>
                    <li>🫀 <strong>İleri Kardiyoloji & KVC:</strong> TAVI (ameliyatsız kapak değişimi) ve minimal invaziv kalp cerrahisinde yüksek başarı yüzdesi.</li>
                    <li>👁️ <strong>Göz Cerrahisi:</strong> Keratoplasti (kornea nakli) ve ileri düzey vitreoretinal cerrahi müdahaleler için teknolojik altyapı.</li>
                    <li>🦷 <strong>Dental İmplantoloji:</strong> PAÜ Diş Hekimliği Fakültesi bünyesinde zigomatik implant ve tam ağız rehabilitasyonu uzmanlığı.</li>
                    <li>🦴 <strong>Ortopedik Onkoloji:</strong> Kemik tümörleri ve kompleks revizyon cerrahisinde bölge referans noktası.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi ve Global Erişim</h4>
                <ul>
                    <li>🌍 <strong>Termal Rehabilitasyon Entegrasyonu:</strong> Ameliyat sonrası hastaların Pamukkale'nin şifalı sularıyla fizik tedavi süreçlerini birleştiren "Kür-Cerrahi" modeli.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Denizli, bir tıp şehri kimliğini sonuna kadar hak etmektedir. <strong>Güçlü Yönü:</strong> Üniversite hastanesinin cerrahi branşlardaki derinliği ve Şehir Hastanesi'nin modern kapasitesi mükemmel bir denge sunar. <strong>Eksik Yönü:</strong> Özel hastane segmentindeki "ultra-lüks VIP" hizmet beklentisi İstanbul kadar yaygın değildir, ancak tıbbi kalite akademik düzeydedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0258 271 41 56", 
        tr: {
            hospName: "Pamukkale Hierapolis & Karahayıt Kırmızı Su Kaynakları",
            shortDesc: "🌡️ UNESCO mirasındaki 'Beyaz' ve 'Kırmızı' şifa; yüksek demir ve kalsiyum içeriğiyle dünya çapında bir balneoterapi merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Benzersiz Mineral Analizi ve Tedavi Alanları</h4>
                <ul>
                    <li>🧪 <strong>Karahayıt Kırmızı Su:</strong> 58°C sıcaklıktaki demir zengini yapısı, özellikle kronik romatizma ve damar sertliği (arterioskleroz) tedavisinde klinik olarak kanıtlanmıştır.</li>
                    <li>🦴 <strong>Traverten Şifası:</strong> Kalsiyum karbonatlı sular, kemik erimesi (osteoporoz) ve ortopedik operasyon sonrası kemik kaynamasını hızlandırır.</li>
                    <li>🧴 <strong>Termal Peloid (Çamur):</strong> Bölgedeki mineralli çamurlar, sedef ve egzama gibi dermatolojik vakalarda doğal kortizon etkisi yaratır.</li>
                    <li>💧 <strong>Antik Havuz (Kleopatra):</strong> Tarihi atmosferde, kalp hızını yormayan ideal mineral dengesiyle sinir sistemi üzerinde yoğun gevşeme sağlar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Denizli, termal turizmde "Şampiyonlar Ligi"ndedir. <strong>Dürüst Analiz:</strong> Karahayıt bölgesi tamamen termal odaklıdır ve buradaki otellerin çoğu fizik tedavi birimlerine sahiptir. Sadece tatil değil, "tıbbi kür" arayanlar için Türkiye'deki en mantıklı noktadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0258 261 11 00", 
        tr: {
            hospName: "Denizli Huzurevi Yaşlı Bakım Merkezi & Özel Termal Yaşlı Bakım Evleri",
            shortDesc: "👴 Akdeniz ve Ege ikliminin kesiştiği, termal su destekli geriatrik rehabilitasyon ve huzur ortamı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🌡️ <strong>Geriatrik Hidroterapi:</strong> Yaşlılıkta yaygın olan eklem ağrıları için termal havuzlarda uzman gözetiminde yapılan su içi egzersizler.</li>
                    <li>🧑‍⚕️ <strong>7/24 Medikal Takip:</strong> Şehirdeki tıp fakültesi desteğiyle komplike yaşlılık hastalıklarının (hipertansiyon, diyabet) profesyonel yönetimi.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Doğa yürüyüşleri, el beceri atölyeleri ve Hierapolis kültür gezileriyle desteklenen bilişsel koruma programları.</li>
                    <li>🥗 <strong>Ege Mutfağı Diyeti:</strong> Zeytinyağı ve taze sebze odaklı beslenme düzeniyle yaşlılarda sindirim ve kalp sağlığı desteği.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Denizli, özellikle Karahayıt bölgesindeki "Termal Yaşlı Bakım" konseptiyle Türkiye'de öncüdür. Emeklilik dönemi için sağlıkla iç içe bir yaşam arayanlar için üst segment seçenekler mevcuttur.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0258 296 20 00",
        tr: {
            hospName: "PAÜ FTR Fizik Tedavi ve Rehabilitasyon Merkezi & Özel Nobel FTR Tıp Merkezi",
            shortDesc: "♿ Robotik rehabilitasyon ve termal suyun birleştiği, inme ve omurilik yaralanmalarında bölge lideri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 İleri Rehabilitasyon Teknolojileri</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme (Lokomat):</strong> Nörolojik hasar almış hastaların yürüme yetisini geri kazanması için kullanılan ileri teknoloji dış iskeletler.</li>
                    <li>🌊 <strong>Su Altı Fizyoterapi:</strong> Termal suyun kaldırma kuvvetiyle kaslar üzerindeki baskıyı azaltarak yapılan fonksiyonel rehabilitasyon.</li>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> Parkinson ve MS hastaları için özel denge ve koordinasyon geliştirme üniteleri.</li>
                    <li>⚙️ <strong>Uzay Terapisi:</strong> Serebral Palsili çocuklar için askılama sistemleriyle yerçekimsiz ortamda hareket eğitimi.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Denizli'deki FTR hizmetleri, tıbbi termal ile birleştiği için klasik fizik tedaviden çok daha hızlı sonuçlar vermektedir. Özellikle "Nobel" gibi merkezler uluslararası standartta olup, randevu yoğunluğu yüksektir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0258 271 41 05",
        tr: {
            hospName: "Colossae Thermal & Richmond Pamukkale Spa",
            shortDesc: "🧖‍♂️ Beyaz travertenlerin ruhunu taşıyan, medikal termal su ve lüks wellness konseptinin harmanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Holistik Wellness ve Arınma</h4>
                <ul>
                    <li>🧼 <strong>Termal Hamam Ritüeli:</strong> Mineralli su ile zenginleştirilmiş kese-köpük ve kil maskesi uygulamaları.</li>
                    <li>💆 <strong>Bali & Thai Terapileri:</strong> Uzak Doğu felsefesi ile Anadolu termal gücünü birleştiren karma masaj protokolleri.</li>
                    <li>🧖‍♂️ <strong>Tuz Odası ve Bio-Sauna:</strong> Üst solunum yolu temizliği ve derin hücresel detoks sağlayan ısıl terapi alanları.</li>
                    <li>😌 <strong>Anti-Stress Programları:</strong> Meditasyon, yoga ve özel aromatik banyolarla zihinsel dinginlik.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Denizli/Pamukkale hattı, Türkiye'nin en profesyonel SPA operasyonlarına sahiptir. Buradaki hizmet "turistik" bir masajdan ziyade, mineralli suyun gücüyle harmanlanmış bir "sağlık seansı" niteliğindedir.</p>
            </div>`
        }
    }
},
 "DIYARBAKIR": {
    surgery: {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", 
        phone: "0412 248 80 01",
        tr: {
            hospName: "Dicle Üniversitesi Tıp Fakültesi & Diyarbakır Gazi Yaşargil Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Mezopotamya'nın cerrahi kalesi; bölge illerine (Mardin, Batman, Siirt) hizmet veren devasa bir travma, onkoloji ve kalp cerrahisi merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Kompleks Cerrahi Kapasite</h4>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Çocuk kalp cerrahisinden (pediatrik KVC) kompleks erişkin bypass operasyonlarına kadar bölgenin en yüksek vaka hacmi.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin Cerrahisi):</strong> İsmini taşıdığı Gazi Yaşargil ekolüyle, mikrocerrahi yöntemlerle beyin tümörü ve anevrizma operasyonlarında uluslararası referans.</li>
                    <li>🧬 <strong>Onkolojik ve Robotik Cerrahi:</strong> Jineko-onkoloji ve üro-onkolojide disiplinler arası konsey kararlarıyla yürütülen radikal cerrahi müdahaleler.</li>
                    <li>🦴 <strong>Travma ve Ortopedi:</strong> Bölgesel yoğunluk nedeniyle ateşli silah yaralanmaları ve ağır travma cerrahisinde Türkiye'nin en deneyimli kadrolarından biri.</li>
                    <li>🦷 <strong>İleri Maksillofasiyal Cerrahi:</strong> Dicle Üniversitesi Diş Hekimliği Fakültesi bünyesinde çene deformiteleri ve kompleks implant cerrahisi uzmanlığı.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🌍 <strong>Sınır Ötesi Sağlık Turizmi:</strong> Irak ve komşu ülkelerden gelen hastalar için özel "Sağlık Turizmi Koordinasyon Birimi" ile sunulan kapsamlı cerrahi paketler.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Diyarbakır, tıbbi bilgi birikimi açısından bölgenin tartışmasız lideridir. <strong>Güçlü Yönü:</strong> Hekim kadrosunun vaka çeşitliliği ve cerrahi pratikliği inanılmaz düzeydedir. <strong>Eksik Yönü:</strong> Hastane yoğunluğu çok fazladır; bu durum randevu sürelerini ve otelcilik hizmetlerini (konaklama konforu) zaman zaman olumsuz etkileyebilir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?q=80&w=400",
        phone: "0412 411 21 04", 
        tr: {
            hospName: "Çermik (Melike Belkıs) Kaplıcaları",
            shortDesc: "🌡️ 'Şifa Şehri' Çermik; radyoaktif ve sülfatlı yapısıyla kısırlık (infertilite) ve romatizma tedavisinde tarihsel ün.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Radyoaktif ve Sülfatlı Sular:</strong> Çermik suyu, hücresel metabolizmayı hızlandıran ve iltihabı azaltan 'şiddetli şifa' kategorisindeki sulardandır.</li>
                    <li>👶 <strong>Kadın Hastalıkları:</strong> Geleneksel olarak 'Melike Belkıs' efsanesiyle birleşen suyun, kronik pelvik inflamasyon ve kısırlık destek tedavilerindeki olumlu etkileri.</li>
                    <li>🦴 <strong>Eklem ve Omurga:</strong> İltihaplı eklem romatizması (Ankilozan Spondilit) ve dejeneratif eklem hastalıklarında (Kireçlenme) ağrı eşiğini yükseltici etki.</li>
                    <li>🧴 <strong>Deri Terapisi:</strong> Üst deri tabakasını yenileyen mineral yapısıyla sedef ve kronik akne tedavisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Çermik, Doğu ve Güneydoğu Anadolu'nun en önemli termal destinasyonudur. <strong>Dürüst Analiz:</strong> Tesis kalitesi son yıllarda yapılan yeni yatırımlarla artmıştır ancak halen Afyon veya Bursa'daki "lüks termal otel" segmentinden ziyade "şifa odaklı kaplıca" kültürünü korumaktadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0412 237 40 40", 
        tr: {
            hospName: "Diyarbakır Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Kültürel değerlerin ve yaşlıya saygının temel alındığı, sosyal destek odaklı bakım süreci.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Bakım ve Geriatrik Destek</h4>
                <ul>
                    <li>🤝 <strong>Güçlü Sosyal Bağlar:</strong> Bölgenin aile yapısına uygun, yaşlıları toplumdan koparmayan sosyal aktivite ve ziyaret programları.</li>
                    <li>🧑‍⚕️ <strong>Hemşirelik Takibi:</strong> Üniversite hastanesiyle koordineli, kronik hastalık yönetimi ve düzenli geriatrik taramalar.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Tarihi Sur içi gezileri ve dini/kültürel aktivitelerle desteklenen, yaşlının manevi dünyasını diri tutan yaklaşımlar.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Diyarbakır'da yaşlı bakımı daha çok kamu eliyle yürütülmektedir. Özel lüks bakım evi sektörü çok kısıtlıdır; ancak sunulan hizmet "Anadolu insanının şefkati" ilkesiyle oldukça yüksek kalitededir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0412 248 80 01",
        tr: {
            hospName: "Dicle Üniversitesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Ağır nörolojik vakalarda ve travma sonrası rehabilitasyonda bölgenin akademik referans birimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık ve Rehabilitasyon Alanları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Omurilik yaralanmaları ve inme (felç) sonrası hastanın bağımsızlık seviyesini artırmaya yönelik yoğun fizik tedavi.</li>
                    <li>⚙️ <strong>Elektro-Fizyoterapi:</strong> Lazer, ultrason ve vakum terapileriyle desteklenen ağrı yönetimi protokolleri.</li>
                    <li>🦵 <strong>Ortez-Protez Eğitimi:</strong> Uzuv kayıpları sonrası modern protez kullanımı ve yürüme analizi eğitimleri.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Diyarbakır'daki rehabilitasyon hizmetleri çok geniş bir hasta popülasyonuna hitap ettiği için ekip çok deneyimlidir. Ancak en üst düzey robotik sistemler için her zaman üniversite imkanları zorlanmalıdır; özel merkezlerde kapasite daha sınırlı kalabilmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0412 229 90 00",
        tr: {
            hospName: "Diyarbakır Şehir Otelleri (Divan, Radisson) & Geleneksel Hamamlar",
            shortDesc: "🧖‍♂️ Tarihi Mezopotamya hamam ritüellerinin modern wellness ve lüks otel konforuyla buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Kültürel Arınma</h4>
                <ul>
                    <li>🧼 <strong>Sur Hamam Ritüelleri:</strong> Tarihi dokuda, geleneksel kese-köpük ve aromatik yağlarla yapılan derin temizlik.</li>
                    <li>💆 <strong>Medikal ve Klasik Masajlar:</strong> Şehir hayatının stresini atmaya yönelik tetik nokta masajı ve refleksoloji uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Lüks oteller bünyesindeki sauna, buhar odası ve şok havuzları ile sunulan wellness hizmetleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Diyarbakır'da SPA sektörü 5 yıldızlı oteller bünyesinde kusursuz bir seviyededir. Geleneksel hamam arayanlar için Sur bölgesi, lüks wellness arayanlar için ise Kayapınar bölgesi tercih edilmelidir.</p>
            </div>`
        }
    }
},
   "EDIRNE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0284 235 76 41",
        tr: {
            hospName: "Trakya Üniversitesi Tıp Fakültesi Hastanesi & Edirne Sultan 1. Murat Devlet Hastanesi",
            shortDesc: "🏥 Balkanlar'ın ve Trakya'nın en büyük akademik sağlık üssü; organ nakli, ileri kardiyoloji ve onkolojik cerrahide uluslararası referans merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Üst Seviye Cerrahi Kapasite</h4>
                <ul>
                    <li>🧬 <strong>Organ Nakli Merkezi:</strong> Böbrek nakli operasyonlarında Türkiye'nin en köklü ve yüksek vaka başarı oranına sahip akademik birimlerinden biri.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Minimal invaziv kalp ameliyatları ve kompleks aort cerrahisinde bölge dışından (Balkan ülkelerinden) hasta kabul eden uzman kadro.</li>
                    <li>👁️ <strong>İleri Göz Cerrahisi:</strong> Kornea nakli ve vitreoretinal cerrahide en son teknolojik donanımla sunulan müdahale imkanları.</li>
                    <li>🦴 <strong>Ortopedik Onkoloji:</strong> Kemik ve yumuşak doku tümörleri cerrahisinde multidisipliner yaklaşımla yürütülen zorlu operasyonlar.</li>
                    <li>🦷 <strong>Maksillofasiyal Cerrahi:</strong> Trakya Üniversitesi Diş Hekimliği Fakültesi bünyesinde ileri çene cerrahisi ve kompleks gömülü diş operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi Stratejik Analizi</h4>
                <ul>
                    <li>🌍 <strong>Balkanlar Referans Noktası:</strong> Bulgaristan ve Yunanistan başta olmak üzere Balkan coğrafyası için 'Sağlık Turizmi Yetki Belgesi' ile profesyonel hasta yönetimi.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Edirne, akademik bilgi birikimiyle Trakya'nın tartışmasız lideridir. <strong>Güçlü Yönü:</strong> Üniversite hastanesinin uzmanlık derinliği ve vaka çeşitliliği İstanbul'daki büyük merkezlerle yarışır düzeydedir. <strong>Eksik Yönü:</strong> Hastane binalarının bazı bölümlerinde modernizasyon ihtiyacı hissedilse de tıbbi müdahale kalitesi bu açığı kapatmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0284 213 91 51", 
        tr: {
            hospName: "Edirne Sarayiçi & Keşan (Yerlisu) Kaynakları",
            shortDesc: "🌡️ Tarihsel şifa mirası; kükürtlü ve mineralli yapısıyla deri hastalıkları ve romatizmal ağrılarda destekleyici doğal kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Tarihsel Şifa Gücü</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Bikarbonatlı:</strong> Suyun doğal kükürt oranı, özellikle sedef, egzama ve akne gibi inatçı dermatolojik vakalarda hücre yenilenmesini hızlandırır.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Yumuşak doku romatizması (fibromiyalji) ve eklem kireçlenmelerinde ağrı dindirici banyo kürleri.</li>
                    <li>💧 <strong>Metabolik Etki:</strong> Bikarbonatlı yapısı sayesinde içme kürlerinde sindirim sistemi fonksiyonlarını düzenleyici potansiyel.</li>
                    <li>🏛️ <strong>Darüşşifa Geleneği:</strong> Edirne'nin müzik ve su sesiyle tedavi eden tarihi tıp mirasının modern termal yaklaşımlarla harmanlanması.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Edirne, termal potansiyelini modern tesisleşmeye tam olarak yansıtamamıştır. <strong>Dürüst Analiz:</strong> Büyük bir 'Thermal Resort' konseptinden ziyade, butik tesisler ve geleneksel kullanım ön plandadır. Gerçek bir termal tatil köyü arayanlar komşu illeri tercih edebilir ancak tıbbi su kalitesi oldukça yüksektir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0284 212 10 33", 
        tr: {
            hospName: "Edirne Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Balkan esintisi ve sakin nehir kıyısı atmosferinde, profesyonel geriatrik bakım ve sosyal esenlik.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🌬️ <strong>İdeal Mikro-Klima:</strong> Meriç ve Tunca nehirlerinin yarattığı nem dengesiyle solunum sıkıntısı çekmeyen yaşlılar için huzurlu bir ortam.</li>
                    <li>🧑‍⚕️ <strong>7/24 Tıbbi Gözlem:</strong> Üniversite hastanesinin geriatri ve iç hastalıkları uzmanlarıyla koordineli, kronik hastalık yönetimi.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Tarihi doku içinde yapılan kültür gezileri, kütüphane etkinlikleri ve el sanatları atölyeleriyle mental zindelik.</li>
                    <li>🥗 <strong>Trakya Mutfağı Diyeti:</strong> Bölgesel doğal ürünlerle hazırlanan, yaşlı sağlığına uygun dengeli beslenme programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Edirne, yaşlılar için 'yürünebilir ve güvenli' bir şehirdir. Kamu tesisleri yüksek doluluk oranına sahiptir. Özel lüks bakım evleri sayısı artmaya başlamıştır ve özellikle şehir dışından (İstanbul'dan) gelen emekliler için cazibe merkezidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0284 235 76 41",
        tr: {
            hospName: "Trakya Üniversitesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik rehabilitasyonda akademik uzmanlık; felçli ve engelli bireyler için kapsamlı fizik tedavi protokolleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık ve Rehabilitasyon Alanları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (paralizi) ve MS hastaları için denge-koordinasyon ve yürüme yetisi kazandırma seansları.</li>
                    <li>⚙️ <strong>Post-Operatif FTR:</strong> Ortopedik ameliyatlar (protez vb.) sonrası hastanın mobilizasyonunu hızlandıran özel egzersizler.</li>
                    <li>🦵 <strong>Lenfödem Tedavisi:</strong> Cerrahi sonrası gelişen lenf ödemi için profesyonel masaj ve bandajlama teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Destek:</strong> Serebral Palsili çocuklar için duyu bütünleme ve özel fizyoterapi üniteleri.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Akademik kadronun bilgi düzeyi çok yüksektir ancak robotik rehabilitasyon cihazlarına erişim için kamu tarafında bekleme listeleri oluşabilmektedir. Kişiye özel manuel terapi ve egzersiz programlarında Trakya'nın en iyisidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0284 213 00 00",
        tr: {
            hospName: "Edirne Şehir Otelleri & Margi Wellness Spa",
            shortDesc: "🧖‍♂️ Geleneksel hamam ritüellerinin Trakya misafirperverliği ve modern lüksle buluştuğu noktada wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Arınma Protokolleri</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Balkan Hamamı:</strong> Aslına uygun kese-köpük ritüelleri ve bitkisel sabunlarla vücut arınması.</li>
                    <li>💆 <strong>Aroma Terapi Masajları:</strong> Stres giderici doğal yağlarla yapılan, ruhsal ve bedensel gevşeme sağlayan masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Spa Alanları:</strong> Sauna, buhar odası ve kapalı havuz imkanlarıyla sunulan bütünsel wellness hizmeti.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Edirne'de SPA hizmeti daha çok 5 yıldızlı şehir otelleri bünyesinde yoğunlaşmıştır. Hizmet kalitesi 'business' standartlarında olup, profesyonel bir rahatlama sunmaktadır.</p>
            </div>`
        }
    }
},
 "ELAZIG": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0424 233 33 33",
        tr: {
            hospName: "Fırat Üniversitesi Hastanesi & Elazığ Fethi Sekin Şehir Hastanesi",
            shortDesc: "🏥 Doğu Anadolu'nun 'Sağlık Üssü'; organ nakli, ileri kardiyoloji ve yanık ünitesinde bölge illerinin tamamına hizmet veren devasa kompleks.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Üst Segment Cerrahi</h4>
                <ul>
                    <li>🧬 <strong>Organ Nakli (Transplantasyon):</strong> Karaciğer ve böbrek naklinde Doğu Anadolu'nun en yüksek vaka hacmine ve teknik donanımına sahip birimi.</li>
                    <li>🫀 <strong>İleri Kardiyovasküler Cerrahi:</strong> Çocuk kalp cerrahisi (Pediatrik KVC) dahil olmak üzere, kapalı bypass ve kalp kapağı tamirlerinde uluslararası standartlar.</li>
                    <li>🔥 <strong>Yanık Merkezi:</strong> Türkiye'nin en kapsamlı yanık tedavi ünitelerinden biri; cerrahi debridman ve deri grefti uygulamalarında uzmanlaşmış kadro.</li>
                    <li>🧠 <strong>Nöroşirürji:</strong> Tümör cerrahisi ve spinal stabilizasyon operasyonlarında nöromonitörizasyon destekli güvenli müdahale.</li>
                    <li>🦷 <strong>Çene Cerrahisi:</strong> Fırat Üniversitesi Diş Hekimliği Fakültesi bünyesinde ileri seviye maksillofasiyal cerrahi ve kemik ogmentasyonu.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🌍 <strong>Bölgesel Liderlik:</strong> Bingöl, Tunceli, Muş ve Malatya hattından gelen en komplike vakaların nihai çözüm noktası ("Referans Hastane").</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Elazığ, sağlık altyapısı bakımından Anadolu'nun en şanslı illerinden biridir. <strong>Güçlü Yönü:</strong> Şehir Hastanesi'nin fiziksel konforu ile Üniversite Hastanesi'nin akademik bilgisi kusursuz birleşmiştir. <strong>Eksik Yönü:</strong> Bölgesel sevk merkezi olması nedeniyle poliklinik ve acil servislerde aşırı yoğunluk yaşanabilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0424 611 20 23", 
        tr: {
            hospName: "Karakoçan Golan Kaplıcaları & Cip Barajı Termal Kaynakları",
            shortDesc: "🌡️ Peri Çayı kıyısında, sodyum ve kalsiyum zengini yapısıyla eklem ve deri hastalıklarında doğal şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Tedavi Gücü</h4>
                <ul>
                    <li>🧪 <strong>Sodyum Bikarbonatlı Sular:</strong> Mide asiditesini düzenleyici içme kürleri ve sindirim sistemi rahatsızlıklarında destekleyici etki.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kireçlenme, siyatik ve bel fıtığı kaynaklı kronik ağrılarda kas gevşetici ve inflamasyon azaltıcı banyo kürleri.</li>
                    <li>🧴 <strong>Dermatolojik Fayda:</strong> Suyun pH dengesi, inatçı kaşıntılar ve kronik deri lezyonlarının iyileşme sürecini destekler.</li>
                    <li>😌 <strong>Nörolojik Gevşeme:</strong> Mineralli suyun ısıl etkisiyle sinir uçları üzerinde yarattığı sedatif (sakinleştirici) tesir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Elazığ termal suları, özellikle Golan bölgesiyle doğa turizmi ve sağlığı birleştirir. <strong>Dürüst Analiz:</strong> Tesisleşme orta segmenttedir. Lüks bir "Thermal Spa Resort" beklentisinden ziyade, şifaya odaklanan ve doğayla iç içe olan aile tipi tesisler ön plandadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0424 248 11 00", 
        tr: {
            hospName: "Elazığ Gazi Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 İleri tıp olanaklarına komşu, sosyal dayanışmanın güçlü olduğu profesyonel yaşlı yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Hızlı Tıbbi Erişim:</strong> Şehir Hastanesi ve Üniversite'nin varlığı sayesinde acil sağlık durumlarında en hızlı müdahale şansı.</li>
                    <li>🧑‍⚕️ <strong>Geriatrik Takip:</strong> Yaşlılığa bağlı kronik hastalıkların profesyonel hemşire ve doktor gözetiminde kesintisiz izlemi.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Harput kültürüyle harmanlanmış sosyal aktiviteler, el sanatları ve bahçe terapisi uygulamaları.</li>
                    <li>🥗 <strong>Dengeli Beslenme:</strong> Bölgesel doğal gıdalarla hazırlanan, yaşlı metabolizmasına uygun diyet programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Elazığ, "Emekli ve Yaşlı Dostu" bir şehirdir. Kamu tesislerindeki bakım kalitesi standartların üzerindedir. Özel bakım evi seçenekleri de yavaş yavaş gelişmektedir ancak merkezdeki kamu yoğunluğu dikkat çekicidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0424 233 33 33",
        tr: {
            hospName: "Fırat Üniversitesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nöro-rehabilitasyonda bölge lideri; inme ve omurilik yaralanmalarında kapsamlı fizik tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık ve Rehabilitasyon Alanları</h4>
                <ul>
                    <li>♿ <strong>İnme (Felç) Rehabilitasyonu:</strong> Nöromüsküler stimülasyon ve manuel terapiyle hareket kabiliyetini artırma protokolleri.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Ağrı yönetiminde kullanılan son teknoloji ultrason, lazer ve kısa dalga diardi sistemleri.</li>
                    <li>🦵 <strong>Kineziterapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik profesyonel egzersiz seansları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral Palsili çocuklar için duyu bütünleme ve özel gelişim alanları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Elazığ, fizik tedavi konusunda çok tecrübeli bir hekim ve fizyoterapist kadrosuna sahiptir. Robotik rehabilitasyon imkanları mevcuttur ancak vaka yoğunluğu nedeniyle bekleme süreleri söz konusu olabilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0424 224 00 00",
        tr: {
            hospName: "Elazığ Windy Hill & Şehir Otelleri Wellness Alanları",
            shortDesc: "🧖‍♂️ Geleneksel hamam kültürünün modern wellness hizmetleriyle harmanlandığı butik rahatlama alanları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness ve Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Klasik kese-köpük ritüeli ile fiziksel temizlik ve gözenek arınması.</li>
                    <li>💆 <strong>Aromaterapi Masajları:</strong> Bitkisel özlü yağlarla sunulan, günlük stresi ve kas yorgunluğunu gideren masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odası:</strong> Vücut ısısını dengeleyerek toksin atımını hızlandıran modern ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Elazığ'da SPA hizmetleri 4 ve 5 yıldızlı şehir otelleri bünyesinde yoğunlaşmıştır. Hizmet kalitesi standart beklentileri karşılar düzeyde olup, profesyonel bir dinlenme imkanı sunar.</p>
            </div>`
        }
    }
},
 "ERZINCAN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", 
        phone: "0446 212 22 22",
        tr: {
            hospName: "Erzincan Binali Yıldırım Üniversitesi (EBYÜ) Mengücek Gazi Eğitim ve Araştırma Hastanesi",
            shortDesc: "🏥 Modern mimari ve ileri teknolojiyle donatılmış, bölgeye hizmet veren kapsamlı bir cerrahi ve travma merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Modern Müdahale Gücü</h4>
                <ul>
                    <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik yöntemlerle obezite cerrahisi, safra kesesi ve fıtık operasyonlarında yüksek rutin başarı.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Açık kalp ameliyatları, koroner bypass ve anjiyografik müdahalelerde bölgenin güvenilir üssü.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Kış sporları merkezi (Ergan) olması sebebiyle kayak yaralanmaları ve kompleks kırık cerrahisinde uzmanlaşmış ekip.</li>
                    <li>👁️ <strong>Göz Hastalıkları:</strong> Modern fako cerrahisi ile katarakt ameliyatları ve tıbbi retina uygulamaları.</li>
                    <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> EBYÜ Diş Hekimliği Fakültesi bünyesinde gömülü diş cerrahisi, protez ve restoratif tedaviler.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejisi</h4>
                <ul>
                    <li>🚑 <strong>Helikopter Ambulans Entegrasyonu:</strong> Dağlık coğrafyada ulaşılamayan noktalardan hasta transferi ve acil cerrahiye hızlı erişim imkanı.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Erzincan, yeni hastane binasıyla fiziksel olarak Türkiye'nin en ferah sağlık tesislerinden birine sahiptir. <strong>Güçlü Yönü:</strong> Acil tıp ve travma yönetimi çok hızlıdır. <strong>Eksik Yönü:</strong> Organ nakli veya çok ileri onkolojik genetik tedaviler için genellikle Erzurum'daki bölge hastanesine sevk yapılmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0446 231 10 33", 
        tr: {
            hospName: "Erzincan Ekşisu Mesire Alanı & Ilıca Termal Tesisleri",
            shortDesc: "🌡️ Magnezyum ve kalsiyum zengini 'Ekşisu'; hem içme kürü hem de banyo terapisiyle mide ve eklem dostu doğal mucize.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Doğal Şifa</h4>
                <ul>
                    <li>🧪 <strong>Magnezyumlu ve Karbondioksitli:</strong> Suyun doğal gazlı yapısı, sindirim sistemi hareketliliğini artırır ve mide rahatsızlıklarında yatıştırıcıdır.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Ilıca bölgesindeki sıcak suların kireçlenme ve bel ağrıları üzerindeki spazm çözücü etkisi.</li>
                    <li>💧 <strong>İçme Kürleri:</strong> Böbrek taşı oluşumunu önleyici ve ürik asit atılımını hızlandırıcı alkali su yapısı.</li>
                    <li>🧴 <strong>Dermatolojik Fayda:</strong> Cilt üzerindeki mineralli katman sayesinde hafif dereceli egzama ve kuruluk sorunlarında iyileşme desteği.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Erzincan Ekşisu, Türkiye'nin en kaliteli doğal maden suyu kaynaklarından biridir. <strong>Dürüst Analiz:</strong> Tesisleşme daha çok yerel belediye iştirakli ve mesire alanı konseptindedir. 5 yıldızlı lüks bir termal konaklama sektörü henüz oluşmamıştır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400",
        phone: "0446 226 03 01", 
        tr: {
            hospName: "Erzincan Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Geniş yeşil alanlar içinde, yatay mimariyle uyumlu, sakin ve güvenli yaşlı yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik</h4>
                <ul>
                    <li>🌬️ <strong>Havadar Şehir Yapısı:</strong> Geniş caddeleri ve parklarıyla yaşlılar için "yürünebilir şehir" imkanı sunan düşük stresli ortam.</li>
                    <li>🧑‍⚕️ <strong>Düzenli Sağlık Kontrolü:</strong> Mengücek Gazi Hastanesi ile koordineli periyodik geriatrik taramalar.</li>
                    <li>🤝 <strong>Kültürel Etkinlikler:</strong> Bakırcılık ve yerel el sanatları gibi uğraşlarla desteklenen, yaşlıların üretkenliğini koruyan programlar.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Erzincan, deprem sonrası planlı yapısıyla yaşlılar için güvenli bir şehirdir. Lüks özel bakım evi sektörü zayıftır ancak kamu tesisleri Anadolu'nun en ferah ve bakımlı örneklerindendir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1597762133085-5136c0a5116f?q=80&w=400",
        phone: "0446 212 22 22",
        tr: {
            hospName: "Erzincan FTR Ünitesi ve Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Ortopedik yaralanmalar ve inme sonrası temel fizik tedavi süreçlerinde profesyonel destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi Uygulamaları</h4>
                <ul>
                    <li>🦴 <strong>Post-Op Fizyoterapi:</strong> Kalça ve diz ameliyatları sonrası hastayı ayağa kaldıran standart rehabilitasyon protokolleri.</li>
                    <li>♿ <strong>Nörolojik Takip:</strong> İnme sonrası denge ve koordinasyon geliştirme, günlük yaşam becerilerini geri kazanma eğitimi.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Özel gereksinimli çocuklar için fiziksel destek ve bireysel gelişim seansları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Erzincan'da robotik yürüme teknolojisi (Lokomat vb.) sınırlıdır. Ciddi ve uzun süreli nörolojik rehabilitasyon vakaları için genellikle daha büyük merkezlere (Erzurum, Ankara) sevk gerekebilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=400",
        phone: "0446 224 00 00",
        tr: {
            hospName: "Erzincan Şehir Otelleri & Wellness Birimleri",
            shortDesc: "🧖‍♂️ Modern konaklama tesislerinde sunulan geleneksel hamam ve temel masaj hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness Deneyimi</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Şehir otelleri bünyesinde hijyenik kese-köpük ritüelleri.</li>
                    <li>💆 <strong>Klasik Masaj:</strong> Kas yorgunluğunu gidermeye yönelik temel aromaterapi masajları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar:</strong> Vücut detoksu sağlayan modern ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Erzincan'da lüks bir "Medical SPA" veya bağımsız "Wellness Resort" konsepti bulunmamaktadır. Hizmetler daha çok 4 yıldızlı şehir otellerinin sunduğu tamamlayıcı olanaklarla sınırlıdır.</p>
            </div>`
        }
    }
},
  "ERZURUM": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0442 344 66 66",
        tr: {
            hospName: "Atatürk Üniversitesi Araştırma Hastanesi & Erzurum Şehir Hastanesi",
            shortDesc: "🏥 Doğu'nun tıp kalesi; organ nakli, ileri onkoloji ve robotik cerrahide 5.000 yatak kapasitesini aşan devasa bir akademik ekosistem.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Üst Seviye Cerrahi Disiplin</h4>
                <ul>
                    <li>🧬 <strong>Organ Nakli Merkezi (Transplantasyon):</strong> Doğu Anadolu'nun en aktif karaciğer ve böbrek nakil merkezi. Canlıdan canlıya nakillerde ve post-op immünosupresif yönetimde uluslararası başarı oranları.</li>
                    <li>🤖 <strong>Robotik Cerrahi ve Minimal İnvaziv:</strong> Da Vinci robotik sistemleri ile üro-onkoloji, jinekoloji ve genel cerrahide milimetrik hassasiyetle yapılan kanser operasyonları.</li>
                    <li>🫀 <strong>Kardiyovasküler Mükemmeliyet:</strong> Pediatrik KVC (bebek kalp cerrahisi) dahil olmak üzere, kompleks aort cerrahisi ve kapalı kalp ameliyatlarında bölgenin tek yetkin adresi.</li>
                    <li>🔥 <strong>Yanık Tedavi ve Rekonstrüksiyon:</strong> Türkiye'nin en büyük yanık merkezlerinden biri; deri grefti, mikrocerrahi onarımlar ve hiperbarik oksijen tedavisi desteğiyle 3. derece yanıklarda hayat kurtarıcı müdahaleler.</li>
                    <li>🧠 <strong>İleri Nöroşirürji:</strong> Gamma Knife ve mikrocerrahi yöntemlerle beyin tümörü operasyonları, fonksiyonel beyin cerrahisi (pil tedavisi) ve kompleks spinal cerrahi.</li>
                    <li>🦷 <strong>Maksillofasiyal ve Estetik Diş:</strong> Atatürk Üniversitesi Diş Hekimliği Fakültesi bünyesinde kemik kaybı olan hastalarda ileri implantoloji ve çene kisti operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Stratejik Sağlık Yönetimi</h4>
                <ul>
                    <li>🌍 <strong>Bölgesel ve Uluslararası Sevk Merkezi:</strong> Doğu Anadolu'nun 14 ili ile Nahçıvan ve Gürcistan'dan gelen komplike vakaların yönetiminde "Yüksek İhtisas" seviyesinde hizmet.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Erzurum, tıbbi altyapı olarak Ankara ve İstanbul'un en iyi hastaneleriyle boy ölçüşür. <strong>Güçlü Yönü:</strong> Vaka çeşitliliği o kadar fazladır ki, cerrahlar "nadir hastalıklar" konusunda inanılmaz bir pratikliğe sahiptir. <strong>Eksik Yönü:</strong> Şehir Hastanesi ve Üniversite arasındaki mesafe ve yoğun kış koşulları, hastalar için lojistik bir zorluk oluşturabilir; ancak tıbbi sonuçlar bu zahmete değerdir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0442 315 50 00", 
        tr: {
            hospName: "Palandöken (Ilıca) Aziziye Kaplıcaları & Pasinler Termal Kaynakları",
            shortDesc: "🌡️ 40–45°C doğal sıcaklıkta, bikarbonatlı ve sodyumlu yapısıyla 'soğuk iklimde sıcak şifa' sunan medikal kürler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Florürlü Sular:</strong> Kemik dokusunun yenilenmesini hızlandıran florür içeriği, özellikle osteoporoz (kemik erimesi) ve kireçlenme vakalarında ana tedaviye güçlü destek verir.</li>
                    <li>🦴 <strong>Romatizmal ve Ortopedik Şifa:</strong> Kalça ve diz protez ameliyatları sonrası, suyun kaldırma kuvvetiyle eklemleri yormadan yapılan 'Termal Rehabilitasyon'.</li>
                    <li>🫁 <strong>İnhalasyon Tedavisi:</strong> Kaynaklardan çıkan mineralli buharın, kronik bronşit ve sinüzit hastalarında solunum yollarını yumuşatıcı etkisi.</li>
                    <li>🧴 <strong>Dermatolojik Onarım:</strong> Suyun pH dengesinin nötre yakın olması, sedef ve egzama gibi hassas cilt hastalıklarında tahrişsiz bir iyileşme sağlar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Erzurum termal suları, yüksek rakımın getirdiği temiz oksijenle birleşince vücudun metabolik hızını artırır. <strong>Dürüst Analiz:</strong> Aziziye/Ilıca bölgesi modern tesisleşmeye sahiptir ancak Pasinler bölgesi daha geleneksel kalmıştır. Medikal bir kür programı için Ilıca'daki 'Wellness' odaklı tesisler tercih edilmelidir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0442 235 15 15", 
        tr: {
            hospName: "Erzurum Huzurevi Yaşlı Bakım Merkezi & Özel Palandöken Geriatri Alanları",
            shortDesc: "👴 İleri tıp olanaklarının gölgesinde, palyatif bakım ve geriatrik rehabilitasyonda uzmanlaşmış yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Yaşlı Bakımı ve Esenlik</h4>
                <ul>
                    <li>🏥 <strong>Geriatri Anabilim Dalı Desteği:</strong> Üniversitenin geriatri kürsüsüyle entegre çalışan bakım evleri; demans, alzheimer ve parkinson yönetiminde akademik hassasiyet.</li>
                    <li>🧑‍⚕️ <strong>Palyatif ve Terminal Dönem Bakımı:</strong> Ağrı yönetimi (algoloji) ve son evre bakımında bölgenin en gelişmiş uzman kadrosu ve psikososyal destek ekibi.</li>
                    <li>🌬️ <strong>Yüksek Rakım Oksijen Terapisi:</strong> Palandöken eteklerindeki temiz hava kalitesinin yaşlıların solunum kapasitesi ve uyku kalitesi üzerindeki olumlu etkisi.</li>
                    <li>🤝 <strong>Manevi ve Sosyal Destek:</strong> Şehrin güçlü toplumsal bağları ile yaşlıların kendilerini değerli ve güvende hissettikleri bir sosyal ekosistem.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Erzurum, yaşlılar için "tıbbi güvenlik" açısından 10/10'dur. Ancak çok soğuk geçen kış ayları, yaşlıların dış mekân hareketliliğini yılın yarısında kısıtlayabilir. Bu yüzden tesis içi "kapalı kış bahçesi" ve "fizik tedavi salonları" olan merkezler önceliklidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0442 344 66 66",
        tr: {
            hospName: "Erzurum Bölge Eğitim ve Araştırma FTR Kliniği & Özel Doğu Rehabilitasyon",
            shortDesc: "♿ Nörolojik rehabilitasyonda Doğu'nun teknoloji üssü; robotik yürüme ve su içi terapiyle engelleri aşan merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Uygulamalar</h4>
                <ul>
                    <li>🤖 <strong>Robotik Rehabilitasyon:</strong> İleri derece inme ve omurilik yaralanmalı hastalar için kullanılan robotik yürütme cihazları ve üst ekstremite egzersiz robotları.</li>
                    <li>🌊 <strong>Hidroterapi Tankları:</strong> Termal suların tıbbi amaçlı kullanıldığı su içi rehabilitasyon havuzları ve su altı masajları.</li>
                    <li>🧠 <strong>Bilişsel Rehabilitasyon:</strong> Beyin hasarı sonrası dil ve konuşma terapisi, ince motor becerilerin geri kazanılması için ergoterapi uygulamaları.</li>
                    <li>⚙️ <strong>Ortez-Protez Atölyeleri:</strong> Hastaya özel üretilen dinamik ortezler ve biyomekanik protezlerle bağımsız hareket eğitimi.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Erzurum, fizik tedavi kalitesinde Ankara'daki büyük merkezleri aratmaz. Kamu hastanelerindeki donanım çok yenidir ancak çevre illerden gelen yoğun talep nedeniyle yoğun rehabilitasyon programları için önceden randevu planlaması kritiktir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0442 232 00 00",
        tr: {
            hospName: "Sway & Polat Palandöken Wellness - Xanadu Snow Spa",
            shortDesc: "🧖‍♂️ Kar manzarasında, soğuk-sıcak terapilerin ve dağ havasıyla harmanlanmış lüks wellness ritüellerinin buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Dağ Konseptli Wellness ve Detoks</h4>
                <ul>
                    <li>🪵 <strong>Snow-Spa Deneyimi:</strong> Dışarıda kar yağarken açık hava ısıtmalı havuzlar ve ardından yapılan şok kar masajları ile kan dolaşımı aktivasyonu.</li>
                    <li>💆 <strong>Medikal Sırt ve Boyun Masajları:</strong> Kayak sonrası oluşan kas spazmları ve laktik asit birikimini gidermeye yönelik derin doku masajları.</li>
                    <li>🧖‍♂️ <strong>Otunu Hamam ve Sauna:</strong> Selçuklu mimarisinden esinlenen otantik hamamlarda yapılan bitkisel yağlı kese ritüelleri.</li>
                    <li>😌 <strong>Yüksek Rakım Detoksu:</strong> Vücudun oksijen kullanımını artıran solunum egzersizleri ve anti-aging etkili cilt bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Erzurum'da SPA sektörü, kayak otelleri sayesinde "lüks ve butik" bir seviyededir. Şehir içindeki hamamlardan ziyade Palandöken hattındaki otellerin SPA merkezleri, dünya standartlarında bir hizmet ve ambiyans sunar.</p>
            </div>`
        }
    }
},
    "ESKISEHIR": {
        surgery: {
            img: "image_0.png", // Eskişehir Şehir Hastanesi'nin Gerçek ve Modern Dış Çekimi
            phone: "0222 611 40 00",
            tr: {
                hospName: "Eskişehir Şehir Hastanesi",
                shortDesc: "🏥 Yüksek yatak kapasitesi ve çok sayıda ameliyathanesi ile şehrin en büyük sağlık kompleksidir.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏨 Kurumsal Altyapı</h4>
                    <p>Sağlık turizmi kapsamında aktif hasta kabul edebilen tam teşekküllü merkez.</p>
                    
                    <h4>🩺 Öne Çıkan Cerrahi Yetkinlikler</h4>
                    <ul>
                        <li>❤️ <strong>Kalp ve Damar Cerrahi:</strong> Bypass ve anjiyo işlemleri başarıyla uygulanır.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Diz ve kalça protezi, kompleks kırık tedavileri.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahi:</strong> Bel-boyun fıtığı ve bazı beyin tümörü ameliyatları.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Safra kesesi, mide ve bağırsak ameliyatları.</li>
                        <li>👁️ <strong>Göz Cerrahi:</strong> Katarakt ve lazer operasyonları.</li>
                        <li>👩‍⚕️ <strong>Kadın Doğum:</strong> Tüm cerrahi müdahaleler yapılmaktadır.</li>
                        <li>⚖️ <strong>Obezite Cerrahi:</strong> Tüp mide (mide küçültme) işlemleri uygulanabilmektedir.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz Notu</h4>
                    <p>Eskişehir cerrahi açıdan yeterli altyapıya sahiptir; ancak organ nakli gibi ileri uzmanlık gerektiren işlemler genelde daha büyük şehirlerde yoğunlaşır.</p>
                </div>`
            }
        },
        thermal: {
            img: "image_2.png", // Sakarıılıca Kaplıcaları'nın Şifalı Havuzundan Gerçek Bir Kare
            phone: "0222 621 28 74",
            tr: {
                hospName: "Sakarıılıca Kaplıcaları",
                shortDesc: "🌡️ Termal su sıcaklığı yaklaşık 40–55°C olup mineralli yapıdadır.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">🧪 Tıbbi Endikasyonlar</h4>
                    <ul>
                        <li>🦴 Romatizma, kireçlenme ve eklem hastalıklarında destekleyici tedavi.</li>
                        <li>💪 Kas ağrıları, spor yaralanmaları ve ameliyat sonrası sertlikler.</li>
                        <li>🍽️ Sindirim sistemi rahatsızlıkları ve bazı kadın hastalıkları.</li>
                        <li>🫁 Solunum ve dolaşım sistemi sorunlarında destekleyici etki.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Durum</h4>
                    <p>Eskişehir termal turizmde güçlüdür ve tedavi amaçlı kullanım yaygındır.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Gerçekçi, huzurlu bir geriatri bakım odası/bahçesi
            phone: "0222 244 00 00", // Temsili Huzurevi Numarası
            tr: {
                hospName: "Eskişehir Huzurevi Yaşlı Bakım Merkezi",
                shortDesc: "👴 Yaşlı bireyler için güvenli, sosyal ve tıbbi takipli yaşam alanı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Özel Bakım Odakları</h4>
                    <ul>
                        <li>🧠 Alzheimer ve demans hastalarına yönelik özel bakım hizmetleri.</li>
                        <li>💊 Kronik hastalıkların düzenli ve profesyonel takibi.</li>
                        <li>🧑‍⚕️ Günlük bakım (beslenme, ilaç, temizlik) sağlanır.</li>
                        <li>🦽 Hareket kısıtlılığı olan bireyler için destek programları.</li>
                        <li>🎯 Sosyal aktiviteler ve psikolojik destek hizmetleri bulunur.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz Notu</h4>
                    <p>Hizmetler mevcut ve yeterlidir; ancak uluslararası yaşlı turizmi açısından yoğun tercih edilen bir merkez değildir.</p>
                </div>`
            }
        },
        disabled: {
            img: "image_5.png", // Eskişehir Şehir Hastanesi Fizik Tedavi Ünitesindeki Gerçek Bir Cihaz/Uygulama
            phone: "0222 611 40 00",
            tr: {
                hospName: "Eskişehir Şehir Hastanesi Rehabilitasyon Merkezi",
                shortDesc: "♿ Kas ve sinir sistemi hastalıkları için uzman ekip ve cihaz desteği.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fizik Tedavi Alanları</h4>
                    <ul>
                        <li>♿ Felç (inme) sonrası fizik tedavi ve rehabilitasyon.</li>
                        <li>🦴 Ortopedik ameliyat sonrası hareket kazandırma süreçleri.</li>
                        <li>💪 Kas hastalıkları ve hareket kısıtlılıkları tedavisi.</li>
                        <li>🧠 Nörolojik rehabilitasyon hizmetleri sunulur.</li>
                        <li>⚙️ Modern fizik tedavi cihazları mevcuttur.</li>
                    </ul>

                    <h4>🌟 Bölgesel Avantaj</h4>
                    <p>Termal kaynaklarla birlikte kullanıldığında rehabilitasyon sürecini destekleyen bir avantaj sağlar.</p>
                </div>`
            }
        },
        spa: {
            img: "image_7.png", // Odunpazarı'ndaki Tarihi ve Lüks Butik Otel SPA'larından Bir Görsel
            phone: "0222 621 28 74",
            tr: {
                hospName: "Sakarıılıca Termal Tesisleri - SPA",
                shortDesc: "🧖 Dinlenme, yenilenme ve stres azaltma odaklı termal lüks.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">💆 Sunulan Hizmetler</h4>
                    <ul>
                        <li>🧖‍♂️ Termal havuz, sauna ve buhar odası hizmetleri.</li>
                        <li>💆 Masaj ve rahatlatıcı terapiler uygulanır.</li>
                        <li>😌 Stres azaltma ve kas gevşetme programları.</li>
                    </ul>

                    <h4>➡️ Sektörel Durum</h4>
                    <p>Eskişehir’de spa genelde termal ile birlikte sunulur; sadece spa turizmi sınırlıdır.</p>
                </div>`
            }
        }
    },
    "GAZIANTEP": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0342 211 50 00",
        tr: {
            hospName: "Gaziantep Şehir Hastanesi & Gaziantep Üniversitesi Şahinbey Araştırma Hastanesi",
            shortDesc: "🏥 Ortadoğu'nun cerrahi köprüsü; 1.875 yataklı dev şehir hastanesi kompleksinde robotik cerrahiden hibrit ameliyathanelere kadar sınır ötesi sağlık hizmeti.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Teknolojili Cerrahi ve Stratejik Müdahaleler</h4>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Güneydoğu'nun en aktif bypass ve kapak cerrahisi merkezi; periferik damar tıkanıklıklarında kapalı (endovasküler) yöntemlerle bölge liderliği.</li>
                    <li>🧬 <strong>Onkolojik ve Robotik Cerrahi:</strong> Da Vinci robotik sistemleri ile özellikle üroloji ve jinekolojik kanser cerrahisinde uluslararası standartlarda vaka yönetimi.</li>
                    <li>🔥 <strong>Yanık ve Rekonstrüktif Cerrahi:</strong> Bölgedeki sanayi yoğunluğu nedeniyle ileri seviye yanık ünitesi ve deri grefti uygulamalarında yüksek cerrahi tecrübe.</li>
                    <li>🦴 <strong>İleri Ortopedi ve Travmatoloji:</strong> Kompleks kırıklar, kalça-diz protezleri ve sporcu sağlığı cerrahisinde navigasyon destekli operasyonlar.</li>
                    <li>👁️ <strong>Göz ve Vitreoretinal Cerrahi:</strong> Retina dekolmanı ve ileri katarakt vakalarında bölgedeki en donanımlı teknolojik altyapı.</li>
                    <li>🦷 <strong>Dental Maksillofasiyal Cerrahi:</strong> Gaziantep Üniversitesi Diş Hekimliği Fakültesi bünyesinde çene eklemi cerrahisi ve ileri implantoloji uzmanlığı.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi ve Lojistik Güç</h4>
                <ul>
                    <li>🌍 <strong>International Patient Center:</strong> Ortadoğu ve Balkanlar'dan gelen hastalar için havalimanı transferinden tercümanlığa kadar uçtan uca yönetilen profesyonel sağlık turizmi paketleri.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Gaziantep, Türkiye'nin en yüksek özel hastane yoğunluğuna sahip illerinden biridir. <strong>Güçlü Yönü:</strong> Özel sektörün çevikliği ile Şehir Hastanesi'nin devasa kapasitesi birleşmiştir; bekleme süreleri diğer büyükşehirlere göre daha optimize edilebilir. <strong>Eksik Yönü:</strong> Şehirdeki aşırı nüfus artışı ve bölge illerinden gelen yoğun sevk trafiği, kamu hastanelerinin acil servislerinde bazen kaotik bir yoğunluk yaratabilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0342 811 20 20", 
        tr: {
            hospName: "İslahiye (Şerefiye) Kaplıcaları & Doğanpınar Kaynakları",
            shortDesc: "🌡️ Kükürtlü ve bikarbonatlı yapısıyla deri hastalıkları ve sindirim sistemi şifasında yerel ama etkili doğal termal kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Yapısı ve Balneoterapi</h4>
                <ul>
                    <li>🧪 <strong>Kükürt Yoğunluğu:</strong> Özellikle sedef, kronik egzama ve mantar enfeksiyonlarında antimikrobiyal ve hücre yenileyici banyo kürleri.</li>
                    <li>🦴 <strong>Romatizmal Etki:</strong> İslahiye bölgesindeki sıcak suların kas ağrıları ve eklem tutulmaları üzerindeki gevşetici etkisi.</li>
                    <li>💧 <strong>Sindirim Destekli İçme Kürleri:</strong> Bikarbonatlı kaynak sularının mide asidini düzenleyici ve bağırsak hareketliliğini artırıcı potansiyeli.</li>
                    <li>🧖‍♂️ <strong>Çamur (Peloid) Terapisi:</strong> Cilt detoksu ve yumuşak doku romatizmalarında kullanılan mineralli çamur uygulamaları.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Gaziantep, termal turizmden ziyade gastronomi ve sanayi ile bilinir. <strong>Dürüst Analiz:</strong> Tesisleşme oldukça yereldir; Afyon veya Bursa düzeyinde "Lüks Thermal Resort" konsepti bulunmamaktadır. Kaynaklar daha çok şifa odaklı ve günübirlik ziyaretlere uygundur.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0342 338 00 00", 
        tr: {
            hospName: "Gaziantep Huzurevi Yaşlı Bakım Merkezi & Özel Şehir Geriatri Birimleri",
            shortDesc: "👴 Güçlü aile bağları ve toplumsal saygı kültürüyle harmanlanmış, modern geriatri takibi sunan yaşam alanları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Takip ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Palyatif Bakım Entegrasyonu:</strong> Şehirdeki büyük hastanelerle koordineli, terminal dönem ve kronik ağrılı yaşlılar için gelişmiş bakım üniteleri.</li>
                    <li>🧑‍⚕️ <strong>Diyabet ve Tansiyon Yönetimi:</strong> Gaziantep mutfağının getirdiği metabolik riskler göz önüne alınarak hazırlanan, uzman diyetisyen onaylı kişiye özel beslenme programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> El sanatları (bakır işleme, kutnu dokuma) ve sosyal aktivitelerle desteklenen, yaşlının toplumdaki üretkenliğini diri tutan yaklaşımlar.</li>
                    <li>🤝 <strong>Manevi Destek:</strong> Bölgenin kültürel dokusuna uygun, geleneksel değerlerin korunduğu huzurlu bir sosyal çevre.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Gaziantep'te yaşlı bakımı, yerel halkın ailevi hassasiyetleri nedeniyle çok yüksek bir saygınlığa sahiptir. Kamu tesisleri dışında özel bakım evlerinde de "otelcilik kalitesi" artış göstermektedir ancak genel doluluk oranları yüksektir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0342 360 60 60",
        tr: {
            hospName: "Gaziantep Üniversitesi FTR Klinikleri & Özel Engelli Rehabilitasyon Merkezleri",
            shortDesc: "♿ Ortopedik operasyonlar sonrası hızlandırılmış iyileşme ve ağır nörolojik vakalarda fizik tedavi uzmanlığı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uzmanlık Alanları ve Tedavi Teknolojileri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve travma sonrası motor fonksiyonların geri kazanılması için uygulanan biofeedback ve nöromüsküler stimülasyon.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat sonrası eklem sertliklerini önleyen, profesyonel fizyoterapist eşliğinde yürütülen egzersiz protokolleri.</li>
                    <li>⚙️ <strong>Elektroterapi Laboratuvarları:</strong> Kronik ağrı yönetimi için kullanılan yüksek teknolojili lazer, ultrason ve radyofrekans üniteleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral Palsili ve özel gereksinimli çocuklar için geniş kapsamlı duyu bütünleme ve fizik tedavi odaları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Gaziantep'te rehabilitasyon hizmetleri, özel hastanelerin rekabetçi yapısı sayesinde çok hızlı erişilebilirdir. Robotik rehabilitasyon sistemlerine (Lokomat vb.) erişim kamu hastanelerinde de mevcuttur ancak seans süreleri için planlama yapılması gerekir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0342 211 66 66",
        tr: {
            hospName: "Gaziantep Divan & Grand Hotel Spa - Tarihi Naib Hamamı",
            shortDesc: "🧖‍♂️ Tarihi İpekyolu hamam kültürünün, lüks iş otellerindeki modern wellness ve masaj terapileriyle buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Kültürel Wellness ve Arınma Ritüelleri</h4>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Deneyimi:</strong> Naib Hamamı gibi asırlık mekanlarda sunulan, geleneksel kese-köpük ve sabun masajı ile derinlemesine temizlik.</li>
                    <li>💆 <strong>Medikal ve Sporcu Masajları:</strong> Bölgedeki yoğun iş ve sanayi temposu için tasarlanmış, stres giderici derin doku masajları.</li>
                    <li>🧖‍♂️ <strong>Lüks Isıl Alanlar:</strong> 5 yıldızlı oteller bünyesindeki modern sauna, buhar odaları ve yarı olimpik kapalı havuzlar.</li>
                    <li>😌 <strong>Detoks ve Cilt Bakımı:</strong> Yerel antep fıstığı yağı gibi doğal içeriklerle zenginleştirilmiş özel cilt yenileyici maskeler.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Gaziantep'te SPA hizmetleri "iş dünyası ve turizm" odaklı gelişmiştir. Şehrin lüks otelleri, İstanbul kalitesinde wellness hizmeti sunmaktadır; ancak gerçek bir kültürel deneyim için restore edilmiş tarihi hamamlar mutlaka listenin başında olmalıdır.</p>
            </div>`
        }
    }
},
    
    "GIRESUN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0454 310 20 00",
        tr: {
            hospName: "Giresun Üniversitesi Eğitim ve Araştırma Hastanesi & Kadın Doğum ve Çocuk Hastalıkları Hastanesi",
            shortDesc: "🏥 Doğu Karadeniz'in yeni nesil cerrahi üssü; onkolojik operasyonlar, laparoskopik cerrahi ve modern travma yönetimiyle bölgeye hizmet veren akademik merkez.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Disiplin ve Modern Müdahale Gücü</h4>
                <ul>
                    <li>⚕️ <strong>Onkolojik Cerrahi:</strong> Meme, tiroid ve kolorektal kanser cerrahisinde multidisipliner tümör konseyleri ile yönetilen, uluslararası protokolleri takip eden uzman kadro.</li>
                    <li>🫀 <strong>Kardiyovasküler Başarı:</strong> 7/24 aktif anjiyo üniteleri, koroner stent uygulamaları ve açık kalp ameliyatlarında bölgenin güvenilir operasyon merkezi.</li>
                    <li>🦴 <strong>İleri Ortopedi ve Artroskopi:</strong> Kapalı (artroskopik) omuz ve diz cerrahisi, sporcu sağlığı operasyonları ve kompleks kalça-diz protezi revizyonları.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin Cerrahisi):</strong> Mikrocerrahi yöntemlerle bel ve boyun fıtığı operasyonları, kafa travmaları sonrası acil cerrahi stabilizasyon.</li>
                    <li>🦷 <strong>Dental Cerrahi:</strong> Giresun Üniversitesi Diş Hekimliği Fakültesi bünyesinde kemik grefti, gömülü diş operasyonları ve ileri düzey implantoloji.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🌬️ <strong>Nekahat Dönemi Avantajı:</strong> Şehrin düşük nemli ve yüksek oksijenli yayla havasının, post-operatif (ameliyat sonrası) dönemde yara iyileşmesi ve akciğer kapasitesi üzerindeki doğal doping etkisi.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Giresun, son yıllarda yapılan yeni hastane yatırımlarıyla fiziksel altyapısını Karadeniz standartlarının üzerine taşımıştır. <strong>Güçlü Yönü:</strong> Hekim kadrosu akademik olarak çok hırslı ve yenilikçidir. <strong>Eksik Yönü:</strong> Organ nakli gibi çok spesifik ileri tıp vakaları için halen Trabzon'daki bölge merkezleriyle koordinasyon gerekmektedir; ancak temel ve orta-üst cerrahide kusursuzdur.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0454 591 23 23", 
        tr: {
            hospName: "Tamdere Kaplıcaları (Dereli) & İnişdibi ve Çaldağ Maden Suları",
            shortDesc: "🌡️ Karadeniz'in kalbinde, demir ve kükürt zengini yapısıyla mide ve deri hastalıklarında 'doğal maden suyu' şifası sunan nadir kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etki</h4>
                <ul>
                    <li>🧪 <strong>Demir ve Alüminyum İçeriği:</strong> Tamdere suları, özellikle anemi (kansızlık) ve kronik yorgunluk sendromlarında mineral desteği olarak içme kürlerinde kullanılır.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kükürtlü sıcak su kaynaklarının eklem kireçlenmesi ve yumuşak doku romatizmalarında inflamasyon (iltihap) önleyici etkisi.</li>
                    <li>🫁 <strong>Mide ve Sindirim:</strong> İnişdibi maden sularının doğal bikarbonatlı yapısıyla mide asidini dengelemesi ve bağırsak tembelliğini gidermesi.</li>
                    <li>🧼 <strong>Dermatolojik Tedavi:</strong> Suyun pH dengesinin nötre yakın olması, egzama ve deri irritasyonlarında yatıştırıcı bir bariyer etkisi yaratır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Giresun, maden suyu kalitesiyle Türkiye'nin en değerli kaynaklarına sahiptir. <strong>Dürüst Analiz:</strong> Tesisleşme genellikle yayla turizmiyle iç içe, butik bir yapıdadır. Büyük bir termal su parkı yerine, sessiz ve doğa içinde 'tıbbi su' deneyimine odaklanılmalıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0454 215 00 28", 
        tr: {
            hospName: "Giresun Huzurevi Yaşlı Bakım Merkezi & Özel Ekolojik Geriatri Alanları",
            shortDesc: "👴 Deniz ve ormanın kesiştiği noktada, bol oksijenli yayla havasıyla solunum dostu bir 'ikinci bahar' lokasyonu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik</h4>
                <ul>
                    <li>🌬️ <strong>KOAH ve Astım Dostu:</strong> Karadeniz'in temiz havası, akciğer kapasitesi düşen yaşlılar için doğal bir oksijen konsantratörü görevi görür.</li>
                    <li>🧑‍⚕️ <strong>7/24 Medikal İzlem:</strong> Eğitim ve Araştırma Hastanesi'nin geriatri birimiyle koordineli, periyodik sağlık kontrolleri ve kronik hastalık yönetimi.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Sosyal aktiviteler, fındık bahçelerinde hafif yürüyüşler ve Karadeniz kültürüne uygun el sanatları ile desteklenen bilişsel koruma programları.</li>
                    <li>🥗 <strong>Doğal Beslenme:</strong> Bölgesel zeytinyağlılar ve taze Karadeniz ürünleriyle hazırlanan yaşlı sağlığına uygun diyet programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Giresun, yaşlılar için huzurlu ve güvenli bir şehirdir. Kamu tesislerindeki bakım kalitesi aile sıcaklığındadır; özel lüks bakım evi sektörü ise butik ve butik otel konseptli gelişim aşamasındadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0454 310 20 00",
        tr: {
            hospName: "Giresun Üniversitesi FTR Merkezi & Özel Özel Eğitim Birimleri",
            shortDesc: "♿ Ortopedik engellerden nörolojik kayıplara kadar, akademik temelli manuel ve cihaz destekli fizik tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon Uygulamaları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (paralizi) sonrası hastanın öz bakım becerilerini geri kazanması için geliştirilen kişiselleştirilmiş egzersiz protokolleri.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Kronik ağrı (miyofasiyal ağrı) yönetiminde yüksek frekanslı cihazlar ve radyofrekans tedavileri.</li>
                    <li>🦵 <strong>Post-Op FTR:</strong> Kalça ve diz ameliyatları sonrası hastayı en kısa sürede mobilize etmeye yönelik profesyonel fizyoterapi seansları.</li>
                    <li>🧒 <strong>Pediatrik Destek:</strong> Serebral Palsili çocuklar için duyu bütünleme ve özel gelişim alanları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Akademik kadro çok titizdir. En üst segment robotik yürüme sistemlerine erişim sınırlı olsa da, "birebir manuel terapi" ve "kişiselleştirilmiş takip" konusunda Giresun fark yaratmaktadır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0454 214 00 00",
        tr: {
            hospName: "Giresun Şehir Otelleri (Newjasmin, La Quinta) Wellness Birimleri",
            shortDesc: "🧖‍♂️ Deniz manzaralı, Karadeniz bitkileriyle aromaterapi ve geleneksel Türk hamamı ritüellerinin birleştiği wellness noktaları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Rahatlama Protokolleri</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Modern dizayn edilmiş buhar odaları ve geleneksel kesecilik hizmetinin Karadeniz misafirperverliğiyle sunumu.</li>
                    <li>💆 <strong>Aroma Terapi:</strong> Bölgenin bitki örtüsünden elde edilen yağlarla sunulan, bağışıklık güçlendirici ve stres giderici masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Kar Çeşmesi:</strong> Vücut direncini artıran ve toksin atımını hızlandıran profesyonel ısıl alanlar.</li>
                    <li>😌 <strong>Detoks ve Cilt Bakımı:</strong> Doğal maskeler ve deniz mineralleriyle sunulan anti-aging cilt yenileme programları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Giresun'da SPA sektörü lüks iş otelleri bünyesinde oldukça gelişmiştir. Hizmet kalitesi 'business' standartlarında olup, profesyonel bir arınma deneyimi sunar.</p>
            </div>`
        }
    }
},
    "HAKKARI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=400", 
        phone: "0438 211 44 70",
        tr: {
            hospName: "Hakkari Devlet Hastanesi & Yüksekova Devlet Hastanesi",
            shortDesc: "🏥 Sarp coğrafyanın modern cerrahi kalesi; ileri seviye travma yönetimi, acil cerrahi stabilizasyon ve helikopter ambulans entegrasyonlu operasyon merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Stratejik Cerrahi Müdahale ve Travma Uzmanlığı</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Coğrafi şartlar ve yüksekten düşme vakaları nedeniyle, kompleks kırıklar ve pelvik cerrahide bölgenin en yüksek operasyon tecrübesine sahip ekiplerinden biri.</li>
                    <li>🫀 <strong>Acil Vasküler (Damar) Cerrahi:</strong> Ateşli silah yaralanmaları ve ağır travmalarda hayat kurtarıcı damar onarımları ve replantasyon girişimlerinde uzmanlaşmış dinamik kadro.</li>
                    <li>⚕️ <strong>Laparoskopik Genel Cerrahi:</strong> Safra kesesi, fıtık ve apandisit operasyonlarında kapalı yöntemle hızlı iyileşme odaklı cerrahi süreçler.</li>
                    <li>🧠 <strong>Kritik Nöroşirürji:</strong> Kafa travmaları ve spinal stabilizasyon operasyonlarında 7/24 hazır bulunan beyin cerrahisi üniteleri.</li>
                    <li>🦷 <strong>Maksillofasiyal Yaklaşım:</strong> Ağız ve Diş Sağlığı Merkezi bünyesinde çene kırıkları ve gömülü diş cerrahisinde bölgesel çözüm odağı.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Lojistiği ve Acil Müdahale Analizi</h4>
                <ul>
                    <li>🚁 <strong>Hava Ambulans Ağı:</strong> Kar yolları kapattığında veya çok ileri tetkik gerektiğinde (Van veya Erzurum'a sevk için) kullanılan tam donanımlı helikopter pisti ve hızlı transfer protokolleri.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Hakkari, coğrafi izolasyonu nedeniyle "kendi kendine yetme" kapasitesi en yüksek illerimizden biridir. <strong>Güçlü Yönü:</strong> Hekim kadrosu ekstrem vakalara (ağır travma, donma, yüksek rakım hastalıkları) karşı inanılmaz hazırlıklıdır. <strong>Eksik Yönü:</strong> Onkolojik radyoterapi veya organ nakli gibi çok yüksek teknoloji gerektiren branşlar için sevk zorunluluğu devam etmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0438 211 61 11", 
        tr: {
            hospName: "Hakkari Şemdinli (Bağlar) & Çukurca Kaynakları",
            shortDesc: "🌡️ El değmemiş doğada, kükürt ve sodyum zengini kaynak sularıyla deri ve eklem hastalıklarında geleneksel şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Doğal Potansiyel</h4>
                <ul>
                    <li>🧪 <strong>Sodyum Bikarbonatlı ve Kükürtlü:</strong> Suyun doğal kükürt oranı, kronik deri lezyonları ve egzama vakalarında doku yenilenmesini destekler.</li>
                    <li>🦴 <strong>Romatizmal Yatıştırma:</strong> Kaynak sularının ısıl etkisiyle kronik bel ve diz ağrılarında kas gevşetici medikal banyo imkanları.</li>
                    <li>💧 <strong>Metabolik Destek:</strong> Yerel halk tarafından sindirim sistemi düzenleyici olarak kullanılan doğal mineral dengesi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Hakkari'nin termal kaynakları şu an için "keşfedilmeyi bekleyen" statüsündedir. <strong>Dürüst Analiz:</strong> Bölgede 5 yıldızlı bir termal otel altyapısı bulunmamaktadır; kaynaklar daha çok yerel kullanım ve butik ziyaretler için uygundur. Ancak suyun saflığı ve mineral zenginliği oldukça yüksektir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0438 211 02 01", 
        tr: {
            hospName: "Hakkari Yaşlı Bakım ve Sosyal Destek Birimleri",
            shortDesc: "👴 Kültürel hürmetin en yüksek olduğu coğrafyada, evde bakım odaklı ve devlet destekli geriatrik hizmet.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Doku ve Bakım Standartları</h4>
                <ul>
                    <li>🤝 <strong>Kültürel Saygınlık:</strong> Bölgedeki "aşiret ve aile" yapısının getirdiği yüksek yaşlı hürmetiyle birleşen, manevi tatmini yüksek bakım süreçleri.</li>
                    <li>🧑‍⚕️ <strong>Evde Sağlık Hizmetleri:</strong> Coğrafi şartlar nedeniyle Hakkari'de "Evde Sağlık" birimleri Türkiye ortalamasının üzerinde bir mobilite ile köylere kadar ulaşım sağlar.</li>
                    <li>🌬️ <strong>Yüksek Rakım Oksijen Desteği:</strong> Temiz dağ havasının, kronik akciğer hastalığı olmayan yaşlılarda kan hücreleri ve genel zindelik üzerindeki canlandırıcı etkisi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Hakkari'de kurumsal huzurevi kültürü yerine "aile yanında devlet destekli bakım" modeli baskındır. Profesyonel yaşlı bakım evleri sayıca azdır ancak sunulan tıbbi takip kamu hastaneleriyle tam entegredir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0438 211 44 70",
        tr: {
            hospName: "Hakkari Devlet Hastanesi FTR Ünitesi & Özel Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Travma ve ortopedik cerrahi sonrası rehabilitasyonda uzmanlaşmış fizik tedavi birimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uygulamalı Fizyoterapi ve Rehabilitasyon</h4>
                <ul>
                    <li>♿ <strong>Post-Travmatik Rehabilitasyon:</strong> Ağır yaralanmalar ve ortopedik ameliyatlar sonrası eklem kısıtlılığını önleyen yoğun manuel terapi seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, ultrason ve vakum terapileriyle kronik ağrı yönetimi ve kas güçlendirme protokolleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için sunulan fiziksel ve bilişsel gelişim destek programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Fizyoterapist kadrosu vaka çeşitliliği nedeniyle çok deneyimlidir. Ancak robotik yürüme teknolojileri için genellikle Van ilindeki bölge hastaneleriyle koordineli çalışılmaktadır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400",
        phone: "0438 211 30 11",
        tr: {
            hospName: "Hakkari Şehir Otelleri & Butik Wellness Birimleri",
            shortDesc: "🧖‍♂️ Modern konaklama tesislerinde sunulan temel hamam ritüelleri ve rahatlatıcı masaj terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Yerel Wellness ve Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı:</strong> Şehir otelleri bünyesinde hijyenik kese ve köpük ritüelleriyle fiziksel rahatlama.</li>
                    <li>💆 <strong>Klasik Masaj:</strong> Günlük yorgunluğu ve kas gerginliğini gidermeye yönelik aromaterapi uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Sauna Hizmeti:</strong> Vücut direncini artırmaya yardımcı ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Hakkari'de SPA ve Wellness sektörü yeni gelişen bir alandır. Hizmetler daha çok 3 ve 4 yıldızlı şehir otellerinin sunduğu tamamlayıcı imkanlarla sınırlıdır; profesyonel tıp odaklı bir SPA merkezi bulunmamaktadır.</p>
            </div>`
        }
    }
},
    "HATAY": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0326 229 44 00",
        tr: {
            hospName: "Hatay Eğitim ve Araştırma Hastanesi & Mustafa Kemal Üniversitesi (MKÜ) Tıp Fakültesi Araştırma Hastanesi",
            shortDesc: "🏥 Çelik konstrüksiyon ve deprem izolatörlü 'Yeni Nesil' sağlık üssü; hibrit ameliyathaneleri ve ileri travma cerrahisiyle bölgenin en güvenli tıp merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Teknolojili Cerrahi ve Yeniden Yapılanma Gücü</h4>
                <ul>
                    <li>🏗️ <strong>Deprem İzolatörlü Ameliyathaneler:</strong> Ameliyat sırasında sarsıntı hissetmeyen, operasyonun kesintisiz devam etmesini sağlayan 500+ izolatörlü ileri teknoloji altyapısı.</li>
                    <li>🫀 <strong>Kardiyovasküler Mükemmeliyet:</strong> Koroner bypass, kalp kapağı tamiri ve kompleks damar cerrahisinde bölgenin en donanımlı akademik kadrosu ve anjiyo üniteleri.</li>
                    <li>🦴 <strong>Travma ve Rekonstrüktif Cerrahi:</strong> Afet sonrası oluşan ağır ortopedik travmalar ve doku kayıplarında mikrocerrahi yöntemlerle onarım yapan uzman birimler.</li>
                    <li>🧬 <strong>Gelişmiş Onkoloji Grubu:</strong> Akıllı ilaç uygulamaları, radyoterapi ve cerrahi onkolojide multidisipliner yaklaşımla yürütülen kanser tedavileri.</li>
                    <li>👁️ <strong>Göz Hastalıkları ve Vitreoretinal Cerrahi:</strong> Retina dekolmanı ve ileri katarakt operasyonlarında en son teknoloji mikroskobik sistemler.</li>
                    <li>🦷 <strong>Maksillofasiyal Cerrahi:</strong> MKÜ Diş Hekimliği Fakültesi bünyesinde çene eklemi cerrahisi, kist operasyonları ve ileri implantoloji.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi ve Stratejik Konum</h4>
                <ul>
                    <li>🌍 <strong>Sınır Ötesi Sağlık Köprüsü:</strong> Orta Doğu ülkelerinden gelen hastalar için 'Sağlık Turizmi Yetki Belgesi' ile profesyonel vaka yönetimi ve konaklama entegrasyonu.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Hatay, Türkiye'nin şu an en yeni ve teknolojik hastane binalarına sahiptir. <strong>Güçlü Yönü:</strong> Hastaneler 'kesintisiz hizmet' felsefesiyle sıfırdan inşa edildiği için teknik arıza riski minimumdur. <strong>Eksik Yönü:</strong> Şehrin genel barınma ve ulaşım altyapısı halen toparlanma sürecinde olduğundan, dışarıdan gelen hastaların şehir içi lojistiği için önceden planlama yapması önerilir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0326 431 21 00", 
        tr: {
            hospName: "Kumlu Hamamat Termal Kaynakları & Erzin İçmeleri",
            shortDesc: "🌡️ Nadir bulunan 'Bromürlü ve İyotlu' yapısıyla, eklem kireçlenmesi ve kadın hastalıklarında bilimsel kanıtlı termal şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>İyot ve Bromür Zenginliği:</strong> Hamamat suları, Türkiye'nin en yüksek iyot oranına sahip kaynaklarından biridir; bu yapı tiroid metabolizması ve hücre yenilenmesi üzerinde etkilidir.</li>
                    <li>🦴 <strong>Ortopedik Rehabilitasyon:</strong> Bel fıtığı, kireçlenme ve yumuşak doku romatizmalarında suyun yüksek mineral yoğunluğu ile sağlanan doğal ağrı kesici etkisi.</li>
                    <li>🧴 <strong>Dermatolojik Tedavi:</strong> Akne, sedef ve egzama vakalarında suyun antiseptik özelliği sayesinde cilt yüzeyinde hızlı düzelme.</li>
                    <li>🫁 <strong>Erzin İçmeleri:</strong> Mide asiditesini düzenleyici ve böbrek kumlarının dökülmesine yardımcı doğal bikarbonatlı içme kürleri.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Hatay termal kaynakları, Akdeniz iklimiyle birleşince dört mevsim tedavi imkanı sunar. <strong>Dürüst Analiz:</strong> Tesisler orta ve üst segmenttedir. Kumlu bölgesi daha çok medikal şifaya odaklanırken, Erzin bölgesi aile tipi konaklama için daha uygundur.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0326 214 02 12", 
        tr: {
            hospName: "Hatay Bakım ve Rehabilitasyon Merkezi & Özel Geriatrik Yaşam Alanları",
            shortDesc: "👴 Akdeniz'in ılıman ikliminde, modern tıbbi takip ve güçlü sosyal dayanışmayla desteklenen profesyonel bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik Protokolleri</h4>
                <ul>
                    <li>🏥 <strong>Geriatrik Multidisipliner Takip:</strong> Şehir hastanesinin geriatri ve palyatif bakım üniteleriyle doğrudan entegre, kesintisiz doktor gözetimi.</li>
                    <li>🥗 <strong>Akdeniz Diyeti Odaklı Beslenme:</strong> Yaşlı sağlığı için dünyanın en sağlıklı diyeti kabul edilen Akdeniz mutfağına uygun, taze ve doğal ürünlerle hazırlanan menüler.</li>
                    <li>🌬️ <strong>İdeal Klima Koşulları:</strong> Sert kış koşullarının olmadığı Hatay iklimi, eklem ağrısı çeken ve solunum sıkıntısı yaşayan yaşlılar için yüksek yaşam konforu sağlar.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal etkileşim, el sanatları ve bahçe terapisi ile alzheimer/demans riskine karşı aktif zihin programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Hatay, yaşlılara hürmet edilen bir kültürün merkezidir. Yeni kurulan kamu tesisleri çok yüksek standartlardadır. Özel bakım evleri de lüks otelcilik hizmetleriyle yeniden faaliyete geçmektedir; ancak talep yoğunluğu nedeniyle ön başvuru süreci kritiktir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0326 229 44 00",
        tr: {
            hospName: "Hatay FTR Merkezi & Özel Engelsiz Yaşam ve Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik rehabilitasyon ve ampute destek programlarında uzmanlaşmış, son teknoloji fizik tedavi laboratuvarları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Rehabilitasyon Uygulamaları</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme (Lokomat):</strong> İnme, omurilik yaralanması veya beyin hasarı sonrası yürüme yetisini kaybetmiş hastalar için en ileri teknolojik destek.</li>
                    <li>♿ <strong>Nöromüsküler Stimülasyon:</strong> Kas erimesini önleyen ve sinir iletimini hızlandıran gelişmiş elektroterapi seansları.</li>
                    <li>⚙️ <strong>Ortez ve Protez Eğitimi:</strong> Kişiye özel hazırlanan protezlerle bağımsız hareket kabiliyetini maksimize eden profesyonel fizyoterapi.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Özel gereksinimli çocuklar için duyu bütünleme odaları ve gelişim takip programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Hatay şu an fizik tedavi cihaz parkuru bakımından Türkiye'nin en güncel illerinden biridir. Cihazlar yeni nesil olduğu için tedavi etkinliği yüksektir. Ancak uzman fizyoterapist başına düşen hasta sayısı, çevre illerden gelen yoğun talep nedeniyle yüksektir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0326 215 15 15",
        tr: {
            hospName: "The Museum Hotel Antakya & Ottoman Palace Spa Wellness",
            shortDesc: "🧖‍♂️ Tarihin içinde, antik mozaiklerin gölgesinde veya termal suların lüksle birleştiği noktalarda eşsiz wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma Ritüelleri</h4>
                <ul>
                    <li>🧼 <strong>Defne Sabunu Sabun Masajı:</strong> Hatay'ın dünyaca ünlü yerel defne yağlı sabunlarıyla yapılan, cildi arındıran geleneksel hamam seremonileri.</li>
                    <li>💆 <strong>Antik Terapi Masajları:</strong> Tarihi doku eşliğinde sunulan, derin doku masajı ve aromaterapi ile bedensel ve mental detoks.</li>
                    <li>🧖‍♂️ <strong>Termal SPA Entegrasyonu:</strong> Şifalı suların SPA konforuyla sunulduğu lüks jakuziler, sauna ve tuz odası uygulamaları.</li>
                    <li>😌 <strong>Cilt Yenileme Programları:</strong> Doğal kil ve deniz mineralleriyle hazırlanan anti-aging maskeler ve vücut bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Hatay'da SPA hizmeti sadece bir lüks değil, binlerce yıllık bir kültürdür. Özellikle müze-otel konseptli tesisler, dünyada eşi benzeri olmayan bir wellness ambiyansı sunar. Hizmet kalitesi kesinlikle 'global lüks' segmentindedir.</p>
            </div>`
        }
    }
},
    "ISPARTA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=400", 
        phone: "0246 213 44 00",
        tr: {
            hospName: "Isparta Şehir Hastanesi & Süleyman Demirel Üniversitesi (SDÜ) Araştırma ve Uygulama Hastanesi",
            shortDesc: "🏥 Batı Akdeniz'in teknoloji üssü; deprem izolatörlü akıllı bina altyapısı, onkoloji ve ileri cerrahi branşlarda bölge referans merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Üst Segment Cerrahi Kapasite</h4>
                <ul>
                    <li>🫀 <strong>İleri Kardiyovasküler Cerrahi:</strong> Koroner arter bypass, kapak değişimleri ve yenidoğan kalp cerrahisinde (Pediatrik KVC) bölgenin en tecrübeli akademik kadrosu.</li>
                    <li>🧬 <strong>Onkoloji ve Nükleer Tıp:</strong> Kanser cerrahisinde multidisipliner yaklaşım; PET-CT ve ileri radyoterapi cihazlarıyla donatılmış, bölge dışından hasta kabul eden onkoloji merkezi.</li>
                    <li>👁️ <strong>Göz Hastalıkları (Vitreoretinal):</strong> Retina cerrahisi, kornea nakli ve akıllı lens uygulamalarında en son teknolojik mikroskobik donanım.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Spor yaralanmaları, artroskopik cerrahi ve robotik destekli diz-kalça protezi operasyonlarında yüksek vaka başarısı.</li>
                    <li>🧠 <strong>Nöroşirürji:</strong> Beyin tümörü cerrahisinde nöromonitörizasyon eşliğinde yapılan yüksek hassasiyetli mikrocerrahi müdahaleler.</li>
                    <li>🦷 <strong>Maksillofasiyal Cerrahi:</strong> SDÜ Diş Hekimliği Fakültesi bünyesinde kompleks çene deformiteleri, kist operasyonları ve ileri implantoloji uzmanlığı.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🚁 <strong>Hava ve Kara Lojistiği:</strong> Antalya-Afyon-Konya üçgeninin merkezinde yer alması sebebiyle, helikopter ambulansla gelen acil vakaların stabilizasyonunda kritik rol.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Isparta, kişi başına düşen hastane yatağı sayısında Türkiye'nin en üst sıralarındadır. <strong>Güçlü Yönü:</strong> Şehir Hastanesi'nin modern konforu ile Üniversite'nin akademik birikimi birbirini kusursuz tamamlar. <strong>Eksik Yönü:</strong> Şehrin butik yapısı nedeniyle çok nadir genetik hastalıkların tedavisi için bazen Ankara veya Antalya'daki merkezlerle konsültasyon gerekebilir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0246 553 23 23", 
        tr: {
            hospName: "Keçiborlu Kükürtlü Kaynakları & Eğirdir Termal Suları",
            shortDesc: "🌡️ Gül kokulu göller bölgesinde; kükürt ve sodyum zengini yapısıyla dermatolojik ve romatizmal şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneoterapi</h4>
                <ul>
                    <li>🧪 <strong>Yüksek Kükürt Oranı:</strong> Keçiborlu bölgesindeki suların, özellikle inatçı deri hastalıkları (sedef, egzama) ve akne tedavisinde hücre yenileyici etkisi.</li>
                    <li>🦴 <strong>Romatizmal ve Yumuşak Doku Şifası:</strong> Fibromiyalji, kireçlenme ve bel-boyun ağrılarında kas spazmlarını çözen ısıl mineral etkisi.</li>
                    <li>🧴 <strong>Cilt Yenileme:</strong> Mineralli suyun gözenekleri temizleyici ve cildi dezenfekte edici doğal bariyer desteği.</li>
                    <li>🌬️ <strong>Klimaterapi:</strong> Eğirdir Gölü çevresindeki oksijen kalitesinin, termal kürlerle birleştiğinde yarattığı genel zindelik.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Isparta'nın termal potansiyeli butik ve yereldir. <strong>Dürüst Analiz:</strong> Büyük bir "Thermal Resort" konseptinden ziyade, doğa ile iç içe, daha sakin ve şifa odaklı bir deneyim sunulmaktadır. Gürültüden uzak bir kür programı isteyenler için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0246 223 31 11", 
        tr: {
            hospName: "Isparta Huzurevi Yaşlı Bakım Merkezi & SDÜ Geriatri Kliniği",
            shortDesc: "👴 Türkiye'nin 'En Yaşanabilir Şehirleri' listesinin gediklisi; düşük stresli, bol yeşil alanlı ve akademik geriatri takipli yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Yönetim</h4>
                <ul>
                    <li>🏥 <strong>Geriatri Bilim Dalı Desteği:</strong> Üniversite bünyesindeki Geriatri kürsüsü ile bakım evleri arasında kurulan tıbbi köprü; alzheimer ve demans yönetiminde bilimsel takip.</li>
                    <li>🧑‍⚕️ <strong>Hızlı Medikal Erişim:</strong> Şehir Hastanesi'nin ileri teknoloji ünitelerine sadece birkaç dakikalık mesafede bulunan tesisler sayesinde acil durumlarda maksimum güvenlik.</li>
                    <li>🧠 <strong>Bilişsel Koruma ve El Sanatları:</strong> Gül hasadı dönemlerinde açık hava aktiviteleri ve yerel halı dokuma gibi geleneksel hobilerle desteklenen zihinsel zindelik.</li>
                    <li>🌬️ <strong>İdeal Mikro-Klima:</strong> Yazın kavurucu sıcağının olmadığı, kışın ise modern altyapıyla konforun korunduğu, yaşlı metabolizmasına uygun iklim şartları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Isparta, emekli ve yaşlı dostu bir şehirdir. Şehir içi ulaşımın kolaylığı ve sağlık kuruluşlarının yoğunluğu büyük avantajdır. Kamu tesisleri oldukça modern olup, özel sektörde de 'butik lüks' bakım evleri yaygınlaşmaktadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0246 213 44 00",
        tr: {
            hospName: "Isparta Şehir Hastanesi FTR Ünitesi & Özel Eğirdir Kemik Hastalıkları Rehabilitasyon",
            shortDesc: "♿ Tarihsel 'Kemik Hastalıkları' uzmanlığı geleneğiyle; ortopedik ve nörolojik rehabilitasyonda uzmanlaşmış birimler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Çözümler</h4>
                <ul>
                    <li>🤖 <strong>Robotik Rehabilitasyon:</strong> İnme ve omurilik yaralanmaları sonrası yürüme yetisini kazandıran robotik dış iskelet (Lokomat) ve üst ekstremite robotları.</li>
                    <li>♿ <strong>Nöromüsküler Tedaviler:</strong> Sinir iletim bozuklukları ve MS (Multipl Skleroz) hastaları için denge ve koordinasyon geliştirme odaklı profesyonel seanslar.</li>
                    <li>⚙️ <strong>Post-Operatif Mobilizasyon:</strong> Kalça, diz ve bel ameliyatları sonrası hastayı en kısa sürede bağımsızlığına kavuşturan yoğun fizyoterapi protokolleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Özel gereksinimli çocuklar için duyu bütünleme terapileri ve aile eğitim programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Isparta, özellikle Eğirdir Kemik Hastalıkları Hastanesi mirasıyla rehabilitasyon konusunda köklü bir "ekol"dür. Fizyoterapistlerin vaka tecrübesi çok yüksektir. Şehir Hastanesi'ndeki cihaz parkuru Türkiye'nin en yenilerinden biridir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0246 227 10 00",
        tr: {
            hospName: "Isparta Hilton Garden Inn & Barida Hotels Spa Wellness",
            shortDesc: "🧖‍♂️ Dünyaca ünlü Isparta Gülü yağları ve özleriyle hazırlanan, lüks konforlu bütünsel arınma terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Güllü Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Isparta Gülü Ritüeli:</strong> Doğal gül suları ve yağları ile yapılan, cildi yenileyen ve ruhu sakinleştiren imza masaj terapileri.</li>
                    <li>💆 <strong>Aroma Terapi:</strong> Lavanta (Kuyucak) ve Gül özlerinin kullanıldığı, anti-stres etkili profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Sauna, buhar odası, tuz odası ve şok duşları ile sunulan komple detoks hizmetleri.</li>
                    <li>😌 <strong>Cilt Yenileme:</strong> Yerel bitki özleriyle zenginleştirilmiş anti-aging yüz bakımları ve vücut sargılama (maske) uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Isparta'da SPA sektörü, şehrin lüks otelleri sayesinde 'niş' bir kaliteye ulaşmıştır. Özellikle "Gül" temalı bakımlar, dünyada başka hiçbir yerde bulamayacağınız otantik ve tıbbi bir aromaterapi deneyimi sunar.</p>
            </div>`
        }
    }
},
    "MERSIN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0324 225 10 00",
        tr: {
            hospName: "Mersin Şehir Eğitim ve Araştırma Hastanesi & Mersin Üniversitesi Tıp Fakültesi Hastanesi",
            shortDesc: "🏥 Doğu Akdeniz'in ilk ve en büyük 'Dijital Hastanesi'; robotik cerrahi, hibrit ameliyathaneler ve nükleer tıp alanında uluslararası mükemmeliyet merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 İleri Teknoloji ve Multidisipliner Cerrahi Gücü</h4>
                <ul>
                    <li>🤖 <strong>Robotik Cerrahi (Da Vinci):</strong> Üroloji, jinekoloji ve genel cerrahide kanser ameliyatlarını milimetrik hassasiyetle gerçekleştiren bölgenin en aktif robotik üniteleri.</li>
                    <li>🫀 <strong>Kompleks Kardiyovasküler Cerrahi:</strong> Minimal invaziv (küçük kesi) kalp cerrahisi, TAVI ve ileri düzey pediatrik kalp ameliyatlarında yüksek vaka başarı oranı.</li>
                    <li>🧬 <strong>Onkolojik ve Nükleer Tıp:</strong> Akıllı ilaç tedavileri, radyoterapi (LİNAK) ve kanser cerrahisinde multidisipliner tümör konseyleri ile yönetilen kişiselleştirilmiş tedavi süreçleri.</li>
                    <li>☢️ <strong>Nükleer Tıp ve Görüntüleme:</strong> PET-CT ve SPECT-CT teknolojileriyle kanser taramasında en erken teşhis ve evreleme kapasitesi.</li>
                    <li>🧠 <strong>Nöroşirürji ve Spinal Stabilizasyon:</strong> Mikrocerrahi ve navigasyon destekli beyin tümörü operasyonları ile kompleks omurga cerrahisi uzmanlığı.</li>
                    <li>🦷 <strong>İleri Dental Cerrahi:</strong> Mersin Üniversitesi Diş Hekimliği Fakültesi bünyesinde zigomatik implantlar ve kompleks çene kisti operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Turizmi ve Lojistik Kapasite</h4>
                <ul>
                    <li>🌍 <strong>International Health Services:</strong> Liman kenti olmanın avantajıyla Kıbrıs, Orta Doğu ve Avrupa'dan gelen hastalar için VIP transfer ve çok dilli sağlık danışmanlığı entegrasyonu.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Mersin, 'Akıllı Hastane' konseptini Türkiye'de ilk uygulayan şehirdir. <strong>Güçlü Yönü:</strong> Hastane yatağı ve yoğun bakım kapasitesi o kadar geniştir ki, acil durumlarda bile sistem tıkanmaz. <strong>Eksik Yönü:</strong> Şehir Hastanesi'nin fiziksel büyüklüğü nedeniyle hastane içi ulaşım (poliklinikler arası mesafe) bazen yaşlı hastalar için yorucu olabilir; ancak hastane içi shuttle araçları bu sorunu büyük ölçüde çözmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0324 712 10 10", 
        tr: {
            hospName: "Mersin (Silifke) Arkum & Mut Ilıca Kaynakları",
            shortDesc: "🌡️ Akdeniz'in şifalı suları; kükürtlü ve mineralli yapısıyla deri hastalıkları ve romatizmal ağrılarda destekleyici doğal termal kürler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etki</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Bikarbonatlı Yapı:</strong> Cilt üzerindeki antiseptik etkisi sayesinde akne, sedef ve kronik deri lezyonlarının iyileşme sürecini hızlandırır.</li>
                    <li>🦴 <strong>Eklem ve Kas Şifası:</strong> Mineralli suyun ısıl etkisiyle kronik kireçlenme, bel fıtığı ve siyatik ağrılarında kas spazmlarını çözücü etki.</li>
                    <li>💧 <strong>Metabolik Düzenleme:</strong> İçme kürlerinde mide ve bağırsak fonksiyonlarını düzenleyici, böbrek kumlarının dökülmesine yardımcı doğal mineral desteği.</li>
                    <li>🌊 <strong>Deniz ve Termal Entegrasyonu:</strong> Akdeniz'in tuzlu suyunun (talasoterapi) termal kürlerle birleştiğinde yarattığı bütünsel vücut detoksu.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Mersin termal kaynakları, Akdeniz iklimi sayesinde yılın her ayı kullanıma uygundur. <strong>Dürüst Analiz:</strong> Tesisleşme daha çok yerel ve butik oteller seviyesindedir. Afyon tarzı dev 'Thermal Resort' kompleksleri yerine, deniz tatiliyle birleştirilmiş şifa seansları ön plandadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0324 358 11 00", 
        tr: {
            hospName: "Mersin Huzurevi Yaşlı Bakım Merkezi & Özel Emekli Yaşam Alanları",
            shortDesc: "👴 Palmiye gölgeleri ve deniz havasında, ılıman iklimin getirdiği yüksek konforla profesyonel geriatrik bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Esenlik Protokolleri</h4>
                <ul>
                    <li>🏥 <strong>Geriatri Anabilim Dalı Entegrasyonu:</strong> Üniversite hastanesiyle koordineli, alzheimer ve demans hastaları için özel 'Akıllı Takip' sistemleri.</li>
                    <li>🌬️ <strong>KOAH ve Solunum Desteği:</strong> Deniz havasının yüksek nemi ve temizliğiyle solunum sıkıntısı çeken yaşlılar için ideal kış konforu.</li>
                    <li>🧑‍⚕️ <strong>Palyatif Bakım ve Rehabilitasyon:</strong> Kronik hastalığı olan yaşlılar için ağrı yönetimi ve günlük yaşam becerilerini koruma odaklı fizik tedavi desteği.</li>
                    <li>🥗 <strong>Taze Akdeniz Diyeti:</strong> Bölgesel sebze ve meyvelerle hazırlanan, yaşlı metabolizmasına uygun antioksidan zengini beslenme programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Mersin, 'Emekli Kenti' olarak bilinir. Bu durum, yaşlı bakım evlerinin kalitesini ve sosyal kabulünü artırmıştır. Kamu tesisleri oldukça modern olup, özel sektörde de sahil şeridinde çok yüksek standartlı butik bakım evleri mevcuttur.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0324 225 10 00",
        tr: {
            hospName: "Mersin Şehir Hastanesi FTR Merkezi & Özel Engelli Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik rehabilitasyonun teknoloji üssü; robotik yürüme ve hidroterapi ile engelleri aşan profesyonel yaklaşımlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Çözümler</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme (Lokomat):</strong> Omurilik yaralanmaları ve felç sonrası hastanın yürüme yetisini geri kazandırmaya yönelik en ileri teknolojik sistemler.</li>
                    <li>🌊 <strong>Hidroterapi Havuzları:</strong> Su içi egzersizlerle eklemlere yük bindirmeden hareket kabiliyetini artıran su altı yürüme bantları.</li>
                    <li>⚙️ <strong>Nöromüsküler Stimülasyon:</strong> Kas erimesini önleyen ve sinir iletimini uyaran modern elektroterapi laboratuvarları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral Palsili çocuklar için duyu bütünleme odaları ve profesyonel fizyoterapist eşliğinde oyun terapili gelişim.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Mersin Şehir Hastanesi'nin FTR ünitesi Türkiye'nin en büyüklerinden biridir. Cihaz parkuru çok yenidir. Ancak vaka çeşitliliği ve yoğunluğu nedeniyle yoğunlaştırılmış (intensif) programlar için önceden randevu süreci iyi yönetilmelidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0324 337 00 00",
        tr: {
            hospName: "Mersin HiltonSA & Divan Wellness - Mersin Marina Spa",
            shortDesc: "🧖‍♂️ Akdeniz ruhunun, lüks şehir otellerindeki modern SPA ritüelleri ve bütünsel arınma terapileriyle buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı ve Kese:</strong> Hijyenik ve lüks bir ortamda, geleneksel hamam kültürünün en üst segment sunumu.</li>
                    <li>💆 <strong>Deniz Mineralli Terapiler:</strong> Deniz tuzu ve alg (yosun) özleriyle yapılan vücut sargılama ve anti-aging cilt bakımları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Sauna, buhar odası ve denize sıfır açık-kapalı havuzlarla sunulan bütünsel detoks.</li>
                    <li>😌 <strong>Medikal Masajlar:</strong> Şehir stresini ve kas yorgunluğunu gidermeye yönelik aromaterapi ve sıcak taş masajları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Mersin'de SPA hizmeti daha çok Marina bölgesi ve 5 yıldızlı otellerde yoğunlaşmıştır. Hizmet kalitesi kesinlikle 'global standart' üzerindedir. Özellikle gün batımına karşı sunulan masaj terapileri ruhsal arınma için eşsizdir.</p>
            </div>`
        }
    }
},
    "ISTANBUL": {
    surgery: {
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400", 
        phone: "0212 314 44 44",
        tr: {
            hospName: "Başakşehir Çam ve Sakura Şehir Hastanesi, Koç Üniversitesi Hastanesi & Acıbadem Maslak",
            shortDesc: "🏥 Dünyanın en büyük sismik izolatörlü binası ve Avrupa'nın en donanımlı onkoloji, organ nakli ve robotik cerrahi kompleksleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Küresel Ölçekte Cerrahi ve Teknolojik Üstünlük</h4>
                <ul>
                    <li>🤖 <strong>Robotik Cerrahi ve İnovasyon:</strong> Da Vinci Xi ve Hugo RAS sistemleri ile üro-onkoloji, jinekoloji ve kolorektal cerrahide dünyadaki en yüksek vaka sayılarından biri.</li>
                    <li>🫀 <strong>Kardiyovasküler Mükemmeliyet:</strong> Yapay kalp nakli, robotik bypass ve TAVI prosedürlerinde global referans merkezi; hibrit ameliyathanelerle eş zamanlı müdahale.</li>
                    <li>🧬 <strong>İleri Onkoloji ve Radyoterapi:</strong> CyberKnife, Gamma Knife Icon ve MR-LINAC teknolojileri ile tümörlere noktasal atış; kişiselleştirilmiş immünoterapi ve genetik haritalama.</li>
                    <li>♻️ <strong>Organ ve İlik Nakli:</strong> Karaciğer, böbrek ve kemik iliği nakillerinde %98'e varan başarı oranları; uluslararası çapta tanınan transplantasyon ekipleri.</li>
                    <li>🧠 <strong>Fonksiyonel Nöroşirürji:</strong> Parkinson ve distoni hastaları için beyin pili (DBS) operasyonları ile epilepsi cerrahisinde yüksek teknolojik altyapı.</li>
                    <li>🦷 <strong>Maksillofasiyal ve Estetik Diş:</strong> Çapa ve Marmara Diş Hekimliği ekolleri ile birleşen, 3D çene modelleme ve ileri segment implantoloji.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Turizminin Episentri</h4>
                <ul>
                    <li>💎 <strong>Global Patient Centers:</strong> 40'tan fazla dilde tercümanlık, uçak ambulans koordinasyonu ve lüks konaklama entegrasyonu ile dünya elitlerinin tercih noktası.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>İstanbul, medikal teknoloji bakımından New York veya Londra ile eş değer, hatta bazı branşlarda daha moderndir. <strong>Güçlü Yönü:</strong> Dünyanın en iyi cerrahlarını bu şehirde bulabilirsiniz. <strong>Eksik Yönü:</strong> Şehir içi trafik ve hastanelerdeki aşırı yoğunluk, lojistik bir handikaptır. VIP transfer hizmeti olmayan hastalar için ulaşım ciddi stres kaynağı olabilir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0216 395 53 88", 
        tr: {
            hospName: "Tuzla İçmeler Termal & Tarihi Yalova Termal (Yakın Bölge Entegrasyonu)",
            shortDesc: "🌡️ Metropolün kıyısında; magnezyum ve sodyum zengini kaynaklarla sindirim sistemi ve deri hastalıklarında doğal detoks.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Mineral Analizi ve Medikal Kürler</h4>
                <ul>
                    <li>🧪 <strong>Magnezyum Klorürlü Sular:</strong> Tuzla bölgesindeki kaynaklar, özellikle kronik kabızlık ve metabolik sendromlarda içme kürü olarak dünya literatüründe yer alır.</li>
                    <li>🦴 <strong>Romatizmal Rehabilitasyon:</strong> Kas spazmları, fibromiyalji ve yumuşak doku romatizmalarında suyun kaldırma kuvveti ve sıcaklığının sinerjik etkisi.</li>
                    <li>🧴 <strong>Dermatolojik Onarım:</strong> Mineral yoğunluğu yüksek suların akne ve sedef gibi cilt lezyonları üzerindeki kurutucu ve yenileyici tesiri.</li>
                    <li>🌬️ <strong>Termal Detoks:</strong> Şehir hayatının yarattığı toksik yükü atmak için kısa süreli ama yoğun mineralli banyo kürleri.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>İstanbul içindeki termal kaynaklar daha çok 'şifa odaklı medikal tesis' yapısındadır. <strong>Dürüst Analiz:</strong> Eğer geniş bir 'Resort' deneyimi isteniyorsa feribotla 45 dakika mesafedeki Yalova tercih edilmelidir; ancak spesifik mide/bağırsak kürleri için Tuzla İçmeler rakipsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0212 319 41 00", 
        tr: {
            hospName: "Darülaceze Başkanlığı & Özel Nişantaşı/Florya Geriatri ve Bakım Evleri",
            shortDesc: "👴 Tarihi 'Şefkat' geleneği ile modern geriatri biliminin birleştiği, ultra lüks bakım seçenekleri sunan yaşam merkezleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Yönetim ve VIP Bakım</h4>
                <ul>
                    <li>🏥 <strong>7/24 Klinik Gözetim:</strong> Üniversite hastaneleriyle entegre, yoğun bakım sonrası (post-op) rehabilitasyon ve uzun dönem palyatif bakım üniteleri.</li>
                    <li>🧑‍⚕️ <strong>Nörodejeneratif Uzmanlık:</strong> Alzheimer ve Demans hastaları için özel tasarlanmış, 'Güvenli Yaşam' alanları ve hafıza güçlendirme terapileri.</li>
                    <li>🥗 <strong>Gurme Beslenme Programları:</strong> Klinik diyetisyenler eşliğinde, yaşlı sağlığına uygun ancak lezzet odağından kopmayan özel mutfak hizmetleri.</li>
                    <li>🎭 <strong>Kültürel ve Sosyal Entegrasyon:</strong> Konserler, sanat atölyeleri ve psikologlar eşliğinde yürütülen kuşaklar arası iletişim projeleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> İstanbul, Türkiye'nin en lüks 'yaşlı yaşam otellerine' sahiptir. <strong>Güçlü Yönü:</strong> Sağlık kuruluşlarına yakınlık ve personel uzmanlığı zirvededir. <strong>Eksik Yönü:</strong> Kaliteli bir bakım evinin maliyeti Türkiye ortalamasının çok üzerindedir ve merkezi yerlerdeki tesislerde yeşil alan kısıtlı olabilir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0212 414 20 00",
        tr: {
            hospName: "İstanbul FTR Eğitim ve Araştırma Hastanesi & Romatem Robotik Rehabilitasyon",
            shortDesc: "♿ Rehabilitasyonun zirve noktası; nörolojik ve ortopedik vakalarda en geniş robotik cihaz parkuru ve uzay terapisi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Teknolojiler</h4>
                <ul>
                    <li>🤖 <strong>Gelişmiş Robotik Sistemler:</strong> Lokomat, Armeo ve C-Mill gibi cihazlarla alt ve üst ekstremite motor fonksiyonlarının yeniden eğitimi.</li>
                    <li>🌊 <strong>Su Altı Rehabilitasyonu:</strong> Olimpik standartlarda hidroterapi havuzları ve su altı koşu bantları ile yer çekimsiz tedavi imkanı.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik (VR) Destekli Tedavi:</strong> Rehabilitasyon sürecini oyunlaştıran ve nöro-plastisiteyi hızlandıran VR tabanlı egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Robotik Rehabilitasyon:</strong> Çocuk hastalara özel geliştirilmiş robotik sistemlerle erken dönemde yürüme ve kavrama eğitimi.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> İstanbul, dünyadaki en modern rehabilitasyon cihazlarına sahip şehirlerden biridir. <strong>Güçlü Yönü:</strong> Hem kamu hem özel sektörde cihaz çeşitliliği muazzamdır. <strong>Eksik Yönü:</strong> Fizyoterapistlerin iş yükü çok fazladır; bu yüzden birebir özel ilgi için butik ve yüksek segmentli özel merkezler tercih edilmelidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0212 381 40 00",
        tr: {
            hospName: "Four Seasons Bosphorus, Raffles Istanbul & Tarihi Cağaloğlu Hamamı",
            shortDesc: "🧖‍♂️ Boğaz'ın eşsiz manzarasında, asırlık Osmanlı hamam kültürü ile global wellness trendlerinin kusursuz sentezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Ultra Lüks Wellness ve Holistik Arınma</h4>
                <ul>
                    <li>🧼 <strong>Saray Usulü Hamam Ritüelleri:</strong> Tarihi dokuda, altın kaplamalı taslar ve ipek peştemaller eşliğinde sunulan 'Sultan Bakımları'.</li>
                    <li>💆 <strong>Medikal SPA ve Detoks:</strong> Klinik destekli zayıflama masajları, lenfatik drenaj ve IV (Damar yolu) vitamin terapileri ile bütünsel yenilenme.</li>
                    <li>🧖‍♂️ <strong>Ödüllü Isıl Alanlar:</strong> Buz çeşmeleri, biosaunalar ve açık hava ısıtmalı Boğaz manzaralı havuzlar.</li>
                    <li>😌 <strong>Anti-Aging Kozmetoloji:</strong> Dünyaca ünlü markaların (Biologique Recherche, La Prairie vb.) ürünleriyle yapılan cerrahi dışı yüz gençleştirme seansları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> İstanbul'daki SPA sektörü, dünyadaki en iyi 10 destinasyon arasındadır. Özellikle 5 yıldızlı otellerdeki Wellness merkezleri, sadece rahatlama değil, gerçek bir 'sağlık ve gençleşme' vaat eder. Fiyatlar döviz bazlıdır ve rezervasyonlar haftalar öncesinden dolabilmektedir.</p>
            </div>`
        }
    }
},
    "IZMIR": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0232 244 44 44",
        tr: {
            hospName: "İzmir Bayraklı Şehir Hastanesi, Ege Üniversitesi Tıp Fakültesi & Dokuz Eylül Üniversitesi Hastanesi",
            shortDesc: "🏥 Ege'nin cerrahi kalbi; 2.060 yataklı dev şehir hastanesi kompleksi ve yarım asırlık akademik tıp ekolü ile ileri teknoloji cerrahi merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Mükemmeliyet ve Robotik Cerrahi Üstünlüğü</h4>
                <ul>
                    <li>🤖 <strong>Robotik Cerrahi (Da Vinci):</strong> Özellikle üroloji, jinekoloji ve genel cerrahide kanser operasyonlarında Türkiye'nin en yüksek başarı oranlarına sahip akademik kadroları.</li>
                    <li>🫀 <strong>Kardiyovasküler Liderlik:</strong> Kalp nakli, yapay kalp cihazı (LVAD) uygulamaları ve minimal invaziv (küçük kesi) kapak ameliyatlarında Avrupa referans merkezi.</li>
                    <li>🧬 <strong>Onkoloji ve İmmünoterapi:</strong> Kanser genetiği araştırmalarıyla desteklenen, kişiye özel hedeflenmiş tedaviler ve ileri düzey radyoterapi (TrueBeam, Halcyon) sistemleri.</li>
                    <li>☢️ <strong>Nükleer Tıp:</strong> PET-CT, SPECT-CT ve Lutesyum-177 gibi hedefe yönelik radyonüklid tedavilerde Ege Bölgesi'nin en donanımlı laboratuvarları.</li>
                    <li>🧠 <strong>Nöroşirürji ve Parkinson Cerrahisi:</strong> Beyin pili (DBS) operasyonları ve mikrocerrahi yöntemlerle yapılan kompleks kafa tabanı cerrahisi uzmanlığı.</li>
                    <li>🦷 <strong>İleri Dental İmplantoloji:</strong> Ege ve Dokuz Eylül Diş Hekimliği Fakülteleri bünyesinde çene eklemi cerrahisi ve 3D navigasyonlu implant uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Turizmi ve Akdeniz Vizyonu</h4>
                <ul>
                    <li>💎 <strong>International Health Hub:</strong> Adnan Menderes Havalimanı entegrasyonu ile Avrupa ve Balkanlar'dan gelen hastalar için 'VIP Medical Care' ve termal rehabilitasyon paketleri.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>İzmir, tıbbi etik ve hasta hakları konusunda Türkiye'nin en bilinçli ve gelişmiş şehridir. <strong>Güçlü Yönü:</strong> Akademik birikim ile modern teknoloji (Bayraklı Şehir Hastanesi) kusursuz birleşmiştir. <strong>Eksik Yönü:</strong> Şehir Hastanesi ve Üniversite hastaneleri arasındaki trafik yoğunluğu, acil transferlerde planlama gerektirir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0232 259 01 02", 
        tr: {
            hospName: "Balçova Termal Tesisleri & Çeşme-Ilıca Fizik Tedavi Kaynakları",
            shortDesc: "🌡️ 'Agamemnon Kaplıcaları' mirası; sodyum klorürlü ve kükürtlü yapısıyla romatizmal ve ortopedik rehabilitasyonda dünya markası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Bilimsel Termal Kürler ve Balneoterapi</h4>
                <ul>
                    <li>🧪 <strong>Sodyum Klorür ve Florür Zenginliği:</strong> Balçova kaynakları, özellikle eklem iltihapları (romatoid artrit) ve ankilozan spondilit vakalarında inflamasyonu azaltıcı tıbbi kanıta sahiptir.</li>
                    <li>🦴 <strong>Ortopedik Rehabilitasyon:</strong> Ameliyat sonrası (protez vb.) suyun kaldırma kuvveti eşliğinde yapılan 'Aqua-Terapi' seanslarıyla hızlı mobilizasyon.</li>
                    <li>🧴 <strong>Talasoterapi (Deniz Suyu):</strong> Çeşme bölgesinde deniz suyu ile termal suyun birleştirildiği, cilt hastalıkları ve metabolik detoks odaklı kürler.</li>
                    <li>🌬️ <strong>Klimaterapi:</strong> Ege'nin düşük nemli ve iyotlu havasının, termal kürlerle birleşince yarattığı genel zindelik etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>İzmir, termal turizmi 'Sağlık Turizmi' ile en iyi entegre eden şehirdir. <strong>Dürüst Analiz:</strong> Balçova tesisleri tıbbi rehabilitasyon odaklıdır; Çeşme tarafı ise daha çok 'Luxury Wellness' konseptine hitap eder.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0232 441 81 11", 
        tr: {
            hospName: "Narlıdere Huzurevi Yaşlı Bakım Merkezi & Urla/Çeşme Emekli Yaşam Köyleri",
            shortDesc: "👴 Dünyanın en sağlıklı yaşam bölgelerinden biri; deniz havasında, modern geriatri takibi sunan lüks yaşam alanları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Geriatrik Yönetim ve Ege Yaşam Tarzı</h4>
                <ul>
                    <li>🏥 <strong>Geriatri Bilim Dalı Desteği:</strong> Üniversite hastaneleriyle koordineli, alzheimer ve demans yönetiminde 'Bilişsel Koruma' odaklı bakım programları.</li>
                    <li>🥗 <strong>Anti-Aging Beslenme:</strong> Dünyaca ünlü 'Ege Diyeti' (zeytinyağı, taze otlar, deniz ürünleri) ile yaşlı sağlığını koruyan beslenme modelleri.</li>
                    <li>🌬️ <strong>Solunum Dostu İklim:</strong> Urla ve Çeşme hattının oksijen kalitesi, KOAH ve kronik astım hastası yaşlılar için doğal bir terapi ortamıdır.</li>
                    <li>🤝 <strong>Aktif Sosyal Yaşam:</strong> Sanat atölyeleri, kütüphaneler ve hobi bahçeleriyle desteklenen, izole olmayan bir 'Yaşam Köyü' konsepti.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> İzmir, Türkiye'nin 'Yaşlı Bakım Başkenti'dir. <strong>Güçlü Yönü:</strong> Narlıdere Huzurevi gibi devlete bağlı ancak dünya standartlarında tesisler ve Urla'daki ultra lüks özel bakım köyleri mevcuttur. <strong>Eksik Yönü:</strong> Popülaritesi nedeniyle kontenjanlar çok hızlı dolmaktadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0232 244 44 44",
        tr: {
            hospName: "İzmir FTR Eğitim ve Araştırma Hastanesi & Romatem Fizik Tedavi Merkezleri",
            shortDesc: "♿ Robotik rehabilitasyon ve hidroterapide Ege Bölgesi'nin teknoloji üssü; her yaş grubuna özel fizik tedavi protokolleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Teknolojiler</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme ve Kol Robotları:</strong> İnme, omurilik yaralanması veya beyin hasarı sonrası motor fonksiyonların geri kazanılmasında en ileri teknoloji (Lokomat, Armeo).</li>
                    <li>🌊 <strong>Hidroterapi Havuzları:</strong> Termal suyun şifasıyla birleşen, su içi egzersizlerle eklemlere yük bindirmeden hareket kabiliyeti kazandırma.</li>
                    <li>🧠 <strong>Nöromüsküler Tedaviler:</strong> Sinir iletimini uyaran ileri elektroterapi üniteleri ve denge-koordinasyon laboratuvarları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Özel gereksinimli çocuklar için tasarlanmış duyu bütünleme odaları ve aile odaklı gelişim programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> İzmir'de fizik tedavi hizmetleri çok yaygın ve kalitelidir. <strong>Güçlü Yönü:</strong> Fizyoterapist kadrolarının akademik düzeyi ve cihaz parkurunun modernliği. <strong>Eksik Yönü:</strong> Kamu hastanelerindeki fizik tedavi ünitelerinde bekleme süreleri uzayabilir; bu noktada butik özel merkezler devreye girer.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0232 292 13 13",
        tr: {
            hospName: "Swissôtel Büyük Efes, Wyndham Grand Özdilek & Sheraton Çeşme Wellness",
            shortDesc: "🧖‍♂️ Ege'nin zeytin ve incir özleriyle hazırlanan ritüellerden, lüks termal SPA deneyimlerine uzanan bütünsel arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Ege Konseptli Wellness ve Holistik Terapiler</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel ve Modern Hamam:</strong> Osmanlı hamam kültürünün Ege dokunuşlarıyla modernize edildiği lüks arınma alanları.</li>
                    <li>💆 <strong>Aromaterapi ve Zeytinyağı Masajları:</strong> Yerel sızma zeytinyağı ve lavanta özleriyle sunulan, cildi yenileyen imza masaj terapileri.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Kar çeşmeleri, biosaunalar, buhar odaları ve termal jakuzilerle sunulan komple detoks.</li>
                    <li>😌 <strong>Anti-Aging ve Klinik Bakımlar:</strong> Deniz mineralleri ve yosun sargılama (thallasso) yöntemleriyle sunulan profesyonel vücut şekillendirme.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> İzmir'de SPA sektörü sadece 'rahatlama' değil, 'wellness' odaklıdır. <strong>Güçlü Yönü:</strong> Şehirdeki lüks otellerin sanat eserleriyle birleşen ambiyansı ruhsal arınmayı destekler. Hizmet kalitesi kesinlikle global lüks segmentindedir.</p>
            </div>`
        }
    }
},
    "KARS": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=400", 
        phone: "0474 228 52 00",
        tr: {
            hospName: "Kafkas Üniversitesi Tıp Fakültesi Hastanesi & Kars Harakani Devlet Hastanesi",
            shortDesc: "🏥 Serhat şehrinin akademik şifa merkezi; yüksek rakım hastalıkları, travma cerrahisi ve bölgesel ihtiyaçlara yönelik uzmanlaşmış tıp kompleksi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Stratejik Cerrahi ve Yüksek Rakım Uzmanlığı</h4>
                <ul>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Kış sporları merkezi (Sarıkamış) ve zorlu iklim şartları nedeniyle, kompleks kırıklar ve sporcu yaralanmalarında bölgenin en tecrübeli cerrahi ekiplerinden biri.</li>
                    <li>🫁 <strong>Göğüs Cerrahisi ve Yüksek Rakım Tıbbı:</strong> 1.768 metre rakımın getirdiği düşük oksijen basıncına adaptasyon ve bu ortamda gelişen akciğer patolojilerinde akademik uzmanlık.</li>
                    <li>🩹 <strong>Donma ve Soğuk Yaralanmaları Yönetimi:</strong> Ekstrem soğuklara bağlı doku hasarlarında (frostbite) cerrahi debridman ve rekonstrüktif müdahalelerde ulusal düzeyde vaka tecrübesi.</li>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve mide operasyonlarında kapalı (laparoskopik) yöntemlerle hızlı iyileşme odaklı cerrahi süreçler.</li>
                    <li>🦷 <strong>Oral ve Maksillofasiyal Cerrahi:</strong> Kafkas Üniversitesi Diş Hekimliği Fakültesi bünyesinde ileri düzey implantoloji ve çene kisti operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Lojistiği ve Bölgesel Güç</h4>
                <ul>
                    <li>🚁 <strong>Hava Ambulans Koordinasyonu:</strong> Kış aylarında kar yolları kapattığında, köylerden ve ilçelerden hasta transferi için kurulan tam donanımlı helikopter pisti ve 7/24 aktif sevk zinciri.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Kars, Doğu Anadolu'nun kuzey hattında çok kritik bir "Tampon Bölge" görevi görür. <strong>Güçlü Yönü:</strong> Üniversite hastanesinin varlığı akademik derinlik sağlar; doktorlar zorlu şartlarda hızlı çözüm üretmeye alışkındır. <strong>Eksik Yönü:</strong> Onkolojik radyoterapi gibi bazı çok ileri cihaz parkuru gerektiren branşlarda hastalar Erzurum'daki bölge merkezlerine yönlendirilebilmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0474 413 61 11", 
        tr: {
            hospName: "Kağızman Ilıcası & Kars-Digor Kaynakları",
            shortDesc: "🌡️ Magnezyum ve sodyum klorürlü yapısıyla sindirim sistemi ve deri hastalıklarında doğal mineral desteği.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Potansiyel</h4>
                <ul>
                    <li>🧪 <strong>Magnezyum ve Klorür Dengesi:</strong> Suyun doğal mineral yoğunluğu, özellikle kronik mide asiditesi ve bağırsak tembelliği gibi sindirim sorunlarında destekleyici bir içme kürü potansiyeli sunar.</li>
                    <li>🧼 <strong>Dermatolojik Yatıştırma:</strong> Kaynak sularının akne ve deri irritasyonları üzerindeki doğal temizleyici ve bariyer onarıcı etkisi.</li>
                    <li>🦴 <strong>Romatizmal Banyo Kürleri:</strong> Sıcak suyun kas gevşetici etkisiyle birleşen mineral transferi; kronik bel ve boyun ağrılarında rahatlama sağlar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Kars'ın termal kaynakları şu an daha çok butik ve yerel bir ölçekte hizmet vermektedir. <strong>Dürüst Analiz:</strong> Büyük bir termal otel konseptinden ziyade, doğallığını korumuş ve mineral saflığı yüksek su deneyimine odaklanılmalıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1571772996211-2f02c97da70d?q=80&w=400",
        phone: "0474 223 35 15", 
        tr: {
            hospName: "Kars Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Tarihi doku ve tertemiz dağ havasında, kültürel saygı ve devlet güvencesiyle sunulan yaşlı bakım hizmeti.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🌬️ <strong>Yüksek Rakım Oksijen Kalitesi:</strong> Kars'ın tertemiz havası, solunum yolu hassasiyeti olmayan yaşlılar için kandaki oksijen doygunluğunu artıran doğal bir canlandırıcıdır.</li>
                    <li>🧑‍⚕️ <strong>Düzenli Tıbbi Takip:</strong> Üniversite ve devlet hastanesi geriatri birimleriyle koordineli periyodik kontroller ve ilaç yönetimi.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal aktiviteler ve bölgenin zengin kültürel dokusuyla iç içe, mental zindeliği koruyan huzurlu yaşam alanları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kars'ta yaşlı bakımı, yerel halkın büyük bir hassasiyetle yaklaştığı bir konudur. Kamu tesisleri oldukça modern olup, aile sıcaklığında bir bakım ortamı sunar. Ancak kış şartlarının sertliği nedeniyle dış aktiviteler sınırlıdır; tesis içi sosyal donatılar bu açığı kapatmaktadır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0474 228 52 00",
        tr: {
            hospName: "Kars FTR Üniteleri & Özel Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Ortopedik cerrahi sonrası rehabilitasyon ve nörolojik vakalarda fizik tedavi uzmanlığı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi Uygulamaları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme sonrası motor fonksiyonların geri kazanılması için uygulanan denge ve koordinasyon egzersizleri.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS ve ultrason tedavileriyle kronik ağrı yönetimi ve kas güçlendirme protokolleri.</li>
                    <li>🦵 <strong>Post-Op FTR seansları:</strong> Özellikle kış yaralanmaları ve ortopedik operasyonlar sonrası eklem kısıtlılığını önleyen yoğun seanslar.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Akademik temelli fizyoterapist kadrosu vaka tecrübesi bakımından oldukça yetkindir. En ileri robotik sistemler (Lokomat vb.) için bazen çevre illerle koordinasyon gerekse de, manuel terapi ve temel rehabilitasyonda Kars oldukça başarılıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0474 213 11 11",
        tr: {
            hospName: "Sarıkamış Kayı Snow Spa & Kars Şehir Otelleri Wellness Birimleri",
            shortDesc: "🧖‍♂️ Kristal kar tanelerinin gölgesinde, kayak sonrası yorgunluk atan modern SPA ve wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Kış Konseptli Wellness ve Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı ve Isıtmalı Havuzlar:</strong> Dışarıdaki eksi derecelere inat, sıcak ve lüks bir ortamda sunulan hamam ritüelleri.</li>
                    <li>💆 <strong>Sporcu ve İsveç Masajları:</strong> Kayak sonrası kaslarda biriken laktik asidi atan ve gevşeme sağlayan profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odaları:</strong> Soğuk havanın yarattığı vücut direncini artıran ve toksin atımını hızlandıran ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kars'ta SPA hizmetleri özellikle Sarıkamış'taki lüks otellerde "Dünya Standartlarında" bir kış SPA deneyimine dönüşmüştür. Şehir merkezindeki otellerde ise temel ama kaliteli wellness hizmetleri mevcuttur.</p>
            </div>`
        }
    }
},
    "KASTAMONU": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0366 214 10 53",
        tr: {
            hospName: "Kastamonu Eğitim ve Araştırma Hastanesi & Kastamonu Üniversitesi Tıp Fakültesi",
            shortDesc: "🏥 Batı Karadeniz'in hızla gelişen akademik cerrahi merkezi; modern tıp teknolojileri ve uzman hekim kadrosuyla bölgeye hizmet veren tam donanımlı kompleks.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Gelişim ve Cerrahi Çözümler</h4>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Minimal invaziv yöntemlerle safra kesesi, fıtık ve mide operasyonlarında hızlı taburcu odaklı modern cerrahi protokoller.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Doğa sporları ve tarım faaliyetlerine bağlı gelişen kompleks kırıklar ile diz-kalça protezi ameliyatlarında yüksek vaka tecrübesi.</li>
                    <li>🫀 <strong>Kardiyoloji ve Girişimsel İşlemler:</strong> Yeni nesil anjiyo laboratuvarları ile kalp krizine hızlı müdahale, stent ve pille tedavi uygulamaları.</li>
                    <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Mikrocerrahi tekniklerle bel ve boyun fıtığı operasyonları, travma sonrası cerrahi stabilizasyon.</li>
                    <li>🦷 <strong>Dental Cerrahi Uzmanlığı:</strong> Kastamonu Diş Hekimliği Fakültesi bünyesinde ileri düzey oral cerrahi, gömülü diş ve implant operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Sağlık Hizmeti Stratejik Analizi</h4>
                <ul>
                    <li>🌿 <strong>Forest Medicine (Orman Tıbbı):</strong> Şehrin %67'sinin ormanlarla kaplı olması, cerrahi operasyon sonrası nekahat dönemini burada geçiren hastalar için doğal bir bağışıklık ve iyileşme dopingidir.</li>
                </ul>

                <h4>➡️ Dürüst Analiz</h4>
                <p>Kastamonu, üniversite hastanesi statüsü kazandıktan sonra hekim kalitesini ciddi oranda artırmıştır. <strong>Güçlü Yönü:</strong> Hastane binaları yenidir ve teknolojik parkur günceldir. <strong>Eksik Yönü:</strong> Çocuk yan dalları (pediatrik onkoloji vb.) gibi çok spesifik alanlarda halen Ankara'daki merkezlerle koordinasyon gerekebilmektedir; ancak temel cerrahide çok güçlüdür.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0366 214 10 53", 
        tr: {
            hospName: "Ilıca (Pınarbaşı) & Kastamonu Yerel Mineralli Kaynaklar",
            shortDesc: "🌡️ El değmemiş kanyonlar arasında, kükürtlü yapısıyla deri ve solunum yollarında 'doğal buhar' şifası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Potansiyel</h4>
                <ul>
                    <li>🧪 <strong>Kükürt ve Sodyum Bikarbonat:</strong> Ilıca bölgesindeki kaynaklar, özellikle kronik dermatit ve egzama gibi cilt problemlerinde yatıştırıcı etkisiyle bilinir.</li>
                    <li>🫁 <strong>İnhalasyon Şifası:</strong> Orman havasıyla birleşen nemli termal buharın, kronik bronşit ve sinüzit hastalarında solunum yollarını rahatlatıcı etkisi.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Sıcak mineral sularının eklem kireçlenmesi ve kas ağrılarında doğal bir gevşetici olarak kullanımı.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Kastamonu'nun termal kaynakları "Eko-Sağlık" turizmi için dev bir potansiyele sahiptir. <strong>Dürüst Analiz:</strong> Büyük termal komplekslerden ziyade, doğa ile iç içe butik ve otantik bir şifa deneyimi sunulmaktadır. Doğa yürüyüşü ve kaplıca kürünü birleştirmek isteyenler için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0366 214 11 11", 
        tr: {
            hospName: "Kastamonu Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Tarihi konaklar ve asırlık çınarların gölgesinde, temiz hava ve yüksek sosyal saygınlıkla desteklenen yaşlı bakım süreci.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🌬️ <strong>Oksijen Terapisi:</strong> Bölgenin temiz havası, yaşlılarda uyku kalitesini artırır ve kronik yorgunluğu azaltır.</li>
                    <li>🧑‍⚕️ <strong>Geriatrik Takip:</strong> Eğitim ve Araştırma Hastanesi ile entegre, periyodik sağlık taramaları ve kronik hastalık yönetimi (tansiyon, şeker takibi).</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal etkileşim, hobi bahçeleri ve Kastamonu'nun geleneksel el sanatları ile desteklenen zihinsel aktif kalma programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kastamonu, huzurlu ve sakin yapısıyla yaşlılar için "sessiz bir liman"dır. Şehrin kompakt yapısı sağlık kuruluşlarına ulaşımı kolaylaştırır. Kamu tesisleri oldukça deneyimli ve güvenilirdir; özel butik bakım hizmetleri de gelişmektedir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0366 214 10 53",
        tr: {
            hospName: "Kastamonu FTR Ünitesi & Özel Özel Eğitim ve Rehabilitasyon Merkezleri",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda manuel terapi ve modern cihaz destekli fizik tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Uygulamalı Fizyoterapi Protokolleri</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme sonrası denge-koordinasyon çalışmaları ve ince motor becerilerini geliştirme seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, lazer ve ultrason cihazları ile ağrı yönetimi ve kas stimülasyonu.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Ameliyat sonrası eklem hareket kısıtlılığını gidermeye yönelik kişiye özel egzersiz programları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Fizyoterapist kadrosu vaka çeşitliliği nedeniyle yetkindir. Çok ileri robotik yürüme teknolojileri (Lokomat vb.) için bazen Ankara'daki merkezlerle koordinasyon kurulsa da, manuel rehabilitasyon başarısı oldukça yüksektir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0366 212 00 00",
        tr: {
            hospName: "Kastamonu Şehir Otelleri & Ilgaz Dağı Kayak Otelleri Wellness Birimleri",
            shortDesc: "🧖‍♂️ Ilgaz Dağı'nın çam kokulu havasında, kayak sonrası veya şehir yorgunluğunu atan lüks wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Dağ ve Doğa Konseptli Wellness</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Türk Hamamı:</strong> Hijyenik ve modern şartlarda sunulan kese-köpük ritüelleri.</li>
                    <li>💆 <strong>Aromaterapi Masajları:</strong> Bitkisel yağlar ve çam özleri kullanılarak yapılan, kasları gevşeten ve zihni dinlendiren seanslar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Detoks etkili ısıl alanlar ile vücut direncinin artırılması.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kastamonu'da SPA hizmetleri özellikle Ilgaz Dağı'ndaki kış sporları otellerinde üst segmenttedir. Şehir merkezindeki iş otellerinde ise temel ama profesyonel wellness birimleri mevcuttur.</p>
            </div>`
        }
    }
},
   "KAYSERI": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Kayseri Şehir Hastanesi Modern Mimari Görünümü
            phone: "0352 315 77 00",
            tr: {
                hospName: "Kayseri Şehir Hastanesi",
                shortDesc: "🏥 Bölgenin en büyük ve en teknolojik sağlık kompleksi; uluslararası sağlık turizmi yetki belgesine sahiptir.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏨 Cerrahi ve Akademik Güç</h4>
                    <p>Kayseri, Erciyes Üniversitesi ve Şehir Hastanesi işbirliği ile özellikle kompleks cerrahi vakalarda İç Anadolu ve Doğu Anadolu'nun kesişim noktasıdır.</p>
                    
                    <h4>🩺 Öne Çıkan Branşlar</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Koroner bypass ve kapalı kalp ameliyatlarında yüksek başarı oranı.</li>
                        <li>⚖️ <strong>Obezite Cerrahi:</strong> Mide küçültme (tüp mide) ve metabolik cerrahi alanında uzmanlaşmış ekipler.</li>
                        <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Spor yaralanmaları (Erciyes Kayak Merkezi nedeniyle deneyimli) ve protez cerrahisi.</li>
                        <li>👁️ <strong>Göz Cerrahisi:</strong> Akıllı lens ve lazer tedavilerinde gelişmiş teknolojik altyapı.</li>
                        <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> İmplant ve estetik diş hekimliğinde sağlık turizmi odaklı hizmetler.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Kayseri, cerrahide "maliyet-performans" açısından Türkiye'nin en iyi şehirlerinden biridir. Ankara ve İstanbul'daki kaliteyi daha erişilebilir bütçelerle sunar. Ancak çok nadir pediatrik onkoloji vakaları için Ankara hala birinci referanstır.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Bayramhacı veya Kozaklı Bölgesi Termal Görseli
            phone: "0352 383 10 32", // Bayramhacı Kaplıcaları İletişim Hattı
            tr: {
                hospName: "Bayramhacı Kaplıcaları ve Termal Tesisleri",
                shortDesc: "🌡️ Sodyum, kalsiyum ve klorür içeren sularıyla romatizmal hastalıklar için doğal şifa kaynağı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Termal Suyun Karakteristiği</h4>
                    <p>38-40°C sıcaklığa sahip olan Kayseri termal suları, özellikle kronik ağrı yönetiminde tıbbi destek sunar.</p>
                    <ul>
                        <li>🦴 <strong>Eklem ve Kas:</strong> Bel fıtığı, kireçlenme ve eklem iltihaplarında rahatlama sağlar.</li>
                        <li>🫁 <strong>Solunum:</strong> Nemli ve mineralli hava kapasitesi ile solunum yollarına destekleyici etki.</li>
                        <li>💪 <strong>Ameliyat Sonrası:</strong> Cerrahi operasyon geçiren hastaların kas güçlendirme süreçleri.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Durum</h4>
                    <p>Kayseri termal turizmi, yanı başındaki Kozaklı (Nevşehir) ile entegre çalışır. Tesisleşme orta düzeydedir; lüks konaklamadan ziyade doğrudan "tedavi" odaklıdır.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Kayseri Huzurevi Sakin ve Güvenli Bahçe Görseli
            phone: "0352 222 10 00", // Kayseri Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Kayseri Aile ve Sosyal Hizmetler Yaşlı Bakım Merkezi",
                shortDesc: "👴 Erciyes manzaralı, geniş peyzaj alanına sahip profesyonel yaşlı bakım ve rehabilitasyon hizmeti.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Destek Programları</h4>
                    <ul>
                        <li>🧠 <strong>Nörolojik Takip:</strong> Demans ve Alzheimer hastaları için günlük aktiviteler ve güvenlik.</li>
                        <li>💊 <strong>Medikal Kontrol:</strong> Tansiyon, şeker ve ilaç yönetiminin uzman personellerce yapılması.</li>
                        <li>🧑‍⚕️ <strong>Bakım Hizmeti:</strong> 7/24 hijyen, beslenme ve kişisel bakım desteği.</li>
                        <li>🎯 <strong>Sosyal Moral:</strong> Yaşlıların sosyalleşebileceği hobi atölyeleri ve geniş bahçe imkanları.</li>
                    </ul>

                    <h4>➡️ Sektörel Analiz</h4>
                    <p>Kayseri, geleneksel aile yapısı güçlü bir şehir olduğu için "evde bakım" kültürü yaygındır; ancak profesyonel bakım merkezleri oldukça disiplinli ve yüksek kapasitelidir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Modern FTR Cihazları
            phone: "0352 315 77 00",
            tr: {
                hospName: "Kayseri Şehir Hastanesi Fizik Tedavi ve Rehabilitasyon Ünitesi",
                shortDesc: "♿ Robotik rehabilitasyon ve hidroterapi imkanları sunan, bölgenin en donanımlı FTR merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Tedavi ve İyileşme Süreçleri</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç ve omurilik yaralanmaları sonrası fonksiyon kazandırma.</li>
                        <li>🦴 <strong>Ortopedik FTR:</strong> Ameliyat sonrası eklem hareket kısıtlılıklarının giderilmesi.</li>
                        <li>⚙️ <strong>Teknolojik Destek:</strong> Robotik yürüme cihazları ve uzay terapi sistemleri.</li>
                        <li>🌊 <strong>Hidroterapi:</strong> Su içi egzersizlerle eklemlere binen yükü azaltarak tedavi.</li>
                    </ul>

                    <h4>🌟 Bölgesel Güç</h4>
                    <p>Kayseri, engelli bakım ve rehabilitasyonunda İç Anadolu'nun en yüksek cihaz teknolojisine sahip şehirlerinden biridir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Radisson Blu veya Wyndham Grand Kayseri Spa Görseli
            phone: "0352 338 00 00", // Wyndham Grand Kayseri İletişim
            tr: {
                hospName: "Wyndham Grand Wellness & Spa Center",
                shortDesc: "🧖‍♂️ Erciyes’in kış turizmi ile birleşen lüks spa, hamam ve zindelik programları.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Lüks Arınma Deneyimi</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Hamam Ritüeli:</strong> Geleneksel Türk hamamı ve profesyonel kese-köpük hizmetleri.</li>
                        <li>💆 <strong>Masaj Terapileri:</strong> Bali masajından medikal masajlara kadar geniş seçenekler.</li>
                        <li>😌 <strong>Kayak Sonrası Bakım:</strong> Erciyes’ten dönen misafirler için özel kas gevşetici programlar.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Kayseri'de SPA kültürü, Erciyes Dağı'ndaki kış turizmi ve şehir merkezindeki 5 yıldızlı oteller sayesinde oldukça gelişmiştir. Yazın termal, kışın ise kayak turizmiyle entegredir.</p>
                </div>`
            }
        }
    },
    "KIRKLARELI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0288 214 10 71",
        tr: {
            hospName: "Kırklareli Eğitim ve Araştırma Hastanesi, Lüleburgaz Devlet Hastanesi & Özel Balkan Hastanesi",
            shortDesc: "🏥 Trakya'nın 'Akıllı Bina' teknolojili cerrahi üssü; 3. basamak yoğun bakım kapasitesi, ileri laparoskopi ve Avrupa standartlarında sterilizasyon altyapısı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Teknik Cerrahi Analiz ve Operasyonel Derinlik</h4>
                <ul>
                    <li>⚕️ <strong>İleri Laparoskopik (Kapalı) Cerrahi:</strong> Safra kesesi, obezite (tüp mide) ve kolorektal cerrahide %98 minimal invaziv oran; HD görüntüleme sistemleri ile kansız ve dikişsiz operasyon protokolleri.</li>
                    <li>🦴 <strong>Travmatoloji ve Protez Cerrahisi:</strong> Lüleburgaz aksındaki sanayi ve tarım yoğunluğu nedeniyle el cerrahisi, kompleks kırık yönetimi ve robotik destekli olmayan ancak yüksek hassasiyetli diz-kalça artroplastisi.</li>
                    <li>🫀 <strong>İleri Kardiyoloji ve Anjiyo Laboratuvarı:</strong> 24 saat kesintisiz primer PTCA (balon-stent) müdahalesi; periferik arter hastalıkları ve varis cerrahisinde lazerli kapalı yöntemler.</li>
                    <li>🧠 <strong>Nöroşirürji ve Mikroskobik Diskektomi:</strong> Bel ve boyun fıtıklarında 'Lazer' ve 'Mikro-cerrahi' kombinasyonu; sinir kökü dekompresyonunda yüksek doku koruma başarısı.</li>
                    <li>👁️ <strong>Göz Cerrahisi (Fako):</strong> Katarakt ve glokom operasyonlarında en yeni nesil lens uygulamaları ve intraoküler basınç yönetimi.</li>
                    <li>🦷 <strong>Maksillofasiyal ve İmplantoloji:</strong> Kırklareli ADSM ve özel kliniklerde sinüs lifting, kemik tozu uygulamaları ve 'All-on-4' hızlı implant teknikleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Sağlık Lojistiği</h4>
                <ul>
                    <li>🛂 <strong>Sınır Ötesi Acil Müdahale:</strong> Dereköy Sınır Kapısı üzerinden gelen uluslararası acil vakaların stabilizasyonunda ve İstanbul'a nakil öncesi 'Kritik Bakım' yönetiminde bölge liderliği.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Kırklareli, son 5 yılda tıbbi cihaz envanterini %150 oranında yenilemiştir. <strong>Güçlü Yönü:</strong> Hastane binaları deprem izolatörlü ve en son 'Yeşil Hastane' standartlarındadır. <strong>Eksik Yönü:</strong> Onkolojik PET-CT ve radyoterapi cihazları için hastalar halen Edirne Trakya Üniversitesi'ne yönlendirilir, ancak cerrahi tümör eksizyonu burada başarıyla yapılır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400",
        phone: "0288 214 10 71", 
        tr: {
            hospName: "Istranca (Yıldız Dağları) Eko-Terapi Alanları & Kırklareli Mineral Su Rezervleri",
            shortDesc: "🌡️ 'Nature-Therapy' konseptinin Türkiye'deki zirvesi; Istranca ormanlarının %90 nem dengesi ve düşük sodyumlu sularıyla metabolik yenilenme.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Biyo-Kimyasal Analiz ve Doğal Kür Etkileri</h4>
                <ul>
                    <li>🧪 <strong>Hipotonik Saf Sular:</strong> Istranca süzülme hattından gelen düşük mineralizasyonlu sular, böbrek taşı oluşumunu engelleyici ve ürik asit atılımını hızlandırıcı etki sağlar.</li>
                    <li>🌬️ <strong>Fitonsit Salınımı ve Akciğer Detoksu:</strong> Meşe ve kayın ormanlarından salınan 'Fitonsit' uçucu yağlarının, solunum yolu inflamasyonunu azaltıcı ve bağışıklığı artırıcı doğal etkisi.</li>
                    <li>🧼 <strong>Yumuşak Su Terapisi:</strong> Kırklareli suyunun düşük kireç oranı, banyo kürlerinde atopik dermatit ve hassas ciltler için doğal bariyer koruyucu niteliktedir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Kırklareli, 'Termal' kelimesini klasik kaplıca anlayışından çıkarıp 'Hücresel Arınma' (Detox) boyutuna taşır. <strong>Dürüst Analiz:</strong> Eğer aradığınız şey lüks termal havuzlarsa burası size göre değil; ama aradığınız şey 'Hücresel Yenilenme' ve 'Akciğer Rehabilitasyonu' ise Türkiye'nin en temiz oksijen koridorundasınız.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1576765626249-2f2c22a59f4b?q=80&w=400",
        phone: "0288 214 11 05", 
        tr: {
            hospName: "Kırklareli Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi & Özel Trakya Bakım Evleri",
            shortDesc: "👴 Avrupa'nın 'Mavi Kuşak' (Blue Zone) adayı; düşük stres, taze yerel gıda ve Istranca havasıyla desteklenen 'Sağlıklı Yaşlanma' merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Geriatrik Yönetim ve Beslenme Protokolleri</h4>
                <ul>
                    <li>🏥 <strong>Geriatrik Solunum Desteği:</strong> KOAH ve kronik astımı olan yaşlılar için hastane destekli 'Temiz Hava Kürleri' ve düzenli solunum fizyoterapisi.</li>
                    <li>🧑‍⚕️ <strong>Kognitif Aktivite Takibi:</strong> Alzheimer ve vasküler demans hastaları için bahçe terapisi, Trakya halk müzikleriyle 'Müzik Terapi' ve el sanatları atölyeleri.</li>
                    <li>🥗 <strong>Probiyotik Odaklı Trakya Diyeti:</strong> Yerel manda yoğurdu, doğal peynirler ve pestisit oranı düşük sebzelerle hazırlanan 'Anti-Enflamatuar' beslenme modeli.</li>
                    <li>🧠 <strong>Psikososyal Entegrasyon:</strong> Bölgenin sosyal ve neşeli yapısı sayesinde, izole olmayan, toplumla iç içe aktif bir emeklilik süreci.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kırklareli, Türkiye'nin 'en huzurlu' illeri listesinde hep ilk 3'tedir. <strong>Güçlü Yönü:</strong> Suç oranının düşüklüğü ve yeşil alan bolluğu yaşlılar için yüksek güvenlik hissi yaratır. Tesisler butik ama çok özenlidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0288 214 10 71",
        tr: {
            hospName: "Kırklareli FTR Eğitim Ünitesi & Engelli Yaşam ve Uygulama Merkezi",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda manuel terapi ve medikal egzersiz uzmanlığı; doğa ile iç içe fizik tedavi süreçleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Mobilizasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> Hemipleji (felç) ve parapleji vakalarında nöromüsküler fasilitasyon teknikleriyle (PNF) kas yeniden eğitimi.</li>
                    <li>⚙️ <strong>Gelişmiş Elektroterapi:</strong> İleri düzey ESWT (şok dalga), yüksek yoğunluklu lazer ve vakum interferans akımları ile ağrı yönetimi.</li>
                    <li>🦶 <strong>Yürüme ve Denge Analizi:</strong> Bilgisayarlı denge sistemleri ve kişiye özel ortez-protez destekli yürüme egzersizleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Terapi:</strong> Otizm ve Down sendromlu çocuklar için duyu bütünleme bahçeleri ve profesyonel pedagog destekli rehabilitasyon.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kırklareli'de fizyoterapistlerin hastaya ayırdığı süre Türkiye ortalamasının üzerindedir. <strong>Güçlü Yönü:</strong> Birebir manuel terapi başarısı çok yüksektir. <strong>Eksik Yönü:</strong> Robotik yürüme (Lokomat) için hastalar genellikle İstanbul'daki üst merkezlere konsülte edilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0288 212 11 00",
        tr: {
            hospName: "Lozengrad Hotel & Istranca Nature Wellness Center",
            shortDesc: "🧖‍♂️ Trakya'nın en modern ve lüks SPA ritüelleri; Istranca meşe balı ve bitki özleriyle hazırlanan özel dermokozmetik bakımlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Eko-Wellness ve Arınma Ritüelleri</h4>
                <ul>
                    <li>🧼 <strong>Balkan Hamamı:</strong> Klasik hamam kültürünün modern ve ferah mimariyle birleştiği, derin temizlik sunan kese-köpük seansları.</li>
                    <li>💆 <strong>Istranca Bitkisel Masajı:</strong> Bölgeye özgü lavanta ve kekik yağları ile yapılan, lenfatik drenaj etkili rahatlama terapileri.</li>
                    <li>🧖‍♂️ <strong>Anti-Aging Bakımlar:</strong> Orman meyveleri ve doğal mineralli sularla hazırlanan, cildi sıkılaştıran ve toksin atan vücut maskeleri.</li>
                    <li>😌 <strong>Tuz Odası ve Bio-Sauna:</strong> Istranca havasının etkisini kapalı alanda yoğunlaştıran, solunum yolu detoksu sağlayan ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kırklareli'de SPA hizmeti, şehrin lüks butik otelleri tarafından domine edilmektedir. Hizmetler 'butik ve kişiye özel' olduğu için kalabalık ve gürültüden uzak, gerçek bir dinginlik sunar.</p>
            </div>`
        }
    }
},
  "KIRSEHIR": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Kırşehir Eğitim ve Araştırma Hastanesi Modern Cerrahi Blokları
            phone: "0386 213 45 15",
            tr: {
                hospName: "Kırşehir Eğitim ve Araştırma Hastanesi",
                shortDesc: "🏥 Ahi Evran Üniversitesi ile entegre çalışan, akademik kadrosuyla bölgeye cerrahi referans olan merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik Destekli Cerrahi Altyapı</h4>
                    <p>Kırşehir, üniversite hastanesi statüsündeki yapısıyla sadece rutin operasyonlarda değil, akademik uzmanlık gerektiren cerrahi işlemlerde de güven vermektedir.</p>
                    
                    <h4>🩺 Cerrahi Uygulama Alanları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyoloji ve Kalp Cerrahi:</strong> Anjiyo ünitesi ve temel kalp cerrahisi operasyonları başarıyla uygulanmaktadır.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahi:</strong> Bel-boyun fıtıkları, sinir sıkışmaları ve mikrocerrahi yöntemli müdahaleler.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Özellikle spor yaralanmaları ve yaşlılığa bağlı eklem (diz-kalça) protez cerrahisi.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik safra kesesi, fıtık ve obezite cerrahisi (tüp mide) uygulamaları.</li>
                        <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> Ahi Evran Üniversitesi Diş Hekimliği Fakültesi bünyesinde ileri düzey implant ve estetik diş cerrahisi.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Kırşehir cerrahi alanda hızla gelişen bir şehirdir. Ancak onkolojik cerrahinin çok komplike evreleri ve organ nakli gibi işlemler için hastalar hala Ankara'daki büyük merkezleri tercih edebilmektedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Kırşehir Termal Kaplıca ve Havuz Görseli
            phone: "0386 213 10 23", // Terme Termal Tesisleri
            tr: {
                hospName: "Terme, Karakurt ve Bulamaçlı Kaplıcaları",
                shortDesc: "🌡️ Radon gazı ve yüksek mineral içeriğiyle 'gençlik suyu' olarak bilinen dünyaca ünlü termal kaynaklar.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Termal Suyun Medikal Gücü</h4>
                    <p>Kırşehir termal suları, özellikle içerdikleri bikarbonat ve sülfat sayesinde dünya literatüründe önemli bir yere sahiptir.</p>
                    
                    <h4>🧪 Şifa Analizi</h4>
                    <ul>
                        <li>🦴 <strong>Romatizmal Tedavi:</strong> İltihaplı romatizma, kireçlenme ve kronik bel ağrılarında yüksek etkili kürler.</li>
                        <li>🩹 <strong>Cilt ve Güzellik:</strong> Radon gazı sayesinde hücre yenileyici ve anti-aging (yaşlanma karşıtı) etki.</li>
                        <li>🫁 <strong>Nörolojik Rahatlama:</strong> Kas spazmlarının çözülmesi ve sinirsel yorgunluğun giderilmesi.</li>
                        <li>🧘 <strong>İçme Kürleri:</strong> Mide, bağırsak ve safra kesesi rahatsızlıklarında düzenleyici destek.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Kırşehir, termal turizmde Türkiye'nin en köklü duraklarından biridir. Tesisleşme hem geleneksel hamam kültürünü hem de modern spa anlayışını bir arada sunar.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Kırşehir Huzurevi Sakin Yaşam Alanı
            phone: "0386 213 11 96", // Kırşehir Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Kırşehir Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
                shortDesc: "👴 Ahi Evran'ın hoşgörü kültürüyle harmanlanmış, huzurlu ve güvenli yaşlı yaşam alanı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Bakım ve Sosyal Destek</h4>
                    <p>Kırşehir, düşük trafik ve gürültü seviyesiyle yaşlıların zihinsel huzurunu korumak için ideal bir lokasyondur.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Takip:</strong> Demans ve Alzheimer hastalarına yönelik sürekli gözlem ve güvenlik protokolleri.</li>
                        <li>💊 <strong>Sağlık Yönetimi:</strong> Eğitim ve Araştırma Hastanesi ile hızlı koordinasyon sayesinde kesintisiz tıbbi takip.</li>
                        <li>🧑‍⚕️ <strong>Bakım Kalitesi:</strong> Günlük hijyen, beslenme ve ilaç desteğinin uzman hasta bakıcılarca sağlanması.</li>
                        <li>🎯 <strong>Kültürel Etkinlikler:</strong> Yaşlıların motivasyonunu artırmak için düzenlenen müzik (Neşet Ertaş ekolü) ve el işi seansları.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Kırşehir'de devlet destekli yaşlı bakım hizmetleri çok disiplinlidir. Ancak lüks özel geriatri köyleri henüz gelişim aşamasındadır.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Ahi Evran Fizik Tedavi ve Rehabilitasyon Hastanesi
            phone: "0386 213 45 15",
            tr: {
                hospName: "Ahi Evran Üniversitesi Fizik Tedavi ve Rehabilitasyon Hastanesi",
                shortDesc: "♿ Türkiye’nin en modern FTR hastanelerinden biri; termal su ile entegre rehabilitasyon imkanı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fiziksel ve Robotik Rehabilitasyon</h4>
                    <p>Bu merkez, Kırşehir'i rehabilitasyon alanında ulusal bir marka haline getirmiştir.</p>
                    <ul>
                        <li>♿ <strong>Nörolojik İyileşme:</strong> Felç, Parkinson ve MS gibi hastalıklarda fonksiyonel hareket kazandırma.</li>
                        <li>⚙️ <strong>Robotik Yürüme:</strong> İleri teknoloji robotik rehabilitasyon cihazları ile yürüme eğitimi.</li>
                        <li>🌊 <strong>Balneoterapi:</strong> Fizik tedavinin termal sularla birleştirilerek eklemlere binen yükün azaltılması.</li>
                        <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral palsili çocuklar için uzmanlaşmış fizyoterapi programları.</li>
                    </ul>

                    <h4>🌟 Ulusal Prestij</h4>
                    <p>Kırşehir FTR Hastanesi, donanımı sayesinde sadece bölgeye değil, tüm Türkiye'ye hizmet veren bir ihtisas merkezidir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Kırşehir Grand Terme Spa Alanı
            phone: "0386 212 51 00", // Grand Terme Hotel İletişim
            tr: {
                hospName: "Grand Terme Wellness & Spa Center",
                shortDesc: "🧖‍♂️ Şifalı suların lüks ve konforla buluştuğu, bütünsel arınma ve rahatlama merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Wellness ve Yenilenme</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Geleneksel ve Modern Sentez:</strong> VIP hamamlar, sauna, buhar odası ve şok havuzları.</li>
                        <li>💆 <strong>Profesyonel Terapiler:</strong> Sıcak taş masajı, aromaterapi ve cilt yenileyici maske uygulamaları.</li>
                        <li>😌 <strong>Anti-Stres:</strong> Radonlu suların doğal sakinleştirici etkisiyle birleşen huzur programları.</li>
                    </ul>

                    <h4>➡️ Sektörel Analiz</h4>
                    <p>Kırşehir SPA sektörü, şehrin "Termal Başkent" vizyonuyla uyumlu olarak profesyonel bir çizgidedir. Termal suyun doğrudan tesislere verilmesi büyük bir avantaj sağlar.</p>
                </div>`
            }
        }
    },
    "KOCAELI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0262 317 10 00",
        tr: {
            hospName: "Kocaeli Şehir Hastanesi, Kocaeli Üniversitesi Tıp Fakültesi & Anadolu Sağlık Merkezi (In Affiliation with Johns Hopkins Medicine)",
            shortDesc: "🏥 Türkiye'nin teknoloji üssü; robotik cerrahi, CyberKnife radyoterapi ve uluslararası akreditasyonlu onkoloji merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Endüstriyel Cerrahi ve İleri Onkolojik Güç</h4>
                <ul>
                    <li>🤖 <strong>Robotik Cerrahi ve Üroloji:</strong> Da Vinci Xi sistemleri ile üro-onkoloji ve jinekolojik cerrahide minimal invaziv mükemmeliyet; çevre illerden gelen komplike vakaların yönetim merkezi.</li>
                    <li>☢️ <strong>Kapsamlı Onkoloji (Johns Hopkins Partnerliği):</strong> CyberKnife M6, Edge ve Varian TrueBeam teknolojileri ile tümörlere milimetrik hassasiyetle radyoterapi; kişiselleştirilmiş sıvı biyopsi ve genetik profilleme.</li>
                    <li>🔥 <strong>Yanık Tedavi Merkezi:</strong> Sanayi bölgesi olması nedeniyle kurulan, Türkiye'nin en donanımlı yanık ünitelerinden biri; ileri düzey deri grefti ve rekonstrüktif plastik cerrahi uzmanlığı.</li>
                    <li>🦴 <strong>Endüstriyel Travmatoloji ve El Cerrahisi:</strong> İş kazalarına bağlı kompleks uzuv yaralanmalarında mikro-cerrahi ve replantasyon (kopan uzvun dikilmesi) konusunda ulusal düzeyde tecrübe.</li>
                    <li>🫀 <strong>Kardiyovasküler Mükemmeliyet:</strong> Pediatrik kalp cerrahisinden, yetişkinlerde kapalı bypass (beating heart) ameliyatlarına kadar geniş bir spektrumda hibrit ameliyathane desteği.</li>
                    <li>🦷 <strong>Oral ve Maksillofasiyal Cerrahi:</strong> Kocaeli Üniversitesi Diş Hekimliği Fakültesi bünyesinde 3D dental tomografi destekli implantoloji ve çene deformitesi cerrahisi.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Uluslararası Erişim</h4>
                <ul>
                    <li>💎 <strong>JCI Akreditasyonlu Bakım:</strong> Dünyanın en iyi hastaneleri listesinde yer alan tesisleri ile 50'den fazla ülkeden gelen yabancı hastalara 'Concierge Medical' hizmeti.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Kocaeli, tıbbi teknoloji envanteri bakımından İstanbul ile doğrudan yarışır. <strong>Güçlü Yönü:</strong> Sanayi devlerinin desteğiyle AR-GE ve tıbbi cihazlara erişim çok hızlıdır. <strong>Eksik Yönü:</strong> Şehirdeki yoğun sanayileşme nedeniyle bazı branşlarda (göğüs hastalıkları gibi) hasta yükü çok fazladır; ancak cerrahi müdahale hızı en yüksek illerden biridir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0262 344 20 54", 
        tr: {
            hospName: "Gölcük Yazlık Ilıcası & Maşukiye Şifalı Su Kaynakları",
            shortDesc: "🌡️ Roma döneminden miras sodyum kalsiyumlu sular; cilt hastalıkları ve kronik ağrılarda doğa ile iç içe termal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etki</h4>
                <ul>
                    <li>🧪 <strong>Sülfat ve Kalsiyum Zengini Su:</strong> Yazlık Ilıcası kaynakları, kükürtlü yapısıyla özellikle egzama ve sedef gibi inatçı deri lezyonları üzerinde antiseptik ve yenileyici etkiye sahiptir.</li>
                    <li>🦴 <strong>Fiziko-Termal Rehabilitasyon:</strong> Kas spazmları ve kireçlenme vakalarında suyun kaldırma kuvveti eşliğinde sunulan 'Aqua-Terapi' imkanları.</li>
                    <li>🌬️ <strong>Maşukiye Mikro-Klima Etkisi:</strong> Samanlı Dağları'ndan gelen tertemiz hava ile birleşen mineral suların, genel yorgunluk ve stres üzerinde yarattığı 'Holistik Detoks'.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Kocaeli termalleri, günübirlik ziyaretçiler için modernize edilmiş tarihi dokuları temsil eder. <strong>Dürüst Analiz:</strong> Büyük bir termal otel kompleksinden ziyade, doğa yürüyüşü ve şifalı su kürünü birleştirmek isteyen 'Well-being' odaklı kullanıcılar için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0262 331 11 00", 
        tr: {
            hospName: "Kocaeli Huzurevi Yaşlı Bakım Merkezi & Kartepe/Sapanca Hattı Özel Bakım Köyleri",
            shortDesc: "👴 Modern geriatri protokolleri ile sanayi şehrinin kalbinde huzurlu bir vaha; hastanelere 10 dakikalık medikal erişim mesafesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Takip ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Medikal Entegrasyon:</strong> Şehir Hastanesi ve Üniversite hastanelerine olan fiziksel yakınlık sayesinde, kronik hastalığı olan yaşlılarda saniyelerle ölçülen müdahale avantajı.</li>
                    <li>🧑‍⚕️ <strong>Palyatif Bakım ve Rehabilitasyon:</strong> Yoğun bakım sonrası iyileşme sürecindeki yaşlılar için uzman hemşirelik ve fizik tedavi desteği.</li>
                    <li>🧠 <strong>Mental Zindelik Programları:</strong> Sapanca Gölü ve Kartepe eteklerindeki tesislerde sunulan doğa yürüyüşleri ve bilişsel yetileri koruyan el sanatları atölyeleri.</li>
                    <li>🥗 <strong>Klinik Beslenme:</strong> Diyetisyenler eşliğinde, yaşlı metabolizmasına uygun düşük glisemik indeksli ve yüksek proteinli menüler.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kocaeli, yaşlı bakımında 'Teknik Güvenlik' arayan aileler için bir numaradır. <strong>Güçlü Yönü:</strong> Her türlü tıbbi komplikasyona anında yanıt verebilecek akademik bir sağlık ağının merkezindedir. Tesisler son derece moderndir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0262 317 10 00",
        tr: {
            hospName: "Kocaeli Şehir Hastanesi FTR Merkezi & Romatem Fizik Tedavi (Kocaeli Birimi)",
            shortDesc: "♿ Türkiye'nin en gelişmiş robotik rehabilitasyon parkurlarından biri; nörolojik ve ortopedik felç vakalarında teknoloji odaklı tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Teknolojiler</h4>
                <ul>
                    <li>🤖 <strong>Robotik Yürüme (Lokomat) ve El Robotları:</strong> İnme ve omurilik felci sonrası nöro-plastisiteyi hızlandıran, oyunlaştırılmış egzersiz protokolleri.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik Destekli Rehabilitasyon:</strong> Denge bozuklukları ve koordinasyon kayıplarında hastayı motive eden VR tabanlı iyileşme seansları.</li>
                    <li>🌊 <strong>Hidroterapi Üniteleri:</strong> Tam donanımlı havuzlarda, suyun direncine karşı yapılan kas güçlendirme ve eklem hareketliliği çalışmaları.</li>
                    <li>🧒 <strong>Pediatrik Özel Terapi:</strong> Çocuklarda gelişimsel gerilik ve Serebral Palsi vakaları için özel tasarlanmış duyu bütünleme laboratuvarları.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kocaeli, FTR cihaz parkuru bakımından Türkiye’nin en zengin 5 ilinden biridir. <strong>Güçlü Yönü:</strong> Hem kamuda hem özelde robotik cihazlara erişim kolaydır. <strong>Eksik Yönü:</strong> Başarı oranı yüksek olduğu için sevk zincirindeki yoğunluk bazen randevu sürelerini etkileyebilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0262 315 47 00",
        tr: {
            hospName: "The Ness Thermal, Wellborn Luxury Hotel & Kartepe Kayak Merkezi Wellness",
            shortDesc: "🧖‍♂️ Sanayi stresinden arınma noktası; lüks termal SPA alanları, aromaterapi ve deniz manzaralı huzur seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Bütünsel Arınma</h4>
                <ul>
                    <li>🧼 <strong>Modern ve Geleneksel Hamam:</strong> Hijyenik şartlarda sunulan, cildi toksinlerden arındıran kese-köpük ritüelleri.</li>
                    <li>💆 <strong>Anti-Stress ve Medikal Masajlar:</strong> İş dünyasının yarattığı kronik boyun ve sırt ağrılarını gideren profesyonel masaj terapileri.</li>
                    <li>🧖‍♂️ <strong>Isıl Konfor Alanları:</strong> Bio-sauna, buhar odaları, macera duşları ve ısıtmalı kapalı havuzlar ile sunulan komple detoks.</li>
                    <li>😌 <strong>Kozmetik ve Cilt Yenileme:</strong> Profesyonel ürünlerle sunulan yüz bakımları ve vücut sıkılaştırma prosedürleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kocaeli'de SPA hizmeti, özellikle Gölcük ve Kartepe bölgelerindeki lüks otellerde 'Üst Segment' olarak sunulmaktadır. Hizmet kalitesi kesinlikle profesyonel iş dünyasının beklentilerini karşılayacak düzeydedir.</p>
            </div>`
        }
    }
},
  "KONYA": {
        surgery: {
            img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", // Konya'nın modern hastane komplekslerini yansıtan gerçek bir kare
            phone: "0332 257 06 06",
            tr: {
                hospName: "Başkent Üniversitesi Konya Hastanesi",
                shortDesc: "🏨 Konya’da üniversite ve şehir hastaneleri sayesinde modern ve geniş kapsamlı cerrahi hizmetler sunulmaktadır.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🎓 Akademik ve Uzman Altyapı</h4>
                    <p>Özellikle üniversite hastaneleri, uzman kadro ve güçlü akademik altyapısı ile cerrahi alanda öne çıkmaktadır.</p>
                    
                    <h4>🩺 Cerrahi Uygulamalar</h4>
                    <ul>
                        <li>❤️ <strong>Kalp ve Damar Cerrahi:</strong> Anjiyo ve bypass işlemleri başarıyla yapılabilmektedir.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Diz-kalça protezi uygulamaları ve kompleks travma ameliyatları.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahi:</strong> Fıtık operasyonları ve belirli tümör ameliyatları gerçekleştirilir.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Mide, safra kesesi ve bağırsak cerrahisi kapsamındaki tüm işlemler.</li>
                        <li>👁️ <strong>Göz Cerrahi:</strong> Modern yöntemlerle göz ameliyatları yapılmaktadır.</li>
                        <li>👩‍⚕️ <strong>Kadın Doğum:</strong> Kapsamlı cerrahi doğum ve müdahale hizmetleri.</li>
                    </ul>

                    <h4>⚠️ Önemli Analiz</h4>
                    <p>➡️ Konya cerrahi olarak güçlü bir altyapıya sahiptir ve sağlık turizmi kapsamında hasta kabul eden hastaneler bulunmaktadır.</p>
                    <p>➡️ Ancak çok ileri kompleks işlemler için genelde Ankara ve İstanbul daha çok tercih edilir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Konya Ilgın veya Karatay Termal tarzı şifalı su görseli
            phone: "0332 350 00 00", // Konya genel turizm hattı
            tr: {
                hospName: "Konya Termal Tesisleri",
                shortDesc: "🌡️ Konya’da termal turizm vardır ancak Afyon gibi şehirlere göre daha sınırlıdır.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Termal Kaynak Özellikleri</h4>
                    <p>Termal sular genellikle orta sıcaklıkta ve mineralli yapıdadır. Daha sınırlı bölgelerde hizmet verilir.</p>
                    
                    <h4>🧪 Kullanım Alanları</h4>
                    <ul>
                        <li>🦴 Romatizma ve eklem hastalıklarında destekleyici tedavi.</li>
                        <li>💪 Kas ağrıları ve genel fiziksel yorgunluğun giderilmesi.</li>
                        <li>🧘 Ameliyat sonrası hafif rehabilitasyon süreçlerinde doğal destek.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Konya’da termal imkanlar mevcuttur; ancak tesisleşme ve kaynak gücü Afyon gibi dev merkezlerin gerisindedir.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Konya Kızılay Hastanesi'nin huzurlu bakım ortamı
            phone: "444 16 80",
            tr: {
                hospName: "Konya Kızılay Hastanesi",
                shortDesc: "🧠 Alzheimer ve demans hastalarına yönelik profesyonel bakım ve sağlık takibi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">👵 Geriatrik Hizmet Detayları</h4>
                    <ul>
                        <li>🧠 <strong>Bilişsel Destek:</strong> Alzheimer ve demans hastaları için özel takip programları.</li>
                        <li>💊 <strong>Kronik Takip:</strong> Yaşlılığa bağlı hastalıkların düzenli tıbbi kontrolü.</li>
                        <li>🧑‍⚕️ <strong>Günlük Bakım:</strong> Beslenme, ilaç yönetimi ve sağlık desteği hizmetleri.</li>
                        <li>🦽 <strong>Mobilite:</strong> Hareket kısıtlılığı olan bireyler için özel destek programları.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Konya’da yaşlı bakım hizmetleri mevcuttur; ancak sağlık turizmi açısından uluslararası düzeyde yoğun tercih edilen bir şehir değildir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Konya Numune Hastanesi'nin modern FTR ünitesinden bir kesit
            phone: "0332 235 45 00",
            tr: {
                hospName: "Konya Numune Hastanesi",
                shortDesc: "♿ Fizik tedavi ve rehabilitasyon hizmetleri modern cihazlarla aktif olarak sunulmaktadır.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Rehabilitasyon ve Tedavi</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Tedavi:</strong> Felç (inme) ve hareket kaybı durumlarında yoğun terapi.</li>
                        <li>🧠 <strong>Özel Durumlar:</strong> MS ve benzeri nörolojik hastalıklarda aktif rehabilitasyon.</li>
                        <li>🦴 <strong>Post-Op Destek:</strong> Ortopedik ameliyat sonrası kritik iyileşme süreçleri.</li>
                        <li>💪 <strong>Kas-İskelet Sistemi:</strong> Kas hastalıklarına yönelik modern tedavi programları.</li>
                    </ul>

                    <h4>🌟 Teknik Altyapı</h4>
                    <p>Konya’da fizik tedavi ve rehabilitasyon hizmetleri oldukça gelişmiştir ve güncel tıbbi cihazlarla uzmanlar eşliğinde uygulanmaktadır.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Medova Hastanesi veya Konya'daki lüks Spa alanları
            phone: "444 86 82",
            tr: {
                hospName: "Medova Hastanesi SPA & Wellness",
                shortDesc: "🧖‍♂️ Spa, masaj ve rahatlatıcı terapi hizmetleri sunan modern sağlık merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Wellness ve Rahatlama</h4>
                    <ul>
                        <li>🧖‍♂️ Profesyonel spa, sauna ve buhar odası imkanları.</li>
                        <li>💆 Stres azaltma ve kas gevşetme amaçlı özel masaj terapileri.</li>
                        <li>😌 Bireysel dinlenme ve genel sağlık destek programları.</li>
                    </ul>

                    <h4>➡️ Sektörel Durum</h4>
                    <p>Konya’da spa hizmetleri mevcuttur ancak Antalya gibi sahil turizmi şehirlerine göre daha sınırlıdır ve genellikle büyük oteller veya özel hastaneler bünyesinde sunulur.</p>
                </div>`
            }
        }
    },
   "KÜTAHYA": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Kütahya Sağlık Bilimleri Üniversitesi Evliya Çelebi EAH
            phone: "0274 231 66 60",
            tr: {
                hospName: "Kütahya Sağlık Bilimleri Üniversitesi (KSBÜ) Evliya Çelebi Eğitim ve Araştırma Hastanesi",
                shortDesc: "🏥 'Sağlık Bilimleri' temalı özel üniversitesi ile cerrahi branşlarda akademik derinliğe sahip bölge üssü.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik İhtisas ve Cerrahi Güç</h4>
                    <p>Kütahya, Türkiye'nin nadir 'Sağlık Bilimleri' üniversitelerinden birine ev sahipliği yapması sayesinde, cerrahi operasyonlarda akademik bir disiplin ve yüksek uzmanlık sunmaktadır.</p>
                    
                    <h4>🩺 Cerrahi, Diş ve Estetik Odak Noktaları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Bypass, kapak değişimleri ve ileri düzey anjiyo müdahaleleri rutin ve başarılı bir şekilde uygulanmaktadır.</li>
                        <li>🦷 <strong>Dental Turizm (Diş):</strong> KSBÜ Diş Hekimliği Fakültesi, bölgedeki en gelişmiş çene cerrahisi ve estetik diş ünitelerinden biridir. İmplant ve gülüş tasarımında akademik referans merkezidir.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Plastik Cerrahi:</strong> Üniversite hastanesi bünyesinde veya yetkili özel kliniklerde uzman doktor denetiminde saç ekimi (FUE/DHI) ve estetik burun/vücut operasyonları.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Mikrocerrahi yöntemlerle sinir sistemi tümörleri ve kompleks fıtık operasyonları.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Obezite (tüp mide) ve metabolik cerrahi operasyonlarında çevre illerden hasta kabul edilmektedir.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Kütahya, cerrahide kendi kendine yeten ve dışarıya hasta sevkini minimuma indirmiş bir şehirdir. Ancak çok spesifik çocuk kalp cerrahisi veya çok nadir görülen genetik cerrahi vakaları için Ankara veya İstanbul'daki üst ihtisas merkezleriyle koordinasyon sağlanır.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Yoncalı Termal Tesisleri
            phone: "0274 249 42 12", // Yoncalı Termal Otel / Belediye
            tr: {
                hospName: "Yoncalı, Ilıca ve Emet Termal Turizm Merkezleri",
                shortDesc: "🌡️ 'Termal Başkent' Kütahya; kükürtlü, radyoaktif ve sülfatlı sularıyla dünyanın en zengin mineral havzalarından biridir.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Termal Mucizenin Kimyasal Analizi</h4>
                    <p>Kütahya termalleri, özellikle Yoncalı bölgesindeki 'sedimanter' yapısıyla eklem ve kas hastalıklarında dünyaca ünlüdür.</p>
                    
                    <h4>🧪 Bölgesel Şifa Haritası</h4>
                    <ul>
                        <li>🦴 <strong>Yoncalı (Romatizma):</strong> Kükürt ve kalsiyum zengini suları ile kronik romatizma, kireçlenme ve eklem iltihaplarında (Ankilozan Spondilit vb.) birincil tedavi noktasıdır.</li>
                        <li>🩹 <strong>Ilıca (Cilt ve Güzellik):</strong> Magnezyum ve florür içeriğiyle deri hastalıkları, sedef ve egzama tedavilerinde hücre yenileyici etki sunar.</li>
                        <li>🫁 <strong>Emet (Yosun Havuzları):</strong> Dünyada nadir bulunan 'doğal yosunlu sıcak su' havuzları ile metabolizma hızlandırma ve zayıflama kürleri.</li>
                        <li>🧘 <strong>Simav (Eynal):</strong> 160 derecelik kaynaktan gelen suyun soğutulmasıyla elde edilen en saf mineralli banyolar.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Kütahya, termal turizmi sadece 'tatil' değil, tam teşekküllü 'hastane destekli kür' olarak sunar. Yoncalı Fizik Tedavi Hastanesi, suyun gücünü tıbbi rehabilitasyonla birleştiren Türkiye'nin en büyük merkezlerindendir.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Kütahya Huzurevi Yaşam Alanı
            phone: "0274 223 62 10", // Kütahya Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Kütahya Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
                shortDesc: "👴 Şifalı suların kıyısında, sakin ve huzurlu bir atmosferde profesyonel geriatrik bakım ve yaşam alanı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Yaşam Kalitesi</h4>
                    <p>Kütahya, iklimi ve termal kaynaklara yakınlığı sayesinde yaşlı bireylerin eklem sağlığını koruyan ve ruhsal huzur veren bir şehirdir.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Koruma:</strong> Demans ve Alzheimer hastaları için güvenli bahçeler ve uzman psikolog destekli hafıza oyunları.</li>
                        <li>💊 <strong>Sağlık Entegrasyonu:</strong> Sağlık Bilimleri Üniversitesi ile yapılan protokoller sayesinde yaşlıların anlık medikal takibi ve geriatri polikliniği desteği.</li>
                        <li>🧑‍⚕️ <strong>Bakım Standartları:</strong> 7/24 kişisel hijyen, beslenme programı ve ilaç yönetimi.</li>
                        <li>🎯 <strong>Termal Kür Desteği:</strong> Yaşlıların hareket kabiliyetini artırmak için kontrollü termal banyo ve hafif egzersiz programları.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Kütahya'da yaşlı bakım hizmetleri çok köklüdür. Ancak çok lüks segmentteki "emekli kasabaları" projesi henüz gelişim aşamasındadır; kamu ve yarı özel tesisler ise oldukça disiplinlidir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Yoncalı FTR Hastanesi
            phone: "0274 249 42 12",
            tr: {
                hospName: "Yoncalı Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
                shortDesc: "♿ Türkiye’nin en büyük FTR merkezlerinden biri; termal su ile robotik rehabilitasyonun kalbi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Su İçi ve Robotik İyileşme</h4>
                    <p>Yoncalı, rehabilitasyon alanında uluslararası bir markadır ve sevk edilen değil, sevk alan bir merkezdir.</p>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç, inme, omurilik felci ve beyin hasarı sonrası yoğun yataklı tedavi.</li>
                        <li>⚙️ <strong>Robotik Ünite:</strong> Lokomat (yürüme robotu) ve ileri teknoloji denge analiz sistemleri.</li>
                        <li>🌊 <strong>Balneoterapi:</strong> Şifalı termal suların kaldırma kuvveti kullanılarak yapılan su içi egzersiz ve hidroterapi.</li>
                        <li>🦴 <strong>Ortopedik Tedavi:</strong> Protez ve artroplasti ameliyatları sonrası fonksiyonel geri kazanım.</li>
                    </ul>

                    <h4>🌟 Stratejik Güç</h4>
                    <p>Kütahya, sadece engelli vatandaşlarımıza değil, Avrupa'dan gelen rehabilitasyon hastalarına da hizmet verebilecek 'Eğitim ve Araştırma' kapasitesine sahiptir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Kütahya Lüks Spa Görseli
            phone: "0274 231 23 23", // Gülümser Hatun Termal Spa
            tr: {
                hospName: "Kütahya Wellness & Luxury Spa Kompleksleri",
                shortDesc: "🧖‍♂️ Tarihi doku ile modern wellness anlayışının buluştuğu, bedensel ve ruhsal detoks noktaları.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Bütünsel Arınma Ritüelleri</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Geleneksel Türk Hamamı:</strong> Kütahya çinileriyle bezenmiş, otantik ve yüksek hijyen standartlı hamam seansları.</li>
                        <li>💆 <strong>Medikal Masajlar:</strong> Termal banyo sonrası kasların gevşemesiyle yapılan profesyonel İsveç ve aroma masajları.</li>
                        <li>😌 <strong>Anti-Stres ve Detoks:</strong> Kişiye özel beslenme programları ile desteklenen, şifalı çamur ve yosun maskeleri.</li>
                        <li>🛁 <strong>VIP Termal Suitler:</strong> Ailelere özel, lüks ve izole termal spa deneyimi.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Kütahya SPA sektörü, 'şifalı su' odaklı bir wellness anlayışına sahiptir. Tesisler sadece rahatlama değil, suyun mineral gücüyle bedeni onarma vaadi sunar.</p>
                </div>`
            }
        }
    },
    "MALATYA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0422 341 06 60",
        tr: {
            hospName: "İnönü Üniversitesi Turgut Özal Tıp Merkezi, Malatya Eğitim ve Araştırma Hastanesi & Kadın Doğum ve Çocuk Hastanesi",
            shortDesc: "🏥 Karaciğer naklinde dünya ikincisi, Avrupa birincisi; onkoloji ve hematolojide bölge referans üssü olan akademik dev kompleks.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Karaciğer Nakli ve İleri Cerrahi Uzmanlığı</h4>
                <ul>
                    <li>♻️ <strong>Dünya Çapında Karaciğer Nakli:</strong> Karaciğer Nakil Enstitüsü bünyesinde aynı anda 5 nakil yapabilme kapasitesi; yaşayan donörden nakillerde uluslararası eğitim ve uygulama liderliği.</li>
                    <li>🩸 <strong>Hematoloji ve Kök Hücre (KİT):</strong> Bölgenin en büyük kemik iliği nakil merkezi; çocuk ve yetişkin hematolojik onkolojisinde aferez ve hücre işleme laboratuvarı desteği.</li>
                    <li>☢️ <strong>Onkoloji Enstitüsü ve Radyoterapi:</strong> TrueBeam STx ve PET-CT altyapısıyla kanser cerrahisi öncesi ve sonrası multidisipliner tümör konseyleri ile tedavi planlama.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Minimal invaziv (küçük kesi) kalp ameliyatları, aort diseksiyonu müdahaleleri ve pediatrik kardiyoloji girişimsel işlemleri.</li>
                    <li>🧠 <strong>Nöroşirürji ve Mikroskobik Cerrahi:</strong> Beyin tümörü rezeksiyonlarında nöronavigasyon kullanımı ve kompleks spinal stabilizasyon (omurga cerrahisi) uzmanlığı.</li>
                    <li>🦷 <strong>Diş Hekimliği Fakültesi Cerrahi Birimi:</strong> Çene-yüz deformiteleri, gömülü diş operasyonları ve ileri düzey kemik ogmentasyonu destekli implantoloji.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Bölgesel Lojistik ve Akademik Güç</h4>
                <ul>
                    <li>💎 <strong>Medikal Turizm Odağı:</strong> Özellikle karaciğer yetmezliği vakalarında Ortadoğu, Balkanlar ve Türki Cumhuriyetlerden gelen hastalar için 'International Patient Center' organizasyonu.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Malatya, "Karaciğer Nakli" dendiğinde dünyada ilk akla gelen 3 merkezden biridir. <strong>Güçlü Yönü:</strong> Akademik kadro derinliği ve vaka sayısı o kadar yüksektir ki, cerrahi ekip en komplike komplikasyonlara bile hazırlıklıdır. <strong>Eksik Yönü:</strong> Deprem sonrası artan nüfus hareketliliği nedeniyle poliklinik yükü fazladır, ancak cerrahi ve yatan hasta birimleri tam kapasite ve sorunsuz çalışmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0422 341 06 60", 
        tr: {
            hospName: "İspendere İçmeleri & Balaban (Darende) Termal Kaynakları",
            shortDesc: "🌡️ Tarihi 'Şifa Suyu' geleneği; yüksek kükürt ve mineral oranıyla mide, bağırsak ve deri hastalıklarında doğal kür merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etki</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Karbondioksitli Yapı:</strong> İspendere içmeleri, özellikle gastrointestinal sistem (mide-bağırsak) fonksiyonlarını düzenleyici ve safra söktürücü içme kürleri ile bilinir.</li>
                    <li>🧼 <strong>Dermatolojik Tedavi:</strong> Suyun doğal kükürt içeriğiyle sedef, egzama ve kronik mantar lezyonları üzerindeki kurutucu ve hücre tazeleyici etkisi.</li>
                    <li>🦴 <strong>Romatizmal Rahatlama:</strong> Balaban bölgesindeki ılık suların, eklem kireçlenmesi ve yumuşak doku romatizmalarında kas spazmını çözücü etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Malatya termalleri, daha çok "İçme Kürü" ve "Geleneksel Şifa" odaklıdır. <strong>Dürüst Analiz:</strong> İspendere bölgesi belediye yatırımlarıyla modern bir görünüme kavuşmuştur; tıbbi gözetimli kürler için uygun bir altyapı sunar.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0422 323 11 00", 
        tr: {
            hospName: "Malatya Huzurevi Yaşlı Bakım Merkezi & Yeşilyurt Geriatrik Yaşam Tesisleri",
            shortDesc: "👴 Kayısı bahçelerinin huzurunda, akademik geriatri desteği ve güçlü sosyal ağlarla desteklenen yaşlı bakım modeli.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Tıp Merkezi Entegrasyonu:</strong> Kronik hastalıkları (hipertansiyon, diyabet) olan yaşlılar için Turgut Özal Tıp Merkezi ile doğrudan medikal takip protokolü.</li>
                    <li>🧑‍⚕️ <strong>Nöro-Psikiyatrik Destek:</strong> Yaşlılıkta görülen depresyon ve demans riskine karşı üniversite destekli terapi ve zihinsel aktivite programları.</li>
                    <li>🥗 <strong>Doğal Beslenme (Kayısı Odaklı):</strong> Sindirim sistemi dostu, bölgesel ve taze ürünlerle hazırlanan antioksidan zengini diyet menüleri.</li>
                    <li>🧠 <strong>Sosyal Esenlik:</strong> El sanatları, kütüphane ve bölge kültürüne uygun sosyal etkinliklerle mental zindeliğin korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Malatya, aile bağlarının çok güçlü olduğu bir şehirdir. <strong>Güçlü Yönü:</strong> Bakım personeli yerel halkın samimiyetini hizmete yansıtır. Şehir içi ulaşımın kolaylığı aile ziyaretlerini ve sağlık kontrollerini pratik kılar.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0422 341 06 60",
        tr: {
            hospName: "Turgut Özal Tıp Merkezi FTR Bölümü & Engelsiz Yaşam Rehabilitasyon Merkezi",
            shortDesc: "♿ Nörolojik ve ortopedik felç vakalarında yoğun rehabilitasyon; uzman fizyoterapist kadrosuyla hareket kabiliyetini artırma odağı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve spinal kord (omurilik) yaralanmaları sonrası motor fonksiyonların geri kazanılmasına yönelik yoğun egzersiz seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, ultrason ve vakum interferans yöntemleri ile ağrı yönetimi ve kas stimülasyonu.</li>
                    <li>🦵 <strong>Ameliyat Sonrası Mobilizasyon:</strong> Ortopedik cerrahi (protez, bağ tamiri) sonrası eklem açıklığını sağlama ve denge eğitimi.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel fizyoterapi ve duyu bütünleme destekleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Malatya'da rehabilitasyon hizmetleri akademik bir disiplinle yürütülür. <strong>Güçlü Yönü:</strong> Üniversite bünyesindeki hocaların vaka takibi yapması. <strong>Eksik Yönü:</strong> Çok ileri düzey robotik yürüme cihazları için kapasite artırımı planlanmaktadır, ancak manuel terapi başarısı çok yüksektir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0422 238 12 12",
        tr: {
            hospName: "Anemon Malatya, Mövenpick & Malatya Palace Wellness Birimleri",
            shortDesc: "🧖‍♂️ Modern iş otelleri bünyesinde, şehir stresinden arınmanızı sağlayan lüks hamam ve masaj ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Türk Hamamı:</strong> Ferah ve hijyenik ortamlarda sunulan klasik kese-köpük masajı.</li>
                    <li>💆 <strong>Aromaterapi ve Klasik Masajlar:</strong> Günün yorgunluğunu atan, kasları gevşeten profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odası:</strong> Vücut direncini artıran ve toksin atan sıcaklık terapileri.</li>
                    <li>😌 <strong>Cilt Bakımı:</strong> Profesyonel ürünlerle sunulan tazeleme ve nemlendirme bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Malatya'da SPA hizmeti, şehrin yüksek segment iş otellerinde toplanmıştır. Hizmet kalitesi standartlara uygun, temiz ve güvenilirdir.</p>
            </div>`
        }
    }
},
    "MANISA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0236 233 80 00",
        tr: {
            hospName: "Manisa Şehir Hastanesi, CBÜ Hafsa Sultan Hastanesi & Merkez Efendi Devlet Hastanesi",
            shortDesc: "🏥 Ege'nin en modern cerrahi komplekslerinden biri; 558 yataklı akıllı bina teknolojisi, ileri onkolojik cerrahi ve nörolojik bilimler merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Cerrahi İnovasyon</h4>
                <ul>
                    <li>🧠 <strong>Nöroloji ve Psikiyatri Ekolü:</strong> Tarihi "Ruh Sağlığı" geleneğini modern tıpla birleştiren, Parkinson ve Alzheimer cerrahisinde (Beyin Pili) bölge referans merkezi.</li>
                    <li>⚕️ <strong>Onkolojik ve Laparoskopik Cerrahi:</strong> Minimal invaziv yöntemlerle mide, bağırsak ve pankreas kanseri operasyonlarında %96'lık doku koruma ve hızlı iyileşme başarısı.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi:</strong> Şehir Hastanesi bünyesinde tam donanımlı koroner yoğun bakım ve kompleks aort cerrahisi müdahaleleri.</li>
                    <li>🩸 <strong>Tüp Bebek (IVF) ve Kadın Sağlığı:</strong> CBÜ bünyesinde ileri düzey üreme sağlığı teknolojileri ve riskli gebelik takibi uzmanlığı.</li>
                    <li>🦴 <strong>Ortopedik Onkoloji ve Travmatoloji:</strong> Kemik tümörleri ve ağır sanayi kazalarına bağlı ekstremite cerrahisinde yüksek vaka tecrübesi.</li>
                    <li>🦷 <strong>Ağız, Diş ve Çene Cerrahisi:</strong> CBÜ Diş Hekimliği Fakültesi'nde zigomatik implantlar ve kompleks çene kisti operasyonları.</li>
                </ul>

                <h4 style="color:#2c3e50;">💎 Stratejik Konum ve Sağlık Erişimi</h4>
                <ul>
                    <li>📍 <strong>İzmir-İstanbul Aksı Lojistiği:</strong> İzmir'e olan 30 dakikalık mesafesiyle, hem İzmir'in akademik desteğini alan hem de çevre illerin (Uşak, Kütahya) cerrahi yükünü hafifleten tampon bölge gücü.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Manisa, Şehir Hastanesi yatırımıyla medikal teknoloji sınıfını atlamıştır. <strong>Güçlü Yönü:</strong> Nörolojik bilimler ve cerrahi branşlarda bekleme süreleri İstanbul/Ankara'ya göre çok daha makuldür. <strong>Eksik Yönü:</strong> Çok spesifik bazı pediatrik genetik testler için halen İzmir'deki üst merkezlerle koordinasyon gerekebilmektedir; ancak genel cerrahi operasyonlarda tam yetkindir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=400",
        phone: "0236 462 13 13", 
        tr: {
            hospName: "Kurşunlu, Sart, Urganlı & Salihli Jeotermal Kaynakları",
            shortDesc: "🌡️ Antik Çağ'dan beri akan 'Lidya Şifası'; yüksek kükürt ve sodyum bikarbonatlı yapısıyla romatizma ve cilt hastalıkları için doğal laboratuvar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Jeokimyasal Profil ve Tıbbi Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Florürlü Su Analizi:</strong> Kurşunlu suları, hücre yenileyici florür içeriğiyle özellikle kronik romatizmal ağrılar ve kıkırdak hasarlarında medikal destek sağlar.</li>
                    <li>🧼 <strong>Dermatolojik Tedavi:</strong> Sart kaplıcalarının antik dokusuyla birleşen alkali suları; sedef, egzama ve inatçı akne lezyonlarında doğal kurutucu ve bariyer onarıcı etkiye sahiptir.</li>
                    <li>🦴 <strong>Post-Op Termal Rehabilitasyon:</strong> Ortopedik ameliyatlar sonrası ödem atma ve eklem hareketliliğini artırma süreçlerinde termal banyoların hidrostatik basınç avantajı.</li>
                    <li>🌬️ <strong>Üst Solunum Yolu İnhalasyonu:</strong> Doğal buhar kürlerinin kronik sinüzit ve bronşit hastalarında mukolitik (balgam sökücü) etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Manisa, termali "Doğa ile Şifa" olarak sunar. <strong>Dürüst Analiz:</strong> Kurşunlu ve Salihli bölgesi tesisleri, yüksek mineral kalitesine rağmen daha çok butik ve doğa odaklıdır. Gerçek bir mineral detoksu arayanlar için Türkiye'nin en saf kaynaklarından biridir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0236 231 11 00", 
        tr: {
            hospName: "Manisa Huzurevi Yaşlı Bakım Merkezi & Spil Dağı Etekleri Özel Bakım Üniteleri",
            shortDesc: "👴 Spil Dağı'nın temiz havası ve Mesir kültürüyle harmanlanmış, akademik nöro-geriatri takipli huzurlu yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Geriatrik Yönetim ve Esenlik</h4>
                <ul>
                    <li>🏥 <strong>Nöro-Geriatrik İzlem:</strong> Alzheimer ve demans hastaları için CBÜ Nöroloji ana bilim dalı ile entegre periyodik bilişsel taramalar ve ilaç yönetimi.</li>
                    <li>🌬️ <strong>Spil Mikro-Klima Etkisi:</strong> Yüksek oksijen kalitesi sayesinde yaşlılarda uyku apnesi ve kronik yorgunluk belirtilerinde doğal azalma.</li>
                    <li>🥗 <strong>Geleneksel Şifa Mutfağı:</strong> Mesir macunu içeriğindeki 41 çeşit baharatın (diyetisyen kontrolünde) bağışıklık güçlendirici ve antioksidan etkisinden faydalanan menüler.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal etkileşim, hobi bahçeleri ve Manisa'nın sakin şehir yapısı ile desteklenen mental sağlık programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Manisa, İzmir'in gürültüsünden kaçmak isteyen ama sağlık imkanlarından kopmak istemeyen emekliler için idealdir. <strong>Güçlü Yönü:</strong> Bakım evlerinin üniversite hastanesine olan lojistik yakınlığı, acil durumlarda hayati önem taşır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0236 233 80 00",
        tr: {
            hospName: "Manisa Şehir Hastanesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik rehabilitasyonda bölgesel güç; felç vakalarında ve ortopedik cerrahi sonrası hidroterapi odaklı iyileşme.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Mobilizasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nöromüsküler Rehabilitasyon:</strong> İnme ve spinal yaralanmalar sonrası kaba ve ince motor becerilerini geliştirmeye yönelik manuel terapi teknikleri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Manyetoterapi:</strong> Kronik ağrı yönetimi, kas stimülasyonu ve doku iyileşmesini hızlandıran ileri teknoloji cihaz uygulamaları.</li>
                    <li>🦵 <strong>Eklem Mobilizasyonu:</strong> Özellikle diz ve kalça protezi ameliyatları sonrası hastayı en kısa sürede bağımsız hareket ettirmeyi hedefleyen medikal egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel bozukluklar ve Serebral Palsi vakaları için duyu bütünleme terapileri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Manisa'da fizik tedavi hizmetleri "Birebir İlgi" odaklıdır. <strong>Güçlü Yönü:</strong> Şehir Hastanesi'nin yeni nesil FTR ünitesi oldukça ferahtır ve cihaz envanteri günceldir. <strong>Eksik Yönü:</strong> Robotik yürüme teknolojileri için bazen bölgedeki (İzmir) özel merkezlerle entegre çalışılmaktadır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0236 232 23 23",
        tr: {
            hospName: "Anemon Manisa, DoubleTree by Hilton & Salihli Lidya Sardes Thermal Spa",
            shortDesc: "🧖‍♂️ Antik Lidya döneminin lüksünü modern SPA kültürüyle birleştiren, jeotermal sularla zenginleştirilmiş bütünsel wellness.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Termal Wellness ve Arınma Ritüelleri</h4>
                <ul>
                    <li>🧼 <strong>Lidya Hamam Kültürü:</strong> Tarihi dokuya uygun mimaride sunulan, mineral sularla yapılan geleneksel kese-köpük ve kil sargılama seansları.</li>
                    <li>💆 <strong>Medikal ve Klasik Masajlar:</strong> Sanayi ve iş stresini atan aromaterapi masajları, refleksoloji ve derin doku terapileri.</li>
                    <li>🧖‍♂️ <strong>Isıl Alanlar ve Buhar Banyosu:</strong> Detoks etkili saunalar, buhar odaları ve termal iç havuzlar ile sunulan komple vücut yenileme.</li>
                    <li>😌 <strong>Anti-Aging Cilt Bakımları:</strong> Profesyonel dermokozmetik ürünlerle sunulan yüz gençleştirme ve nem dengeleme protokolleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Manisa'daki SPA hizmeti, Salihli'deki termal oteller ve merkezdeki iş otelleri sayesinde 'Yüksek Kalite' segmentindedir. Fiyat/Hizmet dengesi açısından Ege Bölgesi'nin en mantıklı seçeneklerini sunar.</p>
            </div>`
        }
    }
},
    "K. MARAS": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0344 228 28 00",
        tr: {
            hospName: "Necip Fazıl Şehir Hastanesi, KSÜ Tıp Fakültesi & Megapark Hastanesi",
            shortDesc: "🏥 Doğu Akdeniz'in cerrahi kalesi; yenilenen deprem izolatörlü bloklar, ileri düzey travma cerrahisi ve kapsamlı yoğun bakım üniteleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Akademik Uzmanlık</h4>
                <ul>
                    <li>🦴 <strong>Travmatoloji ve Ortopedik Cerrahi:</strong> Bölgesel tecrübe ile kompleks kırık yönetimi, artroskopi ve ekstremite rekonstrüksiyonunda yüksek vaka başarısı.</li>
                    <li>⚕️ <strong>Genel ve Onkolojik Cerrahi:</strong> Gastrointestinal sistem cerrahisi, tiroid ve meme onkolojisinde multidisipliner yaklaşımlı operasyonel süreçler.</li>
                    <li>🫀 <strong>Kardiyovasküler Birim:</strong> Koroner anjiyografi, stent uygulamaları ve açık kalp ameliyatları için 7/24 aktif cerrahi nöbet sistemi.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin Cerrahisi):</strong> Mikrocerrahi yöntemlerle spinal diskektomi (fıtık cerrahisi) ve kafa travmaları sonrası acil stabilizasyon müdahaleleri.</li>
                    <li>🩸 <strong>Kadın Doğum ve Pediatri:</strong> Yenilenen modern doğumhaneler ve yenidoğan yoğun bakım üniteleri ile anne-bebek sağlığında bölge standartları.</li>
                    <li>🦷 <strong>Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, estetik dolgu teknikleri ve implantoloji alanında akademik düzeyde tedavi protokolleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Dirençlilik</h4>
                <ul>
                    <li>💎 <strong>Sismik İzolatörlü Altyapı:</strong> Yeni inşa edilen ve güçlendirilen hastane binalarıyla, her türlü afet durumunda kesintisiz cerrahi hizmet sunma kabiliyeti.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Kahramanmaraş, sağlık altyapısını en modern standartlara göre hızla güncellemiştir. <strong>Güçlü Yönü:</strong> Travma cerrahisi ve acil tıp alanında personelin saha tecrübesi olağanüstüdür. <strong>Eksik Yönü:</strong> Bazı çok spesifik genetik araştırma laboratuvarları için halen komşu il (Gaziantep) desteği alınmaktadır ancak temel ve ileri cerrahide tam yetkindir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0344 215 88 50", 
        tr: {
            hospName: "Ekinözü İçmeleri (Yukarı, Orta, Aşağı İçme) & Ilıca Kaplıcaları",
            shortDesc: "🌡️ 'Yukarı İçme'nin meşhur acı suyu; sindirim sistemi, böbrek taşları ve cilt hastalıkları için doğal bir şifa mucizesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Balneolojik Etki</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Magnezyumlu Su:</strong> Ekinözü içmeleri, özellikle mide asit dengesi, gastrit ve kronik böbrek taşı dökme süreçlerinde içme kürü olarak tescillidir.</li>
                    <li>🧼 <strong>Ilıca Kükürtlü Suları:</strong> Yüksek kükürt ve radon içeriğiyle romatizmal ağrılar, siyatik ve kireçlenme vakalarında termal banyo etkisi.</li>
                    <li>🧴 <strong>Dermatolojik Onarım:</strong> Suyun doğal pH değerinin sedef ve egzama gibi cilt lezyonları üzerindeki yatıştırıcı ve kaşıntı giderici etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Kahramanmaraş termalleri, "Geleneksel İçmece Kültürü"nün en saf halidir. <strong>Dürüst Analiz:</strong> Tesisleşme orta segmenttedir ancak suyun mineral kalitesi ve mide-böbrek sağlığı üzerindeki etkisi tıp otoritelerince kabul görmüştür.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0344 231 35 15", 
        tr: {
            hospName: "Kahramanmaraş Huzurevi Yaşlı Bakım Merkezi & Özel Bakım Üniteleri",
            shortDesc: "👴 Ahır Dağı'nın ferah esintisinde, geleneksel saygı ve modern medikal takiple huzurlu bir yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Medikal Takip ve Geriatri:</strong> KSÜ Tıp Fakültesi geriatri uzmanları ile koordineli kronik hastalık yönetimi ve düzenli sağlık taramaları.</li>
                    <li>🌬️ <strong>Doğal Hava Kalitesi:</strong> Şehrin yüksek kesimlerinde bulunan tesislerin sunduğu düşük nemli ve temiz hava, yaşlılarda solunum konforunu artırır.</li>
                    <li>🥗 <strong>Geleneksel ve Sağlıklı Beslenme:</strong> Bölgesel ve doğal ürünlerle hazırlanan, yaşlı metabolizmasına uygun düşük sodyumlu menüler.</li>
                    <li>🧠 <strong>Psikososyal Destek:</strong> El sanatları atölyeleri, manevi destek birimleri ve kuşaklar arası buluşma etkinlikleriyle aktif zihin programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kahramanmaraş, aile bağlarının çok sıkı olduğu bir şehirdir. <strong>Güçlü Yönü:</strong> Bakım personeli ve sosyal çevrenin yaşlıya yaklaşımı "hürmet" odaklıdır. Tesislerin güvenliği ve ulaşılabilirliği en üst seviyededir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0344 228 28 00",
        tr: {
            hospName: "Necip Fazıl Şehir Hastanesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Travma sonrası rehabilitasyonda yüksek tecrübe; fizik tedavi ve ergoterapi uygulamalarıyla hayata dönüş.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Mobilizasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme ve travma sonrası motor fonksiyonların geri kazanılmasına yönelik denge ve koordinasyon seansları.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> TENS, ultrason ve vakum uygulamalarıyla kas stimülasyonu ve ağrılı bölgelerde hızlı iyileşme.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Protez ve bağ ameliyatları sonrası hastayı en kısa sürede bağımsız hareket ettirmeyi hedefleyen medikal egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için duyu bütünleme odaları ve profesyonel fizyoterapi desteği.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kahramanmaraş'ta rehabilitasyon hizmetleri "Vaka Tecrübesi" bakımından çok güçlüdür. <strong>Güçlü Yönü:</strong> Fizyoterapistlerin travma sonrası iyileşme süreçlerindeki uzmanlığı. <strong>Eksik Yönü:</strong> Çok ileri düzey robotik yürüme teknolojileri için bazen bölge merkezlerine yönlendirme yapılabilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0344 225 10 10",
        tr: {
            hospName: "Ramada Plaza, Clarion Hotel & Saffron Hotel Wellness",
            shortDesc: "🧖‍♂️ Şehrin dinamik temposundan kaçış; geleneksel hamam ritüelleri ve profesyonel SPA terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı ve Kese:</strong> Hijyenik ve ferah ortamlarda sunulan geleneksel vücut arındırma ritüelleri.</li>
                    <li>💆 <strong>Aromaterapi ve Masaj:</strong> Günün yorgunluğunu atan, kasları gevşeten bitkisel yağlı masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odası:</strong> Detoks etkili ısıl alanlar ile vücut direncinin artırılması.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kahramanmaraş'ta SPA hizmeti, şehrin lüks iş otelleri bünyesinde yoğunlaşmıştır. Hizmet kalitesi standartlara uygun, temiz ve profesyoneldir.</p>
            </div>`
        }
    }
},
  "MARDIN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0482 212 10 48",
        tr: {
            hospName: "Mardin Eğitim ve Araştırma Hastanesi & Artuklu Üniversitesi Tıp Fakültesi",
            shortDesc: "🏥 Mezopotamya'nın yeni sağlık üssü; modern cerrahi altyapısı, ileri yoğun bakım üniteleri ve bölgeye hizmet veren akademik uzmanlık merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Gelişim ve Cerrahi Kapasite</h4>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve mide operasyonlarında kapalı yöntemlerle düşük enfeksiyon riski ve hızlı taburcu odaklı modern cerrahi süreçler.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Bölgedeki vaka yoğunluğu nedeniyle kompleks kırık yönetimi, artroskopik eklem cerrahisi ve protez ameliyatlarında yüksek deneyim.</li>
                    <li>🫀 <strong>Kardiyoloji ve Girişimsel İşlemler:</strong> 7/24 aktif anjiyo laboratuvarı ile kalp krizine hızlı müdahale, stent ve kalp pili uygulamaları.</li>
                    <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Mikrocerrahi tekniklerle bel/boyun fıtığı operasyonları ve travma sonrası cerrahi stabilizasyon süreçleri.</li>
                    <li>🩸 <strong>Pediatrik Cerrahi:</strong> Bölgedeki genç nüfus oranı nedeniyle çocuk cerrahisi ve yenidoğan yoğun bakım hizmetlerinde özelleşmiş birimler.</li>
                    <li>🦷 <strong>Diş Hekimliği Uzmanlığı:</strong> Artuklu Üniversitesi bünyesinde ileri düzey oral cerrahi, gömülü diş çekimleri ve implantoloji tedavileri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Sağlık Yönetimi</h4>
                <ul>
                    <li>🛂 <strong>Sınır Ötesi Sağlık Lojistiği:</strong> Sınır hattına yakınlığı nedeniyle uluslararası acil vakaların yönetimi ve stabilize edilmesinde kritik 'Bölge Hastanesi' rolü.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Mardin, Tıp Fakültesi'nin açılmasıyla akademik bir ivme kazanmıştır. <strong>Güçlü Yönü:</strong> Hastane binaları yenidir ve teknolojik parkur hızla güncellenmektedir. <strong>Eksik Yönü:</strong> Çok spesifik yan dallarda (çocuk onkolojisi vb.) halen Diyarbakır veya Gaziantep gibi merkezlerle koordinasyon gerekebilir; ancak temel ve ileri cerrahide tam yetkindir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0482 212 10 48", 
        tr: {
            hospName: "Mardin Yerel Şifalı Kaynaklar & Doğal Çamur Kürleri",
            shortDesc: "🌡️ Mezopotamya güneşinin enerjisiyle birleşen mineralli toprak ve su yapısı; deri ve eklem sağlığı için kadim doğal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Doğal İçerik ve Balneolojik Potansiyel</h4>
                <ul>
                    <li>🧪 <strong>Zengin Mineral Yapısı:</strong> Mardin çevresindeki kaynaklar, yüksek kükürt ve sodyum içeriğiyle deri lezyonları üzerinde antiseptik etki sağlar.</li>
                    <li>🧼 <strong>Geleneksel Çamur Terapisi:</strong> Bölgeye özgü mineralli çamurların eklem ağrıları ve romatizmal şikayetlerde doğal bir kompres olarak kullanımı.</li>
                    <li>🌬️ <strong>Kuru Hava ve İyileşme:</strong> Bölgenin düşük nemli ve güneşli havası, belirli cilt hastalıklarının (sedef vb.) helioterapi (güneş tedavisi) ile desteklenmesi için uygundur.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Mardin'de klasik büyük termal otellerden ziyade, "Kadim Şifa" ve "Doğal Terapi" odaklı bir yaklaşım hakimdir. <strong>Dürüst Analiz:</strong> Tesisleşme butik düzeydedir; gerçek bir Mezopotamya doğa deneyimi ile birleşen yerel şifa yöntemleri ön plandadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0482 212 55 54", 
        tr: {
            hospName: "Mardin Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Tarihi doku ve geniş aile kültürünün gölgesinde, manevi huzur ve modern medikal takipli yaşlı yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Sosyal Kalite</h4>
                <ul>
                    <li>🏥 <strong>Hızlı Tıbbi Erişim:</strong> Eğitim ve Araştırma Hastanesi ile entegre, periyodik sağlık taramaları ve kronik hastalık yönetimi (hipertansiyon, şeker takibi).</li>
                    <li>🧑‍⚕️ <strong>Geriatrik Psikososyal Destek:</strong> Yaşlılıkta yalnızlaşmaya karşı, bölgenin güçlü sosyal bağları ve kültürel etkinlikleriyle desteklenen mental sağlık programları.</li>
                    <li>🥗 <strong>Mezopotamya Diyeti:</strong> Yerel ve taze ürünlerle hazırlanan, yaşlı sindirim sistemine uygun antioksidan zengini menüler.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> El sanatları, kütüphane ve tarihi şehir gezileriyle zihinsel aktif kalma süreçleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Mardin, yaşlıya hürmetin en yüksek olduğu illerimizden biridir. <strong>Güçlü Yönü:</strong> Bakım personeli ve sosyal çevrenin samimiyeti huzurevi ortamını bir 'aile evi' sıcaklığına taşır. Sakin ve huzurlu bir emeklilik için idealdir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0482 212 10 48",
        tr: {
            hospName: "Mardin FTR Ünitesi & Özel Özel Eğitim ve Rehabilitasyon Merkezleri",
            shortDesc: "♿ Nörolojik ve ortopedik vakalarda fizik tedavi; çocuk gelişiminde profesyonel rehabilitasyon desteği.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Uygulama Protokolleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve kısmi felç durumlarında motor fonksiyonların geri kazanılmasına yönelik denge-koordinasyon seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, lazer ve ultrason tedavileriyle ağrı yönetimi ve kas stimülasyonu.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Ameliyat sonrası eklem hareket kısıtlılığını gidermeye yönelik manuel terapi ve cihaz destekli egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için duyu bütünleme odaları ve profesyonel fizyoterapi desteği.</li>
                </ul>

                <h4>🌟 Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Mardin'de rehabilitasyon hizmetleri 'Birebir İlgi' odaklıdır. <strong>Güçlü Yönü:</strong> Fizyoterapist kadrosu vaka çeşitliliği nedeniyle yetkindir. <strong>Eksik Yönü:</strong> Çok ileri robotik yürüme teknolojileri için bazen Diyarbakır'daki üst merkezlerle koordinasyon kurulabilir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0482 213 11 00",
        tr: {
            hospName: "Mardin Hilton Garden Inn, Ramada Plaza & Tarihi Artuklu Hamamları",
            shortDesc: "🧖‍♂️ Tarihi Mezopotamya hamam kültürüyle modern SPA konforunun eşsiz buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Ritüelleri:</strong> Asırlık taş binalarda sunulan, cildi toksinlerden arındıran geleneksel kese-köpük masajları.</li>
                    <li>💆 <strong>Aromaterapi ve Klasik Masajlar:</strong> Şehir stresini ve gezi yorgunluğunu atan profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Sauna, buhar odası ve şok duşları ile sunulan komple vücut detoksu.</li>
                    <li>😌 <strong>Cilt Yenileme:</strong> Profesyonel ürünlerle sunulan tazeleme ve nemlendirme bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Mardin'de SPA hizmeti, hem tarihi hamamlarda otantik bir deneyim hem de lüks iş otellerinde modern bir wellness olarak sunulmaktadır. Hizmet kalitesi kesinlikle misafirperver ve profesyoneldir.</p>
            </div>`
        }
    }
},
   "MUGLA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0252 214 13 26",
        tr: {
            hospName: "Muğla Eğitim ve Araştırma Hastanesi, Yücelen Hastaneleri & Esnaf Hastanesi (Fethiye)",
            shortDesc: "🏥 Ege'nin global sağlık kapısı; ileri onkoloji merkezi, su altı tıbbı ve Avrupa standartlarında özel cerrahi kompleksler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve Global Cerrahi Standartlar</h4>
                <ul>
                    <li>🤿 <strong>Su Altı Hekimliği ve Hiperbarik Tıp:</strong> Dalış turizminin merkezi olması nedeniyle Türkiye'nin en donanımlı basınç odaları; vurgun ve kronik yara tedavisinde uluslararası referans.</li>
                    <li>☢️ <strong>Onkoloji ve Nükleer Tıp:</strong> MSKÜ bünyesinde PET-CT ve ileri radyoterapi cihazlarıyla kanser cerrahisinde bölge dışına sevki bitiren teknolojik altyapı.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> Marmaris ve Fethiye aksındaki özel hastanelerde 7/24 yabancı dile hakim ekiplerle açık kalp ve anjiyo müdahaleleri.</li>
                    <li>🦴 <strong>Robotik Olmayan Hassas Ortopedi:</strong> Özellikle ileri yaş yabancı turistlerin kalça ve diz protezi cerrahisinde medikal turizm odaklı yüksek başarı oranları.</li>
                    <li>🧠 <strong>Nöroşirürji ve Spinal Cerrahi:</strong> Bel ve boyun fıtıklarında mikro-cerrahi uygulamaları; post-op (ameliyat sonrası) rehabilitasyonla entegre süreç yönetimi.</li>
                    <li>🦷 <strong>Estetik Diş Hekimliği ve İmplantoloji:</strong> Bodrum ve Fethiye bölgesinde "Dental Holiday" konseptiyle 3D dijital gülüş tasarımı ve Zirkonyum/E-max uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Uluslararası Sağlık Lojistiği</h4>
                <ul>
                    <li>🛂 <strong>Dalaman ve Milas-Bodrum Havalimanı Entegrasyonu:</strong> Avrupa'dan gelen hastalar için havalimanı-hastane-otel (V.I.P) transfer ve tercümanlık ağının kusursuz işleyişi.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Muğla, özellikle özel sektörün yatırımlarıyla "Otel Konforunda Sağlık" kavramını zirveye taşımıştır. <strong>Güçlü Yönü:</strong> Personelin yabancı dil yetkinliği ve hasta konforu odaklı yaklaşımı Türkiye ortalamasının çok üzerindedir. <strong>Eksik Yönü:</strong> Turizm sezonunda (Yaz) acil servis ve poliklinik yükü aşırı artmaktadır; planlı cerrahiler için kış ve bahar ayları daha efektifdir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0252 284 21 00", 
        tr: {
            hospName: "Dalyan Peloid (Çamur Banyosu), Sultaniye Kaplıcaları & Milas Güllük Termalleri",
            shortDesc: "🌡️ Radyoaktif özellikli mineral sular ve tescilli şifalı çamurlar; kadın hastalıkları ve eklem romatizmasında dünya markası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Radon ve Kalsiyum Analizli Şifa Kaynakları</h4>
                <ul>
                    <li>🧪 <strong>Radyoaktif Sultaniye Suları:</strong> Türkiye'nin en yüksek radyoaktivitesine sahip sularından biri; romatizma, siyatik ve nörolojik yorgunluklarda "hücre yenileyici" etki.</li>
                    <li>🧼 <strong>Dalyan Peloid (Tıbbi Çamur):</strong> Sağlık Bakanlığı onaylı mineral yapısıyla cilt detoksu, akne tedavisi ve kas gevşetici doğal kompres etkisi.</li>
                    <li>🛀 <strong>Jinekolojik Rehabilitasyon:</strong> Sıcak mineral banyolarının kronik pelvik ağrılar ve kadın hastalıkları üzerindeki yatıştırıcı tıbbi onayı.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Muğla termalleri, doğa turizmiyle (Köyceğiz Gölü) %100 entegre durumdadır. <strong>Dürüst Analiz:</strong> Burası sadece bir kaplıca değil, bir "Doğa Terapisi" merkezidir. Sultaniye Kaplıcaları, mineral çeşitliliği bakımından dünya literatüründe ilk sıralardadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0252 211 11 00", 
        tr: {
            hospName: "Muğla Abide-Hasan Nuri Öncüer Huzurevi & Fethiye/Bodrum Özel Geriatri Köyleri",
            shortDesc: "👴 'Mavi ve Yeşil' arasında sağlıklı yaşlanma; Avrupa'dan emekli olanların tercih ettiği medikal takipli lüks bakım modelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Geriatri ve Yaşam Kalitesi Yönetimi</h4>
                <ul>
                    <li>🏥 <strong>Uluslararası Geriatri Protokolleri:</strong> Yabancı uyruklu ve yerli yaşlılar için çok dilli medikal takip ve ilaç yönetim sistemleri.</li>
                    <li>🌬️ <strong>Nem ve Oksijen Dengesi:</strong> Muğla'nın mikro-klima alanları (özellikle Köyceğiz ve Fethiye hattı), KOAH ve kalp hastası yaşlılar için en ideal yaşam iklimini sunar.</li>
                    <li>🥗 <strong>Akdeniz-Ege Diyeti:</strong> Yerel zeytinyağı, taze otlar ve deniz ürünleri odaklı, alzheimer riskini azaltan anti-inflamatuar beslenme programları.</li>
                    <li>🧠 <strong>Aktif Yaşlanma:</strong> Doğa yürüyüşleri, deniz aktiviteleri ve uluslararası sosyal gruplarla zihinsel ve sosyal izolasyonu engelleyen yaşam tarzı.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Muğla, emekli yaşamı için Türkiye'nin en prestijli noktasıdır. <strong>Güçlü Yönü:</strong> Özel bakım evleri butik otel standardında olup, her yaşlıya düşen sağlık personeli oranı çok yüksektir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0252 214 13 26",
        tr: {
            hospName: "MSKÜ FTR Bölümü & Özel Marmaris-Bodrum Rehabilitasyon Merkezleri",
            shortDesc: "♿ Deniz havası eşliğinde nörolojik rehabilitasyon; ortopedik ameliyat sonrası hızlı mobilizasyon uzmanlığı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve İyileşme Teknolojileri</h4>
                <ul>
                    <li>♿ <strong>Hidroterapi ve Aquaterapi:</strong> Deniz suyunun kaldırma kuvvetinden ve mineral yapısından faydalanan eklem içi egzersiz programları.</li>
                    <li>⚙️ <strong>Post-Travmatik Rehabilitasyon:</strong> Spor yaralanmaları ve kaza sonrası hızlı kas güçlendirme için yüksek yoğunluklu lazer ve manyetoterapi.</li>
                    <li>🦵 <strong>Kişiye Özel Ortez-Protez Eğitimi:</strong> Uzuv kayıpları veya fonksiyonel kısıtlılıklarda biyomekanik analiz destekli yürüme eğitimleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Terapi:</strong> Çocuklarda Serebral Palsi ve otizm spektrumunda duyu bütünleme ve atlı terapi (Hipoterapi) imkanları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Muğla'da rehabilitasyon süreci "Psikolojik Motivasyon" ile desteklenir. <strong>Güçlü Yönü:</strong> İyileşme sürecini güneşli ve huzurlu bir ortamda geçirmek hastanın ağrı eşiğini ve moralini yükseltir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0252 311 00 00",
        tr: {
            hospName: "The Marmara Bodrum SPA, Jumeirah, Rixos Premium & D-Resort Göcek Wellness",
            shortDesc: "🧖‍♂️ Dünyanın en lüks SPA destinasyonlarından biri; geleneksel Türk hamamının global 'Luxury Wellness' ile buluştuğu nokta.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Holistik Detoks ve Estetik Wellness</h4>
                <ul>
                    <li>💆 <strong>Dünya Masaj Literatürü:</strong> Bali, Thai, Shiatsu ve İsveç masajlarının en yetkin (sertifikalı) uzmanlar tarafından uygulanması.</li>
                    <li>🧘 <strong>Yoga ve Meditasyon Kampları:</strong> Bodrum ve Fethiye koylarında gün doğumu seansları, ses terapisi ve nefes çalışmaları.</li>
                    <li>🧖‍♂️ <strong>Anti-Aging ve Ozon Terapisi:</strong> Cilt yenileme, medikal estetik ve vücut şekillendirmede son teknoloji cihazlarla desteklenen SPA kürleri.</li>
                    <li>😌 <strong>Tuz Odaları ve Hamam Ritüelleri:</strong> Osmanlı saray usulü altın tozlu bakımlardan, modern buhar odası terapilerine kadar geniş yelpaze.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Muğla (özellikle Bodrum), dünya jet sosyetesinin ağırlanması nedeniyle SPA kalitesinde "Zirve" noktadır. Fiyatlar Türkiye ortalamasının üzerindedir ancak sunulan deneyim uluslararası ödüllü standartlardadır.</p>
            </div>`
        }
    }
},
   "MUS": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0436 212 06 68",
        tr: {
            hospName: "Muş Devlet Hastanesi & Muş Alparslan Üniversitesi Tıp Fakültesi Birimleri",
            shortDesc: "🏥 Doğu'nun kış dirençli cerrahi merkezi; yenilenen 400 yataklı modern kompleks, ileri düzey acil tıp ve travma cerrahisi birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Bölgesel Cerrahi Dinamikler ve Travma Yönetimi</h4>
                <ul>
                    <li>🦴 <strong>Ortopedik Travma ve Ekstremite Cerrahisi:</strong> Bölgenin zorlu kış şartlarına bağlı düşme ve kaza vakaları nedeniyle kemik kırıkları, eklem stabilizasyonu ve yumuşak doku onarımında yüksek cerrahi hız.</li>
                    <li>⚕️ <strong>Genel Cerrahi ve Laparoskopi:</strong> Safra kesesi, appendektomi ve fıtık operasyonlarında kapalı yöntem (laparoskopik) standartları ile 24 saatlik takip protokolü.</li>
                    <li>🫀 <strong>Kardiyoloji ve Girişimsel Birim:</strong> Koroner anjiyografi laboratuvarı ile kalp krizine hızlı müdahale, stent ve geçici-kalıcı kalp pili uygulamaları.</li>
                    <li>🧠 <strong>Nöroşirürji ve Omurga Sağlığı:</strong> Bel ve boyun fıtıklarında mikrocerrahi yöntemlerle sinir baskısını gideren operasyonlar ve travmatik beyin hasarı stabilizasyonu.</li>
                    <li>🩸 <strong>Kadın Doğum ve Yenidoğan Bakımı:</strong> Modern doğumhaneler ve bölgeye hizmet veren yüksek kapasiteli yenidoğan yoğun bakım üniteleri (NICU).</li>
                    <li>🦷 <strong>Muş Ağız ve Diş Sağlığı Merkezi:</strong> Protez diş teknolojileri, gömülü diş operasyonları ve temel implant uygulamaları ile geniş kitleye hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Erişilebilirlik</h4>
                <ul>
                    <li>🛂 <strong>Kış Şartları Mobilizasyonu:</strong> Zorlu iklim koşullarında hava ambulansı ve paletli ambulans koordinasyonu ile kritik hastaların sevk ve stabilizasyon yönetimi.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Muş, son yıllarda bina ve cihaz envanterini tamamen modernize etmiştir. <strong>Güçlü Yönü:</strong> Acil tıp ve travma vakalarındaki saha tecrübesi üst düzeydir. <strong>Eksik Yönü:</strong> Onkolojik radyoterapi ve organ nakli gibi çok ileri spesifik işlemler için halen Erzurum veya Elazığ gibi bölge merkezlerine sevk yapılmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0436 212 06 68", 
        tr: {
            hospName: "Varto Kaynarca (Karaköy) Kaplıcası & Muş Şifalı Mineralli Kaynaklar",
            shortDesc: "🌡️ Volkanik kökenli mineralli sular; kükürtlü yapısıyla romatizma ve cilt hastalıkları için doğal termal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Jeokimyasal Profil ve Şifa Etkisi</h4>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Bikarbonatlı Su:</strong> Varto bölgesindeki kaynaklar, yüksek kükürt oranıyla sedef, egzama ve kronik deri lezyonları üzerinde iyileştirici etki sağlar.</li>
                    <li>🦴 <strong>Termal Fizyoterapi Desteği:</strong> Suyun doğal sıcaklığının (38-42°C) kronik eklem romatizması, siyatik ve nevralji üzerindeki kas gevşetici ve ağrı kesici etkisi.</li>
                    <li>🧼 <strong>Doğal Çamur Uygulamaları:</strong> Bazı kaynak çevrelerindeki mineralli tortuların, eklem kireçlenmelerinde doğal bir sıcak kompres olarak kullanımı.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Muş'un termal kaynakları, büyük tesisleşmeden ziyade yerel ve doğal haliyle şifa sunar. <strong>Dürüst Analiz:</strong> Tesis imkanları butiktir; ancak suyun saf mineral kalitesi özellikle deri sağlığı arayanlar için yüksek potansiyel taşır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0436 212 11 05", 
        tr: {
            hospName: "Muş Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Doğu Anadolu'nun sakinliğinde, manevi değerlere saygılı ve akademik sağlık takipli yaşlı yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Bakım ve Sosyal Esenlik</h4>
                <ul>
                    <li>🏥 <strong>Medikal Entegrasyon:</strong> Devlet Hastanesi uzmanları tarafından düzenli periyotlarla yürütülen kronik hastalık (tansiyon, diyabet) takibi.</li>
                    <li>🧑‍⚕️ <strong>Psikososyal Destek:</strong> Bölgenin güçlü sosyal bağları ve geleneksel sohbet kültürüyle desteklenen, yalnızlık karşıtı mental sağlık programları.</li>
                    <li>🥗 <strong>Doğal ve Bölgesel Beslenme:</strong> Muş Ovası'nın taze ve doğal ürünleriyle hazırlanan, yaşlı sindirim sistemine uygun protein ve lif dengeli menüler.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal etkileşim alanları, el sanatları ve manevi rehberlik birimleri ile aktif zihin takvimi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Muş, yaşlıya hürmetin toplumsal bir görev kabul edildiği bir ildir. <strong>Güçlü Yönü:</strong> Huzurevi personeli ile sakinler arasındaki bağ oldukça samimidir. Tesislerin güvenliği ve bakım kalitesi standartlara uygundur.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0436 212 06 68",
        tr: {
            hospName: "Muş FTR Ünitesi & Özel Eğitim ve Rehabilitasyon Merkezleri",
            shortDesc: "♿ Ortopedik ve nörolojik vakalarda fizik tedavi; çocuk gelişiminde profesyonel özel eğitim desteği.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon Uygulamaları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme sonrası motor fonksiyon gelişimi ve yürüme dengesinin kazanılmasına yönelik manuel terapi egzersizleri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> TENS, ultrason ve vakum uygulamaları ile kronik ağrıların kontrol altına alınması.</li>
                    <li>🦵 <strong>Kış Travması Sonrası Rehabilitasyon:</strong> Kayma ve düşme sonrası yapılan ameliyatların ardından hastayı hızlıca ayağa kaldıracak medikal mobilizasyon programları.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel fizyoterapist ve pedagog eşliğinde duyu bütünleme çalışmaları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Muş'ta rehabilitasyon hizmetleri birebir fizyoterapist ilgisi bakımından verimlidir. <strong>Güçlü Yönü:</strong> Manuel terapi başarısı ve hasta motivasyonu. <strong>Eksik Yönü:</strong> Çok ileri düzey robotik yürüme teknolojileri için genellikle bölge merkezlerine (Erzurum) yönlendirme yapılır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0436 213 00 00",
        tr: {
            hospName: "Muş Şehir Otelleri Wellness Birimleri & Geleneksel Hamamlar",
            shortDesc: "🧖‍♂️ Bölgenin sert ikliminde sıcak bir mola; geleneksel Türk hamamı ve arındırıcı masaj terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Vücut Bakımı</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Hamam Kültürü:</strong> Hijyenik ve sıcak bir ortamda sunulan klasik kese-köpük ritüelleri.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kaslardaki gerginliği azaltan ve günün yorgunluğunu atan klasik masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Detoks etkili ısıl alanlar ile metabolizmanın canlandırılması.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Muş'ta SPA hizmeti, şehrin lüks iş otelleri bünyesinde 'Butik ve Temiz' bir hizmet olarak sunulmaktadır. Hizmet kalitesi samimi ve profesyoneldir.</p>
            </div>`
        }
    }
},
 "NEVSEHIR": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Nevşehir Devlet Hastanesi Modern Bina Görünümü
            phone: "0384 228 50 50",
            tr: {
                hospName: "Nevşehir Devlet Hastanesi (Kapadokya Sağlık Yerleşkesi)",
                shortDesc: "🏥 Turizm başkentinde, uluslararası hastalara hizmet verebilecek donanımda, dijital altyapılı modern sağlık merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Turizm Odaklı Cerrahi Hizmetler</h4>
                    <p>Nevşehir, Kapadokya bölgesinin yoğun turist trafiği nedeniyle acil cerrahi müdahaleler ve genel operasyonlarda yüksek tecrübeye sahip bir kadroya sahiptir.</p>
                    
                    <h4>🩺 Öne Çıkan Branşlar</h4>
                    <ul>
                        <li>👁️ <strong>Göz Cerrahisi:</strong> Kapadokya’nın eşsiz manzarasını "net" görmek isteyen turistler için katarakt ve lazer operasyonları.</li>
                        <li>🦷 <strong>Dental Turizm (Diş):</strong> Bölgedeki butik diş kliniklerinde, yabancı dil bilen hekimler eşliğinde implant ve gülüş tasarımı.</li>
                        <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Bölgedeki doğa sporları ve balon kazaları riskine karşı gelişmiş travma cerrahisi birimi.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik yöntemlerle yapılan tüm rutin ve acil batın ameliyatları.</li>
                        <li>💎 <strong>Estetik Cerrahi:</strong> "Kapadokya'da Yenilenme" paketleri kapsamında yapılan burun estetiği (rinoplasti) ve küçük cerrahi dokunuşlar.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Nevşehir, temel ve orta ölçekli cerrahide çok başarılıdır. Ancak açık kalp ameliyatları veya ileri düzey onkolojik cerrahi süreçlerinde hastalar genellikle 1 saat mesafedeki Kayseri Erciyes Üniversitesi'ne sevk edilmektedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Kozaklı Termal Havuz ve Şifalı Su Görseli
            phone: "0384 471 44 44", // Kozaklı Belediye Termal Tesisleri
            tr: {
                hospName: "Kozaklı Termal Kaplıcaları (Şifa Merkezi)",
                shortDesc: "🌡️ Radon gazlı sularıyla Türkiye'nin en yüksek mineral değerine sahip (A-Grubu) termal havzası.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Türkiye'nin En Zengin Mineralli Suyu</h4>
                    <p>Kozaklı suları, sodyum, kalsiyum ve klorürün yanı sıra "Radon" gazı içermesiyle dünyadaki ender kaynaklar arasındadır.</p>
                    
                    <h4>🧪 Medikal Faydalar</h4>
                    <ul>
                        <li>🦴 <strong>Romatizmal ve Artritik Şifa:</strong> Eklem kireçlenmesi, yumuşak doku romatizması ve iltihaplı eklem ağrılarına doğrudan çözüm.</li>
                        <li>🩹 <strong>Cilt Yenileme:</strong> Radon gazının hücre yenileyici etkisiyle sedef ve egzama gibi kronik deri hastalıklarında destekleyici tedavi.</li>
                        <li>🫁 <strong>Solunum ve Sinir:</strong> Astım, bronşit gibi solunum yolları ve stres bazlı psikolojik yorgunluklarda rahatlama.</li>
                        <li>💪 <strong>Ameliyat Sonrası Destek:</strong> Cerrahi işlemlerden sonra kas ve kemik dokusunun hızla toparlanması için termal kürler.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Durum</h4>
                    <p>Kozaklı, konaklama kapasitesiyle İç Anadolu'nun termal devidir. Lüks otellerden belediye tesislerine kadar her bütçeye uygun sağlık turizmi imkanı sunar.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Kapadokya Manzaralı Huzurevi
            phone: "0384 213 10 93", // Nevşehir Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Nevşehir Hacı Bektaş Veli Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Tarihi ve mistik atmosferin ortasında, profesyonel sağlık ekipleriyle huzurlu bir yaşlılık dönemi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Bakım ve Yaşam Kalitesi</h4>
                    <p>Nevşehir, temiz havası ve manevi derinliğiyle yaşlıların hem fiziksel hem de ruhsal sağlığını korumak için tasarlanmıştır.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Sağlık:</strong> Alzheimer ve demans hastaları için özel el sanatları atölyeleri ve hafıza güçlendirici oyunlar.</li>
                        <li>💊 <strong>Sürekli Takip:</strong> Bölgedeki hastanelerle entegre veri sistemi sayesinde anlık medikal kontrol.</li>
                        <li>🧑‍⚕️ <strong>Bakım Standartları:</strong> 7/24 uzman hemşire ve hasta bakıcı desteği ile kişisel hijyen ve beslenme takibi.</li>
                        <li>🎯 <strong>Kültürel Terapi:</strong> Bölgenin tarihi dokusuna yönelik kısa geziler ve moral günleri.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Nevşehir, yaşlılar için çok dingin bir şehirdir. Ancak dik yokuşlu ve kayalık alanlar, hareket kısıtlılığı olan yaşlıların bireysel dış mekan aktivitelerini kısıtlayabilir; bu yüzden tesis içi sosyal alanlar çok geniştir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Kozaklı FTR ve Rehabilitasyon Ünitesi
            phone: "0384 471 21 00", // Kozaklı Fizik Tedavi ve Rehabilitasyon Hastanesi
            tr: {
                hospName: "Kozaklı Fizik Tedavi ve Rehabilitasyon Hastanesi",
                shortDesc: "♿ Termal suyun kaldırma kuvveti ile robotik teknolojiyi birleştiren ihtisas rehabilitasyon merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Su İçi ve Robotik Rehabilitasyon</h4>
                    <p>Nevşehir, özellikle termal rehabilitasyon (balneoterapi) konusunda Türkiye'nin referans noktalarından biridir.</p>
                    <ul>
                        <li>♿ <strong>Nörolojik Tedavi:</strong> Felç (inme), omurilik yaralanmaları ve beyin hasarı sonrası fonksiyonel terapi.</li>
                        <li>⚙️ <strong>Robotik Sistemler:</strong> Yürüme eğitimi veren robotik cihazlar ve denge analiz üniteleri.</li>
                        <li>🌊 <strong>Su İçi Terapi:</strong> Kaplıca suyunun mineral yapısı ve sıcaklığıyla birleşen özel havuz rehabilitasyonu.</li>
                        <li>🦴 <strong>Kas Hastalıkları:</strong> Çocuk ve yetişkinlerde kas zayıflığına yönelik yoğun fiziksel güçlendirme.</li>
                    </ul>

                    <h4>🌟 Bölgesel Prestij</h4>
                    <p>Kozaklı FTR Hastanesi, akademik çalışmalarıyla rehabilitasyon alanında uluslararası literatüre katkı sağlayan bir "eğitim" merkezidir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Kapadokya Cave Hotel Spa Görseli
            phone: "0384 271 20 00", // Museum Hotel veya benzeri Cave Spa İletişim
            tr: {
                hospName: "Kapadokya Cave Wellness & Luxury Spa",
                shortDesc: "🧖‍♂️ Yer altı kaya oyma mekanlarda, mistik atmosferle harmanlanmış dünyanın en özgün SPA deneyimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Mistik Arınma Ritüelleri</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Kaya Hamamları:</strong> Doğal kayadan oyma, nem dengesi korunmuş otantik hamam ve buhar banyoları.</li>
                        <li>💆 <strong>Dünya Masajları:</strong> Volkanik taş masajı, Thai masajı ve bölgedeki üzüm çekirdeklerinden üretilen yağlarla yapılan detoks bakımları.</li>
                        <li>😌 <strong>Meditasyon ve Yoga:</strong> Vadi manzaralı teraslarda güneşin doğuşu eşliğinde ruhsal dengeleme seansları.</li>
                        <li>🍷 <strong>Vinoloji Terapisi:</strong> Kapadokya'nın yerel üzüm özleriyle yapılan antioksidan cilt bakımları.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Nevşehir SPA sektörü, "Luxury Wellness" segmentinde dünyada ilk 10'a girecek tesislere sahiptir. Sadece dinlenmek değil, bir "deneyim" satın almak isteyen üst segment sağlık turistleri için idealdir.</p>
                </div>`
            }
        }
    },
  "NIGDE": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Niğde Ömer Halisdemir Üniv. Eğitim ve Araştırma Hastanesi
            phone: "0388 221 00 00",
            tr: {
                hospName: "Niğde Ömer Halisdemir Üniversitesi Eğitim ve Araştırma Hastanesi",
                shortDesc: "🏥 Akademik kadrosuyla bölgeye cerrahi hizmet veren, yeni nesil tıbbi cihazlarla donatılmış dijital hastane.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik Cerrahi ve Uzmanlık</h4>
                    <p>Niğde, Tıp Fakültesi'nin kurulmasıyla birlikte cerrahi operasyonlarda çevre ilçeler ve iller için güvenilir bir merkez haline gelmiştir.</p>
                    
                    <h4>🩺 Cerrahi ve Estetik Branşlar</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Anjiyo ünitesi ve koroner bypass ameliyatları modern ameliyathanelerde gerçekleştirilmektedir.</li>
                        <li>🦷 <strong>Diş Sağlığı ve Estetiği:</strong> Niğde Diş Hekimliği Fakültesi ve özel kliniklerde implant, zirkonyum kaplama ve gülüş tasarımı hizmetleri yoğun ilgi görmektedir.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi:</strong> Şehirdeki bazı özel tıp merkezlerinde, Ankara ve Kayseri'ye göre daha butik ve uygun fiyatlı saç ekimi (FUE/DHI) seçenekleri mevcuttur.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Spor yaralanmaları ve yaşlılığa bağlı kalça/diz protez ameliyatları başarıyla yapılmaktadır.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) yöntemle obezite cerrahisi ve safra kesesi operasyonları rutin olarak uygulanır.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Niğde, temel cerrahi ve estetik işlemlerde oldukça yetkindir. Ancak çok ileri düzey onkolojik (kanser) cerrahi vakaları veya pediatrik kalp ameliyatları gibi spesifik durumlar için hastalar genellikle 1-1.5 saatlik mesafedeki Kayseri Şehir Hastanesi'ne refere edilir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Çiftehan Kaplıcaları Termal Havuz Görseli
            phone: "0388 531 23 23", // Çiftehan Belediyesi / Tesisler
            tr: {
                hospName: "Çiftehan Kaplıcaları (Niğde’nin Şifa Kapısı)",
                shortDesc: "🌡️ Selçuklu ve Osmanlı’dan beri kullanılan, radyoaktif ve sülfatlı sularıyla ünlü termal havza.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Çiftehan’ın Tıbbi Mucizesi</h4>
                    <p>Çiftehan suları, Türkiye’nin en kaliteli mineralli sularından biridir ve 'radyoaktif' özelliği sayesinde hücre yenilenmesine katkı sağlar.</p>
                    
                    <h4>🧪 Şifa Analizi</h4>
                    <ul>
                        <li>🦴 <strong>Romatizmal Tedavi:</strong> Kireçlenme, siyatik, bel fıtığı ve kronik eklem iltihaplarında doğal bir kürdür.</li>
                        <li>🩹 <strong>Cilt Hastalıkları:</strong> Suyun mineral yapısı sedef, egzama ve akne tedavilerinde destekleyici rol oynar.</li>
                        <li>🫁 <strong>Metabolizma ve Kan Akışı:</strong> Damar sertliği ve yüksek tansiyon gibi dolaşım sistemi problemlerinde yardımcıdır.</li>
                        <li>💪 <strong>Felç Sonrası İyileşme:</strong> Suyun kaldırma ve mineral gücü, felçli hastaların kas kontrolünü kazanmasında etkilidir.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Niğde, termal turizmde Çiftehan bölgesi sayesinde ulusal bir markadır. Lüks termal otellerden apart tesislere kadar geniş bir yelpaze sunar ve özellikle kış aylarında sağlık turistlerinin odak noktasıdır.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Niğde Huzurevi Sosyal Alan
            phone: "0388 232 31 32", // Niğde Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Niğde Bor Bor-İrfan İlk Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Niğde'nin sakin ve temiz havasında, yaşlılar için aile sıcaklığında profesyonel bakım.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Destek Standartları</h4>
                    <p>Niğde ve Bor bölgesi, sakinlik arayan yaşlılar için İç Anadolu'nun en huzurlu köşelerinden biridir.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Güvenlik:</strong> Alzheimer ve demans hastaları için özel gözetim altındaki yaşam alanları.</li>
                        <li>💊 <strong>Düzenli Tıbbi Takip:</strong> Kronik hastalıkların takibi ve günlük ilaç yönetiminin hemşire kontrolünde yapılması.</li>
                        <li>🧑‍⚕️ <strong>Günlük Destek:</strong> Öz bakımını yapmakta zorlanan bireyler için kesintisiz beslenme ve hijyen desteği.</li>
                        <li>🎯 <strong>Rehabilitasyon:</strong> Bor Fizik Tedavi Hastanesi ile koordineli olarak uygulanan hareket programları.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Niğde'de yaşlı bakım hizmetleri devlet eliyle çok güçlü yürütülür. Sosyal imkanlar yeterlidir ancak özel butik "emekli köyleri" henüz gelişme aşamasındadır.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Bor Fizik Tedavi ve Rehabilitasyon Hastanesi
            phone: "0388 311 70 00",
            tr: {
                hospName: "Bor Fizik Tedavi ve Rehabilitasyon Eğitim ve Araştırma Hastanesi",
                shortDesc: "♿ Türkiye’nin en donanımlı rehabilitasyon merkezlerinden biri; yataklı fizik tedavi imkanıyla bölge lideri.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fonksiyonel ve Robotik Tedavi</h4>
                    <p>Niğde'nin Bor ilçesinde bulunan bu hastane, fizik tedavi alanında uluslararası standartlarda hizmet vermektedir.</p>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç, inme ve omurilik felci sonrası yoğun yataklı tedavi programları.</li>
                        <li>⚙️ <strong>Modern Cihazlar:</strong> Yürüme robotları ve ileri teknoloji fizik tedavi üniteleri ile kişiye özel terapi.</li>
                        <li>🦴 <strong>Ortopedik FTR:</strong> Ameliyat sonrası eklem kısıtlılığı ve kas zayıflığına yönelik yoğun seanslar.</li>
                        <li>🧒 <strong>Özel Eğitim:</strong> Engelli bireyler için sosyal hayata uyum ve özgür hareket kabiliyeti kazandırma çalışmaları.</li>
                    </ul>

                    <h4>🌟 Stratejik Güç</h4>
                    <p>Bor FTR Hastanesi, kapasitesi ve uzman hekim sayısıyla sadece Niğde'ye değil, çevre illerden gelen binlerce engelli hastaya da şifa dağıtmaktadır.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Çiftehan Termal Hotel Spa Görseli
            phone: "0388 531 22 22", // Çiftehan Çelikhan Termal Otel
            tr: {
                hospName: "Çiftehan Wellness & Spa Merkezleri",
                shortDesc: "🧖‍♂️ Doğal termal suyun dinlendirici etkisiyle masaj ve arınma terapilerinin birleşimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Sağlıklı Yaşam ve Rahatlama</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Termal Spa Deneyimi:</strong> Geleneksel Türk hamamı, sauna, buhar odası ve açık/kapalı termal havuzlar.</li>
                        <li>💆 <strong>Medikal Terapiler:</strong> Uzman masörler tarafından uygulanan sırt masajı, aromaterapi ve cilt bakımları.</li>
                        <li>😌 <strong>Stres Detoksu:</strong> Toros Dağları'nın eteklerindeki temiz hava ve şifalı su ile zihinsel arınma seansları.</li>
                    </ul>

                    <h4>➡️ Sektörel Analiz</h4>
                    <p>Niğde SPA sektörü tamamen Çiftehan bölgesindeki oteller üzerine kuruludur. Şehir merkezinde daha çok "gündelik spa" hizmeti varken, Çiftehan'da "sağlık odaklı wellness" ön plandadır.</p>
                </div>`
            }
        }
    },
   "ORDU": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0452 225 01 85",
        tr: {
            hospName: "Ordu Üniversitesi Eğitim ve Araştırma Hastanesi, Ordu Devlet Hastanesi & Özel Medical Park Ordu",
            shortDesc: "🏥 Karadeniz'in cerrahi üssü; ileri onkoloji merkezi, modern anjiyo laboratuvarları ve akademik uzmanlık kadrosu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi ve Teknolojik Altyapı</h4>
                <ul>
                    <li>☢️ <strong>İleri Onkoloji ve Radyoterapi:</strong> Linac cihazları ve kemoterapi üniteleri ile kanser cerrahisinde bölge referans merkezi; multidisipliner tümör konseyleri.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> Koroner bypass, kapak değişimleri ve minimal invaziv (küçük kesi) kalp ameliyatlarında yüksek vaka başarısı.</li>
                    <li>⚕️ <strong>Gastrointestinal Sistem Cerrahisi:</strong> Laparoskopik (kapalı) yöntemle obezite cerrahisi, mide ve kolorektal kanser operasyonlarında Karadeniz'in öncü ekipleri.</li>
                    <li>🦴 <strong>Artroskopik ve Protez Cerrahisi:</strong> Spor yaralanmaları (menisküs, bağ tamiri) ve ileri yaş kalça-diz protezlerinde hızlı mobilizasyon protokolleri.</li>
                    <li>🧠 <strong>Nöroşirürji ve Mikrocerrahi:</strong> Beyin tümörü rezeksiyonları ve bel/boyun fıtıklarında mikroskobik yöntemle sinir koruyucu operasyonlar.</li>
                    <li>🦷 <strong>Ordu Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, dijital ölçü sistemleri ve ileri düzey implantoloji uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Turizmi ve Lojistik</h4>
                <ul>
                    <li>🛂 <strong>Havalimanı Entegrasyonu:</strong> Ordu-Giresun (OGU) Havalimanı sayesinde yurt dışından ve diğer illerden gelen hastalar için kolay ulaşım ve transfer yönetimi.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Ordu, sağlık altyapısını son 5 yılda %200 oranında yenilemiştir. <strong>Güçlü Yönü:</strong> Akademik kadro ile özel sektörün hızı çok iyi harmanlanmıştır. <strong>Eksik Yönü:</strong> Bazı çok nadir görülen pediatrik vakalar için Samsun veya Ankara koordinasyonu gerekebilir; ancak yetişkin cerrahisinde tam kapasite hizmet verir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0452 451 40 10", 
        tr: {
            hospName: "Fatsa Sarmaşık Kaplıcaları & Ordu Mineralli Su Kaynakları",
            shortDesc: "🌡️ Karadeniz ormanları içinde bir mucize; kalsiyum ve bikarbonatlı yapısıyla mide ve romatizma dostu şifalı sular.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Analiz ve Şifa Gücü</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı Saf Sular:</strong> Sarmaşık Kaplıcası, sindirim sistemi fonksiyonlarını düzenleyici ve karaciğer metabolizmasını hızlandırıcı içme kürleri ile ünlüdür.</li>
                    <li>🦴 <strong>Termal Eklem Terapisi:</strong> Suyun doğal sıcaklığı ve mineral yapısı; romatizmal ağrılar, siyatik ve kas spazmlarında doğal bir gevşetici etki sunar.</li>
                    <li>🧴 <strong>Dermatolojik Yenilenme:</strong> Suyun düşük kireç oranı ve dengeli mineral yapısının atopik ciltler üzerindeki yatıştırıcı etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Ordu termalleri, tam bir "Doğa Detoksu" sunar. <strong>Dürüst Analiz:</strong> Büyük lüks komplekslerden ziyade, orman dokusunu koruyan butik tesisler ön plandadır. Oksijen seviyesinin yüksekliği termal iyileşmeyi hızlandırır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0452 234 11 05", 
        tr: {
            hospName: "Ordu Ahmet Cemal Mağden Huzurevi & Fatsa/Ünye Özel Bakım Merkezleri",
            shortDesc: "👴 Deniz ve yayla havasının birleştiği 'Mavi Kuşak' yaşamı; Karadeniz'in sakinliğinde medikal takipli huzurlu emeklilik.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Geriatri ve Sosyal Yaşam</h4>
                <ul>
                    <li>🏥 <strong>Medikal Entegrasyon:</strong> Eğitim Araştırma Hastanesi uzmanları ile periyodik sağlık kontrolleri ve kronik hastalık (tansiyon, şeker) yönetimi.</li>
                    <li>🌬️ <strong>Oksijen ve Solunum Konforu:</strong> Yüksek oksijen kalitesi sayesinde yaşlılarda uyku kalitesini artıran ve kronik yorgunluğu azaltan mikro-klima etkisi.</li>
                    <li>🥗 <strong>Karadeniz Mutfağı (Diyetisyen Kontrollü):</strong> Taze deniz ürünleri ve meşhur yerel otlarla hazırlanan, omega-3 zengini ve tansiyon dostu menüler.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal alanlar, el sanatları ve deniz kenarı yürüyüş rotaları ile zihinsel zindelik programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Ordu, yaşlılık dönemi için Türkiye'nin en düşük stresli illerinden biridir. <strong>Güçlü Yönü:</strong> Şehrin huzurlu yapısı ve sağlık hizmetlerine ulaşım hızı en büyük avantajıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0452 225 01 85",
        tr: {
            hospName: "Ordu FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik ve ortopedik vakalarda fizik tedavi; deniz havası eşliğinde medikal iyileşme protokolleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Mobilizasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve felç sonrası motor fonksiyon gelişimi için uzman fizyoterapist eşliğinde denge-koordinasyon seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, lazer ve ultrason yöntemleri ile ağrı yönetimi ve kas stimülasyonu.</li>
                    <li>🦵 <strong>Kişiye Özel Egzersiz:</strong> Eklem kireçlenmesi ve ameliyat sonrası kısıtlılıklarda mobiliteyi artıran modern rehabilitasyon teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için duyu bütünleme bahçeleri ve profesyonel destek birimleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Ordu'da rehabilitasyon hizmetleri birebir ilgi odaklıdır. <strong>Güçlü Yönü:</strong> Personel samimiyeti ve manuel terapi başarısı. <strong>Eksik Yönü:</strong> Robotik yürüme teknolojileri için kapasite artırımı devam etmektedir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0452 225 10 10",
        tr: {
            hospName: "Radisson Blu Ordu, Hilton Garden Inn & Ramada Plaza Wellness",
            shortDesc: "🧖‍♂️ Deniz manzaralı lüks arınma; Karadeniz'in serinliğinde sıcak hamam ritüelleri ve profesyonel masaj terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı ve Kese:</strong> Hijyenik şartlarda sunulan, cildi toksinlerden arındıran geleneksel vücut ritüelleri.</li>
                    <li>💆 <strong>Aromaterapi ve Masajlar:</strong> Günün yorgunluğunu atan, Karadeniz bitki özleriyle desteklenen profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Sauna, buhar odası ve şok duşları ile sunulan komple vücut detoksu.</li>
                    <li>😌 <strong>Cilt Bakımı:</strong> Profesyonel ürünlerle sunulan nemlendirme ve anti-aging bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Ordu'da SPA hizmeti, şehrin lüks zincir otelleri bünyesinde 'Üst Segment' olarak sunulmaktadır. Hizmet kalitesi kesinlikle profesyonel ve sonuç odaklıdır.</p>
            </div>`
        }
    }
},
   "RIZE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0464 213 04 91",
        tr: {
            hospName: "RTEÜ Eğitim ve Araştırma Hastanesi, Rize Devlet Hastanesi & Kaçkar Devlet Hastanesi",
            shortDesc: "🏥 Doğu Karadeniz'in akademik cerrahi üssü; robotik cerrahi girişimleri, ileri düzey kardiyoloji merkezi ve bölgenin en büyük yoğun bakım kapasitesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve İleri Cerrahi Güç</h4>
                <ul>
                    <li>🫀 <strong>Kardiyoloji ve KVC Mükemmeliyet:</strong> Bölgedeki yüksek vaka sayısı nedeniyle koroner anjiyo, stent ve açık kalp ameliyatlarında (Bypass) ulusal düzeyde tecrübe; 7/24 acil müdahale timi.</li>
                    <li>⚕️ <strong>Onkolojik ve Laparoskopik Cerrahi:</strong> RTEÜ bünyesinde kanser cerrahisinde minimal invaziv (kapalı) yöntemlerle tümör rezeksiyonu ve post-op onkolojik takip süreçleri.</li>
                    <li>🤿 <strong>Su Altı Hekimliği ve Hiperbarik Tıp:</strong> Karadeniz'deki balıkçılık ve dalış faaliyetleri destekli, kronik yara ve diyabetik ayak tedavisinde kullanılan ileri teknoloji basınç odaları.</li>
                    <li>🧠 <strong>Nöroşirürji ve Spinal Cerrahi:</strong> Mikro-diskektomi yöntemleriyle bel ve boyun fıtığı operasyonları; nöronavigasyon destekli beyin tümörü cerrahisi.</li>
                    <li>🦴 <strong>Ortopedik Travmatoloji:</strong> Engebeli arazi şartlarına bağlı travma vakalarında uzmanlaşmış, artroskopik eklem tamiri ve kompleks protez uygulamaları.</li>
                    <li>🦷 <strong>RTEÜ Diş Hekimliği Fakültesi:</strong> Çene-yüz cerrahisi, dijital gülüş tasarımı ve kemik grefti destekli ileri implantoloji tedavileri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Bölgesel Stratejik Konum</h4>
                <ul>
                    <li>🛂 <strong>Kafkasya ve Sınır Ötesi Sağlık:</strong> Sarp Sınır Kapısı'na yakınlığı nedeniyle Gürcistan ve çevresinden gelen uluslararası hastalar için bölgenin 'Referans Hastanesi' rolü.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Rize, tıp fakültesinin dinamizmiyle teknolojik envanterini sürekli güncel tutmaktadır. <strong>Güçlü Yönü:</strong> Kardiyovasküler cerrahi ve acil vaka yönetiminde Karadeniz'in en hızlı ekiplerinden birine sahiptir. <strong>Eksik Yönü:</strong> Şehrin coğrafi yapısı nedeniyle hastane genişleme alanları kısıtlıdır; ancak iç donanım ve akademik kadro tam yetkindir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0464 416 11 16", 
        tr: {
            hospName: "Ayder Kaplıcaları, İkizdere Ridos Termal & Andon İçmeleri",
            shortDesc: "🌡️ 2000 metre rakımda volkanik şifa; florürlü ve sülfatlı sularıyla romatizma ve cilt hastalıklarında zirve noktası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Alpin Şifa Etkisi</h4>
                <ul>
                    <li>🧪 <strong>Florürlü ve Sodyumlu Sular:</strong> Ayder kaynakları, 260 metreden gelen doğal sıcaklığı ve florür içeriğiyle kemik metabolizmasını destekler, eklem kireçlenmelerinde ağrıyı minimize eder.</li>
                    <li>🌬️ <strong>Yüksek Rakım ve Oksijen Terapisi:</strong> Termal suyun etkisini artıran temiz dağ havası; kronik bronşit, astım ve alerjik üst solunum yolu rahatsızlıklarında doğal inhalasyon etkisi.</li>
                    <li>🧼 <strong>Andon Maden Suyu (İçme Kürü):</strong> Yüksek demir ve mineral içeriğiyle sindirim sistemi bozuklukları ve kansızlık vakalarında yardımcı medikal destek.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Rize termalleri, "Doğa ve Sağlık" entegrasyonunun dünyadaki nadir örneklerindendir. <strong>Dürüst Analiz:</strong> İkizdere bölgesi modern tesis imkanları sunarken, Ayder bölgesi daha geleneksel ve turistik bir şifa deneyimi sunar. Romatizmal hastalar için 'Yayla-Termal' kombinasyonu eşsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0464 213 11 05", 
        tr: {
            hospName: "Rize Huzurevi Yaşlı Bakım Merkezi & Çamlıhemşin Doğa Dostu Bakım Üniteleri",
            shortDesc: "👴 Yeşilin her tonunda huzurlu bir yaşam; Karadeniz insanının enerjisi ve akademik geriatri desteğiyle aktif yaşlanma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Yaş Takip ve Esenlik Programları</h4>
                <ul>
                    <li>🏥 <strong>Üniversite Destekli Geriatri:</strong> Kronik hastalıkların (hipertansiyon, KOAH) takibi için RTEÜ Tıp Fakültesi ile doğrudan medikal protokoller.</li>
                    <li>🍃 <strong>Doğal Rehabilitasyon:</strong> Yayla ve deniz havasının uyku kalitesi ve solunum fonksiyonları üzerindeki pozitif etkisiyle ilaç kullanımını minimize eden yaşam modeli.</li>
                    <li>🥗 <strong>Karadeniz Organik Mutfağı:</strong> Taze çay antioksidanları, mısır ekmeği ve yöresel sebzelerle hazırlanan, kalp dostu beslenme düzeni.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Doğa yürüyüşleri, el sanatları ve bölge kültürüne uygun sosyal aktivitelerle demans ve depresyon riski yönetimi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Rize, emeklilik döneminde "Huzur ve Sağlık" arayanlar için Karadeniz'in en güvenli limanıdır. <strong>Güçlü Yönü:</strong> Bakım personelinin yerel samimiyeti ve sağlık merkezlerine olan fiziksel yakınlık en büyük konfordur.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0464 213 04 91",
        tr: {
            hospName: "Rize FTR Ünitesi & Özel Kaçkar Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik cerrahi sonrası hızlı geri dönüş; nörolojik vakalarda fizik tedavi ve oksijen odaklı mobilizasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve İyileşme Protokolleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve kısmi felç durumlarında motor becerileri geri kazandıran, denge ve koordinasyon odaklı modern egzersiz seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> TENS, lazer ve ultrason cihazlarıyla ağrı yönetimi ve doku rejenerasyonu hızlandırma.</li>
                    <li>🦵 <strong>Post-Op Mobilizasyon:</strong> Kalça ve diz protezi ameliyatları sonrası hastayı Karadeniz'in dinamik yapısına hazırlayan dirençli egzersiz programları.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel fizyoterapistler eşliğinde duyu bütünleme çalışmaları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Rize'de rehabilitasyon hizmetleri "Sonuç Odaklı" ve akademik disiplinle yürütülür. <strong>Güçlü Yönü:</strong> Manuel terapi başarısı ve hastanın doğal ortamda (yüksek oksijen) hızlı toparlanma hızı.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0464 416 11 16",
        tr: {
            hospName: "Ridos Thermal, Ricosta & Ayder Wellness Center",
            shortDesc: "🧖‍♂️ Dağ yamacında lüks arınma; mineral sularla harmanlanmış SPA ritüelleri ve bulutların üzerinde wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Termal Wellness ve Holistik Detoks</h4>
                <ul>
                    <li>🧼 <strong>Hamam ve Termal Banyo:</strong> Kaynağından gelen 40 derecelik mineral sularla cildi yenileyen kese-köpük ve termal banyo ritüelleri.</li>
                    <li>💆 <strong>Aromaterapi ve Klasik Masajlar:</strong> Şehir stresini ve yorgunluğu atan, bitki özlü yağlarla sunulan profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Buhar Odası ve Sauna:</strong> Toksin atan ısıl alanlar ve ardından gelen buz şoklarıyla metabolizmayı canlandırma.</li>
                    <li>😌 <strong>Taze Çay Terapileri:</strong> Rize çayının antioksidan özelliğinden faydalanan cilt maskeleri ve vücut sargılama bakımları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Rize'de SPA hizmeti, özellikle İkizdere ve sahil bandındaki lüks otellerde 'Üst Segment' olarak sunulmaktadır. Hizmet kalitesi kesinlikle profesyonel ve doğa ile bütünleşiktir.</p>
            </div>`
        }
    }
},
 "SAKARYA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d319a39855df?q=80&w=400", 
        phone: "0264 888 40 00",
        tr: {
            hospName: "Sakarya Eğitim ve Araştırma Hastanesi (SEAH), Altınova Hastanesi & Özel Adatıp Hastanesi",
            shortDesc: "🏥 Marmara'nın cerrahi arteri; 1000 yatak kapasitesine yaklaşan SEAH kampüsü, ileri düzey yanık merkezi ve kapsamlı onkoloji birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi ve Multidisipliner Güç</h4>
                <ul>
                    <li>🔥 <strong>Yanık Tedavi Merkezi:</strong> Bölgenin en büyük ve en donanımlı yanık ünitelerinden biri; sanayi kazaları ve ağır yanık vakalarında yüksek başarı yüzdesi.</li>
                    <li>⚕️ <strong>Onkolojik ve Gastrointestinal Cerrahi:</strong> SAÜ Tıp Fakültesi bünyesinde laparoskopik (kapalı) kolon, mide ve pankreas cerrahisinde uzmanlaşmış akademik kadro.</li>
                    <li>🫀 <strong>Girişimsel Kardiyoloji:</strong> Kompleks koroner müdahaleler, TAVİ (ameliyatsız kapak değişimi) ve periferik damar cerrahisinde 7/24 aktif hibrit ameliyathaneler.</li>
                    <li>👶 <strong>Kadın Doğum ve Çocuk Branşları:</strong> Bölgeye hizmet veren müstakil modern kampüste riskli gebelik takibi (Perinatoloji) ve yenidoğan yoğun bakım uzmanlığı.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Spor yaralanmaları, kalça-diz protezleri ve iş kazalarına bağlı el cerrahisi operasyonlarında yüksek vaka deneyimi.</li>
                    <li>🦷 <strong>SAÜ Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, estetik protez tasarımları ve çocuk diş hekimliği (Pedodonti) alanında ileri düzey klinik hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Lojistik ve Hızlı Erişim Avantajı</h4>
                <ul>
                    <li>🚀 <strong>Metropollerin Kesişimi:</strong> İstanbul'a 1 saat mesafede olmasıyla, büyükşehirlerin yoğunluğundan kaçan hastalar için "Nitelikli ve Hızlı Cerrahi" alternatifidir.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Sakarya, Şehir Hastanesi yatırımıyla cerrahi kapasitesini katlamaktadır. <strong>Güçlü Yönü:</strong> Acil tıp, yanık ünitesi ve travma yönetimi Türkiye standartlarının üzerindedir. <strong>Eksik Yönü:</strong> Bazı çok spesifik organ nakli süreçleri için halen İstanbul bölge merkezleriyle koordinasyon sürdürülmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=400",
        phone: "0264 418 53 10", 
        tr: {
            hospName: "Kuzuluk Kaplıcaları, Taraklı Termal & Geyve Şifalı Suları",
            shortDesc: "🌡️ Selçuklu'dan günümüze gelen şifa geleneği; yüksek mineralli sodyum bikarbonatlı yapısıyla romatizma ve solunum dostu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Analiz ve Tıbbi Endikasyonlar</h4>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Florürlü Su:</strong> Kuzuluk suları, hücre yenileyici özelliğiyle özellikle sedef, egzama gibi cilt lezyonlarında ve kronik romatizmada tıbbi onaylıdır.</li>
                    <li>🌬️ <strong>Taraklı Mikro-Kliması:</strong> Tarihi dokuyla birleşen termal buhar kürü; astım, kronik bronşit ve alerjik rinit vakalarında doğal bir balgam sökücü ve nefes açıcı etki sağlar.</li>
                    <li>🛀 <strong>Hidroterapi Havuzları:</strong> Suyun 37-39°C ideal sıcaklığında yapılan eklem egzersizleri ile bel ve boyun fıtığı ağrılarında belirgin azalma.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Sakarya termalleri, Marmara Bölgesi'nin en çok tercih edilen aile odaklı şifa merkezidir. <strong>Dürüst Analiz:</strong> Tesisleşme oldukça yaygındır ve her bütçeye uygun konaklama imkanı sunar. Özellikle Kuzuluk bölgesi, termal suyun saf kalitesi bakımından referanstır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0264 274 72 90", 
        tr: {
            hospName: "Sakarya Huzurevi Yaşlı Bakım Merkezi & Sapanca Özel Geriatri Villaları",
            shortDesc: "👴 Sapanca Gölü'nün huzurunda, doğa içinde aktif yaşlanma; medikal takipli ve yüksek konforlu yaşlı yaşam alanları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Geriatrik Yönetim ve Konfor</h4>
                <ul>
                    <li>🏥 <strong>Geriatri Odaklı Takip:</strong> Yaşlılık hastalıkları (Diyabet, Hipertansiyon) için SEAH Geriatri poliklinikleri ile entegre periyodik tarama sistemleri.</li>
                    <li>🍃 <strong>Sapanca Mikrokliması:</strong> Göl ve orman havasının birleştiği düşük stresli ortam, yaşlılarda uyku düzenini ve mental sağlığı pozitif yönde etkiler.</li>
                    <li>🥗 <strong>Yöresel ve Organik Beslenme:</strong> Sakarya Ovası'nın taze ürünleriyle hazırlanan, bağışıklık güçlendirici ve kişiye özel diyet programları.</li>
                    <li>🧠 <strong>Aktif Zihin Programları:</strong> El sanatları, bahçe tarımı ve doğa yürüyüşleri ile Alzheimer ve demans riskini minimize eden sosyal takvim.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Sakarya, büyükşehirlere yakın ama doğanın içinde kalmak isteyen emekliler için idealdir. <strong>Güçlü Yönü:</strong> Özel bakım evlerinin "Resort" konforunda olması ve sağlık merkezlerine lojistik yakınlığıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0264 888 40 00",
        tr: {
            hospName: "Sakarya FTR Merkezi & Özel Robotik Rehabilitasyon Birimleri",
            shortDesc: "♿ Türkiye'nin sayılı FTR merkezlerinden biri; robotik yürüme sistemleri ve inme sonrası kapsamlı nöro-rehabilitasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve İleri Teknoloji Mobilizasyon</h4>
                <ul>
                    <li>♿ <strong>Robotik Yürüme (Lokomat):</strong> Omurilik yaralanmaları ve felç vakalarında hastayı yeniden mobilize eden son teknoloji robotik rehabilitasyon desteği.</li>
                    <li>⚙️ <strong>Nöromüsküler Stimülasyon:</strong> Kas erimelerini engellemek ve sinir iletimini hızlandırmak için uygulanan ileri elektroterapi protokolleri.</li>
                    <li>🦵 <strong>Ergoterapi ve İş-Uğraşı Terapisi:</strong> Engelli bireylerin günlük yaşam becerilerini geri kazanmasına yönelik fonksiyonel mutfak ve yaşam alanı simülasyonları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda Serebral Palsi ve gelişimsel bozukluklar için duyu bütünleme terapileri ve uzman fizyoterapist eşliğinde oyun terapisi.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Sakarya, rehabilitasyon alanında bölgenin "Teknoloji Merkezi"dir. <strong>Güçlü Yönü:</strong> Robotik cihaz envanteri ve uzman personel sayısı Marmara genelinde çok rekabetçidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0264 582 21 00",
        tr: {
            hospName: "Elite World Sapanca, Richmond Nua Wellness & NG Sapanca Wellness",
            shortDesc: "🧖‍♂️ Türkiye'nin en iyi Wellness destinasyonlarından biri; orman içinde lüks SPA ritüelleri ve bütünsel arınma seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Holistik Wellness ve Estetik Arınma</h4>
                <ul>
                    <li>🧼 <strong>Premium Hamam ve Isıl Alanlar:</strong> Kristal buhar odaları, aromatik saunalar ve geleneksel Türk hamamının lüks yorumu.</li>
                    <li>💆 <strong>Dünya Masaj Seçkisi:</strong> Bali, Ayurveda ve derin doku masajlarının uzman terapistler tarafından orman manzaralı odalarda uygulanması.</li>
                    <li>🧖‍♂️ <strong>Detoks ve Zayıflama Kürleri:</strong> Profesyonel diyetisyen desteğiyle sunulan sıvı detoksu, ozon sauna ve vücut şekillendirme programları.</li>
                    <li>😌 <strong>Anti-Aging Cilt Bakımı:</strong> Uluslararası ödüllü ürünlerle sunulan, cildi tazeleyen ve yaşlanma belirtilerini geciktiren medikal bakımlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Sapanca bölgesi, SPA ve Wellness konusunda Türkiye'nin "Şampiyonlar Ligi"dir. Hizmet kalitesi, atmosfer ve profesyonellik uluslararası düzeydedir. Fiyat segmenti yüksektir ancak sunulan deneyim kusursuzdur.</p>
            </div>`
        }
    }
},
  "SAMSUN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0362 311 15 00",
        tr: {
            hospName: "Samsun Şehir Hastanesi, OMÜ Tıp Fakültesi & VM Medical Park Samsun",
            shortDesc: "🏥 Karadeniz'in en büyük cerrahi ekosistemi; organ nakli merkezi, robotik cerrahi altyapısı ve ileri düzey travma yönetimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Derinlik ve İleri Cerrahi Kapasite</h4>
                <ul>
                    <li>🫀 <strong>Organ ve İlik Nakli:</strong> Karadeniz Bölgesi'nin referans merkezi; böbrek, karaciğer ve kemik iliği nakillerinde uluslararası başarı oranları.</li>
                    <li>☢️ <strong>Onkoloji ve Nükleer Tıp:</strong> CyberKnife ve TrueBeam teknolojileriyle radyoterapi, ileri düzey tümör cerrahisi ve kapsamlı kemoterapi üniteleri.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> Yenidoğan kalp cerrahisinden yetişkin Bypass ameliyatlarına kadar her yaş grubunda 7/24 aktif hibrit operasyon odaları.</li>
                    <li>⚕️ <strong>Robotik Cerrahi (Da Vinci):</strong> Üroloji ve genel cerrahi operasyonlarında minimal invaziv (küçük kesi) yöntemle hızlı iyileşme ve düşük enfeksiyon riski.</li>
                    <li>🧠 <strong>Nöroşirürji ve Gama Knife:</strong> Beyin tümörlerinde bıçaksız cerrahi (Gama Knife) uygulamaları ve derin beyin stimülasyonu (Parkinson cerrahisi).</li>
                    <li>🦷 <strong>OMÜ Diş Hekimliği Fakültesi:</strong> Çene-yüz cerrahisi, ileri düzey implantoloji ve dijital ortodonti alanında bölge lideri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Uluslararası Hasta Yönetimi</h4>
                <ul>
                    <li>🛂 <strong>Sağlık Turizmi Ofisi:</strong> Samsun-Çarşamba Havalimanı ile entegre, yabancı hastalar için karşılama, konaklama ve çok dilli medikal danışmanlık hizmetleri.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Samsun, Ankara'nın kuzeyindeki en güçlü sağlık kalesidir. <strong>Güçlü Yönü:</strong> Akademik kadronun çok köklü olması ve özel hastanelerin teknolojik rekabetidir. <strong>Eksik Yönü:</strong> Şehir genelindeki hasta yoğunluğu nedeniyle poliklinik bekleme süreleri uzayabilir; ancak cerrahi ve acil müdahalelerde sistem kusursuzdur.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0362 714 43 14", 
        tr: {
            hospName: "Havza Kaplıcaları (25 Mayıs & Şifa), Ladik Hamamayağı & Vezirköprü Termalleri",
            shortDesc: "🌡️ Atatürk'ün şifa bulduğu tarihi sular; yüksek radyoaktivite ve mineral dengesiyle romatizmanın doğal düşmanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Analiz ve Termal Güç</h4>
                <ul>
                    <li>🧪 <strong>Radyoaktif ve Bikarbonatlı Su:</strong> Havza suları, arsenik ve radyum içeriğiyle hücre yenilenmesini hızlandırır; kronik romatizma ve nevraljide klinik onaylıdır.</li>
                    <li>🛀 <strong>Ortopedik Rehabilitasyon Desteği:</strong> Termal havuz içi egzersizler ile kireçlenme, siyatik ve ameliyat sonrası eklem kısıtlılıklarında hızlı fonksiyonel kazanım.</li>
                    <li>🧼 <strong>Ladik Hamamayağı (İçme Kürü):</strong> Sindirim sistemi, mide asit dengesi ve metabolizma hızlandırma süreçlerinde içme kürü olarak tescillidir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Samsun termalleri, tarihi doku ile modern tıbbın birleştiği noktalardır. <strong>Dürüst Analiz:</strong> Havza bölgesi, kaplıca turizminde Türkiye'nin en köklü ve güvenilir merkezlerinden biridir. Fizik tedavi süreçlerini desteklemek için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0362 431 11 05", 
        tr: {
            hospName: "Samsun Huzurevi Yaşlı Bakım Merkezi & Atakum Özel Yaşam Evleri",
            shortDesc: "👴 Atakum sahilinin ferahlığında aktif yaşlanma; üniversite hastanesi gözetiminde medikal takipli premium bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Geriatri ve Sosyal Yaşam Yönetimi</h4>
                <ul>
                    <li>🏥 <strong>Geriatrik Tıp Entegrasyonu:</strong> OMÜ Tıp Fakültesi Geriatri Anabilim Dalı ile doğrudan koordineli kronik hastalık ve polifarmasi (çoklu ilaç) yönetimi.</li>
                    <li>🌊 <strong>Negatif İyon ve Sahil Yürüyüşleri:</strong> Atakum sahil şeridinin sunduğu deniz havası, yaşlılarda solunum kapasitesini artırır ve depresyon riskini azaltır.</li>
                    <li>🥗 <strong>Nitelikli Beslenme Programları:</strong> Diyetisyenler eşliğinde, Karadeniz'in taze ürünleriyle hazırlanan düşük glisemik indeksli menüler.</li>
                    <li>🧠 <strong>Bilişsel Egzersizler:</strong> Hafıza geliştirme teknikleri, el sanatları atölyeleri ve sosyal kulüplerle Alzheimer/Demans koruma protokolleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Samsun, yaşlılar için "Şehir İmkanları" ile "Huzur"un en dengeli olduğu illerden biridir. <strong>Güçlü Yönü:</strong> Her türlü sağlık krizinde üst düzey hastanelere 10-15 dakikalık erişim mesafesidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0362 311 15 00",
        tr: {
            hospName: "Samsun FTR Bölge Hastanesi & Romatem Robotik Rehabilitasyon Merkezi",
            shortDesc: "♿ Türkiye'nin rehabilitasyon öncüsü; Lokomat (yürüme robotu), Armeo (el robotu) ve su içi fizyoterapi üniteleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Teknoloji Odaklı Fizik Tedavi</h4>
                <ul>
                    <li>♿ <strong>Robotik Yürüme Teknolojileri:</strong> Felçli veya omurilik yaralanmalı hastalarda beyin plastisitesini uyaran ileri robotik sistemlerle yeniden yürüme eğitimi.</li>
                    <li>⚙️ <strong>Sanal Gerçeklik (VR) Destekli Terapi:</strong> Rehabilitasyon sürecini oyunlaştırarak hasta motivasyonunu artıran nöro-rehabilitasyon seansları.</li>
                    <li>🦵 <strong>Hidro-Rehabilitasyon:</strong> Isıtılmış havuzlarda suyun kaldırma kuvvetiyle eklemlere yük bindirmeden yapılan mobilizasyon egzersizleri.</li>
                    <li>🧒 <strong>Pediatrik Ergoterapi:</strong> Çocuklarda ince motor beceri gelişimi ve duyu bütünleme terapileri için Karadeniz'in en donanımlı salonları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Samsun, rehabilitasyon alanında Türkiye'nin ilk 3 şehri arasındadır. <strong>Güçlü Yönü:</strong> Özel sektördeki robotik cihaz envanteri dünya standartlarındadır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0362 311 00 00",
        tr: {
            hospName: "Sheraton Grand, Anemon & Serra Otel Wellness Birimleri",
            shortDesc: "🧖‍♂️ Deniz manzaralı holistik arınma; modern SPA teknolojileri ile Karadeniz misafirperverliğinin buluşması.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Vücut Yenileme</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel ve Modern Hamam:</strong> Mermer sıcaklığı ile cildi arındıran kese-köpük ritüelleri ve lüks buhar odaları.</li>
                    <li>💆 <strong>Dünya Masajları:</strong> Uzakdoğu masajlarından medikal masajlara kadar geniş yelpazede profesyonel terapist desteği.</li>
                    <li>🧖‍♂️ <strong>Anti-Aging ve Ozon Sauna:</strong> Hücre yenileyici, yorgunluk giderici ve bağışıklık güçlendirici modern wellness kürleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Samsun'da SPA hizmeti, Atakum ve Şehir Merkezi sahil hattındaki lüks otellerde yoğunlaşmıştır. Hizmet kalitesi profesyonel, temiz ve standartları yüksektir.</p>
            </div>`
        }
    }
},
  "SIIRT": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0484 224 82 22",
        tr: {
            hospName: "Siirt Eğitim ve Araştırma Hastanesi & Siirt Üniversitesi Tıp Fakültesi Birimleri",
            shortDesc: "🏥 Güneydoğu'nun yükselen cerrahi merkezi; modern dijital ameliyathaneler, ileri düzey üroloji laboratuvarı ve akademik uzmanlık birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Gelişim ve Operasyonel Yetkinlik</h4>
                <ul>
                    <li>💧 <strong>İleri Üroloji ve Taş Cerrahisi:</strong> Bölgedeki su değerlerine bağlı yüksek taş vakaları nedeniyle ESWL (taş kırma) ve endoskopik lazer cerrahisinde yüksek uzmanlık ve vaka tecrübesi.</li>
                    <li>⚕️ <strong>Genel Cerrahi ve Laparoskopi:</strong> Safra kesesi, obezite cerrahisi ve fıtık operasyonlarında kapalı (minimal invaziv) tekniklerle hızlı iyileşme sağlayan cerrahi protokoller.</li>
                    <li>🦴 <strong>Ortopedik Travma Yönetimi:</strong> Engebeli arazi ve saha şartlarına bağlı gelişen kırık, çıkık ve bağ yaralanmalarında acil cerrahi müdahale ve stabilizasyon yetkinliği.</li>
                    <li>🩸 <strong>Kadın Doğum ve Yenidoğan:</strong> Yenilenen modern doğumhaneler ve bölgeye hizmet veren kapsamlı Yenidoğan Yoğun Bakım Ünitesi (NICU).</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin ve Sinir):</strong> Bel ve boyun fıtıklarında mikrocerrahi uygulamaları; kafa travmaları sonrası acil dekompresyon müdahaleleri.</li>
                    <li>🦷 <strong>Siirt Ağız ve Diş Sağlığı Merkezi:</strong> Protez teknolojileri, gömülü diş cerrahisi ve temel implant uygulamaları ile geniş kitleye hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Erişilebilirliği</h4>
                <ul>
                    <li>🛂 <strong>Bölgesel Köprü:</strong> Siirt, çevre ilçeler ve köyler için kritik bir "İlk Müdahale ve Cerrahi Sevk" merkezi rolü üstlenmektedir.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Siirt, tıp fakültesinin kurulmasıyla birlikte "Akademik Hastane" kimliğine bürünmüştür. <strong>Güçlü Yönü:</strong> Üroloji ve genel cerrahideki hekim kadrosu çok dinamiktir. <strong>Eksik Yönü:</strong> İleri düzey onkolojik radyoterapi veya kompleks çocuk kardiyocerrahisi gibi vakalar için genellikle Diyarbakır veya Batman koordinasyonu sağlanmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0484 223 23 23", 
        tr: {
            hospName: "Siirt Sağlarca (Billoris) Kaplıcası & Şifalı Mineralli Sular",
            shortDesc: "🌡️ Botan Çayı kıyısında kükürtlü şifa mucizesi; deri hastalıkları ve romatizma için doğal bir antiseptik kaynak.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Kükürtlü Su Analizi ve Tıbbi Etkiler</h4>
                <ul>
                    <li>🧪 <strong>Yüksek Kükürt ve Hidrojen Sülfür:</strong> Billoris kaplıcası, yüksek kükürt oranıyla sedef, egzama, akne ve kronik mantar enfeksiyonlarında doğal bir iyileştirici etkiye sahiptir.</li>
                    <li>🛀 <strong>Romatizmal Rehabilitasyon:</strong> Suyun 33-35°C doğal sıcaklığı; kireçlenme, siyatik ve kas ağrılarında inflamasyonu azaltıcı ve hareket kabiliyetini artırıcı rol oynar.</li>
                    <li>🧼 <strong>Dermatolojik Detoks:</strong> Suyun mineralli yapısının gözenekleri temizleme ve deri altı dolaşımını hızlandırma özelliği.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Siirt termalleri, Botan Vadisi'nin eşsiz doğasıyla iç içedir. <strong>Dürüst Analiz:</strong> Tesis imkanları butik ve yereldir; ancak suyun mineral kalitesi, özellikle cilt hastalıkları tedavisi arayanlar için Türkiye'nin en değerli kaynaklarından biridir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0484 223 35 15", 
        tr: {
            hospName: "Siirt Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Manevi değerlerle harmanlanmış, aile sıcaklığında bakım; tıp fakültesi destekli periyodik medikal takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Bağlar ve Geriatrik Bakım</h4>
                <ul>
                    <li>🏥 <strong>Düzenli Sağlık Taramaları:</strong> Eğitim ve Araştırma Hastanesi uzmanları tarafından yerinde yürütülen diyabet, tansiyon ve göz sağlığı kontrolleri.</li>
                    <li>🥗 <strong>Doğal Mezopotamya Diyeti:</strong> Siirt fıstığı, Pervari balı ve organik tarım ürünleriyle hazırlanan, yaşlıların bağışıklık sistemini destekleyen menüler.</li>
                    <li>🧑‍⚕️ <strong>Mental Sağlık ve Maneviyat:</strong> Güçlü toplumsal bağlar ve geleneksel etkinliklerle desteklenen, yalnızlık karşıtı sosyalizasyon programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> El sanatları, bahçe uğraşları ve yerel kültür sohbetleri ile zihinsel zindeliğin korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Siirt, yaşlıya saygının en yüksek olduğu illerimizden biridir. <strong>Güçlü Yönü:</strong> Bakım personeli ile sakinler arasındaki duygusal bağ ve hastaneye erişim kolaylığıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0484 224 82 22",
        tr: {
            hospName: "Siirt FTR Ünitesi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik ameliyat sonrası hızlı mobilizasyon; çocuk gelişiminde profesyonel özel eğitim ve fizyoterapi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Rehabilitasyon Uygulamaları</h4>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç ve inme sonrası motor becerileri geri kazandırmaya yönelik manuel terapi ve denge egzersizleri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Tens:</strong> Kas güçlendirme ve ağrı yönetiminde kullanılan modern fizik tedavi cihazları.</li>
                    <li>🦵 <strong>Kişiye Özel Egzersiz Programları:</strong> Eklem kısıtlılıklarını gidermeye yönelik uzman fizyoterapist eşliğinde yürütülen seanslar.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel destek ve duyu bütünleme çalışmaları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Siirt'te rehabilitasyon hizmetleri bireysel ilgi odağında yürütülür. <strong>Güçlü Yönü:</strong> Hekim ve fizyoterapist koordinasyonu samimi ve hızlıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0484 224 10 10",
        tr: {
            hospName: "Barden Hotel, Siirt Şehir Otelleri Wellness & Geleneksel Hamamlar",
            shortDesc: "🧖‍♂️ Mezopotamya güneşinde bir mola; geleneksel Türk hamamı ritüelleri ve dinlendirici masajlar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Vücut Bakımı</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Hamam Kültürü:</strong> Hijyenik şartlarda sunulan kese-köpük ritüeli ile cildi ölü hücrelerden arındırma.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Günün yorgunluğunu atan klasik ve aromatik yağlı masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odası:</strong> Kasları gevşeten ve toksin atımını sağlayan ısıl alanlar.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Siirt'te SPA hizmeti şehirdeki lüks segment oteller bünyesinde 'Butik ve Temiz' bir hizmet olarak sunulmaktadır. Geleneksel hamam kültürü modern konforla birleştirilmiştir.</p>
            </div>`
        }
    }
},
    "SINOP": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0368 271 44 00",
        tr: {
            hospName: "Sinop Atatürk Devlet Hastanesi & Sinop Üniversitesi Sağlık Birimleri",
            shortDesc: "🏥 Türkiye'nin en kuzeyinde modern cerrahi üs; deniz manzaralı hasta odaları, ileri düzey yoğun bakım ve dijital ameliyathane altyapısı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Yetkinlik ve Medikal Altyapı</h4>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve apendisit operasyonlarında kapalı yöntemle düşük enfeksiyon riski ve hızlı taburcu odaklı süreçler.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Yaşlı nüfus oranının yüksekliği nedeniyle kalça-diz protezleri ve dejeneratif eklem hastalıkları cerrahisinde yoğun tecrübe.</li>
                    <li>🫀 <strong>Kardiyoloji ve Diyagnostik:</strong> Kalp ve damar hastalıklarında erken teşhis, ekokardiyografi ve stent uygulamalarıyla desteklenen stabilizasyon birimi.</li>
                    <li>🧠 <strong>Nörolojik Birim:</strong> İnme ve nörolojik krizlerde hızlı müdahale, beyin tomografisi ve MR destekli akut yönetim protokolleri.</li>
                    <li>🩸 <strong>Üroloji ve Taş Cerrahisi:</strong> Endoskopik yöntemlerle böbrek taşı müdahaleleri ve prostat cerrahisinde modern klinik uygulamalar.</li>
                    <li>🦷 <strong>Sinir Ağız ve Diş Sağlığı Merkezi:</strong> Modern ünitelerde protetik diş tedavisi ve temel cerrahi çekim işlemlerinde yüksek hasta memnuniyeti.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Psikolojik İyileşme Faktörü</h4>
                <ul>
                    <li>🌊 <strong>Deniz Manzaralı Terapi:</strong> Hastanenin konumlanması sayesinde hasta odalarının sunduğu manzara, post-operatif (ameliyat sonrası) stres düzeyini düşüren doğal bir etkendir.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Sinop, fiziksel altyapısını tamamen yenilemiş bir şehirdir. <strong>Güçlü Yönü:</strong> Hastane binaları çok modern ve temizdir; personel-hasta iletişimi şehrin kültürü gereği çok pozitiftir. <strong>Eksik Yönü:</strong> Çok ileri düzey onkolojik cerrahi ve açık kalp ameliyatları için Samsun bölge merkezleriyle koordinasyon sürdürülmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0368 271 44 00", 
        tr: {
            hospName: "Sinop Mineralli Su Kaynakları & Doğal Talassoterapi (Deniz Şifası)",
            shortDesc: "🌡️ Karadeniz'in en temiz kıyılarında deniz suyu ve iyot terapisi; solunum yolları ve deri sağlığı için doğal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Doğal İçerik ve Klimatolojik Etki</h4>
                <ul>
                    <li>🌊 <strong>Talassoterapi Potansiyeli:</strong> Türkiye'nin kirlilik oranı en düşük deniz sularından biri; eklem ağrıları ve deri lezyonları için doğal mineral desteği.</li>
                    <li>🌬️ <strong>İyot Zenginliği:</strong> Kuzey rüzgarlarının taşıdığı yoğun iyot ve oksijen; astım, bronşit ve kronik yorgunluk sendromu üzerinde iyileştirici etkiye sahiptir.</li>
                    <li>🧼 <strong>Doğal Mineralli Kaynaklar:</strong> Bölgedeki yerel kaynakların mide asit dengesi üzerindeki hafifleyici etkileri üzerine halk hekimliği tecrübesi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Sinop'ta klasik termal otelcilikten ziyade "İklim ve Deniz Şifası" ön plandadır. <strong>Dürüst Analiz:</strong> Büyük kaplıca tesisleri yoktur; ancak havası ve suyu başlı başına bir rehabilitasyon aracıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0368 261 17 61", 
        tr: {
            hospName: "Sinop Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Türkiye'nin en mutlu şehrinde, deniz havası eşliğinde huzurlu ve güvenli yaşlı yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Mutluluk Odaklı Geriatrik Bakım</h4>
                <ul>
                    <li>🏥 <strong>Geriatrik Sağlık Takibi:</strong> Şehirdeki yüksek yaşlı nüfusu nedeniyle uzmanlaşmış sağlık ekipleriyle tansiyon, şeker ve kalp sağlığı yönetimi.</li>
                    <li>🌊 <strong>Psikososyal Refah:</strong> Türkiye'nin en güvenli ve huzurlu şehri seçilmesi, yaşlılarda anksiyete ve yalnızlık hissini minimize eder.</li>
                    <li>🥗 <strong>Doğal Karadeniz Beslenmesi:</strong> Taze deniz ürünleri ve meşhur Sinop sebzeleriyle hazırlanan, omega-3 ve antioksidan zengini diyetler.</li>
                    <li>🧠 <strong>Aktif Sosyal Yaşam:</strong> Deniz kenarı yürüyüş rotaları, balıkçılık aktiviteleri ve el sanatları ile bilişsel fonksiyonların korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Sinop, yaşlılık dönemi için Türkiye'nin en çok tercih edilen "Sakin Şehir" (Cittaslow) adaylarından biridir. <strong>Güçlü Yönü:</strong> Sosyal barış, huzur ve düşük stres seviyesidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0368 271 44 00",
        tr: {
            hospName: "Sinop FTR Ünitesi & Özel Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda bireysel ilgi; fizik tedavi ve deniz havası odaklı iyileşme.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Mobilizasyon Çözümleri</h4>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme sonrası motor beceri gelişimi ve denge koordinasyon seansları.</li>
                    <li>⚙️ <strong>Ağrı Yönetimi:</strong> Elektroterapi, ultrason ve tens cihazlarıyla kas spazmları ve kireçlenme ağrıları üzerinde etkili çözümler.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi uygulamaları.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel destek ve gelişim takibi.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Sinop'ta rehabilitasyon hizmetleri "Butik ve Özenli" bir yapıdadır. <strong>Güçlü Yönü:</strong> Fizyoterapistlerin hastaya ayırdığı sürenin uzunluğu ve motivasyon başarısıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0368 260 00 00",
        tr: {
            hospName: "Sinop Vira Otel, Antik Otel Wellness & Şehir Hamamları",
            shortDesc: "🧖‍♂️ Deniz kenarında ruhsal arınma; geleneksel Türk hamamı ve dinlendirici masaj seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Vücut Bakımı</h4>
                <ul>
                    <li>🧼 <strong>Geleneksel Hamam:</strong> Temiz ve ferah ortamlarda sunulan klasik kese-köpük ritüelleri.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Deniz sesinin huzuruyla birleşen profesyonel masaj terapileri.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Detoks etkili ısıl alanlar ile kas gevşetme ve ruhsal rahatlama.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Sinop'ta SPA hizmeti, butik oteller bünyesinde 'Samimi ve Kaliteli' bir hizmet olarak sunulmaktadır. Doğa ve denizle iç içe olması en büyük avantajıdır.</p>
            </div>`
        }
    }
},
  "SIVAS": {
        surgery: {
            img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", // Sivas Cumhuriyet Üniversitesi Hastanesi ve Modern Cerrahi Blokları
            phone: "0346 258 00 00",
            tr: {
                hospName: "Sivas Cumhuriyet Üniversitesi Tıp Fakültesi Hastanesi",
                shortDesc: "🏥 İç Anadolu'nun en köklü akademik cerrahi merkezlerinden biri; bölge illerinin ana sevk ve referans noktasıdır.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik ve Operasyonel Güç</h4>
                    <p>Sivas, Tıp Fakültesi sayesinde cerrahi disiplinde "öğreten" bir şehirdir. Özellikle karmaşık vakalarda çevre iller için bir kurtarıcı rolü üstlenir.</p>
                    
                    <h4>🩺 Cerrahi Yetkinlik ve Branş Detayları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Koroner bypass, kalp kapağı değişimleri ve vasküler (damar) cerrahide yüksek operasyon hacmi.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Mikrocerrahi yöntemiyle bel-boyun fıtıkları, beyin kanamaları ve nöro-onkolojik tümör operasyonları.</li>
                        <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Sivas’ın geniş coğrafyası nedeniyle travma vakalarında yüksek deneyim; ek olarak protez ve artroskopi cerrahisi.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) yöntemle obezite cerrahisi, safra kesesi, fıtık ve kolon kanseri ameliyatları.</li>
                        <li>👩‍⚕️ <strong>Kadın Hastalıkları ve Doğum:</strong> Jinekolojik onkoloji ve riskli gebeliklerin cerrahi yönetimi.</li>
                        <li>👁️ <strong>Göz Cerrahisi:</strong> Katarakt (fako), glokom ve kornea cerrahisinde ileri teknolojik cihaz kullanımı.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz ve Bölgesel Konum</h4>
                    <p>Sivas, cerrahi operasyonlarda İç Anadolu'nun en güvenilir ve köklü şehirlerinden biridir. Ankara'ya gitmeye gerek kalmadan pek çok karmaşık ameliyat burada başarıyla çözülür. Ancak pediatrik kardiyoloji (çocuk kalp cerrahisi) gibi çok spesifik yan dallarda hala Ankara ile koordineli çalışılmaktadır.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Kangal Balıklı Kaplıca'nın Dünyaca Ünlü Şifalı Suları
            phone: "0346 469 11 51",
            tr: {
                hospName: "Kangal Balıklı Kaplıcası ve Sıcak Çermik Tesisleri",
                shortDesc: "🌡️ 'Doktor Balıklar' (Cyprinion Macrostomus) ile dünya çapında üne sahip, sedef hastalığı tedavisinde tescilli merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">🧬 Dünyada Tek: Kangal Balıklı Kaplıca</h4>
                    <p>37°C sabit sıcaklıktaki suyun içinde yaşayan küçük balıklar, cilt üzerindeki ölü derileri temizleyerek sedef, egzama ve mantar gibi hastalıklarda mucizevi iyileşme sağlar.</p>
                    
                    <h4>♨️ Sıcak Çermik ve Şifa Analizi</h4>
                    <ul>
                        <li>🧪 <strong>Mineral Yapısı:</strong> Yüksek kükürt, florür ve kalsiyum içeriği ile "altın su" olarak adlandırılır.</li>
                        <li>🦴 <strong>Romatizmal Tedavi:</strong> Kronik bel ağrıları, kireçlenme ve eklem iltihapları (ankilozan spondilit vb.) için doğal bir kürdür.</li>
                        <li>🫁 <strong>Solunum ve Metabolizma:</strong> İçme kürleri olarak kullanıldığında sindirim ve idrar yolları üzerinde düzenleyici etki.</li>
                        <li>💪 <strong>Rehabilitasyon:</strong> Termal suyun kaldırma kuvveti ile felçli hastaların su içi egzersizlerinde destekleyici rol.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Durum</h4>
                    <p>Sivas, termal turizmde Türkiye'nin en özgün şehridir. Kangal Balıklı Kaplıca, sadece turistik değil, medikal anlamda uluslararası bir "sağlık destinasyonu"dur.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Sivas'ın Geniş ve Temiz Havalı Huzurevi Yerleşkesi
            phone: "0346 226 12 70", // İzzet Öksüzkaya Huzurevi
            tr: {
                hospName: "Sivas İzzet Öksüzkaya Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Yüksek rakımlı temiz havası ve geniş sosyal donatılarıyla yaşlı bireyler için sakin ve huzurlu bir yaşam alanı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Bakım Standartları</h4>
                    <p>Sivas, sakin şehir yapısı ve düşük stres seviyesiyle yaşlı bakımı için doğal bir rehabilitasyon merkezidir.</p>
                    <ul>
                        <li>🧠 <strong>Alzheimer ve Demans Bakımı:</strong> Hastaların bilişsel seviyelerine uygun özel güvenlikli odalar ve zihinsel aktivite programları.</li>
                        <li>💊 <strong>İlaç ve Tansiyon Takibi:</strong> 24 saat sağlık personeli gözetiminde kronik hastalık yönetimi.</li>
                        <li>🧑‍⚕️ <strong>Psikososyal Destek:</strong> Uzman psikologlar eşliğinde grup terapileri ve moral etkinlikleri.</li>
                        <li>🎯 <strong>Hobi Atölyeleri:</strong> Bahçecilik, el sanatları ve sosyal etkileşim alanları.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Sivas'ın hava kalitesi yaşlılar için çok yararlıdır ancak sert kış mevsimi, kemik erimesi veya ileri derece romatizması olan bazı yaşlılar için kapalı alanlarda kalmayı zorunlu kılabilir. Tesis içi ısıtma sistemleri bu durumu telafi edecek düzeydedir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Sivas Numune Hastanesi FTR Ünitesi
            phone: "0346 215 08 33",
            tr: {
                hospName: "Sivas Numune Hastanesi Çok Amaçlı Geriatri ve FTR Merkezi",
                shortDesc: "♿ Nörolojik ve ortopedik engelli bireyler için robotik yürüme sistemleri ve uzman fizik tedavi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fiziksel ve Fonksiyonel Rehabilitasyon</h4>
                    <ul>
                        <li>♿ <strong>İnme ve Felç Rehabilitasyonu:</strong> Beyin hasarı veya felç sonrası kaybedilen hareket kabiliyetinin geri kazanılması süreci.</li>
                        <li>⚙️ <strong>Teknolojik Altyapı:</strong> Robotik rehabilitasyon cihazları, denge platformları ve elektroterapi üniteleri.</li>
                        <li>🦴 <strong>Post-Ameliyat Desteği:</strong> Kalça ve diz protezi operasyonlarından sonra hastanın hızlıca ayağa kalkması için yoğun program.</li>
                        <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral palsi gibi çocukluk çağı engellilik durumlarında aile eğitimli özel terapi.</li>
                    </ul>

                    <h4>🌟 Bölgesel Farklılık</h4>
                    <p>Sivas, engelli bakımında kamu hastanelerinin gücüyle öne çıkar. Cihaz kapasitesi ve fizyoterapist sayısı bakımından İç Anadolu'nun en donanımlı merkezlerinden biridir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Sivas Termal Otelleri Spa & Hammam Alanı
            phone: "0346 258 11 00", // Bilici Termal Hotel & Spa
            tr: {
                hospName: "Sivas Termal Wellness & Spa Merkezleri",
                shortDesc: "🧖‍♂️ Tarihi hamam kültürü ile modern wellness terapilerinin birleştiği yenilenme noktası.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Sağlık ve Zindelik Ritüelleri</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Hamam ve Kese-Köpük:</strong> Sivas’ın köklü hamam kültürünün modern tesislerde profesyonelce sunumu.</li>
                        <li>💆 <strong>Medikal ve Aromatik Masaj:</strong> Termal su banyosu sonrası kas gevşetici ve kan dolaşımını hızlandırıcı terapiler.</li>
                        <li>😌 <strong>Tuz Odası ve Detoks:</strong> Solunum yollarını temizleyen tuz terapileri ve buhar odası hizmetleri.</li>
                    </ul>

                    <h4>➡️ Sektörel Analiz</h4>
                    <p>Sivas’ta SPA hizmetleri "Sağlık Termali" ile çok sıkı bağlara sahiptir. Buraya gelen misafirler sadece dinlenmek için değil, vücutlarını termal minerallerle yenilemek için SPA'ları tercih ederler.</p>
                </div>`
            }
        }
    },
  "TEKIRDAG": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0282 204 09 00",
        tr: {
            hospName: "Tekirdağ Şehir Hastanesi, Namık Kemal Üniversitesi Tıp Fakültesi & Özel Star Medika",
            shortDesc: "🏥 Trakya'nın en büyük akıllı hastane kompleksi; sismik izolatörlü bloklar, robotik cerrahi ve ileri düzey kalp-damar merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Modern Cerrahi Kapasite ve Akademik Güç</h4>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> 128 kesitli BT ve hibrit ameliyathanelerle anjiyo, stent ve bypass operasyonlarında bölgenin en hızlı müdahale merkezi.</li>
                    <li>☢️ <strong>İleri Onkoloji Ünitesi:</strong> Lineer hızlandırıcı cihazlar ve kapsamlı kemoterapi birimi ile kanser cerrahisinde multidisipliner tedavi protokolleri.</li>
                    <li>🦴 <strong>Ortopedik Robotik Yaklaşım:</strong> Robotik diz ve kalça protezi ameliyatları, spor cerrahisi (artroskopi) ve kompleks travma yönetimi.</li>
                    <li>🧠 <strong>Nöroşirürji ve Mikronörocerrahi:</strong> Beyin tümörü ve spinal cerrahide yüksek hassasiyetli görüntüleme eşliğinde operasyonel süreçler.</li>
                    <li>🩸 <strong>Üroloji ve Taş Kırma:</strong> ESWL teknolojisi ve lazerli kapalı taş operasyonları ile ürolojik cerrahide yüksek hasta konforu.</li>
                    <li>🦷 <strong>NKÜ Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, dijital ortodonti ve estetik implantoloji alanında akademik düzeyde hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Konum ve Lojistik</h4>
                <ul>
                    <li>🛂 <strong>Avrupa Kapısı Sağlık Turizmi:</strong> Yunanistan ve Bulgaristan üzerinden gelen hastalar için 'Sınır Ötesi Sağlık Merkezi' vizyonu ve VIP tercümanlık hizmeti.</li>
                </ul>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p>Tekirdağ, Şehir Hastanesi ile birlikte cerrahi altyapısını dünya standartlarına taşımıştır. <strong>Güçlü Yönü:</strong> Hastane binasının deprem izolatörlü ve akıllı bina teknolojisiyle donatılmış olması, kesintisiz cerrahi güvenlik sağlar. <strong>Eksik Yönü:</strong> Nüfus artış hızı çok yüksek olduğu için poliklinik yoğunluğu fazladır ancak cerrahi operasyon bekleme süreleri minimize edilmiştir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=400",
        phone: "0282 261 20 42", 
        tr: {
            hospName: "Tekirdağ Kumbağ Mineralli Suları & Marmara Ereğlisi Şifalı Sahilleri",
            shortDesc: "🌡️ Trakya'nın doğal mineralli suları; yüksek sodyum ve klorür yapısıyla mide ve deri dostu doğal kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Mineral Analizi ve Doğal Şifa</h4>
                <ul>
                    <li>🧪 <strong>Sodyum Klorürlü Sular:</strong> Kumbağ ve çevresindeki mineralli kaynaklar, mide asiditesini dengeleyici ve sindirimi kolaylaştırıcı içme kürleri sunar.</li>
                    <li>🌊 <strong>Talassoterapi Etkisi:</strong> Marmara Ereğlisi ve Şarköy sahil bandındaki deniz suyu mineral yoğunluğu, kronik eklem ağrıları ve deri döküntüleri üzerinde doğal terapi etkisi sağlar.</li>
                    <li>🧖‍♂️ <strong>İyot Zenginliği:</strong> Kuzey ve Marmara rüzgarlarının birleşimiyle oluşan hava kalitesinin solunum yolları üzerindeki ferahlatıcı etkisi.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p>Tekirdağ'da termal turizmden ziyade "Deniz ve Mineralli Su" odaklı doğal şifa ön plandadır. <strong>Dürüst Analiz:</strong> Büyük termal tesis beklentisinden ziyade, doğal kaynakların şifası ve deniz havası rehabilitasyon amacıyla kullanılır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0282 263 56 47", 
        tr: {
            hospName: "Tekirdağ Zübeyde Hanım Huzurevi & Marmara Ereğlisi Özel Bakım Merkezleri",
            shortDesc: "👴 Bağ yollarının ve denizin huzurunda modern yaşlılık; Şehir Hastanesi güvencesinde 7/24 medikal takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Profesyonel Bakım ve Yaşam Kalitesi</h4>
                <ul>
                    <li>🏥 <strong>Hızlı Medikal Erişim:</strong> Şehir Hastanesi'nin "Yaşlı Dostu" politikasıyla entegre periyodik sağlık taramaları ve kronik hastalık yönetimi.</li>
                    <li>🍃 <strong>Doğa ve İklim Avantajı:</strong> İstanbul'un gürültüsünden uzak, deniz ve orman havasının birleştiği düşük nemli ortam ile solunum konforu.</li>
                    <li>🥗 <strong>Trakya Mutfağı (Diyetisyen Kontrollü):</strong> Bölgesel doğal ürünler ve zeytinyağlılar ile hazırlanan, yaşlı metabolizmasına uygun beslenme programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma:</strong> Sosyal alanlar, el sanatları ve hobi bahçeleri ile Alzheimer ve Demans riskini azaltan aktif yaşlanma takvimi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Tekirdağ, modern şehir imkanlarıyla huzurlu yaşamı en iyi dengeleyen Trakya ilidir. <strong>Güçlü Yönü:</strong> Sağlık altyapısının çok yeni olması ve ulaşım kolaylığıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0282 204 09 00",
        tr: {
            hospName: "Tekirdağ Şehir Hastanesi FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda teknolojik devrim; robotik yürüme ve ergoterapi uygulamaları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fizik Tedavi ve Robotik Mobilizasyon</h4>
                <ul>
                    <li>♿ <strong>İleri Robotik Rehabilitasyon:</strong> İnme ve omurilik hasarlı hastalar için beyin-kas koordinasyonunu uyaran robotik yürüme sistemleri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Uzay Terapi:</strong> Kas güçlendirme ve ağrı yönetiminde kullanılan en yeni nesil cihaz envanteri.</li>
                    <li>🦵 <strong>Kişiye Özel Egzersiz Protokolleri:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve hidroterapi seçenekleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için profesyonel fizyoterapistler eşliğinde duyu bütünleme çalışmaları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Tekirdağ, rehabilitasyon teknolojisinde Trakya'nın en donanımlı ilidir. <strong>Güçlü Yönü:</strong> Şehir Hastanesi bünyesindeki fizik tedavi alanlarının büyüklüğü ve cihaz çeşitliliğidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0282 229 20 00",
        tr: {
            hospName: "Ramada by Wyndham, Des'Otel & Tekirdağ Yat Limanı Wellness",
            shortDesc: "🧖‍♂️ Marmara Denizi manzaralı modern arınma; geleneksel hamamın konforla buluştuğu SPA deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Ruhsal Arınma</h4>
                <ul>
                    <li>🧼 <strong>Türk Hamamı ve Kese:</strong> Hijyenik ve ferah ortamlarda sunulan geleneksel vücut arındırma ritüelleri.</li>
                    <li>💆 <strong>Aromaterapi ve Masajlar:</strong> Günün stresini atan, aromatik yağlarla sunulan profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Detoks etkili ısıl alanlar ile kas gevşetme ve rahatlama.</li>
                    <li>😌 <strong>Cilt Bakımı:</strong> Modern kozmetik ürünlerle sunulan yüz ve vücut yenileme terapileri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Tekirdağ'da SPA hizmeti, şehrin merkezindeki ve sahil bandındaki lüks iş otelleri bünyesinde 'Kaliteli ve Standart' bir hizmet olarak sunulmaktadır.</p>
            </div>`
        }
    }
},
 "TOKAT": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0356 212 29 00",
        tr: {
            hospName: "Tokat Gaziosmanpaşa Üniversitesi (TOGÜ) Tıp Fakültesi & Tokat Devlet Hastanesi",
            shortDesc: "🏥 Selçuklu'nun şifa geleneğinden modern tıp akademisine; Karadeniz ve İç Anadolu'nun cerrahi kesişim noktası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Derinlik ve Operasyonel Genişlik</h4>
                <p>Tokat, özellikle Gaziosmanpaşa Üniversitesi'nin tıp alanındaki yatırımlarıyla bölge illeri (Amasya, Çorum, Yozgat) için bir 'üst cerrahi merkez' rolü üstlenir. Hastanenin teknik kapasitesi, en komplike vakaları bile çevre illere sevk etmeden çözecek düzeydedir.</p>
                <ul>
                    <li>🫀 <strong>İleri Kardiyoloji ve Girişimsel Birim:</strong> 7/24 aktif anjiyo laboratuvarları; kompleks koroner damar tıkanıklıkları, periferik damar müdahaleleri ve elektrofizyolojik çalışmalarla ritim bozukluğu tedavileri.</li>
                    <li>☢️ <strong>Onkolojik Cerrahi ve Multidisipliner Konsey:</strong> Kanser cerrahisinde sadece tümörü çıkarmakla kalmayıp, nükleer tıp ve radyasyon onkolojisiyle entegre, kişiye özel 'tümör konseyleri' tarafından yönetilen tedavi protokolleri.</li>
                    <li>⚕️ <strong>Minimal İnvaziv (Kapalı) Cerrahi:</strong> Laparoskopik yöntemlerle yapılan obezite cerrahisi (tüp mide), safra kesesi, fıtık ve ileri düzey kapalı rahim operasyonlarında Trakya ve Karadeniz hattının en tecrübeli ekipleri.</li>
                    <li>🦴 <strong>Ortopedik Rekonstrüksiyon:</strong> Artroskopik cerrahi ile omuz, diz ve ayak bileği bağ tamirleri; kalça ve diz kireçlenmelerinde navigasyon destekli protez uygulamaları ve travmatik kırık yönetimi.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin ve Sinir):</strong> Beyin kanamaları, kafa travmaları ve mikro-diskektomi yöntemiyle yapılan bel/boyun fıtığı ameliyatlarında minimal doku hasarı odaklı yaklaşımlar.</li>
                    <li>👶 <strong>Pediatrik Yan Branşlar:</strong> Çocuk cerrahisi ve çocuk hastalıkları uzmanlıklarında bölgenin en geniş yan dal kadrosuna sahip olup, yenidoğan yoğun bakım desteğiyle kritik süreçlerin yönetimi.</li>
                    <li>🦷 <strong>TOGÜ Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, gömülü diş operasyonları, dijital ölçü sistemleri ile desteklenen porselen ve zirkonyum kaplama süreçleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Bölgesel Etki</h4>
                <p>Tokat, yeni açılan havalimanı ve güçlenen karayolu bağlantılarıyla "Sağlık Turizmi" potansiyelini artırmaktadır. Özellikle çevre illerden gelen günlük 5000+ poliklinik yükünü yönetebilen devasa bir randevu ve triyaj sistemine sahiptir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Akademik kadronun yerleşik olması ve üniversite ile devlet hastanesinin koordineli çalışmasıdır. <strong>Eksik Yönü:</strong> Şehirdeki artan yaşlı nüfusu nedeniyle palyatif bakım ve geriatri servislerinde dönemsel yoğunluk yaşanmaktadır; ancak cerrahi müdahale hızı Karadeniz ortalamasının üzerindedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=400",
        phone: "0356 333 11 00", 
        tr: {
            hospName: "Reşadiye Kaplıcaları, Sulusaray Termalleri & Niksar Ayvaz Suyu",
            shortDesc: "🌡️ Selçuklu mimarisinde Roma mineralleri; 48°C - 52°C sıcaklıktaki sodyum bikarbonatlı sularla geleneksel kür merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Analizi ve Tıbbi Endikasyonlar</h4>
                <p>Tokat'ın termal suları, binlerce yıldır Roma ve Selçuklu dönemlerinden bu yana kesintisiz kullanılan, mineral yoğunluğu tescilli kaynaklardır.</p>
                <ul>
                    <li>🧪 <strong>Sodyum, Kalsiyum ve Bikarbonat Dengesi:</strong> Reşadiye ve Sulusaray suları, vücuttaki kronik inflamasyonu (iltihabı) baskılayıcı ve hücre içi metabolizmayı hızlandırıcı mineral yapısına sahiptir.</li>
                    <li>🦴 <strong>Romatizmal ve Artritik Hastalıklar:</strong> Suyun doğal sıcaklığı; osteoartrit (kireçlenme), romatoid artrit ve ankilozan spondilit hastalarında ağrı eşiğini yükseltir ve eklem hareket açıklığını artırır.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Yenilenme:</strong> Kükürt ve sülfat içeriği sayesinde sedef, egzama ve akne gibi deri lezyonlarında antiseptik ve epitelizasyon (deri onarımı) hızlandırıcı etki.</li>
                    <li>🛀 <strong>Nörolojik Rehabilitasyon Desteği:</strong> İnme sonrası veya periferik sinir felçlerinde su içi (hidroterapi) egzersizlerle kas tonusunun düzenlenmesi.</li>
                    <li>🥤 <strong>Niksar Ayvaz Suyu (İçme Kürü):</strong> Dünyaca ünlü düşük sodyum ve ideal sertlik oranına sahip bu su; böbrek taşı oluşumunu engelleme ve sindirim sistemi düzenleme konularında medikal tavsiye niteliğindedir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Tokat termalleri, "Modern Tesis" ile "Tarihi Doku"nun en iyi birleştiği yerlerden biridir. Sulusaray bölgesi yeni yapılan tesislerle lüks segmenti zorlarken, Reşadiye daha geleneksel ve yüksek mineral odaklı hizmet verir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0356 214 11 05", 
        tr: {
            hospName: "Tokat Huzurevi Yaşlı Bakım Merkezi & Niksar Özel Geriatri Birimleri",
            shortDesc: "👴 Yeşilırmak kıyısında, doğayla iç içe huzurlu emeklilik; akademik gözetim altında 7/24 kronik hastalık yönetimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Holistik Geriatrik Yaklaşım ve Bakım Standartları</h4>
                <p>Tokat, geleneksel aile yapısının ve yaşlıya saygının sağlık sistemine entegre edildiği, düşük stresli bir yaşam alanıdır.</p>
                <ul>
                    <li>🏥 <strong>TOGÜ Geriatri Polikliniği Entegrasyonu:</strong> Yaşlılık dönemi hastalıkları (Alzheimer, Parkinson, Demans) için üniversite hocaları tarafından yürütülen özel takip ve ilaç dozajlama sistemleri.</li>
                    <li>🥗 <strong>Doğal Beslenme ve 'Tokat Mutfağı' Diyeti:</strong> Bölgenin verimli topraklarından gelen taze sebzeler ve meşhur Tokat yaprağı gibi doğal antioksidanlarla hazırlanan, yaşlı metabolizmasına uygun menüler.</li>
                    <li>🌬️ <strong>Klimatolojik Avantaj:</strong> Yeşilırmak vadisinin sağladığı dengeli nem oranı ve temiz hava; KOAH ve kalp yetmezliği olan yaşlılarda solunum konforunu artırır.</li>
                    <li>🧠 <strong>Bilişsel ve Sosyal Aktivite Planı:</strong> Geleneksel el sanatları, bağ-bahçe uğraşları ve yerel kültür sohbetleri ile sosyal izolasyonu engelleyen, mental zindeliği koruyan programlar.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Tokat, yaşlılar için "Güvenli ve Huzurlu" bir limandır. <strong>Güçlü Yönü:</strong> Şehirdeki sosyal barış ve sağlık kurumlarına fiziksel ulaşımın çok kısa (max 10 dk) olmasıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0356 212 29 00",
        tr: {
            hospName: "Tokat FTR Eğitim Birimi & Özel Rehabilitasyon Kompleksleri",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda uzmanlaşmış kadro; manuel terapi ve su içi egzersizlerle maksimum mobilite.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Kapsamlı Fizik Tedavi ve Fonksiyonel Geri Kazanım</h4>
                <p>Tokat'ta rehabilitasyon, hastanın sadece fiziksel değil, sosyal hayata tam katılımını hedefleyen bir süreç olarak yönetilir.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme, felç veya MS gibi nörolojik vakalarda uzman fizyoterapistler eşliğinde yürütülen PNF ve Bobath konseptli manuel terapiler.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> Yeni nesil TENS, ultrason, lazer ve vakum tedavileri ile kronik ağrıların baskılanması ve doku iyileşmesinin hızlandırılması.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Menisküs, ön çapraz bağ ve protez ameliyatları sonrası hastayı en kısa sürede 'işe dönüş' seviyesine getiren dirençli egzersiz protokolleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim ve Terapi:</strong> Çocuklarda serebral palsi, otizm ve gelişimsel gecikmeler için duyu bütünleme, denge-koordinasyon ve ince motor beceri geliştirme üniteleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Tokat, bölgedeki "Manuel Terapi" başarısıyla tanınır. <strong>Güçlü Yönü:</strong> Üniversite bünyesindeki stajyer ve uzman sayısının fazlalığı sayesinde hasta başına düşen ilgililik oranı çok yüksektir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0356 228 10 10",
        tr: {
            hospName: "Tokat Dedeman, Büyük Tokat Oteli Wellness & Tarihi Ali Paşa Hamamı",
            shortDesc: "🧖‍♂️ Tarihi 16. yüzyıla uzanan hamam kültürü ile modern otel konforunun birleştiği bütünsel Wellness noktası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Detoks ve Geleneksel Arınma</h4>
                <p>Tokat'ta Wellness deneyimi, Anadolu'nun köklü temizlik kültürü ile modern dinlenme tekniklerini bir araya getirir.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Ritüelleri:</strong> Ali Paşa Hamamı gibi asırlık mekanlarda, yüksek tavanlı buhar kubbesi altında yapılan geleneksel kese-köpük ve 'göbek taşı' terlemesi ile tam vücut detoksu.</li>
                    <li>💆 <strong>Aromaterapi ve Medikal Masajlar:</strong> Günün yorgunluğunu ve stresini minimize eden, özel bitki özleri ve doğal yağlarla desteklenen profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Otel bünyelerindeki saunalar, buhar odaları ve şok duşları ile dolaşımın hızlandırılması ve gözeneklerin temizlenmesi.</li>
                    <li>😌 <strong>Anti-Aging ve Cilt Bakımı:</strong> Bölgesel mineralli çamurlar ve profesyonel kozmetik ürünlerle sunulan yüz ve vücut maskeleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Tokat'ta SPA hizmeti, "Tarihi Deneyim" arayanlar için muazzamdır. Modern otel SPA'ları ise temizlik ve standart kalite konusunda oldukça başarılıdır. Fiyat/performans oranı Türkiye genelindeki pek çok ile göre çok daha avantajlıdır.</p>
            </div>`
        }
    }
},
  "TRABZON": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", 
        phone: "0462 377 50 00",
        tr: {
            hospName: "KTÜ Farabi Hastanesi, Trabzon Şehir Hastanesi, Kanuni Eğitim Araştırma & Özel Imperial/Medical Park",
            shortDesc: "🏥 Karadeniz'in en köklü ve en büyük cerrahi ekosistemi; organ nakli, robotik cerrahi ve uluslararası onkoloji referans merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik İmparatorluk ve İleri Cerrahi Spektrum</h4>
                <p>Trabzon, tıp eğitiminde Karadeniz'in ekolüdür. KTÜ Farabi Hastanesi, bölgedeki en karmaşık vakaların (Vaka Karmaşıklık Endeksi - CMI yüksek olanlar) nihai çözüm merkezidir.</p>
                <ul>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC) ve Çocuk Kalp Merkezi:</strong> Yenidoğan bebeklerden ileri yaş yetişkinlere kadar her türlü açık kalp ameliyatı, minimal invaziv kapak değişimleri (TAVİ) ve kompleks aort cerrahisinde Türkiye'nin sayılı merkezlerinden biridir.</li>
                    <li>🫁 <strong>Organ Nakli (Transplantasyon):</strong> Karaciğer, böbrek ve kemik iliği nakillerinde bölgenin tek yetkin otoritesi; kadavradan ve canlıdan nakil süreçlerinde %95+ başarı oranı.</li>
                    <li>☢️ <strong>Onkoloji ve Nükleer Tıp Entegrasyonu:</strong> PET-CT, Lineer Hızlandırıcılar ve nükleer tıp laboratuvarlarıyla desteklenen; cerrahi, radyoterapi ve immunoterapiyi birleştiren bütünsel kanser yönetimi.</li>
                    <li>🧠 <strong>İleri Nöroşirürji ve Gama Knife:</strong> Beyin tümörlerinde milimetrik hassasiyette çalışan Gama Knife teknolojisi, derin beyin stimülasyonu (Parkinson pili) ve mikro-nörocerrahi uygulamaları.</li>
                    <li>⚕️ <strong>Robotik Cerrahi (Da Vinci):</strong> Üroloji ve genel cerrahi operasyonlarında robotik kollarla yapılan müdahaleler sayesinde 'sıfıra yakın' kan kaybı ve 48 saatte taburcu protokolü.</li>
                    <li>🦴 <strong>Kompleks Travma ve Protez Cerrahisi:</strong> Bölgenin engebeli yapısına bağlı yüksek travma vaka deneyimi; navigasyon destekli diz/kalça protezleri ve spor hekimliğinde (Trabzonspor sağlık ekolü desteğiyle) ileri düzey artroskopi.</li>
                    <li>🦷 <strong>KTÜ Diş Hekimliği Fakültesi:</strong> Çene-yüz deformiteleri cerrahisi, ileri düzey maksillofasiyal protezler ve dijital gülüş tasarımı laboratuvarları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Uluslararası Sağlık Diplomasisi ve Lojistik</h4>
                <p>Trabzon, "Uluslararası Sağlık Turizmi Yetki Belgesi"ne sahip kurumlarıyla Gürcistan, Rusya ve Körfez ülkelerinden gelen hastalar için bir çekim merkezidir. Şehirdeki havalimanının şehir merkezine ve hastanelere olan 5 dakikalık mesafesi, 'Jet-Ambulans' transferleri için dünyadaki en avantajlı konumlardan birini sunar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Akademik birikimin çok eski olması ve her branşta 'Profesör' düzeyinde uzmanlaşmış alt dalların bulunmasıdır. <strong>Eksik Yönü:</strong> Şehir dışından gelen aşırı hasta yoğunluğu nedeniyle poliklinik ve otopark kapasitelerinde dönemsel tıkanıklıklar yaşanabilmektedir; ancak cerrahi operasyonel hız bu yoğunluğa rağmen korunmaktadır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0462 333 33 33", 
        tr: {
            hospName: "Akçaabat (Uçarsu) Kaynakları & Maçka/Şalpazarı Şifalı Mineralli Sular",
            shortDesc: "🌡️ Yayla havasıyla birleşen 'Sodyum Bikarbonatlı' doğal sular; sindirim ve cilt sağlığında Karadeniz'in saklı şifası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Profili ve Klimatolojik Rehabilitasyon</h4>
                <p>Trabzon'da termal şifa, klasik sıcak suyun ötesinde 'İklim Terapisi' ile iç içe geçmiş bir yapıdadır.</p>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Magnezyumlu Su Yapısı:</strong> Akçaabat ve çevresindeki mineralli sular, mide mukozasını koruyucu ve safra yollarını düzenleyici 'İçme Kürleri' için ideal magnezyum-kalsiyum dengesine sahiptir.</li>
                    <li>🌬️ <strong>Yüksek Rakım Oksijen Terapisi (Yayla Tıbbı):</strong> Hıdırnebi ve Erikbeli gibi yaylalardaki temiz hava kalitesinin; termal banyolarla eşzamanlı kullanıldığında kronik KOAH, astım ve alerjik üst solunum yolu hastalıklarındaki 'Nefes Açıcı' etkisi.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Antiseptik Etki:</strong> Bölgedeki bazı yerel kaynakların kükürt oranı, inatçı deri döküntüleri ve mantar enfeksiyonlarında medikal tedaviye yardımcı doğal bir bariyer oluşturur.</li>
                    <li>🦵 <strong>Eklem ve Kas Rehabilitasyonu:</strong> Suyun doğal mineralli yapısı ve yayla yürüyüşlerinin kombinasyonu ile sağlanan 'Doğal Fizyoterapi' süreci.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Trabzon'da Afyon veya Bursa tarzı devasa termal otellerden ziyade, doğayla bütünleşik butik 'Şifa Noktaları' bulunur. Suyun kimyasal kalitesi çok yüksek olsa da tesisleşme daha ziyade yayla turizmine entegre durumdadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0462 230 11 05", 
        tr: {
            hospName: "Trabzon Köşk Huzurevi Yaşlı Bakım Merkezi & Akçaabat/Yomra Özel Geriatri Villaları",
            shortDesc: "👴 Deniz ve ormanın kesiştiği 'Mavi-Yeşil' hattında huzurlu yaşlanma; KTÜ Farabi güvencesinde uzman geriatrik yönetim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İleri Yaş Takip Sistemleri ve Sosyal Refah</h4>
                <p>Trabzon, yaşlı nüfusun sosyal hayata en aktif katıldığı, 'Emeklilik Stresi'nin en düşük olduğu illerin başında gelir.</p>
                <ul>
                    <li>🏥 <strong>Geriatri ve Palyatif Bakım Koordinasyonu:</strong> Üniversite ve Şehir Hastanesi'nin yaşlı sağlığı birimleriyle online entegre olan; ilaç etkileşimlerini ve beslenme bozukluklarını (Malnütrisyon) yerinde izleyen uzman ekipler.</li>
                    <li>🌊 <strong>Deniz Havası ve Mental Sağlık:</strong> Sahil bandındaki düşük rakımlı alanların sunduğu yüksek oksijen seviyesi ile yaşlılarda uyku apnesi ve kronik yorgunluk semptomlarının azalması.</li>
                    <li>🥗 <strong>Omega-3 Zengini Beslenme Modeli:</strong> Karadeniz'in taze balık kültürü ve yöresel sebzelerle (Kara lahana, mısır ekmeği vb.) hazırlanan, damar sertliğini engelleyici diyet programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma ve El Sanatları:</strong> Geleneksel gümüş kazaziye işçiliği gibi odaklanma gerektiren hobilerle Alzheimer ve Demans başlangıcını yavaşlatan motor beceri egzersizleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Trabzon, yaşlı bakımı konusunda Karadeniz'in en profesyonel kadrolarına sahiptir. <strong>Güçlü Yönü:</strong> Şehirdeki 'Hürmet Kültürü' ile birleşen yüksek tıbbi imkanlardır. Her türlü acil durumda bölgenin en iyi hastanelerine 5-10 dakikada ulaşım garantisi vardır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0462 377 50 00",
        tr: {
            hospName: "KTÜ FTR Hastanesi, Maçka Fizik Tedavi ve Rehabilitasyon Hastanesi & Özel Robotik Birimler",
            shortDesc: "♿ Türkiye'nin en köklü FTR ekolü; robotik yürüme sistemleri, hidroterapi havuzları ve uzman nöro-rehabilitasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Mobilite ve Teknoloji Odaklı İyileşme</h4>
                <p>Trabzon'da rehabilitasyon, sadece egzersiz değil; biyomekanik ve nörolojik bir bilim dalı olarak en üst düzeyde uygulanır.</p>
                <ul>
                    <li>♿ <strong>İleri Robotik Rehabilitasyon (Lokomat/Armeo):</strong> Felç, inme ve travmatik omurilik yaralanmalarında hastayı yeniden mobilize eden, kas hafızasını tetikleyen son teknoloji robotik üniteler.</li>
                    <li>⚙️ <strong>Nöromüsküler Stimülasyon ve Ağrı Bilimi:</strong> Biofeedback destekli elektroterapi seansları ile sinir iletim hızını artıran ve kronik ağrı eşiğini düzenleyen medikal yaklaşımlar.</li>
                    <li>🌊 <strong>Su İçi (Aquatik) Fizyoterapi:</strong> Isıtılmış tıbbi havuzlarda suyun kaldırma kuvvetiyle eklemlere sıfır yük bindirerek yapılan yürüme ve denge eğitimleri.</li>
                    <li>🦵 <strong>Kişiye Özel Ortez-Protez Laboratuvarları:</strong> Ampute veya uzuv kaybı yaşayan hastalar için 3D tarayıcılar ile üretilen, vücut ergonomisine tam uyumlu modern protez çözümleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon ve Duyu Bütünleme:</strong> Serebral Palsi ve gelişimsel bozukluklar için özel tasarlanmış parkurlar ve çocuk ruh sağlığı destekli seanslar.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Maçka'daki FTR hastanesi, doğası ve uzmanlığıyla Türkiye'nin 'Referans' merkezlerinden biridir. <strong>Güçlü Yönü:</strong> Personel başına düşen başarı puanının ulusal ortalamanın üzerinde olmasıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0462 333 00 00",
        tr: {
            hospName: "Radisson Blu, Hilton Garden Inn, Ramada Plaza & Tarihi Sekiz Direkli Hamam",
            shortDesc: "🧖‍♂️ Modern Wellness ve asırlık hamam geleneğinin buluşması; deniz manzaralı SPA odalarında bütünsel yenilenme.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Holistik Terapi</h4>
                <p>Trabzon'da Wellness deneyimi, Karadeniz'in sert doğasından sıyrılıp 'İçsel Huzur'a ulaşılan lüks duraklardır.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Dokuda Arınma:</strong> Sekiz Direkli Hamam gibi Selçuklu/Osmanlı mimarisinde sunulan; sıcak mermer, kese, köpük ve 'Gül Suyu' ritüelleriyle cildi toksinlerden temizleyen kadim yöntemler.</li>
                    <li>💆 <strong>Profesyonel Uzakdoğu ve Medikal Masajlar:</strong> Bali ve Thai masajlarından, bölgedeki sporcu yoğunluğuna hitap eden derin doku (Deep Tissue) masajlarına kadar geniş bir terapist yelpazesi.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Kompleksler:</strong> Kristal buhar odaları, aromatik bitki özlü saunalar ve 'Kar Çeşmesi' ile sağlanan şok etkisi sayesinde bağışıklık sistemini aktive eden süreçler.</li>
                    <li>😌 <strong>Deniz Mineralli Cilt Bakımları:</strong> Deniz yosunu ve yerel minerallerle sunulan, yaşlanma karşıtı (Anti-Aging) ve ödem atıcı vücut sargılama teknikleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Trabzon, özellikle Körfez turizminin etkisiyle SPA kalitesini 'Ultra-Lüks' seviyeye taşımıştır. Hizmet kalitesi, hijyen ve profesyonellik bakımından İstanbul'daki en iyi tesislerle yarışır düzeydedir.</p>
            </div>`
        }
    }
},
"TUNCELI": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0428 212 10 39",
        tr: {
            hospName: "Tunceli Devlet Hastanesi & Munzur Üniversitesi Sağlık Araştırma Birimleri",
            shortDesc: "🏥 Doğu Anadolu'nun butik ve modern cerrahi üssü; dijital röntgen, ileri tomografi ve uzman odaklı operasyon birimleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Cerrahi Kapasite ve Modernize Edilmiş Altyapı</h4>
                <p>Tunceli, son yıllarda yapılan yatırımlarla sağlık altyapısını tamamen modernize etmiş, çevre illere bağımlılığını %70 oranında azaltmış bir şehirdir. Hastane, akıllı bina teknolojisi ve yüksek sterilizasyon standartlarına sahiptir.</p>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve apandis operasyonlarında bölgenin en hızlı iyileşme protokolleri; kapalı cerrahi yöntemlerle post-operatif ağrı yönetimi.</li>
                    <li>🦴 <strong>Ortopedik Travma ve Artroskopi:</strong> Şehrin engebeli coğrafyası ve doğa sporları potansiyeli nedeniyle diz, el ve ayak bileği travmalarında uzmanlaşmış, kapalı eklem ameliyatları (Artroskopi) gerçekleştiren cerrahi ekip.</li>
                    <li>🫀 <strong>Kardiyovasküler Stabilizasyon:</strong> Akut kalp krizlerinde ilk müdahale, trombolitik (pıhtı eritici) tedavi ve hastanın en yakın anjiyo merkezine güvenli transferini sağlayan ileri yoğun bakım koordinasyonu.</li>
                    <li>🩸 <strong>Üroloji ve Taş Tedavisi:</strong> Modern sistoskopi ve üreteroskopi cihazları ile böbrek ve idrar yolu taşlarında kesisiz müdahale seçenekleri.</li>
                    <li>🧠 <strong>Nöroloji ve İnme Yönetimi:</strong> Beyin damar tıkanıklıklarında kritik "altın saat" müdahalesi ve nörolojik takip servislerinde yüksek hemşirelik bakım kalitesi.</li>
                    <li>👶 <strong>Kadın Doğum ve Pediatri:</strong> Modern doğumhaneler, ağrısız doğum (epidural) seçenekleri ve bölgeye hizmet veren donanımlı yenidoğan yoğun bakım ünitesi.</li>
                    <li>🦷 <strong>Tunceli Ağız ve Diş Sağlığı Merkezi:</strong> Protez laboratuvarı, kanal tedavisi uzmanlığı ve çocuk diş sağlığı alanında bölge geneline hizmet veren modern üniteler.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Erişim Gücü</h4>
                <p>Tunceli, coğrafi olarak sarp bir bölgede olmasına rağmen, şehir içi ulaşımın kısalığı sayesinde hastanın evinden hastaneye ulaşma süresi ortalama 7 dakikadır. Bu durum, acil vakalarda hayatta kalma oranlarını doğrudan artırmaktadır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin yeni olması sebebiyle tıbbi cihaz envanterinin güncelliği ve sağlık personeli başına düşen hasta sayısının az olmasıdır. Bu, hastaya ayrılan süreyi ve bakım kalitesini maksimize eder. <strong>Eksik Yönü:</strong> Çok ileri düzey onkolojik radyoterapi ve açık kalp cerrahisi için genellikle komşu il Elazığ (Fırat Üniversitesi) ile protokoller yürütülmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0428 213 17 00", 
        tr: {
            hospName: "Tunceli Pertek Termal & Munzur Şifalı Su Kaynakları",
            shortDesc: "🌡️ Keban Baraj Gölü kıyısında, mineral zengini termal sular; kalsiyum ve magnezyum dengesiyle eklem ve deri dostu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Analizi ve Hidroterapi Gücü</h4>
                <p>Tunceli'nin termal potansiyeli, özellikle Pertek bölgesindeki kalsiyum-bikarbonatlı sularla karakterizedir.</p>
                <ul>
                    <li>🧪 <strong>Kalsiyum ve Bikarbonat Zengini Su:</strong> Pertek termal suları, kemik metabolizmasını destekleyen ve deri bariyerini güçlendiren mineral yapısına sahiptir.</li>
                    <li>🦴 <strong>Romatizmal Rehabilitasyon:</strong> Suyun 36°C-38°C ideal sıcaklığı; osteoartrit (kireçlenme), yumuşak doku romatizması ve bel fıtığı kaynaklı kas spazmlarında doğal bir gevşetici etki sağlar.</li>
                    <li>🛀 <strong>Post-Operatif (Ameliyat Sonrası) Kürler:</strong> Kırık ve çıkık ameliyatları sonrası alçı çıkarıldığında, su içi egzersizlerle eklem hareketliliğini geri kazandırma süreçleri.</li>
                    <li>🧼 <strong>Dermatolojik Etki:</strong> Suyun düşük sodyum ve dengeli pH yapısı, hassas ciltlerdeki kaşıntı ve pullanmaları yatıştırıcı özellik taşır.</li>
                    <li>🥤 <strong>Munzur Gözeleri (Doğal Alkalin Su):</strong> Türkiye'nin en yüksek pH değerine sahip doğal sularından biri olan Munzur suyu, vücut asit-baz dengesini düzenleyen doğal bir içme kürüdür.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Pertek Termal, bölgenin en modern tesisidir ve feribot ulaşımıyla Elazığ'dan da yoğun hasta kabul eder. Doğa ve suyun birleşimi, psikolojik arınma için de eşsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0428 212 11 05", 
        tr: {
            hospName: "Tunceli Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Munzur Vadisi'nin bol oksijenli havasında aktif yaşlanma; medikal takipli, butik ve huzurlu yaşam alanı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Ekolojik Geriatri ve Sosyal Yaşam Yönetimi</h4>
                <p>Tunceli, Türkiye'de okuma-yazma ve eğitim oranının en yüksek olduğu illerden biri olarak, yaşlı bakımında 'Bilinçli ve Saygılı' bir modele sahiptir.</p>
                <ul>
                    <li>🏥 <strong>Hızlı Medikal Takip ve Geriatri Desteği:</strong> Yaşlılık dönemi hastalıkları (Hipertansiyon, Diyabet) için Devlet Hastanesi ile online randevu ve öncelikli hizmet protokolleri.</li>
                    <li>🌬️ <strong>Yüksek Oksijen ve Düşük Hava Kirliliği:</strong> Munzur Vadisi Milli Parkı'ndan gelen temiz hava, yaşlılarda koah ve kalp yetmezliği semptomlarını doğal yolla hafifletir.</li>
                    <li>🥗 <strong>Fitoterapi ve Organik Beslenme:</strong> Bölgeye özgü Munzur balı, dağ sarımsağı ve endemik bitkilerle hazırlanan, bağışıklık sistemini destekleyen 'Doğal Mezopotamya' diyetleri.</li>
                    <li>🧠 <strong>Mental Zindelik ve Sosyal Entegrasyon:</strong> Satranç turnuvaları, yerel kültür gezileri ve üniversite gençliği ile yapılan kuşaklararası etkileşim programları.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Tunceli, kalabalıktan uzak, doğa içinde yaşlanmak isteyenler için 'Butik bir Cennet'tir. <strong>Güçlü Yönü:</strong> Sosyal barış, yüksek eğitimli personel ve doğanın sunduğu doğal rehabilitasyon imkanıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0428 212 10 39",
        tr: {
            hospName: "Tunceli FTR Ünitesi & Özel Eğitim ve Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik ve nörolojik vakalarda birebir fizyoterapi; manuel terapi ve denge egzersizleri odaklı yaklaşım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Hareket ve Bireysel İlgi</h4>
                <p>Tunceli'de rehabilitasyon hizmetleri, hasta-fizyoterapist ilişkisinin en güçlü olduğu illerden biridir; her hastaya ayrılan süre ulusal ortalamanın üzerindedir.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (felç) ve sinir sıkışmaları sonrası kas gücünü artırmaya yönelik kişiye özel manuel terapi seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Ağrı kontrolü ve kas stimülasyonu için kullanılan modern TENS ve ultrason üniteleri.</li>
                    <li>🦵 <strong>Kineziterapi ve Egzersiz:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik, Munzur'un eşsiz doğasında yapılan açık hava yürüyüş eğitimleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Dezavantajlı çocuklar için duyu bütünleme terapileri ve ince motor beceri geliştirme odaklı profesyonel destek.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Tunceli, rehabilitasyonda 'İnsani Dokunuş'un en yoğun olduğu illerdendir. <strong>Güçlü Yönü:</strong> Personelin motivasyonu ve hastaların psikolojik olarak desteklenmesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0428 213 17 00",
        tr: {
            hospName: "Pertek Termal Otel Spa & Grand Şaroğlu Wellness Birimi",
            shortDesc: "🧖‍♂️ Munzur'un gölgesinde modern arınma; baraj gölü manzaralı saunalar ve geleneksel Türk hamamı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Doğal Detoks</h4>
                <p>Tunceli'de Wellness, şehrin 'Sakin Şehir' (Cittaslow) adaylığına uygun bir yavaşlıkta ve huzurda sunulur.</p>
                <ul>
                    <li>🧼 <strong>Geleneksel Hamam Kültürü:</strong> Hijyenik ve modern şartlarda sunulan kese-köpük ritüelleri ile toksinlerden arınma.</li>
                    <li>💆 <strong>Rahatlama ve Aromaterapi:</strong> Bölgedeki endemik bitki yağları ile desteklenen, stres azaltıcı ve dolaşım hızlandırıcı profesyonel masajlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Isıl Alanlar:</strong> Gözenekleri açan, kasları gevşeten ve ruhsal ferahlık sağlayan modern sauna ve buhar odaları.</li>
                    <li>😌 <strong>Munzur Detoksu:</strong> Yüksek pH'lı Munzur suyu ve bitkisel çaylarla desteklenen içsel temizlik kürleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Tunceli'de SPA hizmeti butik ve kaliteli bir yapıdadır. Özellikle göl ve dağ manzarasının eşlik ettiği seanslar, büyükşehirlerdeki kapalı SPA'lara göre çok daha yüksek bir psikolojik tatmin sağlar.</p>
            </div>`
        }
    }
},
  "SANLIURFA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d319a39855df?q=80&w=400", 
        phone: "0414 317 00 00",
        tr: {
            hospName: "Şanlıurfa Şehir Hastanesi, Harran Üniversitesi Tıp Fakültesi & Mehmet Akif İnan EAH",
            shortDesc: "🏥 Güneydoğu'nun en büyük cerrahi ekosistemi; binlerce yatak kapasitesi, yanık merkezi ve ileri düzey pediatrik cerrahi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Devasa Cerrahi Kapasite ve Bölgesel Müdahale Gücü</h4>
                <p>Şanlıurfa, sadece kendi nüfusuna değil, Suriye sınır ötesi ve çevre illere de hizmet veren 'Multi-Disipliner' bir cerrahi kaledir. Şehir Hastanesi yatırımıyla birlikte operasyonel çeşitlilik Türkiye'nin zirvesine taşınmıştır.</p>
                <ul>
                    <li>🔥 <strong>İleri Düzey Yanık Merkezi:</strong> Türkiye'nin en donanımlı yanık ünitelerinden biri; ağır endüstriyel ve evsel yanıklarda yoğun bakım, cerrahi debridman ve deri nakli (greft) uygulamalarında uluslararası referans.</li>
                    <li>👶 <strong>Pediatrik Cerrahi ve Yenidoğan:</strong> Bölgenin doğum hızı nedeniyle devasa bir çocuk cerrahisi kadrosu; anomali düzeltme operasyonları, çocuk ürolojisi ve 100+ yataklı yenidoğan yoğun bakım desteği.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi ve Girişimsel Kardiyoloji:</strong> Koroner anjiyografi, kalp kapağı değişimleri ve damar sertliği müdahalelerinde 7/24 kesintisiz hizmet veren hibrit ameliyathaneler.</li>
                    <li>☢️ <strong>Onkolojik Cerrahi ve Radyoterapi:</strong> Harran Üniversitesi bünyesinde yürütülen kompleks tümör cerrahileri, PET-CT görüntüleme ve modern radyoterapi protokolleri.</li>
                    <li>🦴 <strong>Ortopedik Travma Yönetimi:</strong> Yüksek vaka sayısı nedeniyle travma cerrahisinde (kırık, çıkık, uzuv kopmaları) dünya standartlarında tecrübeye sahip cerrahi ekipler ve mikro-cerrahi uygulamaları.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin ve Sinir):</strong> Beyin kanamaları, kafa travmaları ve spinal cerrahide (bel/boyun fıtığı) navigasyon destekli mikro-cerrahi yöntemleri.</li>
                    <li>🦷 <strong>Şanlıurfa Ağız ve Diş Sağlığı Hastanesi:</strong> Bölgenin en büyük diş hastanelerinden biri; çene cerrahisi, implantoloji ve protez alanında 100'den fazla ünite ile hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Sağlık Diplomasisi</h4>
                <p>Şanlıurfa, sınır ötesi sağlık hizmetlerinde 'Sahra Hastanesi' tecrübesi ile 'Modern Hastane' konforunu birleştirmiştir. Şehir, Ortadoğu'dan gelen medikal turizm taleplerini karşılayacak VIP hasta birimlerine sahiptir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Vaka çeşitliliği ve cerrahların el pratikliği Türkiye'nin en üst seviyesindedir; en zor operasyonlar burada rutinleşmiştir. <strong>Eksik Yönü:</strong> Aşırı hasta yoğunluğu nedeniyle randevu sisteminde ve acil servislerde ciddi bir sirkülasyon yükü vardır; ancak hayati cerrahi müdahalelerde sistem çok hızlı çalışır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0414 751 55 55", 
        tr: {
            hospName: "Karaali Kaplıcaları & Şanlıurfa Jeotermal Kaynaklar",
            shortDesc: "🌡️ Mezopotamya güneşinin altındaki 'Sıvı Güneş'; yüksek mineralizasyon ile romatizma ve cilt sağlığı mucizesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Analizi ve Tıbbi Etki</h4>
                <p>Şanlıurfa Karaali bölgesi, saniyede 100 litrenin üzerindeki debisi ve 45°C-50°C sıcaklığıyla Türkiye'nin en verimli jeotermal alanlarından biridir.</p>
                <ul>
                    <li>🧪 <strong>Klorürlü ve Sodyumlu Su Yapısı:</strong> Suyun yüksek mineral yoğunluğu, hücre yenilenmesini hızlandırıcı ve deri bariyerini güçlendirici özellik taşır.</li>
                    <li>🦴 <strong>Kas ve Eklem Sistemi:</strong> Romatoid Artrit, kireçlenme ve yumuşak doku romatizmalarında inflamasyonu azaltıcı, hareket kabiliyetini artırıcı kürler.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Tedavi:</strong> Egzama, sedef ve akne gibi inatçı cilt sorunlarında antiseptik etkisiyle bilinen mineral dengesi.</li>
                    <li>🛀 <strong>Hidroterapi ve Rehabilitasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarında su içi egzersizlerle fonksiyonel geri kazanım sağlayan modern havuz birimleri.</li>
                    <li>🥤 <strong>Metabolik Etki:</strong> Su içme kürleri (doktor kontrolünde) ile sindirim sistemi düzenleme ve böbrek fonksiyonlarını destekleme potansiyeli.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Karaali bölgesi, hem sağlık hem de seracılık (jeotermal enerji) ile gelişen bir bölgedir. Tesisler aile odaklı ve sosyal imkanları yüksektir. Şifa kalitesi bakımından Güneydoğu'nun en önemli termal destinasyonudur.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0414 313 11 05", 
        tr: {
            hospName: "Şanlıurfa Huzurevi Yaşlı Bakım Merkezi & Özel Geriatrik Destek Birimleri",
            shortDesc: "👴 Maneviyatın ve tarihin gölgesinde huzurlu yaşlanma; Şehir Hastanesi destekli 7/24 medikal güvenlik ağı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Sosyal Dokuya Entegre Geriatrik Bakım</h4>
                <p>Şanlıurfa, geniş aile yapısı ve yaşlıya hürmet kültürü ile yaşlı bakımında 'Psikolojik Refah'ın en yüksek olduğu illerimizdendir.</p>
                <ul>
                    <li>🏥 <strong>Geriatri ve Kronik Hastalık Yönetimi:</strong> Diyabet (şeker), hipertansiyon ve kalp yetmezliği gibi yaşlılık dönemi hastalıkları için uzman hekimlerce yürütülen kişiye özel takip kartları.</li>
                    <li>🥗 <strong>Geleneksel ve Sağlıklı Gastronomi:</strong> Şanlıurfa'nın zengin mutfağından gelen doğal ürünler (isot, zeytinyağı, bakliyat) ile hazırlanan, ancak yaşlı diyetine uygun (tuz ve baharat dengeli) beslenme programları.</li>
                    <li>☀️ <strong>D Vitamini ve İklim Avantajı:</strong> Yılın büyük bölümünde güneşli olan iklimi sayesinde kemik sağlığı için kritik olan D vitamini sentezinde doğal avantaj.</li>
                    <li>🧠 <strong>Mental Zindelik ve Sosyalleşme:</strong> Geleneksel el sanatları, tarih sohbetleri ve dini/kültürel ziyaretlerle desteklenen, yalnızlık karşıtı aktif yaşlanma aktiviteleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Şanlıurfa, yaşlılar için manevi huzur ile modern tıp imkanlarını harmanlar. <strong>Güçlü Yönü:</strong> Şehirdeki sosyal dayanışma ruhu ve her türlü tıbbi krize anında müdahale edebilecek devasa hastane altyapısıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0414 317 00 00",
        tr: {
            hospName: "Şanlıurfa FTR Eğitim Birimi & Özel Engelsiz Yaşam Kompleksleri",
            shortDesc: "♿ Nörolojik ve ortopedik vakalarda yüksek yoğunluklu rehabilitasyon; uzman fizyoterapist eşliğinde motor gelişim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Rehabilitasyon ve Toplumsal Katılım</h4>
                <p>Şanlıurfa'da rehabilitasyon hizmetleri, vaka sayısının fazlalığı nedeniyle fizyoterapistlerin 'Klinik Pratik' anlamında en yetkin olduğu yerlerden biridir.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Serebral Palsi, İnme (felç) ve omurilik yaralanmalarında kas tonusunu düzenleyen ve bağımsız hareket kabiliyetini artıran yoğun terapi seansları.</li>
                    <li>⚙️ <strong>Elektroterapi ve Mekanik Destek:</strong> Yeni nesil ağrı kesici akımlar, ultrason ve mekanik traksiyon cihazlarıyla desteklenen fizik tedavi protokolleri.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Ameliyat veya travma sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve terapötik egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Bölgedeki çocuk nüfusuna hitap eden devasa kapasiteli özel eğitim merkezleri; duyu bütünleme, denge-koordinasyon ve konuşma terapisi desteği.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Şanlıurfa, rehabilitasyon alanında 'Pediatrik' (çocuk) vakalarda Türkiye'nin en deneyimli illerinden biridir. <strong>Güçlü Yönü:</strong> Hekim kadrosunun vaka deneyimi ve sosyal devlet imkanlarının genişliğidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0414 318 50 00",
        tr: {
            hospName: "El-Ruha Otel, Nevali Hotel Spa & Tarihi Gümrük Hanı Civarı Hamamlar",
            shortDesc: "🧖‍♂️ Mezopotamya'nın kalbinde mistik bir arınma; geleneksel taş mimaride modern Wellness ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Egzotik Detoks</h4>
                <p>Şanlıurfa'da Wellness, sadece bir bakım değil, binlerce yıllık bir temizlik ve dinlenme ritüelinin devamıdır.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Deneyimi:</strong> Geleneksel taş mimariye sahip asırlık hamamlarda, natır ve tellaklar eşliğinde yapılan kese-köpük ritüeli ile cildi ölü deriden tamamen arındırma.</li>
                    <li>💆 <strong>Aromaterapi ve Lokal Masajlar:</strong> Bölgenin bitkisel zenginliğiyle hazırlanan yağlar eşliğinde, günün stresini ve yorgunluğunu atan profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Lüks otel bünyelerindeki saunalar, buhar odaları ve tuz odaları ile solunum yollarını ferahlatan ve bağışıklığı güçlendiren süreçler.</li>
                    <li>😌 <strong>Güneydoğu Ritüelleri:</strong> Cilt bakımı seanslarında kullanılan yerel mineraller ve doğal maskeler ile sağlanan derinlemesine temizlik.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Şanlıurfa'da SPA hizmeti 'Mistik ve Lüks' bir havada sunulur. Otellerin mimari yapısı, SPA deneyimine ruhsal bir boyut da katar. Hizmet kalitesi, bölgeye gelen uluslararası turist standartlarını karşılayacak düzeydedir.</p>
            </div>`
        }
    }
},
  "USAK": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Uşak Eğitim ve Araştırma Hastanesi Modern Blok
            phone: "0276 223 33 00",
            tr: {
                hospName: "Uşak Üniversitesi Eğitim ve Araştırma Hastanesi",
                shortDesc: "🏥 Ege'nin iç kesimlerinde, üniversite-şehir hastanesi entegrasyonuyla cerrahi operasyonlarda akademik referans sunan merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik Altyapı ve Operasyonel Yetkinlik</h4>
                    <p>Uşak, özellikle Tıp Fakültesi'nin gelişimiyle birlikte cerrahi branşlarda büyük bir ivme yakalamıştır. Bölgesel konumu sayesinde Kütahya ve Afyon arasındaki hasta trafiğinde önemli bir stabilizatör görevi görür.</p>
                    
                    <h4>🩺 Cerrahi, Diş ve Estetik Branşlar</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Koroner bypass, kapak tamiri ve girişimsel kardiyoloji (anjiyo) birimleri 7/24 aktif ve yüksek başarı oranlıdır.</li>
                        <li>🦷 <strong>Diş Sağlığı Turizmi:</strong> Uşak Üniversitesi Diş Hekimliği Fakültesi, bölgedeki en modern ünitelerden birine sahiptir. İmplant, zirkonyum ve özellikle çocuk diş hekimliği cerrahisinde uzmanlaşmıştır.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Dermatoloji:</strong> Şehirdeki özel hastanelerde ve estetik merkezlerinde, büyükşehirlere oranla daha butik ve ekonomik saç ekimi (FUE) çözümleri sunulmaktadır.</li>
                        <li>🧠 <strong>Beyin Cerrahisi:</strong> Mikrocerrahi teknikleriyle bel/boyun fıtıkları ve periferik sinir operasyonları.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik (kapalı) obezite cerrahisi ve ileri düzey safra yolu ameliyatları.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Uşak, genel cerrahi ve travma vakalarında oldukça güçlüdür. Ancak organ nakli veya çok spesifik çocuk onkolojik cerrahisi gibi durumlarda, hastalar genellikle 2 saatlik mesafedeki İzmir’deki üniversite hastanelerine koordine edilmektedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Hamamboğazı Termal Tesisleri
            phone: "0276 338 12 34", // Banaz Hamamboğazı Tesisleri
            tr: {
                hospName: "Banaz Hamamboğazı, Örencik ve Kayaağıl Kaplıcaları",
                shortDesc: "🌡️ Dünyanın sayılı 'Gazlı ve Mineralli' sularına sahip, eklem ve mide rahatsızlıklarında kanıtlanmış şifa kaynağı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Hamamboğazı: Dünyanın En Kaliteli Sularından Biri</h4>
                    <p>Uşak'taki termal kaynaklar, özellikle Banaz Hamamboğazı bölgesi, mineral yoğunluğu ve suyun fiziksel özellikleri bakımından uluslararası tıp literatüründe 'A Grubu' şifalı su olarak tescillidir.</p>
                    
                    <h4>🧪 Tedavi Edici Özellikler</h4>
                    <ul>
                        <li>🦴 <strong>Eklem ve İskelet:</strong> Kronik romatizma, siyatik, nevralji ve yumuşak doku romatizmalarında termal banyo kürleri.</li>
                        <li>🩹 <strong>Cilt Yenilenme:</strong> Kayaağıl termal sularındaki mineral yapısı, akne ve sedef gibi dermatolojik sorunlarda yatıştırıcı etki yapar.</li>
                        <li>🫁 <strong>Solunum ve Metabolizma:</strong> Suyun doğal buharı ile yapılan teneffüs kürleri ve mide-safra kesesi şikayetleri için içme kürleri.</li>
                        <li>🧠 <strong>Sinirsel Rahatlama:</strong> Magnezyum zengini suların kas spazmlarını çözücü ve anksiyete azaltıcı etkisi.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Uşak, Afyon kadar çok sayıda otele sahip olmasa da, suyunun saflığı ve kalitesi bakımından butik sağlık turizmi için biçilmiş kaftandır. Özellikle Hamamboğazı'ndaki yeni tesisleşme hamlesi şehrin vizyonunu büyütmüştür.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Uşak Huzurevi Yaşam Alanı
            phone: "0276 223 39 42", // Uşak Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Uşak Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
                shortDesc: "👴 Ege'nin sakin atmosferinde, yaşlıların hem ruhsal hem de fiziksel sağlığını koruyan profesyonel bakım merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Yaşam ve Bakım Standartları</h4>
                    <p>Uşak, yaşlılar için ulaşımın kolay, gürültünün az olduğu 'insan ölçekli' bir şehirdir. Bu durum, özellikle zihinsel yorgunluğu olan yaşlılar için büyük avantajdır.</p>
                    <ul>
                        <li>🧠 <strong>Zihinsel Sağlık:</strong> Alzheimer ve demans hastaları için özel gözetim altındaki yaşam alanları ve hobi atölyeleri.</li>
                        <li>💊 <strong>Tıbbi Entegrasyon:</strong> Üniversite hastanesindeki geriatri uzmanları ile periyodik sağlık kontrolleri.</li>
                        <li>🧑‍⚕️ <strong>Hemşirelik Desteği:</strong> 7/24 ilaç takibi, vital bulgu izlemi ve kişisel hijyen yönetimi.</li>
                        <li>🎯 <strong>Sosyal Moral:</strong> Uşak'ın yerel kültürüne uygun etkinlikler ve termal tesislere düzenlenen kontrollü günübirlik geziler.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Uşak'taki kamu huzurevleri oldukça disiplinlidir ve sıra bekleme süreleri büyükşehirlere göre daha makuldür. Ancak ultra-lüks 'rezidans tipi' yaşlı bakım merkezleri henüz şehre giriş yapmamıştır.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Uşak Rehabilitasyon Merkezi
            phone: "0276 223 33 00",
            tr: {
                hospName: "Uşak Eğitim ve Araştırma Hastanesi FTR Ünitesi",
                shortDesc: "♿ Ortopedik ve nörolojik engelli bireyler için modern fizyoterapi üniteleriyle donatılmış rehabilitasyon birimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fiziksel İyileşme ve Hareket Terapisi</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç, inme ve travmatik beyin hasarı sonrası kaybedilen yetilerin geri kazanılması.</li>
                        <li>🦴 <strong>Post-Operatif FTR:</strong> Ameliyat sonrası kalça, diz ve bel hastaları için kişiye özel fizik tedavi programları.</li>
                        <li>⚙️ <strong>Elektroterapi:</strong> Modern cihazlar ile ağrı yönetimi ve kas stimülasyonu.</li>
                        <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral palsi ve gelişimsel geriliği olan çocuklar için uzman fizyoterapist desteği.</li>
                    </ul>

                    <h4>🌟 Stratejik Güç</h4>
                    <p>Uşak, rehabilitasyon alanında bölge halkının ve çevre ilçelerin tüm ihtiyaçlarını karşılayacak cihaz parkuruna ve uzman sayısına sahiptir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Uşak Şehir Oteli Spa
            phone: "0276 227 00 00", // Kayaağıl Termal veya merkezi bir otel spa
            tr: {
                hospName: "Uşak Wellness & Thermal Spa Merkezleri",
                shortDesc: "🧖‍♂️ Geleneksel hamam kültürünün termal suyun şifasıyla birleştiği yenilenme noktaları.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Beden ve Ruh Dengesi</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Hamam ve Sauna:</strong> Toksinlerden arınma ve gözenek açıcı geleneksel hamam ritüelleri.</li>
                        <li>💆 <strong>Medikal Masajlar:</strong> Termal banyoların ardından uygulanan, kas spazmlarını çözen aromaterapi ve İsveç masajları.</li>
                        <li>😌 <strong>Termal Havuz Deneyimi:</strong> Kaynağından doğrudan gelen mineralli sularla mineral banyosu.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Uşak SPA sektörü, daha çok 'terapi ve şifa' odaklıdır. Gösterişli eğlencelerden ziyade, suyun mineral gücünden faydalanmak isteyen sağlık turistlerine hitap eder.</p>
                </div>`
            }
        }
    },
  "VAN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", 
        phone: "0432 215 04 71",
        tr: {
            hospName: "Van YYÜ Dursun Odabaş Tıp Merkezi, Van Bölge Eğitim ve Araştırma Hastanesi & Lokman Hekim Van",
            shortDesc: "🏥 Doğu Anadolu'nun en büyük cerrahi ve akademik kompleksi; organ nakli merkezi, ileri düzey onkoloji ve uluslararası hasta koordinasyonu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Güç ve Bölgesel Referans Merkezi</h4>
                <p>Van, tıbbi altyapısı ve uzman kadrosuyla bölgedeki "Çözülemeyen Vakaların Sevk Edildiği Son Nokta" unvanına sahiptir. Özellikle üniversite hastanesinin akademik derinliği, şehri bir cerrahi eğitim merkezi haline getirmiştir.</p>
                <ul>
                    <li>🫁 <strong>Organ ve İlik Nakli (Transplantasyon):</strong> Doğu Anadolu'nun en aktif nakil merkezlerinden biri; böbrek ve karaciğer nakillerinde yüksek başarı grafiği ve gelişmiş doku tipleme laboratuvarları.</li>
                    <li>☢️ <strong>Kapsamlı Onkoloji Merkezi:</strong> Radyasyon onkolojisi, tıbbi onkoloji ve nükleer tıp birimlerinin entegre çalışması; PET-CT, Lineer Hızlandırıcı (LINAC) ve brakiterapi teknolojileri ile ileri düzey kanser yönetimi.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> Yenidoğan kalp cerrahisinden, yetişkinlerde kapalı bypass ve kapak değişimlerine kadar geniş bir spektrumda 7/24 aktif cerrahi müdahale kapasitesi.</li>
                    <li>🧠 <strong>İleri Nöroşirürji ve Spinal Cerrahi:</strong> Mikro-cerrahi yöntemle beyin tümörü eksizyonu, anevrizma klipleme ve kompleks omurga stabilizasyon operasyonları.</li>
                    <li>⚕️ <strong>Minimal İnvaziv Üroloji ve Genel Cerrahi:</strong> Laparoskopik ve endoskopik yöntemlerle yapılan kesisiz taş cerrahisi, obezite cerrahisi ve onkolojik batın operasyonları.</li>
                    <li>🤱 <strong>Perinatoloji ve Yenidoğan Yoğun Bakım:</strong> Riskli gebeliklerin takibi ve bölgenin en büyük yenidoğan yoğun bakım ünitesi (Level 4) ile prematüre bebeklerde hayatta kalma oranlarında ulusal başarı.</li>
                    <li>🦷 <strong>Van YYÜ Diş Hekimliği Fakültesi:</strong> Maksillofasiyal cerrahi (çene-yüz), ileri implantoloji ve dijital protetik diş tedavisi alanında bölgenin en donanımlı akademik birimi.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Turizmi ve Sınır Ötesi Etki</h4>
                <p>Van, özellikle İran'dan gelen hastalar için 'Birinci Tercih' konumundadır. Şehirdeki hastanelerde Farsça konuşan tercüman birimleri ve yabancı hastalar için özel olarak tasarlanmış VIP suit odalar, sağlık turizmi gelirlerini artırmaktadır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Akademik kadronun vaka deneyimi çok yüksektir; cerrahlar bölgedeki ekstrem vakalar nedeniyle ciddi bir el pratikliğine sahiptir. <strong>Eksik Yönü:</strong> Bölge illerinden gelen aşırı hasta göçü nedeniyle randevu yükü fazladır; ancak acil ve cerrahi branşlarda triyaj sistemi oldukça verimli çalışır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0432 312 21 11", 
        tr: {
            hospName: "Erciş (Zilan) Kaplıcaları, Çaldıran Jeotermal & Başkale Şifalı Suları",
            shortDesc: "🌡️ Volkanik coğrafyanın yüksek mineralli suları; 50°C üzerindeki kükürtlü kaynaklarla romatizmal şifa.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Volkanik Kökenli Su Analizi ve Hidroterapi</h4>
                <p>Van'ın termal kaynakları, bölgenin volkanik geçmişine bağlı olarak Türkiye'nin en yüksek mineralizasyon oranına sahip sularındandır.</p>
                <ul>
                    <li>🧪 <strong>Kükürt ve Sodyum Bikarbonat Zengini:</strong> Özellikle Erciş-Zilan suları, yüksek kükürt oranıyla doğal bir antiseptik görevi görür; deri hastalıkları ve eklem iltihaplarında baskılayıcı etki sağlar.</li>
                    <li>🦴 <strong>Kronik Romatizmal Ağrı Yönetimi:</strong> Suyun doğal sıcaklığı ve mineral yapısı; kireçlenme (osteoartrit), siyatik ve kas ağrılarında kas tonusunu düzenleyerek ağrıyı hafifletir.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Yenilenme:</strong> Sedef, egzama ve akne gibi deri lezyonlarında, suyun mineralli yapısının deri altı dolaşımı hızlandırıcı ve doku onarıcı etkisi.</li>
                    <li>🌊 <strong>Van Gölü (Alkali) Terapisi:</strong> Dünyanın en büyük sodalı gölü olan Van Gölü'nün suyu, yüksek pH değeriyle deri mantarları ve yara iyileşmelerinde doğal bir alkali banyo etkisi sunar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Van termalleri, 'Ham Veri' olarak dünyanın en değerli sularındandır. Tesisleşme süreci devam etmekle birlikte, doğallık ve mineral kalitesi arayan hastalar için eşsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0432 216 11 05", 
        tr: {
            hospName: "Van Huzurevi Yaşlı Bakım Merkezi & Bölge Hastanesi Geriatri Birimi",
            shortDesc: "👴 Van Gölü'nün huzur veren maviliğinde aktif yaşlanma; üniversite hastanesi gözetiminde 7/24 uzman medikal takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Geriatrik Rehabilitasyon ve Yaşam Kalitesi</h4>
                <p>Van, geniş aile kültürünün yaşlıya verdiği manevi destek ile modern geriatri bilimini harmanlayan bir şehirdir.</p>
                <ul>
                    <li>🏥 <strong>Multidisipliner Yaşlı Sağlığı Takibi:</strong> Hipertansiyon, diyabet ve kronik böbrek yetmezliği gibi yaşlılık dönemi hastalıkları için üniversite hastanesi ile entegre periyodik check-up programları.</li>
                    <li>🌬️ <strong>Yüksek Rakım ve Temiz Hava Avantajı:</strong> Şehrin sunduğu temiz hava kalitesi, yaşlılarda uyku apnesi ve solunum yolu direnci üzerinde pozitif etkiler sağlar.</li>
                    <li>🥗 <strong>Doğal Doğu Anadolu Diyeti:</strong> Bölgenin organik hayvansal ürünleri, otlu peyniri ve yayla balı ile hazırlanan, yaşlıların kemik sağlığını (kalsiyum) destekleyen doğal menüler.</li>
                    <li>🧠 <strong>Bilişsel Koruma ve Sosyal Bağlar:</strong> El sanatları, yöresel müzik etkinlikleri ve kuşaklararası iletişim projeleri ile Alzheimer ve Demans izolasyonunun engellenmesi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Van, yaşlılar için sağlık hizmetine en hızlı erişebilen Doğu illerinden biridir. <strong>Güçlü Yönü:</strong> Akademik sağlık kadrosunun yaşlı sağlığı konusundaki bilimsel hassasiyeti ve manevi bakım kültürüdür.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0432 215 04 71",
        tr: {
            hospName: "Van YYÜ FTR Birimi, Bölge Hastanesi Rehabilitasyon Merkezi & Özel Engelsiz Yaşam",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda Doğu Anadolu'nun en donanımlı merkezi; robotik cihazlar ve hidroterapi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 İleri Teknoloji ve Fonksiyonel Gelişim</h4>
                <p>Van'da rehabilitasyon süreci, hastanın günlük hayata bağımsız katılımını sağlamak amacıyla bilimsel kanıta dayalı yöntemlerle yönetilir.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon (İnme ve Felç):</strong> Uzman fizyoterapistler eşliğinde nöroplastisiteyi uyaran egzersiz protokolleri ve denge-koordinasyon eğitimleri.</li>
                    <li>⚙️ <strong>Modern Fizik Tedavi Envanteri:</strong> Yüksek yoğunluklu lazer terapi (HILT), elektroterapi ve vakum uygulamaları ile ağrı yönetimi ve doku iyileşmesi.</li>
                    <li>🦵 <strong>Ortopedik Mobilizasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi, kinezyotape ve terapötik egzersizler.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gecikmeler ve serebral palsi için özel duyu bütünleme salonları ve oyun terapisi destekli seanslar.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Van, rehabilitasyon alanında bölgenin en büyük kapasitesine sahiptir. <strong>Güçlü Yönü:</strong> Personel başına düşen tecrübe puanının vaka çeşitliliği nedeniyle çok yüksek olmasıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0432 210 10 10",
        tr: {
            hospName: "Elite World Van, DoubleTree by Hilton & Tarihi Van Hamamları",
            shortDesc: "🧖‍♂️ İpek Yolu üzerinde lüks arınma; modern SPA tesislerinde geleneksel Mezopotamya ve Anadolu ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Holistik Terapi</h4>
                <p>Van'da Wellness deneyimi, şehrin kozmopolit yapısı ve lüks otel yatırımlarıyla dünya standartlarındadır.</p>
                <ul>
                    <li>🧼 <strong>Geleneksel ve Modern Hamam:</strong> Mermer sıcaklığında yapılan profesyonel kese-köpük ritüelleri ile cildi toksinlerden arındıran derinlemesine temizlik.</li>
                    <li>💆 <strong>Dünya Masajları ve Aromaterapi:</strong> Uzakdoğu masajlarından medikal sırt masajlarına kadar, profesyonel terapistler eşliğinde sunulan stres giderici seanslar.</li>
                    <li>🧖‍♂️ <strong>Modern Isıl Alanlar:</strong> Van Gölü manzaralı dinlenme odaları, saunalar, buhar banyoları ve şok duşları ile sağlanan bağışıklık aktivasyonu.</li>
                    <li>😌 <strong>Detoks ve Cilt Bakımı:</strong> Yerel mineraller ve profesyonel kozmetik ürünlerle sunulan, cildi nemlendiren ve yenileyen maske uygulamaları.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Van'da SPA hizmeti, özellikle lüks iş ve turizm otelleri bünyesinde 'Kusursuz ve Hijyenik' bir standartta sunulmaktadır. Hizmet kalitesi, uluslararası misafir profilini memnun edecek düzeydedir.</p>
            </div>`
        }
    }
},
  "YOZGAT": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Yozgat Şehir Hastanesi Modern Bina Görünümü
            phone: "0354 210 10 10",
            tr: {
                hospName: "Yozgat Şehir Hastanesi",
                shortDesc: "🏥 Türkiye’nin ilk açılan Şehir Hastanesi; dijital hastane (HIMSS 7) tescilli ve yüksek teknoloji altyapılı merkez.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Dijital Sağlık ve Cerrahi Güç</h4>
                    <p>Yozgat, "Kağıtsız Hastane" konseptiyle Türkiye'nin en modern yönetim sistemlerinden birine sahiptir. Özellikle çevre illerden ve Avrupa'daki gurbetçi vatandaşlardan yoğun cerrahi talep almaktadır.</p>
                    
                    <h4>🩺 Cerrahi Yetkinlik Alanları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Anjiyo ünitesi ve bypass ameliyatlarında bölge halkı için güvenli bir merkez.</li>
                        <li>🧠 <strong>Beyin ve Sinir Cerrahisi:</strong> Bel ve boyun fıtığı operasyonları, travma cerrahisi ve mikrocerrahi müdahaleler.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Özellikle ileri yaş hastalarda kalça ve diz protezi operasyonları; artroskopik (kapalı) eklem cerrahisi.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Safra kesesi, mide küçültme ve onkolojik cerrahi süreçleri.</li>
                        <li>🦷 <strong>Diş Sağlığı Turizmi:</strong> Modern ağız ve diş sağlığı merkezi ile implant ve estetik diş hekimliğinde yükselen bir değer.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Yozgat, fiziksel bina ve cihaz teknolojisi açısından Türkiye'nin en iyilerindendir. Ancak çok ileri seviye çocuk onkolojisi veya nadir genetik hastalıkların cerrahisi için hastalar genellikle komşu il Kayseri veya Ankara'ya yönlendirilmektedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Sarıkaya Roma Hamamı veya Sorgun Termal Görseli
            phone: "0354 415 10 44", // Sorgun Termal Tesisleri
            tr: {
                hospName: "Sorgun ve Sarıkaya (Basilica Therma) Termal Kaynakları",
                shortDesc: "🌡️ UNESCO Dünya Mirası Geçici Listesi'ndeki 2000 yıllık 'Kral Kızı' antik termal suları.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Antik Çağdan Gelen Şifa</h4>
                    <p>Yozgat termal suları, yüksek mineralizasyona sahip (florürlü ve sülfatlı) yapısıyla dünya standartlarında "tıbbi su" kabul edilir.</p>
                    
                    <h4>🧪 Tedavi Edici Özellikler</h4>
                    <ul>
                        <li>🦴 <strong>Romatizmal Hastalıklar:</strong> Kronik eklem ağrıları, yumuşak doku romatizması ve kireçlenme tedavisi.</li>
                        <li>💪 <strong>Kas ve Sinir Sistemi:</strong> Nevralji, siyatik ve kas spazmlarının giderilmesi.</li>
                        <li>🩹 <strong>Dermatolojik Etki:</strong> Cilt üzerindeki sivilce, yara izleri ve hafif egzamalarda destekleyici iyileşme.</li>
                        <li>🧘 <strong>Metabolik Destek:</strong> Su içi egzersizlerle obezite ve diyabet kontrolü süreçlerine yardımcı.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Yozgat, termal turizmde "elmas" değerinde kaynaklara sahiptir. Sarıkaya'daki tarihi Roma Hamamı (Basilica Therma), dünyada içinden hala sıcak su çıkan iki antik hamamdan biridir.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Yozgat Huzurevi Yerleşkesi
            phone: "0354 212 11 39", // Yozgat Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Yozgat Alparslan Türkeş Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Bozkırın sakinliğinde, kalabalıktan uzak ve profesyonel tıbbi takipli yaşlı yaşam merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Geriatrik Bakım Yaklaşımı</h4>
                    <p>Yozgat, büyükşehirlerin gürültüsünden kaçmak isteyen yaşlılar için "sessizlik ve huzur" odaklı bir bakım imkanı sunar.</p>
                    <ul>
                        <li>🧠 <strong>Alzheimer ve Demans:</strong> Hastaların kaybolma riskine karşı güvenli mimari ve zihin egzersizleri.</li>
                        <li>💊 <strong>Sağlık Takibi:</strong> Şehir Hastanesi ile entegre çalışan sistem sayesinde hızlı tıbbi müdahale ve ilaç kontrolü.</li>
                        <li>🧑‍⚕️ <strong>Bakım ve Hijyen:</strong> Öz bakımını yapamayan yaşlılar için 24 saat kesintisiz profesyonel destek.</li>
                        <li>🎯 <strong>Psikososyal Faaliyetler:</strong> Yaşlıların moral seviyesini yüksek tutmak için düzenlenen el işi ve kültürel etkinlikler.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Yozgat bu alanda devlet yatırımlarıyla güçlüdür; ancak özel lüks huzurevi konsepti (premium segment) henüz çok yaygın değildir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Modern FTR Salonu
            phone: "0354 210 10 10",
            tr: {
                hospName: "Yozgat Şehir Hastanesi Fizik Tedavi ve Rehabilitasyon Ünitesi",
                shortDesc: "♿ Robotik rehabilitasyon ve hidroterapi ile engelli bireyler için ileri düzey iyileşme merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fonksiyonel Rehabilitasyon Hizmetleri</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Felç (inme) ve travmatik beyin hasarı sonrası yürüme ve kavrama yetisi kazandırma.</li>
                        <li>⚙️ <strong>Robotik Yürüme:</strong> Yozgat Şehir Hastanesi bünyesinde bulunan modern robotik rehabilitasyon cihazları.</li>
                        <li>🌊 <strong>Hidroterapi:</strong> Termal suyun gücüyle havuz içi fizik tedavi seansları.</li>
                        <li>🦴 <strong>Ortopedik Destek:</strong> Kırık ve ameliyat sonrası eklem açıklığı egzersizleri.</li>
                    </ul>

                    <h4>🌟 Bölgesel Avantaj</h4>
                    <p>Yozgat, rehabilitasyon alanında sadece kendi halkına değil, çevre illerdeki engelli bireylere de en yüksek teknolojik cihazlarla hizmet vermektedir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Sorgun Termal Otel Spa Görseli
            phone: "0354 415 10 44",
            tr: {
                hospName: "Sorgun Wellness & Termal Spa Merkezleri",
                shortDesc: "🧖‍♂️ Termal suyun lüks otel konforu ve geleneksel terapi ile birleştiği nokta.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Wellness ve Detoks</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Termal Spa Deneyimi:</strong> Sauna, buhar odası ve şifalı havuz seansları.</li>
                        <li>💆 <strong>Vücut Terapileri:</strong> Sıcak taş masajı, medikal sırt masajı ve rahatlatıcı yağ terapileri.</li>
                        <li>😌 <strong>Anti-Stres:</strong> Şehrin karmaşasından uzak, termal su eşliğinde zihinsel detoks programları.</li>
                    </ul>

                    <h4>➡️ Sektörel Analiz</h4>
                    <p>Yozgat'ta SPA sektörü Sorgun bölgesinde yoğunlaşmıştır. Afyon veya Antalya kadar büyük tesis sayısı olmasa da, sunulan hizmet kalitesi oldukça samimi ve profesyoneldir.</p>
                </div>`
            }
        }
    },
   "ZONGULDAK": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0372 261 20 00",
        tr: {
            hospName: "ZBEÜ Sağlık Uygulama ve Araştırma Merkezi & Zonguldak Atatürk Devlet Hastanesi",
            shortDesc: "🏥 Batı Karadeniz'in akademik cerrahi kalesi; ileri düzey göğüs cerrahisi, onkoloji kompleksi ve hibrit ameliyathaneler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Derinlik ve Endüstriyel Tıp Uzmanlığı</h4>
                <p>Zonguldak, ağır sanayi ve madencilik geçmişi nedeniyle "Toraks (Göğüs) ve Akciğer" cerrahisinde Türkiye'nin en spesifik veri setine ve vaka tecrübesine sahip illerinden biridir. Üniversite hastanesi, bölge illeri için (Bartın, Karabük) nihai cerrahi çözüm merkezidir.</p>
                <ul>
                    <li>🫁 <strong>İleri Göğüs Cerrahisi (Torasik):</strong> Akciğer kanserleri, amfizem cerrahisi ve VATS (Video Yardımlı Torakoskopik Cerrahi) yöntemlerinde bölgenin lideri; endüstriyel maruziyete bağlı akciğer patolojilerinde yüksek cerrahi başarı.</li>
                    <li>☢️ <strong>Onkoloji ve Radyoterapi Enstitüsü:</strong> IMRT, VMAT ve stereotaktik radyoterapi cihazlarıyla donatılmış, Karadeniz hattının en gelişmiş kanser tedavi merkezlerinden biri; kemoterapi ünitelerinde kişiselleştirilmiş dozajlama.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC):</strong> Koroner arter bypass (CABG), kapak tamirleri ve periferik damar cerrahisinde 24 saat aktif acil müdahale ve hibrit ameliyathane desteği.</li>
                    <li>🧠 <strong>Mikro-Nöroşirürji:</strong> Beyin tümörleri, spinal (omurga) cerrahi ve nörolojik travma yönetiminde mikroskop eşliğinde yüksek hassasiyetli operasyonlar.</li>
                    <li>🦴 <strong>Ortopedik Rekonstrüksiyon:</strong> Maden ve sanayi kazaları kaynaklı kompleks travma cerrahisi, el cerrahisi (mikro-cerrahi) ve protez uygulamalarında devasa vaka deneyimi.</li>
                    <li>🩸 <strong>Üroloji ve Nefroloji Entegrasyonu:</strong> Böbrek taşı cerrahisinde lazer (RIRS) uygulamaları, üro-onkolojik ameliyatlar ve diyaliz destekli cerrahi süreç yönetimi.</li>
                    <li>🦷 <strong>ZBEÜ Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, implantoloji, çocuk diş sağlığı ve dijital diş hekimliği laboratuvarları ile akademik tedavi protokolleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Konum ve Bölgesel Erişilebilirlik</h4>
                <p>Zonguldak, yeni yapılan tüneller ve karayolu bağlantılarıyla Batı Karadeniz'in "Sağlık Lojistik Üssü" haline gelmiştir. Filyos Projesi ile artan nüfus projeksiyonuna uygun olarak cerrahi yatak kapasitesi ve yoğun bakım üniteleri son 3 yılda %40 oranında artırılmıştır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Göğüs hastalıkları ve göğüs cerrahisinde Türkiye'nin en iyi birkaç merkezinden biridir. Akademik kadronun yerleşik ve tecrübeli olması cerrahi güvenliği artırır. <strong>Eksik Yönü:</strong> Şehirdeki coğrafi yapı nedeniyle hastane yerleşkelerine ulaşımda eğimli yollar bulunsa da yeni Atatürk Devlet Hastanesi sahil bandındaki konumuyla bu sorunu minimize etmiştir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0372 312 21 11", 
        tr: {
            hospName: "Zonguldak Ilıksu Kaplıcaları & Kozlu Mineralli Su Kaynakları",
            shortDesc: "🌡️ Batı Karadeniz'in mineralli suları; sodyum ve kalsiyum dengesiyle eklem ağrıları ve deri sağlığı için doğal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Minerolojik Su Analizi ve Hidroterapi Etkisi</h4>
                <p>Zonguldak Ilıksu bölgesi, özellikle romatizmal ağrılar ve deri lezyonları üzerinde etkili olan mineral kompozisyonu ile tanınır.</p>
                <ul>
                    <li>🧪 <strong>Sodyum ve Bikarbonatlı Yapı:</strong> Suyun pH dengesi ve mineral yoğunluğu, kronik bel ve boyun ağrılarında kas gevşetici ve inflamasyon azaltıcı etki sağlar.</li>
                    <li>🦴 <strong>Kas-İskelet Sistemi Rehabilitasyonu:</strong> 35°C - 38°C arasındaki ideal sıcaklık; osteoartrit (kireçlenme) ve yumuşak doku romatizmalarında mobilizasyonu kolaylaştırır.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Tedavi:</strong> Suyun hafif kükürtlü yapısı, akne ve bazı egzama türlerinde cildi yatıştırıcı ve yenileyici özellik taşır.</li>
                    <li>🌬️ <strong>Mağara Terapisi (Speleoterapi) Potansiyeli:</strong> Zonguldak'taki mağaraların nem ve sıcaklık dengesinin, termal kürlerle birleştiğinde solunum yolları üzerinde (astım, bronşit) yarattığı ferahlatıcı etki.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Zonguldak'ta termal turizm "Butik" bir seviyededir. Ilıksu bölgesi daha ziyade yerel halk ve günübirlik şifa arayanlar tarafından tercih edilir. Doğa ile iç içe olması, psikolojik rahatlama için büyük avantajdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0372 253 11 05", 
        tr: {
            hospName: "Zonguldak Huzurevi Yaşlı Bakım Merkezi & ZBEÜ Geriatri Polikliniği",
            shortDesc: "👴 Karadeniz'in iyot kokulu havasında, akademik gözetim altında güvenli yaşlanma; ileri düzey kronik hastalık takibi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzmanlaşmış Geriatrik Bakım ve Sosyal Entegrasyon</h4>
                <p>Zonguldak, yaşlı nüfusun sosyal haklarını ve sağlık erişimini önceleyen, "Emeğin Emekliliği"ne saygı duyan bir şehir kültürü üzerine kuruludur.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik Check-Up ve İzlem:</strong> Üniversite hastanesi bünyesindeki uzmanlarca yönetilen; polifarmasi (çoklu ilaç kullanımı) yönetimi ve düşme riski değerlendirmeleri.</li>
                    <li>🌊 <strong>Deniz Havası ve İyot Terapisi:</strong> Sahil şeridindeki yerleşkelerin sunduğu temiz hava; yaşlılarda solunum konforunu artırırken, uyku kalitesini pozitif etkiler.</li>
                    <li>🥗 <strong>Doğal ve Dengeli Beslenme:</strong> Karadeniz'in taze ürünleri ve yöresel sebzelerle (pırasa, lahana vb.) hazırlanan, sindirim sistemini yormayan diyet programları.</li>
                    <li>🧠 <strong>Bilişsel Koruma ve El Sanatları:</strong> Madenci feneri yapımı, örgü ve yerel tarih söyleşileri ile zihinsel zindeliği koruyan, Alzheimer karşıtı sosyal aktiviteler.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Zonguldak, tıp fakültesinin varlığı sayesinde yaşlılar için "En Güvenli" illerden biridir. Herhangi bir sağlık krizinde Türkiye'nin en iyi hocalarına dakikalar içinde ulaşım imkanı en büyük güvencedir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0372 261 20 00",
        tr: {
            hospName: "ZBEÜ FTR Eğitim Birimi & Uzunmehmet Göğüs Hastalıkları FTR Ünitesi",
            shortDesc: "♿ Nörolojik, ortopedik ve pulmoner (solunum) rehabilitasyonda uzmanlaşmış kadro; cihaz destekli mobilite eğitimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Pulmoner Rehabilitasyon ve Fonksiyonel Geri Kazanım</h4>
                <p>Zonguldak'ta rehabilitasyon denilince akla sadece fiziksel hareket değil, aynı zamanda akciğer kapasitesinin artırılması gelir. Bu alanda Türkiye'nin en spesifik rehabilitasyon modelleri burada uygulanır.</p>
                <ul>
                    <li>🌬️ <strong>Pulmoner (Solunum) Rehabilitasyon:</strong> KOAH, astım ve maden tozuna bağlı akciğer kısıtlılıklarında solunum kaslarını güçlendiren, oksijen saturasyonunu artıran özel egzersiz seansları.</li>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme (felç) ve omurilik yaralanmalarında uzman fizyoterapistler eşliğinde yürütülen denge, yürüme ve koordinasyon terapileri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> Yeni nesil TENS, ultrason ve vakum cihazları ile kronik kas ağrılarının ve spazmların giderilmesi.</li>
                    <li>🦵 <strong>Ortopedik Manuel Terapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik, birebir fizyoterapist eşliğinde yapılan spesifik mobilizasyon teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Gelişimsel bozukluğu olan çocuklar için duyu bütünleme ve motor beceri geliştirme odaklı profesyonel birimler.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Zonguldak, "Solunum Yolları Rehabilitasyonu" konusunda tartışmasız bir otoritedir. <strong>Güçlü Yönü:</strong> Akademik birikim ile klinik tecrübenin mükemmel sentezidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0372 210 10 10",
        tr: {
            hospName: "Dedeman Zonguldak, Bab-ı Zer & Şehir Hamamları",
            shortDesc: "🧖‍♂️ Deniz manzaralı Wellness deneyimi; modern SPA olanakları ve geleneksel Türk hamamı ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Ruhsal Dinginlik</h4>
                <p>Zonguldak'ta Wellness, Karadeniz'in hırçın dalgalarını izlerken ruhu ve bedeni dinlendiren lüks duraklardır.</p>
                <ul>
                    <li>🧼 <strong>Geleneksel Hamam Kültürü:</strong> Hijyenik ve ferah ortamlarda sunulan kese-köpük ritüelleri ile tam vücut detoksu ve deri yenilenmesi.</li>
                    <li>💆 <strong>Aromaterapi ve Medikal Masajlar:</strong> Günün yorgunluğunu atan, profesyonel terapistler eşliğinde sunulan kas gevşetici ve stres giderici masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Gözenekleri açan, dolaşımı hızlandıran ve bağışıklığı destekleyen ısıl alanlar.</li>
                    <li>😌 <strong>Deniz Manzaralı Terapi:</strong> Otellerin konumlanması sayesinde, seans sonrası sunulan 'Mavi Terapi' ile mental arınma.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Zonguldak'ta SPA hizmeti, şehrin sahil şeridindeki lüks iş otelleri bünyesinde 'Kaliteli ve Standart' bir hizmet olarak sunulmaktadır. Özellikle deniz manzaralı dinlenme alanları, bölgedeki en büyük farktır.</p>
            </div>`
        }
    }
},
   "AKSARAY": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Aksaray Şehir Hastanesi Modern Mimari
            phone: "0382 502 20 00",
            tr: {
                hospName: "Aksaray Üniversitesi Eğitim ve Araştırma Hastanesi (Şehir Hastanesi)",
                shortDesc: "🏥 'Akıllı Hastane' konseptiyle donatılmış, uluslararası sağlık turizmi yetki belgesine sahip bölge merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ İleri Teknoloji ve Cerrahi Çeşitlilik</h4>
                    <p>Aksaray, üniversite-şehir hastanesi iş birliği sayesinde cerrahi alanda İç Anadolu'nun en hızlı yükselen şehirlerinden biridir.</p>
                    
                    <h4>🩺 Cerrahi ve Estetik Odak Noktaları</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyovasküler Cerrahi:</strong> Modern anjiyo laboratuvarları ve açık kalp ameliyatları (bypass) rutin olarak gerçekleştirilmektedir.</li>
                        <li>🦷 <strong>Dental Turizm (Diş):</strong> Aksaray Üniversitesi Diş Hekimliği Fakültesi ve donanımlı özel klinikler sayesinde implant, estetik lamine ve zirkonyum uygulamalarında bölge lideridir.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi ve Estetik:</strong> Özellikle gurbetçi vatandaşların yoğun olduğu yaz aylarında, uluslararası standartlarda saç ekimi ve rinoplasti (burun estetiği) hizmetleri sunulmaktadır.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Travma cerrahisi ve robotik destekli diz/kalça protez ameliyatlarında yüksek başarı oranları.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Obezite cerrahisi (tüp mide), metabolik cerrahi ve kapalı yöntem onkolojik ameliyatlar.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Aksaray, donanım olarak birçok büyükşehri geride bırakmıştır. Ancak çocuk kalp damar cerrahisi gibi çok ileri düzey pediatrik yan dal operasyonları için hastalar hala Ankara'daki referans merkezlere yönlendirilebilmektedir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Ziga Kaplıcaları ve Ihlara Vadisi Termal Görseli
            phone: "0382 453 71 50", // Ziga Termal Tesisleri
            tr: {
                hospName: "Ihlara ve Ziga Termal Kaplıca Tesisleri",
                shortDesc: "🌡️ 47°C sıcaklıktaki zengin mineralli suyuyla, Ihlara Vadisi'nin dibinde binlerce yıllık şifa kaynağı.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Hasandağı’nın Şifalı Dokunuşu</h4>
                    <p>Ziga Kaplıcaları, kalsiyum, magnezyum ve klorür içeren yapısıyla 'tıbbi tedavi edici su' kategorisinde üst sıralardadır.</p>
                    
                    <h4>🧪 Medikal Kullanım Alanları</h4>
                    <ul>
                        <li>🦴 <strong>Kas ve İskelet:</strong> Kronik romatizma, kireçlenme, eklem ağrıları ve siyatik tedavisinde etkili banyo kürleri.</li>
                        <li>🩹 <strong>Cilt ve Gençleşme:</strong> Mineral yapısının yüksekliği sayesinde akne, egzama ve deri döküntülerinde iyileştirici etki.</li>
                        <li>🫁 <strong>Nörolojik Dinlenme:</strong> Suyun doğal yatıştırıcı etkisiyle stres yönetimi ve uykusuzluk tedavisi.</li>
                        <li>💪 <strong>Ameliyat Sonrası:</strong> Hareket kısıtlılığı olan hastaların su içi rehabilitasyon süreçleri.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Durum</h4>
                    <p>Aksaray'da termal turizm, Ihlara Vadisi turizmiyle entegre edilmiştir. Tesisler genellikle doğa ile iç içe olup, hem kültür gezisi hem de sağlık kürü yapmak isteyenler için idealdir.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Aksaray Yaşlı Bakım Merkezi Sosyal Alan
            phone: "0382 215 11 65", // Aksaray Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Aksaray A. Kadir Üçyıldız Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Modern mimarisi ve profesyonel geriatri ekibiyle, yaşlı bireyler için güvenli ve sosyal bir yaşam kompleksi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Profesyonel Geriatrik Takip</h4>
                    <p>Aksaray, düz ayak şehir yapısı ve ulaşım kolaylığı sayesinde yaşlı bireyler için İç Anadolu'nun en rahat şehirlerinden biridir.</p>
                    <ul>
                        <li>🧠 <strong>Bilişsel Koruma:</strong> Alzheimer ve demans hastalarına yönelik zihinsel egzersizler ve yüksek güvenlikli takip.</li>
                        <li>💊 <strong>Sağlık Koordinasyonu:</strong> Şehir Hastanesi ile kurulan dijital bağ sayesinde kronik hastalıkların ve tahlillerin düzenli takibi.</li>
                        <li>🧑‍⚕️ <strong>Profesyonel Bakım:</strong> Kişisel hijyen, beslenme yönetimi ve moral motivasyon seansları.</li>
                        <li>🎯 <strong>Fiziksel Aktivite:</strong> Yaşlıların mobilite yeteneğini korumak için fizyoterapist eşliğinde hafif egzersizler.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Aksaray, yaşlı bakımında kamu imkanlarıyla öne çıkar. Ancak gurbetçi nüfusun yoğunluğu nedeniyle özel evde bakım hizmetlerine olan talep yüksek, arz ise henüz gelişim aşamasındadır.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Fizik Tedavi Salonu
            phone: "0382 502 20 00",
            tr: {
                hospName: "Aksaray Şehir Hastanesi Fizik Tedavi ve Rehabilitasyon Merkezi",
                shortDesc: "♿ Robotik rehabilitasyon ve yataklı fizik tedavi imkanlarıyla bölgenin en gelişmiş FTR ünitesi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 İleri Rehabilitasyon Teknikleri</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (felç), omurilik yaralanmaları ve beyin hasarı sonrası yoğun hareket terapisi.</li>
                        <li>⚙️ <strong>Robotik Yürüme:</strong> Yürüme robotu ve denge analiz üniteleri ile teknolojik iyileşme desteği.</li>
                        <li>🌊 <strong>Hidroterapi:</strong> Kaplıca sularının fizik tedaviye entegre edilmesiyle yapılan su içi rehabilitasyon.</li>
                        <li>🦴 <strong>Ortopedik FTR:</strong> Ameliyat sonrası eklem açıklığı ve kas güçlendirme odaklı özel seanslar.</li>
                    </ul>

                    <h4>🌟 Stratejik Avantaj</h4>
                    <p>Aksaray, rehabilitasyon cihaz parkuru bakımından Türkiye'nin en yeni teknolojilerine sahip hastanelerinden birine sahiptir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Aksaray Termal Otel Spa Bölümü
            phone: "0382 453 71 50", // Grand Çakıroğlu veya Ziga Tesisleri
            tr: {
                hospName: "Aksaray Termal Spa & Wellness Tesisleri",
                shortDesc: "🧖‍♂️ Tarihi ipek yolu üzerinde, bedensel ve ruhsal arınma vaat eden wellness merkezleri.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Geleneksel Arınma ve Modern Wellness</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Termal Spa Deneyimi:</strong> Geleneksel Osmanlı hamamı, sauna, buhar odaları ve şifa havuzları.</li>
                        <li>💆 <strong>Vücut Terapileri:</strong> Sıcak volkanik taş masajı, aromatik yağ terapileri ve deniz yosunu cilt bakımları.</li>
                        <li>😌 <strong>Zihinsel Detoks:</strong> Ihlara Vadisi'nin doğal dinginliğiyle birleşen stres yönetim programları.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Aksaray'da SPA kültürü daha çok "terapi" odaklıdır. Kapadokya bölgesinin girişinde olması nedeniyle lüks otel konseptindeki wellness hizmetleri her geçen gün artmaktadır.</p>
                </div>`
            }
        }
    },
   "BAYBURT": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0458 211 91 91",
        tr: {
            hospName: "Bayburt Devlet Hastanesi & Bayburt Üniversitesi Sağlık Hizmetleri Birimi",
            shortDesc: "🏥 Doğu Karadeniz'in butik ve teknolojik cerrahi üssü; modern ameliyathaneler, dijital görüntüleme ve kişiye özel bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Butik Cerrahi Yaklaşım ve Operasyonel Verimlilik</h4>
                <p>Bayburt, yeni hastane binasıyla birlikte tıbbi cihaz parkurunu tamamen yenilemiş bir şehirdir. Büyük şehirlerdeki kaotik yoğunluğun aksine, burada cerrahi süreçler 'Vip Standartlarında' ve sükunetle yönetilir.</p>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, fıtık ve apandis operasyonlarında %100 kapalı cerrahi (Laparoskopi) oranı; post-operatif (ameliyat sonrası) enfeksiyon riskinin minimize edildiği sterilizasyon altyapısı.</li>
                    <li>🦴 <strong>Ortopedik Travma ve Protez:</strong> Bölgedeki tarım ve hayvancılık faaliyetlerine bağlı gelişen travmalarda uzmanlaşmış; diz ve kalça protezlerinde kişiye özel rehabilitasyon destekli cerrahi protokoller.</li>
                    <li>🫀 <strong>Acil Kardiyolojik Müdahale:</strong> Akut vakalarda ilk stabilizasyon ve kritik müdahale birimleri; gelişmiş yoğun bakım monitörizasyonu ile hastanın hayati fonksiyonlarının 7/24 takibi.</li>
                    <li>🧠 <strong>Nörolojik Stabilizasyon ve Takip:</strong> İnme ve beyin damar hastalıklarında erken müdahale; nöroloji servisinde yüksek hemşirelik bakım kalitesi ve hastaya ayrılan uzun vizit süreleri.</li>
                    <li>🤱 <strong>Modern Doğum ve Pediatri:</strong> 'Anne Dostu Hastane' unvanıyla, ağrısız doğum seçenekleri ve yeni doğan takip ünitelerinde aile odaklı yaklaşım.</li>
                    <li>🩸 <strong>Üroloji ve Endoskopik Müdahaleler:</strong> Kesisiz taş kırma işlemleri ve modern ürolojik tanı-tedavi yöntemleri.</li>
                    <li>🦷 <strong>Bayburt Üniversitesi Diş Hekimliği:</strong> Akademik kadronun denetiminde; restoratif diş tedavisi, endodonti (kanal tedavisi) ve estetik diş hekimliği uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Güvenli Transfer</h4>
                <p>Bayburt, Erzurum ve Trabzon gibi tıp devlerinin tam ortasında yer alması sebebiyle 'Kritik Transfer Yönetimi' konusunda uzmanlaşmıştır. Çok ileri düzey vakalar için helikopter pisti ve donanımlı ambulans filosuyla tam koordinasyon sağlanır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin yeni olması, cihazların 'sıfır' kondisyonda bulunması ve doktor başına düşen hasta sayısının azlığıdır. Bu durum, hatasız tedavi sürecini destekler. <strong>Eksik Yönü:</strong> Çok ileri düzey onkolojik cerrahi (radyoterapi gibi) için hastalar genellikle komşu illere sevk edilse de temel ve orta düzey cerrahi branşlarda bölgenin en konforlu hizmetini sunar.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0458 211 32 32", 
        tr: {
            hospName: "Bayburt Karayaşmak (Sıcak Çermik) & Yerel Maden Suyu Kaynakları",
            shortDesc: "🌡️ Çoruh Vadisi'nin mineralli şifası; kükürt ve sodyum dengesiyle romatizmal ağrılara doğal çözüm.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Yapısı ve Tıbbi Etki</h4>
                <p>Bayburt'un jeotermal potansiyeli, Karadeniz ve Doğu Anadolu geçiş kuşağının sert mineral yapısını taşır.</p>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Bikarbonatlı Su:</strong> Karayaşmak bölgesindeki suların kükürt içeriği, kronik deri lezyonlarında ve üst solunum yolu enfeksiyonlarında destekleyici tedavi sunar.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Suyun doğal sıcaklığı; kireçlenme, siyatik ve kas spazmlarında doğal bir analjezik (ağrı kesici) etki yaratarak eklem hareketliliğini artırır.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Bakım:</strong> Suyun pH seviyesi, cildin doğal bariyerini destekleyerek akne ve egzama gibi durumlarda yatıştırıcı rol oynar.</li>
                    <li>🥤 <strong>Mineralli İçme Kürleri:</strong> Bölgedeki doğal maden sularının, sindirim sistemi fonksiyonlarını düzenleyici ve magnezyum eksikliğine bağlı krampları azaltıcı potansiyeli.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Bayburt'ta termal imkanlar daha çok 'Doğal ve Yerel' bir yapıdadır. Büyük tatil köylerinden ziyade, suyun mineral saflığını koruduğu butik noktalar bulunur. Gerçek bir 'Doğa Şifası' arayanlar için idealdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0458 211 11 05", 
        tr: {
            hospName: "Bayburt Huzurevi Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Çoruh'un sakinliğinde, kalabalıktan uzak bir emeklilik; düşük hava kirliliği ve yüksek medikal ilgi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Geriatrik Huzur ve İklimsel Avantaj</h4>
                <p>Bayburt, Türkiye'de suç oranının en düşük, sosyal güvenliğin ve yardımlaşma kültürünün en yüksek olduğu illerin başındadır; bu da yaşlılar için 'Psikolojik Güvenlik' demektir.</p>
                <ul>
                    <li>🏥 <strong>Hızlı Medikal Erişim:</strong> Şehrin butik yapısı sayesinde yaşlıların hastaneye ulaşımı ve poliklinik hizmeti alması 'Dakikalar' içinde gerçekleşir.</li>
                    <li>🌬️ <strong>Sıfır Hava Kirliliği:</strong> Sanayileşmenin olmaması ve yayla havasının etkisiyle; yaşlılarda kronik akciğer (KOAH) ve kalp rahatsızlıklarında semptomatik iyileşme.</li>
                    <li>🥗 <strong>Doğal Doğu Anadolu Gastronomisi:</strong> Bayburt'un meşhur balı, tereyağı ve bakliyatları ile hazırlanan; bağışıklık sistemini en üst düzeyde tutan organik beslenme düzeni.</li>
                    <li>🧠 <strong>Mental Zindelik ve Aidiyet:</strong> Geleneksel 'Kültür Evi' sohbetleri, el sanatları ve sosyal projelerle yaşlıların toplumdan izole olması engellenir.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bayburt, yaşlılar için gürültüden ve stresten 'Tam Arınma' noktasıdır. <strong>Güçlü Yönü:</strong> Yaşlı başına düşen sağlık personeli ve sosyal hizmet uzmanı ilgisinin çok yüksek olmasıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0458 211 91 91",
        tr: {
            hospName: "Bayburt Devlet Hastanesi FTR Birimi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik ve nörolojik vakalarda birebir ilgi; sakin ortamda yüksek motivasyonlu fizik tedavi seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Bireysel Odaklı Rehabilitasyon</h4>
                <p>Bayburt'ta rehabilitasyon, bir fabrikasyon süreç değil; her hastanın hikayesine özel olarak kurgulanan bir iyileşme yolculuğudur.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Geri Kazanım:</strong> İnme ve travma sonrası uzman fizyoterapistler eşliğinde denge, koordinasyon ve ince motor beceri geliştirme seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Modern ağrı kesici akımlar ve doku yenileyici ultrason üniteleri ile desteklenen medikal fizik tedavi.</li>
                    <li>🦵 <strong>Kineziterapi ve Egzersiz:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve fonksiyonel egzersiz protokolleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Gelişimsel geriliği olan çocuklar için birebir eğitim ve duyu bütünleme desteği veren profesyonel ekipler.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Bayburt, rehabilitasyonda 'Kaliteli Zaman' avantajına sahiptir. <strong>Güçlü Yönü:</strong> Hastaların fizyoterapistlerle kurduğu güçlü iletişim ve sabırlı tedavi sürecidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0458 210 10 10",
        tr: {
            hospName: "Bayburt Konaklama Tesisleri & Şehir Wellness Birimleri",
            shortDesc: "🧖‍♂️ Bozkırın ve dağların ortasında arınma; geleneksel Türk hamamı sıcaklığı ve sessizlik terapisi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Zihinsel Detoks</h4>
                <p>Bayburt'ta Wellness, sadece fiziksel bir bakım değil, şehrin sunduğu 'Sessizlik' ile birleşen bir ruhsal dinlenme sürecidir.</p>
                <ul>
                    <li>🧼 <strong>Klasik Hamam Deneyimi:</strong> Hijyenik şartlarda sunulan, cildi arındıran kese ve köpük masajı ritüelleri.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kas gerginliğini azaltan, dolaşımı hızlandıran ve günün yorgunluğunu alan profesyonel dokunuşlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odası:</strong> Toksin atılımını sağlayan ve vücut direncini artıran ısıl alanlar.</li>
                    <li>😌 <strong>Sessizlik Terapisi:</strong> Şehrin doğal huzuruyla birleşen, meditatif bir dinlenme ortamı.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bayburt'ta SPA hizmeti butik bir yapıdadır. Modern konaklama tesisleri bünyesinde sunulan bu hizmetler, özellikle şehre iş veya kültür gezisi için gelenler için tam bir yenilenme sağlar.</p>
            </div>`
        }
    }
},
 "KARAMAN": {
        surgery: {
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", // Karaman Eğitim ve Araştırma Hastanesi Modern Binası
            phone: "0338 226 33 00",
            tr: {
                hospName: "Karaman Eğitim ve Araştırma Hastanesi",
                shortDesc: "🏥 Karamanoğlu Mehmetbey Üniversitesi ile entegre, bölgenin cerrahi yükünü sırtlayan tam donanımlı tıp merkezi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#c0392b;">🏛️ Akademik Gelişim ve Cerrahi Kapasite</h4>
                    <p>Karaman, üniversite hastanesi statüsüne geçtikten sonra cerrahi branşlarda uzman akademisyen kadrosunu genişleterek çevre ilçeler için ana referans noktası haline gelmiştir.</p>
                    
                    <h4>🩺 Cerrahi, Diş ve Estetik Branşlar</h4>
                    <ul>
                        <li>❤️ <strong>Kardiyoloji ve KVC:</strong> Koroner anjiyografi, stent uygulamaları ve kalp pili takılması gibi kritik müdahaleler başarıyla yapılmaktadır.</li>
                        <li>🦷 <strong>Ağız ve Diş Sağlığı:</strong> Karaman Diş Hekimliği Fakültesi ve modern özel poliklinikler; implant, zirkonyum ve şeffaf plak (invisalign) tedavilerinde yüksek talep görmektedir.</li>
                        <li>💇‍♂️ <strong>Saç Ekimi:</strong> Konya ve Antalya'daki yoğunluğa alternatif olarak, Karaman'daki butik kliniklerde daha kişiselleştirilmiş ve uygun maliyetli saç ekimi paketleri sunulmaktadır.</li>
                        <li>🦴 <strong>Ortopedi:</strong> Artroskopik cerrahi (kapalı eklem ameliyatları) ve diz-kalça protezi operasyonlarında deneyimli kadro.</li>
                        <li>⚕️ <strong>Genel Cerrahi:</strong> Laparoskopik obezite cerrahisi, fıtık ve onkolojik batın ameliyatları.</li>
                    </ul>

                    <h4>⚠️ Dürüst Analiz</h4>
                    <p>Karaman, orta ve ileri seviye cerrahide büyük yol kat etmiştir. Ancak çok kompleks organ nakli süreçleri veya ileri evre pediatrik onkoloji vakaları için hastalar genellikle 1-1.5 saatlik mesafedeki Konya Şehir Hastanesi veya üniversite hastanelerine yönlendirilir.</p>
                </div>`
            }
        },
        thermal: {
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400", // Karaman Bölgesi Doğal Kaynak Suları
            phone: "0338 226 20 00", // Karaman Kültür ve Turizm Müdürlüğü
            tr: {
                hospName: "Karaman Çevre Kaplıca ve Mineral Kaynakları",
                shortDesc: "🌡️ Karadağ eteklerinden süzülen, mineral dengesiyle dinlendirici ve tedavi destekleyici doğal kaynaklar.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#2980b9;">♨️ Doğal Mineralli Suların Etkisi</h4>
                    <p>Karaman çevresindeki su kaynakları, sodyum bikarbonatlı yapılarıyla özellikle sindirim ve deri sağlığı üzerinde olumlu etkilere sahiptir.</p>
                    
                    <h4>🧪 Şifa Alanları</h4>
                    <ul>
                        <li>🦴 <strong>Kas Gevşetme:</strong> Günlük stres ve kas yorgunluğunu gidermeye yardımcı banyo kürleri.</li>
                        <li>🩹 <strong>Cilt Bakımı:</strong> Suyun doğal mineralleri sayesinde gözenek temizliği ve deri yüzeyindeki kronik kurulukların giderilmesi.</li>
                        <li>🧘 <strong>Metabolik Destek:</strong> İçme kürleri (doktor kontrolünde) ile sindirim sistemini düzenleyici etkiler.</li>
                    </ul>
                    
                    <h4>➡️ Sektörel Not</h4>
                    <p>Karaman, termal turizmde Afyon kadar büyük tesislere sahip değildir; ancak "ekolojik sağlık" ve "doğa ile iç içe tedavi" konseptinde butik bir potansiyel taşımaktadır.</p>
                </div>`
            }
        },
        elderly: {
            img: "https://images.unsplash.com/photo-1581578731522-745d051422f1?q=80&w=400", // Karaman Huzurevi Bahçesi
            phone: "0338 213 11 05", // Karaman Aile ve Sosyal Hizmetler
            tr: {
                hospName: "Karaman Dursun Fakih Huzurevi ve Yaşlı Bakım Merkezi",
                shortDesc: "👴 Türkçenin başkentinde, sessiz ve huzurlu bir ortamda profesyonel geriatrik bakım hizmeti.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#27ae60;">🧠 Profesyonel ve Şefkatli Bakım</h4>
                    <p>Karaman, düşük hava kirliliği ve sakin yaşam tarzıyla yaşlı bireylerin ömrünü uzatan bir mikro klimaya sahiptir.</p>
                    <ul>
                        <li>🧠 <strong>Alzheimer ve Demans Takibi:</strong> Güvenli yaşam alanları ve yaşlıların bilişsel seviyelerini korumaya yönelik sosyal hobiler.</li>
                        <li>💊 <strong>Sağlık Yönetimi:</strong> Eğitim ve Araştırma Hastanesi ile hızlı entegrasyon sayesinde kronik hastalıkların kesintisiz takibi.</li>
                        <li>🧑‍⚕️ <strong>Bakım Personeli:</strong> Sertifikalı hasta bakıcılar ile 7/24 kişisel hijyen ve beslenme desteği.</li>
                        <li>🎯 <strong>Geleneksel Sosyalleşme:</strong> Karaman’ın kültürel dokusuna uygun sohbet meclisleri ve el sanatları atölyeleri.</li>
                    </ul>

                    <h4>➡️ Dürüst Analiz</h4>
                    <p>Karaman'da yaşlı bakım hizmetleri "huzur" odaklıdır. Ancak çok lüks, 5 yıldızlı "yaşlı oteli" konseptindeki tesisler için talep komşu illere kayabilmektedir; kamu tesisleri ise oldukça disiplinlidir.</p>
                </div>`
            }
        },
        disabled: {
            img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400", // Karaman FTR Salonu
            phone: "0338 226 33 00",
            tr: {
                hospName: "Karaman Eğitim ve Araştırma Hastanesi FTR Ünitesi",
                shortDesc: "♿ Nörolojik ve ortopedik engelli bireyler için modern fizik tedavi cihazlarıyla donatılmış rehabilitasyon birimi.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#e67e22;">💪 Fiziksel Rehabilitasyon Süreçleri</h4>
                    <ul>
                        <li>♿ <strong>Nörolojik İyileşme:</strong> İnme, MS ve Parkinson gibi hastalıklarda kaybedilen hareket kabiliyetini geri kazandırma terapileri.</li>
                        <li>🦴 <strong>Post-Op Rehabilitasyon:</strong> Kalça ve diz ameliyatları sonrası hastaların hızlıca günlük hayata dönmesini sağlayan programlar.</li>
                        <li>⚙️ <strong>Elektroterapi ve Manuel Terapi:</strong> Kronik ağrı yönetimi ve kas güçlendirme odaklı seanslar.</li>
                        <li>🧒 <strong>Çocuk Rehabilitasyonu:</strong> Özel gereksinimli çocuklar için duyusal bütünleme ve fiziksel gelişim desteği.</li>
                    </ul>

                    <h4>🌟 Yerel Başarı</h4>
                    <p>Karaman, rehabilitasyon alanında bölge halkının tüm ihtiyaçlarını karşılayabilecek kapasitededir ve sevk oranlarını son yıllarda minimize etmiştir.</p>
                </div>`
            }
        },
        spa: {
            img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=400", // Karaman Otel Spa
            phone: "0338 221 02 02", // Grand Karaman Hotel Spa
            tr: {
                hospName: "Karaman Wellness & City Spa Merkezleri",
                shortDesc: "🧖‍♂️ Şehir merkezinde modern dinlenme alanları ve profesyonel masaj terapileri.",
                analysis: `
                <div class="analysis-content">
                    <h4 style="color:#8e44ad;">🌿 Şehirde Arınma ve Zindelik</h4>
                    <ul>
                        <li>🧖‍♂️ <strong>Hamam ve Sauna:</strong> Toksin atmaya ve kan dolaşımını hızlandırmaya yardımcı geleneksel ve modern seanslar.</li>
                        <li>💆 <strong>Terapötik Masajlar:</strong> Medikal masaj, İsveç masajı ve rahatlatıcı aromaterapi uygulamaları.</li>
                        <li>😌 <strong>Anti-Stres:</strong> Yoğun iş ve şehir hayatından kaçış için tasarlanmış sessiz dinlenme odaları.</li>
                    </ul>

                    <h4>➡️ Sektörel Not</h4>
                    <p>Karaman'da SPA sektörü daha çok şehir otelleri bünyesinde gelişim göstermektedir. Turistik bir deneyimden ziyade, sağlıklı yaşamı destekleyen "wellness" hizmeti ön plandadır.</p>
                </div>`
            }
        }
    },
 "KIRIKKALE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=400", 
        phone: "0318 333 50 00",
        tr: {
            hospName: "Kırıkkale Üniversitesi Tıp Fakültesi Hastanesi & Yüksek İhtisas Hastanesi",
            shortDesc: "🏥 İç Anadolu'nun travma ve acil cerrahi kalesi; akademik derinlik, ileri mikro-cerrahi ve savunma sanayi destekli medikal altyapı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Disiplin ve Travma Yönetimi</h4>
                <p>Kırıkkale, Türkiye'nin 'Kavşak Noktası' olması nedeniyle trafik kazaları ve endüstriyel yaralanmalarda (MKE) uzmanlaşmış, saniyelerle yarışan bir cerrahi kültüre sahiptir. Tıp fakültesinin varlığı, vakaların bilimsel protokollerle yönetilmesini sağlar.</p>
                <ul>
                    <li>⚕️ <strong>Onkolojik ve Gastrointestinal Cerrahi:</strong> Laparoskopik (kapalı) yöntemlerle mide, kolon ve pankreas cerrahisinde akademik uzmanlık; multidisipliner tümör konseyleri ile yönetilen kanser tedavileri.</li>
                    <li>🦴 <strong>İleri Ortopedi ve El Cerrahisi:</strong> Sanayi kazaları ve travmalar nedeniyle el cerrahisi, mikro-cerrahi doku nakilleri ve kompleks ekstremite rekonstrüksiyonlarında bölgenin referans merkezi.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC) & Anjiyo:</strong> 7/24 aktif koroner anjiyografi, stent uygulamaları ve açık kalp ameliyatlarında Ankara standartlarında girişimsel başarı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Spinal Stabilizasyon:</strong> Beyin kanamaları, kafa travmaları ve kompleks omurga cerrahisinde navigasyon destekli mikro-cerrahi operasyonlar.</li>
                    <li>🩸 <strong>Üroloji ve Taş Tedavisi:</strong> Lazerli taş kırma (RIRS), plazmakinetik prostat cerrahisi ve üro-onkolojik operasyonlarda modern klinik yaklaşımlar.</li>
                    <li>☢️ <strong>Nükleer Tıp ve Görüntüleme:</strong> PET-CT, sintigrafi ve ileri düzey MR/Tomografi üniteleri ile hatasız teşhis ve evreleme kapasitesi.</li>
                    <li>🦷 <strong>Kırıkkale Üniversitesi Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, implantoloji ve protez alanında 100'den fazla ünitede akademik tedavi hizmeti.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Konum ve Lojistik Güç</h4>
                <p>Kırıkkale, Ankara'ya sadece 75 km mesafede olması sayesinde başkentteki akademik bilgi akışına anlık erişim sağlar. 43 ilin geçiş noktasındaki konumu, hastaneyi ulusal bir 'Acil Müdahale İstasyonu' haline getirmiştir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Tıp Fakültesi'nin köklü olması ve hoca kadrosunun vaka çeşitliliği nedeniyle çok tecrübeli olmasıdır. Travma cerrahisinde Türkiye'nin en hızlı reaksiyon gösteren illerinden biridir. <strong>Eksik Yönü:</strong> Ankara'nın çok yakın olması bazen 'sevk' algısı yaratsa da mevcut altyapı en zor vakaları bile şehir içinde çözecek kapasitededir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0318 224 28 00", 
        tr: {
            hospName: "Haydar Sultan Kaplıcaları & Kırıkkale Şifalı Kaynaklar",
            shortDesc: "🌡️ Tarihi dokuda mineral şifası; kükürtlü ve mineralli yapısıyla eklem ve deri hastalıklarına doğal destek.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Fiziko-Kimyasal Su Analizi ve Tıbbi Etki</h4>
                <p>Kırıkkale'nin termal potansiyeli, özellikle Haydar Sultan bölgesindeki kükürtlü ve bikarbonatlı sularla karakterize edilir.</p>
                <ul>
                    <li>🧪 <strong>Kükürtlü Su Karakteristiği:</strong> Suyun doğal kükürt içeriği, deri hastalıklarında (egzama, akne) antiseptik ve yenileyici bir etki sağlar.</li>
                    <li>🦴 <strong>Romatizmal Rehabilitasyon:</strong> 37°C - 42°C arasındaki ideal su sıcaklığı; eklem kireçlenmeleri, yumuşak doku romatizması ve kas spazmlarında doğal gevşetici rol oynar.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Bakım:</strong> Suyun mineralli yapısı, deri altı dolaşımını hızlandırarak doku onarımını destekler.</li>
                    <li>🥤 <strong>Sindirim ve Metabolizma:</strong> İçme kürleri (doktor tavsiyesiyle) mide asidini dengeleyici ve bağırsak hareketliliğini düzenleyici potansiyele sahiptir.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Kırıkkale'de termal tesisleşme daha ziyade 'Yerel Şifa' odaklıdır. Tarihi Roma dönemine kadar uzanan bu kaynaklar, modern tıbbın fizik tedavi yöntemleriyle birleştirildiğinde yüksek başarı sağlar.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0318 212 11 05", 
        tr: {
            hospName: "Kırıkkale Huzurevi Yaşlı Bakım Merkezi & Tıp Fakültesi Geriatri Birimi",
            shortDesc: "👴 Başkent Ankara'nın gölgesinde, akademik denetimde huzurlu yaşlanma; kronik hastalıkların bilimsel takibi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Akademik Geriatrik Takip ve Yaşam Kalitesi</h4>
                <p>Kırıkkale, yaşlı bakımında tıp fakültesi desteğiyle 'Kanıta Dayalı Geriatri' modelini uygular.</p>
                <ul>
                    <li>🏥 <strong>Multidisipliner Yaşlı Sağlığı:</strong> Dahiliye, nöroloji ve psikiyatri uzmanlarının koordineli çalışmasıyla Alzheimer, diyabet ve hipertansiyon gibi kronik süreçlerin 7/24 takibi.</li>
                    <li>🥗 <strong>Doğal İç Anadolu Beslenmesi:</strong> Bölgenin organik tahıl ve bakliyat ürünleriyle hazırlanan, yaşlıların sindirim ve bağışıklık sistemini destekleyen özel menüler.</li>
                    <li>🌬️ <strong>Sakin Yaşam Alanları:</strong> Şehrin karmaşasından uzak, yeşil alanlara erişimi kolay lokasyonlarda sosyal izolasyonun engellenmesi.</li>
                    <li>🧠 <strong>Mental Aktivite ve Sosyalleşme:</strong> El sanatları kursları, kitap okuma günleri ve kuşaklararası etkileşim projeleri ile zihinsel zindeliğin korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kırıkkale, Ankara'daki tüm sağlık imkanlarına 'B Planı' olarak sahip olup, aynı zamanda küçük bir şehrin samimiyetini sunar. <strong>Güçlü Yönü:</strong> Yaşlıların her türlü tıbbi ihtiyacında üniversite hastanesi hocalarına hızlı erişim imkanıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0318 333 50 00",
        tr: {
            hospName: "Kırıkkale Üniversitesi FTR Merkezi & Yüksek İhtisas Rehabilitasyon Ünitesi",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda uzmanlaşmış akademik kadro; manuel terapi ve cihazlı rehabilitasyon.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Gelişim ve Nöro-Rehabilitasyon</h4>
                <p>Kırıkkale'de rehabilitasyon süreci, hastanın günlük hayatına en kısa sürede dönmesi üzerine kurulu 'Yoğun Terapi' protokollerinden oluşur.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon (İnme ve Felç):</strong> Nöroplastisiteyi uyaran spesifik egzersizler, denge tahtası eğitimleri ve uzman fizyoterapist eşliğinde yürütülen seanslar.</li>
                    <li>⚙️ <strong>Gelişmiş Fizik Tedavi Envanteri:</strong> Ultrason, lazer, TENS ve traksiyon cihazları ile ağrı yönetimi ve doku iyileşmesinin hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik kanıta dayalı manuel teknikler ve güçlendirme egzersizleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Serebral Palsi ve gelişimsel geriliği olan çocuklar için duyu bütünleme ve motor gelişim odaklı profesyonel birimler.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kırıkkale, fizik tedavide 'Akademik Güvence' arayanlar için İç Anadolu'daki en sağlam adreslerden biridir. <strong>Güçlü Yönü:</strong> Teşhis ve tedavi sürecindeki bilimsel titizliktir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0318 212 10 10",
        tr: {
            hospName: "Enar Otel Spa & Kırıkkale Şehir Wellness Birimleri",
            shortDesc: "🧖‍♂️ Modern ve ferah ortamlarda arınma; geleneksel Türk hamamı ve günün stresini atan SPA ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Bedensel Rahatlama</h4>
                <p>Kırıkkale'de Wellness, özellikle yoğun iş temposu ve seyahat yorgunluğunu atan 'Butik ve Kaliteli' bir deneyimdir.</p>
                <ul>
                    <li>🧼 <strong>Hamam Ritüelleri:</strong> Hijyenik şartlarda sunulan kese-köpük masajları ile cildi ölü deriden arındıran derinlemesine temizlik.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kas gerginliğini azaltan, dolaşımı hızlandıran ve ruhsal ferahlık sağlayan profesyonel masaj uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Alanları:</strong> Toksin atılımını sağlayan ve vücut direncini artıran ısıl dinlenme alanları.</li>
                    <li>😌 <strong>Anti-Stress Uygulamaları:</strong> Huzurlu bir atmosferde sunulan zihinsel ve bedensel dinlenme kürleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kırıkkale'de SPA hizmeti, şehrin lüks konaklama tesisleri bünyesinde 'Standart ve Güvenilir' bir şekilde sunulmaktadır. Özellikle kavşak noktasında mola verenler için ideal bir yenilenme noktasıdır.</p>
            </div>`
        }
    }
},
 "BATMAN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0488 221 30 66",
        tr: {
            hospName: "Batman Eğitim ve Araştırma Hastanesi & Batman İluh Devlet Hastanesi",
            shortDesc: "🏥 Güneydoğu'nun en yeni ve modern cerrahi komplekslerinden biri; 20+ ameliyathane, hibrit üniteler ve ileri düzey yoğun bakım.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Kapasiteli Cerrahi ve Modern Tanı Altyapısı</h4>
                <p>Batman, özellikle son 5 yılda yapılan sağlık yatırımlarıyla bölgenin en modern 'Fiziksel Altyapısına' sahip illerinden biri haline gelmiştir. Yeni Eğitim ve Araştırma Hastanesi, akıllı bina teknolojisi ve dijital cerrahi entegrasyonu ile donatılmıştır.</p>
                <ul>
                    <li>⚕️ <strong>Minimal İnvaziv (Kapalı) Cerrahi:</strong> Laparoskopik yöntemlerle yapılan obezite cerrahisi, onkolojik batın ameliyatları ve ileri düzey fıtık onarımlarında bölge liderliği.</li>
                    <li>🫀 <strong>İleri Girişimsel Kardiyoloji:</strong> İki ayrı anjiyo laboratuvarı ile 7/24 kesintisiz stent, balon ve kalp pili uygulamaları; periferik damar cerrahisinde yüksek başarı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Travma Yönetimi:</strong> Beyin tümörleri, spinal (omurga) stabilizasyon ve kafa travmalarında mikro-cerrahi yöntemlerle müdahale kapasitesi.</li>
                    <li>🦴 <strong>Ortopedi ve Artroplasti:</strong> Diz ve kalça protezleri, spor yaralanmaları cerrahisi (artroskopi) ve kompleks kırık yönetiminde uzmanlaşmış geniş cerrahi kadro.</li>
                    <li>☢️ <strong>Onkoloji Kompleksi:</strong> Tıbbi onkoloji ve radyoterapi birimlerinin koordineli çalışması; yeni nesil görüntüleme cihazlarıyla (MR, BT) hızlı tanı ve evreleme.</li>
                    <li>🤱 <strong>Perinatoloji ve Yenidoğan:</strong> Bölgenin yüksek doğum hızı nedeniyle 100 yatağa yaklaşan yenidoğan yoğun bakım kapasitesi ve riskli gebeliklerin uzman takibi.</li>
                    <li>🦷 <strong>Batman Ağız ve Diş Sağlığı Merkezi:</strong> Protez, kanal tedavisi ve cerrahi çekimlerde 50'den fazla ünite ile modern diş hekimliği hizmetleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Bölgesel Çekim</h4>
                <p>Batman, Siirt, Mardin ve Şırnak gibi çevre illerden gelen hastalar için bir 'Tampon Bölge' görevi görür. Şehirdeki özel hastane yoğunluğu, kamu üzerindeki yükü dengelerken medikal rekabetin tedavi kalitesini artırmasını sağlamıştır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastane binalarının ve tıbbi cihazların (MR, Tomografi vb.) çok yeni ve güncel olmasıdır. Fiziksel konfor seviyesi Türkiye standartlarının üzerindedir. <strong>Eksik Yönü:</strong> Hızlı nüfus artışı nedeniyle polikliniklerde yoğunluk yaşanabilmektedir; ancak cerrahi randevu süreçleri benzer büyüklükteki illere göre daha akışkandır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0488 431 21 00", 
        tr: {
            hospName: "Batman Kozluk (Taslıdere) Kaplıcaları & Sason Şifalı Kaynaklar",
            shortDesc: "🌡️ Mezopotamya'nın yer altı hazinesi; yüksek mineral yoğunluğuyla romatizmal ve nörolojik şifa merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Hidrotermal Su Analizi ve Tıbbi Endikasyonlar</h4>
                <p>Batman'ın en önemli termal kaynağı olan Kozluk-Taslıdere bölgesi, 40°C - 45°C sıcaklığı ve yüksek mineralizasyonu ile doğal bir eczane gibidir.</p>
                <ul>
                    <li>🧪 <strong>Mineralli Su Karakteri:</strong> Sodyum, kalsiyum ve klorürce zengin yapı; özellikle eklem iltihapları ve kronik ağrı sendromlarında (fibromiyalji) etkili.</li>
                    <li>🦴 <strong>Kas ve Eklem Sistemi:</strong> Kireçlenme, romatoid artrit (remisyon dönemi) ve bel/boyun fıtığına bağlı kas spazmlarında doğal gevşetici ve ağrı kesici kürler.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Tedavi:</strong> Suyun mineral yapısı, deri bariyerini güçlendirerek sedef ve egzama gibi kronik cilt sorunlarında semptomatik iyileşme sağlar.</li>
                    <li>🛀 <strong>Rehabilitasyon Desteği:</strong> Ameliyat sonrası eklem kısıtlılıklarında su içi egzersizlerle (hidroterapi) fonksiyonel hareket açıklığının artırılması.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Batman'daki termal kaynaklar 'Ham Şifa' gücü açısından çok yüksektir. Tesisleşme süreci devam etmekte olup, doğallık ve yüksek mineral kalitesi arayan hastalar için Güneydoğu'daki en önemli duraklardan biridir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0488 213 11 05", 
        tr: {
            hospName: "Batman Huzurevi Yaşlı Bakım Merkezi & EAH Geriatri İzlem Birimi",
            shortDesc: "👴 Geleneksel aile bağlarının modern bakımla buluştuğu nokta; ileri düzey medikal takip ve sosyal huzur.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Yaşlı Bakımı ve Sosyal Refah</h4>
                <p>Batman, yaşlıya verilen 'Ahi' kültürü temelli hürmet ile modern geriatri bilimini entegre eden bir sosyal yapıya sahiptir.</p>
                <ul>
                    <li>🏥 <strong>Kronik Hastalık Yönetimi:</strong> Diyabet, tansiyon ve kalp yetmezliği olan yaşlılar için yeni Eğitim ve Araştırma Hastanesi ile entegre, hızlı erişim sağlayan takip sistemleri.</li>
                    <li>🥗 <strong>Mezopotamya Diyeti:</strong> Bölgenin doğal ürünleriyle (fıstık, ceviz, yerel zeytinyağı ve bakliyat) hazırlanan, yaşlıların bilişsel fonksiyonlarını destekleyen omega-zengin beslenme programları.</li>
                    <li>☀️ <strong>D Vitamini ve İklim:</strong> Yılın büyük bölümünde güneşli olan iklimi sayesinde kemik sağlığını koruyan doğal D vitamini sentezi avantajı.</li>
                    <li>🧠 <strong>Mental Aktivite:</strong> Batman'ın zengin kültürel dokusuna uygun el sanatları, okuma köşeleri ve yerel müzik (dengbej) dinletileri ile sağlanan psikososyal destek.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Batman, yaşlı bakımında 'Genç ve Dinamik' bir personel kadrosuna sahiptir. <strong>Güçlü Yönü:</strong> Şehirdeki yeni sağlık tesislerinin yaşlılar için sunduğu fiziksel erişilebilirlik ve modern konfor standartlarıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0488 221 30 66",
        tr: {
            hospName: "Batman EAH FTR Merkezi & Özel Engelsiz Yaşam ve Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda uzmanlaşmış birimler; robotik cihaz destekli fizik tedavi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Geri Kazanım ve Modern Terapi</h4>
                <p>Batman'da rehabilitasyon hizmetleri, hastanın bağımsızlığını maksimum seviyeye çıkarmayı hedefleyen bilimsel protokollerle yürütülür.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon (İnme ve MS):</strong> Sinir sistemi hasarları sonrası uzman fizyoterapistler eşliğinde yürütülen denge, yürüme ve ince motor beceri eğitimleri.</li>
                    <li>⚙️ <strong>Gelişmiş Fizik Tedavi Envanteri:</strong> Elektroterapi, ultrason ve traksiyon üniteleri ile ağrı yönetimi ve doku iyileşmesinin hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat veya travma sonrası eklem kısıtlılıklarını gidermeye yönelik manuel mobilizasyon ve güçlendirme egzersizleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme odaları ve oyun terapisi destekli seanslar.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Batman, rehabilitasyon alanında bölgenin en donanımlı cihaz parkurlarından birine sahiptir. <strong>Güçlü Yönü:</strong> Özel ve kamu rehabilitasyon merkezlerinin yaygınlığı sayesinde hastaların tedaviye beklemeden erişebilmesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0488 213 10 10",
        tr: {
            hospName: "Real Konak Hotel Spa, Mesopotamya Hotel Wellness & Batman Termal Tesisleri",
            shortDesc: "🧖‍♂️ Modern Mezopotamya konforunda arınma; geleneksel Türk hamamı ritüelleri ve bütünsel SPA terapileri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Şehir Detoksu</h4>
                <p>Batman'da Wellness deneyimi, şehrin modern yüzünü temsil eden lüks oteller bünyesinde 'Hijyen ve Konfor' odaklı sunulmaktadır.</p>
                <ul>
                    <li>🧼 <strong>Hamam Ritüelleri:</strong> Geleneksel kese-köpük masajları ile cildi toksinlerden arındıran derinlemesine temizlik seansları.</li>
                    <li>💆 <strong>Aromaterapi ve Medikal Masajlar:</strong> Profesyonel terapistler eşliğinde, kas gerginliğini azaltan ve kan dolaşımını hızlandıran masaj uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Solunum yollarını ferahlatan, bağışıklığı destekleyen ve vücut ısısını dengeleyen ısıl alanlar.</li>
                    <li>😌 <strong>Anti-Stress Programları:</strong> Huzurlu atmosferlerde sunulan, zihinsel dinginlik ve bedensel rahatlama sağlayan Wellness paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Batman'da SPA hizmeti, özellikle iş dünyası ve turistler için 'Üst Düzey Standartlarda' sunulmaktadır. Otel bünyesindeki tesisler, hijyen ve profesyonel hizmet anlamında oldukça iddialıdır.</p>
            </div>`
        }
    }
},
  "SIRNAK": {
    surgery: {
        img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=400", 
        phone: "0486 216 10 32",
        tr: {
            hospName: "Şırnak Devlet Hastanesi, Cizre Dr. Selahattin Cizrelioğlu Devlet Hastanesi & Silopi Devlet",
            shortDesc: "🏥 Sınır hattının en stratejik cerrahi ağı; ileri travma yönetimi, kurşunlanma ve patlama cerrahisi uzmanlığı ve lojistik acil tıp.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Ekstrem Travma Cerrahisi ve Kritik Acil Yönetimi</h4>
                <p>Şırnak, coğrafi ve stratejik konumu nedeniyle 'Saha Tıbbı' ve 'Ekstrem Travma Cerrahisi' konularında Türkiye'nin en tecrübeli cerrah kadrolarına ev sahipliği yapar. Özellikle patlama ve ateşli silah yaralanmalarında 'Hasar Kontrol Cerrahisi' (Damage Control Surgery) protokolleri dünya standartlarında uygulanır.</p>
                <ul>
                    <li>🦴 <strong>İleri Ortopedi ve Rekonstrüksiyon:</strong> Mayın ve patlama kaynaklı ekstremite kayıplarında replantasyon denemeleri, kompleks kırıkların fiksasyonu ve ateşli silah yaralanmaları sonrası doku onarımı.</li>
                    <li>⚕️ <strong>Genel ve Toraks Cerrahisi:</strong> Penetran (delici) göğüs ve karın yaralanmalarında saniyelerle yarışan müdahale kapasitesi; diyafram rüptürleri ve büyük damar yaralanmalarında yüksek operasyonel hız.</li>
                    <li>🧠 <strong>Nöroşirürji (Travma Odaklı):</strong> Kafa içi basınç takibi, dekompresif kraniektomi ve spinal stabilizasyon operasyonlarında 7/24 aktif uzman desteği.</li>
                    <li>🫀 <strong>Acil Stabilizasyon ve KVC:</strong> Vasküler (damar) yaralanmalarda kanama kontrolü ve greft uygulamaları ile hastanın hayati fonksiyonlarının korunması.</li>
                    <li>🤱 <strong>Yenidoğan ve Pediatri:</strong> Bölgenin demografik yapısı gereği yüksek kapasiteli yenidoğan yoğun bakım üniteleri (Level 3) ve pediatrik acil servis entegrasyonu.</li>
                    <li>☢️ <strong>Modern Görüntüleme ve Triyaj:</strong> Multislice Tomografi ve hızlı MR üniteleri ile travma hastalarında dakikalar içinde tam vücut taraması ve teşhis.</li>
                    <li>🦷 <strong>Şırnak Ağız ve Diş Sağlığı Merkezi:</strong> Maksillofasiyal (çene-yüz) travma cerrahisi ve genel diş hekimliği uygulamalarında modern ünitelerle hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Lojistik Güç ve Sınır Ötesi Referans</h4>
                <p>Şırnak, Habur Sınır Kapısı'na yakınlığı nedeniyle Kuzey Irak'tan gelen ağır vakaların ilk kabul merkezidir. Hava ambulansı ve helikopter pisti kullanımı, şehrin zorlu coğrafyasını sağlık erişimi açısından 'Düz bir ovaya' çevirmektedir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Acil tıp ve travma cerrahisinde cerrahların vaka görme sıklığı çok yüksektir; bu da operasyonel hızı artırır. <strong>Eksik Yönü:</strong> Elektif (isteğe bağlı/acil olmayan) bazı yan dal polikliniklerinde doktor sirkülasyonu yaşanabilse de ana cerrahi ve hayati branşlar tam kapasite çalışır.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0486 528 20 10", 
        tr: {
            hospName: "Belkıs Ana (Hesta) Kaplıcaları & Güçlükonak Kaplıca Kaynakları",
            shortDesc: "🌡️ Mezopotamya'nın en sıcak şifası; 60°C üzerindeki kükürtlü sularla kronik eklem ve deri hastalıkları tedavisi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Volkanik Kökenli Hiper-Termal Su Analizi</h4>
                <p>Şırnak'ın Güçlükonak bölgesinde yer alan Hesta kaplıcaları, Türkiye'nin 'En Yüksek Sıcaklıklı' ve 'En Yoğun Mineralli' sularından birine sahiptir.</p>
                <ul>
                    <li>🧪 <strong>Yüksek Kükürt ve Sülfat Oranı:</strong> Suyun doğal kükürt yoğunluğu, deri altı enfeksiyonlarını temizleyici ve hücre yenileyici (anti-aging) etkiye sahiptir.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kireçlenme, romatoid artrit ve kronik bel ağrılarında yüksek ısının (doktor kontrolünde) sağladığı derin doku gevşemesi ve ağrı eliminasyonu.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Antiseptik:</strong> Uyuz, mantar ve inatçı egzama gibi deri hastalıklarında suyun yüksek mineralli yapısının kurutucu ve onarıcı etkisi.</li>
                    <li>🛀 <strong>Nörolojik Rahatlama:</strong> Kas spazmları ve sinir sıkışmalarında termal banyoların kas tonusunu düzenleyici ve sedatif (sakinleştirici) rolü.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Belkıs Ana Kaplıcaları, binlerce yıldır kullanılan kadim bir şifa merkezidir. Tesisleşme daha çok yerel ve geleneksel yapıdadır. Su kalitesi bakımından dünyadaki sayılı 'Hiper-Termal' kaynaklar arasındadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0486 216 11 05", 
        tr: {
            hospName: "Şırnak Huzurevi Yaşlı Bakım Merkezi & Devlet Hastanesi Geriatri Masası",
            shortDesc: "👴 Mezopotamya kültürüyle harmanlanmış saygın yaşlanma; sınır ötesi sessizlikte güvenli medikal takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Geleneksel Bağlar ve Yaşam Kalitesi</h4>
                <p>Şırnak'ta yaşlılık, toplumun en saygın mertebesi olarak görülür. Sağlık sistemi, yaşlıların hastaneye gitmesine gerek kalmadan evde bakım hizmetlerini de güçlü tutar.</p>
                <ul>
                    <li>🏥 <strong>Evde Sağlık Hizmetleri Ağı:</strong> Şehrin her noktasına ulaşan mobil ekiplerle yaşlıların rutin kontrolleri, pansumanları ve ilaç takipleri kapıda yapılır.</li>
                    <li>🥗 <strong>Doğal Mezopotamya Gastronomisi:</strong> Bölgenin organik hayvansal gıdaları, doğal otları ve balı ile hazırlanan, kemik sağlığını destekleyen yüksek proteinli menüler.</li>
                    <li>🌬️ <strong>Yayla Havası ve Temiz Oksijen:</strong> Yüksek rakımlı bölgelerin sunduğu temiz hava, yaşlılarda solunum yolları direncini artırır ve kalp sağlığını destekler.</li>
                    <li>🧠 <strong>Bilişsel Koruma ve Sözlü Kültür:</strong> Hikaye anlatıcılığı (Dengbejlik kültürü) ve sosyal etkileşim projeleriyle Alzheimer ve yalnızlık riskinin azaltılması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Şırnak, yaşlılar için "Sıcak ve Ailevi" bir bakım ortamı sunar. <strong>Güçlü Yönü:</strong> Sağlık personelinin yaşlı hastalara karşı gösterdiği yüksek empati ve manevi değerlere saygılı hizmettir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0486 216 10 32",
        tr: {
            hospName: "Şırnak FTR Birimi & Cizre Fizik Tedavi ve Rehabilitasyon Merkezi",
            shortDesc: "♿ Travma sonrası fiziksel geri kazanımda uzmanlaşmış kadro; manuel terapi ve fonksiyonel egzersiz seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Mobilizasyon ve Travma Sonrası Gelişim</h4>
                <p>Şırnak'ta rehabilitasyon, özellikle cerrahi sonrası uzuv fonksiyonlarını geri kazandırmaya yönelik 'Agresif ve Etkili' protokoller içerir.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> Omurilik yaralanmaları ve inme sonrası denge, koordinasyon ve yürüme eğitimleri; uzman fizyoterapistler eşliğinde nöroplastisite çalışmaları.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Ağrı yönetimi, kas stimülasyonu ve ödem azaltıcı modern cihazlarla desteklenen medikal fizik tedavi süreci.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Eklem kısıtlılıklarını gidermeye yönelik uzman eşliğinde yapılan spesifik mobilizasyon ve güçlendirme hareketleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Gelişimsel geriliği olan çocuklar için duyu bütünleme ve motor gelişim odaklı profesyonel birimler.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Şırnak, rehabilitasyon alanında bölgenin en tecrübeli ekiplerinden birine sahiptir. <strong>Güçlü Yönü:</strong> Travmatik vakaların takibinde gösterilen yüksek disiplin ve birebir ilgi düzeyidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0486 216 10 10",
        tr: {
            hospName: "Şırnak Konaklama Tesisleri & Geleneksel Şehir Hamamları",
            shortDesc: "🧖‍♂️ Mezopotamya sıcağında arınma; geleneksel hamam ritüelleri ve sessizlik terapisi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Yerel Arınma Ritüelleri</h4>
                <p>Şırnak'ta Wellness deneyimi, Mezopotamya'nın binlerce yıllık hamam kültürüyle modern dinlenme ihtiyacını birleştirir.</p>
                <ul>
                    <li>🧼 <strong>Klasik Hamam Deneyimi:</strong> Hijyenik mermer sıcaklığında yapılan kese-köpük ritüelleri ile tam vücut detoksu ve deri yenilenmesi.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kas gerginliğini azaltan, dolaşımı hızlandıran ve ruhsal ferahlık sağlayan profesyonel dokunuşlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Toksin atılımını sağlayan ve vücut ısısını dengeleyen ısıl alanlar.</li>
                    <li>😌 <strong>Sessizlik Terapisi:</strong> Şehrin sakin ve doğal atmosferinde sunulan, zihinsel dinginlik odaklı Wellness paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Şırnak'ta SPA hizmeti butik ve geleneksel bir yapıdadır. Modern konaklama tesisleri bünyesinde sunulan bu hizmetler, özellikle şehre iş veya seyahat için gelenler için tam bir yenilenme sağlar.</p>
            </div>`
        }
    }
},
  "BARTIN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=400", 
        phone: "0378 227 15 51",
        tr: {
            hospName: "Bartın Devlet Hastanesi & Bartın Üniversitesi Sağlık Hizmetleri Yüksekokulu",
            shortDesc: "🏥 Batı Karadeniz'in modern cerrahi durağı; teknolojik ameliyathaneler, ileri görüntüleme ve butik hasta bakım hizmetleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Modern Cerrahi Envanter ve Klinik Yetkinlik</h4>
                <p>Bartın, son yıllarda sağlık altyapısına yapılan yatırımlarla kendi kendine yetebilen bir cerrahi ekosistem oluşturmuştur. Hastane bünyesindeki dijital entegrasyon, cerrahi başarı oranlarını artırmaktadır.</p>
                <ul>
                    <li>⚕️ <strong>Laparoskopik ve Endoskopik Cerrahi:</strong> Safra kesesi, fıtık ve gastrointestinal sistem operasyonlarında %90'ın üzerinde kapalı cerrahi başarısı; minimal invaziv yaklaşımla hızlı iyileşme süreleri.</li>
                    <li>🦴 <strong>Ortopedi ve Artroskopik Müdahaleler:</strong> Spor yaralanmaları, menisküs ve ön çapraz bağ cerrahisinde modern artroskopi üniteleri; yaşlı nüfusa yönelik başarılı kalça ve diz protezi uygulamaları.</li>
                    <li>🫀 <strong>Kardiyoloji ve Koroner İzlem:</strong> Akut miyokard enfarktüsü (kalp krizi) vakalarında hızlı stabilizasyon ve yoğun bakım desteği; dijital ekokardiyografi ve efor laboratuvarları.</li>
                    <li>🧠 <strong>Nöroloji ve İnme Yönetimi:</strong> Akut inme vakalarında trombolitik tedavi kapasitesi ve nörolojik rehabilitasyonun cerrahi süreçle entegrasyonu.</li>
                    <li>🤱 <strong>Modern Kadın Doğum Ünitesi:</strong> SDL (Sancı-Doğum-Lohusa) odalarıyla desteklenen konforlu doğum süreci ve pediatrik takip birimleri.</li>
                    <li>🩸 <strong>Üroloji ve Taş Kırma:</strong> Lazerli taş müdahaleleri ve endo-ürolojik operasyonlarda geniş vaka deneyimi.</li>
                    <li>🦷 <strong>Bartın Ağız ve Diş Sağlığı Merkezi:</strong> Restoratif tedaviler, periodontoloji ve protez alanında uzmanlaşmış klinik kadro ve modern sterilizasyon üniteleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Coğrafi Konum ve Şifa Havzası</h4>
                <p>Bartın, çevresindeki Kastamonu, Zonguldak ve Karabük üçgeninde 'Huzurlu ve Erişilebilir' bir sağlık durağıdır. Deniz kıyısındaki Amasra ve İnkumu gibi lokasyonlar, cerrahi sonrası iyileşme dönemi (konvalesans) için doğal bir terapi alanı sunar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin fiziksel yeniliği ve hasta başına düşen hemşire oranının yüksekliğidir. Butik hizmet anlayışı, hastaların kendini özel hissetmesini sağlar. <strong>Eksik Yönü:</strong> Çok ileri düzey transplantasyon (organ nakli) gibi işlemler için Ankara veya Zonguldak Bülent Ecevit Üniversitesi'ne sevk yapılsa da genel cerrahi branşlarda tam yetkindir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0378 227 10 10", 
        tr: {
            hospName: "Bartın Şifalı Su Kaynakları & Bölgesel Jeotermal Etüd Alanları",
            shortDesc: "🌡️ Karadeniz'in yeşil örtüsü altında mineralli sular; deri sağlığı ve eklem rahatlaması için butik kaynaklar.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Hidro-Minerolojik Yapı ve Doğal Destek</h4>
                <p>Bartın ve çevresindeki su kaynakları, bölgenin yoğun yağış ve orman yapısıyla süzülen, mineral dengesi korunmuş saf kaynaklardır.</p>
                <ul>
                    <li>🧪 <strong>Mineralli Su Karakteristiği:</strong> Hafif kükürtlü ve bikarbonatlı yapı; cilt bariyerini güçlendirici ve yüzeysel dolaşımı hızlandırıcı etki.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Termal banyoların kas spazmlarını çözücü, kronik eklem ağrılarını hafifletici ve hareket kabiliyetini artırıcı rolü.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Rahatlama:</strong> Suyun pH dengesi sayesinde atopik dermatit ve kuru cilt sorunlarında yatıştırıcı sonuçlar.</li>
                    <li>🌬️ <strong>Doğa ve Su Sentezi:</strong> Suyun şifasını, bölgenin yüksek oksijenli orman havasıyla birleştiren 'Klimaterapi' avantajı.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Bartın'da termal imkanlar büyük tesislerden ziyade butik ve doğal formdadır. Doğallık arayan ve kalabalıktan kaçan 'Sağlık Turistleri' için gizli bir hazinedir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0378 228 11 05", 
        tr: {
            hospName: "Bartın Huzurevi Yaşlı Bakım Merkezi & 75. Yıl Yaşlı Bakım Evi",
            shortDesc: "👴 Denizin ve ormanın buluştuğu noktada sakin bir emeklilik; Karadeniz havasında uzun ve sağlıklı yaşam.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 İyot ve Oksijen Destekli Yaşlı Bakımı</h4>
                <p>Bartın, yaşlılar için Türkiye'nin en ideal yaşam alanlarından biridir. Nem dengesi ve bitki örtüsü, özellikle solunum sorunu yaşayan yaşlılar için doğal bir ilaç gibidir.</p>
                <ul>
                    <li>🏥 <strong>Kronik Hastalık Takibi:</strong> Diyabet ve tansiyon hastaları için aile sağlığı merkezleri ve hastane koordinasyonunda yürütülen düzenli izlem programları.</li>
                    <li>🥗 <strong>Doğal Karadeniz Gastronomisi:</strong> Bölgenin taze balığı, mısır ekmeği ve orman meyveleriyle (böğürtlen, kuşburnu) desteklenen antioksidan zengini beslenme düzeni.</li>
                    <li>🌊 <strong>Mavi ve Yeşil Terapi:</strong> Amasra sahil şeridinde yapılan yürüyüşlerin yaşlılarda kardiyovasküler dayanıklılığı ve ruhsal sağlığı pozitif etkilemesi.</li>
                    <li>🧠 <strong>Sosyal Etkileşim:</strong> Geleneksel el sanatları (Tel kırma), ahşap oymacılığı ve yerel pazarlar aracılığıyla sağlanan mental aktivite ve aidiyet hissi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Bartın, yaşlılar için "Huzur ve Güven" demektir. <strong>Güçlü Yönü:</strong> Şehirdeki yaşam temposunun yavaşlığı ve hava kalitesinin yaşlı sağlığı üzerindeki tartışmasız pozitif etkisidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0378 227 15 51",
        tr: {
            hospName: "Bartın Devlet Hastanesi FTR Ünitesi & Özel Özel Eğitim ve Rehabilitasyon",
            shortDesc: "♿ Nörolojik ve ortopedik rehabilitasyonda uzmanlaşmış birimler; su ve doğa destekli iyileşme protokolleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Bütünsel Fonksiyonel Rehabilitasyon</h4>
                <p>Bartın'da rehabilitasyon, sadece fiziksel hareket değil, hastanın sosyal yaşama adaptasyonunu sağlayan kapsamlı bir süreçtir.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Geri Kazanım:</strong> İnme ve spinal yaralanmalar sonrası uzman fizyoterapistler eşliğinde denge, koordinasyon ve yürüme eğitimleri.</li>
                    <li>⚙️ <strong>Modern Fizik Tedavi Cihazları:</strong> Elektroterapi, vakum ve tens üniteleri ile ağrı yönetimi ve fonksiyonel kas stimülasyonu.</li>
                    <li>🦵 <strong>Kineziterapi ve Egzersiz:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi teknikleri ve kişiye özel egzersiz reçeteleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme çalışmaları ve aile eğitimleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Bartın, rehabilitasyon hizmetlerinde 'Birebir İlgi' avantajına sahiptir. <strong>Güçlü Yönü:</strong> Terapistlerin hastalarla kurduğu uzun süreli ve güven odaklı tedavi ilişkisidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0378 315 10 10",
        tr: {
            hospName: "Amasra Otel Spa, Northdoor Wellness & Şehir Hamamları",
            shortDesc: "🧖‍♂️ Tarihi Amasra manzarasında arınma; deniz havası eşliğinde modern SPA ve hamam deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Ruhsal Yenilenme</h4>
                <p>Bartın'da Wellness deneyimi, özellikle Amasra'nın eşsiz gün batımı ve deniz manzarasıyla birleşen 'Mavi Terapi' niteliğindedir.</p>
                <ul>
                    <li>🧼 <strong>Hamam Kültürü:</strong> Hijyenik ve estetik ortamlarda sunulan kese-köpük ritüelleri ile cildi yenileyen geleneksel arınma.</li>
                    <li>💆 <strong>Aromaterapi ve Deniz Tuzu Masajları:</strong> Yerel deniz mineralleriyle desteklenen, kas gerginliğini azaltan ve ruhu dinlendiren masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odaları:</strong> Toksin atılımını hızlandıran, bağışıklığı güçlendiren ve vücudu rahatlatan ısıl alanlar.</li>
                    <li>😌 <strong>Stress-Free Alanlar:</strong> Doğanın içinde sessizlik ve huzur odaklı dinlenme köşeleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Bartın'da SPA hizmeti, özellikle Amasra'daki butik ve lüks oteller bünyesinde 'Yüksek Estetik ve Konfor' standartlarında sunulmaktadır. Bölgeye gelen turistler için vazgeçilmez bir rahatlama noktasıdır.</p>
            </div>`
        }
    }
},
  "ARDAHAN": {
    surgery: {
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400", 
        phone: "0478 211 30 10",
        tr: {
            hospName: "Ardahan Devlet Hastanesi & Göle Devlet Hastanesi",
            shortDesc: "🏥 Kafkasya sınır hattının butik cerrahi merkezi; kış şartlarına dayanıklı acil tıp altyapısı ve yenilenmiş ameliyathaneler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Ekstrem İklim Tıbbı ve Cerrahi Dayanıklılık</h4>
                <p>Ardahan, rakımı ve sert kış koşulları nedeniyle 'Hipotermi Yönetimi' ve 'Donma Vakaları' konusunda spesifik bir tıbbi tecrübeye sahiptir. Hastane altyapısı, dış ortam -40 dereceye düşse dahi cerrahi süreçlerin kesintisiz sürmesini sağlayacak iklimlendirme ve jeneratör sistemleriyle donatılmıştır.</p>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Müdahaleler:</strong> Batın içi operasyonlarda kapalı (laparoskopik) tekniklerin %85 oranında kullanımı; safra kesesi, apandis ve herni (fıtık) onarımlarında başarılı klinik sonuçlar.</li>
                    <li>🦴 <strong>Ortopedik Travma ve Stabilizasyon:</strong> Buzlanmaya bağlı düşmeler ve trafik kazaları kaynaklı ekstremite kırıklarında hızlı fiksasyon; eklem içi enjeksiyonlar ve artroskopik yaklaşımlar.</li>
                    <li>🫀 <strong>Kardiyovasküler Destek Birimi:</strong> Soğuk havanın tetiklediği akut koroner sendromlarda ilk müdahale ve trombolitik tedavi kapasitesi; gelişmiş yoğun bakım ünitelerinde vital fonksiyon takibi.</li>
                    <li>🧠 <strong>Nörolojik Gözlem ve İnme Yönetimi:</strong> Beyin damar tıkanıklıklarında kritik ilk saat müdahalesi; kronik nörolojik hastalıkların takibi ve medikal tedavi optimizasyonu.</li>
                    <li>🤱 <strong>Modern Doğum ve Pediatri:</strong> Isı regülasyonlu yenidoğan üniteleri ve anne dostu hastane standartlarında yürütülen pediatrik cerrahi öncesi hazırlıklar.</li>
                    <li>🩸 <strong>Üroloji ve Nefroloji:</strong> Taş cerrahisinde endoskopik yöntemler ve bölgedeki böbrek hastalıkları prevalansına (yaygınlığına) yönelik nefrolojik takip birimleri.</li>
                    <li>🦷 <strong>Ardahan Ağız ve Diş Sağlığı:</strong> Protez ünitesi, cerrahi çekimler ve çocuk diş hekimliği alanında modern medikal ekipmanlar ile kesintisiz hizmet.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Sınır Lojistiği</h4>
                <p>Ardahan, Çıldır-Aktaş ve Posof-Türkgözü sınır kapılarıyla Gürcistan'a açılan bir kapıdır. Bu durum, hastaneyi uluslararası bir 'Acil Transfer İstasyonu' haline getirir. Helikopter pisti, ağır kış şartlarında Erzurum tıp merkezlerine vaka transferi için hayati önem taşır.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin yeni olması, cihazların güncelliği ve butik yapısı sayesinde hastaya ayrılan vaktin uzunluğudur. <strong>Eksik Yönü:</strong> Çok ileri düzey onkolojik cerrahi (radyoterapi gibi) için hastalar Erzurum Atatürk Üniversitesi'ne sevk edilse de, temel cerrahi branşlarda bölge halkına tam kapasite hizmet verir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0478 211 32 32", 
        tr: {
            hospName: "Ardahan Şifalı Maden Suları & Yerel Jeotermal Kaynaklar",
            shortDesc: "🌡️ Yüksek platolardan süzülen mineralli şifa; saf su yapısı ve kükürt dengesiyle doğal arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Kristalize Su Yapısı ve Minerolojik Analiz</h4>
                <p>Ardahan'ın su kaynakları, endüstriyel kirlilikten tamamen uzak, volkanik toprak yapısından süzülen yüksek mineralli sularla karakterizedir.</p>
                <ul>
                    <li>🧪 <strong>Zengin Bikarbonatlı Yapı:</strong> Sindirim sistemi fonksiyonlarını destekleyen, mide asidini dengeleyen doğal maden suyu kaynakları (içme kürleri).</li>
                    <li>🦴 <strong>Romatizmal Rahatlama:</strong> Suyun doğal sıcaklığı ve mineral kompozisyonu; kireçlenme ve kronik eklem ağrılarında inflamasyon azaltıcı etki sağlar.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Saflık:</strong> Patojensiz su yapısı sayesinde alerjik reaksiyon gösteren ciltlerde yatıştırıcı ve temizleyici etki.</li>
                    <li>🌬️ <strong>Klimaterapi Avantajı:</strong> Suyun şifasını, bölgenin 2000+ rakımlı temiz havasıyla birleştiren bütünsel bir 'Doğal İyileşme' süreci.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Ardahan'da termal tesisleşme henüz butik seviyededir. Ancak suyun saflığı ve bölgenin bakir doğası, gerçek bir 'Detoks' arayanlar için rakipsizdir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0478 211 11 05", 
        tr: {
            hospName: "Ardahan Huzurevi Yaşlı Bakım Merkezi & Evde Sağlık Birimleri",
            shortDesc: "👴 Doğu'nun zirvesinde, Kafkas kültürüyle saygın yaşlanma; organik beslenme ve sıkı medikal takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Uzun Yaşam ve Organik Geriatri Modeli</h4>
                <p>Ardahan, Türkiye'de 'Asırlık Çınarların' (100 yaş üzeri nüfus) en yoğun olduğu bölgelerden biridir. Bu durum, bölgenin beslenme ve hava kalitesinin bir sonucudur.</p>
                <ul>
                    <li>🏥 <strong>Evde Sağlık ve Mobil İzlem:</strong> Coğrafi uzaklık nedeniyle köylere kadar ulaşan mobil ekiplerle yaşlıların tansiyon, şeker ve ilaç takiplerinin yapılması.</li>
                    <li>🐝 <strong>Kafkas Balı ve Propolis Desteği:</strong> Bağışıklık sistemini en üst düzeyde tutan, yaşlılarda mevsimsel enfeksiyon riskini azaltan doğal süper-gıdalarla beslenme.</li>
                    <li>🥗 <strong>Doğal Hayvancılık ve Süt Ürünleri:</strong> Mera hayvancılığından gelen yüksek proteinli ve kalsiyum zengini gıdalarla kemik sağlığının (osteoporoz) korunması.</li>
                    <li>🧠 <strong>Mental Zindelik ve Aidiyet:</strong> Geleneksel hikaye anlatıcılığı ve geniş aile yapısı içinde yaşlıların sosyal olarak aktif tutulması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Ardahan, yaşlılar için "Sağlıklı ve Uzun Ömür" vaat eden bir şehirdir. <strong>Güçlü Yönü:</strong> Geleneksel saygı kültürü ile devletin sağladığı hızlı medikal erişimin harmanlanmasıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0478 211 30 10",
        tr: {
            hospName: "Ardahan Devlet Hastanesi FTR Birimi & Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Ortopedik ve nörolojik rehabilitasyonda uzmanlaşmış birimler; birebir fizyoterapi seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Geri Kazanım ve Motivasyonel Terapi</h4>
                <p>Ardahan'da rehabilitasyon, zorlu dış şartlara rağmen hastanın hareket özgürlüğünü geri kazanması için büyük bir özveriyle yürütülür.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve travma sonrası uzman fizyoterapistler eşliğinde denge, koordinasyon ve motor beceri geliştirme çalışmaları.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> Modern ünitelerle kas spazmlarının giderilmesi ve iyileşme sürecinin hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel mobilizasyon teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Gelişimsel geriliği olan çocuklar için duyu bütünleme çalışmaları ve uzman desteği.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Ardahan'da rehabilitasyon, sabır ve kişiye özel ilgi üzerine kuruludur. <strong>Güçlü Yönü:</strong> Sağlık personeli ve hastalar arasındaki ailevi bağın tedavi motivasyonunu artırmasıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0478 211 10 10",
        tr: {
            hospName: "Ardahan Şehir Hamamları & Butik Wellness Noktaları",
            shortDesc: "🧖‍♂️ Soğuk iklimde sıcak bir arınma; geleneksel Türk hamamı ritüelleri ve kış wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Termal Isınma Ritüelleri</h4>
                <p>Ardahan'da Wellness, özellikle dondurucu kış günlerinde vücut ısısını dengeleyen ve kasları gevşeten bir 'Sığınak' niteliğindedir.</p>
                <ul>
                    <li>🧼 <strong>Klasik Hamam Deneyimi:</strong> Hijyenik mermer sıcaklığında yapılan kese-köpük ritüelleri ile tam vücut detoksu.</li>
                    <li>💆 <strong>Medikal Masajlar:</strong> Soğuktan kasılan kasları gevşeten, kan dolaşımını hızlandıran profesyonel masaj seansları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Solunum yollarını temizleyen ve vücut direncini artıran ısıl alanlar.</li>
                    <li>😌 <strong>Sessizlik ve Arınma:</strong> Şehrin sessizliğinde zihinsel dinginlik sağlayan dinlenme köşeleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Ardahan'da SPA hizmeti butik ve yerel bir formdadır. Özellikle Yalnızçam Kayak Merkezi ve şehir merkezindeki oteller bünyesinde kış turizmine entegre bir Wellness hizmeti gelişmektedir.</p>
            </div>`
        }
    }
},
 "IĞDIR": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0476 226 03 01",
        tr: {
            hospName: "Iğdır Devlet Hastanesi & Iğdır Üniversitesi Sağlık Bilimleri Uygulama Birimi",
            shortDesc: "🏥 Üç ülkenin kesişim noktasında stratejik cerrahi üs; ileri travma yönetimi, dijital tanı üniteleri ve uluslararası standartta acil servis.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Stratejik Sınır Tıbbı ve Cerrahi Müdahale Kapasitesi</h4>
                <p>Iğdır, lojistik bir koridor üzerinde olması ve komşu ülkelerden gelen medikal talepler nedeniyle 'Uluslararası Hasta Yönetimi' ve 'Akut Travma' konularında özelleşmiş bir cerrahi disipline sahiptir. Modern hastane binası, bölgenin en yüksek teknolojik cihaz parkurlarından birini barındırır.</p>
                <ul>
                    <li>⚕️ <strong>Genel ve Laparoskopik Cerrahi:</strong> Safra kesesi, mide ve bağırsak operasyonlarında yüksek başarı oranına sahip kapalı (kapalı) cerrahi uygulamaları; obezite cerrahisi ve metabolik cerrahi takiplerinde uzmanlaşmış kadro.</li>
                    <li>🦴 <strong>Ortopedi ve Travmatoloji:</strong> Uluslararası karayolu taşımacılığına bağlı gelişen trafik kazaları ve iş kazaları sonrası kompleks kırık cerrahisi, artroskopi ve ekstremite protez uygulamaları.</li>
                    <li>🫀 <strong>Kardiyoloji ve Girişimsel İşlemler:</strong> 7/24 aktif anjiyo laboratuvarı; koroner stentleme, balon anjiyoplasti ve geçici/kalıcı kalp pili uygulamalarında bölgenin güvenli limanı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Beyin Cerrahisi:</strong> Bel ve boyun fıtığı mikro-cerrahisi, kafa travmaları sonrası dekompresyon ve spinal cerrahi müdahalelerinde modern donanım desteği.</li>
                    <li>🤱 <strong>Yenidoğan ve Perinatoloji:</strong> Bölgedeki genç nüfus yapısı nedeniyle güçlendirilmiş yenidoğan yoğun bakım üniteleri ve riskli gebeliklerin uzman takibi.</li>
                    <li>🩸 <strong>Üroloji ve Endoskopik Tedaviler:</strong> Kapalı böbrek taşı ameliyatları (PNL ve RIRS) ve üro-onkolojik takiplerde modern klinik yaklaşımlar.</li>
                    <li>🦷 <strong>Iğdır Üniversitesi Diş Hekimliği:</strong> Akademik denetimde cerrahi çekimler, implantoloji ve restoratif diş tedavilerinde ileri düzey teknolojik altyapı.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Mikro-Klima Avantajı ve Sağlık Lojistiği</h4>
                <p>Iğdır, çevresindeki yüksek rakımlı illerin aksine 800 metre rakımı ve yumuşak iklimiyle hastaların cerrahi sonrası iyileşme (post-op) dönemlerini daha konforlu geçirmelerini sağlar. Nahçıvan ve İran sınırına yakınlığı, şehri bir 'Sağlık Turizmi' hub'ı haline getirmektedir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastane altyapısının çok yeni olması ve bölgenin lojistik avantajıdır. Tanı ve teşhis süreçleri (MR, Tomografi, Dijital Röntgen) oldukça hızlı işler. <strong>Eksik Yönü:</strong> Çok spesifik organ nakilleri için hastalar Erzurum’a sevk edilebilse de, genel ve spesifik cerrahi branşların %95'i şehir içinde başarıyla çözülür.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0476 226 10 10", 
        tr: {
            hospName: "Iğdır Tuzluca Tuz Mağaraları & Şifalı Kaynak Suları",
            shortDesc: "🌡️ Doğal speleoterapi (mağara terapisi) merkezi; astım ve solunum yolları için kristalize tuz şifası.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Tuz Kristalleri ve Solunum Yolu Terapisi</h4>
                <p>Iğdır, klasik termal kaynakların yanı sıra dünyaca ünlü Tuzluca Tuz Mağaraları ile 'Tuz Terapisi' (Haloterapi) alanında eşsiz bir şifa merkezidir.</p>
                <ul>
                    <li>🌬️ <strong>Speleoterapi (Mağara Terapisi):</strong> Tuz mağaralarındaki negatif iyon yoğunluğu ve sabit sıcaklık/nem dengesi; astım, bronşit ve KOAH hastalarında solunum kapasitesini artırıcı etki sağlar.</li>
                    <li>🧪 <strong>Mineralli Su Kaynakları:</strong> Bölgedeki yer altı sularının bikarbonatlı yapısı, içme kürleri olarak sindirim sistemi sağlığını destekler.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Etki:</strong> Tuzun antibakteriyel özelliği sayesinde deri lezyonları ve alerjik cilt yapılarında yatıştırıcı, arındırıcı etki.</li>
                    <li>🧘 <strong>Mental Arınma:</strong> Mağara içindeki sessiz ve steril ortamın yarattığı meditatif etki ile stres yönetimi desteği.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Iğdır, klasik 'sıcak su' termalinden ziyade 'Tuz Şifası' ile öne çıkar. Tuzluca mağaraları, turizme ve sağlığa kazandırılmış modern tesisleşme süreciyle bölgenin en özgün şifa noktasıdır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0476 210 11 05", 
        tr: {
            hospName: "Iğdır Huzurevi Yaşlı Bakım Merkezi & EAH Geriatri Birimi",
            shortDesc: "👴 Doğu'nun sıcak ikliminde huzurlu yaşlanma; taze meyve ve sebze odaklı beslenme ve sürekli tıbbi takip.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Mikro-Klima Konforu ve Bütünsel Yaşlı Sağlığı</h4>
                <p>Iğdır, kış aylarının Doğu Anadolu'ya göre çok daha yumuşak geçmesi nedeniyle yaşlıların eklem ve solunum sağlığı için iklimsel bir avantaj sunar.</p>
                <ul>
                    <li>🏥 <strong>Kronik Hastalık İzlem Kartları:</strong> Şeker, tansiyon ve Alzheimer gibi yaşlılık dönemi hastalıkları için hastane ile entegre çalışan evde bakım ve poliklinik ağları.</li>
                    <li>🍑 <strong>Antioksidan Zengin Beslenme:</strong> Iğdır'ın meşhur kayısısı, elması ve organik sebzeleriyle hazırlanan; vitamin ve mineral dengesi yaşlı metabolizmasına uygun diyetler.</li>
                    <li>☀️ <strong>Düşük Nem ve Güneş:</strong> Kemik erimesini (osteoporoz) önleyen doğal güneş ışığı avantajı ve nefes darlığını tetiklemeyen hava kalitesi.</li>
                    <li>🧠 <strong>Sosyal Etkileşim:</strong> Şehir merkezindeki düz ayak parklar ve sosyal alanlar sayesinde yaşlıların hareketliliğinin ve sosyal bağlarının korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Iğdır, yaşlılar için "Kolay Yaşam" şehridir. <strong>Güçlü Yönü:</strong> Şehrin coğrafi olarak düz olması yaşlıların mobilite (hareket) kapasitesini artırır ve sağlık kuruluşlarına erişimi hızlandırır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0476 226 03 01",
        tr: {
            hospName: "Iğdır EAH FTR Merkezi & Özel Özel Eğitim ve Rehabilitasyon Birimleri",
            shortDesc: "♿ Ortopedik ve nörolojik vakalarda fonksiyonel rehabilitasyon; modern cihaz parkuru ve uzman fizyoterapistler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Hareket ve Bireysel Terapi</h4>
                <p>Iğdır'da rehabilitasyon süreci, hastanın sosyal hayata katılımını hedefleyen, teknolojik destekli egzersiz protokollerinden oluşur.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve spinal yaralanmalar sonrası uzman fizyoterapistler eşliğinde yürütülen denge, yürüme ve koordinasyon eğitimleri.</li>
                    <li>⚙️ <strong>Elektroterapi Uygulamaları:</strong> Ağrı kontrolü, kas stimülasyonu ve doku iyileşmesini hızlandıran modern cihaz seansları.</li>
                    <li>🦵 <strong>Kineziterapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi ve fonksiyonel egzersiz reçeteleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme çalışmaları ve aile destek eğitimleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Iğdır, rehabilitasyon hizmetlerinde 'Hızlı Reaksiyon' avantajına sahiptir. <strong>Güçlü Yönü:</strong> Fizik tedavi ünitelerinin yeni olması ve personelin hasta üzerindeki titiz takibidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0476 210 10 10",
        tr: {
            hospName: "Iğdır Konaklama Tesisleri Spa & Geleneksel Şehir Hamamları",
            shortDesc: "🧖‍♂️ Sınırın ötesindeki yorgunluğu atan arınma; geleneksel Türk hamamı ritüelleri ve modern SPA konforu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness ve Yerel Arınma Deneyimi</h4>
                <p>Iğdır'da Wellness, özellikle uzun seyahatler ve sınır geçişleri sonrası bedensel ve zihinsel yenilenme sağlayan bir duraktır.</p>
                <ul>
                    <li>🧼 <strong>Hamam Ritüelleri:</strong> Hijyenik mermer sıcaklığında sunulan kese-köpük masajları ile cildi yenileyen klasik arınma seansları.</li>
                    <li>💆 <strong>Rahatlama Masajları:</strong> Kas gerginliğini azaltan, dolaşımı hızlandıran ve ruhsal ferahlık sağlayan profesyonel dokunuşlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Toksin atılımını hızlandıran ve bağışıklığı destekleyen ısıl dinlenme alanları.</li>
                    <li>😌 <strong>Stress-Free Alanlar:</strong> Huzurlu atmosferlerde sunulan zihinsel dinginlik odaklı Wellness paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Iğdır'da SPA hizmeti, şehrin lüks otelleri bünyesinde 'Kaliteli ve Güvenilir' bir şekilde sunulmaktadır. Özellikle Nahçıvan-Iğdır hattındaki yolcular için popüler bir dinlenme noktasıdır.</p>
            </div>`
        }
    }
},
   "YALOVA": {
    surgery: {
        img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=400", 
        phone: "0226 811 52 00",
        tr: {
            hospName: "Yalova Eğitim ve Araştırma Hastanesi & Atakent Hastanesi",
            shortDesc: "🏥 Marmara'nın yeni nesil dijital hastane kompleksi; hibrit ameliyathaneler, ileri düzey onkolojik cerrahi ve 400+ yatak kapasitesi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 İleri Teknoloji Cerrahi ve Multidisipliner Yaklaşım</h4>
                <p>Yalova, özellikle 2023 sonrası açılan yeni Eğitim ve Araştırma Hastanesi ile 'Depreme Dayanıklı İzolatörlü Bina' teknolojisini tıbbi mükemmeliyetle birleştirmiştir. İstanbul'a olan deniz ulaşımı avantajı, üst düzey cerrah kadrosunun şehirde yoğunlaşmasını sağlamıştır.</p>
                <ul>
                    <li>⚕️ <strong>Minimal İnvaziv ve Robotik Cerrahi Altyapısı:</strong> Kapalı yöntemle yapılan karmaşık batın cerrahileri, üro-onkolojik operasyonlar ve kadın hastalıkları cerrahisinde %95 başarı oranı.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi (KVC) Merkezi:</strong> Açık kalp ameliyatları, koroner bypass ve kapak değişimlerinde Ankara-İstanbul hattındaki en güçlü alternatiflerden biri; 7/24 aktif anjiyo üniteleri.</li>
                    <li>🦴 <strong>Ortopedik Rekonstrüksiyon:</strong> Robotik diz ve kalça protezi uygulamaları, sporcu sağlığı cerrahisi (artroskopi) ve ileri omurga stabilizasyon operasyonları.</li>
                    <li>🧠 <strong>Nöroşirürji ve Mikroskobik Cerrahi:</strong> Beyin tümörleri, anevrizma klipleme ve kompleks sinir sıkışmalarında yüksek çözünürlüklü mikroskop desteği ile müdahale.</li>
                    <li>🤱 <strong>Yüksek Riskli Gebelik ve Perinatoloji:</strong> Anne ve bebek sağlığı için ileri düzey izlem birimleri ve 3. basamak yenidoğan yoğun bakım desteği.</li>
                    <li>🧬 <strong>Onkoloji ve Radyasyon Onkolojisi:</strong> Kemoterapi ve radyoterapi ünitelerinin cerrahi ile entegre çalışması; kişiye özel kanser tedavi protokolleri.</li>
                    <li>🦷 <strong>Yalova ADSM ve Özel Klinikler:</strong> Çene cerrahisi, estetik gülüş tasarımı ve implantoloji alanında Körfez bölgesinin çekim merkezi.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Lojistik Avantaj ve Sağlık Turizmi</h4>
                <p>Sabiha Gökçen Havalimanı'na olan yakınlığı ve Osmangazi Köprüsü bağlantısı, Yalova'yı özellikle Körfez ülkelerinden gelen hastalar için 'Birinci Tercih' yapmaktadır. Şehir, cerrahi operasyon sonrası dinlenme için ideal bir iklime sahiptir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastane binalarının 'Sıfır' olması ve medikal cihaz envanterinin Türkiye'deki en güncel setlerden oluşmasıdır. <strong>Eksik Yönü:</strong> Nüfusun mevsimlik artış gösterdiği yaz aylarında acil servis yoğunluğu artsa da cerrahi planlamalar aksamadan yürütülmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1590733440260-032049079374?q=80&w=400",
        phone: "0226 675 74 00", 
        tr: {
            hospName: "Yalova Termal Kaplıcaları (Sağlık Bakanlığı İşletmesi) & Armutlu Kaplıcaları",
            shortDesc: "🌡️ Roma'dan günümüze 'Altın Madalyalı' şifa; 66°C sıcaklıkta, yüksek florürlü suyla radyoaktif tedavi gücü.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Radyoaktif ve Florürlü Su Analizi (Uluslararası Onaylı)</h4>
                <p>Yalova Termal suları, 1911 yılında Roma'da yapılan uluslararası yarışmada 'Dünyanın En Şifalı Suyu' ödülünü almıştır. Suyun içeriğindeki Radon gazı, doğal bir radyasyon etkisiyle hücre yenilenmesini tetikler.</p>
                <ul>
                    <li>🧪 <strong>Zengin Kimyasal Kompozisyon:</strong> Sodyum, kalsiyum, sülfat ve klorürün mükemmel dengesi; içme kürlerinde mide, karaciğer ve safra yolları üzerinde detoks etkisi.</li>
                    <li>🦴 <strong>Romatizmal ve Ortopedik Rehabilitasyon:</strong> İltihaplı romatizmaların kronik dönemleri, kireçlenme ve ortopedik ameliyat sonrası sekellerde (kalıntılarda) mucizevi iyileşme hızlandırma.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik ve Estetik Etki:</strong> Suyun yüksek florür oranı, diş ve kemik yapısını desteklerken; ciltteki akne, egzama ve operasyon izlerinin iyileşmesini sağlar.</li>
                    <li>🧘 <strong>Psikosomatik Rahatlama:</strong> Suyun doğal ısısı ve mineral yapısı, anksiyete ve kronik yorgunluk sendromunda sinir sistemini regüle eder.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Yalova Termal, sadece bir kaplıca değil, tıp doktorları ve fizyoterapistlerin denetiminde bir 'Doğal Hastane'dir. Armutlu bölgesi ise daha çok solunum yolu hastalıkları ve içme kürleri için tercih edilir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0226 814 36 28", 
        tr: {
            hospName: "Yalova Huzurevi Yaşlı Bakım Merkezi & Termal Rehabilitasyon Köyleri",
            shortDesc: "👴 Doğa ile iç içe, oksijen deposu bir yaşlılık; termal destekli geriatri hizmetleri ve İstanbul'a komşu güvenlik.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Holistik Geriatri ve 'Aktif Yaşlanma' Modeli</h4>
                <p>Yalova, Türkiye'de yaşlı nüfusun yaşam kalitesinin en yüksek olduğu illerin başındadır. Termal kaynakların varlığı, yaşlılarda eklem hareketliliğini korumada kritik rol oynar.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik Check-Up ve İzlem:</strong> Eğitim ve Araştırma Hastanesi bünyesindeki Geriatri polikliniği ile koordineli, düzenli sağlık taramaları.</li>
                    <li>🥗 <strong>Marmara-Ege Tipi Beslenme:</strong> Yerel zeytinyağı, taze sebze ve meyve odaklı, kalp dostu diyet programları.</li>
                    <li>🌬️ <strong>Mikroklima ve Hava Kalitesi:</strong> Samanlı Dağları'ndan gelen temiz havanın KOAH ve kalp hastası yaşlılarda yarattığı nefes konforu.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Şehirdeki sosyal kulüpler, bahçecilik faaliyetleri ve termal kürler ile desteklenen yüksek moral seviyesi.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Yalova, yaşlılar için "Sessiz ama İmkanlı" bir şehirdir. <strong>Güçlü Yönü:</strong> Sağlık imkanlarının Ankara-İstanbul standartlarında olup, yaşamın küçük bir sahil kasabası sükunetinde akmasıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0226 811 52 00",
        tr: {
            hospName: "Yalova FTR Merkezi & Engelsiz Yaşam ve Rehabilitasyon Merkezi",
            shortDesc: "♿ Hidroterapi (su içi terapi) odaklı uzman rehabilitasyon; robotik yürüme ve manuel terapi entegrasyonu.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Hidroterapi ve Nöro-Rehabilitasyon Uzmanlığı</h4>
                <p>Yalova, doğal termal suları rehabilitasyon teknolojisiyle birleştiren nadir illerden biridir. Suyun kaldırma kuvveti, engelli bireyler için hareket serbestliği sağlar.</p>
                <ul>
                    <li>♿ <strong>Hidro-Rehabilitasyon:</strong> Termal havuzlarda fizyoterapist eşliğinde yapılan egzersizlerle kas erimesinin önlenmesi ve motor beceri gelişimi.</li>
                    <li>⚙️ <strong>Robotik Yürüme (Lokomat):</strong> Nörolojik hasarlı hastalarda beyne yürüme sinyalini yeniden hatırlatan ileri teknoloji cihaz desteği.</li>
                    <li>🦵 <strong>Kineziterapi ve Ergoterapi:</strong> Günlük yaşam becerilerini geri kazandırmaya yönelik fonksiyonel çalışma alanları.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> CP ve Down sendromlu çocuklar için özel duyu bütünleme odaları ve atlı terapi (Hippoterapi) imkanları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Yalova, fizik tedavide Türkiye'nin 'Referans Merkezi'dir. <strong>Güçlü Yönü:</strong> Doğal suyun iyileştirici gücünün modern tıbbi cihazlarla kombine edilmesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0226 675 74 00",
        tr: {
            hospName: "Limak Termal, Terma City Wellness & Tarihi Kurşunlu Banyo",
            shortDesc: "🧖‍♂️ Tarihi saray atmosferinde kraliyet SPA deneyimi; modern Wellness ritüelleri ve termal arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Global Standartta Wellness ve Detoks</h4>
                <p>Yalova'da Wellness, Roma ve Osmanlı'dan kalan hamam kültürünün modern SPA mimarisiyle zirveye ulaştığı bir deneyimdir.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Ritüelleri:</strong> Atatürk'ün de kullandığı tarihi banyolarda, mineral zengini sularla yapılan geleneksel kese-köpük ve süt banyoları.</li>
                    <li>💆 <strong>Dünya Masajları ve Balneoterapi:</strong> Thai, Shiatsu ve medikal masajların termal su banyolarıyla ardışık uygulanması.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Kar Çeşmeleri:</strong> Isı değişimleri ile bağışıklığı güçlendiren, toksin atan ve cildi sıkılaştıran modern Wellness üniteleri.</li>
                    <li>😌 <strong>Zihinsel Detoks Programları:</strong> Orman içinde meditasyon, yoga ve özel beslenme kürleriyle bütünsel yenilenme.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Yalova, SPA ve Wellness alanında Türkiye'nin vitrinidir. Tesisler lüks segmentte olup, hem yerli hem de yabancı turistlere 'Eksiksiz' bir hizmet sunar.</p>
            </div>`
        }
    }
},
   "KARABÜK": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0370 415 80 00",
        tr: {
            hospName: "Karabük Üniversitesi Eğitim ve Araştırma Hastanesi & Safranbolu Devlet Hastanesi",
            shortDesc: "🏥 Batı Karadeniz'in akademik cerrahi üssü; 500+ yatak kapasitesi, ileri düzey yoğun bakım ve sanayi tipi travma uzmanlığı.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Disiplin ve Endüstriyel Tıp Yetkinliği</h4>
                <p>Karabük, Türkiye'nin ilk ağır sanayi kenti olmasının getirdiği birikimle, iş kazaları ve endüstriyel travmalar konusunda cerrahi bir refleks geliştirmiştir. Üniversite hastanesi statüsü, tüm operasyonların güncel bilimsel literatür eşliğinde yürütülmesini sağlar.</p>
                <ul>
                    <li>⚕️ <strong>Onkolojik ve Gastrointestinal Cerrahi:</strong> Mide, bağırsak ve pankreas tümörlerinde multidisipliner yaklaşımla yürütülen cerrahi süreçler; ileri düzey laparoskopi teknikleri.</li>
                    <li>🦴 <strong>İleri Ortopedi ve Travmatoloji:</strong> Ağır sanayi kaynaklı ekstremite yaralanmaları, kompleks kırıklar ve protez cerrahisinde bölgenin referans merkezi; spor cerrahisinde artroskopik çözümler.</li>
                    <li>🫀 <strong>Kardiyovasküler Cerrahi ve Girişimsel Kardiyoloji:</strong> Bypass ameliyatları, kapak değişimleri ve 7/24 aktif anjiyo laboratuvarı ile koroner müdahalelerde yüksek başarı oranı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Spinal Cerrahi:</strong> Mikroskobik yöntemlerle beyin tümörü operasyonları, bel/boyun fıtığı cerrahisi ve travmatik omurga stabilizasyonları.</li>
                    <li>🤱 <strong>Yenidoğan ve Pediatri:</strong> Üçüncü basamak yenidoğan yoğun bakım ünitesi ile riskli bebeklerin hayata tutunmasını sağlayan ileri teknolojik altyapı.</li>
                    <li>🩸 <strong>Üroloji ve Taş Tedavileri:</strong> Lazerli taş kırma (RIRS), plazmakinetik prostat cerrahisi ve üro-onkolojik takiplerde modern klinik yaklaşımlar.</li>
                    <li>🦷 <strong>Karabük Üniversitesi Diş Hekimliği Fakültesi:</strong> Çene cerrahisi, implantoloji ve endodonti alanında akademik denetimde modern tedavi protokolleri.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Lojistik Konum ve Bölgesel Çekim</h4>
                <p>Karabük, Bartın, Çankırı ve Zonguldak illerinin kesişiminde 'Akademik Bir Güvenlik Alanı' oluşturur. Ankara’ya olan 2.5 saatlik mesafe, gerektiğinde başkentteki tıp merkezleriyle hızlı koordinasyon imkanı sağlar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Tıp Fakültesi hocalarının bizzat vakalara girmesi ve hastanenin teknolojik envanterinin (MR, BT, Dijital Patoloji) çok zengin olmasıdır. <strong>Eksik Yönü:</strong> Şehir merkezindeki hava kirliliği (sanayi kaynaklı) bazen solunum hastaları için zorlayıcı olsa da Safranbolu lokasyonu bu durumu dengeleyen bir 'Hava Koridoru' sunar.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0370 712 12 12", 
        tr: {
            hospName: "Safranbolu Şifalı Suları & Eskipazar Traverten Kaynakları",
            shortDesc: "🌡️ Tarihi dokuda mineral şifası; kükürtlü ve mineralli sularla romatizmal ağrılara doğal çözümler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Jeotermal Yapı ve Minerolojik Fayda</h4>
                <p>Karabük ve özellikle Eskipazar bölgesi, traverten oluşumlarını destekleyen zengin mineral yapılı yer altı sularına sahiptir.</p>
                <ul>
                    <li>🧪 <strong>Bikarbonatlı ve Sülfatlı Su:</strong> Sindirim sistemi fonksiyonlarını düzenleyici ve mide asidini dengeleyici içme kürleri (doktor tavsiyeli).</li>
                    <li>🦴 <strong>Romatizmal Rehabilitasyon:</strong> Suyun doğal sıcaklığı ve mineral yoğunluğu; kireçlenme, siyatik ve yumuşak doku romatizmalarında doğal analjezik etki.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Rahatlama:</strong> Mineralli suların deri üzerindeki yatıştırıcı etkisi sayesinde kronik cilt problemlerinde destekleyici terapi.</li>
                    <li>🌬️ <strong>Klimaterapi ve Su Sentezi:</strong> Safranbolu'nun nemsiz ve temiz havasıyla birleşen su terapileri, bütünsel bir 'Wellness' etkisi yaratır.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Karabük'te termal tesisleşme daha çok 'Butik ve Geleneksel' seviyededir. Safranbolu’nun tarihi konaklarında sunulan wellness hizmetleri, suyun şifasını kültürel bir deneyimle birleştirir.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0370 412 11 05", 
        tr: {
            hospName: "Karabük Huzurevi Yaşlı Bakım Merkezi & Safranbolu İzzet Baysal Huzurevi",
            shortDesc: "👴 Tarihi konakların gölgesinde, akademik denetimde huzurlu yaşlanma; düşük nemli hava ve güvenli sosyal yaşam.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Kültürel Hafıza ve Bütünsel Geriatri</h4>
                <p>Karabük ve Safranbolu, yaşlılar için Türkiye'nin en 'Saygın' yaşam alanlarından biridir. Tarihi doku, yaşlılarda mental dinginliği ve aidiyet hissini artırır.</p>
                <ul>
                    <li>🏥 <strong>Akademik Takip:</strong> Üniversite hastanesi Geriatri birimi ile koordineli, kronik hastalık (diyabet, hipertansiyon) yönetim programları.</li>
                    <li>🥗 <strong>Geleneksel Safranbolu Diyeti:</strong> Bölgenin ünlü safranı (antioksidan), çavuş üzümü ve doğal tahıllarıyla hazırlanan, bağışıklığı güçlendiren menüler.</li>
                    <li>🌬️ <strong>İdeal İklim Koşulları:</strong> Safranbolu’nun düşük nemli havası, kalp ve solunum hastası yaşlılar için nefes konforu sağlar.</li>
                    <li>🧠 <strong>Mental Zindelik:</strong> Tarihi çarşı yürüyüşleri, geleneksel el sanatları ve 'Konak Sohbetleri' ile desteklenen sosyal etkileşim.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Karabük, yaşlılar için "Kültürel Bir Liman" niteliğindedir. <strong>Güçlü Yönü:</strong> Şehirdeki sosyal güvenliğin yüksekliği ve yaşlı sağlığına yönelik akademik ilginin yoğunluğudur.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0370 415 80 00",
        tr: {
            hospName: "Karabük EAH FTR Merkezi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Nörolojik ve ortopedik vakalarda uzmanlaşmış akademik rehabilitasyon; manuel terapi ve fonksiyonel gelişim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Gelişim ve Nöro-Rehabilitasyon Uzmanlığı</h4>
                <p>Karabük'te rehabilitasyon, hastanın bağımsız hareket kabiliyetini geri kazandırmaya yönelik 'Akademik Protokoller' çerçevesinde yürütülür.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme (felç) ve beyin hasarları sonrası uzman fizyoterapistler eşliğinde nöroplastisite odaklı egzersiz seansları.</li>
                    <li>⚙️ <strong>Elektroterapi Envanteri:</strong> Modern ultrason, lazer ve stimülasyon cihazları ile ağrı yönetimi ve doku iyileşmesinin hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik spesifik mobilizasyon teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme odaları ve aile eğitim desteği.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Karabük, fizik tedavide 'Bilimsel Disiplin' arayanlar için doğru adrestir. <strong>Güçlü Yönü:</strong> Tedavi süreçlerinin üniversite hocaları tarafından planlanması ve titizlikle takip edilmesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0370 712 10 10",
        tr: {
            hospName: "Safranbolu Tarihi Hamamları & Şehir Wellness Birimleri",
            shortDesc: "🧖‍♂️ 500 yıllık tarihi dokuda arınma; Osmanlı hamam kültürü ve modern Wellness ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Tarihsel Wellness ve Ruhsal Arınma</h4>
                <p>Karabük'te Wellness, Safranbolu'nun tarihi atmosferiyle birleşen, zamana yolculuk tadında bir 'Ruhsal Detoks' deneyimidir.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Ritüelleri (Cinci Hamamı):</strong> Orijinal mimaride sunulan kese-köpük masajları ile cildi ölü deriden arındıran derin temizlik.</li>
                    <li>💆 <strong>Aromaterapi ve Masajlar:</strong> Safranbolu'nun doğal özleriyle (safran, lavanta) desteklenen, kas gerginliğini azaltan masaj uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Alanları:</strong> Toksin atılımını sağlayan ve bağışıklığı güçlendiren modern ısı üniteleri.</li>
                    <li>😌 <strong>Sessizlik Terapisi:</strong> Tarihi konakların avlularında sunulan, meditatif bir dinlenme ortamı.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Karabük'te SPA hizmeti, özellikle Safranbolu'daki butik oteller bünyesinde 'Kültürel ve Estetik' bir formda sunulmaktadır. Tarih ve sağlığı bir arada arayanlar için idealdir.</p>
            </div>`
        }
    }
},
 "KILIS": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0348 229 00 00",
        tr: {
            hospName: "Kilis Prof. Dr. Alaeddin Yavaşca Devlet Hastanesi & Kilis Üniversitesi Tıp Fakültesi Birimleri",
            shortDesc: "🏥 Türkiye'nin en modern sınır hastanelerinden biri; sismik izolatörlü akıllı bina, 24 ameliyathane ve uluslararası travma yönetimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Kapasiteli Cerrahi ve Stratejik Müdahale Altyapısı</h4>
                <p>Kilis, özellikle 2022'de hizmete giren yeni hastane kompleksi ile teknik altyapısını Avrupa standartlarının üzerine taşımıştır. Sınır ötesinden gelen kompleks yaralanmalar ve lojistik hareketlilik, cerrahi ekibin 'Hızlı Karar Verme' ve 'Kritik Vaka Yönetimi' becerilerini zirveye taşımıştır.</p>
                <ul>
                    <li>⚕️ <strong>İleri Genel Cerrahi ve Travma Protokolleri:</strong> Ateşli silah yaralanmaları, patlama cerrahisi ve akut batın travmalarında 7/24 kesintisiz müdahale; laparoskopik yöntemlerle yapılan onkolojik cerrahi uygulamaları.</li>
                    <li>🦴 <strong>Ortopedi ve Kompleks Rekonstrüksiyon:</strong> Uzuv kayıpları riski taşıyan travmalarda mikro-cerrahi destekli onarımlar, eklem protezleri ve geniş kapsamlı artroskopi (kapalı eklem cerrahisi) seansları.</li>
                    <li>🫀 <strong>Kardiyovasküler (KVC) ve Girişimsel Kardiyoloji:</strong> Dijital anjiyo laboratuvarlarında stent, balon ve kalp pili uygulamaları; bypass ameliyatları ve vasküler (damar) cerrahide bölge referanslığı.</li>
                    <li>🧠 <strong>Nöroşirürji ve Beyin Cerrahisi:</strong> Kafa travmaları sonrası dekompresyon cerrahisi, beyin kanaması müdahaleleri ve mikroskobik bel/boyun fıtığı operasyonları.</li>
                    <li>☢️ <strong>Modern Tanı ve Radyoloji Kompleksi:</strong> 128 kesitli BT, yüksek çözünürlüklü MR ve dijital patoloji üniteleri ile dakikalar içinde kesin tanı ve operasyon planlaması.</li>
                    <li>🤱 <strong>Yenidoğan Yoğun Bakım ve Pediatri:</strong> Bölgedeki demografik yoğunluğa yanıt veren 50+ yataklı 3. seviye yenidoğan ünitesi ve çocuk cerrahisi branşlarında uzmanlaşmış kadro.</li>
                    <li>🦷 <strong>Kilis Ağız ve Diş Sağlığı Merkezi:</strong> 30+ ünite kapasitesiyle cerrahi çekimler, gömülü diş operasyonları ve ileri düzey protez uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Sağlık Lojistiği ve Sınır Ötesi Referans</h4>
                <p>Kilis, Öncüpınar ve Çobanbey sınır kapılarına yakınlığı ile uluslararası insani yardım koridorunun 'Sağlık Filtresi' görevini görür. Hastanenin sismik izolatörlü yapısı, afet durumlarında bile cerrahi operasyonların sıfır riskle devam etmesini sağlar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastanenin 'Sıfır' olması ve medikal envanterin (cihazların) Türkiye'deki en güncel teknolojiyle donatılmış olmasıdır. Cerrahi ekip, vaka çeşitliliği açısından Türkiye'nin en tecrübeli gruplarından biridir. <strong>Eksik Yönü:</strong> Şehirdeki nüfus hareketliliği poliklinik yükünü artırsa da cerrahi randevular stratejik önceliklendirme ile çok hızlı çözülmektedir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0348 212 10 10", 
        tr: {
            hospName: "Kilis Şifalı Kaynaklar & Bölgesel Wellness Etüdleri",
            shortDesc: "🌡️ Mezopotamya'nın yer altı mineralleriyle doğal arınma; cilt sağlığı ve metabolik denge için mineralli sular.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Hidro-Minerolojik Yapı ve Doğal Destek</h4>
                <p>Kilis ve çevresindeki su kaynakları, bölgenin kalkerli ve zengin toprak yapısından süzülen, mineral yoğunluğu dengelenmiş kaynaklardır.</p>
                <ul>
                    <li>🧪 <strong>Mineralli Su Karakteristiği:</strong> Bikarbonatlı ve sülfatlı yapı; sindirim sistemi fonksiyonlarını düzenleyici ve mide mukozasını yatıştırıcı içme kürleri potansiyeli.</li>
                    <li>🦴 <strong>Romatizmal Destek:</strong> Suyun doğal sıcaklığı ve mineral yapısı; kas gerginliklerini azaltıcı ve kronik eklem ağrılarında semptomatik iyileşme sağlayıcı etki.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Rahatlama:</strong> Cilt bariyerini destekleyen mineral dengesi sayesinde mevsimsel deri döküntülerinde ve kurulukta doğal nemlendirici rolü.</li>
                    <li>🧘 <strong>İklim ve Su Sentezi:</strong> Kilis'in kuru ve güneşli havasıyla birleşen su terapileri, özellikle D vitamini senteziyle romatizmal hastalıklara çift taraflı şifa sunar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Kilis'te termal imkanlar butik ve yerel bazdadır. Ancak suyun kalitesi ve bölgenin doğal yapısı, 'Ham ve İşlenmemiş Şifa' arayanlar için özgün bir alternatif sunar.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0348 212 11 05", 
        tr: {
            hospName: "Kilis Huzurevi Yaşlı Bakım Merkezi & Evde Sağlık ve Geriatri İzlem Birimi",
            shortDesc: "👴 Zeytinyağının mucizesiyle uzun ömür; ailevi sıcaklıkta bakım ve sürekli akademik medikal denetim.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Akdeniz-Mezopotamya Diyeti ve Aktif Geriatri</h4>
                <p>Kilis, 4000 yıllık zeytinyağı kültürüyle yaşlılar için doğal bir 'Uzun Yaşam Laboratuvarı' gibidir. Bölgedeki düşük nem oranı, yaşlıların kalp ve damar sağlığını pozitif yönde etkiler.</p>
                <ul>
                    <li>🏥 <strong>Evde Sağlık ve Mobil Takip:</strong> Şehrin her noktasına ulaşan mobil ekiplerle yaşlıların rutin kontrolleri, ilaç düzenlemeleri ve fiziksel rehabilitasyonlarının yerinde yapılması.</li>
                    <li>🫒 <strong>Kilis Yağlık Zeytinyağı Kürleri:</strong> Polifenol zengini yerel zeytinyağı odaklı beslenme programları ile kolesterol kontrolü ve bilişsel fonksiyonların korunması.</li>
                    <li>🥗 <strong>Doğal Gastronomi:</strong> Bölgenin taze bakliyatları, sebzeleri ve meyveleriyle desteklenen, bağışıklık sistemini en üst düzeyde tutan antioksidan menüler.</li>
                    <li>🧠 <strong>Sosyal Entegrasyon ve Moral:</strong> Geleneksel 'Kilis Evi' kültüründeki sosyal avlu yaşamı sayesinde yaşlıların yalnızlaşmasının önlenmesi ve zihinsel aktivitenin korunması.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Kilis, yaşlılar için "Sıcak ve Saygın" bir şehirdir. <strong>Güçlü Yönü:</strong> Şehirdeki sosyal dayanışma kültürünün çok yüksek olması ve yaşlıların her türlü ihtiyacında sağlık kuruluşlarına 'VIP Hızında' erişebilmesidir.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0348 229 00 00",
        tr: {
            hospName: "Kilis Prof. Dr. Alaeddin Yavaşca FTR Birimi & Özel Rehabilitasyon Birimleri",
            shortDesc: "♿ Travma ve cerrahi sonrası hızlı geri kazanım; uzman fizyoterapistler eşliğinde fonksiyonel terapi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Mobilizasyon ve Nöro-Rehabilitasyon Uzmanlığı</h4>
                <p>Kilis'te rehabilitasyon, özellikle büyük cerrahi operasyonlar ve travmalar sonrası hastanın bağımsızlığını maksimuma çıkarmayı hedefler.</p>
                <ul>
                    <li>♿ <strong>Nörolojik Rehabilitasyon:</strong> İnme ve travmatik beyin yaralanmaları sonrası nöroplastisite odaklı denge, yürüme ve koordinasyon eğitimleri.</li>
                    <li>⚙️ <strong>Elektroterapi ve Ağrı Yönetimi:</strong> Modern stimülasyon cihazları, ultrason ve lazer üniteleri ile doku onarımının biyolojik olarak hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Terapi:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel mobilizasyon ve uzman denetimli egzersiz seansları.</li>
                    <li>🧒 <strong>Pediatrik Özel Eğitim:</strong> Çocuklarda gelişimsel gerilikler ve Serebral Palsi için özel duyu bütünleme çalışmaları ve aile destek programları.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Kilis, fizik tedavide 'Genç ve Dinamik' bir uzman kadrosuna sahiptir. <strong>Güçlü Yönü:</strong> Rehabilitasyon birimlerinin yeni hastane bünyesinde en son teknoloji cihazlarla donatılmış olmasıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0348 212 10 00",
        tr: {
            hospName: "Kilis Tarihi Hamamları (Paşa Hamamı) & Şehir Wellness Birimleri",
            shortDesc: "🧖‍♂️ Tarihi Mezopotamya dokusunda arınma; geleneksel Türk hamamı ritüelleri ve zeytinyağı masajları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Geleneksel Wellness ve Doğal Detoks</h4>
                <p>Kilis'te Wellness, şehrin binlerce yıllık hamam kültürü ile yerel zeytinyağının şifasını birleştiren bir deneyimdir.</p>
                <ul>
                    <li>🧼 <strong>Tarihi Hamam Ritüelleri:</strong> Osmanlı döneminden kalan Paşa Hamamı gibi mekanlarda sunulan, cildi ölü deriden arındıran derinlemesine kese-köpük seansları.</li>
                    <li>🫒 <strong>Zeytinyağı ve Defne Sabunu Terapisi:</strong> Cildi besleyen, doğal antioksidan içeren yerel sabunlar ve yağlarla yapılan rahatlatıcı masajlar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Alanları:</strong> Modern konaklama tesisleri bünyesinde sunulan, toksin atılımını sağlayan ısıl dinlenme birimleri.</li>
                    <li>😌 <strong>Mental Arınma:</strong> Şehrin sessiz ve tarihi atmosferinde, günün stresini atan huzurlu dinlenme köşeleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Kilis'te SPA hizmeti 'Butik ve Geleneksel' bir yapıdadır. Geleneksel yöntemlerin doğallığı, modern lüks arayışından ziyade 'Gerçek Arınma' isteyenler için rakipsizdir.</p>
            </div>`
        }
    }
},
 "OSMANIYE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0328 826 12 00",
        tr: {
            hospName: "Osmaniye Devlet Hastanesi (Yeni Kampüs) & Kadirli Devlet Hastanesi",
            shortDesc: "🏥 Çukurova'nın en modern sağlık yatırımlarından biri; 800+ yatak kapasitesi, 24 dijital ameliyathane ve ileri travma merkezi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Yüksek Teknolojili Cerrahi ve Endüstriyel Sağlık Altyapısı</h4>
                <p>Osmaniye, özellikle 2023-2024 döneminde tamamlanan yeni hastane kompleksi ile bölgenin cerrahi 'Amiral Gemisi' haline gelmiştir. Sismik izolatörlü yapısı ve akıllı bina teknolojisiyle, her türlü afet durumunda cerrahi süreklilik garanti altına alınmıştır.</p>
                <ul>
                    <li>⚕️ <strong>Minimal İnvaziv (Kapalı) Cerrahi Üssü:</strong> Obezite cerrahisi (tüp mide), laparoskopik kolon cerrahisi ve ileri düzey fıtık onarımlarında %90'ı aşan kapalı operasyon oranı.</li>
                    <li>🫀 <strong>İleri Girişimsel Kardiyoloji ve KVC:</strong> Kompleks koroner stentleme, kalp kapağı tamirleri ve bypass ameliyatlarında Adana-Gaziantep hattındaki en güçlü alternatif cerrahi merkez.</li>
                    <li>🦴 <strong>Ortopedik Travma ve Artroplasti:</strong> Sanayi ve tarım kazalarına bağlı kompleks ekstremite yaralanmaları, robotik diz/kalça protezi uygulamaları ve sporcu sağlığı cerrahisi.</li>
                    <li>🧠 <strong>Nöroşirürji (Beyin ve Sinir Cerrahisi):</strong> Mikro-cerrahi yöntemlerle tümör rezeksiyonu, anevrizma müdahaleleri ve ileri düzey spinal (omurga) stabilizasyon sistemleri.</li>
                    <li>🤱 <strong>Kapsamlı Anne-Bebek Sağlığı:</strong> 3. seviye yenidoğan yoğun bakım ünitesi (NICU) ve 'Anne Dostu Hastane' standartlarında modern doğum locaları.</li>
                    <li>☢️ <strong>Onkolojik Cerrahi ve Radyoloji:</strong> PET-CT desteğiyle tümör evreleme ve cerrahi sınır belirleme; multidisipliner tümör konseyi ile kişiye özel tedavi planları.</li>
                    <li>🦷 <strong>Osmaniye Ağız ve Diş Sağlığı Merkezi:</strong> Dijital panoramik röntgen destekli implantoloji, gömülü diş cerrahisi ve restoratif diş hekimliği uygulamaları.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Lojistik Strateji ve Bölgesel Konum</h4>
                <p>Osmaniye, otoyol kavşağında yer alması sebebiyle çevre illerden gelen acil vakaların 'Altın Saat' içinde müdahale alabildiği kritik bir noktadadır. Hastanenin helikopter pisti, bölge genelindeki hava ambulansı trafiğini yönetebilecek kapasitededir.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Hastane binalarının ve tıbbi cihaz envanterinin Türkiye'deki 'En Yeni' serilerden oluşmasıdır. Fiziksel konfor ve dijital kayıt sistemleri hatasız çalışmaktadır. <strong>Eksik Yönü:</strong> Hızlı sanayileşme nedeniyle bazı spesifik yan dallarda poliklinik yoğunluğu yaşansa da cerrahi müdahale süreleri oldukça optimize edilmiştir.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0328 718 10 10", 
        tr: {
            hospName: "Haruniye (Düziçi) Kaplıcaları & Osmaniye Şifalı Kaynak Suları",
            shortDesc: "🌡️ Amanos Dağları'nın kalbinden gelen şifa; yüksek mineralizasyon ile romatizmal ve nörolojik arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Radon ve Kükürt Odaklı Su Analizi</h4>
                <p>Düziçi-Haruniye bölgesi, Berke Barajı kıyısında, doğa ile iç içe ve mineral bakımından Türkiye'nin en değerli sularından birine sahiptir.</p>
                <ul>
                    <li>🧪 <strong>Kükürtlü ve Florürlü Yapı:</strong> Suyun doğal kükürt içeriği deri hastalıklarında (sedef, egzama) antiseptik etki yaratırken; florür yapısı kemik metabolizmasını destekler.</li>
                    <li>🦴 <strong>Romatizmal Şifa:</strong> Kireçlenme, siyatik, lumbago ve yumuşak doku romatizmalarında ısıl ve kimyasal etkisiyle ağrıyı baskılayan kürler.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Yenilenme:</strong> Suyun pH dengesi, cildin nem kapasitesini artırarak operasyon sonrası yara izlerinin (skar dokusu) yumuşatılmasında etkilidir.</li>
                    <li>🛀 <strong>Nörolojik Rehabilitasyon Destek:</strong> Periferik sinir felçleri ve kas spazmlarında termal banyoların gevşetici ve dolaşım hızlandırıcı rolü.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Haruniye Kaplıcaları, "Doğa ve Şifa" kombinasyonunu en saf haliyle sunar. Tesisler yenilenme sürecinde olup, suyun tıbbi kalitesi dünya standartlarındadır.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0328 814 11 05", 
        tr: {
            hospName: "Osmaniye Özden Huzurevi & Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Çukurova'nın bereketli doğasında, güvenli ve tıbbi denetimli yaşlılık; yüksek moral ve aktif yaşam.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Bütünsel Geriatri ve Yayla Havası Avantajı</h4>
                <p>Osmaniye, yaşlılar için kışın ılıman iklimi, yazın ise serin yaylaları (Zorkun vb.) ile ideal bir yaşam döngüsü sunar.</p>
                <ul>
                    <li>🏥 <strong>Kronik Hastalık Yönetimi:</strong> Yeni Devlet Hastanesi Geriatri birimiyle entegre; diyabet, hipertansiyon ve kalp yetmezliği olan yaşlılar için dijital takip sistemleri.</li>
                    <li>🥗 <strong>Fıstık ve Zeytin Odaklı Beslenme:</strong> Bölgenin tescilli yer fıstığı (E vitamini zengini) ve doğal sızma zeytinyağı ile hazırlanan, bilişsel sağlığı koruyan diyetler.</li>
                    <li>🌬️ <strong>Klimaterapi (Hava Şifası):</strong> Amanos Dağları'ndan süzülen temiz havanın, yaşlılarda solunum kapasitesini artırması ve uyku kalitesini düzenlemesi.</li>
                    <li>🧠 <strong>Sosyal Aktivite ve Hobi:</strong> Geleneksel el sanatları (Karatepe kilim dokuma), bahçe terapisi ve kuşaklar arası etkileşim projeleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Osmaniye, yaşlılar için "Sessiz ama Modern" bir şehirdir. <strong>Güçlü Yönü:</strong> Şehrin düz ayak yapısı sayesinde yaşlıların sosyal alanlara ve sağlık merkezlerine erişim kolaylığıdır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0328 826 12 00",
        tr: {
            hospName: "Osmaniye EAH Fizik Tedavi Ünitesi & Özel Engelsiz Yaşam Merkezleri",
            shortDesc: "♿ Ortopedik ve nörolojik rehabilitasyonda uzman birimler; su içi egzersiz ve manuel terapi seansları.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Fonksiyonel Rehabilitasyon ve Sosyal Adaptasyon</h4>
                <p>Osmaniye'de rehabilitasyon, sadece fiziksel iyileşmeyi değil, bireyin toplumsal hayata tam katılımını hedefleyen kapsamlı bir süreçtir.</p>
                <ul>
                    <li>♿ <strong>Nöro-Rehabilitasyon:</strong> İnme ve spinal yaralanmalar sonrası uzman fizyoterapistler eşliğinde denge, koordinasyon ve yürüme eğitimleri.</li>
                    <li>⚙️ <strong>Gelişmiş Fizik Tedavi Parkuru:</strong> Elektroterapi, vakum terapi ve ultrason destekli ağrı yönetimi ile doku iyileşmesinin hızlandırılması.</li>
                    <li>🦵 <strong>Kineziterapi ve Mobilizasyon:</strong> Ameliyat sonrası eklem kısıtlılıklarını gidermeye yönelik manuel terapi teknikleri ve kişiye özel egzersiz reçeteleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Çocuklarda gelişimsel gerilikler için özel duyu bütünleme odaları ve oyun terapisi destekli fiziksel gelişim birimleri.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Osmaniye, rehabilitasyon hizmetlerinde "Erişilebilirlik" açısından bölgenin en rahat illerinden biridir. <strong>Güçlü Yönü:</strong> Kamu ve özel rehabilitasyon merkezlerinin yaygınlığı ve yüksek teknolojik donanımıdır.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0328 812 10 00",
        tr: {
            hospName: "Osmaniye Şehir Wellness Noktaları & Geleneksel Hamamlar",
            shortDesc: "🧖‍♂️ Çukurova sıcağında ferahlatıcı arınma; geleneksel Türk hamamı ve modern Wellness deneyimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Wellness, Arınma ve Şehir Detoksu</h4>
                <p>Osmaniye'de Wellness deneyimi, bölgenin sıcak iklimine uygun ferahlatıcı ve canlandırıcı terapiler üzerine kurgulanmıştır.</p>
                <ul>
                    <li>🧼 <strong>Hamam Ritüelleri:</strong> Hijyenik mermer sıcaklığında sunulan kese-köpük masajları ile cildi yenileyen klasik arınma seansları.</li>
                    <li>💆 <strong>Rahatlatma ve Spor Masajları:</strong> Kas gerginliğini azaltan, kan dolaşımını hızlandıran profesyonel masaj uygulamaları.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Banyosu:</strong> Toksin atılımını sağlayan, bağışıklığı güçlendiren ve vücudu rahatlatan ısıl dinlenme alanları.</li>
                    <li>😌 <strong>Stress-Free Alanlar:</strong> Huzurlu atmosferlerde sunulan zihinsel dinginlik odaklı Wellness paketleri.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Osmaniye'de SPA hizmeti, modern konaklama tesisleri ve şehir hamamları bünyesinde "Kaliteli ve Hijyenik" bir standartta sunulmaktadır. Sanayi ve ticaret için şehre gelenlerin en büyük dinlenme durağıdır.</p>
            </div>`
        }
    }
},
   "DÜZCE": {
    surgery: {
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=400", 
        phone: "0380 542 13 90",
        tr: {
            hospName: "Düzce Üniversitesi Tıp Fakültesi Araştırma Hastanesi & Düzce Atatürk Devlet Hastanesi",
            shortDesc: "🏥 Batı Karadeniz'in akademik cerrahi referans noktası; deprem izolatörlü modern kampüs, ileri onkoloji merkezi ve 7/24 travma yönetimi.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#c0392b;">🩺 Akademik Cerrahi Disiplin ve Mikro-Cerrahi Yetkinliği</h4>
                <p>Düzce, üniversite hastanesinin varlığı sayesinde tıbbi literatürü bizzat üreten bir cerrahi merkeze sahiptir. İstanbul ve Ankara arasındaki otoyol aksı üzerinde olması, hastanenin 'Kritik Trafik Kazaları ve Travma Yönetimi' konusunda Türkiye'nin en tecrübeli ekiplerinden birine sahip olmasını sağlamıştır.</p>
                <ul>
                    <li>⚕️ <strong>İleri Laparoskopik ve Robotik Cerrahi:</strong> Gastrointestinal sistem tümörleri, bariatrik cerrahi (obezite) ve ileri düzey fıtık onarımlarında akademik düzeyde kapalı müdahaleler.</li>
                    <li>🦴 <strong>Ortopedi, Travmatoloji ve El Cerrahisi:</strong> Sanayi kazaları ve trafik travmaları sonrası mikro-cerrahi ile doku/uzuv onarımı; sporcu sağlığı kapsamında ileri artroskopik diz ve omuz operasyonları.</li>
                    <li>🫀 <strong>Kapsamlı Kardiyovasküler Cerrahi:</strong> Kalp kapak değişimleri, koroner bypass operasyonları ve girişimsel kardiyoloji (anjiyo, stent) birimlerinde 7/24 kesintisiz uzman desteği.</li>
                    <li>🧠 <strong>Nöroşirürji ve Fonksiyonel Nörocerrahi:</strong> Beyin tümörü rezeksiyonları, Parkinson cerrahisi (beyin pili) ve mikroskobik spinal cerrahi uygulamaları.</li>
                    <li>🤱 <strong>Perinatoloji ve Yenidoğan Yoğun Bakım:</strong> Riskli gebeliklerin akademik takibi ve 3. basamak yenidoğan ünitesi ile Batı Karadeniz'in bebek sağlığı referans noktası.</li>
                    <li>🩸 <strong>Üro-Onkoloji ve Taş Tedavileri:</strong> Lazerle kapalı böbrek taşı ameliyatları (RIRS) ve prostat cerrahisinde plazmakinetik/lazer yöntemleri.</li>
                    <li>🦷 <strong>Düzce Üniversitesi Diş Hekimliği Fakültesi:</strong> Maksillofasiyal cerrahi (çene cerrahisi), ileri implantoloji ve estetik gülüş tasarımı alanında akademik klinik hizmeti.</li>
                </ul>

                <h4 style="color:#2c3e50;">🌍 Stratejik Konum ve Lojistik Hız</h4>
                <p>Düzce, Türkiye'nin en yoğun iki şehri arasında bir 'Sağlık Filtresi' görevi görür. Helikopter pisti ve gelişmiş ambulans ağı ile acil vakaların dakikalar içinde akademik müdahaleye ulaşmasını sağlar.</p>

                <h4>➡️ Teknik Dürüst Analiz</h4>
                <p><strong>Güçlü Yönü:</strong> Tıp Fakültesi hocalarının bizzat vakalara girmesi ve hastanenin teknolojik donanımının (3 Tesla MR, Dijital Tomografi) en üst seviyede olmasıdır. <strong>Eksik Yönü:</strong> Bölge illerinden gelen yoğun sevk trafiği nedeniyle poliklinik bekleme süreleri artsa da cerrahi planlamalar akademik titizlikle yürütülür.</p>
            </div>`
        }
    },
    thermal: {
        img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400",
        phone: "0380 411 10 10", 
        tr: {
            hospName: "Efteni Kaplıcaları & Düzce Termal Wellness Kaynakları",
            shortDesc: "🌡️ Melen Çayı ve Efteni Gölü kıyısında doğal şifa; yüksek mineralizasyon ile nörolojik ve romatizmal arınma.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#2980b9;">🧪 Oligometalik ve Minerolojik Şifa Analizi</h4>
                <p>Düzce'nin termal suları, Efteni Gölü havzasının zengin yer altı yapısından beslenir. Su, özellikle 'Nöro-Rehabilitasyon' destekleyici özellikleri ile bilinir.</p>
                <ul>
                    <li>🧪 <strong>Mineralli Su Kompozisyonu:</strong> Bikarbonat, kalsiyum ve magnezyum zengini yapı; içme kürlerinde metabolik süreçleri hızlandırıcı etki.</li>
                    <li>🦴 <strong>Kas ve Eklem Rehabilitasyonu:</strong> Suyun doğal sıcaklığı ve mineral yapısı sayesinde kronik bel ağrıları, kireçlenme ve iltihaplı romatizmalarda inflamasyon azaltıcı rol.</li>
                    <li>🧖‍♂️ <strong>Dermatolojik Saflık:</strong> Cildin nem dengesini düzenleyen pH yapısı ile sedef ve egzama gibi kronik deri hastalıklarında destekleyici terapi.</li>
                    <li>🌬️ <strong>Klimaterapi ve Doğal Wellness:</strong> Efteni Gölü'nün flora zenginliği ile birleşen su tedavileri, solunum yollarını rahatlatan yüksek oksijenli bir ortam sunar.</li>
                </ul>
                
                <h4>➡️ Bölgesel Değerlendirme</h4>
                <p><strong>Dürüst Analiz:</strong> Efteni Kaplıcaları, "Butik ve Şifa Odaklı" bir merkezdir. Lüks SPA konseptinden ziyade, gerçek medikal termal fayda arayan hastalar için ideal bir destinasyondur.</p>
            </div>`
        }
    },
    elderly: {
        img: "https://images.unsplash.com/photo-1581578731522-a2047864146e?q=80&w=400",
        phone: "0380 524 11 05", 
        tr: {
            hospName: "Düzce Muharrem Sancaklı Huzurevi & Yaşlı Bakım ve Rehabilitasyon Merkezi",
            shortDesc: "👴 Batı Karadeniz'in huzurlu doğasında, akademik denetimli yaşlılık; güvenli, sosyal ve aktif bir hayat.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#27ae60;">🧠 Akademik Geriatri ve Yayla Havası Destekli Yaşam</h4>
                <p>Düzce, yaşlılar için Türkiye'nin en dengeli iklimlerinden birine sahiptir. Şehirdeki üniversite varlığı, yaşlı sağlığı hizmetlerini 'Bilimsel Gözlem' seviyesine taşır.</p>
                <ul>
                    <li>🏥 <strong>Geriatrik İzlem Protokolleri:</strong> Tıp Fakültesi Geriatri birimi ile koordineli; Alzheimer, Demans ve Parkinson vakaları için özel bilişsel egzersiz programları.</li>
                    <li>🥗 <strong>Doğal Beslenme Döngüsü:</strong> Bölgenin fındığı (Omega-3), mısırı ve taze bahçe ürünleriyle desteklenen, kalp ve beyin sağlığını koruyan beslenme planları.</li>
                    <li>🌬️ <strong>Hava Kalitesi ve Solunum Konforu:</strong> Şehrin orman varlığı sayesinde KOAH ve astım hastası yaşlılarda nefes kapasitesinin doğal yoldan artması.</li>
                    <li>🧠 <strong>Sosyal Dinamizm:</strong> Üniversite öğrencileriyle yürütülen 'Kuşaklararası Etkileşim' projeleri, hobi bahçeciliği ve doğa yürüyüşleri.</li>
                </ul>

                <h4>➡️ Altyapı Notu</h4>
                <p><strong>Dürüst Analiz:</strong> Düzce, yaşlılar için "Sağlık ve Huzur Dengesi" kurmuş bir şehirdir. <strong>Güçlü Yönü:</strong> Herhangi bir acil durumda 5-10 dakika içinde tam teşekküllü bir üniversite hastanesine ulaşabiliyor olmaktır.</p>
            </div>`
        }
    },
    disabled: {
        img: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=400",
        phone: "0380 542 13 90",
        tr: {
            hospName: "Düzce Üniversitesi FTR Merkezi & Özel Engelsiz Yaşam Birimleri",
            shortDesc: "♿ Akademik fizyoterapi ve hidroterapi çözümleri; robotik sistemler ve uzman denetimli egzersizler.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#e67e22;">💪 Nöro-Rehabilitasyon ve Robotik Yürüme Teknolojisi</h4>
                <p>Düzce'de rehabilitasyon, üniversitenin akademik kadrosu tarafından planlanan kişiye özel 'Fonksiyonel Gelişim' programlarından oluşur.</p>
                <ul>
                    <li>♿ <strong>İleri Nörolojik Rehabilitasyon:</strong> İnme (felç), MS ve spinal yaralanmalar sonrası nöroplastisiteyi tetikleyen cihaz destekli egzersizler.</li>
                    <li>⚙️ <strong>Elektroterapi ve Fiziksel Ajanlar:</strong> Lazer terapi, vakum ve ultrasonik dalgalar ile ağrı kontrolü ve doku iyileşme hızlandırması.</li>
                    <li>🦵 <strong>Kineziterapi ve Manuel Mobilizasyon:</strong> Ameliyat sonrası eklem sertliklerini gidermeye yönelik spesifik manuel terapi teknikleri.</li>
                    <li>🧒 <strong>Pediatrik Rehabilitasyon:</strong> Serebral Palsi ve gelişimsel gerilikler için özel oyunlaştırılmış terapi odaları ve aile eğitim desteği.</li>
                </ul>

                <h4>🌟 Teknik Dürüst Analiz</h4>
                <p><strong>Dürüst Analiz:</strong> Düzce, fizik tedavide 'Akademik Güvence' arayanlar için bölgenin lideridir. <strong>Güçlü Yönü:</strong> Tedavi süreçlerinin Tıp Fakültesi disipliniyle güncel ve denetimli ilerlemesidir.</p>
            </div>`
        }
    },
    spa: {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400",
        phone: "0380 411 10 00",
        tr: {
            hospName: "Düzce Wellness Noktaları & Akçakoca Sahil SPA Birimleri",
            shortDesc: "🧖‍♂️ Doğanın kalbinde arınma; deniz ve termal etkili modern SPA ritüelleri.",
            analysis: `
            <div class="analysis-content">
                <h4 style="color:#8e44ad;">🌿 Holistik Wellness ve Doğal Detoks</h4>
                <p>Düzce'de Wellness, Karadeniz'in iyot kokulu sahili (Akçakoca) ile orman içi termal kaynakların birleştiği bir 'Yenilenme' sürecidir.</p>
                <ul>
                    <li>🧼 <strong>Hamam ve Termal Arınma:</strong> Hijyenik mermer sıcaklığında kese-köpük ritüelleri ve mineralli su banyoları.</li>
                    <li>💆 <strong>Medikal ve Relax Masajlar:</strong> Kas spazmlarını çözen, lenf drenajını destekleyen ve zihinsel rahatlama sağlayan profesyonel seanslar.</li>
                    <li>🧖‍♂️ <strong>Sauna ve Buhar Odaları:</strong> Solunum yollarını temizleyen, cildi tazeleyen ısıl dinlenme alanları.</li>
                    <li>😌 <strong>Doğa Meditasyonu:</strong> Orman ve su kenarı tesislerde sunulan, stres seviyesini minimize eden huzurlu atmosferler.</li>
                </ul>

                <h4>➡️ Sektörel Durum</h4>
                <p><strong>Dürüst Analiz:</strong> Düzce'de SPA hizmeti, özellikle şehir otelleri ve Akçakoca'daki sahil tesislerinde "Modern ve Kaliteli" bir yapıda sunulur. Şehir yorgunluğunu atmak için Marmara-Karadeniz hattındaki en sakin duraklardan biridir.</p>
            </div>`
        }
    }
},
};
/* ==========================================================
   3. BAŞLATMA VE HARİTA YÖNETİMİ
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('svg-wrapper');
    if (wrapper && typeof worldMapSVG !== 'undefined') {
        renderWorldMap();
        setupDragEvents(wrapper);
    }
});

function renderWorldMap() {
    const wrapper = document.getElementById('svg-wrapper');
    wrapper.innerHTML = worldMapSVG;
    document.getElementById('back-to-world').style.display = "none";
    colorizeMap();
    resetZoom();
}

function renderTurkeyMap() {
    const wrapper = document.getElementById('svg-wrapper');
    if (typeof turkeyMapSVG === 'undefined') return;
    wrapper.style.opacity = "0";
    setTimeout(() => {
        wrapper.innerHTML = turkeyMapSVG;
        document.getElementById('back-to-world').style.display = "block";
        wrapper.style.opacity = "1";
        colorizeTurkeyProvinces();
        resetZoom();
    }, 200);
}

function goBackToWorld() {
    const wrapper = document.getElementById('svg-wrapper');
    wrapper.style.opacity = "0";
    setTimeout(() => { renderWorldMap(); wrapper.style.opacity = "1"; }, 200);
}

/* ==========================================================
   4. BOYAMA VE DİL MOTORU (İYİLEŞTİRİLMİŞ)
   ========================================================== */
function colorizeMap() {
    const paths = document.querySelectorAll('#svg-wrapper svg path');
    const t = translations[currentLang].countries;

    paths.forEach(path => {
        const countryName = t[path.id];
        if (countryName) {
            const isTR = (countryName === "Türkiye" || countryName === "Turkey" || countryName === "Turkiya");
            path.style.fill = isTR ? "#c0392b" : "#b38b1d";
            path.style.cursor = "pointer";
            path.onclick = (e) => {
                e.stopPropagation();
                if (isTR) renderTurkeyMap(); else openModal(countryName);
            };
            path.onmouseenter = function() { this.style.filter = "brightness(1.2)"; };
            path.onmouseleave = function() { this.style.filter = "none"; };
        } else {
            path.style.fill = "#d1d8e0";
        }
    });
}

function colorizeTurkeyProvinces() {
    const provinces = document.querySelectorAll('#svg-wrapper svg path');
    provinces.forEach(p => {
        p.style.fill = "#27ae60"; p.style.stroke = "#fff"; p.style.strokeWidth = "0.3"; p.style.cursor = "pointer";
        p.onclick = (e) => {
            e.stopPropagation();
            const provinceName = p.getAttribute('name') || p.id;
            openModal(provinceName.toUpperCase());
        };
        p.onmouseenter = function() { this.style.fill = "#c0392b"; };
        p.onmouseleave = function() { this.style.fill = "#27ae60"; };
    });
}

function changeLang(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelector('h1').textContent = t.title;
    document.querySelector('#map-container p').textContent = t.subtitle;
    document.getElementById('nav-home').textContent = t.home;
    document.getElementById('nav-about').textContent = t.about;
    document.getElementById('current-lang-text').textContent = t.langName;
    document.getElementById('current-flag').src = t.flag;

    // --- PANEL İÇİ DİL SENKRONİZASYONU ---
    const modal = document.getElementById('countryModal');
    if (modal.style.display === 'flex') {
        const catSpans = document.querySelectorAll('.cat-card span');
        catSpans.forEach((span, index) => { if (t.categories[index]) span.textContent = t.categories[index]; });
        if (activeCategory) loadDetail(activeCategory);
        else openModal(document.getElementById('modal-country-name').textContent);
    }

    const isTurkeyVisible = document.getElementById('back-to-world').style.display === "block";
    if (isTurkeyVisible) colorizeTurkeyProvinces(); else colorizeMap();
}
const cityRankings = {
    hair: [
        { city: "İSTANBUL", score: "10", world: "DÜNYA #1", desc: "Dünyanın en yüksek vaka hacmi ve uluslararası JCI akreditasyonlu klinik ağı." },
        { city: "ANTALYA", score: "9.8", world: "GLOBAL DESTİNASYON", desc: "Tedavi sonrası iyileşme sürecini turizm olanaklarıyla birleştiren lider merkez." },
        { city: "İZMİR", score: "9.5", world: "AVRUPA STANDARDI", desc: "Butik sağlık hizmeti ve kişiye özel saç tasarımında uzmanlaşmış akademik kadro." }
    ],
    eye: [
        { city: "İSTANBUL", score: "10", world: "TEKNOLOJİ LİDERİ", desc: "Robotik lazer cerrahisi ve akıllı lens uygulamalarında dünya çapında vaka rekoru." },
        { city: "ANKARA", score: "9.7", world: "AKADEMİK ÜS", desc: "Karmaşık retina hastalıkları ve kornea nakli operasyonlarında referans noktası." },
        { city: "ŞANLIURFA", score: "9.2", world: "BÖLGESEL MERKEZ", desc: "Güneydoğu ve Ortadoğu'nun en geniş kapasiteli özel göz hastaneleri zinciri." }
    ],
    dental: [
        { city: "ANTALYA", score: "10", world: "DÜNYA #3", desc: "Dijital diş hekimliği ve 'Hollywood Smile' tasarımında Avrupa'nın ana merkezi." },
        { city: "İSTANBUL", score: "9.9", world: "GLOBAL MERKEZ", desc: "İmplant cerrahisi ve çene cerrahisinde en ileri teknolojik donanım ve tecrübe." },
        { city: "İZMİR", score: "9.6", world: "BÖLGESEL YILDIZ", desc: "Lamine ve zirkonyum uygulamalarında dürüst fiyat ve yüksek estetik başarı oranı." }
    ],
    heart: [
        { city: "İSTANBUL", score: "10", world: "DÜNYA STANDARDI", desc: "Açık kalp ve robotik cerrahide global başarı oranlarına sahip üniversite hastaneleri." },
        { city: "ANKARA", score: "9.9", world: "MİLLİ REFERANS", desc: "Kalp nakli ve pediatrik kardiyolojide Türkiye'nin en köklü ve güvenilir akademik üssü." },
        { city: "SAMSUN", score: "9.3", world: "BÖLGESEL LİDER", desc: "Karadeniz ve komşu ülkeler için kompleks vasküler cerrahi operasyon merkezi." }
    ],
    physio: [
        { city: "YALOVA", score: "10", world: "REHABİLİTASYON ÜSSÜ", desc: "Robotik fizik tedavi cihazları ile termal suyun birleştiği dünya çapında bir merkez." },
        { city: "DENİZLİ", score: "9.5", world: "AVRUPA ONAYLI", desc: "Osteoporoz ve felç sonrası rehabilitasyonda medikal termal su desteğiyle yüksek başarı." },
        { city: "BOLU", score: "9.2", world: "DOĞAL ŞİFA", desc: "Sporcu yaralanmaları ve post-operatif fizik tedavide doğa ile iç içe rehabilitasyon." }
    ],
    thermal: [
        { city: "AFYONKARAHİSAR", score: "10", world: "DÜNYA TERMAL BAŞKENTİ", desc: "Mineral yoğunluğu ve medikal çamur banyoları ile tescilli Avrupa şifa noktası." },
        { city: "YALOVA", score: "9.8", world: "TARİHİ ŞİFA", desc: "Dünya Sağlık Örgütü onaylı içilebilir ve banyo yapılabilir altın madalyalı sular." },
        { city: "KÜTAHYA", score: "9.4", world: "BÖLGESEL ŞİFA", desc: "Cilt hastalıkları ve romatizmal ağrılarda dürüst ve doğal çözüm sunan köklü tesisler." }
    ]
};

function updateRankings() {
    const category = document.getElementById('categorySelect').value;
    const grid = document.getElementById('rankingGrid');
    
    // Önce temizle
    grid.innerHTML = '';
    
    if (!category) return;

    cityRankings[category].forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'rank-card';
        
        card.innerHTML = `
            <div class="rank-badge">#${index + 1}</div>
            <h3>${data.city}</h3>
            <p class="description">${data.desc}</p>
            <div class="score-wrapper">
                <div class="score-container">
                    <span class="score-label">Sağlık Puanı</span>
                    <div class="score-value">${data.score}<small style="font-size:1rem; color:#94a3b8">/10</small></div>
                </div>
                <div class="world-status">${data.world}</div>
            </div>
        `;
        
        grid.appendChild(card);
        
        // Animasyonlu giriş
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });
}
/* ==========================================================
   5. PANEL VE DETAY KONTROLÜ
   ========================================================== */
function openModal(name) {
    const modal = document.getElementById('countryModal');
    document.getElementById('modal-country-name').textContent = name.toUpperCase();
    activeCategory = null; 
    
    const t = translations[currentLang];
    document.getElementById('main-description').innerHTML = `
        <div class="welcome-msg" style="text-align:center; padding:20px;">
            <h3>${t.welcomeTitle}</h3><p>${t.welcomeSub}</p>
        </div>`;
    document.getElementById('hospital-card').style.display = 'none';
    modal.style.display = 'flex';
}
function loadDetail(category) {
    activeCategory = category;
    
    // Tıklanan yerin adını al (Adana, Türkiye vb.)
    const rawName = document.getElementById('modal-country-name').textContent.trim();
    
    // Önce Ülke havuzuna bak, bulamazsan Şehir havuzuna bak
    let data = countryDetailedData[rawName] || cityDetailedData[rawName];
    
    // Kategori verisini çek
    const categoryData = data ? data[category] : null;
    const t = translations[currentLang];

    if (!categoryData || !categoryData[currentLang]) {
        document.getElementById('main-description').innerHTML = `
            <div style="padding:30px; text-align:center; color:#e74c3c;">
                <h3>⚠️ Veri Hazırlanıyor</h3>
                <p>${rawName} için bu kategoride dürüst analiz çalışmaları devam etmektedir.</p>
            </div>`;
        document.getElementById('hospital-card').style.display = 'none';
        return;
    }

    const langContent = categoryData[currentLang];
    
    // Sol Tarafa Analizi Yaz
    document.getElementById('main-description').innerHTML = langContent.analysis;

    // Sağ Tarafa Kartı Bas
    const card = document.getElementById('hospital-card');
    card.style.display = 'block';
    const imgSrc = categoryData.img || "https://via.placeholder.com/300x200?text=Gorsel+Hazirlaniyor";
    
    card.innerHTML = `
        <div style="height:160px; overflow:hidden; border-radius:10px; margin-bottom:12px; border:1px solid #ddd;">
            <img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;">
        </div>
       <h4 style="margin:8px 0 2px 0; font-family:'Montserrat'; font-weight:800; font-size:14px; color:#1e293b;">
            🏥 ${langContent.hospName}
        </h4>
        <p style="margin:0 0 10px 0; font-size:12px; font-weight:400; color:#64748b; font-style:italic;">
            ${langContent.shortDesc || "Detaylı inceleme raporu mevcuttur."}
        </p>
        <div style="margin-top:10px;">
            <a href="tel:${categoryData.phone || '#'}" class="call-btn" style="display:block; background:#27ae60; color:white; text-align:center; padding:10px; border-radius:6px; text-decoration:none; font-weight:700; font-size:13px;">
                📞 ${t.callBtn || 'İLETİŞİME GEÇ'}
            </a>
        </div>
    `;
}

function closeModal() { document.getElementById('countryModal').style.display = 'none'; }
// Sayfa yüklendiğinde select kutularını 81 ille doldur
function populateCompareSelects() {
    const s1 = document.getElementById('cityOne');
    const s2 = document.getElementById('cityTwo');
    const cities = Object.keys(cityDetailedData).sort();

    cities.forEach(city => {
        let opt1 = document.createElement('option');
        opt1.value = city;
        opt1.innerHTML = city;
        s1.appendChild(opt1);

        let opt2 = document.createElement('option');
        opt2.value = city;
        opt2.innerHTML = city;
        s2.appendChild(opt2);
    });
}

function runComparison() {
    const c1Key = document.getElementById('cityOne').value;
    const c2Key = document.getElementById('cityTwo').value;
    const resultDiv = document.getElementById('comparisonResult');

    if (!c1Key || !c2Key) return;

    const c1 = cityDetailedData[c1Key];
    const c2 = cityDetailedData[c2Key];

    resultDiv.innerHTML = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th class="feature-title">ÖZELLİK</th>
                    <th><div class="compare-city-name">${c1Key}</div></th>
                    <th><div class="compare-city-name">${c2Key}</div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="feature-title">🏥 Cerrahi Altyapı & Hastane</td>
                    <td>
                        <strong>${c1.surgery.tr.hospName}</strong>
                        <div class="compare-desc">${c1.surgery.tr.analysis}</div>
                    </td>
                    <td>
                        <strong>${c2.surgery.tr.hospName}</strong>
                        <div class="compare-desc">${c2.surgery.tr.analysis}</div>
                    </td>
                </tr>
                <tr>
                    <td class="feature-title">♨️ Termal & Şifa Kaynakları</td>
                    <td>
                        <strong>${c1.thermal.tr.hospName}</strong>
                        <div class="compare-desc">${c1.thermal.tr.analysis}</div>
                    </td>
                    <td>
                        <strong>${c2.thermal.tr.hospName}</strong>
                        <div class="compare-desc">${c2.thermal.tr.analysis}</div>
                    </td>
                </tr>
             <tr>
                    <td class="feature-title">👵 Yaşlı Bakım</td>
                    <td>
                        <strong>${c1.elderly ? c1.elderly.tr.hospName : '-'}</strong>
                        <div class="compare-desc">${c1.elderly ? c1.elderly.tr.analysis : '-'}</div>
                    </td>
                    <td>
                        <strong>${c2.elderly ? c2.elderly.tr.hospName : '-'}</strong>
                        <div class="compare-desc">${c2.elderly ? c2.elderly.tr.analysis : '-'}</div>
                    </td>
                </tr>
                <tr>
                    <td class="feature-title">♿ Engelli Bakım</td>
                    <td>
                        <strong>${c1.disabled ? c1.disabled.tr.hospName : '-'}</strong>
                        <div class="compare-desc">${c1.disabled ? c1.disabled.tr.analysis : '-'}</div>
                    </td>
                    <td>
                        <strong>${c2.disabled ? c2.disabled.tr.hospName : '-'}</strong>
                        <div class="compare-desc">${c2.disabled ? c2.disabled.tr.analysis : '-'}</div>
                    </td>
                </tr>
                <tr>
                    <td class="feature-title">💆 Wellness & SPA</td>
                    <td>
                        <div class="compare-desc">${c1.spa.tr.analysis}</div>
                    </td>
                    <td>
                        <div class="compare-desc">${c2.spa.tr.analysis}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

// Başlat
populateCompareSelects();
// Şehirlerin cerrahi gücünü puanlayan yardımcı motor (Statik veri tabanlı)
const surgicalScores = {
    "İSTANBUL": 5, "ANKARA": 5, "ANTALYA": 4, "İZMİR": 4, "BURSA": 4, 
    "KOCAELİ": 4, "ADANA": 3, "SAMSUN": 3, "GAZİANTEP": 3
    // Diğerleri varsayılan 2 veya 3 dönecek
};

function getStars(city) {
    const score = surgicalScores[city] || 3;
    return "★".repeat(score) + "☆".repeat(5 - score);
}

function runComparison() {
    const c1Key = document.getElementById('cityOne').value;
    const c2Key = document.getElementById('cityTwo').value;
    const resultDiv = document.getElementById('comparisonResult');

    if (!c1Key || !c2Key) return;

    const c1 = cityDetailedData[c1Key];
    const c2 = cityDetailedData[c2Key];

    // Öne çıkarma mantığı (Puanı yüksek olanı belirle)
    const score1 = surgicalScores[c1Key] || 3;
    const score2 = surgicalScores[c2Key] || 3;

    resultDiv.innerHTML = `
        <div class="compare-actions">
            <button class="pdf-btn" onclick="exportToPDF()">
                <span>📄</span> Tıbbi Rapor Olarak İndir (PDF)
            </button>
        </div>
        <table class="compare-table" id="comparisonTable">
            <thead>
                <tr>
                    <th class="feature-title">MEDİKAL ANALİZ</th>
                    <th class="${score1 > score2 ? 'recommended-cell' : ''}">
                        ${score1 > score2 ? '<span class="recommended-badge">Önerilen</span>' : ''}
                        <div class="compare-city-name">${c1Key}</div>
                        <div class="star-rating">${getStars(c1Key)}</div>
                    </th>
                    <th class="${score2 > score1 ? 'recommended-cell' : ''}">
                        ${score2 > score1 ? '<span class="recommended-badge">Önerilen</span>' : ''}
                        <div class="compare-city-name">${c2Key}</div>
                        <div class="star-rating">${getStars(c2Key)}</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="feature-title">🏥 Cerrahi Yetkinlik</td>
                    <td class="${score1 > score2 ? 'recommended-cell' : ''}">
                        <strong>${c1.surgery.tr.hospName}</strong>
                        <div class="compare-desc">${c1.surgery.tr.analysis}</div>
                    </td>
                    <td class="${score2 > score1 ? 'recommended-cell' : ''}">
                        <strong>${c2.surgery.tr.hospName}</strong>
                        <div class="compare-desc">${c2.surgery.tr.analysis}</div>
                    </td>
                </tr>
                <tr>
                    <td class="feature-title">♨️ Termal Destek</td>
                    <td>
                        <strong>${c1.thermal.tr.hospName}</strong>
                        <div class="compare-desc">${c1.thermal.tr.analysis}</div>
                    </td>
                    <td>
                        <strong>${c2.thermal.tr.hospName}</strong>
                        <div class="compare-desc">${c2.thermal.tr.analysis}</div>
                    </td>
                </tr>
                <tr>
                    <td class="feature-title">🌿 Rehabilitasyon</td>
                    <td>
                        <strong>${c1.care.tr.hospName}</strong>
                        <div class="compare-desc">${c1.care.tr.analysis}</div>
                    </td>
                    <td>
                        <strong>${c2.care.tr.hospName}</strong>
                        <div class="compare-desc">${c2.care.tr.analysis}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

// PDF Export Fonksiyonu (Kurumsal çıktı için optimize edilmiş print)
function exportToPDF() {
    const originalContent = document.body.innerHTML;
    const printContent = document.getElementById('comparisonTable').outerHTML;
    const c1Name = document.getElementById('cityOne').value;
    const c2Name = document.getElementById('cityTwo').value;

    document.body.innerHTML = `
        <div style="padding:40px; font-family:Arial;">
            <h1 style="color:#1e293b; border-bottom:2px solid #3b82f6; padding-bottom:10px;">Medikal Şehir Karşılaştırma Raporu</h1>
            <p>Rapor Tarihi: ${new Date().toLocaleDateString('tr-TR')}</p>
            <p>Analiz Edilen Şehirler: ${c1Name} ve ${c2Name}</p>
            <br>
            ${printContent}
            <footer style="margin-top:30px; font-size:12px; color:#64748b;">
                * Bu rapor Türkiye Sağlık Turizmi Bilgi Portalı tarafından otomatik oluşturulmuştur.
            </footer>
        </div>
    `;
    window.print();
    document.body.innerHTML = originalContent;
    // Sayfayı tekrar çalışır hale getir
    populateCompareSelects();
}

/* --- KURUMSAL RANDEVU SİSTEMİ JS --- */
let slideInterval;
let currentIndex = 0;
const totalSlides = 3;

// Sayfayı Aç
function openPremiumAppointment() {
    document.getElementById('premiumOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Arka planı kilitle
    
    // Şehirleri Doldur (Sadece bir kez)
    const citySelect = document.getElementById('premCitySelect');
    if(citySelect.options.length === 1) {
        Object.keys(cityDetailedData).sort().forEach(city => {
            let option = document.createElement('option');
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }

    // Video Slider'ı Başlat
    startSlider();
}

// Sayfayı Kapat
function closePremiumAppointment() {
    document.getElementById('premiumOverlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Kaydırmayı aç
    stopSlider();
}

// Slider Mantığı (Soldan sağa kayma)
function startSlider() {
    // İlk videoyu oynat
    document.getElementById(`vid${currentIndex + 1}`).play();
    
    slideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalSlides) currentIndex = 0;
        
        // Kaydırma İşlemi (Transform Translate)
        const track = document.getElementById('videoTrack');
        track.style.transform = `translateX(-${currentIndex * 33.333}%)`;
        
        // Yeni videoyu oynat, öncekileri durdur (Performans için)
        document.querySelectorAll('.video-item video').forEach(v => v.pause());
        const nextVideo = document.getElementById(`vid${currentIndex + 1}`);
        nextVideo.currentTime = 0;
        nextVideo.play();
        
        // Yazı Animasyonlarını Sıfırla (Yeniden tetiklenmesi için)
        resetTextAnimations();
        
    }, 6000); // 6 saniyede bir geçiş
}

function stopSlider() {
    clearInterval(slideInterval);
    document.querySelectorAll('.video-item video').forEach(v => v.pause());
}

function resetTextAnimations() {
    // Yazı animasyonlarını DOM'dan kaldırıp tekrar ekleyerek "Replay" etkisi yaratıyoruz
    const contents = document.querySelectorAll('.hero-content');
    contents.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; /* Trigger reflow */
        el.style.animation = null; 
    });
}

// Şehir Seçilince Hastane Getir
function loadHospitals() {
    const cityKey = document.getElementById('premCitySelect').value;
    const hospSelect = document.getElementById('premHospSelect');
    
    hospSelect.innerHTML = '<option value="">Hastane Seçiniz...</option>';
    hospSelect.disabled = true;

    if (cityKey && cityDetailedData[cityKey]) {
        hospSelect.disabled = false;
        
        // Ana Hastane
        let opt1 = document.createElement('option');
        opt1.value = "hosp_main";
        opt1.text = cityDetailedData[cityKey].surgery.tr.hospName;
        hospSelect.appendChild(opt1);

        // Varsayılan Termal Tesis (Varsa)
        if(cityDetailedData[cityKey].thermal.tr.hospName) {
            let opt2 = document.createElement('option');
            opt2.value = "hosp_thermal";
            opt2.text = cityDetailedData[cityKey].thermal.tr.hospName + " (Termal Ünite)";
            hospSelect.appendChild(opt2);
        }
    }
}

// Uyarı Modalı
function openWarningModal() {
    const city = document.getElementById('premCitySelect').value;
    const hosp = document.getElementById('premHospSelect').value;

    if(!city || !hosp) {
        alert("Lütfen önce şehir ve kurum seçimi yapınız.");
        return;
    }
    document.getElementById('infoModal').style.display = 'flex';
}

function closeWarningModal() {
    document.getElementById('infoModal').style.display = 'none';
}
/* --- AKILLI VE GERÇEKÇİ ULAŞIM ASİSTANI --- */
let transSlideInterval;
let transIndex = 0;

// Sayfayı Açma Fonksiyonu
function openTransportModal() {
    document.getElementById('transportOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Şehir Seçeneklerini Doldur (Eğer boşsa)
    const destSelect = document.getElementById('destCitySelect');
    if(destSelect.options.length === 1) {
        // cityDetailedData senin ana verinden illeri çeker
        Object.keys(cityDetailedData).sort().forEach(city => {
            let option = document.createElement('option');
            option.value = city;
            option.text = city;
            destSelect.appendChild(option);
        });
    }
    startTransportSlider();
}

// Sayfayı Kapatma
function closeTransportModal() {
    document.getElementById('transportOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
    stopTransportSlider();
}

/* --- VİDEO SLIDER MOTORU --- */
function startTransportSlider() {
    const vids = [document.getElementById('transVid1'), document.getElementById('transVid2'), document.getElementById('transVid3')];
    vids[transIndex].play();
    
    transSlideInterval = setInterval(() => {
        transIndex++;
        if (transIndex >= 3) transIndex = 0;
        
        const track = document.getElementById('transportVideoTrack');
        track.style.transform = `translateX(-${transIndex * 33.333}%)`;
        
        vids.forEach(v => { v.pause(); v.currentTime = 0; });
        vids[transIndex].play();
    }, 6000);
}

function stopTransportSlider() {
    clearInterval(transSlideInterval);
    document.querySelectorAll('#transportVideoTrack video').forEach(v => v.pause());
}

/* --- GERÇEKÇİ ROTA MOTORU (LOJİSTİK ZEKA) --- */

// Türkiye Havalimanı ve Lojistik Veri Tabanı
const logisticsMasterData = {
    // DOĞU & GÜNEYDOĞU
    "SİİRT": { airport: "Siirt Havalimanı (SXZ)", alt: "Batman Havalimanı", note: "Havalimanından merkeze belediye servisleri ve taksi ile 15 dakikada ulaşabilirsiniz." },
    "BATMAN": { airport: "Batman Havalimanı (BAL)", alt: "Diyarbakır Havalimanı", note: "Belediye otobüsleri uçuş saatlerine göre servis düzenlemektedir." },
    "DİYARBAKIR": { airport: "Diyarbakır Havalimanı (DIY)", alt: "Direkt Uçuş Mevcut", note: "Belediye otobüsleri ve ticari taksilerle 20 dakikada merkezdesiniz." },
    "VAN": { airport: "Van Ferit Melen Havalimanı (VAN)", alt: "Direkt Uçuş", note: "HAVAŞ ve belediye otobüsleri aktif olarak çalışmaktadır." },
    "MARDİN": { airport: "Mardin Prof. Dr. Aziz Sancar Havalimanı (MQM)", alt: "Direkt Uçuş", note: "Kızıltepe ve Merkez istikametine HAVAŞ servisleri bulunur." },
    "ŞANLIURFA": { airport: "Şanlıurfa GAP Havalimanı (GNY)", alt: "Direkt Uçuş", note: "HAVAŞ servisleri ile şehir merkezi yaklaşık 45-50 dakikadır." },
    "ADIYAMAN": { airport: "Adıyaman Havalimanı (ADF)", alt: "Direkt Uçuş", note: "Halk otobüsleri ile ulaşım sağlanabilir." },
    "GAZİANTEP": { airport: "Gaziantep Havalimanı (GZT)", alt: "Direkt Uçuş", note: "Otobüs servisleri ile şehir merkezi yaklaşık 25-30 dakikadır." },
    // BATI & MERKEZ
    "İSTANBUL": { airport: "İstanbul (IST) veya Sabiha Gökçen (SAW)", alt: "Hızlı Tren", note: "HAVAİST, Metro veya Marmaray ile her noktaya kesintisiz ulaşım." },
    "ANKARA": { airport: "Esenboğa Havalimanı (ESB)", alt: "Yüksek Hızlı Tren", note: "BelkoAir ve EGO otobüsleri ile Kızılay/AŞTİ noktalarına ulaşım." },
    "İZMİR": { airport: "Adnan Menderes Havalimanı (ADB)", alt: "İZBAN", note: "İZBAN banliyö hattı veya HAVAŞ ile şehir merkezine kolay erişim." },
    "BİLECİK": { airport: "Havalimanı Bulunmuyor", alt: "Yüksek Hızlı Tren (YHT)", note: "İstanbul veya Ankara'dan YHT ile en hızlı ulaşım sağlanan ildir." },
    "YALOVA": { airport: "Sabiha Gökçen Havalimanı (SAW)", alt: "İDO / Deniz Otobüsü", note: "Havalimanından servislerle Pendik İDO iskelesine geçip deniz yoluyla ulaşabilirsiniz." },
    "BURSA": { airport: "Yenişehir Havalimanı (YEI)", alt: "Sabiha Gökçen (SAW)", note: "Sabiha Gökçen'den kalkan BBBUS otobüsleri ile direkt Bursa Terminali'ne geçilir." },
    "BALIKESİR": { airport: "Balıkesir Koca Seyit Havalimanı (EDO)", alt: "Direkt Uçuş", note: "HAVAŞ servisleri ile şehir merkezi yaklaşık 20-25 dakikadır." },
    "ANTALYA": { airport: "Antalya Havalimanı (AYT)", alt: "Direkt Uçuş", note: "Antray (Tramvay) veya HAVAŞ ile şehir merkezine ulaşım çok rahattır." }
};

function calculateSmartRoute() {
    const originCity = document.getElementById('originCity').value.trim();
    const destCity = document.getElementById('destCitySelect').value;
    const resultDiv = document.getElementById('routeResult');

    if(!destCity || !originCity) {
        alert("Lütfen nereden geldiğinizi yazın ve hedef şehri seçin.");
        return;
    }

    // Veriyi Çek (Eğer listede yoksa genel bir şablon oluştur)
    let info = logisticsMasterData[destCity] || { 
        airport: `${destCity} ve çevre illerdeki Havalimanları`, 
        alt: "Şehirlerarası Otobüs", 
        note: "Bölgedeki yerel ulaşım hatları ve otogar servislerini kullanabilirsiniz." 
    };

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div style="border-bottom: 2px solid #2c3e50; margin-bottom: 20px; padding-bottom: 10px;">
            <h4 style="color:#2c3e50; font-family:'Montserrat';">
                <i class="fa-solid fa-route"></i> ${originCity.toUpperCase()} ➔ ${destCity} Ulaşım Rehberi
            </h4>
        </div>
        
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-icon"><i class="fa-solid fa-plane-up"></i></div>
                <div class="timeline-content">
                    <h4>Hava Yolu Planı</h4>
                    <p>Tercih Edilmesi Gereken: <strong>${info.airport}</strong></p>
                    <small style="color:#7f8c8d;">Alternatif / Bağlantı: ${info.alt}</small>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-icon"><i class="fa-solid fa-bus"></i></div>
                <div class="timeline-content">
                    <h4>Şehir İçi Aktarma (Kamu)</h4>
                    <p>${info.note}</p>
                    <p style="font-size: 0.8rem; color: #d35400; font-weight: 600;">
                        <i class="fa-solid fa-circle-info"></i> Not: Kurumumuzun özel transfer hizmeti bulunmamaktadır.
                    </p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="timeline-content">
                    <h4>Varış</h4>
                    <p>${destCity} merkezindeki sağlık merkezine toplu taşıma veya ticari taksi ile ulaşım tamamlanır.</p>
                </div>
            </div>
        </div>

        <div style="text-align:center; margin-top:25px; padding-top:20px; border-top:1px solid #eee;">
            <p style="font-size:0.85rem; margin-bottom:15px;">Anlık bilet fiyatları ve toplu taşıma saatleri için dış bağlantı:</p>
            <a href="https://www.google.com/maps/dir/${originCity}/${destCity}" target="_blank" class="live-map-btn">
                <i class="fa-brands fa-google"></i> Google Haritalar'da Rotayı İncele
            </a>
        </div>
    `;

    // Sonuca yumuşakça kaydır
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

const globalStats = {
    dental: { tr: 600, uk: 3200, usa: 4800, ger: 2500, label: "Diş İmplantı" },
    hair: { tr: 2200, uk: 14000, usa: 18000, ger: 12000, label: "Saç Ekimi" },
    gastric: { tr: 4500, uk: 12500, usa: 20000, ger: 13000, label: "Mide Tüpü" },
    rhino: { tr: 3200, uk: 9000, usa: 13000, ger: 8500, label: "Burun Estetiği" },
    eye: { tr: 1300, uk: 4800, usa: 6500, ger: 4200, label: "Göz Lazer" }
};

function toggleSideMenu() { document.getElementById('sideMenu').classList.toggle('open'); }
function closeSideMenu() { document.getElementById('sideMenu').classList.remove('open'); }

function openAnalysis() {
    closeSideMenu();
    document.getElementById('analysisPage').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAnalysis() {
    document.getElementById('analysisPage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateRealTimeData() {
    const val = document.getElementById('treatmentSelect').value;
    const display = document.getElementById('dataDisplay');
    if(!val) { display.style.display = 'none'; return; }

    const d = globalStats[val];
    display.style.display = 'block';
    
    // Türkiye'nin ortalama tasarruf yüzdesi (Dünya ortalamasına göre)
    const avgGlobal = (d.uk + d.usa + d.ger) / 3;
    const savePercent = Math.round(((avgGlobal - d.tr) / avgGlobal) * 100);

    display.innerHTML = `
        <div class="data-card-grid">
            <div class="val-card turkey">
                <label>TÜRKİYE</label>
                <h3>$${d.tr.toLocaleString()}</h3>
                <small>Hastaneler Ortalama</small>
            </div>
            <div class="val-card">
                <label>İNGİLTERE</label>
                <h3>$${d.uk.toLocaleString()}</h3>
                <span style="color:#ef4444">+%${Math.round((d.uk-d.tr)/d.tr*100)} Fazla</span>
            </div>
            <div class="val-card">
                <label>ABD</label>
                <h3>$${d.usa.toLocaleString()}</h3>
                <span style="color:#ef4444">+%${Math.round((d.usa-d.tr)/d.tr*100)} Fazla</span>
            </div>
        </div>
        
        <div style="margin-top:40px; text-align:center; padding:30px; border:2px dashed #10b981; border-radius:10px;">
            <p style="margin:0; font-weight:700; color:#065f46;">
                <i class="fa-solid fa-check"></i> Seçtiğiniz operasyonda Türkiye, global ortalamaya göre <span class="savings-badge">%${savePercent}</span> daha avantajlıdır.
            </p>
        </div>
    `;
}
function updateRealTimeData() {
    const val = document.getElementById('treatmentSelect').value;
    const display = document.getElementById('dataDisplay');
    
    if(!val) {
        display.style.opacity = '0';
        setTimeout(() => display.style.display = 'none', 300);
        return;
    }

    const d = globalStats[val];
    display.style.display = 'block';
    display.style.opacity = '1';
    
    const avgGlobal = (d.uk + d.usa + d.ger) / 3;
    const savePercent = Math.round(((avgGlobal - d.tr) / avgGlobal) * 100);

    display.innerHTML = `
        <div class="data-card-grid">
            <div class="val-card turkey">
                <label><i class="fa-solid fa-star"></i> TÜRKİYE (Avantaj)</label>
                <h3>$${d.tr.toLocaleString()}</h3>
                <p>Uluslararası Standart</p>
            </div>
            <div class="val-card">
                <label>BİRLEŞİK KRALLIK</label>
                <h3>$${d.uk.toLocaleString()}</h3>
                <span class="diff-badge">+%${Math.round((d.uk-d.tr)/d.tr*100)} Maliyet</span>
            </div>
            <div class="val-card">
                <label>ABD</label>
                <h3>$${d.usa.toLocaleString()}</h3>
                <span class="diff-badge">+%${Math.round((d.usa-d.tr)/d.tr*100)} Maliyet</span>
            </div>
        </div>
        
        <div class="savings-info-box" style="margin-top:50px; padding:30px; background:#ecfdf5; border-radius:12px; border:1px solid #10b981; text-align:center; animation: fadeIn 1s ease;">
            <h4 style="color:#065f46; margin:0;">
                <i class="fa-solid fa-shield-heart"></i> 
                Bu tedavide Türkiye'yi seçerek ortalama <span style="font-size:1.5rem; font-weight:900;">%${savePercent}</span> oranında tasarruf sağlıyorsunuz.
            </h4>
        </div>
    `;
}
/* ==========================================================
   6. ZOOM VE DRAG (KORUNAN FONKSİYONLAR)
   ========================================================== */
function updateTransform() {
    const svg = document.querySelector('#svg-wrapper svg');
    if (svg) svg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}
function zoomMap(direction) {
    if (direction === 'in') scale += 0.4; else { scale -= 0.4; if (scale <= 1) resetZoom(); }
    updateTransform();
}
function resetZoom() { scale = 1; pointX = 0; pointY = 0; updateTransform(); }
function setupDragEvents(wrapper) {
    wrapper.onmousedown = (e) => { if (scale > 1) { isDragging = true; start = { x: e.clientX - pointX, y: e.clientY - pointY }; } };
    window.onmousemove = (e) => { if (!isDragging) return; pointX = e.clientX - start.x; pointY = e.clientY - start.y; updateTransform(); };
    window.onmouseup = () => { isDragging = false; };
}

window.onclick = (e) => { if (e.target == document.getElementById('countryModal')) closeModal(); };
/* --- FAQ (Sıkça Sorulan Sorular) Açma/Kapama --- */

function openFAQ() {
    // Menüden tıklanınca tam ekran açılır
    document.getElementById("faqOverlay").classList.add("active");
    // Arka plandaki sayfanın kaymasını engelleyelim
    document.body.style.overflow = "hidden";
}

function closeFAQ() {
    // Geri dön butonuna basınca kapanır
    document.getElementById("faqOverlay").classList.remove("active");
    // Arka plan tekrar kaydırılabilir olsun
    document.body.style.overflow = "auto";
}

/* --- Akordiyon Çalışma Mantığı --- */
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        // Tıklanan soruyu aktif yap (rengini değiştir, ikonu döndür)
        this.classList.toggle("active");

        // Cevap kısmını bul
        const panel = this.nextElementSibling;

        // Eğer açıksa kapat, kapalıysa aç (Yükseklik ayarı ile animasyon)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            // Önce diğer tüm açık olanları kapat (Opsiyonel: İstersen bu bloğu silebilirsin)
            document.querySelectorAll(".accordion-body").forEach(body => body.style.maxHeight = null);
            document.querySelectorAll(".accordion-header").forEach(header => header.classList.remove("active"));
            this.classList.add("active");
            
            // Şimdi tıklananı aç
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
function toggleCulturePanel() {
    const overlay = document.getElementById('culture-overlay');
    // Eğer kapalıysa aç, açıksa kapat
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}

function toggleHighContrast() {
    // Body etiketine 'high-contrast' ismini ekleyip çıkarır
    document.body.classList.toggle('high-contrast');
    
    // Konsola bilgi verelim (Çalışıp çalışmadığını anlamak için F12'den bakabilirsin)
    console.log("Erişilebilirlik Modu: " + (document.body.classList.contains('high-contrast') ? "AÇIK" : "KAPALI"));
}
