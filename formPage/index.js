

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

             var user_serialized = JSON.stringify(Array.from(userDetail));
             localStorage.setItem("UserDetail",user_serialized);
        }
    

