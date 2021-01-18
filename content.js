const TitleType = document.getElementsByTagName("h1"); //recupere les h1
const ArrayOfTitle = Array.from(TitleType); // Créé un tableau avec les h1

function updateFontColor(el) {
  el.style.color = "green";
}
// change la couleur des h1

ArrayOfTitle.forEach(updateFontColor); //applique la fonction sur tous les titres du tableau


function updateSourceImage() {
  const ImageType = document.getElementsByTagName("img");
   const ArrayOfImages = Array.from(ImageType);
   ArrayOfImages.forEach(updateSameImage);
 }
//récupère les images, créé un tableau, et applique la fonction updateSameImage sur chaque élément du tableau

function updateSameImage(el) {
  chrome.storage.sync.get(
    'monImage',
    function(result) {
      el.src = result.monImage;
    }
  );
 }
// Récupère l'url stockée dans google storage par l'utilisateur via la fenêtre popup, marche grâce à une fonction call back
// @see https://subscription.packtpub.com/book/web_development/9781783287314/1/ch01lvl1sec10/the-callback-pattern

updateSourceImage(); // Applique la fonction



