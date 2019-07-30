$(window).on("load", function() {

    $('.animated').each(function() {
        var item = $(this)
        var delay = $(this).data("delay")

        if (delay == null) {
            delay = 0;
        }

        if ($(this).data("scroll") == 0 || $(this).data("scroll") == null) {
            setTimeout(function() {
                item.addClass('in');
            }, delay);
        }

    });
});


$(window).scroll(function() {
    $('.animated').each(function() {
        var position = $(this).offset().top;
        var delay = $(this).data("delay")
        var item = $(this)
        if (delay == null) {
            delay = 0;
        }
        $.fn.scrollBottom = function() {
            return $(document).height() - this.scrollTop() - this.height();
        };
        var topOfWindow = $(window).scrollTop();
        var bottomOfWindow = $(window).scrollBottom();

        if ($(this).data("scroll") != 0 || $(this).data("scroll") != null) {
            if (position < topOfWindow + 700 || position == bottomOfWindow) {
                setTimeout(function() {
                    item.addClass('in');
                }, delay);
            }
        }
    });
});
$('.scroll-to, .navbar-nav li a, .local-scroll').click(function(e) {
    var jump = $(this).attr('href');
    var position = $(jump).offset();
    $('body, html').stop().animate({
        scrollTop: position.top
    }, 1000);
    e.preventDefault();
});

(function() {
    $('.multiple-item .item').each(function() {
        var itemToClone = $(this);

        for (var i = 1; i < 4; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
            .addClass("cloneditem-" + (i))
            .appendTo($(this));
        }
    });

    $('.carousel-testimonial').each(function(){
        $(this).carousel({interval: $(this).data("interval")}).on('slide.bs.carousel', function(e) {
            var nextH = $(e.relatedTarget).height();
            $(this).find('.item.active').parent().animate({
                height: nextH
            }, $(this).data("adjust"));
        });
    });

}());

$(document).ready(function() {

  $("input.form-control").on("keyup change", function() {
    // If empty
    if($(this).val() == ""){
      $(this).removeClass("with-value"); // Remove class
    }

    else{
      $(this).addClass("with-value"); // Add class
    }
  });

  $("textarea.form-control").on("keyup change", function() {
    // If empty
    if($(this).val() == ""){
      $(this).removeClass("with-value"); // Remove class
    }

    else{
      $(this).addClass("with-value"); // Add class
    }
  });

});


// $(window).load(function() {
//   setTimeout(function() {
//     $("#site-preloader").css({'opacity':'0'});
//   }, 700);

//   setTimeout(function() {
//     $(document.body).css({'overflow':'auto'});
//   }, 250);

//   setTimeout(function() {
//     $("#site-preloader").css({'display':'none'});
//   }, 550);
// });