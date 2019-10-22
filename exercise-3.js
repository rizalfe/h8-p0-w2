var nama = '';
var peran = '';

if (nama == '') {
    console.log('Tulis Nama Dong!');
} else {
    if (nama == nama && peran == '') {
        console.log(`Halo ${nama}, pilih peranmu untuk memulai game`);
    } else {
    if (nama == nama && peran == 'Ksatria') {
        console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
        console.log(`${peran} ${peran}, kamu dapat menyerang dengan senjatamu!`);
    } else {
        if (nama == nama && peran == 'Tabib') {
            console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
            console.log(`${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
        } else {
            if (nama == nama && peran == 'Penyihir') {
                console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
                console.log(`${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`); 
        }
      }
    }
  }
}