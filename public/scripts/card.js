function genMyQuestions(question, uid) {
    var str = question.question 
    var count = question.answers.length
    var qUID = question.uid

    if(uid == qUID)
        $( ".q" ).append( "<div class='card'><h3 class='question'>"+ str +"</h1><h4 class='answers'>"+ count +"</h1></div>");
    else 
        $( ".a" ).append( "<div class='card'><h3 class='question'>"+ str +"</h1><h4 class='point-rewards'>100 points available</h1></div>");
}

function genAnsQuestions(question) {
    var str = question.question 
    $( ".a" ).append( "<div class='card'><h3 class='question'>"+ str +"</h1><h4 class='point-rewards'>100 points available</h1></div>");
}