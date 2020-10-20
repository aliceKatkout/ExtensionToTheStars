const TitleType = document.getElementsByTagName("h1");
const ArrayOfTitle = Array.from(TitleType);

function updateFontColor(el) {
  el.style.color = "green";
}

ArrayOfTitle.forEach(updateFontColor);


// const ImageType = document.getElementsByTagName("img");
// const ArrayOfImages = Array.from(ImageType);
// 
// function updateSameImage(el) {
//   el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";
// }
//
// ArrayOfImages.forEach(updateSameImage);
