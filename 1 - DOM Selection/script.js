// DOM Selection
// document.getElementById() -> mengembalikan element

// Format: [datatype] [variable] = document.dom-selection('[Id]');
// Nama variabel dan Id tidak perlu sama

const judul = document.getElementById('judul');

judul.style.color = 'red';
// Outputnya akan sama dengan CSS berikut:
// #judul {
//     color: red;
// }

judul.style.backgroundColor = '#ccc';
judul.innerHTML = "Alya Dhiya"


// document.getElementsByTagName() -> mengembalikan HTML Collections
const p = document.getElementsByTagName('p');

// Kalau mau mengubah style semua elemen p
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}

// Kalau mau mengubah style elemen h1 yang spesifik
const hSatu = document.getElementsByTagName('h1')[0];
hSatu.style.fontSize = '50px';


// document.getElementsByClassName() -> mengembalikan HTML Collections
const pSatu = document.getElementsByClassName('p1');
pSatu[0].innerHTML = 'Ini diubah dari JavaScript';