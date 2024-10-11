import type {RrdConfig} from './types';

const config: RrdConfig = {
	checkboxes: {},
	others: {},
};

const updateConfig = (): void => {
	const checkBoxes: RrdConfig['checkboxes'] = {};

	if (document.querySelector<HTMLInputElement>('#rrd__hide-content')?.checked) {
		checkBoxes.rrdHideContent = true;
	}
	if (document.querySelector<HTMLInputElement>('#rrd__hide-username')?.checked) {
		checkBoxes.rrdHideUsername = true;
	}
	if (document.querySelector<HTMLInputElement>('#rrd__hide-summary')?.checked) {
		checkBoxes.rrdHideSummary = true;
	}

	config.checkboxes = checkBoxes;

	const others: RrdConfig['others'] = {};

	const reasonInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#rrd__reason');
	const otherReasonsInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>('#rrd__other-reasons');
	if (reasonInput) {
		others.rrdReason = reasonInput.value;
	}
	if (otherReasonsInput) {
		others.rrdOtherReasons = otherReasonsInput.value;
	}

	config.others = others;
};

export {config, updateConfig};
