const buttons = document.getElementsByClassName('button');
const arrayButtons = Array.from(buttons);

Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('it works');
});