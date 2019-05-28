// broken
import {foo} from 'b';
import {foo} from 'b/index'; // works on 1.34.0, but 1.35.0-insider
import {foo} from 'b/index.js'; // works on 1.34.0, but 1.35.0-insider
import {foo} from './b';

// works
import {foo} from './b/b.js';
import {foo} from 'b/b';
