
var form = document.getElementById('add-form');
var ulTag = document.getElementById('expense-list');

//Submit Function
async function myFunction(event) {
   event.preventDefault();
    alert("This Form is submited");

    var amt = document.getElementById('expenseAmt').value;
    var description = document.getElementById('chooseDescription').value;
    var category = document.getElementById('chooseCategory').value;

   var obj =
   {
    amt,
    description,
    category
   }
   //Data stored in Local Storage
   //  var expense_serialise = JSON.stringify(Array.from(expenseDetails));
   //  localStorage.setItem(`${description}`,expense_serialise);
   try {   
   const response = await axios.post("https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/ExpenseDetails",obj);
   console.log(response);    
   }

   catch (error) {
      console.log(error);
   }

   showExpenseItemsOnScreen(obj);
}

function showExpenseItemsOnScreen(obj)
{
    //Delete Button
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-sm delete ml-10 mr-10";
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = (async () => {

      if(confirm('Do you want to delete ? '))
            {
               try{
                const response = await axios.delete(`https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/ExpenseDetails/${obj._id}`);
                console.log(response);
                var deleteli = document.getElementById(`${obj._id}`);
                ulTag.removeChild(deleteli);
               }
               catch(error) {
                  console.log(error)
               }
            }

    })

     //Edit Button
    var editBtn = document.createElement('button');
    editBtn.className="btn btn-sm edit  ml-10 mr -10";
    editBtn.appendChild(document.createTextNode('Edit'));
     editBtn.onclick = (async () => {
               document.getElementById('expenseAmt').value = `${obj.amt}`;
               document.getElementById('chooseDescription').value = `${obj.description}`;
               document.getElementById('chooseCategory').value = `${obj.category}`;

               const newAmt =  document.getElementById('expenseAmt').value;
               const newDes = document.getElementById('chooseDescription').value;
               const newCate =  document.getElementById('chooseCategory').value;
               obj = {
                  newAmt,
                  newDes,
                  newCate
               }


            try{
               const response = await axios.put(`https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/ExpenseDetails/${obj._id}`,obj);
               console.log(response);
               var deleteli = document.getElementById(`${obj._id}`);
               ulTag.removeChild(deleteli);
            }
            catch(error) {
               console.log(error)
            }
     })

    //Data ShowCased on the screen
    var list = document.createElement('li');
    list.className="expense-list";
    console.log(obj.amt)
    list.id=`${obj._id}`;
    list.textContent = obj.amt+" "+obj.description+" "+obj.category+" ";
    list.appendChild(deleteBtn);
    list.appendChild(document.createTextNode(' '));
    list.appendChild(editBtn);

    ulTag.appendChild(list);
}



// //Delete Function
// function removeExpense(e)
// {
//    if(e.target.classList.contains('delete'))
//     {
//             if(confirm('Do you want to delete ? '))
//             {
//             var li = e.target.parentElement;
//             var exp = li.textContent;
//             var expText = exp.split(" ")

//             //removes from list
//             ulTag.removeChild(li);
            
//             //removes from local storage
//             localStorage.removeItem(`${expText[1]}`);
            
//            }
//    }
// }

//Populate the Data from Local Storage onto The screen on Screen Refresh
window.onload = (async () => {
   //   for (var i = 0; i < localStorage.length; i++){
   //    var list = document.createElement('li');
   //  
   //    var item = JSON.parse( localStorage.getItem(localStorage.key(i)) );
      try {
   const response = await axios.get("https://crudcrud.com/api/4fa11b2370864bc6bbd0abe20d68bda3/ExpenseDetails");
   for(let i = 0 ; i<response.data.length; i++)
   {
      showExpenseItemsOnScreen(response.data[i]);
   }
}
catch (error)
{
   console.log(error);
}
   
})
    