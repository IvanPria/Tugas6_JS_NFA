import users from "./data.js";

// Function untuk melihat semua data
const index = () => {
    console.log("=== DAFTAR SEMUA USER ===");
    users.forEach((user, idx) => {
        console.log(`${idx + 1}. Nama: ${user.nama}`);
        console.log(`   Umur: ${user.umur} tahun`);
        console.log(`   Alamat: ${user.alamat}`);
        console.log(`   Email: ${user.email}`);
        console.log("------------------------");
    });
    console.log(`Total user: ${users.length}`);
    return users;
};

// Function untuk menambah data baru (push)
const store = (userData) => {
    // Validasi input
    if (!userData || !userData.nama || !userData.umur || !userData.alamat || !userData.email) {
        console.log("Error: Data tidak lengkap! Pastikan ada nama, umur, alamat, dan email.");
        return false;
    }
    
    // Menambah data ke array
    users.push(userData);
    console.log("=== DATA BERHASIL DITAMBAHKAN ===");
    console.log(`Nomor: ${users.length}`);
    console.log(`Nama: ${userData.nama}`);
    console.log(`Umur: ${userData.umur} tahun`);
    console.log(`Alamat: ${userData.alamat}`);
    console.log(`Email: ${userData.email}`);
    console.log(`Total user sekarang: ${users.length}`);
    return userData;
};

// Function untuk menghapus data berdasarkan index
const destroy = (index) => {
    // Validasi index
    if (index < 0 || index >= users.length) {
        console.log(`Error: Index ${index} tidak valid! Index harus antara 0-${users.length - 1}`);
        return false;
    }
    
    // Simpan data yang akan dihapus untuk ditampilkan
    const deletedUser = users[index];
    
    // Hapus data dari array
    users.splice(index, 1);
    
    console.log("=== DATA BERHASIL DIHAPUS ===");
    console.log(`Nomor: ${index + 1}`);
    console.log(`Nama: ${deletedUser.nama}`);
    console.log(`Umur: ${deletedUser.umur} tahun`);
    console.log(`Alamat: ${deletedUser.alamat}`);
    console.log(`Email: ${deletedUser.email}`);
    console.log(`Total user sekarang: ${users.length}`);
    return deletedUser;
};

// Function untuk menampilkan data dengan map()
const displayWithMap = () => {
    console.log("=== MENAMPILKAN DATA DENGAN MAP() ===");
    const mappedUsers = users.map((user, idx) => {
        return {
            nomor: idx + 1,
            namaLengkap: user.nama,
            usia: `${user.umur} tahun`,
            alamatLengkap: user.alamat,
            emailAddress: user.email,
            info: `${user.nama} (${user.umur} tahun) - ${user.email}`
        };
    });
    
    // Tampilkan hasil mapping
    mappedUsers.forEach(user => {
        console.log(`${user.nomor}. ${user.info}`);
    });
    
    console.log(`Total data: ${mappedUsers.length}`);
    return mappedUsers;
};

// Function untuk menampilkan menu
const showMenu = () => {
    console.log("\n" + "=".repeat(50));
    console.log("🚀 APLIKASI MANAJEMEN USER");
    console.log("=".repeat(50));
    console.log("1. Lihat semua data");
    console.log("2. Tambah data baru");
    console.log("3. Hapus data");
    console.log("4. Tampilkan data dengan map()");
    console.log("5. Demo otomatis (requirements)");
    console.log("0. Keluar");
    console.log("=".repeat(50));
};

// Function utama untuk testing (sesuai requirements)
const demoOtomatis = () => {
    console.log("🚀 DEMO OTOMATIS - SESUAI REQUIREMENTS\n");
    
    // 1. Tampilkan semua data
    index();
    
    // 2. Tambah 2 data baru
    console.log("\n📝 MENAMBAH DATA BARU:");
    store({
        nama: 'Farah Nabila',
        umur: 22,
        alamat: 'Jl. Imam Bonjol No. 5, Padang',
        email: 'farah.nabila@email.com'
    });
    
    store({
        nama: 'Hendra Gunawan',
        umur: 35,
        alamat: 'Jl. Hayam Wuruk No. 18, Batam',
        email: 'hendra.gunawan@email.com'
    });
    
    // 3. Tampilkan data dengan map()
    console.log("\n🗺️ MENAMPILKAN DATA DENGAN MAP:");
    displayWithMap();
    
    // 4. Hapus satu data (index 0)
    console.log("\n🗑️ MENGHAPUS DATA:");
    destroy(0);
    
    // 5. Tampilkan data final
    console.log("\n📊 DATA FINAL:");
    index();
    
    console.log("\n✅ Demo selesai! Requirements sudah terpenuhi.");
};

export { index, store, destroy, displayWithMap, demoOtomatis, showMenu };
