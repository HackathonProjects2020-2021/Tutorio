var selected = []

$(document ).ready(function() {
    $(".card").click(function() {
        var id = $(this).attr('id');
        $('#'+id).toggleClass('selected')
    });
    $('.button').click(function(){
        $('.selected').each(function(i, obj) {
            console.log(obj)
            selected.push(obj.id)
        });
    });
});

