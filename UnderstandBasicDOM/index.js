
// var headerMainTitle = document.getElementById('main-header');
// headerMainTitle.style.borderBottom ='solid 3px #000';

// document.getElementById('title_1').style.color ='green';
//     document.getElementById('title_1').style.fontWeight='bold';
//     var items = document.getElementsByClassName('list-group-item');
//     for(var i=0; i<items.length; i++)
//     {
//         items[i].style.fontWeight = 'bold'; 
//         items[i].style.color ='bold'; 
//     }
//     items[2].style.backgroundColor ='green';

// var list = document.getElementsByTagName('li');
// for(var i=0; i<list.length; i++)
// {
//     list[i].style.fontWeight = 'bold'; 
//     list[i].style.color ='bold'; 
//     list[i].style.backgroundColor ='green';
// }

//  var secondItem = document.querySelector('li');
// console.log(secondItem);
// secondItem.style.backgroundColor='green';

// // Made 3rd item invisible by changing its font color to white since its bachground is white
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';

// var items = document.querySelectorAll('li');
// console.log(items);
// items[1].style.color='green';

// var oddItems = document.querySelectorAll('li:nth-child(odd');
// for(var i=0; i<oddItems.length; i++)
// {
//     oddItems[i].style.backgroundColor='green';
// }

//ParentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='#f4f4f4';

//childNodes
//console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//firstchild 
//console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';

//lastChild
//itemList.lastChild.textContent='hello 5';

//lastElementChild
//itemList.lastElementChild.textContent='hello 4';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='blue';

//createElement
// var newDiv = document.createElement('div');
// newDiv.className='hello';  // add className
// newDiv.id='hello1';     // add id
// newDiv.setAttribute('title','div');    //add attribute

// //create text node
// var newDivText = document.createTextNode('Hello world');
// newDiv.appendChild(newDivText); //append the text node to the div 

// var container = document.querySelector('header .container'); 
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// // new li element
// var newli = document.createElement('li');
// newli.className='list-group-item'; //add className

// var newliText = document.createTextNode('hello'); //create new textNode
// newli.appendChild(newliText); //append the text node to the ul


// var ul_tag = document.querySelector('.container ul');
// var itemList = document.querySelector('#items'); 
// ul_tag.insertBefore(newli,itemList.children[0]);


// Add Delete Button

var itemList = document.getElementsByTagName('li');

for(var i=0;i<itemList.length; i++){
var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
itemList[i].appendChild(deleteBtn);
}

for(var i=0; i<itemList.length; i++)
{
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-default btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    itemList[i].appendChild(editBtn);
}

var itemList2 = document.getElementById('items');
itemList2.addEventListener('click', removeItem);

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Do you want to delete'))
        {
            var li = e.target.parentElement;
            itemList2.removeChild(li);
        }
    }
}
    
    