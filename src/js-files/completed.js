const completedTasks = (() => {
    const completedTab = document.querySelector(".completed");

    completedTab.addEventListener("click", () => {
        //removes the background color on the current tab
        const general = document.querySelector(".general");
        const trash = document.querySelector(".trash");
        if(general.classList = "currentTab" || trash.classList != "currentTab") {
            general.classList.remove("currentTab");
            general.classList.add("items");
            const completed = document.querySelector(".completed");
            completed.classList.add("currentTab");
        }

        // add the (currentTab) class to the completed tab


        const sectionTwo = document.querySelector(".two");
        
        sectionTwo.innerHTML = `
            <div id="completedListOne">
                <h1>Completed Tasks</h1>
            </div>
            <hr>
            <div id="completedListTwo"></div>
        `;
    })
})();

export {completedTasks};