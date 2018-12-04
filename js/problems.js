window.addEventListener('load', function () {
  /**
   * on add problem form submit
   */
  problemForm.addEventListener('submit', function (e) {
    // prevent page from reload
    e.preventDefault();
    // get form values
    var name = problemForm.name.value;
    var image = problemForm.image.files[0];
    var type = problemForm.type.value;
    var degree = problemForm.degree.value;
    var reason = problemForm.reason.value;

    // read image file into base64 for displaying
    const reader = new FileReader();
    reader.readAsDataURL(image);

    // on image loaded
    reader.onload = function () {
      var contentEl = document.querySelector('.content');

      // create elements
      var nameEl = document.createElement('h3');
      nameEl.textContent = name;

      var imageEl = document.createElement('img');
      imageEl.setAttribute('width', '600px');
      imageEl.setAttribute('height', 'auto');
      imageEl.setAttribute('src', reader.result.toString());

      var ul = document.createElement('ul');
      var li1 = document.createElement('li');
      li1.textContent = 'Type: ' + type;
      var li2 = document.createElement('li');
      li2.appendChild(document.createTextNode('Degree: '));
      var degreeImg = document.createElement('img');
      degreeImg.setAttribute('width', 'auto');
      degreeImg.setAttribute('height', '15em');
      if (degree === '1') {
        degreeImg.setAttribute('src', 'images/1star.png');
      } else if (degree === '2') {
        degreeImg.setAttribute('src', 'images/2stars.png');
      } else if (degree === '3') {
        degreeImg.setAttribute('src', 'images/3stars.png');
      }
      li2.appendChild(degreeImg);
      var li3 = document.createElement('li');
      li3.appendChild(document.createTextNode('Reason: ' + reason));
      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);

      // append new elements to content element
      contentEl.insertBefore(ul, contentEl.firstChild);
      contentEl.insertBefore(imageEl, contentEl.firstChild);
      contentEl.insertBefore(nameEl, contentEl.firstChild);
    }

  })
})
