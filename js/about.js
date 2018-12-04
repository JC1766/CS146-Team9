/**
 * insert an element after another element
 * @param newNode
 * @param referenceNode
 */
function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.addEventListener('load', function () {
  /**
   * on add people form submit
   */
  addForm.addEventListener('submit', function (e) {
    // prevent page from reload
    e.preventDefault();
    // get form values
    var name = addForm.name.value;
    var desc = addForm.desc.value;

    var contentEl = document.querySelector('.content');
    var afterEl = contentEl.querySelector('h2');
    // create new elements
    var h3 = document.createElement('h3');
    h3.textContent = name;
    var p = document.createElement('p');
    p.textContent = desc;
    // insert new elements to content element
    insertAfter(h3, afterEl);
    insertAfter(p, h3);
  })
})
