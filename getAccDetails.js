// var user = firebase.auth().currentUser;
// var displayname, email, profile_photo;

// if(user != null){
//     displayname = user.displayName;
//     email = user.email;
//     profile_photo = user.photoURL; 
// }
// console.log("Name : "+displayname+"\nEmail : "+email+"\nPhotoURL : "+profile_photo);

var user = firebase.auth().currentUser;
var dispname, email, photoUrl, uid, emailVerified;
async function getData() {
  if (user != null) {
    dispname = await user.displayName;
    email = await user.email;
    photoUrl = await user.photoURL;
    emailVerified = await user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }
}
getData()
var tag = document.createElement('h1')
var text = document.createTextNode(dispname)
var att = document.createAttribute('class')
att.value = 'sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'
tag.setAttributeNode(att)
tag.appendChild(text)
var element = document.getElementById('accNameHolder')
element.appendChild(tag)