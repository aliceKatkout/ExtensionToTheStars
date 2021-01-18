
document.getElementById("save").onclick = function() {
  const value = document.getElementById("sourceImage").value;

  chrome.storage.sync.set({"monImage": value}, function(){
  })
}

//Au click sur le bouton Go(id=save), on récupère l'url entrée par l'utilisateur (id=sourceImage), puis on la stocke avec chrome storage, associée à la clé MonImage.





