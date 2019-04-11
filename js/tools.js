var catalogueTimerResults = null;

$(document).ready(function() {

    $('.nav ul li.with-submenu > a').click(function(e) {
        $('.nav ul li.with-submenu').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.with-submenu').length == 0) {
            $('.nav ul li.with-submenu').removeClass('open');
        }
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1119,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.main-catalogue-list-content').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 1119,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('body').on('click', '.content-menu-sort-current', function() {
        $(this).parent().toggleClass('open');
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.content-menu-sort').length == 0) {
            $('.content-menu-sort.open').removeClass('open');
        }
    });

    /*$('body').on('click', '.content-menu-sort ul li a', function(e) {
        var curLink = $(this);
        var curLi = curLink.parent();
        if (!curLi.hasClass('active')) {
            $('.content-menu-sort ul li.active').removeClass('active');
            $('.content-menu-sort-current span').html(curLink.html());
            curLi.addClass('active');
        }
        $('.content-menu-sort.open').removeClass('open');
        reloadCatalogue(curLink.attr('href'));
        e.preventDefault();
    });*/

    /*$('.catalogue-filter-slider').each(function() {
        var curSlider = $(this);
        var curRange = curSlider.find('.catalogue-filter-slider-range')[0];
        noUiSlider.create(curRange, {
            start: [curSlider.find('.catalogue-filter-slider-from').val(), curSlider.find('.catalogue-filter-slider-to').val()],
            connect: true,
            range: {
                'min': curSlider.data('min'),
                'max': curSlider.data('max')
            },
            step: curSlider.data('step'),
            format: wNumb({
                decimals: curSlider.data('decimals')
            })
        });
        curRange.noUiSlider.on('update', function(values, handle) {
            if (handle == 0) {
                curSlider.find('.catalogue-filter-slider-from').val(values[handle]);
                curSlider.find('.catalogue-filter-slider-text-from').html(values[handle]);
            } else {
                curSlider.find('.catalogue-filter-slider-to').val(values[handle]);
                curSlider.find('.catalogue-filter-slider-text-to').html(values[handle]);
            }
        });
        curRange.noUiSlider.on('end', function() {
            $('.catalogue-filter-results').html('<div class="catalogue-filter-results-loading"><div class="catalogue-filter-results-loading-center"></div></div>');
            $('.catalogue-filter-results').css({'top': $(curRange).offset().top - $('.catalogue-filter').offset().top});
            $('.catalogue-filter-results').addClass('visible');
            reloadCatalogue($('.catalogue-filter form').attr('action'), new FormData($('.catalogue-filter form')[0]));
        });
    });*/

    $('.header-city-window').each(function() {
        if (typeof $.cookie('cityconfirm') == 'undefined') {
            $('.header-city-window').addClass('visible');
        }
    });

    $('body').on('click', '.header-city-window-btn a', function(e) {
        $.cookie('cityconfirm', 1, {expires: 365});
        $('.header-city-window').removeClass('visible');
        e.preventDefault();
    });

    $('.cookie-window').each(function() {
        if (typeof $.cookie('cookieconfirm') == 'undefined') {
            $('.cookie-window').addClass('visible');
        }
    });

    $('body').on('click', '.cookie-window-btn a', function(e) {
        $.cookie('cookieconfirm', 1, {expires: 365});
        $('.cookie-window').removeClass('visible');
        e.preventDefault();
    });

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curForm = curField.parents().filter('form');
        curField.find('.form-file-name-text').html(curInput.val().replace(/.*(\/|\\)/, ''));
        curForm.find('.form-files').append(curForm.data('filesCode'));
    });

    $('body').on('click', '.form-file-name-remove', function() {
        var curField = $(this).parents().filter('.form-file');
        curField.remove();
    });

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.window-link', function(e) {
        var curLink = $(this);
        windowOpen(curLink.attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $(window).resize(function() {
        windowPosition();
    });

    $('body').on('click', '.window-close, .window-thanks-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    /*$('body').on('change', '.catalogue-filter-checkbox input', function() {
        var curCheckbox = $(this).parents().filter('.catalogue-filter-checkbox');
        $('.catalogue-filter-results').html('<div class="catalogue-filter-results-loading"><div class="catalogue-filter-results-loading-center"></div></div>');
        $('.catalogue-filter-results').css({'top': curCheckbox.offset().top - $('.catalogue-filter').offset().top + 11});
        $('.catalogue-filter-results').addClass('visible');
        reloadCatalogue($('.catalogue-filter form').attr('action'), new FormData($('.catalogue-filter form')[0]));
    });*/

    $('body').on('click', '.content-menu-page-li a', function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        }
        e.preventDefault();
    });

    $('.content-menu-list-next').click(function() {
        var curLink = $(this);
        curLink.toggleClass('back');
        var curMenu = $('.content-menu-list-inner');
        if (curLink.hasClass('back')) {
            curMenu.find('.content-menu-list-ul').animate({'left': -(curMenu.find('.content-menu-list-ul').width() - curMenu.width())}, 200, function() {
                positionContentMenu();
            });
        } else {
            curMenu.find('.content-menu-list-ul').animate({'left': 0}, 200, function() {
                positionContentMenu();
            });
        }
    });

    $('.catalogue-detail-photos-big').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1119,
                settings: {
                    prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
                    nextArrow: '<button type="button" class="slick-next"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
                    arrows: true,
                    adaptiveHeight: true
                }
            }
        ]
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.catalogue-detail-photos-preview-item.active').removeClass('active');
        $('.catalogue-detail-photos-preview-item').eq(nextSlide).addClass('active');
    });

    $('.catalogue-detail-photos-preview-item').eq(0).addClass('active');

    $('.catalogue-detail-photos-preview-item a').click(function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            $('.catalogue-detail-photos-preview-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = $('.catalogue-detail-photos-preview-item').index(curItem);
            $('.catalogue-detail-photos-big').slick('slickGoTo', curIndex);
        }
        e.preventDefault();
    });

    $('.catalogue-detail-photos-preview').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.02632H10.8L7.4 9.60526C7.2 9.81579 7.2 10.1316 7.4 10.3421C7.5 10.4474 7.65 10.5 7.75 10.5C7.85 10.5 8 10.4474 8.1 10.3421L12.35 5.86842C12.55 5.65789 12.55 5.34211 12.35 5.13158L8.1 0.657895C7.9 0.447368 7.6 0.447368 7.4 0.657895C7.2 0.868421 7.2 1.18421 7.4 1.39474L10.8 4.97368H1C0.7 4.97368 0.5 5.18421 0.5 5.5C0.5 5.81579 0.7 6.02632 1 6.02632Z" /></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.02632H10.8L7.4 9.60526C7.2 9.81579 7.2 10.1316 7.4 10.3421C7.5 10.4474 7.65 10.5 7.75 10.5C7.85 10.5 8 10.4474 8.1 10.3421L12.35 5.86842C12.55 5.65789 12.55 5.34211 12.35 5.13158L8.1 0.657895C7.9 0.447368 7.6 0.447368 7.4 0.657895C7.2 0.868421 7.2 1.18421 7.4 1.39474L10.8 4.97368H1C0.7 4.97368 0.5 5.18421 0.5 5.5C0.5 5.81579 0.7 6.02632 1 6.02632Z" /></svg></button>',
        dots: false
    });

    $('.catalogue-detail-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.catalogue-detail-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.catalogue-detail-menu ul li').index(curLi);
            $('.catalogue-detail-info-tab.active').removeClass('active');
            $('.catalogue-detail-info-tab').eq(curIndex).addClass('active');
            positionCatalogueMenu();
        }
        e.preventDefault();
    });

    $('.about-sale-menu-li a').click(function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.about-sale-menu-li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.about-sale-menu-li').index(curLi);
            $('.about-sale-info-tab.active').removeClass('active');
            $('.about-sale-info-graf-item').removeClass('visible');
            $('.about-sale-info-tab').eq(curIndex).addClass('active');
            $('.about-sale-info-tab').eq(curIndex).find('.about-sale-info-graf-item').addClass('visible');
            positionAboutSaleMenu();
        }
        e.preventDefault();
    });

    $('.produce-menu ul li a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        }
        e.preventDefault();
    });

    $('.config-form-next-btn a').click(function(e) {
        var curStep = $(this).parents().filter('.config-form-step');
        var curIndex = $('.config-form-step').index(curStep);
        curIndex++;
        $('.config-form-step').removeClass('active');
        $('.config-form-step').eq(curIndex).addClass('active');
        $('.config-step').removeClass('active');
        $('.config-step').eq(curIndex).addClass('active');
        e.preventDefault();
    });

    $('.config-form-order-btn a').click(function(e) {
        var newHTML = '<table><tbody>';
        $('.config-form-block').each(function() {
            var curBlock = $(this);
            var curTitle = curBlock.find('.config-form-block-header h3').html();
            var curValue = curBlock.find('input[type="radio"]:checked').parent().find('span').html();
            if (curBlock.find('input[type="radio"]:checked').parent().find('span img').length > 0) {
                curValue = curBlock.find('input[type="radio"]:checked').parent().find('span img').length;
            }
            if (typeof curBlock.find('.config-form-block-header').data('unit') != 'undefined') {
                curValue += curBlock.find('.config-form-block-header').data('unit');
            }
            if (curBlock.find('.config-form-other-input input').length > 0 && curBlock.find('.config-form-other-input input').val() != '') {
                curValue = curBlock.find('.config-form-other-input input').val();
            }
            if (typeof curValue != 'undefined') {
                newHTML += '<tr><td class="catalogue-detail-info-title">' + curTitle + '</td><td>' + curValue + '</td></tr>';
            }
        });
        newHTML += '</tbody></table>';
        $('.order-form-final-info').html(newHTML);
        var curStep = $(this).parents().filter('.config-form-step');
        var curIndex = $('.config-form-step').index(curStep);
        curIndex++;
        $('.config-form-step').removeClass('active');
        $('.config-form-step').eq(curIndex).addClass('active');
        $('.config-step').removeClass('active');
        $('.config-step').eq(curIndex).addClass('active');
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        $('html').toggleClass('mobile-menu-open');
        $('html').removeClass('mobile-menu-catalogue-open');
        e.preventDefault();
    });

    $('.header-mobile-menu-link').click(function(e) {
        $('html').addClass('mobile-menu-catalogue-open');
        e.preventDefault();
    });

    $('.header-mobile-menu-back').click(function(e) {
        $('html').removeClass('mobile-menu-catalogue-open');
        e.preventDefault();
    });

    $('.header-mobile-menu-content > ul > li.with-submenu > a').click(function(e) {
        $(this).parent().toggleClass('open');
        e.preventDefault();
    });

    $('.main-catalogue-mobile-link').click(function(e) {
        $('html').addClass('mobile-menu-open');
        $('html').addClass('mobile-menu-catalogue-open');
        e.preventDefault();
    });

    $('.content-menu-filter-link').click(function(e) {
        if ($('.content-menu-filter').hasClass('open')) {
            $('.content-menu-filter').removeClass('open');
            $('.catalogue-filter').removeClass('open');
        } else {
            $('.content-menu-filter').addClass('open');
            $('.catalogue-filter').addClass('open');
            $('.content-menu-filter-content').css({'height': $('.catalogue-filter').height() + 24});
        }
        e.preventDefault();
    });

    $('.catalogue-descr-img-hint').click(function(e) {
        var curHint = $(this);
        if (curHint.hasClass('open')) {
            curHint.removeClass('open')
        } else {
            $('.catalogue-descr-img-hint.open').removeClass('open');
            curHint.addClass('open')
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.catalogue-descr-img-hint').length == 0 && !$(e.target).hasClass('catalogue-descr-img-hint')) {
            $('.catalogue-descr-img-hint.open').removeClass('open');
        }
    });

    $('.catalogue-detail-info-header').click(function() {
        $(this).parents().filter('.catalogue-detail-info-tab').toggleClass('open');
    });

    $('.table-scroll').mCustomScrollbar({
        axis: 'x'
    });

    $('body').on('click', '.catalogue-detail-photos-big-item a', function(e) {
        if ($('.window').length > 0) {
            windowClose();
        }

        var curPadding = $('.wrapper').width();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});
        $('.cookie-window').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        var galleryHtml = '<div class="window-gallery">';

        if ($('.catalogue-detail-photos-big-item a').length > 1) {
            galleryHtml += '<div class="window-gallery-preview">';
            $('.catalogue-detail-photos-big-item a').each(function() {
                galleryHtml += '<div class="window-gallery-preview-item"><a href="#"><img src="' + $(this).find('img').attr('src') + '" alt="" /></a></div>';
            });
            galleryHtml += '</div>';
        }

        galleryHtml += '<div class="window-gallery-big"><div class="window-gallery-big-inner">';
        $('.catalogue-detail-photos-big-item a').each(function() {
            galleryHtml += '<div class="window-gallery-big-item"><img src="' + $(this).attr('href') + '" alt="" /></div>';
        });
        galleryHtml += '</div></div>';

        galleryHtml += '</div>';

        $('.window').append('<div class="window-container window-container-preload"><div class="window-content">' + galleryHtml + '<a href="#" class="window-close"></a></div></div>')
        windowPosition();
        $('.window-container-preload').removeClass('window-container-preload');

        var curIndex = $('.catalogue-detail-photos-big-item a').index($(this));
        $('.window-gallery-preview-item').eq(curIndex).addClass('active');

        $('.window-gallery-preview-item a').click(function(e) {
            if (!$(this).parent().hasClass('active')) {
                var newIndex = $('.window-gallery-preview-item a').index($(this));
                $('.window-gallery-preview-item.active').removeClass('active');
                $('.window-gallery-preview-item').eq(newIndex).addClass('active');
                $('.window-gallery-big-inner').slick('slickGoTo', newIndex);
            }
            e.preventDefault();
        });

        $('.window-gallery-big-inner').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: curIndex,
            prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
            dots: false,
            responsive: [
                {
                    breakpoint: 1119,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
         }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('.window-gallery-preview-item.active').removeClass('active');
            $('.window-gallery-preview-item').eq(nextSlide).addClass('active');
       });

        e.preventDefault();
    });

    $('body').on('click', '.video-link', function(e) {
        if ($('.window').length > 0) {
            windowClose();
        }

        var curPadding = $('.wrapper').width();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});
        $('.cookie-window').css({'margin-right': curPadding + 'px'});

        $('body').append('<div class="window"><div class="window-loading"></div></div>')

        var galleryHtml = '<div class="window-video"><div class="window-video-inner"><iframe width="560" height="315" src="' + $(this).attr('href') + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';

        $('.window').append('<div class="window-container window-container-preload"><div class="window-content">' + galleryHtml + '<a href="#" class="window-close"></a></div></div>')
        windowPosition();
        $('.window-container-preload').removeClass('window-container-preload');

        e.preventDefault();
    });

    $('body').on('click', '.back-link a', function(e) {
        window.history.back();
        e.preventDefault();
    });
});

