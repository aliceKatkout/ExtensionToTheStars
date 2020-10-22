
document.getElementById("save").onclick = function() {
  const value = document.getElementById("sourceImage").value;

  // User data will be automatically synced with Chrome.
  // @see https://developer.chrome.com/apps/storage
  chrome.storage.sync.set({"monImage": value}, function(){
    console.log("success");
  })
}

// document.getElementById("get").onclick = function() {
//   chrome.storage.sync.get("monImage", function(data) {
//     alert(data.monImage);
//     const imageChoisie = data.monImage;
//   })
// };


  // el.src = document.getElementById('sourceImage').value;
  // el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";




// let btn = document.getElementById('btn');
// btn.addEventListener('click', hello);
//
// function hello() {
//   chrome.tabs.executeScript({
//     file: 'alert.js'
//   });
// }
