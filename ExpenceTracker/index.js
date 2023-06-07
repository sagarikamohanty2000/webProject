
var form = document.getElementById('add-form');
var ulTag = document.getElementById('expense-list');

//Submit Function
function myFunction(event) {
   event.preventDefault();
    alert("This Form is submited");

    var amt = document.getElementById('expenseAmt').value;
    var description = document.getElementById('chooseDescription').value;
    var category = document.getElementById('chooseCategory').value;

   var expenseDetails = new Map()
   {
     expenseDetails.set('Amount',amt);
     expenseDetails.set('Description',description);
     expenseDetails.set('Category',category);
   }
   //Data stored in Local Storage
    var expense_serialise = JSON.stringify(Array.from(expenseDetails));
    localStorage.setItem(`${description}`,expense_serialise);

    //Delete Button
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-sm delete ml-10 mr-10";
    deleteBtn.appendChild(document.createTextNode('Delete'));

     //Edit Button
    var editBtn = document.createElement('button');
    editBtn.className="btn btn-sm edit  ml-10 mr -10";
    editBtn.appendChild(document.createTextNode('Edit'));

    //Data ShowCased on the screen
    var list = document.createElement('li');
    list.className="expense-list";
    list.id="expense-list";
    list.appendChild(document.createTextNode(amt));
    list.appendChild(document.createTextNode(' '));
    list.appendChild(document.createTextNode(description));
    list.appendChild(document.createTextNode(' '));
    list.appendChild(document.createTextNode(category));
    list.appendChild(document.createTextNode(' '));
    list.appendChild(deleteBtn);
    list.appendChild(document.createTextNode(' '));
    list.appendChild(editBtn);

    ulTag.appendChild(list);
}

ulTag.addEventListener('click',removeExpense);
ulTag.addEventListener('click',editExpense);

//Delete Function
function removeExpense(e)
{
   if(e.target.classList.contains('delete'))
    {
            if(confirm('Do you want to delete ? '))
            {
            var li = e.target.parentElement;
            var exp = li.textContent;
            var expText = exp.split(" ")

            //removes from list
            ulTag.removeChild(li);
            
            //removes from local storage
            localStorage.removeItem(`${expText[1]}`);
            
           }
   }
}

//Edit Function
function editExpense(e)
{
   if(e.target.classList.contains('edit'))
    {
            var li = e.target.parentElement;
            var exp = li.textContent;
            var expText = exp.split(" ")

            //populate the Values
            document.getElementById('expenseAmt').value =expText[0];
            document.getElementById('chooseDescription').value =expText[1];
            document.getElementById('chooseCategory').value  =expText[2];
            
            
            //removes from list
            ulTag.removeChild(li);
            
            //removes from local storage
            localStorage.removeItem(`${expText[1]}`);
            console.log(`${expText[1]}`)
            
           
   }
}

//Populate the Data from Local Storage onto The screen on Screen Refresh
window.onload = () => {
     for (var i = 0; i < localStorage.length; i++){
      var list = document.createElement('li');
      list.className="expense-list";
      list.id="expense-list";
      var item = JSON.parse( localStorage.getItem(localStorage.key(i)) );
      
      var deleteBtn = document.createElement('button');
      deleteBtn.className="btn btn-sm delete ml-10 mr-10";
      deleteBtn.appendChild(document.createTextNode('Delete'));
  
      var editBtn = document.createElement('button');
      editBtn.className="btn btn-sm edit  ml-10 mr -10";
      editBtn.appendChild(document.createTextNode('Edit'));
       
        list.appendChild(document.createTextNode(item[0][1]));
        list.appendChild(document.createTextNode(' '));
        list.appendChild(document.createTextNode(item[1][1]));
        list.appendChild(document.createTextNode(' '));
        list.appendChild(document.createTextNode(item[2][1]));
        list.appendChild(document.createTextNode(' '));
        list.appendChild(deleteBtn);
        list.appendChild(document.createTextNode(' '));
        list.appendChild(editBtn);

        ulTag.appendChild(list);
   
    }
    }