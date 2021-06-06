const ImagesToExpand = document.querySelectorAll("img");
let currentImage

const expand = (e) => {
    currentImage = e.target;
    currentImage.style.position = "absolute";
    currentImage.style.width = "200%";
    currentImage.style.zIndex = "2";
    // currentImage.style.left = "20%";
    // currentImage.style.top = "10%";
    document.body.style.backgroundColor = "#151513";
    currentImage.style.backgroundColor = "#151513";
    currentImage.parentElement.style.backgroundColor = "#151513";

    ImagesToExpand.forEach((pic) => {
        pic.style.display = "none";
        pic.parentElement.style.backgroundColor = "#151513";
        currentImage.style.display = "block"
    })
}

const shrink = (e) => {
    currentImage.parentElement.style.backgroundColor = "white";
    currentImage.style.position = "relative";
    currentImage.style.zIndex = "1";  
    currentImage.style.width = "100%";
    currentImage.style.left = "0";
    document.body.style.backgroundColor = "white";
    currentImage.style.backgroundColor = "white";

    ImagesToExpand.forEach((pic) => {
        pic.style.display = "block";
        pic.parentElement.style.backgroundColor = "white";
    })
}

ImagesToExpand.forEach((pic) => {
    pic.addEventListener("click", expand)
    pic.addEventListener("mouseout", shrink)
})

