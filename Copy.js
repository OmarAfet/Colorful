function Copy(color) {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = color;

	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);
}
