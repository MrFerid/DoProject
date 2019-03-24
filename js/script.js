"use strict";

$(document).ready(function(){

        // -------- menu scroll on click and sticky  ---------------- //

        var contactHeight = $("header .contact").outerHeight();
        $(window).scroll(function(){
            if($(this).scrollTop() > 600){
                $("header").addClass("is-sticky");
                $("header .contact").css({"margin-top" : - contactHeight + "px"})
            }
       else if($(this).scrollTop() < 60){
                $("header").removeClass("is-sticky");
                $("header .contact").css({"margin-top" : 0})
            }
        });


        $("nav ul").find("a").click(function(e) {
            e.preventDefault();
            $("nav ul").find("li").removeClass('active');
            $(this).parent().addClass('active');

            var section = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(section).offset().top
            });
        });

        // -------- on click more button in anywhere  ---------------- //

        $('a').click(function(){

           if($(this).html() == "more"){
               $(this).parent().siblings().removeClass('d-none');
               return false;
           }

        });


      // ---- count numbers in statistic section on scroll if element not in scene--------- //
      let shown = false;
      let oTop = $('#counter').offset().top - window.innerHeight;
      $(window).scroll(function(){
          
          if (shown == false && $(window).scrollTop() > oTop) {

                    $('.conter-value').each(function () {
                      let $this = $(this);
                      jQuery({ Counter: 0 }).animate({ Counter: $this.text() 
                      }, 
                      {
                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                          $this.text(Math.ceil(this.Counter)); 
                        }
                      });
                    });
                  shown = true;  
            }
         });
     // -------- count numbers in statistic section on simple refsresh if element in scene ---------------- //
      if(shown == false && $(window).scrollTop() > oTop){
          $('.conter-value').each(function () {
            let $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 1500,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter)); 
              }
            });
          });
          shown = true;  
      }


})