function xo(str) {
    var strX = str.split('o');
    var strO = str.split('x');
    var xLength = strX.length;
    var oLength = strO.length;

    if (xLength == oLength) {
        return true;
    } else {
        return false;
    }
}
    

//   // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true