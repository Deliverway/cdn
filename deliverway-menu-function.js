$( document ).ready(function() {
    var CounterbtnID = ".counter-btn"; // Counter
    var AmountID = ".t706__cartwin-prodamount"; // Amount
    $(AmountID).appendTo('.t393__wrapper a');
    $(CounterbtnID).appendTo('.t393__wrapper a');
    function Counter(){
        var CounterID = $('.t706__carticon-counter').html();
        $(CounterbtnID).text(CounterID);
        };
    Counter();
        var timeinterval = setInterval(Counter,200);
    //Скрываем поле стоимости доставки
    $('.t-input-group_dl').css('display' , 'none');
if(document.documentElement.clientWidth < 1200) {
    $('.t706__cartwin').hide();
    $( ".t393__wrapper" ).click(function(e) {e.preventDefault();
        $('.t706__carticon-wrapper').click();
        $('.t706__cartwin').fadeIn(200);
    });
    $( ".t706__cartwin-close-wrapper" ).click(function(e) {e.preventDefault();
        $('.t706__cartwin').fadeOut(200);    
    });
}
if(document.documentElement.clientWidth > 1200) {
    var CartID = ".t706__cartwin-content"; // Cart
    var ButtonID = ".t393__wrapper"; // Btn
    var AmountID = ".t706__cartwin-prodamount"; // Amount
    var ChekoutID = ".t706__orderform"; // Chekout
    $(CartID).appendTo('.basket');
    $(ButtonID).appendTo('.basket');
    $(AmountID).appendTo('.t393__wrapper a');
    $(ChekoutID).appendTo('.t390__wrapper');
    //Делаем адрес доставки в одну строку
    $('.t-input-group:eq(10)').css('width' , 'calc(25% - 20px)').css('margin-bottom' , '0px');
    $('.t-input-group:eq(11)').css('width' , 'calc(25% - 20px)').css('margin-bottom' , '0px').css('margin-top' , '-40px').css('margin-left' , '25%');
    $('.t-input-group:eq(12)').css('width' , 'calc(25% - 20px)').css('margin-bottom' , '0px').css('margin-top' , '-40px').css('margin-left' , '50%');
    $('.t-input-group:eq(13)').css('width' , '25%)').css('margin-bottom' , '0px').css('margin-top' , '-40px').css('margin-left' , '75%');
    $('.t-input-group:eq(14)').css('padding-top' , '60px');
    //Стилизуем контейнер комментария
    $(".mewtwo-flights-dates-depart").attr('style', 'width: 100% !important');
    //Показать блок оформления заказа
    $( ".t393__wrapper a" ).click(function(e) {e.preventDefault();
    setTimeout(function () {
    $('.t-body').css('overflow' , 'hidden');
    $('#rec177358970').css('display' , 'none');
    $('.t393__wrapper').css('margin-top' , '70px');
    $('.t706__cartwin-content').css('height' , 'calc(100vh - 70px)');
    $('.t-popup').fadeIn(200);
    $('.t-popup').addClass("t-popup_show");}, 500);
    });
    //Скрываем блок оформления заказа
    $( ".t-popup__close" ).click(function(e) {e.preventDefault();
    setTimeout(function () {
    $('.t-body').css('overflow' , 'auto');
    $('#rec177358970').css('display' , 'block');
    $('.t393__wrapper').css('margin-top' , '0px');
    $('.t706__cartwin-content').css('height' , 'calc(100vh - 140px)');
    $('.t-popup').fadeOut(200);}, 200);
    });
    // Скрыаем скролл бар при вызове формы feedback
    $( ".t142__submit" ).click(function(e) {e.preventDefault();
    setTimeout(function () {
    $('#rec177358970').css('display' , 'none');
    $('.t-body').css('overflow' , 'hidden');}, 200);
    });
}
    //Показываем блок "Отзывы" и скрываем остальные
    $('div[data-record-type="558"] , div[data-record-type="191"]').hide();
    jQuery.fn.extend({
    toggleText: function (a, b){
        var isClicked = false;
        var that = this;
        this.click(function (){
            if (isClicked) { that.text(a); isClicked = false; }
            else { that.text(b); isClicked = true; }
    });return this;}});
    $('.t153__descr a').toggleText("Отзывы →", "← Вернуться назад");
    $( ".t153__descr a" ).click(function(e) {e.preventDefault();
    setTimeout(function () {
    $("body,html").animate({scrollTop:200}, 300); //Делаем скролл наверх
    $('div[data-record-type="106"] , div[data-record-type="778"] , div[data-record-type="248"] , div[data-record-type="786"] , div[data-record-type="128"]').slideToggle(0);
    $('div[data-record-type="558"] , div[data-record-type="191"]').slideToggle(0);}, 200);
    });
    //Уменьшаем отсупы у каталога если есть акция
    if($('div[data-record-type="778"]').length>0) {
    $('div[data-record-type="786"]').css('padding-top' , '20px');    
    }
});
