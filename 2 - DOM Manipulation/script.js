// section.innerHTML -> mengubah konten isi yang dipanggil
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Alya Dhiya</em>';
// <em></em> untuk font italic

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!'



// element.style.<propertyCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightpink';
// judul.style.backgroundColor = 'salmon';



// element.setAttribute() -> untuk memodifikasi attribute dalam console
// Class yang ada sebelumnya akan hilang atau ditimpa dengan class yg baru pada setAttribute
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'alya');

const a = document.querySelector('section#a a'); //a yg ada di dalam section atau id a

// code dibawah ini bisa dijalankan di console inspect
// element.getAttribute()
// element.removeAttribute()