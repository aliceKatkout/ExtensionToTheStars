
document.getElementById("save").onclick = function() {
  const value = document.getElementById("sourceImage").value;

  chrome.storage.sync.set({"monImage": value}, function(){
  })
}

//Au click sur le bouton Go(id=save), on récupère l'url entrée par l'utilisateur (id=sourceImage), puis on la stocke avec chrome storage, associée à la clé MonImage.


//Bordel tests et documentation:
// User data will be automatically synced with Chrome.
  // @see https://developer.chrome.com/apps/storage


  // el.src = document.getElementById('sourceImage').value;
  // el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";





