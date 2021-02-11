function login() {
  var email = document.getElementById('email').value
  var pass = document.getElementById('pass').value
  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    alert('Logged in')
    location.replace('dashboard.html')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("We couldn't sign you in.......\n"+errorMessage)
  });
}

function logout() {
  firebase.auth().signOut().then(() => {
    alert('Signed out successfully');
    location.replace('authPage.html')
  }).catch((error) => {
    // An error happened.
    alert("An error happened : \nError : " + error.message)
  });
}