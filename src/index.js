import './scss/style.scss';
import './expansionPanel.js';
import './slider.js';
//import './frames.js';

const theYalow = document.getElementById('theyalow');
const body = document.getElementById('body');
const wrapper = document.getElementById('wrapper');
const frame = document.getElementById('frame');
const backButton = document.getElementById('back');
const sizeButton = document.getElementById('size');

function addFrame() {
    body.style.width = "1300px";
    frame.style.width = "105%";
    sizeButton.innerHTML = "Mobile";
    backButton.style.marginLeft = "75vw";
    sizeButton.style.marginLeft = "75vw";
    backButton.style.display = "initial";
    sizeButton.style.display = "initial";
    wrapper.style.display = "none";
    frame.style.display = "initial";
    //const iframe = frame.contentWindow.document.body;
    //iframe.append('test');
    //const buttonSize = innerDoc.
   // innerDoc.getElementsByTagName('body').style.width="1024px";
}

theYalow.addEventListener('click', 
    addFrame, false
    //document.body.appendChild
)

backButton.addEventListener('click', () => {
    backButton.style.display = "none";
    sizeButton.style.display = "none";
    wrapper.style.display = "initial";
    frame.style.display = "none";
})

sizeButton.addEventListener('click', () => {
    if (sizeButton.innerHTML === "Mobile") {
        sizeButton.innerHTML = "Desktop";
        frame.style.width = "640px";
        frame.style.height = "100%";
        frame.style.margin = "auto";
        backButton.style.marginLeft = "50vw";
        sizeButton.style.marginLeft = "50vw";
    } else if (sizeButton.innerHTML === "Desktop") {
        sizeButton.innerHTML = "Mobile";
        frame.style.width = "105%";
        frame.style.height = "100%";
        frame.style.margin = "auto";
        backButton.style.marginLeft = "75vw";
        sizeButton.style.marginLeft = "75vw";
    }

})