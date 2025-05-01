window.onload = function() {
    const images = [
        './images/1.jpg',
        './images/2.jpg',
        './images/3.jpg',
     
    ];

    // Get a random index from the images array
    const randomIndex = Math.floor(Math.random() * images.length);

    // Set the 'src' attribute of the image element to the random image
    document.getElementById('randomImage').src = images[randomIndex];
};
