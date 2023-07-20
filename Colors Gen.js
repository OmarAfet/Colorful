const colors = ["#e5e5e5", "#cccccc", "#b2b2b2", "#999999", "#7f7f7f", "#666666", "#4c4c4c", "#333333", "#191919", "#f9d1d1", "#f4a3a3", "#ef7575", "#ea4747", "#e51919", "#b71414", "#890f0f", "#5b0a0a", "#2d0505", "#f9d7d1", "#f4b0a3", "#ef8975", "#ea6247", "#e53b19", "#b72f14", "#89230f", "#5b170a", "#2d0b05", "#f9ded1", "#f4bea3", "#ef9e75", "#ea7d47", "#e55d19", "#b74a14", "#89380f", "#5b250a", "#2d1205", "#f9e5d1", "#f4cca3", "#efb275", "#ea9947", "#e57f19", "#b76614", "#894c0f", "#5b330a", "#2d1905", "#f9ecd1", "#f4d9a3", "#efc675", "#eab447", "#e5a119", "#b78114", "#89600f", "#5b400a", "#2d2005", "#f9f3d1", "#f4e7a3", "#efdb75", "#eacf47", "#e5c319", "#b79c14", "#89750f", "#5b4e0a", "#2d2705", "#f9f9d1", "#f4f4a3", "#efef75", "#eaea47", "#e5e519", "#b7b714", "#89890f", "#5b5b0a", "#2d2d05", "#f3f9d1", "#e7f4a3", "#dbef75", "#cfea47", "#c3e519", "#9cb714", "#75890f", "#4e5b0a", "#272d05", "#ecf9d1", "#d9f4a3", "#c6ef75", "#b4ea47", "#a1e519", "#81b714", "#60890f", "#405b0a", "#202d05", "#e5f9d1", "#ccf4a3", "#b2ef75", "#99ea47", "#7fe519", "#66b714", "#4c890f", "#335b0a", "#192d05", "#def9d1", "#bef4a3", "#9eef75", "#7dea47", "#5de519", "#4ab714", "#38890f", "#255b0a", "#122d05", "#d7f9d1", "#b0f4a3", "#89ef75", "#62ea47", "#3be519", "#2fb714", "#23890f", "#175b0a", "#0b2d05", "#d1f9d1", "#a3f4a3", "#75ef75", "#47ea47", "#19e519", "#14b714", "#0f890f", "#0a5b0a", "#052d05", "#d1f9d7", "#a3f4b0", "#75ef89", "#47ea62", "#19e53b", "#14b72f", "#0f8923", "#0a5b17", "#052d0b", "#d1f9de", "#a3f4be", "#75ef9e", "#47ea7d", "#19e55d", "#14b74a", "#0f8938", "#0a5b25", "#052d12", "#d1f9e5", "#a3f4cc", "#75efb2", "#47ea99", "#19e57f", "#14b766", "#0f894c", "#0a5b33", "#052d19", "#d1f9ec", "#a3f4d9", "#75efc6", "#47eab4", "#19e5a1", "#14b781", "#0f8960", "#0a5b40", "#052d20", "#d1f9f3", "#a3f4e7", "#75efdb", "#47eacf", "#19e5c3", "#14b79c", "#0f8975", "#0a5b4e", "#052d27", "#d1f9f9", "#a3f4f4", "#75efef", "#47eaea", "#19e5e5", "#14b7b7", "#0f8989", "#0a5b5b", "#052d2d", "#d1f3f9", "#a3e7f4", "#75dbef", "#47cfea", "#19c3e5", "#149cb7", "#0f7589", "#0a4e5b", "#05272d", "#d1ecf9", "#a3d9f4", "#75c6ef", "#47b4ea", "#19a1e5", "#1481b7", "#0f6089", "#0a405b", "#05202d", "#d1e5f9", "#a3ccf4", "#75b2ef", "#4799ea", "#197fe5", "#1466b7", "#0f4c89", "#0a335b", "#05192d", "#d1def9", "#a3bef4", "#759eef", "#477dea", "#195de5", "#144ab7", "#0f3889", "#0a255b", "#05122d", "#d1d7f9", "#a3b0f4", "#7589ef", "#4762ea", "#193be5", "#142fb7", "#0f2389", "#0a175b", "#050b2d", "#d1d1f9", "#a3a3f4", "#7575ef", "#4747ea", "#1919e5", "#1414b7", "#0f0f89", "#0a0a5b", "#05052d", "#d7d1f9", "#b0a3f4", "#8975ef", "#6247ea", "#3b19e5", "#2f14b7", "#230f89", "#170a5b", "#0b052d", "#ded1f9", "#bea3f4", "#9e75ef", "#7d47ea", "#5d19e5", "#4a14b7", "#380f89", "#250a5b", "#12052d", "#e5d1f9", "#cca3f4", "#b275ef", "#9947ea", "#7f19e5", "#6614b7", "#4c0f89", "#330a5b", "#19052d", "#ecd1f9", "#d9a3f4", "#c675ef", "#b447ea", "#a119e5", "#8114b7", "#600f89", "#400a5b", "#20052d", "#f3d1f9", "#e7a3f4", "#db75ef", "#cf47ea", "#c319e5", "#9c14b7", "#750f89", "#4e0a5b", "#27052d", "#f9d1f9", "#f4a3f4", "#ef75ef", "#ea47ea", "#e519e5", "#b714b7", "#890f89", "#5b0a5b", "#2d052d", "#f9d1f3", "#f4a3e7", "#ef75db", "#ea47cf", "#e519c3", "#b7149c", "#890f75", "#5b0a4e", "#2d0527", "#f9d1ec", "#f4a3d9", "#ef75c6", "#ea47b4", "#e519a1", "#b71481", "#890f60", "#5b0a40", "#2d0520", "#f9d1e5", "#f4a3cc", "#ef75b2", "#ea4799", "#e5197f", "#b71466", "#890f4c", "#5b0a33", "#2d0519", "#f9d1de", "#f4a3be", "#ef759e", "#ea477d", "#e5195d", "#b7144a", "#890f38", "#5b0a25", "#2d0512", "#f9d1d7", "#f4a3b0", "#ef7589", "#ea4762", "#e5193b", "#b7142f", "#890f23", "#5b0a17", "#2d050b"];

