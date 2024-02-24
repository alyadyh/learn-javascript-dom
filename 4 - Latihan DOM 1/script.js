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



const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

// sliderMerah.addEventListener('change', function() {
//     const red = sliderMerah.value;
//     document.body.style.backgroundColor = 'rgb('+ red +', 100, 100)';
// });

// change -> tidak realtime
// input -> berubah secara realtime

sliderMerah.addEventListener('input', function() {
    const mer = sliderMerah.value;
    const ijo = sliderHijau.value;
    const bir = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ mer +', '+ ijo +', '+ bir +')';
});

sliderHijau.addEventListener('input', function() {
    const mer = sliderMerah.value;
    const ijo = sliderHijau.value;
    const bir = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ mer +', '+ ijo +', '+ bir +')';
});

sliderBiru.addEventListener('input', function() {
    const mer = sliderMerah.value;
    const ijo = sliderHijau.value;
    const bir = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ mer +', '+ ijo +', '+ bir +')';
});



document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // console.log(event.clientX); //mengembalikan nilai x posisi mouse
    // console.log(event.clientY); //mengembalikan nilai y posisi mouse

    // ukuran browser
    // console.log(window.innerWidth);


    const xPos = (event.clientX / window.innerWidth) * 255;
    const yPos = (event.clientY / window.innerWidth) * 255;
    console.log(xPos);
    console.log(yPos);

    document.body.style.color = 'rgb('+ xPos +', '+ yPos +', 100)';
});