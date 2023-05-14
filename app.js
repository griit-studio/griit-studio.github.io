function updateImage(path, first, last, interval) {
    let currentImageIndex = first;
    let container = document.getElementById('container');

    setInterval(function() {
        // get the div
        let imageDiv = document.getElementById('imageDiv');
        // update the image source
        imageDiv.src = path + 'Water' + currentImageIndex + '.png';
        // increment the index
        currentImageIndex++;
        // if we've gone past the end, start over
        if (currentImageIndex > last) {
            currentImageIndex = first;
        }
         

       }, interval);
   }



updateImage('callout-content/background/', 1, 18, 200); // every 2 seconds

