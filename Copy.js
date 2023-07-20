function Copy(color, copyElement) {
	const tempTextArea = document.createElement("textarea");
	tempTextArea.value = color;

	document.body.appendChild(tempTextArea);
	tempTextArea.select();
	document.execCommand("copy");
	document.body.removeChild(tempTextArea);

	copyElement.textContent = "Copied";
	copyElement.classList.add("copied");

	setTimeout(() => {
		copyElement.textContent = "Copy";
		copyElement.classList.remove("copied");
	}, 1500);
}