$(window).on('load resize scroll', function(e) {
    if ($('.about-sale-info-tab.active').length > 0) {
        if ($(window).scrollTop() + $(window).height() * 2 / 3 > $('.about-sale-info-tab.active').offset().top) {
            $('.about-sale-info-tab.active .about-sale-info-graf-item').addClass('visible');
        }
    }
});

$(window).on('load resize', function() {
    positionContentMenu();
    positionAboutSaleMenu();
    resizeCatalogue();
    resizeContentMenu();
    positionCatalogueMenu();
    resizeCatalogueDescrImg();

    if ($(window).width() > 1119) {
        if ($('.main-catalogue-inner').hasClass('slick-slider')) {
            $('.main-catalogue-inner').slick('unslick');
        }
    } else {
        if (!$('.main-catalogue-inner').hasClass('slick-slider')) {
            $('.main-catalogue-inner').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.main-prefs-list').hasClass('slick-slider')) {
            $('.main-prefs-list').slick('unslick');
        }
    } else {
        if (!$('.main-prefs-list').hasClass('slick-slider')) {
            $('.main-prefs-list').slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.content-menu-list-ul').hasClass('slick-slider')) {
            $('.content-menu-list-ul').slick('unslick');
        }
    } else {
        if (!$('.content-menu-list-ul').hasClass('slick-slider')) {
            $('.content-menu-list-ul').slick({
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.about-sale-menu-ul').hasClass('slick-slider')) {
            $('.about-sale-menu-ul').slick('unslick');
        }
    } else {
        if (!$('.about-sale-menu-ul').hasClass('slick-slider')) {
            $('.about-sale-menu-ul').slick({
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.content-menu-page-ul').hasClass('slick-slider')) {
            $('.content-menu-page-ul').slick('unslick');
        }
    } else {
        if (!$('.content-menu-page-ul').hasClass('slick-slider')) {
            $('.content-menu-page-ul').slick({
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.produce-list-inner').hasClass('slick-slider')) {
            $('.produce-list-inner').slick('unslick');
        }
    } else {
        if (!$('.produce-list-inner').hasClass('slick-slider')) {
            $('.produce-list-inner').slick({
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                variableWidth: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.produce-prefs-list').hasClass('slick-slider')) {
            $('.produce-prefs-list').slick('unslick');
        }
    } else {
        if (!$('.produce-prefs-list').hasClass('slick-slider')) {
            $('.produce-prefs-list').slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            });
        }
    }

    if ($(window).width() > 1119) {
        if ($('.catalogue-popular .catalogue-list').hasClass('slick-slider')) {
            $('.catalogue-popular .catalogue-list').slick('unslick');
        }
    } else {
        if (!$('.catalogue-popular .catalogue-list').hasClass('slick-slider')) {
            $('.catalogue-popular .catalogue-list').slick({
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11.0526H20.6L13.8 18.2105C13.4 18.6316 13.4 19.2632 13.8 19.6842C14 19.8947 14.3 20 14.5 20C14.7 20 15 19.8947 15.2 19.6842L23.7 10.7368C24.1 10.3158 24.1 9.68421 23.7 9.26316L15.2 0.315789C14.8 -0.105263 14.2 -0.105263 13.8 0.315789C13.4 0.736842 13.4 1.36842 13.8 1.78947L20.6 8.94737H1C0.4 8.94737 0 9.36842 0 10C0 10.6316 0.4 11.0526 1 11.0526Z" /></svg></button>',
                dots: false
            });
        }
    }

});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    if (curForm.find('.form-files').length > 0) {
        curForm.data('filesCode', curForm.find('.form-files').html());
    }

    if (typeof cityList != 'undefined') {
        $('#window-city-input').keydown(function(e) {
            switch(e.keyCode) {
                case 13:
                    return false;
                    break;
                default:
                    break;
            }
        });
        $('#window-city-input').prop('autocomplete', 'off');
        $('#window-city-input').autocomplete({
            minLength: 0,
            source: cityList,
            select: function(event, ui) {
                this.value = ui.item.value;
                $(this).removeClass('error');
                return false;
            }
        }).focus(function() {
            $(this).data('uiAutocomplete').search($(this).val());
        }).autocomplete('instance')._renderItem = function(ul, item) {
            return $('<li>').append('<div><span>' + item.value + '</span>' + item.desc + '</div>').appendTo(ul);
        };

        $('.window-city-tag').click(function() {
            $('#window-city-input').val($(this).html());
            $('#window-city-input').removeClass('error');
        });

        $('.window-city-btn a').click(function(e) {
            var curResult = false;
            var curCity = $('#window-city-input').val();
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].value == curCity) {
                    curResult = true;
                }
            }
            if (curResult) {
                $.ajax({
                    type: 'POST',
                    url: $('.window-city-form').attr('action'),
                    processData: false,
                    contentType: false,
                    dataType: 'html',
                    data: new FormData($('.window-city-form')[0]),
                    cache: false
                });
                $('.header-city-link').html(curCity);
                $('.catalogue-detail-delivery-city span').html(curCity);
                $.cookie('cityconfirm', 1, {expires: 365});
                $('.header-city-window').removeClass('visible');
                windowClose();
            } else {
                $('#window-city-input').addClass('error');
            }
            e.preventDefault();
        });

        $('.window-city-link a').click(function(e) {
            $.cookie('cityconfirm', 1, {expires: 365});
            $('.header-city-window').removeClass('visible');
            windowClose();
            e.preventDefault();
        });
    }

    if (typeof questionnaireList != 'undefined') {
        $('#window-questionnaire-input').keydown(function(e) {
            switch(e.keyCode) {
                case 13:
                    return false;
                    break;
                default:
                    break;
            }
        });
        $('#window-questionnaire-input').prop('autocomplete', 'off');
        $('#window-questionnaire-input').autocomplete({
            minLength: 0,
            source: questionnaireList,
            select: function(event, ui) {
                this.value = ui.item.value;
                $(this).removeClass('error');
                $(this).blur();
                return false;
            }
        }).focus(function() {
            $(this).data('uiAutocomplete').search('');
        }).autocomplete('instance')._renderItem = function(ul, item) {
            return $('<li>').append('<div><span>' + item.value + '</span></div>').appendTo(ul);
        };

        $('.window-city-tag').click(function() {
            $('#window-questionnaire-input').val($(this).html());
            $('#window-questionnaire-input').removeClass('error');
        });

        $('.window-questionnaire-btn a').click(function(e) {
            var curResult = false;
            var curFile = $('#window-questionnaire-input').val();
            var curURL = '';
            for (var i = 0; i < questionnaireList.length; i++) {
                if (questionnaireList[i].value == curFile) {
                    curResult = true;
                    curURL = questionnaireList[i].desc;
                }
            }
            if (curResult) {
                $('.window-questionnaire-btn a').attr('href', curURL);
            } else {
                $('#window-questionnaire-input').addClass('error');
                e.preventDefault();
            }
        });
    }

    curForm.validate({
        ignore: '',
        submitHandler: function(form) {
            if ($(form).hasClass('ajax-form')) {
                var formData = new FormData(form);
                
                if($(form).find('[type=file]').length != 0) {
                    var file = $(form).find('[type=file]')[0].files[0];
                    formData.append('file', file);
                }
                
                else if($(form).find('.order-form-final-info table').length != 0) {
                    var table = $(form).find('.order-form-final-info').html();
                    formData.append('settigns', table);
                }
                windowOpen($(form).attr('action'), formData);
            } else {
                form.submit();
            }
        }
    });
}

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length > 0) {
        windowClose();
    }

    var curPadding = $('.wrapper').width();
    $('html').addClass('window-open');
    curPadding = $('.wrapper').width() - curPadding;
    $('body').css({'margin-right': curPadding + 'px'});
    $('.cookie-window').css({'margin-right': curPadding + 'px'});
    $('body').append('<div class="window"><div class="window-loading"></div></div>')

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        $('.window').append('<div class="window-container window-container-preload"><div class="window-content">' + html + '<a href="#" class="window-close"></a></div></div>')

        windowPosition();
        $('.window-container-preload').removeClass('window-container-preload');

        $('.window form').each(function() {
            initForm($(this));
            if(!!$('.catalogue-detail').length) $('[name=pr_id]').val($('.catalogue-detail-order a').data('id'));
        });
    });
}

