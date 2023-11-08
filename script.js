function getPilihanComputer(){
    const comp = Math.random(); //untuk mendapatkan nilai random dengan code disamping pada console akan muncul nilai randomnya

    // code simple untuk membuat pengulangannya
    if(comp < 0.34)return 'gajah';
    if(comp >= 0.34 && comp < 0.67)return 'orang';
        return 'semut';
}

function getHasil(comp, player){
    if(player == comp) return 'Seri !';
    // contoh kondisi kalau player milih gajah dan komputer milih orang maka player akan menang, selain dari orang bisa keatas itu seri dahulu atau kebawah ini kalah
    if(player == 'gajah') return (comp == 'orang') ? 'Menang !' : 'Kalah !';
    if(player == 'orang') return (comp == 'gajah') ? 'Kalah !' : 'Menang !';
    if(player == 'semut') return (comp == 'orang') ? 'Kalah !' : 'Menang !';
}


// Membuat animasi atau membuat gambar pada komputer berganti ganti
function putar(){
    // Mengambil gambar pada bagian komputer
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    // membuat berhenti gambarnya. Dengan new Date().getTime(); mendapatkan wakru saat itu
    const waktuMulai = new Date().getTime();
    // setInterval adalah fungsi untuk melakukan sesuatu secara berulang ulang
    setInterval(function(){
        // Mengecek waktunya kalau sudah 1 detik berhentiin
        if( new Date().getTime() - waktuMulai > 800){
            // Menghentikan waktunya
            clearInterval;
            return;
        }
        // Membuat atributnya
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        // membuat gambar hanya 3 saja jadi tidak bertambah terus
        if( i == gambar.length) i = 0;


    }, 100)

}

// Cara lebih simple dengan fungsi putar

// Memanggil atau menyeleksi dengan query untuk li dan imgnya 
const pilihan = document.querySelectorAll('li img');
// kondisi untuk setiap didalam img pilihan jalankan function berikut
pilihan.forEach(function (pil){
    // untuk mengambil pil atau pilihan yang di click saja
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
            // Mengambil piliha player, dengan cara mengambil berdasarkan nama classnya. karena kelasnya sama namanya maka codenya seperti dibawh ini.
            const pilihanPlayer = pil.className;
            const hasil = getHasil(pilihanComputer, pilihanPlayer);

            putar();
        
            // Membuat fungsi putar selesai setelah 1 detik menjalankan perintah yang menampilkan hasil yg benar
            setTimeout(function(){
                // Mengganti gambarnya 
                const imgComputer = document.querySelector('.img-komputer');
                // Memanipulasi gambarnya dengan cara mengganti atributnya
                imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png' );
            
                // Memberikan Informasi menang atau kalah
                const info = document.querySelector('.info');
                // Memberikan hasil pada kotak info yang menang dengan innerHTML atau memasukkan tes dengan innerHTML
                info.innerHTML = hasil;
            }, 800);

    });
});





// // Cara lebih simple tanpa fungsi putar

// // Memanggil atau menyeleksi dengan query untuk li dan imgnya 
// const pilihan = document.querySelectorAll('li img');
// // kondisi untuk setiap didalam img pilihan jalankan function berikut
// pilihan.forEach(function (pil){
//     // untuk mengambil pil atau pilihan yang di click saja
//     pil.addEventListener('click', function(){
//         const pilihanComputer = getPilihanComputer();
//             // Mengambil piliha player, dengan cara mengambil berdasarkan nama classnya. karena kelasnya sama namanya maka codenya seperti dibawh ini.
//             const pilihanPlayer = pil.className;
//             const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
//             // Mengganti gambarnya 
//             const imgComputer = document.querySelector('.img-komputer');
//             // Memanipulasi gambarnya dengan cara mengganti atributnya
//             imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png' );
        
//             // Memberikan Informasi menang atau kalah
//             const info = document.querySelector('.info');
//             // Memberikan hasil pada kotak info yang menang dengan innerHTML atau memasukkan tes dengan innerHTML
//             info.innerHTML = hasil;
//     });
// });






// Dibawah merupakan percobaan code yang kurang simple

// // Gajah
// const pGajah = document.querySelector('.gajah');
// // diberikan event kepada gajahnya
// pGajah.addEventListener('click', function(){
//     // Mengambil function getPilihanComputer
//     const pilihanComputer = getPilihanComputer();
//     // Mengambil piliha player, dengan cara mengambil berdasarkan nama classnya. karena kelasnya sama namanya gajah maka codenya seperti dibawh ini.
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengganti gambarnya 
//     const imgComputer = document.querySelector('.img-komputer');
//     // Memanipulasi gambarnya dengan cara mengganti atributnya
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png' );

//     // Memberikan Informasi menang atau kalah
//     const info = document.querySelector('.info');
//     // Memberikan hasil pada kotak info yang menang dengan innerHTML atau memasukkan tes dengan innerHTML
//     info.innerHTML = hasil;

// });

// // Orang
// const pOrang = document.querySelector('.orang');
// // diberikan event kepada Orangnya
// pOrang.addEventListener('click', function(){
//     // Mengambil function getPilihanComputer
//     const pilihanComputer = getPilihanComputer();
//     // Mengambil piliha player, dengan cara mengambil berdasarkan nama classnya. karena kelasnya sama namanya Orang maka codenya seperti dibawh ini.
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengganti gambarnya 
//     const imgComputer = document.querySelector('.img-komputer');
//     // Memanipulasi gambarnya dengan cara mengganti atributnya
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png' );

//     // Memberikan Informasi menang atau kalah
//     const info = document.querySelector('.info');
//     // Memberikan hasil pada kotak info yang menang dengan innerHTML atau memasukkan tes dengan innerHTML
//     info.innerHTML = hasil;

// });

// // Semut
// const pSemut = document.querySelector('.semut');
// // diberikan event kepada Semutnya
// pSemut.addEventListener('click', function(){
//     // Mengambil function getPilihanComputer
//     const pilihanComputer = getPilihanComputer();
//     // Mengambil piliha player, dengan cara mengambil berdasarkan nama classnya. karena kelasnya sama namanya Semut maka codenya seperti dibawh ini.
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengganti gambarnya 
//     const imgComputer = document.querySelector('.img-komputer');
//     // Memanipulasi gambarnya dengan cara mengganti atributnya
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png' );

//     // Memberikan Informasi menang atau kalah
//     const info = document.querySelector('.info');
//     // Memberikan hasil pada kotak info yang menang dengan innerHTML atau memasukkan tes dengan innerHTML
//     info.innerHTML = hasil;

// });














    // // untuk melihat apakah bisa digunakan atau tidak
    // console.log('comp : ' + pilihanComputer);
    // console.log('player : ' + pilihanPlayer);  
    // console.log('hasil : ' + hasil);