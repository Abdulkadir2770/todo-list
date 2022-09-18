import { pageLoad } from "./js-files/onPageLoad";
import { addList } from "./js-files/addList";
import { completedTasks } from "./js-files/completed";
import { trashedTasks } from "./js-files/trash";

const pageContent = (() => {
    const container = document.querySelector(".container");

//    const completedTab = document.querySelector("#completed");
//    completedTab.addEventListener("click", () => {
//         const rmElement = document.querySelector(".todoItems");
//         console.log(rmElement);
//         const addElementToCompleted = document.querySelector("#completedListTwo");
//         console.log(addElementToCompleted);
//      });

   const trashTab = document.querySelector("#trash");
   trashTab.addEventListener("click", () => {
        console.log("Trash button has been clicked");
   })

})();