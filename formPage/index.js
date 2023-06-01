

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

             var ulTag = document.getElementById('user');
             var newli = document.createElement('li');
             newli.className='list-user'; //add className

             var nam = document.getElementById('fName').value;
             var email = document.getElementById('fEmail').value;
             var phone = document.getElementById('fPhone').value;
                
             newli.appendChild(document.createTextNode(nam));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(email));
             newli.appendChild(document.createTextNode('-'));
             newli.appendChild(document.createTextNode(phone));
             ulTag.appendChild(newli);
           
             var user_serialized = JSON.stringify(Array.from(userDetail));
             localStorage.setItem(`${email}`,user_serialized);
        }
    

