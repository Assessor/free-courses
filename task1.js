let str = '';
process.argv.forEach((val, index) => {
    if (index > 1) {
        str += val.replace(/[.,\/#!?$%\^&\*\'\";:{}=\-_`~()]/g,"").toUpperCase();
    }    
});

if (str === str.split('').reverse().join('')) {
    process.stdout.write('YES');
} else {
    process.stdout.write('NO');
}