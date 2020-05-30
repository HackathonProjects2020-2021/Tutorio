class UserSerivce {
    constructor() {
        this.db = firebase.firestore();
        this.db.settings({ timestampsInSnapshots: true });
    }

    async updateUser(uid, points) {
        await this.db.collection('users').doc(uid).set({
            points: points,
        });
    }

    async getPoints(uid) {
        return await this.db.collection('user').doc(uid).data().points;
    }

    async deleteUser(uid) {
        await this.db.collection('users').doc(uid).ref.delete();
    }
}