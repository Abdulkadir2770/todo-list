const trashedTasks = (() => {
    const trashTab =  document.querySelector(".trash");
    
    trashTab.addEventListener("click", () => {
        trashTab.addEventListener("click", () => {
            

            const sectionTwo = document.querySelector(".two");
            
            sectionTwo.innerHTML = `
                <div id="trashedListOne">
                    <h1>Trashed Tasks</h1>
                </div>
                <hr>
                <div id="trashedListTwo"></div>
            `;
        })
    })
})();

export {trashedTasks};