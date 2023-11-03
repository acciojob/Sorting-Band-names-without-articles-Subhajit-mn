//your code here
function getArticleLessString(input) {
	let words = input.split(" ");
	let nonArticleWords = words.filter((word) => {
		let smallCaseWord = word.toLowerCase();
		if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
			return false;
		}
		return true;
	});
	let result = nonArticleWords.join(" ");
	return result.sort();
}

