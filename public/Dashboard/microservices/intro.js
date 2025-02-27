// window.addEventListener('load', () => {
//   if (!localStorage.getItem('tutorialCompleted')) {
//     // Modal intro pakai Tailwind
//     const introModal = document.createElement('div');
//     introModal.innerHTML = `
//       <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
//         <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in">
//           <h2 class="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">Hallo Admin !👋</h2>
//           <p class="mb-6 text-gray-600">Selamat Datang di Admin Panel. Yuk kita jelajahi fitur-fitur yang tersedia untuk mengelola presensi</p>
//           <button id="start-tutorial" class="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform w-full md:w-auto">Mulai Tur 🚀</button>
//         </div>
//       </div>
//     `;
//     document.body.appendChild(introModal);

//     // Fungsi untuk highlight elemen dengan spotlight effect
//     const highlightElement = (selector) => {
//       const element = document.querySelector(selector);
//       if (element) {
//         // Hapus spotlight sebelumnya jika ada
//         removeHighlight();
        
//         const rect = element.getBoundingClientRect();
//         const margin = 10; // Margin tambahan di sekitar elemen
        
//         // Buat 4 overlay gelap untuk membuat efek spotlight
//         // Overlay atas
//         const topOverlay = document.createElement('div');
//         topOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
//         topOverlay.style.top = '0';
//         topOverlay.style.left = '0';
//         topOverlay.style.width = '100%';
//         topOverlay.style.height = `${rect.top - margin}px`;
//         document.body.appendChild(topOverlay);
        
//         // Overlay kiri
//         const leftOverlay = document.createElement('div');
//         leftOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
//         leftOverlay.style.top = `${rect.top - margin}px`;
//         leftOverlay.style.left = '0';
//         leftOverlay.style.width = `${rect.left - margin}px`;
//         leftOverlay.style.height = `${rect.height + (margin * 2)}px`;
//         document.body.appendChild(leftOverlay);
        
//         // Overlay kanan
//         const rightOverlay = document.createElement('div');
//         rightOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
//         rightOverlay.style.top = `${rect.top - margin}px`;
//         rightOverlay.style.left = `${rect.right + margin}px`;
//         rightOverlay.style.width = `calc(100% - ${rect.right + margin}px)`;
//         rightOverlay.style.height = `${rect.height + (margin * 2)}px`;
//         document.body.appendChild(rightOverlay);
        
//         // Overlay bawah
//         const bottomOverlay = document.createElement('div');
//         bottomOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
//         bottomOverlay.style.top = `${rect.bottom + margin}px`;
//         bottomOverlay.style.left = '0';
//         bottomOverlay.style.width = '100%';
//         bottomOverlay.style.height = `calc(100% - ${rect.bottom + margin}px)`;
//         document.body.appendChild(bottomOverlay);
        
//         // Tambahkan highlight pada elemen terpilih
//         const highlight = document.createElement('div');
//         highlight.className = 'fixed  shadow-lg rounded-lg z-40 spotlight-highlight';
//         highlight.style.top = `${rect.top - margin}px`;
//         highlight.style.left = `${rect.left - margin}px`;
//         highlight.style.width = `${rect.width + (margin * 2)}px`;
//         highlight.style.height = `${rect.height + (margin * 2)}px`;
//         document.body.appendChild(highlight);
        
//         // Scroll ke elemen
//         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
//         // Tambahkan class untuk meningkatkan visibility elemen yang disorot
//         element.classList.add('z-50', 'relative');
        
//         return rect;
//       }
//       return null;
//     };

//     const removeHighlight = () => {
//       document.querySelectorAll('.spotlight-part').forEach(el => el.remove());
//       document.querySelectorAll('.spotlight-highlight').forEach(el => el.remove());
//       document.querySelectorAll('.z-50.relative').forEach(el => el.classList.remove('z-50', 'relative'));
//     };

