class Question {
    constructor(uid, qid, question, answers, popularity) {
        this.uid = uid;
        this.qid = qid;
        this.question = question;
        this.answers = answers;
        this.popularity = popularity;
    }
    addAnswer(answer) {
        this.answers.add(answer);
    }
    setPopularity(popularity) {
        this.popularity = popularity;
    }
}