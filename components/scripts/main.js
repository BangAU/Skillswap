;(function($, window, document, undefined) {
	var $win = $(window);
    var $doc = $(document);
    
    $win.on('resize',function() {

    }); //FINISH WIN RESIZE

    $doc.ready(function() { 
        // burger menu
        $('#nav input').change(function () {
            if ($(this).is(":checked")) {
                $('#nav ul.mobMenu').slideDown(500);
            } else {
                $('#nav ul.mobMenu').slideUp(500);
            }
        });

        // on hover effect for learn more button
        $('.learn').click(function(ev){
            ev.preventDefault();
            console.log("hello");
            $(this).closest('.privacy-block').find('.text-holder').slideDown(500);
            
            var height = window.parent.$('.iframe').height();
            console.log(height);
            height = height + 60 +'px';
            window.parent.$('.iframe').css('height',height);

            $(this).css('pointer-events','none');

            // var nHeight = iFrames[i].contentWindow.document.body.offsetHeight;
            // iFrames[i].style.height = nHeight + 'px';
        })

        // reveal on scroll
        $(function () {
            var $window = $(window),
                win_height_padded = $window.height() * 1.1,
                isTouch = Modernizr.touch,
                hasCreatedObjects1 = false,
                hasCreatedObjects2 = false,
                hasCreatedObjects3 = false,
                hasCreatedObjects4 = false,
                hasCreatedObjects5 = false,
                hasCreatedObjects6 = false,
                a1= 0,
                a2=0,
                a3=0;

            if (isTouch) { $('.revealOnScroll').addClass('animated'); }
            // if (isTouch) { $('.animatedsvg').addClass('animated'); }

            $window.on('scroll', revealOnScroll);

            function revealOnScroll() {
                var scrolled = $window.scrollTop(),
                    win_height_padded = $window.height() * 1.1;

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

                $(".revealOnScrollShape:not(.animated)").each(function () {
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
                $(".revealOnScrollShape.animated").each(function (index) {
                    var $this = $(this),
                        offsetTop = $this.offset().top;
                    if (scrolled + win_height_padded < offsetTop) {
                        $(this).removeClass('animated fadeInLeft fadeInRight')
                    }
                });
                
                // percentage chart animation on scroll    
                $(".revealOnScroll1").each(function(){
                    var $this= $(this),
                        offsetTop = $this.offset().top;
                        
                    if(scrolled + win_height_padded > offsetTop+200){
                        if(!hasCreatedObjects1){
                            hasCreatedObjects1 = true;
                            
                            $this.children().children('.circle').circliful({
                                animation: 1,
                                animationStep: 5,
                                foregroundBorderWidth: 12,
                                backgroundBorderWidth: 45,
                                fontColor: '#fff',
                                percentageTextSize : 35, 
                            });
                            $this.children().children().children('.circliful').fadeTo(1500, 1);
                            $this.children('span').fadeTo(1500, 1);
                       }

                    }
                })
                $(".revealOnScroll2").each(function(){
                    var $this= $(this),
                        offsetTop = $this.offset().top;
                        
                    if(scrolled + win_height_padded > offsetTop+200){
                        if(!hasCreatedObjects2){
                            hasCreatedObjects2 = true;
                            $this.children().children('.circle').circliful({
                                animation: 1,
                                animationStep:5,
                                foregroundBorderWidth: 12,
                                backgroundBorderWidth: 45,
                                fontColor: '#fff',
                                percentageTextSize : 35, 
                            });
                            $this.children().children().children('.circliful').fadeTo(1500, 1);
                            $this.children('span').fadeTo(1500, 1);
                        }
                    }
                })
                $(".revealOnScroll3").each(function(){
                    var $this= $(this),
                        offsetTop = $this.offset().top;
                    if(scrolled + win_height_padded > offsetTop+200){
                        if(!hasCreatedObjects3){
                            hasCreatedObjects3 = true;
                            $this.children().children('.circle').circliful({
                                animation: 1,
                                animationStep: 5,
                                foregroundBorderWidth: 12,
                                backgroundBorderWidth: 45,
                                fontColor: '#fff',
                                percentageTextSize : 35, 
                            });
                            $this.children().children().children('.circliful').fadeTo(1500, 1);
                            $this.children('span').fadeTo(1500, 1);
                        }
                    }
                })

                // stats animation
                $('.stat1').each(function(){
                    var $this = $(this),
                    offsetTop = $this.offset().top;
                    function countNum(){
                        $this.find('.val').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 1000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                    }
                    function showDescrip(){
                        $this.children('.descrip').fadeTo(1500,1);
                    }
                    if(a1==0 && scrolled + win_height_padded> offsetTop +200){
                        
                        $this.find('.border').animate({width:165}, 1000);
                        $this.find('.num').addClass('animated zoomIn');
                        // setTimeout(countNum,800);
                        countNum();
                        setTimeout(showDescrip,1500);
                        a1=1;
                    }        
                });

                $('.stat2').each(function(){
                    var $this = $(this),
                    offsetTop = $this.offset().top;
                    function countNum(){
                        $this.find('.val').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                    }
                    function showDescrip(){
                        $this.children('.descrip').fadeTo(1500,1);
                    }
                    if(a2 == 0 && scrolled + win_height_padded> offsetTop +200){
                        $this.find('.border').animate({width:165}, 1000);
                        $this.find('.num').addClass('animated zoomIn');
                        countNum();
                        setTimeout(showDescrip,2000);
                        a2=1;
                    }        
                });

                $('.stat3').each(function(){
                    var $this = $(this),
                    offsetTop = $this.offset().top;
                    function countNum(){
                        $this.find('.val').each(function() {
                            var $this = $(this),
                                countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                    }
                    function showDescrip(){
                        $this.children('.descrip').fadeTo(1500,1);
                    }
                    if(a3==0 && scrolled + win_height_padded> offsetTop +200){
                        $this.find('.border').animate({width:165}, 1000);
                        $this.find('.num').addClass('animated zoomIn');
                        countNum();
                        setTimeout(showDescrip,2000);
                        a3=1;
                    }        
                });             
                
            }
            revealOnScroll();
        });

        // scroll link animation
        $(function() {
            $('.mobMenu a').on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 600, 'linear');
            });
        });


        // close the marketo form thankyou message
        $('.lb-btn-close').on('click', function(e){
            e.preventDefault();
            $('.contact-form-message-2').fadeOut(1000);
        });

    }); // END DOC READY

    $(window).on('load', function() {
        // $(".contact-form-message").on('load', resizeIframe('form-top','top-msg'))
    }); //END WINDOWS LOAD

})(jQuery, window, document);