type QueryUserGroups = typeof import('./query').queryUserGroups;
type QueryGlobalUserGroups = typeof import('./query').queryGlobalUserGroups;

declare module 'ext.gadget.MarkRights' {
	export const queryUserGroups: QueryUserGroups;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
}
