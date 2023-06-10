
var ulTag = document.getElementById('user');


function myFunction(event)    
{
    event.preventDefault();
            console.log(event.target.fname.value)
            alert("The form is submited");
            const nameUser = event.target.fname.value;
            const emailid = event.target.femail.value;
            const ph = event.target.fPhone.value;

            const obj ={
                nameUser,
                emailid,
                ph
            }

            //  let userDetail = new Map();
            //  userDetail.set('Name',document.getElementById('fName').value);
            //  userDetail.set('Email',document.getElementById('fEmail').value);
            //  userDetail.set('Phone',document.getElementById('fPhone').value);
            //  userDetail.set('Date',document.getElementById('fDate').value);
            //  userDetail.set('Time',document.getElementById('fTime').value);

             
            //  var newli = document.createElement('li');
            //  newli.className='list-user'; 

            //  var nam = document.getElementById('fName').value;
            //  var email = document.getElementById('fEmail').value;
            //  var phone = document.getElementById('fPhone').value;

            //  var deleteBtn = document.createElement('button');
            //  deleteBtn.className='btn btn-danger btn-sm delete';
            //  deleteBtn.appendChild(document.createTextNode('Delete'));
                
            //  var editBtn = document.createElement('button');
            //  editBtn.className='btn btn-basic btn-sm edit';
            //  editBtn.appendChild(document.createTextNode('Edit'));

            //  newli.appendChild(document.createTextNode(nam));
            //  newli.appendChild(document.createTextNode('-'));
            //  newli.appendChild(document.createTextNode(email));
            //  newli.appendChild(document.createTextNode('-'));
            //  newli.appendChild(document.createTextNode(phone));
            //  newli.appendChild(document.createTextNode('-'));
            //  newli.appendChild(deleteBtn);
            //  newli.appendChild(editBtn);
            //  ulTag.appendChild(newli);
    
             
            showUserOnScreem(obj);           
             //var user_serialized = JSON.stringify(Array.from(userDetail));
             //localStorage.setItem(`${email}`,user_serialized);
             axios.post("https://crudcrud.com/api/768d6ccc96bf473689a2dd8b374dd688/appointmentDetails", obj)
             .then((response) => console.log(response))
             .catch((err) => console.log(err))
        }

       // ulTag.addEventListener('click',removeUser);
        ulTag.addEventListener('click',editUser);
//     function removeUser(e)
// {
//     if(e.target.classList.contains('delete'))
//     {
//         if(confirm('Do you want to delete'))
//         {
//             var li = e.target.parentElement;
//             var email = li.textContent;
//             var emailContent = email.split("-")

//             //populate the Values
//             document.getElementById('fName').value =emailContent[0];
//             document.getElementById('fEmail').value =emailContent[1];
//             document.getElementById('fPhone').value =emailContent[2];
            
//             //removes from list
//             ulTag.removeChild(li);
            
//             //removes from local storage
//             localStorage.removeItem(`${emailContent[1]}`);
//             }
            
//     }
// }

function editUser(e)
{
    if(e.target.classList.contains('edit'))
    {
            var li = e.target.parentElement;
            var email = li.textContent;
            var emailContent = email.split("-")

            //populate the Values
            document.getElementById('fName').value =emailContent[0];
            document.getElementById('fEmail').value =emailContent[1];
            document.getElementById('fPhone').value =emailContent[2];
            
            //removes from list
            ulTag.removeChild(li);
            
            //removes from local storage
            localStorage.removeItem(`${emailContent[1]}`);
            }
            
         

    }

    window.onload = () => {
        axios.get("https://crudcrud.com/api/768d6ccc96bf473689a2dd8b374dd688/appointmentDetails")
        .then((response) => { console.log(response) 
        for(var i=0; i<response.data.length; i++)
        {
           showUserOnScreem(response.data[i])
        }
    })
        
        .catch(err => console.log(err))
    }

    function showUserOnScreem(obj)
    {
             var newli = document.createElement('li');
             newli.className='list-user'; 

             var nam = obj.nameUser;//document.getElementById('fName').value;
             var email = obj.emailid;//document.getElementById('fEmail').value;
             var phone = obj.ph;//document.getElementById('fPhone').value;

             var deleteBtn = document.createElement('button');
             deleteBtn.className='btn btn-danger btn-sm delete';
             deleteBtn.appendChild(document.createTextNode('Delete'));
             deleteBtn.onclick=()=>{
                axios.delete(`https://crudcrud.com/api/768d6ccc96bf473689a2dd8b374dd688/appointmentDetails/${obj._id}`)
                .then((response) =>  console.log(response))
                .catch(err => console.log(err));

                //var li = nam.parentElement;
                ulTag.removeChild(newli);
                
             }
                
             var editBtn = document.createElement('button');
             editBtn.className='btn btn-basic btn-sm edit';
             editBtn.appendChild(document.createTextNode('Edit'));

             newli.appendChild(document.createTextNode(nam));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(email));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(phone));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(deleteBtn);
             newli.appendChild(editBtn);
             ulTag.appendChild(newli);
    }

