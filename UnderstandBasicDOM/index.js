
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


   
    

