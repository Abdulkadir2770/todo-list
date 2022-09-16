const addList = (() => {
    const button = document.querySelector("#button");

    button.addEventListener("click", () => {
        // retrieve users list text
        const inputField = document.querySelector("#inputField");
        let userText = inputField.value;

        // retrieve and create a new list
        const display = document.querySelector(".displayedItem");

        const newList = document.createElement("div");
        newList.classList.add("todoItems")
        newList.innerHTML = `
            <div class="todoItems">
                <div id="text">${userText}</div>
                <div>
                    <button id="completed">Completed</button>
                    <button id="trash">Trash</button>
                </div>
            </div>
        `;

        display.appendChild(newList);

    })

    
})();

export {addList};