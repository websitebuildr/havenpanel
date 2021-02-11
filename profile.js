function updateProfile() {
    var user = firebase.auth().currentUser
    var displayname = document.getElementById('displayname').value
    user.updateProfile({
        displayName : displayname
    })
    .then(()=>{
        alert('Account updated successfully!')
        location.replace('dashboard.html')
    })
    .catch((error)=>{
        alert("We couldn't update your profile.....\nErrord : "+ error.message)
    })
}