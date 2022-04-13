let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
  addItemsToDOM(JSON.parse(xhr.response));
};
function addItemsToDOM(categories) {
  let arr = [],
    j = 0;
  let k = 0;
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
    arr.push(category['id']);
    var elem = document.createElement('div');
    elem.setAttribute('id', `test${k}`);
    k += 1;
    elem.setAttribute('style', 'display="none"');
    elem.setAttribute('style', 'background-color="red"');
    elem.textContent = category['category_name'];
    container.appendChild(elem);
  });
  // ------------ FROM HERE AddEventListener METHOD FUNCTION CODE------------------
  var eventid = 0;
  for (let i = 0; i < arr.length; i++) {
   document
      .getElementById(`test${i}`)
      .addEventListener('click', dynamicUrl);
    eventid = i;
  }
 
  //------------- THIS FUNCTIION "PRINT THE CONTENTS " WHEN USER CLICK---------
  function dynamicUrl() {
    let xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `https://syntaxdb.com/api/v1/languages/javascript/categories/${arr[eventid]}/concepts`
    );
    xhr.send();
    xhr.onload = function () {
      addExtraItemsToDOM(JSON.parse(xhr.response));
    };
  }
  function addExtraItemsToDOM(concepts) {
    //let container = document.querySelector('.contents');
    let container = document.querySelector('.categories-id');
    concepts.forEach((concept) => {
      let elem = document.createElement('div');
      elem.setAttribute('id', `intest${j}`);
      j += 1;
      elem.setAttribute('style', 'display="none"');
      elem.textContent = concept['concept_name'];
      container.appendChild(elem);
      return;
    });
    //  document
    //   .getElementById('removetext')
    //   .addEventListener('click', removeContent);
  }
}
// function removeContent() {
//   document.getElementById('removetext').innerHTML = 'clear';
// }