//     // Fungsi untuk mengecek posisi tooltip terbaik berdasarkan elemen dan viewport
//     const calculateTooltipPosition = (elemRect) => {
//       const viewportHeight = window.innerHeight;
//       const viewportWidth = window.innerWidth;
//       const tooltipWidth = viewportWidth < 640 ? viewportWidth - 40 : 320; // Responsive width
//       const tooltipHeight = 150; // Perkiraan tinggi tooltip
      
//       // Default position (bottom)
//       let position = 'bottom';
//       let arrowClass = '-top-3 left-1/2 transform -translate-x-1/2';
//       let tooltipTop = elemRect.bottom + 20;
//       let tooltipLeft = elemRect.left + (elemRect.width / 2) - (tooltipWidth / 2);
      
//       // Cek apakah muat di bawah
//       if (tooltipTop + tooltipHeight > viewportHeight) {
//         // Coba posisi di atas
//         position = 'top';
//         tooltipTop = elemRect.top - tooltipHeight - 20;
//         arrowClass = '-bottom-3 left-1/2 transform -translate-x-1/2 rotate-180';
//       }
      
//       // Jika posisi di atas juga tidak muat, gunakan samping
//       if (position === 'top' && tooltipTop < 0) {
//         // Coba posisi di kanan
//         position = 'right';
//         tooltipTop = elemRect.top + (elemRect.height / 2) - (tooltipHeight / 2);
//         tooltipLeft = elemRect.right + 20;
//         arrowClass = '-left-3 top-1/2 transform -translate-y-1/2 rotate-270';
        
//         // Jika posisi kanan tidak muat, gunakan kiri
//         if (tooltipLeft + tooltipWidth > viewportWidth) {
//           position = 'left';
//           tooltipLeft = elemRect.left - tooltipWidth - 20;
//           arrowClass = '-right-3 top-1/2 transform -translate-y-1/2 rotate-90';
//         }
//       }
      
//       // Koreksi agar tidak keluar batas viewport
//       tooltipLeft = Math.max(10, Math.min(viewportWidth - tooltipWidth - 10, tooltipLeft));
//       tooltipTop = Math.max(10, Math.min(viewportHeight - tooltipHeight - 10, tooltipTop));
      
//       return {
//         position,
//         arrowClass,
//         top: tooltipTop,
//         left: tooltipLeft,
//         width: tooltipWidth
//       };
//     };

//     // Mulai tutorial saat klik tombol
//     document.getElementById('start-tutorial').addEventListener('click', () => {
//       introModal.remove();
      
//       const steps = [
//         { element: '#open-presensi', message: 'Button ini untuk membuka sesi presensi. Button ini berisi beberapa input seperti waktu awal dibukanya presensi dan waktu akhir untuk presensi terlambat' },
//         { element: '#delete-time', message: 'Selanjutnya, Button ini untuk menutup sesi presensi yang artinya presensi  tidak menerima data lagi. ⚠️' },
//         { element: '#add-location', message: 'Selanjutnya, gunakan Button ini untuk mengatur lokasi presensi. di dalamnya berisi koordinat lattitude dan longtitude pastikan untuk menginputnya dengan baik' },
//         { element: '#show-location', message: 'Selanjutnya, Klik di sini untuk melihat koordinat lattitude longtitude lokasi presensi yang telah developer siapkan. 🔍' },
//         { element: '#download', message: 'Selanjutnya, Button ini untuk mengunduh semua data presensi saat ini. Pastikan mengunduh data presensi setelah selesai berkegiatan.' },
//         { element: '#remove-all-data', message: 'Selanjutnya harap teliti dan hati-hati! Button ini menghapus semua data presensi! Button ini digunakan jika sudh mengunduh data presensi sebelumnya, pastikan berhati-hati data presensi yg terhapus tidak dapat dikembalikan' },
//         { element: '#statistic-name', message: 'Selanjutnya, Bar Statistik untuk melihat data presensi sesuai dengan kehadiranya seperti jumlah hadir, terlambat, tidak hadir' },
//         { element: '#table-name', message: 'Selanjutnya, tabel untuk melihat data presensi yang masuk sesuai dengan waktu, nama, nim, prodi, smst dan data-data penting lainnya' },
//         { element: '#reporting', message: 'Selanjutnya, Jika Presensi terdapat bug/error di beberapa device silahkan klik button berikut untuk melaporkan ke developer' },
//         { element: '#documentation', message: 'Terakhir, Penjelasan lebih lengkap bisa anda baca di dokumentasi berikut ya' },
//       ];
      
