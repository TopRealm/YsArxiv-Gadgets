const sleep = (time) => {
	return new Promise((resolve) => {
		return setTimeout(resolve, time);
	});
};
export default sleep;
