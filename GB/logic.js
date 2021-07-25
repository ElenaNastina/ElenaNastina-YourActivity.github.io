function bottle_or_bottles(amount) {
	if (amount == 1) {
		return "bottle";
	}
	return "bottles";
}

for (i = 99; i >= 0; i--) {
	if (i >= 2) {
		let newParagraph = document.createElement("p");
		let newText = document.createTextNode(i + " " + bottle_or_bottles(i) + " of beer on the wall, " + i + " " + bottle_or_bottles(i) + " of beer.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
		
		newParagraph = document.createElement("p");
		newText = document.createTextNode("Take one down and pass it around, " + (i - 1) + " " + bottle_or_bottles(i - 1) + " of beer on the wall.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
		
		document.body.appendChild(document.createElement("br"));
	} else if (i == 1) {
		let newParagraph = document.createElement("p");
		let newText = document.createTextNode(i + " " + bottle_or_bottles(i) + " of beer on the wall, " + i + " " + bottle_or_bottles(i) + " of beer.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
		
		newParagraph = document.createElement("p");
		newText = document.createTextNode("Take one down and pass it around, no more bottles of beer on the wall.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
		
		document.body.appendChild(document.createElement("br"));
	} else {
		let newParagraph = document.createElement("p");
		let newText = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
		
		newParagraph = document.createElement("p");
		newText = document.createTextNode("Go to the store and buy some more, 99 bottles of beer on the wall.");
		newParagraph.appendChild(newText);
		document.body.appendChild(newParagraph);
	}
}