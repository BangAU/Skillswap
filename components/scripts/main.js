;(function($, window, document, undefined) {
	var $win = $(window);
    var $doc = $(document);
    
    $win.on('resize',function() {

    }); //FINISH WIN RESIZE

    $doc.ready(function() { 
        // burger menu
        // $('#nav input').change(function () {
        //     if ($(this).is(":checked")) {
        //         $('#nav ul').slideDown(500);
        //     } else {
        //         $('#nav ul').slideUp(500);
        //     }
        // });

        // reveal on scroll
        $(function () {
            var $window = $(window),
                win_height_padded = $window.height() * 1.1,
                isTouch = Modernizr.touch;

            if (isTouch) { $('.revealOnScroll').addClass('animated'); }
            // if (isTouch) { $('.animatedsvg').addClass('animated'); }

            $window.on('scroll', revealOnScroll);

            function revealOnScroll() {
                var scrolled = $window.scrollTop()
                    // win_height_padded = $window.height() * 1.1;

                // steps-list animation    
                // Shown
                $(".revealOnScroll:not(.animated)").each(function () {
                    var $this = $(this),
                        offsetTop = $this.offset().top;

                    if (scrolled + win_height_padded > offsetTop +200) {
                        if ($this.data('timeout')) {
                            window.setTimeout(function () {
                                $this.addClass('animated ' + $this.data('animation'));
                            }, parseInt($this.data('timeout'), 10));
                        } else {
                            $this.addClass('animated ' + $this.data('animation'));
                        }
                    }
                });
                // Hidden...
                /* $(".revealOnScroll.animated").each(function (index) {
                    var $this = $(this),
                        offsetTop = $this.offset().top;
                    if (scrolled + win_height_padded < offsetTop) {
                        $(this).removeClass('animated fadeIn')
                    }
                }); */
            }
            revealOnScroll();
        });

        // scroll link animation
        $(function() {
            $('#nav ul a').on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-80}, 600, 'linear');
            });
        });

    }); // END DOC READY

    // hide the menu if the user clicks anywhere other than the menu button
    
    $doc.on("click", function(e){
        if($win.width()<991){
            console.log('inside');
            var menu = $('#nav ul');
            var menu_btn = $('#nav input');
            // check that the click target is not the menu or it's child
            if(!menu.is(e.target) && menu.has(e.target).length === 0){
                // check if the target is the menu-toggle amd show or hide the menu accordingly
                if(menu_btn.is(e.target)){
                    if ($(menu_btn).is(":checked")) {
                        menu.slideDown(500);
                    } else {
                        menu.slideUp(500);
                    }
                }
                // else if it's outside the menu or the menu-toggle, hide the menu and change the menu-toggle state
                else{
                    menu.hide();
                    menu_btn.prop("checked", false);
                }
            }
        }   
    });
   

    $(window).on('load', function() {
    }); //END WINDOWS LOAD

})(jQuery, window, document);