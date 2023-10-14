//your code here
function strip(bandName) {
	return bandName.replace(/^(a | an| the)/i, '').trim();
}
const sortedBands = band.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#band').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
