$('.b-banner').slick({
    arrows: true,
	dots: true,
	autoplay: true,
    autoplaySpeed: 4000,
});


var owl = $('.carousel1').owlCarousel({
	loop:true,
	margin: 0,
	nav:false,
	responsive:{
	320:{
		items:1
		},
	770:{
		items:1
	  },
	1000:{
		items:7
	  }
	}
  });
owl.owlCarousel();
	$('.b-brend-menu__arrow-right').click(function() {
	owl.trigger('next.owl.carousel');
	});
	$('.b-brend-menu__arrow-left').click(function() {
	owl.trigger('prev.owl.carousel', [300]);
	});


var owl1 = $('.carousel2').owlCarousel({
	loop:true,
	margin: 0,
	nav:false,
	responsive:{
		0:{
		items:1
		},
		770:{
		items:1
		},
		1000:{
		items:4
		}
	}
});
owl1.owlCarousel();
$('.b-sale-menu-product__arrow-right').click(function() {
owl1.trigger('next.owl.carousel');
});
$('.b-sale-menu-product__arrow-left').click(function() {
owl1.trigger('prev.owl.carousel', [300]);
});


var owl2 = $('.carousel3').owlCarousel({
	loop:true,
	margin: 0,
	nav:false,
	responsive:{
		0:{
		items:1
		},
		770:{
		items:1
		},
		1000:{
		items:4
		}
	}
});
owl2.owlCarousel();
$('.slider2-arrow-right').click(function() {
owl2.trigger('next.owl.carousel');
});
$('.slider2-arrow-left').click(function() {
owl2.trigger('prev.owl.carousel', [300]);
});


var button = document.getElementsByClassName("js-button-toggle");
button[0].addEventListener("click", display);

function display() {
	var bu = document.querySelector(".b-nav-menu-blocks_none");
	bu.classList.toggle('b-nav-menu-blocks_none_1');
}

button[0].addEventListener("click", display1);
function display1() {
	var bu = document.querySelector(".js-button-toggle__color");
	bu.classList.toggle('js-button-toggle__color-red');
}


var qaz = document.querySelector("#b-head-bottom-menu-search-button");

qaz.addEventListener("click", takeText); // Добавляет слушателя для дом элемента. takeText - калбек для метода addEventListener,
// который добавляет слушателя. Слушатель - браузерная программа.
// takeText(brauzerEvent) Тоже самое что и event. Калбек - вызов по окончанию чего либа, в данном случае - клик.
function takeText(event) { //event - это js  объект , который содержит свойства произошедшего события, позволяет отменить стандартное поведения.
	var getTextForm = (document.forms["search-form"].elements["b-head-bottom-menu-search-form"].value);
	var textWtSp = (getTextForm.trim());
	var takeLenght = (textWtSp.length);
	if (takeLenght < 5){
	event.preventDefault();
	var opop = document.querySelector("#b-head-bottom-menu-search-form");
	opop.classList.add("search-form-red");
	alert("Количество символов: " + takeLenght);
	} else {
		alert("Вы искали " + textWtSp);
	}
}




var likedCardMas = [];
// var likedCardMas1 = {};

var likedLater = JSON.parse(localStorage.getItem("lookLikes")); // Извлекаем данные из localStorage для расставления лайков
console.log(likedLater);

