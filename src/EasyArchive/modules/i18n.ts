import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Archive: localize({
			en: 'archive',
			'zh-hans': '存档',
			'zh-hant': '存檔',
		}),
		'Archive location': localize({
			en: 'Archive location: ',
			'zh-hans': '存档地址：',
			'zh-hant': '存檔至：',
		}),
		'Archive Location not allowed': localize({
			en: 'Currently the archive location of this page, "$1", but Easy archive cannot operate like this.',
			'zh-hans': '此页面目前的存档地址是“$1”。Easy Archive 无法按此地址存档。',
			'zh-hant': '此頁面當前的存檔地址是「$1」。Easy Archive 無法按此地址存檔。',
		}),
		'Archive Location not allowed details': localize({
			en: 'Archives should not be normally directed to pages under article namespace. Please check if you have the correct archive location.',
			'zh-hans': '一般而言，不应向条目名称空间进行存档。此外，存档地址不得和此页面名称相同。请检查存档地址。',
			'zh-hant': '一般而言，不應向條目名稱空間進行存檔。此外，存檔地址不得和此頁面名稱相同。請檢查存檔地址。',
		}),
		Archiving: localize({
			en: 'being archived',
			'zh-hans': '存档中',
			'zh-hant': '存檔中',
		}),
		Archived: localize({
			en: 'archived',
			'zh-hans': '已存档',
			'zh-hant': '已存檔',
		}),
		Delete: localize({
			en: 'delete',
			'zh-hans': '删除',
			'zh-hant': '刪除',
		}),
		Deleting: localize({
			en: 'being deleted',
			'zh-hans': '删除中',
			'zh-hant': '刪除中',
		}),
		Deleted: localize({
			en: 'deleted',
			'zh-hans': '已删除',
			'zh-hant': '已刪除',
		}),
		'Archive summary': localize({
			en: 'archive section',
			'zh-hans': '存档段落',
			'zh-hant': '存檔段落',
		}),
		'Create summary': localize({
			en: 'create archive',
			'zh-hans': '建立存档',
			'zh-hant': '建立存檔',
		}),
		'Delete summary': localize({
			en: 'delete section',
			'zh-hans': '删除段落',
			'zh-hant': '刪除段落',
		}),
		'Easy Archive enabled': localize({
			en: 'Easy Archive is enabled on this talk page',
			'zh-hans': '本讨论页面使用 Easy Archive 快速存档',
			'zh-hant': '此頁面使用 Easy Archive 快速存檔',
		}),
		'Easy Archive not allowed': localize({
			en: 'You cannot use Easy Archive to archive threads on this page.',
			'zh-hans': '您不可以在此页面使用 Easy Archive 快速存档。',
			'zh-hant': '您不可以在此頁面使用 Easy Archive 快速存檔。',
		}),
		'Easy Archive not supported': localize({
			en: 'This page is not supported by Easy Archive.',
			'zh-hans': '此页面不支持 Easy Archive。',
			'zh-hant': '此頁面不支持 Easy Archive。',
		}),
		'Easy Archive not supported details': localize({
			en: 'These pages are not supported by Easy Archive: Article, File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.',
			'zh-hans':
				'这些页面不受 Easy Archive 支持：条目、File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。',
			'zh-hant':
				'這些頁面不受 Easy Archive 支持：條目，File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。',
		}),
		'No Archive Location': localize({
			en: 'Easy Archive can be used on this page if needed. To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.',
			'zh-hans':
				'若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。',
			'zh-hant':
				'若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。',
		}),
		'(': localize({
			en: ' (',
			zh: '（',
		}),
		')': localize({
			en: ')',
			zh: '）',
		}),
		'.': localize({
			en: '.',
			zh: '。',
		}),
		Refreshing: localize({
			en: 'Refreshing...',
			ja: '再読み込みします...',
			'zh-hans': '即将刷新当前页面……',
			'zh-hant': '即將重新載入當前頁……',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
