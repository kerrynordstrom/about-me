var hobbies = document.getElementsByClassName("hobbies");
var i;

for (i = 0; i < hobbies.length; i++) {
  hobbies[i].onclick = function() {
    this.classList.toggle("active");
    var dropDown = this.nextElementSibling;
    if (dropDown.style.maxHeight){
      dropDown.style.maxHeight = null;
    } else {
      dropDown.style.maxHeight = dropDown.scrollHeight + "px";
    }
  }
}
