import { pageLoad } from "./js-files/onPageLoad";
import { addList } from "./js-files/addList";

const pageContent = (() => {
    const container = document.querySelector(".container");

    // the two <div> items
   const generalTab = document.querySelector(".general");
   generalTab.addEventListener("click", () => {
        console.log("General tab has been clicked");
   })

   const completedTab = document.querySelector(".completed");
   completedTab.addEventListener("click", () => {
        console.log("Completed tab has been clicked");
   })

   const trashTab = document.querySelector(".trash");
   trashTab.addEventListener("click", () => {
        console.log("Trash tab has been clicked");
   })

})();