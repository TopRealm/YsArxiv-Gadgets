import {generateArray} from './generateArray';

type UserIsInGroup = typeof userIsInGroup;

const userIsInGroup = (groups: string | string[]) => {
	const {wgUserGroups, wgGlobalGroups} = mw.config.get();
	return [...(wgUserGroups || []), ...((wgGlobalGroups as string[]) || [])].some((element: string): boolean => {
		return generateArray(groups).includes(element);
	});
};

export {type UserIsInGroup, userIsInGroup};
