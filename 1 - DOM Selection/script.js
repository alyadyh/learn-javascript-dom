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
// Harus dikasi index karena mengembalikan array
const p = document.getElementsByTagName('p');

// Kalau mau mengubah style semua elemen p
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}

// Kalau mau mengubah style elemen h1 yang spesifik
const hSatu = document.getElementsByTagName('h1')[0];
hSatu.style.fontSize = '50px';


// document.getElementsByClassName() -> mengembalikan HTML Collections
const pDua = document.getElementsByClassName('p2');
pDua[0].innerHTML = 'Ini diubah dari JavaScript';


// document.querySelector() -> mengembalikan satu elemen yang pertama kali ditemukan
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';
// Outputnya sama dengan CSS berikut:
// #b p { color: green; }

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';
// Outputnya sama dengan CSS berikut:
// li:nth-child(2) { background-color: orange; }
// lebih spesifik -> section#b ul li:nth-child(2) { background-color: orange; }

const pQ = document.querySelector('p');
pQ.innerHTML = 'Ini diubah melalui JavaScript';
// Outputnya hanya akan mengubah elemen p yang pertama atau p1 dalam case ini

// document.querySelectorAll() = getElementsByTagName()
const pTiga = document.querySelectorAll('p');
p[2].style.fontFamily = 'Times New Roman';