if ( likedLater != null ) { // Если localStorage не равен нулю, то мы передаем эти значения в массив likedCardMas
	if (likedLater.length != 0) {
	likedCardMas = likedLater;

	setTimeout(function(){
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
			function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form')
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 500); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
			});
	}, 2000);


	for (var i = 0 ; i < likedCardMas.length; i++){

		$(".b-your-like-products").append(
			"<div class=" + "'" + "b-product__nuber " + "b-product__nuber-" + likedCardMas[i].number + "'" +">" +
				"<div class=" + "'" +"b-product-nuber " + "b-product-nuber-" + likedCardMas[i].number + "'" +">" +

					"<div class=" + "'" + "product-img" + "'" +"><img src=" + "'" + likedCardMas[i].img + "'" + "></div>" +
					"<div class=" + "'" + "product-nuber" + "'" +">Товар №: " + likedCardMas[i].number + "</div>" +
					"<div class=" + "'" + "product-name" + "'" +">Название товара: " + likedCardMas[i].productName + "</div>" +
					"<div class=" + "'" + "product-price" + "'" +">Цена: " + likedCardMas[i].price + "</div>" +

				"</div>" +
			"</div>"
			)
	}

	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
	if (i == 1){

		$("#modal_left-arrow").hide()
		$("#modal_right-arrow").hide()
		var owl3 = $('.carousel4').owlCarousel({
			loop:false,
			margin: -1,
			nav: false,
			center: true,
			mergeFit: true,
			responsive:{
				0:{
				items:3
				},
				1000:{
				items:3
				}
			}
		});

	} else if (i == 3) {
		$("#modal_left-arrow").hide()
		$("#modal_right-arrow").hide()
		var owl3 = $('.carousel4').owlCarousel({
			loop:false,
			margin: -1,
			nav: false,
			// center: true,
			responsive:{
				0:{
				items:3
				},
				1000:{
				items:3
				}
			}
		});
	} else if (i == 2){
		$("#modal_left-arrow").hide()
		$("#modal_right-arrow").hide()
		var owl3 = $('.carousel4').owlCarousel({
			loop:false,
			margin: -1,
			nav: false,
			responsive:{
				0:{
				items:1
				},
				1000:{
				items:2
				}
			}
		});
	} else {
		var owl3 = $('.carousel4').owlCarousel({
			loop:false,
			margin: -1,
			nav: false,
			responsive:{
				0:{
				items:3
				},
				1000:{
				items:3
				}
			}
		});
		owl3.owlCarousel();
		$('#modal_right-arrow').click(function() {
		owl3.trigger('next.owl.carousel');
		});
		$('#modal_left-arrow').click(function() {
		owl3.trigger('prev.owl.carousel', [300]);
		});
	}
	}
}



$(document).ready(function() {

	$('.b-sale-menu-product-slider-card-hover-menu-like-img').click(function() {
		var $card = $(this).closest('.b-sale-menu-product-slider-card_hover');
		var className = $($card).attr( 'class' );
		var classList = className.split(' ');
		var sliderNumIdObj = [];

		for (var i = 0; i < classList.length; i++) {
			var substring = "js-id-slider-";
			if (classList[i].includes(substring))
				sliderNumIdObj.push(classList[i]);
		}

		var sliderNumIdStr = sliderNumIdObj.join();
		var sliderNumId = sliderNumIdStr.split('-card-');
		var likeColor = $(this).closest('.b-sale-menu-product-slider-card-hover-menu-like__img').toggleClass("on-like");

		var searchUrlImg = $card.find('.b-sale-menu-product-slider-card-img').get(0);
		var urlImg = searchUrlImg.getAttribute('src');
		console.log(searchUrlImg);

		var text = $card.find('.b-sale-menu-product-slider-card-title').text();
		var price = $card.find('.b-sale-menu-product-slider-card-price-new').text();
		var sliderNum = sliderNumId[0];
		var prodNum = sliderNumId[1];

		var cardArr = {};
		cardArr = {
			number : prodNum,
			sliderNum : sliderNum,
			productName : text,
			price : price,
			img : urlImg
		};

		var searchProdNumb = false; // Используем для поиска в массиве номера карточки товара
		for (var i = 0; i < likedCardMas.length; i++) {
			if (likedCardMas[i].number == prodNum){
				searchProdNumb = i; // Если в массиве есть карточка с номером, то мы назначаем ее индекс в переменную для дальнейшего удаления
			}
		}

		if (searchProdNumb === false){ // Если равен false - значит что в массиве likedCardMas нет массива (объекта)
			likedCardMas.push(cardArr); // И мы должны добавить его в массив likedCardMas
		} else {
			likedCardMas.splice(searchProdNumb , 1 ); // Или удалить
		}
		console.log(likedCardMas);
		console.log(cardArr);

		localStorage.setItem('lookLikes', JSON.stringify(likedCardMas)); // Для записи в localStorage используем переменную 'lookLikes', по
																		// которой будем доставать массив в формате строки
	});

	for (var i = 0; i < likedCardMas.length; i++){ // Из данных массива собираем js класс карточки товара

		var classNamePart1 = likedCardMas[i].sliderNum; // Собираем номер слайдера
		var classNamePartAll = classNamePart1 + '-card-' + likedCardMas[i].number; // Собираем родительский класс карточки: номер слайдера + разделитель '-card-' + номер карточки
		var allElemOnPage = document.getElementsByClassName(classNamePartAll); // Находим все классы на странице.
		allElemOnPage[1].querySelector('.b-sale-menu-product-slider-card-hover-menu-like__img').classList.add("on-like"); // Так как слайдер создает 2 дубля
	}


});




