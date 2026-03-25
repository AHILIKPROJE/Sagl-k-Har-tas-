// 1. Firebase Kimlik Bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyCz10meKWmIoCKbca9z-UYDrT3wNI69WQc",
  authDomain: "sosyalfest-79162.firebaseapp.com",
  projectId: "sosyalfest-79162",
  storageBucket: "sosyalfest-79162.firebasestorage.app",
  messagingSenderId: "291087183182",
  appId: "1:291087183182:web:27ab7664cc9df60d79421f"
};

// 2. Sistemi Başlat
firebase.initializeApp(firebaseConfig);

// 3. İleride kullanacağımız yetki (auth) ve veritabanı (db) anahtarları
const auth = firebase.auth();
const db = firebase.firestore();

console.log("✅ Manager Sistemi: Firebase Bağlantısı Kuruldu!");
