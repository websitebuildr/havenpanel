db.collection("Feedbacks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var name = doc.data().name
        var id = doc.data().id
        var ingamename = doc.data().ingamename
        var msg = doc.data().msg

        // div 1
        var div1 = document.createElement('div')
        var att_div1 = document.createAttribute('class')
        att_div1.value = 'py-8 flex flex-wrap md:flex-nowrap'
        div1.setAttributeNode(att_div1)

        // div 2
        var div2 = document.createElement('div')
        var att_div2 = document.createAttribute('class')
        att_div2.value = 'md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'
        div2.setAttributeNode(att_div2)

        // span 1
        var span1 = document.createElement('span')
        var att_span1 = document.createAttribute('class')
        att_span1.value = 'font-semibold title-font text-gray-700'
        span1.setAttributeNode(att_span1)
        var nameNode = document.createTextNode(name)
        span1.appendChild(nameNode)

        // span 2
        var span2 = document.createElement('span')
        var att_span2 = document.createAttribute('class')
        att_span2.value ='text-sm text-gray-500'
        span2.setAttributeNode(att_span2)
        var idNode = document.createTextNode("#"+id)
        span2.appendChild(idNode)

        // span 3
        var span3 = document.createElement('span')
        var att_span3 = document.createAttribute('class')
        att_span3.value ='mt-1 text-gray-500 text-sm'
        span3.setAttributeNode(att_span3)
        var ingamenameNode = document.createTextNode("In game : " + ingamename)
        span3.appendChild(ingamenameNode)   
        
        // div 3
        var div3 = document.createElement('div')
        var att_div3 = document.createAttribute('class')
        att_div3.value = 'md:flex-grow inline-flex flex-stretch'
        div3.setAttributeNode(att_div3)

        // div 4
        var div4 = document.createElement('div')
        var att_div4 = document.createAttribute('class')
        att_div4.value = 'md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'
        div4.setAttributeNode(att_div4)

        // paragraph
        var p = document.createElement('p')
        var att_p = document.createAttribute('class')
        att_p.value = 'leading-relaxed'
        p.setAttributeNode(att_p)
        p.className = "pr-96"
        var msgNode = document.createTextNode("Message : " + msg)
        p.appendChild(msgNode)

        // delete button
        var button = document.createElement('button')
        button.id = doc.id
        button.className = "flex-end items-center bg-red-500 text-white border-b-2 py-0 px-3 h-12 focus:outline-none hover:bg-white hover:border-red hover:text-gray-500 transition duration:200 shadow rounded-lg text-base mt-4 md:mt-0"
        button.addEventListener('click', event =>{
            event.stopPropagation()
            var docid = doc.id
            db.collection('Feedbacks').doc(docid).delete()
            .then(()=>{
                var user = firebase.auth().currentUser
                var log = "Deleted feedback of ["+name+"] whose ingamename : ["+ingamename+"] and discord id : ["+id+"] and the feedback was : ["+msg+"]"
                db.collection('audit_logs').add({
                    email:user.email,
                    action : log
                })
                alert("Successfully deleted!")
                location.reload()
            })
            .catch((error)=>{
                alert("Couldn't delete it.....\n"+error.messsage)
            })
        })
        var button_text = document.createTextNode("Delete")
        button.appendChild(button_text)
        
        // set the spans into the divs
        div2.appendChild(span1)
        div2.appendChild(span2)
        div2.appendChild(span3)
        div3.appendChild(p)
        div4.appendChild(button)
        div1.appendChild(div2)
        div1.appendChild(div3)
        div1.appendChild(div4)
        element = document.getElementById('holder')
        element.appendChild(div1)
    });
});
