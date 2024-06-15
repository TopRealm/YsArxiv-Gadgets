import * as OPTIONS from '../options.json';
import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(`Cat-a-lot/${OPTIONS.version}`);

export {api};
