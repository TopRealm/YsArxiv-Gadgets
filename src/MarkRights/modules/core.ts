import {queryGlobalUserGroups, queryUserGroups} from './query';
import type {UserRights} from './types';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const getUsername = (url: string): string => {
	if (!url) {
		return '';
	}

	const username: string | null = mw.util.getParamValue('title', url);

	const decode = (string: string, replace: (_string: string) => string): string => {
		return decodeURIComponent(
			((): string => {
				try {
					return decodeURIComponent(replace(string));
				} catch {
					return replace(string).replace(/%(?!\d+)/g, '%25');
				}
			})()
		);
	};

	if (username) {
		return decode(username, (string: string): string => {
			return string.replace('User:', '').replace(/_/g, ' ');
		});
	}
	const usernameMatch: RegExpMatchArray | null = url.match(/\/wiki\/User:(.+?)$/);
	if (usernameMatch?.[1]) {
		return decode(usernameMatch[1], (string: string): string => {
			return string.replace(/_/g, ' ');
		});
	}
	return '';
};

const appendUserRightsMark = (
	$userLinks: JQuery<HTMLElement>,
	{userGroupMap, globalUserGroupMap}: {userGroupMap: Map<string, string[]>; globalUserGroupMap: Map<string, string[]>}
): void => {
	for (const element of $userLinks) {
		const $element: JQuery = $(element);
		if ($element.parents('li').find('.gadgets-markrights').length) {
			continue;
		}
		if ($element.siblings().find('.gadgets-markrights').length) {
			continue;
		}
		const username: string = getUsername($element.attr('href') ?? '');
		if (!username) {
			continue;
		}
		const groups = userGroupMap.get(username) ?? [];
		const globalGroups = globalUserGroupMap.get(username) ?? [];
		if (!groups) {
			continue;
		}
		const $sups: JQuery = $('<span>').addClass('gadgets-markrights');
		for (const group of uniqueArray([...groups, ...globalGroups])) {
			const className: string = `gadgets-markrights__${group}`;
			if ($sups.find('sup').hasClass(className)) {
				continue;
			}
			$sups.append(
				// The following classes are used here:
				// * gadget-markrights__responsibleoperator
				// * gadget-markrights__steward
				// * gadget-markrights__checkuser
				// * gadget-markrights__suppress
				// * gadget-markrights__sysop
				// * gadget-markrights__interface-admin
				// * gadget-markrights__templateeditor
				// * gadget-markrights__importer
				// * gadget-markrights__patroller
				// * gadget-markrights__autopatrolled
				// * gadget-markrights__eventsponsor
				// * gadget-markrights__massmessage-sender
				// * gadget-markrights__confirmed
				// * gadget-markrights__autoconfirmed
				// * gadget-markrights__bot
				// * gadget-markrights__flood
				// * gadget-markrights__ipblock-exempt
				// * gadget-markrights__rnrsverify-exempt
				$('<sup>')
					.addClass(className)
					.attr({
						alt: getMessage(group as UserRights),
						title: getMessage(group as UserRights),
					})
			);
		}
		$element.after($sups);
	}
};

const markUserRights = async ($content: JQuery): Promise<void> => {
	const $userLinks: JQuery = $content.find('a.mw-userlink:not(.mw-anonuserlink)');
	let users: string[] = [];
	const queue: Array<typeof users> = [];
	const userGroupMap: Map<string, string[]> = new Map();
	const globalUserGroupMap: Map<string, string[]> = new Map();

	for (const element of $userLinks) {
		const $element: JQuery = $(element);
		if ($element.parents('li').find('.gadgets-markrights').length) {
			continue;
		}
		if ($element.siblings().find('.gadgets-markrights').length) {
			continue;
		}
		const {textContent} = element;
		const userLinkText: string | undefined = textContent?.toString();
		if (userLinkText) {
			users[users.length] = userLinkText; // Replace `[].push()` to avoid polyfilling core-js
		}

		// 用户名列表去重
		users = uniqueArray(users); // Replace `[...new Set()]` to avoid polyfilling core-js

		if (users.length === 25) {
			queue[queue.length] = users; // Replace `[].push()` to avoid polyfilling core-js
			users = [];
		}
	}

	if (users.length > 0) {
		queue[queue.length] = users; // Replace `[].push()` to avoid polyfilling core-js
	}

	for (const ususers of queue) {
		try {
			const queryUserResponse = await queryUserGroups(ususers);
			const {users: queryUsers} = queryUserResponse['query'] as {
				users: {groups: string[]; name: string}[];
			};

			for (const user of queryUsers) {
				if (!user || !user.groups) {
					continue;
				}
				userGroupMap.set(
					user.name,
					user.groups.filter((element) => {
						return element !== '*';
					})
				);
			}

			for (const user of ususers) {
				const queryGlobalUserInfoResponse = await queryGlobalUserGroups(user);
				if (queryGlobalUserInfoResponse['query'] && queryGlobalUserInfoResponse['query'].globaluserinfo) {
					const {groups: globalgroups}: {groups: string[]} = queryGlobalUserInfoResponse['query']
						.globaluserinfo as {groups: string[]};
					globalUserGroupMap.set(user, globalgroups);
				}
			}

			appendUserRightsMark($userLinks, {userGroupMap, globalUserGroupMap});
		} catch {}
	}
};

export {markUserRights};
