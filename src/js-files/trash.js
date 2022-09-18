const trashedTasks = (() => {
    const trashTab =  document.querySelector(".trash");
    
    trashTab.addEventListener("click", () => {
        trashTab.addEventListener("click", () => {

            const general = document.querySelector(".general");
            const completed = document.querySelector(".completed");
            const trash = document.querySelector(".trash");
            if(completed.classList = "currentTab" || general.classList != "currentTab") {
                completed.classList.remove("currentTab");
                completed.classList.add("items");
                completed.classList.add("completed");
                trash.classList.add("currentTab");
            };

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