const pageLoad = (() => {
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="subContainerItem one">
            <h1>Shopping List</h1>
            <div>
                <h3 class="items general">General List</h3>
                <br>
                <h3 class="items completed">Completed</h3>
                <br>
                <h3 class="items trash">Trash</h3>
            </div>
            <div>
                <h2>Projects</h2>
            </div>
            <div id="addProjectDiv">
                <button id="addProject">+ Create Project</button>
            </div>
        </div>
        <div class="subContainerItem two">
            <div>
                <form>
                    <input id="inputField" placeholder="Enter Item here"/>
                    <button id="button" type="button">Submit</button>
                </form>
            </div>
            <hr>
            <div class="displayedItem">
                <div class="todoItems">
                    <div id="text">Bananas</div>
                    <div>
                        <button id="completed">Completed</button>
                        <button id="trash">Trash</button>
                    </div>
                </div>
            </div>
        </div>
    `;
})();

export {pageLoad};