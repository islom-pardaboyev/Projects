const searchBarContainerEL = document.querySelector(".search-bar-container")
const magnifierEl = document.querySelector(".magnifier")

magnifierEl.addEventListener("click", () => {
    searchBarContainerEL.classList.toggle("active")
})
