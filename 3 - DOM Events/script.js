// on<event> -> event handler

const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// ***

// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    // ambil parent
    const ul = document.querySelector('section#b ul');

    // buat elemen baru
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');

    // rangkai
    liBaru.appendChild(teksLiBaru);

    // simpan
    ul.appendChild(liBaru);
});

// PERBEDAAN EVENT HANDLER DAN EVENT LISTENER
// Event Handler: perubahaan terakhir dilakukan akan menimpa perubahan sebelumnya
// Event Listener: akan menambah perubahannya

// PERSAMAAN: apa yg dpt dilakukan event handler dpt jg dilakukan oleh event listener


// Event Handler hanya akan menjalankan color: red dan menimpa perubahan sebelumnya
p3.onclick = function() {
    p3.style.backgroundColor = 'lightpink';
}
p3.onclick = function() {
    p3.style.color = 'red';
}

// Event Listener akan menjalankan kedua perubahan di bawah ini
p2.addEventListener('mouseenter', function() {
    p2.style.backgroundColor = 'lightblue';
});
p2.addEventListener('mouseleave', function() {
    p2.style.color = 'red';
});