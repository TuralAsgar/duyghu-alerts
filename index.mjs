import chalk from "chalk";
import sym from "log-symbols";

const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.inverse;
const orange = chalk.hex('#db8c02');
const orangeI = chalk.hex('#db8c02').inverse;
const blue = chalk.cyan;
const blueI = chalk.cyan.inverse;


export default function (options) {
    const defaultOption = {
        type: 'error',
        msg: 'You forgot to define all options.',
        name: ''
    };

    const opts = {...defaultOption, ...options};
    const {type, msg, name} = opts;

    const printName = name ? name : type.toUpperCase();

    if (type === 'success') {
        console.log(`\n${sym.success} ${greenI(`  ${printName}  `)} ${green(msg)}\n`);
    }

    if (type === 'warning') {
        console.log(`\n${sym.warning} ${orangeI(`  ${printName}  `)} ${orange(msg)}\n`);
    }

    if (type === 'info') {
        console.log(`\n${sym.info} ${blueI(`  ${printName}  `)} ${blue(msg)}\n`);
    }

    if (type === 'error') {
        console.log(`\n${sym.error} ${redI(`  ${printName}  `)} ${red(msg)}\n`);
    }
}