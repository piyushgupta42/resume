    $(document).on("scroll", function(){
      if($(document).scrollTop() > 86)
      {
        $("#navbar-top").addClass("shrink");
      }
      else
      {
        $("#navbar-top").removeClass("shrink");
      }

    $('.navbar-nav li').click(function(){
      $('.nav-item').removeClass('active');
      $(this).addClass("active"); 
    })

$(window).ready(function() {
    var wi = $(window).width(); 
    // alert (wi);
 
        if (wi <= 480){
            $('#navbar-top').addClass('navbar-light bg-light');
            $('#navbar-top').removeClass('fixed-top');
            }
        else if (wi <= 767){
            // $("p.testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.');
             $('#navbar-top').addClass('navbar-light bg-light');
            $('#navbar-top').removeClass('fixed-top');
            }
        // else if (wi <= 980){
        //     $("p.testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
        //     }
        // else if (wi <= 1200){
        //     $("p.testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
        //     }
        else {
            $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
            }
    }); 

}); 