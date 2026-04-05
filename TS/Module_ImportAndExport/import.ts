// Import in Type Script

// Importing named exports
import { add, sub} from './Core_TS_IV_export';

console.log(add(5, 3));
console.log(sub(10, 4));

// Importing default export
import multiply from './Core_TS_IV_export';
console.log(multiply(4, 6));

// list export
import { pi, square } from './Core_TS_IV_export';
console.log(pi);
console.log(square(5)); 