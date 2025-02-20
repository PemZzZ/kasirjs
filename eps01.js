let totalHarga = 0; // Menyimpan total harga
const listPesanan = document.getElementById("list-pesanan");
const totalHargaDisplay = document.getElementById("total-harga");

// Fungsi untuk menambahkan item ke daftar pesanan
function tambahPesanan(nama, harga) {
    totalHarga += harga;
    totalHargaDisplay.textContent = "Rp " + totalHarga.toLocaleString("id-ID");

    // Buat elemen list pesanan
    const li = document.createElement("li");
    li.className = "flex justify-between items-center bg-gray-100 p-2 rounded-lg";

    li.innerHTML = `
        <span>${nama} - Rp ${harga.toLocaleString("id-ID")}</span>
        <button class="hapus bg-red-500  hover:bg-green-600 text-white px-2 py-1 rounded" data-price="${harga}">X</button>
    `;

    // Tambahkan event listener untuk tombol hapus
    li.querySelector(".hapus").addEventListener("click", function() {
        hapusPesanan(this, harga);
    });

    listPesanan.appendChild(li);
}

// Fungsi untuk menghapus pesanan
function hapusPesanan(tombol, harga) {
    totalHarga -= harga;
    totalHargaDisplay.textContent = "Rp " + totalHarga.toLocaleString("id-ID");
    tombol.parentElement.remove(); // Hapus elemen dari daftar pesanan
}

// Event listener untuk semua tombol "pesan"
document.querySelectorAll(".pesan").forEach(button => {
    button.addEventListener("click", function() {
        const nama = this.getAttribute("data-name");
        const harga = parseInt(this.getAttribute("data-price"));
        tambahPesanan(nama, harga);
    });
});
