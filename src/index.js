// CSS
import normalize from './css/normalize.css';
import postmedia from './css/postmedia.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// IMAGES
import richmond from './images/richmond-legend.png';
import chilliwack from './images/chilliwack.png';

// JS
const init = async () => {
	const img_rich = document.getElementById('richmond');
	img_rich.src = richmond;

	const img_chill = document.getElementById('chilliwack');
	img_chill.src = chilliwack;
};

init();