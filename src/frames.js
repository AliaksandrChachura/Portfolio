//let ifrm = document.getElementById('frame');
let theyalow = document.getElementById('theyalow');
//let repair = document.getElementById('repair');

theyalow.addEventListener("click", () => {
    
    let ifrm = document.createElement('a');
    document.body.appendChild(a); 
    ifrm.href = './theyalow/index.html';
    ifrm.id = 'ifrm';
    //theyalow.appendChild(ifrm);
    ifrm.style.width = '400px';
    ifrm.classList.add('active');
    hideElement('body');
    console.log("frame-theyalow");
})

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
} 
//<iframe name="frame" style="display: none" id="frame"></iframe>