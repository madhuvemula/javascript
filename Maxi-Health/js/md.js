// $("a").bind("click", function(e) {
//     e.preventDefault();
//     var id = $(this).data("section");
//       $("#content section:visible").fadeOut();
//       $(id).fadeIn();
// });
$("#content-warp").slideToggle();
$('a').on("click", function(e) {
    
    var sectionID = '#' + $(this).data("section");
    $("#content section:visible").slideToggle();
    $(sectionID).show();
});