/* Task 3 */

/* Put your code here */
const a = process.argv[2];
const b = process.argv[3];
const sec = parseInt(a) + parseInt(b);

const days = Math.floor((sec % 31536000) / 86400); 
let hours = Math.floor(((sec % 31536000) % 86400) / 3600);
const minutes = Math.floor((((sec % 31536000) % 86400) % 3600) / 60);
const seconds = (((sec % 31536000) % 86400) % 3600) % 60;

const suffixNum = (n, words) => {
    return words[(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
}

const trim = (str) => {
    return str.replace(/^\s+|\s+$/g, '');
};

let result = '';
if (days > 0) {
    // hours = days * 24;
}

if (hours > 0) {
    result += hours + suffixNum(hours, [' час ', ' часа ', ' часов ']);
}

if (minutes > 0) {
    result += minutes + suffixNum(minutes, [' минита ', ' минуты ', ' минут ']);
}

if (seconds > 0) {
    result += seconds + suffixNum(seconds, [' секунда ', ' секунды ', ' секунд ']);
}

process.stdout.write(trim(result));