// section.innerHTML -> mengubah konten isi yang dipanggil
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Alya Dhiya</em>';
// <em></em> untuk font italic

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!'

// ***

// element.style.<propertyCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightpink';
// judul.style.backgroundColor = 'salmon';

// ***

// element.setAttribute() -> untuk memodifikasi attribute dalam console
// Class yang ada sebelumnya akan hilang atau ditimpa dengan class yg baru pada setAttribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'alya');

// const a = document.querySelector('section#a a'); //a yg ada di dalam section atau id a

// code dibawah ini bisa dijalankan di console inspect
// element.getAttribute()
// element.removeAttribute()

// ***

// element.classList -> terdiri dari:
// element.classList.add() -> menambahkan class baru
// element.classList.remove() -> menghilangkan class lama
// element.classList.toggle() -> kalau misalkan sebuah elemen tdk memiliki class tententu maka akan berfungsi menambahkan, tp bila sdh punya toggle akan menghilangkan class tersebut
// element.classList.item() -> u/ mengetahui class tertentu dalam sebuah elemen
// element.classList.contains() -> u/ mengecek dalam sebuah elemen apakah ada class tertentu yang dicari
// element.classList.replace() -> u/ mengganti

// const p2 = document.querySelector('.p2');
// dalam console dapat di-run p2.classList dan seterusnya

// ***

// node.appendChild() -> menyimpan elemen ke baris paling akhir dari elemen tersebut
// - buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// - simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// - simpan pBaru di akhir section a
// - ambil dulu section a nya
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// ***

// node.insertBefore() -> menyimpan elemen sebelum elemen tertentu yg spesifik
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

// - cari tahu parent dari elemen tersebut
const ul = document.querySelector('section#b ul');

// - lalu tangkap elemen setelahnya
const li2 = document.querySelector('section#b ul li:nth-child(2'); 
// output code di atas sama dengan output berikut:
// const li2 = ul.querySelector('li:nth-child(2)');

// - simpan elemen
ul.insertBefore(liBaru, li2);