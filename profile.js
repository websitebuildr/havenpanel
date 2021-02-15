function updateProfile() {
    var user = firebase.auth().currentUser
    var email = user.email
    var displayname = document.getElementById('displayname').value
    var bio = document.getElementById('bio').value
    // updateProfileonDb(email)
    user.updateProfile({
        displayName : displayname,
    })
    .then(()=>{
        db.collection('users').doc(email).update({
            name:displayname,
            bio:bio
        })
        .then(()=>{
            alert('Account updated successfully!')
            location.replace('dashboard.html')
        })
        .catch((error)=>{
            alert("We couldn't update your profile.....\nErrord : "+ error.message)
        })
        
    })
    .catch((error)=>{
        alert("We couldn't update your profile.....\nErrord : "+ error.message)
    })
}
