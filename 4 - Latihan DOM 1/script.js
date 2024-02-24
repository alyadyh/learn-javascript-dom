const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function() {
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('AcakWarna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna); //meletakkan button tAcakWarna setelah tUbahWarna

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});