// $("a").bind("click", function(e) {
//     e.preventDefault();
//     var id = $(this).data("section");
//       $("#content section:visible").fadeOut();
//       $(id).fadeIn();
// });
$("#contnet section").fadeIn();
$("a").on("click", function(e) {
    e.preventDefault();
    var sectionID = '#'+ $(this).data("section");
    $("#content section:visible").fadeOut();
    $(sectionID).fadeIn();
});