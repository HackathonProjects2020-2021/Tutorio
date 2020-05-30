
$( document ).ready(function() {
    $(".card").click(function() {
        var id = $(this).attr('id');
        $('#'+id).toggleClass('selected')
    });
});