window.onload = async () => {
	const app = document.getElementById('app');
	const data = await fetch('./data.json').then((data) => data.json());
	let dataMap = data.map((item) => {
		return `
			<article>
				<img src='${item.link}' />
				<h1>${item.name}</h1>
				<h4>$${item.price}</h4>
			</article>
		`;
	});

	let section = document.createElement('section');
	for (let i = 0; i < 15; i++) {
		section.innerHTML += dataMap[i];
	}
	app.appendChild(section);
};
