function addItem() {
    var inputBox = document.getElementById("input-box");
    var itemText = inputBox.value.trim();

    if (itemText !== "") {
        var itemList = document.getElementById("item-list");
        var newItem = document.createElement("li");
        newItem.textContent = itemText;
        itemList.appendChild(newItem);
        inputBox.value = "";
    }
}

document.getElementById("submit-button").addEventListener("click", addItem);
