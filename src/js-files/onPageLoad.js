const pageLoad = (() => {
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="subContainerItem one">
            <h1>Shopping List</h1>
            <div>
                <h3 class="items">General List</h3>
                <br>
                <h3 class="items">Completed</h3>
                <br>
                <h3 class="items">Trash</h3>
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
                <h2>General</list>
            </div>
            <div class="addTodoBtn">
                <button id="allBtn">All</button>
                <button id="createBtn">+ Create Todo</button>
            </div>
            <div>Bananas</div>
        </div>
    `;
})();

export {pageLoad};