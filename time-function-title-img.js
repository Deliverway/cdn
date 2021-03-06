   var   day = new Date();
   var   hour = day.getHours();
 $(window).on('load', function() {
    if (hour >= 23 && hour < 24) {
       $('.t177__title').text('Все еще не спите?');
       $('.t177__text').text('Служба поддержки закрыты на сегодня. Вы все еще можете проверить рестораны неподалеку и оформить заказ, который заберете сами, или запланировать доставку на более поздний срок!');
       $('.t177__img').attr("src", "https://static.tildacdn.com/tild6339-3162-4238-b461-393434363736/night-004f31b0686378.png");
       $('[data-record-type="195"]').css('display' , 'block');
    } else if (hour >= 0 && hour < 6) {
       $('.t177__title').text('Привет всем!');
       $('.t177__text').text('Наша служба поддержки клиентов откроется в 10:00. Если вы еще не получили ответ на свое сообщение, мы свяжемся с вами первым делом утром!');
       $('.t177__img').attr("src", "https://static.tildacdn.com/tild6264-3465-4539-a135-306564333830/closed-69089008bc91c.png");
       $('[data-record-type="195"]').css('display' , 'block');
    } else if (hour >= 6 && hour < 11) {
       $('.t177__title').text('Доброе утро!');
       $('.t177__text').text('Наша доставка еще не открылась. Вы можете проверить рестораны или кафе неподалеку, чтобы забрать заказ самостоятельно или предварительно заказать на более поздний срок.');
       $('.t177__img').attr("src", "https://static.tildacdn.com/tild3065-3138-4361-b665-323338373631/opening-24cfeaae146f.png");
       $('[data-record-type="195"]').css('display' , 'block');
    } else if (hour >= 14 && hour < 20) {
       $('[data-record-type="195"]').hide();
    } else if (hour >= 22 && hour < 23) {
       $('.t177__title').text('Мы закрываемся');
       $('.t177__text').text('Мы начинаем принимать последние заказы, успейте заказать свой вовремя! Также вы можете сделать предзаказ или забрать свой заказ самостоятельно.');
       $('.t177__img').attr("src", "https://static.tildacdn.com/tild6463-6330-4635-b431-326439663932/closing-c369704d77d5.png");
       $('[data-record-type="195"]').css('display' , 'block');
    };
 });  
