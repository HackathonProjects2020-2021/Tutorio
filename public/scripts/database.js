class DatabaseService {
    constructor(subject) {
        this.subject = subject;
        var firebaseConfig = {
            apiKey: "AIzaSyAQRMa3o1JDpxJrA4xAk-voxHR1jIDZjtQ",
            authDomain: "teenhackhtx-application.firebaseapp.com",
            databaseURL: "https://teenhackhtx-application.firebaseio.com",
            projectId: "teenhackhtx-application",
            storageBucket: "teenhackhtx-application.appspot.com",
            messagingSenderId: "535069797709",
            appId: "1:535069797709:web:cf4361c71ff094b8c85b04",
            measurementId: "G-2VGX0V4SR2"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        this.db = firebase.firestore();
        this.db.settings({ timestampsInSnapshots: true });
    }

    async addQuestion(uid, questionText) {
        var question = {
            uid: uid,
            question: questionText,
            answers: [],
            popularity: 0
        };
        await this.db.collection(this.subject).doc().set(question);
    }

    async updateQuestion(qid, uid, question, answers, popularity) {
        await this.db.collection(this.subject).doc(qid).set({
            uid: uid,
            question: question,
            answers: answers,
            popularity: popularity
        });
    }
    async deleteQuestion(qid) {
        await this.db.collection(subject).doc(qid).ref.delete();
    }

    toList() {
        const snapshot = await firebase.firestore().collection(subject).get()
        return snapshot.docs.map(this._questionFromSnapshot);
    }
    _questionFromSnapshot(snapshot) {
        var data = snapshot.data();
        var id = snapshot.id;
        return Question(data.uid, id, data.question, data.answers, data.popularity);
    }
}