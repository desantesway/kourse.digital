// Get all images on the page
const images = document.querySelectorAll('img');

// Loop through each image and add the loading="lazy" attribute
images.forEach((img) => {
  img.setAttribute('loading', 'lazy');
});

/*
const cursor = document.querySelector(".circle");

function getDimensions(e) {
  cursor.style.top = `${e.clientY - 12.5}px`; // -25px for the size of the circle
  cursor.style.left = `${e.clientX - 12.5}px`;
}

window.addEventListener("mousemove", (e) => {
  getDimensions(e);
});

document.body.onload = function() {
  var content = document.getElementById('content');
  content.style.display = 'block';
}; */