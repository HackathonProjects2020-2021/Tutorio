class AuthService {
    constructor() {
        this.auth = firebase.auth;
    }
    async register() {
        var userEmail = document.getElementById("email").value;
        var userPass = document.getElementById("password").value;
        return await firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert("Error : " + errorMessage);
            // ...
          });
        /*this.login();
        console.log(firebase.auth().currentUser);
        var user = firebase.auth().currentUser;
        var userService = new UserSerivce();
        userService.updateUser(user.uid, 1000);
        return new User(user.uid, 1000);*/
    }
    login() {
        var userEmail = document.getElementById("email").value;
        var userPass = document.getElementById("password").value;
    
        return await firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
            window.alert("Error : " + errorMessage);
            // ...
        });
    }
    logout() {
        firebase.auth().signOut();
    }
}