function windowPosition() {
    if ($('.window').length > 0) {
        $('.window-container').css({'left': '50%', 'margin-left': -$('.window-container').width() / 2});

        $('.window-container').css({'top': '50%', 'margin-top': -$('.window-container').height() / 2, 'padding-bottom': 0});
        if ($('.window-container').height() > $('.window').height() - 128) {
            $('.window-container').css({'top': '95px', 'margin-top': 0, 'padding-bottom': '33px'});
        }
    }
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.cookie-window').css({'margin-right': 0});
    }
}

/*function reloadCatalogue(linkLoad, dataLoad) {
    $.ajax({
        type: 'POST',
        url: linkLoad,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataLoad,
        cache: false
    }).done(function(html) {
        $('.catalogue-container-inner').html($(html).find('.catalogue-ajax-content').html());
        $('.content-menu-params-count').html($(html).find('.catalogue-ajax-count-sort').html());
        if ($('.catalogue-filter-results').hasClass('visible')) {
            $('.catalogue-filter-results').html($(html).find('.catalogue-ajax-count').html());
            window.clearTimeout(catalogueTimerResults);
            catalogueTimerResults = null;
            catalogueTimerResults = window.setTimeout(function() {
                $('.catalogue-filter-results').removeClass('visible');
            }, 3000);
        }
        resizeCatalogue();
        resizeContentMenu();
    });
}*/

