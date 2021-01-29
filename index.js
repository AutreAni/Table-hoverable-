let target, bottomDiv, leftDiv;

table.addEventListener("mouseover", formBox);
function formBox(event){
    target = event.target.closest("td");
    if(!target) return;
    if(target.cellIndex != 3) return;

    let targetStyles = window.getComputedStyle(target);
    target.classList.add("hoverable");
    leftDiv = createDiv("left", "8px", targetStyles.height, "4px", "-8.5px")
    bottomDiv = createDiv("bottom", targetStyles.width, "8.5px",  targetStyles.height, "-4px")
   
    target.append(bottomDiv, leftDiv);
}

table.addEventListener("mouseout",function(){
    if(target){
    target.classList.remove("hoverable");
    bottomDiv.remove();
    leftDiv.remove();
    }
    table.removeEventListener("mousemove", formBox);
    target = null;
});

function createDiv(className, par1, par2, par3, par4){
    let div = document.createElement("div");
    div.classList.add(className);
    div.style.width = par1;
    div.style.height = par2;
    div.style.top = par3;
    div.style.left = par4;
    return div;
}