function createColorSection(color) {
	function getBrightness(color) {
		const rgb = parseInt(color.substr(1), 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = rgb & 0xff;
		return (r * 299 + g * 587 + b * 114) / 1000;
	}

	const textColor = getBrightness(color) > 128 ? "text-black" : "text-white";

	const colorSection = document.createElement("div");
	colorSection.innerHTML = `
    <div class="bg-[${color}] flex justify-center items-center text-4xl font-bold hover:${textColor} rounded-lg hover:scale-[0.95] cursor-pointer transition h-[128px] text-transparent copy-element" onclick="Copy('${color}', this)">Copy</div>
    <div class="text-center uppercase font-bold">${color}</div>
  `;
	return colorSection;
}

function createColorCategory(categoryName, categoryColors) {
	const categoryContainer = document.createElement("div");
	categoryContainer.innerHTML = `
    <div class="text-4xl font-bold text-center mb-8 uppercase">${categoryName}</div>
    <div class="grid mb-12 grid-cols-9 gap-2 px-16"></div>
  `;
	const colorGrid = categoryContainer.querySelector(".grid");

	categoryColors.forEach((color) => {
		colorGrid.appendChild(createColorSection(color));
	});

	return categoryContainer;
}

function populateColors() {
	const colorContainer = document.getElementById("color-container");

	const Color_Gray = colors.slice(0, 9);
	const Color_10 = colors.slice(9, 18);
	const Color_20 = colors.slice(18, 27);
	const Color_30 = colors.slice(27, 36);
	const Color_40 = colors.slice(36, 45);
	const Color_50 = colors.slice(45, 54);
	const Color_60 = colors.slice(54, 63);
	const Color_70 = colors.slice(63, 72);
	const Color_80 = colors.slice(72, 81);
	const Color_90 = colors.slice(81, 90);
	const Color_100 = colors.slice(90, 99);
	const Color_110 = colors.slice(99, 108);
	const Color_120 = colors.slice(108, 117);
	const Color_130 = colors.slice(117, 126);
	const Color_140 = colors.slice(126, 135);
	const Color_150 = colors.slice(135, 144);
	const Color_160 = colors.slice(144, 153);
	const Color_170 = colors.slice(153, 162);
	const Color_180 = colors.slice(162, 171);
	const Color_190 = colors.slice(171, 180);
	const Color_200 = colors.slice(180, 189);
	const Color_210 = colors.slice(189, 198);
	const Color_220 = colors.slice(198, 207);
	const Color_230 = colors.slice(207, 216);
	const Color_240 = colors.slice(216, 225);
	const Color_250 = colors.slice(225, 234);
	const Color_260 = colors.slice(234, 243);
	const Color_270 = colors.slice(243, 252);
	const Color_280 = colors.slice(252, 261);
	const Color_290 = colors.slice(261, 270);
	const Color_300 = colors.slice(270, 279);
	const Color_310 = colors.slice(279, 288);
	const Color_320 = colors.slice(288, 297);
	const Color_330 = colors.slice(297, 306);
	const Color_340 = colors.slice(306, 315);
	const Color_350 = colors.slice(315, 324);
	const Color_360 = colors.slice(324, 333);

	colorContainer.appendChild(createColorCategory("Gray", Color_Gray));
	colorContainer.appendChild(createColorCategory("10", Color_10));
	colorContainer.appendChild(createColorCategory("20", Color_20));
	colorContainer.appendChild(createColorCategory("30", Color_30));
	colorContainer.appendChild(createColorCategory("40", Color_40));
	colorContainer.appendChild(createColorCategory("50", Color_50));
	colorContainer.appendChild(createColorCategory("60", Color_60));
	colorContainer.appendChild(createColorCategory("70", Color_70));
	colorContainer.appendChild(createColorCategory("80", Color_80));
	colorContainer.appendChild(createColorCategory("90", Color_90));
	colorContainer.appendChild(createColorCategory("100", Color_100));
	colorContainer.appendChild(createColorCategory("110", Color_110));
	colorContainer.appendChild(createColorCategory("120", Color_120));
	colorContainer.appendChild(createColorCategory("130", Color_130));
	colorContainer.appendChild(createColorCategory("140", Color_140));
	colorContainer.appendChild(createColorCategory("150", Color_150));
	colorContainer.appendChild(createColorCategory("160", Color_160));
	colorContainer.appendChild(createColorCategory("170", Color_170));
	colorContainer.appendChild(createColorCategory("180", Color_180));
	colorContainer.appendChild(createColorCategory("190", Color_190));
	colorContainer.appendChild(createColorCategory("200", Color_200));
	colorContainer.appendChild(createColorCategory("210", Color_210));
	colorContainer.appendChild(createColorCategory("220", Color_220));
	colorContainer.appendChild(createColorCategory("230", Color_230));
	colorContainer.appendChild(createColorCategory("240", Color_240));
	colorContainer.appendChild(createColorCategory("250", Color_250));
	colorContainer.appendChild(createColorCategory("260", Color_260));
	colorContainer.appendChild(createColorCategory("270", Color_270));
	colorContainer.appendChild(createColorCategory("280", Color_280));
	colorContainer.appendChild(createColorCategory("290", Color_290));
	colorContainer.appendChild(createColorCategory("300", Color_300));
	colorContainer.appendChild(createColorCategory("310", Color_310));
	colorContainer.appendChild(createColorCategory("320", Color_320));
	colorContainer.appendChild(createColorCategory("330", Color_330));
	colorContainer.appendChild(createColorCategory("340", Color_340));
	colorContainer.appendChild(createColorCategory("350", Color_350));
	colorContainer.appendChild(createColorCategory("360", Color_360));
}

populateColors();
