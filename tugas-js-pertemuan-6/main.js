import { index, store, destroy, displayWithMap, demoOtomatis, showMenu } from "./controller.js";
import readline from 'readline';

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function untuk input data baru
const inputDataBaru = () => {
    console.log("\n📝 TAMBAH DATA BARU:");
    rl.question("Masukkan nama: ", (nama) => {
        rl.question("Masukkan umur: ", (umur) => {
            rl.question("Masukkan alamat: ", (alamat) => {
                rl.question("Masukkan email: ", (email) => {
                    const userData = {
                        nama: nama,
                        umur: parseInt(umur),
                        alamat: alamat,
                        email: email
                    };
                    store(userData);
                    tampilkanMenu();
                });
            });
        });
    });
};

// Function untuk hapus data
const hapusData = () => {
    console.log("\n🗑️ HAPUS DATA:");
    console.log("Daftar user saat ini:");
    users.forEach((user, idx) => {
        console.log(`${idx + 1}. ${user.nama} (${user.umur} tahun)`);
    });
    
    rl.question(`Masukkan nomor yang akan dihapus (1-${users.length}): `, (nomorInput) => {
        const nomor = parseInt(nomorInput);
        const index = nomor - 1; // Convert nomor tampilan ke index array
        
        if (nomor < 1 || nomor > users.length) {
            console.log(`❌ Nomor ${nomor} tidak valid! Pilih antara 1-${users.length}`);
            tampilkanMenu();
            return;
        }
        
        destroy(index);
        tampilkanMenu();
    });
};

// Import users untuk keperluan hapus data
import users from "./data.js";

// Function untuk menampilkan menu dan handle input
const tampilkanMenu = () => {
    showMenu();
    rl.question("Pilih menu (0-5): ", (choice) => {
        switch(choice) {
            case '1':
                console.log("\n📋 MENAMPILKAN SEMUA DATA:");
                index();
                tampilkanMenu();
                break;
                
            case '2':
                inputDataBaru();
                break;
                
            case '3':
                if (users.length === 0) {
                    console.log("❌ Tidak ada data untuk dihapus!");
                    tampilkanMenu();
                } else {
                    hapusData();
                }
                break;
                
            case '4':
                console.log("\n🗺️ MENAMPILKAN DATA DENGAN MAP:");
                displayWithMap();
                tampilkanMenu();
                break;
                
            case '5':
                demoOtomatis();
                tampilkanMenu();
                break;
                
            case '0':
                console.log("👋 Terima kasih! Aplikasi ditutup.");
                rl.close();
                break;
                
            default:
                console.log("❌ Pilihan tidak valid! Silakan pilih 0-5.");
                tampilkanMenu();
                break;
        }
    });
};

tampilkanMenu();