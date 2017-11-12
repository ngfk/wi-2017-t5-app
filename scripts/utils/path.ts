import { join } from 'path';

export const root = (...args: string[]) => join(__dirname, '../../', ...args);
