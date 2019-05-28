// broken
import {foo} from 'b';
import {foo} from 'b/index';
import {foo} from 'b/index.js';
import {foo} from './b';

// works
import {foo} from './b/b.js';
import {foo} from 'b/b';
