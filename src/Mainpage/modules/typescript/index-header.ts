import animateNumber from '../util/animateNumber';
const libHeader = () => {
	const elements = document.querySelectorAll('.value');

	for (const element of elements) {
		const start = 0;
		const end = Number.parseInt(element.textContent!.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''), 10);
		const duration = 1500;
		animateNumber(start, end, duration, element as HTMLElement);
	}

	const SearchFormHTML = `<form name="bodySearch0.048433246538" id="bodySearch0.048433246538" class="search-input bodySearch mw-inputbox-inline" action="/wiki/Special:%E6%90%9C%E7%B4%A2">
		<input name="search" class="mw-searchInput mw-ui-input mw-ui-input-inline" size="50" id="bodySearchInput0.048433246538" dir="ltr" placeholder="搜索有兽档案馆" aria-label="搜索有兽档案馆">
		<button type="submit" name="go" class="search-input-icon filter mw-ui-button"><i></i></button>
		<i class="search-input-border"></i>
		</form>`;
	document.querySelector('#Search')!.innerHTML = SearchFormHTML;
};

export default libHeader;
