import chalk from 'chalk';
import numeral from 'numeral';
import './index.css';

const value = numeral(100).format('$0,0.00');

console.log(chalk.blue(`This is a great javascript starter app. I would pay ${value} for it.`));
