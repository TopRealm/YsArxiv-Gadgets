import {generateArray} from './generateArray';
import {initMwApi} from './initMwApi';
import {uniqueArray} from './uniqueArray';

type CheckDependencies = (gadgetNames: string | string[]) => Promise<void>;

const checkDependencies = async (gadgetNames: string | string[]): Promise<void> => {
	const api: mw.Api = initMwApi('Util-CheckDependencies');
	gadgetNames = uniqueArray(generateArray(gadgetNames));

	for (const gadgetName of gadgetNames) {
		if (!mw.user.options.get(`gadget-${gadgetName}`)) {
			await api.postWithEditToken({
				action: 'options',
				change: `gadget-${gadgetName}=1`,
			} as ApiOptionsParams);
			await mw.loader.using(`ext.gadget.${gadgetName}`);
		}
	}
};

export {type CheckDependencies, checkDependencies};
