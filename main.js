// copy IP function
function copyText() {
    var copyText = document.getElementById("server-ip");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

// discord link
function sendToDiscord() {
    location.replace('https://havenlands.tk/discord')
}

// upload data to cloud
function storeData() {
    var id = String(document.getElementById('id').value)
    db.collection('Feedbacks').add({
        id:id,
        name:document.getElementById('name').value,
        ingamename:document.getElementById('in-game-name').value,
        msg:document.getElementById('message').value
    })
    .then((doc) => {
        console.log("Document written with ID: ", doc.id);
        // alert("Message has been sent to our staff with your Discord ID : ", doc.id)
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

}