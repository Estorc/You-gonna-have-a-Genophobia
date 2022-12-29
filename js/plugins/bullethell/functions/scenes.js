	const sceneDir = 'js/plugins/bullethell/functions/scene';
	var BHscenes = {};

	const scenes = readdirSync(`${sceneDir}`).filter(files => files.endsWith('.js'));

	for (const file of scenes) {
		let scene = require(`${sceneDir}/${file}`);
		console.log(`-> Loaded scene ${scene.name} (${file})`);
		eval('scene.load = function '+scene.load.toString().substr(4, scene.load.toString().length));
		BHscenes[scene.name] = scene;
	};