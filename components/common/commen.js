export const selectorShow = () => {

  if (window.innerWidth < 768) {
    setTimeout(() => {
      let tartget = document.querySelectorAll(".artical-recom-parent")

      tartget.forEach((item, index) => {

        let articalDiv = item.querySelector("ul");
        articalDiv ? articalDiv.style.maxHeight = "60px" : null;

        let firstFadeup =  item.querySelectorAll(".fadeup-div")[0];
        firstFadeup? firstFadeup.style.display = "flex":null
       
        if (articalDiv && articalDiv.scrollHeight <= 60 && window.innerWidth < 768) {
          item.querySelectorAll(".fadeup-div")[0].style.display = "none";
        }

        let nameDiv = document.querySelectorAll(".recommender")[index];
        if (nameDiv) {

          let recomBox = nameDiv.querySelectorAll("div")[0];
          recomBox.style.maxHeight = "60px";

          recomBox.querySelector(".fadeup-div").style.display = "flex";

          if (recomBox.scrollHeight <= 60 && window.innerWidth < 768) {

            recomBox.querySelector(".fadeup-div").style.display = "none";

          }
        }

      })
    }, 1000)
  }
}