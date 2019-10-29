// Load jQuery from NPM
// import $ from 'jquery';

// window.jQuery = $;
// window.$ = $;

const Shuffle = require('shufflejs').default;

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('.nav--brand').addEventListener('click', evt => {
		evt.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	const shuffle = new Shuffle(document.querySelector('.projects__grid'), {
		itemSelector: '.projects__grid__item',
		group: ['featured'],
		speed: 500,
	});

	[].forEach.call(document.querySelectorAll('.projects__selectors a'), el => {
		el.addEventListener('click', evt => {
			evt.preventDefault();

			if (
				document.querySelectorAll('.projects__selectors a.active').length ===
				document.querySelectorAll('.projects__selectors a').length
			) {
				// check if all selectors are selected -> select the clicked one
				setActive(el);
			} else if (
				el.className === 'active' &&
				document.querySelectorAll('.projects__selectors a.active').length === 1
			) {
				// check if the clicked one is already selected and is the only selected one -> set all active
				setAllActive();
			} else {
				setActive(el);
			}

			const groups = [].map.call(document.querySelectorAll('.projects__selectors a.active'), el => {
				return el.getAttribute('data-group');
			});
			shuffle.filter(groups);
		});
	});
});

function setActive(activeElement) {
	[].forEach.call(document.querySelectorAll('.projects__selectors a'), el => {
		el.className = el === activeElement ? 'active' : '';
	});
}

function setAllActive() {
	[].forEach.call(document.querySelectorAll('.projects__selectors a'), el => {
		el.className = 'active';
	});
}
