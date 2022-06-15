import app from './app.js';
import ip from 'ip';
import dotenv from 'dotenv';
import logger from './util/logger.js';

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on: ${ip.address()}:${PORT}`));