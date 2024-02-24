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