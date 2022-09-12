const pageLoad = (() => {
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="item one">
            <div>One</div>
            <div>two</div>
            <div>three</div>
            <div>Add</div>
        </div>
        <div class="item two">
            <div>Apple</div>
            <div>Input field</div>
            <div>Bananas</div>
        </div>
    `;
})();

export {pageLoad};