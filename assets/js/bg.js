function generateSpecificDivs() {
    var body = document.body;
    
    /*var blurryDiv = document.createElement('div');
    blurryDiv.classList.add('blurry-div');
    body.appendChild(blurryDiv);*/

    var blurryDiv1 = document.createElement('div');
    blurryDiv1.classList.add('blurry-div-1');
    body.appendChild(blurryDiv1);

    var containerDiv = document.createElement('div');
    containerDiv.style.overflow = 'hidden';
    containerDiv.style.position = 'absolute';
    containerDiv.style.top = '0';
    containerDiv.style.width = '100%';
    containerDiv.style.height = '100%';
    containerDiv.style.pointerEvents = 'none';

    containerDiv.innerHTML = '<div class="stars"></div>';

    body.appendChild(containerDiv);
}

generateSpecificDivs();