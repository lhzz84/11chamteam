
!function(a){
    var o=function(){
      a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};
    o(),a(window).scroll(o),a(".portfolio-modal").on("show.bs.modal",
    function(o){a(".navbar").addClass("d-none")}),a(".portfolio-modal").on("hidden.bs.modal",
    function(o){a(".navbar").removeClass("d-none")})}(jQuery);

/* gallery hover */
    $(document).ready(function () {
      $(".gallery-img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
        $("#myModal").modal();
      }); 
    });

    


    