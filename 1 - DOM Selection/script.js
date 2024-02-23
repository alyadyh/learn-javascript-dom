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