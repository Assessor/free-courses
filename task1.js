/* Task 1 */

/* Put your code here */
let str = '';
process.argv.forEach((val, index) => {
    if (index > 1) {
        str += val.replace(/[^a-zA-Zа-яА-Я]/g, '').toUpperCase();
    }    
});

if (str === str.split('').reverse().join('')) {
    process.stdout.write('YES');
} else {
    process.stdout.write('NO');
}