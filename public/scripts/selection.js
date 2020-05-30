var selected = []

var id;
$( document ).ready(function() {
    $(".card").click(function() {
        id = $(this).attr('id');
        $('#'+id).toggleClass('selected')
    });

    
});
function getSelected(){
    $('.selected').each(function(i, obj) {
        console.log(obj)
        selected.push(obj.id)
    });
}
