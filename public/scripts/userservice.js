class UserService {
    constructor() {
        this.db = firebase.firestore();
        this.db.settings({ timestampsInSnapshots: true });
    }

    async updateUser(uid, points, preferences) {
        await this.db.collection('users').doc(uid).set({
            points: points,
            preferences: preferences
        });
    }

    async getPoints(uid) {
        return await this.db.collection('user').doc(uid).data().points;
    }

    async getPreferences(uid) {
        return await this.db.collection('user').doc(uid).data().preferences;
    }

    async deleteUser(uid) {
        await this.db.collection('users').doc(uid).ref.delete();
    }
}