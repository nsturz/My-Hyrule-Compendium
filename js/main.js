// var form = document.querySelector('form');
var h2 = document.querySelector('h2');
var image = document.getElementById('result-image');
var attack = document.getElementById('attack');
var attackText = document.getElementById('attack-text');
var categoryText = document.getElementById('category-text');
// var locationText = document.getElementById('location-text');
var descriptionText = document.getElementById('description-text');
var dropsText = document.getElementById('drops-text');
var idText = document.getElementById('id-text');
// var notesText = document.getElementById('notes-text');

function returnEntry(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2/entry/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    // console.log('xhr status:', xhr.status);
    // console.log('xhr response:', xhr.response);
    image.setAttribute('src', xhr.response.data.image);
    if (xhr.response.data.attack !== null) {
      attack.className = 'text-align-center';
      attackText.className = 'text-align-center';
      attackText.textContent = xhr.response.data.attack;
    } else {
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
    }
    h2.textContent = xhr.response.data.name;
    categoryText.textContent = xhr.response.data.category;
    // if (typeof xhr.response.data.location === 'array') {
    //   locationText.textContent = xhr.response.data.common_locations.toString();
    // }

    // // this must becommented out for now,
    // // it breaks the code, along with line 21 :( 👆🏼
    descriptionText.textContent = xhr.response.data.description;
    if (xhr.response.data.drops.length === 0) {
      dropsText.textContent = 'None';
    } else if (xhr.response.data.drops.length !== 0) {
      dropsText.textContent = xhr.response.data.drops;
    }
    idText.textContent = xhr.response.data.id;

  });
  xhr.send();
}

returnEntry('blupee');

// this function will allow the user to search for entries,
// and display the result on the 'search-result' view 👇🏼

// form.addEventListener('click', function (event) {
//   event.preventDefault();

// });

// NOTES 8/3/22!
// - you need to find a way to hide the "attack" h2 whenever an item is
// searched that is NOT equipment
