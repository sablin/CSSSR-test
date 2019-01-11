window.onload= function(){
	// создадим обьект vue с массивом из чекбоксов
	let form = new Vue({
		el: '.form',
		data: {
			boxes:['БЭМ/OOCSS', 'Gulp/Grunt', 'Использую Git',
					'Pug(Jade)', 'Webpack', 'С глазомером все ок', 'Stylus/LESS/SASS',
					'Дружу с WebGL' , 'Читаю blog.csssr.ru', 'Работаю с SVG' , 'JQuery',
				'Я ленивый(-ая)', 'Верстаю семантично', 'Знаю/изучаю Angular',
			'У меня хороший английский' , 'Accessibility(A11Y)','Знаю/изучаю React', 'ES2015/ES2016', 'Знаю/изучаю Node.js']
		}
	})

	// слайдер

	let links = document.querySelectorAll('.slider__wrapper-links a')
		sliderDot = document.querySelector('.slider-dot');

	for(let i =0; i< links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			sliderDot.style.left = links[i].getAttribute('data-left');
		})
	}

}

