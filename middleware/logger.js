import chalk from 'chalk';

const logger = (req, res, next) => {
    const methodColors = {
        GET: chalk.hex('#4ade80'),
        POST: chalk.hex('#facc15'),
        PUT: chalk.hex('#60a5fa'),
        DELETE: chalk.hex('#fb923c')
    }

    const color = methodColors[req.method] || chalk.hex('#ffffff');
    console.log(color(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`));
    next();
}

export default logger;
