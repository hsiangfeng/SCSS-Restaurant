$(document).ready(function () {
    //登入註冊按鈕切換
    $('#register-btn').on('click', function (event) {
        event.preventDefault();
        $('.register').show();
        $('.login-form').hide();
    });
    $('#login-btn').on('click', function (event) {
        event.preventDefault();
        $('.login-form').slideToggle();
        $('.register').slideToggle();
    });
    //選單
    $('.m-menu').on('click', function (e) {
        e.preventDefault();
        if (document.body.clientWidth == '768' || document.body.clientWidth == '576' || document.body.clientWidth == '375') {
            $('.topmain-content .main').slideToggle();
            $('body').toggleClass('open');
            $('.fa-bars').slideToggle(500);
            $('.fa-times-circle').slideToggle();
        }
    });
    //前往區塊收闔選單
    $('.main a').on('click', function () {
        if (document.body.clientWidth == '768' || document.body.clientWidth == '576' || document.body.clientWidth == '375') {
            $('.topmain-content .main').slideToggle();
            $('body').toggleClass('open');
            $('.fa-bars').slideToggle(500);
            $('.fa-times-circle').slideToggle();
        }
    });
    //愛心特效
    $('.hamburger-heart').on('click', function (e) {
        e.preventDefault();
        $('.hamburger-heart i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
    });
    $('.brothers-heart').on('click', function (e) {
        e.preventDefault();
        $('.brothers-heart i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
    });
    $('.handsome-heart').on('click', function (e) {
        e.preventDefault();
        $('.handsome-heart i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
    });
    $('.dragon-heart').on('click', function (e) {
        e.preventDefault();
        $('.dragon-heart i').toggleClass('far fa-heart').toggleClass('fas fa-heart');
    });
    //滑動效果
    $(".topmain-content a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                document.location.hash = hash;
            });
        }
    });
    //返回上方
    $('#gotop').gotop({
        customHtml: '<i class="fas fa-angle-up"></i>',
        bottom: '2em',
        right: '2em'
    });
});