
function myFunction(event) {

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

            axios.post("https://crudcrud.com/api/7ea7f68aee7f4cba892a4e5593b6fe62/todoDetails",obj) // api link to be added
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
}

function showListOnScreen(obj) {

    const ulTag = document.getElementById('false');
    const ulTag2 = document.getElementById('true');

    const deleteBtn = document.createElement('button')
    deleteBtn.className='btn btn-danger btn-sm delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.onclick=()=>{
       axios.delete(`https://crudcrud.com/api/7ea7f68aee7f4cba892a4e5593b6fe62/todoDetails/${obj._id}`) //api tobe added
       .then((response) => 
       {
          var li = document.getElementById(`${obj._id}`);
          ulTag.removeChild(li)
       })
       .catch(err => console.log(err));
    }

    var editBtn = document.createElement('button');
    editBtn.className='btn btn-basic btn-sm edit';
    editBtn.appendChild(document.createTextNode('✓'));
    editBtn.onclick=()=>{        
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
            
        axios.put(`https://crudcrud.com/api/7ea7f68aee7f4cba892a4e5593b6fe62/todoDetails/${id}`,obj) // api link to be added
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
       
        li.removeChild(deleteBtn);
        li.removeChild(editBtn);
        ulTag2.appendChild(li);                           
    }
    
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

window.onload = () => {
    axios.get("https://crudcrud.com/api/7ea7f68aee7f4cba892a4e5593b6fe62/todoDetails")
    .then((response) => { console.log(response) 
    for(var i=0; i<response.data.length; i++)
    {
       showListOnScreen(response.data[i])
    }
})
    
    .catch(err => console.log(err))
}
