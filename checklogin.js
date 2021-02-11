var dispname

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('page').style.display = "block"
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.photoURL)
        dispname = user.displayName
    } else {
      // No user is signed in.
      document.getElementById('page').style.display = "none"
      location.replace('authPage.html')
    }
  });


function showOnDashboard(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('page').style.display = "block"
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.photoURL)
        dispname = user.displayName
        // for dashboard page
        var dashtag = document.createElement('h1')
        var dash_text = document.createTextNode("Welcome, "+dispname)
        var dashatt = document.createAttribute('class')
        dashatt.value = 'title-font sm:text-4xl text-3xl mb-4 font-medium text-white md:text-center pt-10'
        dashtag.setAttributeNode(dashatt)
        dashtag.appendChild(dash_text)
        var element = document.getElementById('dash_accNameHolder')
        element.appendChild(dashtag)
    } else {
      // No user is signed in.
      document.getElementById('page').style.display = "none"
      location.replace('authPage.html')
    }
  });
}
  
function showOnAcc() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('page').style.display = "block"
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.photoURL)
        dispname = user.displayName        
        // for account page
        var tag = document.createElement('h1')
        var text = document.createTextNode(dispname)
        var att = document.createAttribute('class')
        att.value = 'sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'
        tag.setAttributeNode(att)
        tag.appendChild(text)
        var element = document.getElementById('accNameHolder')
        element.appendChild(tag)
    } else {
      // No user is signed in.
      document.getElementById('page').style.display = "none"
      location.replace('authPage.html')
    }
  });
}



       