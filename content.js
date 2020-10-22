const TitleType = document.getElementsByTagName("h1");
const ArrayOfTitle = Array.from(TitleType);

function updateFontColor(el) {
  el.style.color = "green";
}

ArrayOfTitle.forEach(updateFontColor);


function updateSourceImage() {
  const ImageType = document.getElementsByTagName("img");
   const ArrayOfImages = Array.from(ImageType);
   ArrayOfImages.forEach(updateSameImage);
 }


function updateSameImage(el) {
  chrome.storage.sync.get(
    'monImage',
    function(result) {
      // @see https://subscription.packtpub.com/book/web_development/9781783287314/1/ch01lvl1sec10/the-callback-pattern
      el.src = result.monImage;
    }
  );
 }

updateSourceImage();

// const ImageType = document.getElementsByTagName("img");
// const ArrayOfImages = Array.from(ImageType);
//
// function updateSameImage(el) {
//   el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";
// }
//
// ArrayOfImages.forEach(updateSameImage);
