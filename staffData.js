function getData() {
  for(var i = 1; i<=8; i++){
    db.collection('users').where("place", "==", i).get().then((data)=>{
      data.forEach((doc)=>{
        if(doc.data().name != undefined || doc.data().bio != undefined){
          
          // div 1 - outermost div
          var div1 = document.createElement('div')
          var att_div1 = document.createAttribute('class')
          att_div1.value = "p-4 lg:w-1/2"
          div1.setAttributeNode(att_div1)

          // div 2  - outer second layer
          var div2 = document.createElement('div')
          var att_div2 = document.createAttribute('class')
          att_div2.value = "h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          div2.setAttributeNode(att_div2)

          // img - profile img
          var img = document.createElement('img')
          var att_img_class = document.createAttribute('class')
          att_img_class.value = "flex-shrink-0 rounded-full w-30 h-30 object-cover object-center sm:mb-0 mb-4"
          img.setAttributeNode(att_img_class)
          var att_img_src = document.createAttribute('src')
          // storage.ref('users/'+doc.id+'/profile.png').getDownloadURL().then((imgUrl)=>{
          //   url = String(imgUrl)
          //   att_img_src.value = url
          //   console.log(imgUrl)
          // })    
          att_img_src.value = doc.data().imgUrl  
          img.width=120
          img.height = 120 
          img.setAttributeNode(att_img_src)
          var att_img_alt = document.createAttribute('alt')
          att_img_alt.value = "team"
          img.setAttributeNode(att_img_alt)

          // div 3 - details holder
          var div3 = document.createElement('div')
          var att_div3 = document.createAttribute('class')
          att_div3.value = "flex-grow sm:pl-8"
          div3.setAttributeNode(att_div3)

          // h2 - name tag
          var h2 = document.createElement('h2')
          var att_h2 = document.createAttribute('class')
          att_h2.value = "title-font font-medium text-lg text-gray-900"
          h2.setAttributeNode(att_h2)

          // h3 - role tag
          var h3 = document.createElement('h3')
          var att_h3 = document.createAttribute('class')
          att_h3.value = "text-gray-500 mb-3"
          h3.setAttributeNode(att_h3)

          // p - bio
          var p = document.createElement('p')
          var att_p = document.createAttribute('class')
          att_p.value = "mb-4"
          p.setAttributeNode(att_p)

          // span - social accounts
          var span = document.createElement('span')
          var att_span = document.createAttribute('class')
          att_span.value = "inline-flex"
          span.setAttributeNode(att_span)

          // svg icons to be made, in this tags spawner - remaining 

          // get the data and store in variables
          var name = doc.data().name
          var bio = doc.data().bio
          var role = doc.data().role


          // create text nodes
          var nameNode = document.createTextNode(name)
          var bioNode = document.createTextNode(bio)
          var roleNode = document.createTextNode(role)

          // add the text nodes to the elememts
          h2.appendChild(nameNode)
          h3.appendChild(roleNode)
          p.appendChild(bioNode)

          // add the text and img elements to divs
          div3.appendChild(h2)
          div3.appendChild(h3)
          div3.appendChild(p)
          div2.appendChild(img)
          div2.appendChild(div3)
          div1.appendChild(div2)

          // add the full setup to the container div
          var holder = document.getElementById('holder')
          holder.appendChild(div1)
        }
      })
    })
  }
}
