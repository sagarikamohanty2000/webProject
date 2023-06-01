
var ulTag = document.getElementById('user');


function myFunction(event)    
{
    event.preventDefault();
            console.log(event.target.fname.value)
            alert("The form is submited");

             let userDetail = new Map();
             userDetail.set('Name',document.getElementById('fName').value);
             userDetail.set('Email',document.getElementById('fEmail').value);
             userDetail.set('Phone',document.getElementById('fPhone').value);
             userDetail.set('Date',document.getElementById('fDate').value);
             userDetail.set('Time',document.getElementById('fTime').value);

             
             var newli = document.createElement('li');
             newli.className='list-user'; 

             var nam = document.getElementById('fName').value;
             var email = document.getElementById('fEmail').value;
             var phone = document.getElementById('fPhone').value;

             var deleteBtn = document.createElement('button');
             deleteBtn.className='btn btn-danger btn-sm delete';
             deleteBtn.appendChild(document.createTextNode('Delete'));
                
             newli.appendChild(document.createTextNode(nam));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(email));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(phone));
             newli.appendChild(deleteBtn);
             ulTag.appendChild(newli);
    
             
           
             var user_serialized = JSON.stringify(Array.from(userDetail));
             localStorage.setItem(`${email}`,user_serialized);
        }

        ulTag.addEventListener('click',removeUser);

    function removeUser(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Do you want to delete'))
        {
            var li = e.target.parentElement;
            var email = li.textContent;
            //removes from list
            ulTag.removeChild(li);
            
            //removes from local storage
            for(var i=0; i<localStorage.length; i++)
            {
                if(email.includes(localStorage.key(i)) != -1)
            
            localStorage.removeItem(`${localStorage.key(i)}`);
            }
        }
    }
}

    

