

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
            console.log(userDetail);

             var random = Math.random();
             localStorage.setItem(`userDetail${random}`,JSON.stringify(Array.from(userDetail)));
        }
    

