"use strict";
   // -------- Farid slider  ---------------- //


   $(function(){
    
        $('.fSlider').fSlider({
            auto: true,
            pause: 4000,
            arrows: true,
            arrowForm: 'square',
            thumbnails: true,
            thDesgin: 'solid'
           });
   });

;(function($){$.fn.fSlider=function(options){var _=$.extend({auto:!0,pause:4000,arrows:!0,arrowForm:'square',thumbnails:!0,thDesgin:'square'},options);let $this=$('.fSlider');if(_.arrows){$this.append("<div class='fSlider-right fSlider-arrow'><i class='right-arrow'></i></div>");$this.append("<div class='fSlider-left  fSlider-arrow'> <i class='left-arrow'></i></div>");let arrow=$('.fSlider-arrow i');switch(_.arrowForm){case 'square':arrow.parent().css({borderRadius:0});break;case 'rounded':$('.fSlider-right').css({borderTopLeftRadius:'100%',borderBottomLeftRadius:'100%'});$('.fSlider-left').css({borderTopRightRadius:'100%',borderBottomRightRadius:'100%'});break;case 'transparent':arrow.parent().css({backgroundColor:'transparent'});break}}
let slides=$('.fSlider ul li');let autoPlay=null;let prevSlide=$('.fSlider-left');let nextSlide=$('.fSlider-right');let slidesCount=slides.length;let currentSlide=slides.first();let currentSlideIndex=1;slides.not(':first').css('display','none');currentSlide.addClass('active-slide');thumbnailOpacity(1);function fadeNext(){currentSlide.removeClass('active-slide');if(currentSlideIndex==slidesCount){currentSlide=slides.first();currentSlide.addClass('active-slide').fadeIn();currentSlideIndex=1;thumbnailOpacity(currentSlideIndex);slides.last().fadeOut()}else{currentSlideIndex++;currentSlide=currentSlide.next();currentSlide.addClass('active-slide').fadeIn();thumbnailOpacity(currentSlideIndex);currentSlide.prev().fadeOut()}}
function fadePrev(){currentSlide.removeClass('active').fadeOut();if(currentSlideIndex==1){currentSlide=slides.last();currentSlide.addClass('active').fadeIn();currentSlideIndex=slidesCount;thumbnailOpacity(currentSlideIndex)}else{currentSlideIndex--;currentSlide=currentSlide.prev();currentSlide.addClass('active').fadeIn();thumbnailOpacity(currentSlideIndex)}}
function AutoPlay(){clearInterval(autoPlay);if(_.auto==!0)
autoPlay=setInterval(function(){fadeNext()},_.pause)}
$(nextSlide).click(function(e){fadeNext();AutoPlay()});$(prevSlide).click(function(e){fadePrev();AutoPlay()});AutoPlay();if(_.thumbnails==!0){thumbnailsOn(_.thDesgin)}
function thumbnailsOn(thDesgin){$this.append('<div class="fSlider-thumbnails"></div>');for(let i=1;i<=slidesCount;i++){$('.fSlider-thumbnails').append('<div data-order='+i+' class="fSlider-thumbnail"></div>')}
let thumbnailItem=$('.fSlider-thumbnail');switch(thDesgin){case 'regular':thumbnailItem.css({background:'transparent',});break;case 'photo':thumbnailItem.css({borderRadius:'10%'});for(let i=1;i<=slidesCount;i++){let bgImg=$('.fSlider ul li:nth-child('+i+') > img').attr('src');$('.fSlider-thumbnails div:nth-child('+i+')').css({backgroundImage:'url('+bgImg+')'})}
break}}
$('.fSlider-thumbnail').click(function(){currentSlide.removeClass('active-slide').fadeOut();let currentThumb=$(this).attr('data-order');currentSlide=$('.fSlider ul li:nth-child('+currentThumb+')');currentSlide.addClass('active-slide').fadeIn();thumbnailOpacity(currentThumb);currentSlideIndex=currentThumb;AutoPlay()});function thumbnailOpacity(currentSl){$('.fSlider-thumbnails div').css({opacity:0.5});$('.fSlider-thumbnails div:nth-child('+currentSl+')').css({opacity:1})}}})(jQuery)