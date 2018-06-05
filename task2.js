/* Task 2 */

/* Put your code here */
const d = process.argv[2];
const mStr = process.argv[3];
const y = process.argv[4];

const tmp = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const m = tmp.indexOf(mStr.toLowerCase());

const day = new Date(y, m, d); 
const newYear = new Date(y, 11, 31);
const msPerDay = 24 * 60 * 60 * 1000; // колчичество миллисекунд в одной дне
const result = Math.round((newYear.getTime() - day.getTime()) / msPerDay); 

process.stdout.write(result.toString());