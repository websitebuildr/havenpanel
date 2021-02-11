function changePass() {
    var user = firebase.auth().currentUser;
    var newPass = document.getElementById('newPass').value
    var newPass_confirm = document.getElementById('newPass_confirm').value
    if(newPass === newPass_confirm){
        user.updatePassword(newPass)
        .then(()=>{
            alert("Your password has been changed successfully!")
            location.replace('dashboard.html')
        })
        .catch((error)=>{
            alert("Something went wrong.......\nThe password couldn't be changed.")
            console.log("Error code : "+error.code+"\nError ; "+error.message)
            // location.replace('dashboard.html')
        })
    }else {
        alert("The passwords didn't match, please recheck and try again.")
    }
}