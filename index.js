const container = document.querySelector('#container');
const div = [];
let size=16;
CreateGrid(size);
const button = document.querySelector('button')
function CreateGrid(s) {
    if (s == '' || s == null) {
        return;
    }
    let purge = document.querySelectorAll('.grid');
    purge.forEach((x) => {
        x.remove();
    });
    for (i=0;i<s*s;i++) {
        div[i] = document.createElement('div');
        div[i].classList.add('grid');
        container.appendChild(div[i]);
    }
var gri = document.querySelectorAll('.grid');
gri.forEach((x) => {
       x.style.width = 720/s + 'px';
       x.style.height = 720/s + 'px';
    });
gri.forEach((sqi) => {
      sqi.addEventListener('mouseover',() => {
          sqi.classList.add('colour')
     });
    });  
}
button.addEventListener('click', () => {
    size = prompt('Enter number of squares per side');
    
    CreateGrid(size);
    
});






 


















