$(document).ready(function(){
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        if($(".navbar-toggle").is(":visible"))
        {
            $(".navbar-toggle").click();
        }
    });
    $(window).scroll(function(){
        var scrollTop = $('body').scrollTop();
        var anchors = $('.jumbotron');

        for (var i = 0; i < anchors.length; i++){
            if (scrollTop > $(anchors[i]).offset().top - 50 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 30) {
                if(!$('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').parent().hasClass('active'))
                {
                    $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').parent().addClass('active');
                }
            } else {
                if($('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').parent().hasClass('active'))
                {
                    $('nav ul li a[href="#' + $(anchors[i]).attr('id') + '"]').parent().removeClass('active');
                }
            }
        }
    });
});