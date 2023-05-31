
var headerMainTitle = document.getElementById('main-header');
headerMainTitle.style.borderBottom ='solid 3px #000';

document.getElementById('title_1').style.color ='green';
    document.getElementById('title_1').style.fontWeight='bold';
    var items = document.getElementsByClassName('list-group-item');
    for(var i=0; i<items.length; i++)
    {
        items[i].style.fontWeight = 'bold'; 
        items[i].style.color ='bold'; 
    }
    items[2].style.backgroundColor ='green';

// var list = document.getElementsByTagName('li');
// for(var i=0; i<list.length; i++)
// {
//     list[i].style.fontWeight = 'bold'; 
//     list[i].style.color ='bold'; 
//     list[i].style.backgroundColor ='green';
// }

/ var secondItem = document.querySelector('li:nth-child(2)');
// secondItem.style.backgroundColor='green';

// // Made 3rd item invisible by changing its font color to white since its bachground is white
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';

var items = document.querySelectorAll('li');
items[1].style.color='green';

var oddItems = document.querySelectorAll('li:nth-child(odd');
for(var i=0; i<oddItems.length; i++)
{
    oddItems[i].style.backgroundColor='green';
}






   
    

