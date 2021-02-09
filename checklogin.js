firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('page').style.display = "block"
    } else {
      // No user is signed in.
      document.getElementById('page').style.display = "none"
      location.replace('authPage.html')
    }
  });