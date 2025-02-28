import './Mainpage.less';

import {libHeader, searchInjection} from './modules/typescript/index-header';
import libSummary from './modules/typescript/summary';

libHeader();
searchInjection();
await libSummary();
