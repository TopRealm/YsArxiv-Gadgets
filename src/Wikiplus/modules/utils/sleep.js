// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const sleep = (time) => {
	return new Promise((resolve) => {
		return setTimeout(resolve, time);
	});
};
export default sleep;
