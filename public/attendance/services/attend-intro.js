document.addEventListener("DOMContentLoaded", function() {
    const steps = [
        { element: null, intro: 'Halo! Selamat datang di form presensi. Yuk, ikuti tur singkat sebelum mengisi, cuma sebentar kok hehe' },
        { element: '#countdown', intro: 'Pastikan kamu memperhatikan waktu presensi, ya! Jangan sampai kelewatan, sayang banget kalau terlewat.' },
        { element: '#form-presensi-active', intro: 'Sekarang, isi data diri kamu, ya! Masukkan Nama, Nim, Semester, Prodi, dan jabatan atau sie saat ini.' },
        { element: '#button-presensi', intro: 'Sebelum kirim presensi, akan muncul dialog izin akses lokasi. Klik "Allow" supaya presensimu bisa terkirim dengan sukses!' },
        { element: '#button-presensi', intro: 'Pastikan saat mengisi presensi, kamu sudah berada di lokasi kegiatan, ya. Kalau dari rumah, sistem otomatis mencatat sebagai tidak hadir.' },
        { element: null, intro: 'Terakhir! Kalau kamu berhalangan hadir, tunggu waktu presensi selesai. Nanti akan muncul form presensi terlambat — isi alasan ketidakhadiranmu, ya. ' },
            
    ];
  
    if (!localStorage.getItem('tourCompleted')) {
        introJs().setOptions({ steps: steps }).oncomplete(function() {
            localStorage.setItem('tourCompleted', true);
            // localStorage.removeItem('tourCompleted');
            Swal.fire({
                text: 'Thankyou! silahkan lakukan presensi & selamat berkegiatan ya good luck✨',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButton:'green',
            });
        }).start();
    }
   
  });
  
  