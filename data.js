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
        att_div3.value = 'md:flex-grow'
        div3.setAttributeNode(att_div3)

        // paragraph
        var p = document.createElement('p')
        var att_p = document.createAttribute('class')
        att_p.value = 'leading-relaxed'
        p.setAttributeNode(att_p)
        var msgNode = document.createTextNode("Message : " + msg)
        p.appendChild(msgNode)
        
        // set the spans into the divs
        div2.appendChild(span1)
        div2.appendChild(span2)
        div2.appendChild(span3)
        div3.appendChild(p)
        div1.appendChild(div2)
        div1.appendChild(div3)
        element = document.getElementById('holder')
        element.appendChild(div1)
    });
});