//       let stepIndex = 0;
      
//       const showStep = () => {
//         const step = steps[stepIndex];
        
//         let elemRect = null;
//         let tooltipPosition = {};
        
//         if (step.element) {
//           elemRect = highlightElement(step.element);
//           if (elemRect) {
//             tooltipPosition = calculateTooltipPosition(elemRect);
//           }
//         }
        
//         // Buat tooltip/bubble yang mengikuti style intro.js
//         const stepModal = document.createElement('div');
//         stepModal.className = 'fixed z-50';
        
//         // Posisikan tooltip berdasarkan perhitungan
//         if (elemRect) {
//           stepModal.style.top = `${tooltipPosition.top}px`;
//           stepModal.style.left = `${tooltipPosition.left}px`;
//           stepModal.style.width = `${tooltipPosition.width}px`;
//         } else {
//           // Jika tidak ada elemen, posisikan di tengah layar
//           stepModal.style.top = '50%';
//           stepModal.style.left = '50%';
//           stepModal.style.width = 'calc(100% - 40px)';
//           stepModal.style.maxWidth = '320px';
//           stepModal.style.transform = 'translate(-50%, -50%)';
//         }
        
//         stepModal.innerHTML = `
//           <div class="bg-white p-4 rounded-xl shadow-2xl w-full relative">
//             ${elemRect ? `<div class="absolute ${tooltipPosition.arrowClass} w-4 h-4 rotate-45 bg-white"></div>` : ''}
//             <p class="mb-4 text-gray-700 text-sm md:text-base">${step.message}</p>
//             <div class="flex justify-between">
//               <button id="prev-step" class="bg-gray-400 text-white px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg transition hover:bg-gray-500 ${stepIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}">Back</button>
//               <button id="next-step" class="bg-blue-500 text-white px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg transition hover:bg-blue-600">${stepIndex === steps.length - 1 ? 'Finish' : 'Next'}</button>
//             </div>
//           </div>
//         `;
//         document.body.appendChild(stepModal);

//         // Event listener untuk ukuran layar berubah
//         const resizeHandler = () => {
//           if (elemRect && stepModal) {
//             // Re-highlight element untuk mendapatkan posisi baru
//             const newRect = highlightElement(step.element);
//             if (newRect) {
//               const newPosition = calculateTooltipPosition(newRect);
//               stepModal.style.top = `${newPosition.top}px`;
//               stepModal.style.left = `${newPosition.left}px`;
//               stepModal.style.width = `${newPosition.width}px`;
              
//               // Update arrow position
//               const arrow = stepModal.querySelector('.rotate-45');
//               if (arrow) {
//                 arrow.className = `absolute ${newPosition.arrowClass} w-4 h-4 rotate-45 bg-white`;
//               }
//             }
//           }
//         };
        
//         window.addEventListener('resize', resizeHandler);

//         document.getElementById('next-step').addEventListener('click', () => {
//           window.removeEventListener('resize', resizeHandler);
//           stepModal.remove();
//           if (stepIndex < steps.length - 1) {
//             stepIndex++;
//             showStep();
//           } else {
//             removeHighlight();
//             localStorage.setItem('tutorialCompleted', 'true');
            
