const imagesToExpand = document.querySelectorAll('img');
const imageDiv = document.querySelector('.popOutImageDiv');
const imageInDiv = imageDiv.querySelector('img')



const getSourceAndPopAttri = (e) => {
imageDiv.classList.add("pop")
let clickedImage = e.target;
console.log(clickedImage)
const imageSource = clickedImage.getAttribute('src');
console.log(imageSource)
imageInDiv.setAttribute('src', imageSource);

}




imagesToExpand.forEach((pic) => {
  pic.addEventListener('click', getSourceAndPopAttri) 
})