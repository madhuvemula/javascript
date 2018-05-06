// $("a").bind("click", function(e) {
//     e.preventDefault();
//     var id = $(this).data("section");
//       $("#content section:visible").fadeOut();
//       $(id).fadeIn();
// });
$("#content-wrap").slideToggle();
$("a").on("click", function(e) {
    e.preventDefault();
    var sectionID = '#'+ $(this).data("section");
    $("#content section:visible").slideToggle();
    $(sectionID).show();
});

