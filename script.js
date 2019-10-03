//to select all input elements
const inputs = document.querySelectorAll('.sliders input');

//function to assign the css variable as a property and add slider value
function handleUpdate() {
     //to isolate the relevant variable's suffix(eg px or %) to add later
    const suffix = this.dataset.suffix || '';
    //assigning current slider value to css variable property and add suffix
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
//listening for slider change or mouseover event then run handleUpdate function
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
