var bfh = {};

// Get the modal
bfh.modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
bfh.span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
bfh.span.onclick = function() {
   bfh.modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
bfh.images = document.getElementsByTagName('img');
bfh.modalImg = document.getElementById("img01");
bfh.captionText = document.getElementById("caption");
bfh.i;
for (bfh.i = 0; bfh.i < bfh.images.length; bfh.i++) {
    bfh.images[bfh.i].onclick = function () {
        bfh.modal.style.display = "block";
        bfh.modalImg.src = this.src;
        bfh.modalImg.alt = this.alt;
        bfh.captionText.innerHTML = this.nextElementSibling.innerHTML;
   }
}