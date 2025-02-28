document.addEventListener("DOMContentLoaded", function() {
  const steps = [
{ element: null, intro: 'Hallo Admin! Selamat datang di Dashboard yuk pelajari fitur-fitur di Dashboard agar dapat mengelola presensi dengan baik !' },
{ element: '#open-presensi', intro: 'Button ini berfungsi untuk membuka sesi presensi. Tetapkan waktu awal dibukanya presensi dan tetapkan waktu batas pengisian presensi, ketika waktu presensi habis maka presensi terlambat otomatis aktif' },
{ element: '#delete-time', intro: 'Selanjutnya, Button ini untuk menutup sesi presensi yang artinya presensi  tidak menerima data lagi. ⚠️' },
{ element: '#add-location', intro: 'Selanjutnya, gunakan Button ini untuk mengatur lokasi presensi. di dalamnya berisi koordinat lattitude dan longtitude pastikan untuk menginputnya dengan baik' },
{ element: '#show-location', intro: 'Selanjutnya, Klik di sini untuk melihat koordinat lattitude longtitude lokasi presensi yang telah developer siapkan. 🔍' },
{ element: '#download', intro: 'Selanjutnya, Button ini untuk mengunduh semua data presensi saat ini. Pastikan mengunduh data presensi setelah selesai berkegiatan sehingga presensi dapat digunakan untuk kegiatan berikutnya.' },
{ element: '#download', intro: 'Jika ada dua kegiatan dalam satu hari maka presensi paruh pagi datanya harus di unduh secepatnya agar paruh siang presensi dapat digunakan untuk menampung data baru, hal ini bertujuan untuk menghindari benturan data antara kegiatan paruh siang dan pagi.' },
{ element: '#remove-all-data', intro: 'Jika data presensi sudah di unduh pastikan mengklik button Reset agar database bersih dan dapat digunakan untuk menampung data presensi baru' },
{ element: '#remove-all-data', intro: 'Selanjutnya harap teliti dan hati-hati! Button ini menghapus semua data presensi! Button ini digunakan jika sudh mengunduh data presensi sebelumnya, pastikan berhati-hati data presensi yg terhapus tidak dapat dikembalikan' },
{ element: '#important', intro: 'Selanjutnya, fitur berikut berfungsi jika urgent, seperti merubah password dan logout' },
{ element: '#statistic-name', intro: 'Selanjutnya, Bar Statistik untuk melihat data presensi sesuai dengan kehadiranya seperti jumlah hadir, terlambat, tidak hadir' },
{ element: '#table-name', intro: 'Selanjutnya, tabel untuk melihat data presensi yang masuk sesuai dengan waktu, nama, nim, prodi, smst dan data-data penting lainnya' },
{ element: '#reporting', intro: 'Selanjutnya, Jika Presensi terdapat bug/error di beberapa device silahkan klik button berikut untuk melaporkan ke developer' },
{ element: '#documentation', intro: 'Terakhir, Penjelasan lebih lengkap bisa anda baca di dokumentasi berikut ya' },

  ];

  if (!localStorage.getItem('tourCompleted')) {
      introJs().setOptions({ steps: steps }).oncomplete(function() {
          localStorage.setItem('tourCompleted', true);
          // localStorage.removeItem('tourCompleted');
          Swal.fire({
              title: '🎉 Tur Selesai!',
              text: 'Selamat anda bisa mengelola Dashboard dengan baik',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButton:'green',
          });
      }).start();
  }
 
});

