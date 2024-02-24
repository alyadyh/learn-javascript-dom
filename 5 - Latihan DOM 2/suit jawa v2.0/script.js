function getPilihanComp() {
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'manusia';
    return 'semut';
}

function getHasil(comp, player) {
    if ( player == comp ) return 'SERI';
    if ( player == 'gajah' ) return ( comp == 'manusia' ) ? 'MENANG' : 'KALAH';
    if ( player == 'manusia' ) return ( comp == 'gajah' ) ? 'MENANG' : 'KALAH';
    if ( player == 'semut' ) return ( comp == 'manusia' ) ? 'KALAH' : 'MENANG';
}


const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    console.log('comp : ' + pilihanComp);
    console.log('player : ' + pilihanPlayer);
    console.log('result : ' + hasil);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pManusia = document.querySelector('.manusia');
pManusia.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pManusia.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    console.log('comp : ' + pilihanComp);
    console.log('player : ' + pilihanPlayer);
    console.log('result : ' + hasil);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    console.log('comp : ' + pilihanComp);
    console.log('player : ' + pilihanPlayer);
    console.log('result : ' + hasil);

    const imgComp = document.querySelector('.img-komputer');
    imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});
