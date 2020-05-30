class UserSerivce {
    constructor(subject) {
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

    async updateUser(uid, points) {
        await this.db.collection('users').doc(uid).set({
            points: points,
        });
    }

    async deleteUser(uid) {
        await this.db.collection('users').doc(uid).ref.delete();
    }
}