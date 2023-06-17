
async function myFunction(event) {

    event.preventDefault();
    alert("Add the item to Todo Remain List");
            const todoNam = event.target.todoName.value;
            const description= event.target.todoDes.value;
            const is_done = false;

            const obj ={
               todoNam,
               description,
               is_done
            }
            showListOnScreen(obj);
            
            try {
            const res = await axios.post("https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/todoDetails",obj);
             console.log(response)
            }
            catch(error)
            {console.log(error)
            }
}

 function showListOnScreen(obj) {

    const ulTag = document.getElementById('false');
    const ulTag2 = document.getElementById('true');

    const deleteBtn = document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.onclick = (async () => {
     
      try{
       const res = await axios.delete(`https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/todoDetails/${obj._id}`);
          var li = document.getElementById(`${obj._id}`);
          ulTag.removeChild(li)
       }
       catch(err) {
          console.log(err);
    }
   })
   

    var editBtn = document.createElement('button');
    editBtn.className='btn btn-basic btn-sm edit';
    editBtn.appendChild(document.createTextNode('✓'));
    editBtn.onclick=(async () =>{        
        const id = `${obj._id}`;
        var li = document.getElementById(`${obj._id}`);
        ulTag.removeChild(li)
       
             todoNam = obj.todoNam;
             description = obj.description;
             is_done = true;

             obj = {
                todoNam,
                description,
                is_done
             }
            try {
       const response =  await axios.put(`https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/todoDetails/${id}`,obj);
        console.log(response)
        li.removeChild(deleteBtn);
        li.removeChild(editBtn);
        ulTag2.appendChild(li);
            }
        catch(error){
         console.log(err)
        }
      })
       
                                  
   
    
    if(obj.is_done == false){
    const newLi = document.createElement('li');
    newLi.className='todoList';
    newLi.id=`${obj._id}`;

    newLi.textContent=obj.todoNam+"-"+obj.description;
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);
    ulTag.appendChild(newLi);
    }

    else if(obj.is_done == true){
        const newLi = document.createElement('li');
        newLi.className='todoList';
        newLi.id=`${obj._id}`;
    
        newLi.textContent=obj.todoNam+"-"+obj.description;
        ulTag2.appendChild(newLi);
        }
}

window.onload = (async () => {
   try { 
   const response = await axios.get("https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/todoDetails")
     console.log(response) 
    for(var i=0; i<response.data.length; i++)
    {
       showListOnScreen(response.data[i])
    }
}
    
   catch(error) 
   {
      console.log(error)
   }
})