//             // Buat alert di tengah dengan tombol OK
//             const successModal = document.createElement('div');
//             successModal.innerHTML = `
//               <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
//                 <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center">
//                   <div class="text-green-500 text-5xl mb-4">🎉</div>
//                   <h3 class="text-xl font-bold mb-4 text-gray-800">Selamat!</h3>
//                   <p class="mb-6 text-gray-600">Anda dapat menggunakan admin panel.</p>
//                   <button id="close-success" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition w-full sm:w-auto">OK</button>
//                 </div>
//               </div>
//             `;
//             document.body.appendChild(successModal);
            
//             document.getElementById('close-success').addEventListener('click', () => {
//               successModal.remove();
//             });
//           }
//         });

//         document.getElementById('prev-step')?.addEventListener('click', () => {
//           if (stepIndex > 0) {
//             window.removeEventListener('resize', resizeHandler);
//             stepModal.remove();
//             stepIndex--;
//             showStep();
//           }
//         });
//       };

//       showStep();
//     });
//   }
// });

// localStorage.removeItem('tutorialCompleted');


// Pastikan halaman benar-benar selesai dimuat
window.addEventListener('load', () => {
    // Fungsi untuk mengecek apakah layar adalah desktop
    const isDesktop = () => window.innerWidth > 764;
    
    // Hanya tampilkan tutorial jika belum selesai dan layar desktop
    if (!localStorage.getItem('tutorialCompleted') && isDesktop()) {
      showIntroTutorial();
    }
    
    // Fungsi utama untuk menampilkan tutorial
    function showIntroTutorial() {
      // Modal intro pakai Tailwind
      const introModal = document.createElement('div');
      introModal.innerHTML = `
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg animate-fade-in">
            <h2 class="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">Hallo Admin !👋</h2>
            <p class="mb-6 text-gray-600">Selamat Datang di Admin Panel. Yuk kita jelajahi fitur-fitur yang tersedia untuk mengelola presensi</p>
            <button id="start-tutorial" class="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform w-full md:w-auto">Mulai Tur 🚀</button>
          </div>
        </div>
      `;
      document.body.appendChild(introModal);
  
      // Fungsi untuk highlight elemen dengan spotlight effect
      const highlightElement = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          // Hapus spotlight sebelumnya jika ada
          removeHighlight();
          
          const rect = element.getBoundingClientRect();
          const margin = 10; // Margin tambahan di sekitar elemen
          
          // Buat 4 overlay gelap untuk membuat efek spotlight
          // Overlay atas
          const topOverlay = document.createElement('div');
          topOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
          topOverlay.style.top = '0';
          topOverlay.style.left = '0';
          topOverlay.style.width = '100%';
          topOverlay.style.height = `${rect.top - margin}px`;
          document.body.appendChild(topOverlay);
          
          // Overlay kiri
          const leftOverlay = document.createElement('div');
          leftOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
          leftOverlay.style.top = `${rect.top - margin}px`;
          leftOverlay.style.left = '0';
          leftOverlay.style.width = `${rect.left - margin}px`;
          leftOverlay.style.height = `${rect.height + (margin * 2)}px`;
          document.body.appendChild(leftOverlay);
          
          // Overlay kanan
          const rightOverlay = document.createElement('div');
          rightOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
          rightOverlay.style.top = `${rect.top - margin}px`;
          rightOverlay.style.left = `${rect.right + margin}px`;
          rightOverlay.style.width = `calc(100% - ${rect.right + margin}px)`;
          rightOverlay.style.height = `${rect.height + (margin * 2)}px`;
          document.body.appendChild(rightOverlay);
          
          // Overlay bawah
          const bottomOverlay = document.createElement('div');
          bottomOverlay.className = 'fixed bg-black bg-opacity-70 z-40 spotlight-part';
          bottomOverlay.style.top = `${rect.bottom + margin}px`;
          bottomOverlay.style.left = '0';
          bottomOverlay.style.width = '100%';
          bottomOverlay.style.height = `calc(100% - ${rect.bottom + margin}px)`;
          document.body.appendChild(bottomOverlay);
          
          // Tambahkan highlight pada elemen terpilih
          const highlight = document.createElement('div');
          highlight.className = 'fixed  shadow-lg rounded-lg z-40 spotlight-highlight';
          highlight.style.top = `${rect.top - margin}px`;
          highlight.style.left = `${rect.left - margin}px`;
          highlight.style.width = `${rect.width + (margin * 2)}px`;
          highlight.style.height = `${rect.height + (margin * 2)}px`;
          document.body.appendChild(highlight);
          
          // Scroll ke elemen
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Tambahkan class untuk meningkatkan visibility elemen yang disorot
          element.classList.add('z-50', 'relative');
          
          return rect;
        }
        return null;
      };
  
      const removeHighlight = () => {
        document.querySelectorAll('.spotlight-part').forEach(el => el.remove());
        document.querySelectorAll('.spotlight-highlight').forEach(el => el.remove());
        document.querySelectorAll('.z-50.relative').forEach(el => el.classList.remove('z-50', 'relative'));
      };
  
      // Fungsi untuk mengecek posisi tooltip terbaik berdasarkan elemen dan viewport
      const calculateTooltipPosition = (elemRect) => {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const tooltipWidth = viewportWidth < 640 ? viewportWidth - 40 : 320; // Responsive width
        const tooltipHeight = 150; // Perkiraan tinggi tooltip
        
        // Default position (bottom)
        let position = 'bottom';
        let arrowClass = '-top-3 left-1/2 transform -translate-x-1/2';
        let tooltipTop = elemRect.bottom + 20;
        let tooltipLeft = elemRect.left + (elemRect.width / 2) - (tooltipWidth / 2);
        
        // Cek apakah muat di bawah
        if (tooltipTop + tooltipHeight > viewportHeight) {
          // Coba posisi di atas
          position = 'top';
          tooltipTop = elemRect.top - tooltipHeight - 20;
          arrowClass = '-bottom-3 left-1/2 transform -translate-x-1/2 rotate-180';
        }
        
        // Jika posisi di atas juga tidak muat, gunakan samping
        if (position === 'top' && tooltipTop < 0) {
          // Coba posisi di kanan
          position = 'right';
          tooltipTop = elemRect.top + (elemRect.height / 2) - (tooltipHeight / 2);
          tooltipLeft = elemRect.right + 20;
          arrowClass = '-left-3 top-1/2 transform -translate-y-1/2 rotate-270';
          
          // Jika posisi kanan tidak muat, gunakan kiri
          if (tooltipLeft + tooltipWidth > viewportWidth) {
            position = 'left';
            tooltipLeft = elemRect.left - tooltipWidth - 20;
            arrowClass = '-right-3 top-1/2 transform -translate-y-1/2 rotate-90';
          }
        }
        
        // Koreksi agar tidak keluar batas viewport
        tooltipLeft = Math.max(10, Math.min(viewportWidth - tooltipWidth - 10, tooltipLeft));
        tooltipTop = Math.max(10, Math.min(viewportHeight - tooltipHeight - 10, tooltipTop));
        
        return {
          position,
          arrowClass,
          top: tooltipTop,
          left: tooltipLeft,
          width: tooltipWidth
        };
      };
  
      // Mulai tutorial saat klik tombol
      document.getElementById('start-tutorial').addEventListener('click', () => {
        introModal.remove();
        
        const steps = [
          { element: '#open-presensi', message: 'Button ini untuk membuka sesi presensi. Button ini berisi beberapa input seperti waktu awal dibukanya presensi dan waktu akhir untuk presensi terlambat' },
          { element: '#delete-time', message: 'Selanjutnya, Button ini untuk menutup sesi presensi yang artinya presensi  tidak menerima data lagi. ⚠️' },
          { element: '#add-location', message: 'Selanjutnya, gunakan Button ini untuk mengatur lokasi presensi. di dalamnya berisi koordinat lattitude dan longtitude pastikan untuk menginputnya dengan baik' },
          { element: '#show-location', message: 'Selanjutnya, Klik di sini untuk melihat koordinat lattitude longtitude lokasi presensi yang telah developer siapkan. 🔍' },
          { element: '#download', message: 'Selanjutnya, Button ini untuk mengunduh semua data presensi saat ini. Pastikan mengunduh data presensi setelah selesai berkegiatan.' },
          { element: '#remove-all-data', message: 'Selanjutnya harap teliti dan hati-hati! Button ini menghapus semua data presensi! Button ini digunakan jika sudh mengunduh data presensi sebelumnya, pastikan berhati-hati data presensi yg terhapus tidak dapat dikembalikan' },
          { element: '#important', message: 'Selanjutnya, fitur berikut berfungsi jika urgent, seperti merubah password dan logout' },
          { element: '#statistic-name', message: 'Selanjutnya, Bar Statistik untuk melihat data presensi sesuai dengan kehadiranya seperti jumlah hadir, terlambat, tidak hadir' },
          { element: '#table-name', message: 'Selanjutnya, tabel untuk melihat data presensi yang masuk sesuai dengan waktu, nama, nim, prodi, smst dan data-data penting lainnya' },
          { element: '#reporting', message: 'Selanjutnya, Jika Presensi terdapat bug/error di beberapa device silahkan klik button berikut untuk melaporkan ke developer' },
          { element: '#documentation', message: 'Terakhir, Penjelasan lebih lengkap bisa anda baca di dokumentasi berikut ya' },
        ];
        
        let stepIndex = 0;
        
        const showStep = () => {
          const step = steps[stepIndex];
          
          let elemRect = null;
          let tooltipPosition = {};
          
          if (step.element) {
            elemRect = highlightElement(step.element);
            if (elemRect) {
              tooltipPosition = calculateTooltipPosition(elemRect);
            }
          }
          
          // Buat tooltip/bubble yang mengikuti style intro.js
          const stepModal = document.createElement('div');
          stepModal.className = 'fixed z-50';
          
          // Posisikan tooltip berdasarkan perhitungan
          if (elemRect) {
            stepModal.style.top = `${tooltipPosition.top}px`;
            stepModal.style.left = `${tooltipPosition.left}px`;
            stepModal.style.width = `${tooltipPosition.width}px`;
          } else {
            // Jika tidak ada elemen, posisikan di tengah layar
            stepModal.style.top = '50%';
            stepModal.style.left = '50%';
            stepModal.style.width = 'calc(100% - 40px)';
            stepModal.style.maxWidth = '320px';
            stepModal.style.transform = 'translate(-50%, -50%)';
          }
          
          stepModal.innerHTML = `
            <div class="bg-white p-4 rounded-xl shadow-2xl w-full relative">
              ${elemRect ? `<div class="absolute ${tooltipPosition.arrowClass} w-4 h-4 rotate-45 bg-white"></div>` : ''}
              <p class="mb-4 text-gray-700 text-sm md:text-base">${step.message}</p>
              <div class="flex justify-between">
                <button id="prev-step" class="bg-gray-400 text-white px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg transition hover:bg-gray-500 ${stepIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}">Back</button>
                <button id="next-step" class="bg-blue-500 text-white px-3 py-2 text-sm md:px-4 md:py-2 rounded-lg transition hover:bg-blue-600">${stepIndex === steps.length - 1 ? 'Finish' : 'Next'}</button>
              </div>
            </div>
          `;
          document.body.appendChild(stepModal);
  
          // Event listener untuk ukuran layar berubah
          const resizeHandler = () => {
            // Jika layar resize ke ukuran mobile, hentikan tutorial
            if (!isDesktop()) {
              window.removeEventListener('resize', resizeHandler);
              removeHighlight();
              stepModal.remove();
              
              // Tampilkan notifikasi bahwa tutorial hanya tersedia di desktop
              const mobileNotification = document.createElement('div');
              mobileNotification.innerHTML = `
                <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
                  <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center">
                    <div class="text-blue-500 text-5xl mb-4">📱</div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Ukuran Layar Terlalu Kecil</h3>
                    <p class="mb-6 text-gray-600">Tutorial hanya tersedia di layar desktop (lebih dari 764px).</p>
                    <button id="close-mobile-notification" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition w-full sm:w-auto">OK</button>
                  </div>
                </div>
              `;
              document.body.appendChild(mobileNotification);
              
              document.getElementById('close-mobile-notification').addEventListener('click', () => {
                mobileNotification.remove();
              });
              
              return;
            }
            
            // Jika masih di desktop, rekalkulasi posisi
            if (elemRect && stepModal) {
              // Re-highlight element untuk mendapatkan posisi baru
              const newRect = highlightElement(step.element);
              if (newRect) {
                const newPosition = calculateTooltipPosition(newRect);
                stepModal.style.top = `${newPosition.top}px`;
                stepModal.style.left = `${newPosition.left}px`;
                stepModal.style.width = `${newPosition.width}px`;
                
                // Update arrow position
                const arrow = stepModal.querySelector('.rotate-45');
                if (arrow) {
                  arrow.className = `absolute ${newPosition.arrowClass} w-4 h-4 rotate-45 bg-white`;
                }
              }
            }
          };
          
          window.addEventListener('resize', resizeHandler);
  
          document.getElementById('next-step').addEventListener('click', () => {
            window.removeEventListener('resize', resizeHandler);
            stepModal.remove();
            if (stepIndex < steps.length - 1) {
              stepIndex++;
              showStep();
            } else {
              removeHighlight();
              localStorage.setItem('tutorialCompleted', 'true');
              
              // Buat alert di tengah dengan tombol OK
              const successModal = document.createElement('div');
              successModal.innerHTML = `
                <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
                  <div class="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center">
                    <div class="text-green-500 text-5xl mb-4">🎉</div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Tur Selesai !</h3>
                    <p class="mb-6 text-gray-600">Selamat anda sudah menyelesaikan tur selanjutnya silahkan gunakan admin panel dengan baik ya! good luck!</p>
                    <button id="close-success" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition w-full sm:w-auto">OK</button>
                  </div>
                </div>
              `;
              document.body.appendChild(successModal);
              
              document.getElementById('close-success').addEventListener('click', () => {
                successModal.remove();
              });
            }
          });
  
          document.getElementById('prev-step')?.addEventListener('click', () => {
            if (stepIndex > 0) {
              window.removeEventListener('resize', resizeHandler);
              stepModal.remove();
              stepIndex--;
              showStep();
            }
          });
        };
  
        showStep();
      });
    }
    
    // Event listener untuk ukuran layar berubah
    window.addEventListener('resize', () => {
      // Jika tutorial sedang berjalan dan layar diubah ke ukuran mobile
      if (!localStorage.getItem('tutorialCompleted') && !isDesktop()) {
        // Hapus semua elemen tutorial jika ada
        document.querySelectorAll('.spotlight-part').forEach(el => el.remove());
        document.querySelectorAll('.spotlight-highlight').forEach(el => el.remove());
        document.querySelectorAll('.z-50.relative').forEach(el => el.classList.remove('z-50', 'relative'));
        
        // Hapus modal yang terbuka
        const introModal = document.querySelector('.fixed.inset-0.bg-gray-900.bg-opacity-50');
        if (introModal) {
          introModal.remove();
        }
      }
      // Jika layar berubah menjadi desktop dan tutorial belum pernah selesai, tampilkan lagi
      else if (!localStorage.getItem('tutorialCompleted') && isDesktop() && !document.querySelector('.fixed.inset-0.bg-gray-900.bg-opacity-50')) {
        showIntroTutorial();
      }
    });
  });
  
  // Kalau mau reset tutorial buat testing:
//   localStorage.removeItem('tutorialCompleted');