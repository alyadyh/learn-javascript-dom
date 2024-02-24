var tanya = true;

while ( tanya ) {
    // menangkap pilihan player
    var p = prompt('pilih: gajah, semut, manusia');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'manusia';
    } else {
        comp = 'semut';
    }

    // menentukan rules
    var hasil = '';
    if ( p == comp ) {
        hasil = 'SERI';
    } else if ( p == 'gajah' ) {
        hasil = ( comp == 'manusia' ) ? 'MENANG' : 'KALAH';
    } else if ( p == 'manusia' ) {
        hasil = ( comp == 'gajah' ) ? 'MENANG' : 'KALAH';
    } else if ( p == 'semut' ) {
        hasil = ( comp == 'manusia' ) ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Input pilihan salah';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');

}

alert('terimakasih sudah bermain.');