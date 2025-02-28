/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-03-01 01:16:20
 */
const getPreviousOddWeek = () => {
	const now = new Date();
	const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));

	const thursdayUTC = new Date(todayUTC);
	thursdayUTC.setUTCDate(todayUTC.getUTCDate() + 4 - (todayUTC.getUTCDay() || 7));

	const yearStart = new Date(Date.UTC(thursdayUTC.getUTCFullYear(), 0, 1));

	const timeDiff = thursdayUTC.getTime() - yearStart.getTime();
	const daysDiff = Math.floor(timeDiff / 86_400_000) + 1;
	const currentWeek = Math.ceil(daysDiff / 7);

	let previousOddWeek = currentWeek % 2 === 1 ? currentWeek - 2 : currentWeek - 3;

	if (previousOddWeek <= 0) {
		const lastYearEnd = new Date(Date.UTC(thursdayUTC.getUTCFullYear() - 1, 11, 31));
		lastYearEnd.setUTCDate(lastYearEnd.getUTCDate() + 4 - (lastYearEnd.getUTCDay() || 7));
		const lastYearStart = new Date(Date.UTC(lastYearEnd.getUTCFullYear(), 0, 1));
		const lastYearWeeks = Math.ceil((lastYearEnd.getTime() - lastYearStart.getTime()) / 604_800_000);
		previousOddWeek = lastYearWeeks % 2 === 1 ? lastYearWeeks : lastYearWeeks - 1;
	}

	return previousOddWeek;
};

const getMonthFromWeek = (year: number, week: number) => {
	const firstDayOfYear = new Date(year, 0, 1);
	const firstThursday = new Date(firstDayOfYear);
	firstThursday.setDate(firstDayOfYear.getDate() + ((4 - firstDayOfYear.getDay() + 7) % 7));
	const weekStart = new Date(firstThursday);
	weekStart.setDate(firstThursday.getDate() + (week - 1) * 7 - 3);
	const middleOfWeek = new Date(weekStart);
	middleOfWeek.setDate(weekStart.getDate() + 3);
	return middleOfWeek.getMonth() + 1;
};

export {getMonthFromWeek, getPreviousOddWeek};
