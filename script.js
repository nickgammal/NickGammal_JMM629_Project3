heightInput.addEventListener('sl-input', growStickFigure)
console.log(stickperson);

function growStickFigure(event) {
    newheight = event.target.value / 300 * 70;
    if(newheight) {stickperson.style.height = newheight + "vh";}
    else {stickperson.style.height = 10 + "vh";}
}