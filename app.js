function addItem() {
    //pulls from value info from the todoinput element
    const newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("todoinput").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
    }
//this removes the item you click on. by reomving this.
function removeItem() {
    document.getElementById("list").removeChild(this);
}
//this saves when you close the list
function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
}
//this will load the list when you reload the page
function loadList() {
document.getElementById("list").innerHTML = localStorage.storedList;
for(let i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem; }
}

//checks for local stored info, and applys it
if(localStorage.storedList) {
    loadList();
}