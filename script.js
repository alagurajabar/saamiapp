window.onload = function() {
    const images = [
        './images/1.jpeg',
        './images/2.jpeg',
        './images/3.jpeg',
        './images/4.jpeg',
        './images/5.jpeg',
        './images/6.jpeg',
        './images/7.jpeg'
    ];

    // Get a random index from the images array
    const randomIndex = Math.floor(Math.random() * images.length);

    // Set the 'src' attribute of the image element to the random image
    document.getElementById('randomImage').src = images[randomIndex];
};
