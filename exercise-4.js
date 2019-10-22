var hari = 14;
var bulan = 6;
var tahun = 1990;

var tanggal = '';

switch (hari) {
    case hari:
        hari = `${hari}`
        break;
    default :
        hari = 'Hari apa tuh?';
        break;
}

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'July';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default :
        bulan = 'Bulan apa tuh?';
        break;
}

switch (tahun) {

    case tahun:
        tahun = `${tahun}`;
        break;
    default :
        tahun = 'Tahun berapa tuh?';
        break;
}

if (tanggal === '') {
    console.log(`${hari} ${bulan} ${tahun}`)
}