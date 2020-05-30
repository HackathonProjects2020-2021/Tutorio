
var id;
$( document ).ready(function() {
    $(".card").click(function() {
        id = $(this).attr('id');
        $('#'+id).toggleClass('selected')
    });
});