function positionContentMenu() {
    $('.content-menu-list-active').each(function() {
        var curActive = $('.content-menu-list-li.active');
        if (curActive.length > 0) {
            $(this).css({'width': curActive.width(), 'left': curActive.offset().left - $('.content-menu-list').offset().left});
        }
    });
}

function resizeCatalogue() {
    $('.catalogue-container .pager').each(function() {
        $('.catalogue-list').css({'min-height': $('.catalogue-filter').height()})
    });
}

function resizeContentMenu() {
    $('.content-menu-list').each(function() {
        $('.content-menu-list-next').removeClass('visible');
        $('.content-menu-list-prev').removeClass('visible');
        var curMenu = $(this);
        curMenu.css({'max-width': $('.content-menu-inner').width() - $('.content-menu-params').width() - 34});
        if (curMenu.width() < curMenu.find('.content-menu-list-ul').width()) {
            $('.content-menu-list-next').addClass('visible');
        }
    });
}

function positionCatalogueMenu() {
    $('.catalogue-detail-menu-active').each(function() {
        var curActive = $('.catalogue-detail-menu li.active');
        if (curActive.length > 0) {
            $(this).css({'width': curActive.width(), 'left': curActive.offset().left - $('.catalogue-detail-menu').offset().left});
        }
    });
}

function positionAboutSaleMenu() {
    $('.about-sale-menu-active').each(function() {
        var curActive = $('.about-sale-menu-li.active');
        if (curActive.length > 0) {
            $(this).css({'width': curActive.width(), 'left': curActive.offset().left - $('.about-sale-menu').offset().left});
        }
    });
}

function resizeCatalogueDescrImg() {
    $('.catalogue-descr-img').each(function() {
        var curBlock = $(this);
        var curDiff = curBlock.find('img').width() / curBlock.find('img').data('width');
        curBlock.find('.catalogue-descr-img-hint').each(function() {
            var curHint = $(this);
            curHint.css({'visibility': 'visible', 'left': curHint.data('left') * curDiff, 'top': curHint.data('top') * curDiff});
            var curLine = curHint.find('.catalogue-descr-img-hint-line');
            var widthLine = Math.sqrt(curLine.data('width') * curLine.data('width') + curLine.data('height') * curLine.data('height'));
            var angleLine = Math.asin(curLine.data('height') / widthLine) / Math.PI * 180;
            if (curLine.hasClass('inverse')) {
                angleLine = '-' + angleLine;
            }
            curLine.css({'width': widthLine, 'transform': 'rotate(' + angleLine + 'deg)'});
        });
    });
}