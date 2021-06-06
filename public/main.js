
let currentImage
let imagesToExpand = [] 
const container = document.querySelectorAll("#cont");
container.forEach((cont) => {
let Imagenode = cont.querySelectorAll('img'); 
 imagesToExpand.push(Imagenode);
 console.log(imagesToExpand)
})
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

    imagesToExpand.forEach((pic) => {
        pic.forEach((im) => {
            im.parentElement.style.backgroundColor = "#151513";
            currentImage.style.display = "block"
          })
    })
}

const shrink = (e) => {
    currentImage = e.target;
    currentImage.parentElement.style.backgroundColor = "white";
    currentImage.style.position = "relative";
    currentImage.style.zIndex = "1";  
    currentImage.style.width = "100%";
    currentImage.style.left = "0";
    document.body.style.backgroundColor = "white";
    currentImage.style.backgroundColor = "white";

    imagesToExpand.forEach((pic) => {
        pic.forEach((im) => {
                im.style.display = "block";
                im.parentElement.style.backgroundColor = "white";
          })
    })
}

imagesToExpand.forEach((pic) => {
    pic.forEach((im) => {
      im.addEventListener("click", expand) 
      im.addEventListener("mouseout", shrink)
    })
    
})

