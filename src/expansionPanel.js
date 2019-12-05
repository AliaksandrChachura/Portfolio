
    let coll = document.getElementById("education");


    coll.addEventListener("click", function() {
    this.classList.toggle("active_ex");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      coll.style.color = 'black';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      coll.style.color = '#e7fec0';
    } 
  });

  