interface RrdConfigCheckBoxes {
	rrdHideContent?: boolean;
	rrdHideUsername?: boolean;
	rrdHideSummary?: boolean;
}

interface RrdConfigOthers {
	rrdReason?: string;
	rrdOtherReasons?: string;
}

interface RrdConfig {
	checkboxes: RrdConfigCheckBoxes;
	others: RrdConfigOthers;
}

export type {RrdConfig};
