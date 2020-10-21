 window.onload = function(){
  document.getElementById("save").onclick = function() {
    var value = document.getElementById("sourceImage").value;
    chrome.storage.sync.set({"monImage" :value}, function(){
      console.log("success");
    })
  }
  document.getElementById("get").onclick = function() {
    chrome.storage.sync.get("monImage", function(data) {
      alert(data.monImage);
      var imageChoisie = data.monImage;
    })
  }
};


  // el.src = document.getElementById('sourceImage').value;
  // el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";


function updateSourceImage() {
  const ImageType = document.getElementsByTagName("img");
   const ArrayOfImages = Array.from(ImageType);
   ArrayOfImages.forEach(updateSameImage);
 }


 function updateSameImage(el) {
   el.src = imageChoisie;
 }


// let btn = document.getElementById('btn');
// btn.addEventListener('click', hello);
//
// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }
