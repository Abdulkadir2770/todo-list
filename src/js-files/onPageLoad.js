const pageLoad = (() => {
    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="item one">one</div>
        <div class="item two">two</div>
    `;
})();

export {pageLoad};