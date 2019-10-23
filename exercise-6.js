//1//

var a = 20;
var b = 1;

// console.log('LOOPING PERTAMA')
while (b <= a) {
    if(b % 2 == 0) {
        console.log(b + ' i love coding')
    }
    b++;
}

var c = 20;
var d = 1;

// console.log('LOOPING KEDUA')
while (d <= c) {
    if (c % 2 == 0) {
        console.log(c + ' i will become fullstack developer')
    }
    c--;
}

//2//

var x = 20;

console.log('LOOPING PERTAMA')
for (var y = 1; y <= x; y++) {
    if (y % 2 == 0) {
        console.log(y + ' i love coding')
    }
}

console.log('LOOPING KEDUA')
for (var y = 1; y <= x; x--) {
    if (x % 2 == 0) {
        console.log(x + ' i will become developer')
    }
}

//3//

////Perulangan 1-100 dengan ganjil dan genap////
for (var m = 1; m <= 100; m++) {
    if (m % 2 == 0) {
        console.log(m + ' genap')
    } else {
        console.log(m + ' ganjil')
    }
}

////Perulangan 1-100 dengan counter + 2////
for (var m = 1; m <= 100; m += 2) {
    if (m % 2 == 0) {
        console.log(m)
    }
}

////Perulangan 1-100 dengan counter + 5////
for (var m = 1; m <= 100; m += 5) {
    if (m % 2 == 0) {
        console.log(m)
    }
}

////Perulangan 1-100 dengan counter + 9////
for (var m = 1; m <= 100; m += 9) {
    if (m % 2 == 0) {
        console.log(m)
    }
}

////Perulangan 1-100 dengan counter + 2 dan kelipatan 3////
for (var m = 1; m <= 100; m += 2) {
    if (m % 3 == 0) {
        console.log(m + ' kelipatan 3')
    } else {
        console.log(m)
    }
}

////Perulangan 1-100 dengan counter + 5 dan kelipatan 6////
for (var m = 1; m <= 100; m += 5) {
    if (m % 6 == 0) {
        console.log(m + ' kelipatan 6')
    } else {
        console.log(m)
    }
}

////Perulangan 1-100 dengan counter + 9 dan kelipatan 10////
for (var m = 1; m <= 100; m += 9) {
    if (m % 10 == 0) {
        console.log(m + ' kelipatan 10')
    } else {
        console.log(m)
    }
}