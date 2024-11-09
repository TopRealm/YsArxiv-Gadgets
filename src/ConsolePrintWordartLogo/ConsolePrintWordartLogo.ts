/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2024-11-09 13:48:56
 */
(async function () {
	const consoleTUrl = `${mw.config.get('wgServer')}/api.php?action=query&meta=siteinfo&formatversion=2&format=json`;
	const generatordata = await fetch(consoleTUrl);
	const generatordataJson = (await generatordata.json()) as unknown;
	const mideawikiVersions = (generatordataJson as {query: {general: {generator: string}}}).query.general.generator;
	const ascll = `
██╗     ██╗                 ██████╗ ██╗                                        ██╗██╗      ██╗
╚██╗   ██╔╝                ██╔═══██╗██║                                        ╚═╝██║      ╚═╝
 ╚██╗ ██╔╝██████╗ ██╗   ██╗██║   ╚═╝███████╗  ██████╗ ██╗   ██╗   ██╗  ██╗  ██╗██╗██║   ██╗██╗
  ╚████╔╝██╔═══██╗██║   ██║╚██████╗ ██╔═══██╗██╔═══██╗██║   ██║   ██║  ██║  ██║██║██║  ██╔╝██║
   ╚██╔╝ ██║   ██║██║   ██║ ╚════██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██████╔╝ ██║
    ██║  ██║   ██║██║   ██║██    ██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██╔══██╗ ██║
    ██║  ╚██████╔╝╚██████╔╝╚██████╔╝██║   ██║╚██████╔╝╚██████╔╝██╗╚█████ ████╔╝██║██║  ╚██╗██║
    ╚═╝   ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝   ╚═╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╚═══╝ ╚═╝╚═╝   ╚═╝╚═╝
    ©2023-${new Date().getFullYear()} 有兽档案馆                                                ${mideawikiVersions}
    `;
	console.log(`%c${ascll}`, 'color:#159c5a');
})();
