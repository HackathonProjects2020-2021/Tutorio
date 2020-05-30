class AuthService {
    constructor() {
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
        this.auth =
        firebase.auth();
    }
    register() {
        var userEmail = document.getElementById("email").value;
        var userPass = document.getElementById("password").value;
        this.auth.createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);
            // ...
          });
        
    }
    login() {
        var userEmail = document.getElementById("email").value;
        var userPass = document.getElementById("password").value;
    
        this.auth.signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
    
            window.alert("Error : " + errorMessage);
    
            // ...
        });
    }
    logout() {
        this.auth.signOut();
    }
}