(async function () {
	const consoleTUrl = `${mw.config.get('wgServer')}/api.php?action=query&meta=siteinfo&formatversion=2&format=json`;
	const generatordata = await fetch(consoleTUrl);
	const generatordataJson = (await generatordata.json()) as unknown;
	const mediawikiVersions = (generatordataJson as {query: {general: {generator: string}}}).query.general.generator;
	const ascii = `
██╗     ██╗                 ██████╗ ██╗                                        ██╗██╗      ██╗
╚██╗   ██╔╝                ██╔═══██╗██║                                        ╚═╝██║      ╚═╝
 ╚██╗ ██╔╝██████╗ ██╗   ██╗██║   ╚═╝███████╗  ██████╗ ██╗   ██╗   ██╗  ██╗  ██╗██╗██║   ██╗██╗
  ╚████╔╝██╔═══██╗██║   ██║╚██████╗ ██╔═══██╗██╔═══██╗██║   ██║   ██║  ██║  ██║██║██║  ██╔╝██║
   ╚██╔╝ ██║   ██║██║   ██║ ╚════██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██████╔╝ ██║
    ██║  ██║   ██║██║   ██║██    ██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██╔══██╗ ██║
    ██║  ╚██████╔╝╚██████╔╝╚██████╔╝██║   ██║╚██████╔╝╚██████╔╝██╗╚█████ ████╔╝██║██║  ╚██╗██║
    ╚═╝   ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝   ╚═╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╚═══╝ ╚═╝╚═╝   ╚═╝╚═╝
    ©2023-${new Date().getFullYear()} 有兽档案馆                                                ${mediawikiVersions}
    `;
	console.log(`%c${ascii}`, 'color:#159c5a');
})();
