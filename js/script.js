window.addEventListener('DOMContentLoaded', () => {

	let sliderTimer = setInterval(()=>{
			hideSlide(slideIndex);

			if (slideIndex == (photos.length - 1)) showSlide(slideIndex = 0);
			else showSlide(++slideIndex);
		}, 5000);

	let slider = document.querySelector('.slider'),
		photos = slider.getElementsByTagName('img'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next');

	let slideIndex = 0;

	for (let i = 0; i < photos.length; i++){
		hideSlide(i);
	}

	showSlide(slideIndex);

	prev.addEventListener('click', () => {

		clearInterval(sliderTimer);
		sliderTimer = setInterval(()=>{
			hideSlide(slideIndex);

			if (slideIndex == (photos.length - 1)) showSlide(slideIndex = 0);
			else showSlide(++slideIndex);
		}, 5000);

		hideSlide(slideIndex);

		if (slideIndex == 0) showSlide(slideIndex = (photos.length - 1));
		else showSlide(--slideIndex);

	});

	next.addEventListener('click', () => {

		clearInterval(sliderTimer);
		sliderTimer = setInterval(()=>{
			hideSlide(slideIndex);

			if (slideIndex == (photos.length - 1)) showSlide(slideIndex = 0);
			else showSlide(++slideIndex);
		}, 5000);

		hideSlide(slideIndex);

		if (slideIndex == (photos.length - 1)) showSlide(slideIndex = 0);
		else showSlide(++slideIndex);

	});

	function hideSlide(index){
		photos[index].classList.add('hide');
	}

	function showSlide(index){
		photos[index].classList.remove('hide');
	}

});

