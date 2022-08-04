var form = document.querySelector('form');
var h2 = document.querySelector('h2');
var image = document.getElementById('result-image');
// var attack = document.getElementById('attack');
// var attackText = document.getElementById('attack-text');
var categoryText = document.getElementById('category-text');
var locationText = document.getElementById('location-text');
// var cookingEffect = document.getElementById('cooking-effect');
var cookingEffectText = document.getElementById('cooking-effect-text');
var descriptionText = document.getElementById('description-text');
var heartsRecovered = document.getElementById('hearts-recovered');
var heartsRecoveredText = document.getElementById('hearts-recovered-text');
var drops = document.getElementById('drops');
var dropsText = document.getElementById('drops-text');
var idText = document.getElementById('id-text');
// var notesText = document.getElementById('notes-text');

// this function searches the entire compendium - for research purposes 👇🏼
function returnCompendium() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

  });
  xhr.send();
}

returnCompendium();

// this function searches for materials 👇🏼
function returnMaterials(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (var i = 0; i < xhr.response.data.materials.length; i++) {
      if (name === xhr.response.data.materials[i].name) {
        // what is being shown 👇🏼
        h2.textContent = xhr.response.data.materials[i].name;
        image.setAttribute('src', xhr.response.data.materials[i].image);
        categoryText.textContent = xhr.response.data.materials[i].category;
        locationText.textContent = xhr.response.data.materials[i].common_locations;
        cookingEffectText.textContent = xhr.response.data.materials[i].cooking_effect;
        descriptionText.textContent = xhr.response.data.materials[i].description;
        heartsRecoveredText.textContent = xhr.response.data.materials[i].hearts_recovered;
        idText.textContent = xhr.response.data.materials[i].id;
        heartsRecovered.className = 'text-align-center';
        heartsRecoveredText.className = 'text-align-center';

        // what is being hidden 👇🏼
        drops.className = 'text-align-center hidden';
        dropsText.className = 'text-align-center hidden';

      } else {
        // view swap to the "your search did not match any results" page
        // console.log('your search did not match any results');
      }
    }

  });
  xhr.send();
}

returnMaterials('hearty durian');

// this function searches for creatures 👇🏼
// function returnCreatures(name) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     for (var i = 0; i < xhr.response.data.creatures.food.length; i++) {
//       if (name === xhr.response.data.creatures.food[i].name) {
//         // what is being shown 👇🏼
//         h2.textContent = xhr.response.data.creatures.food[i].name;
//         image.setAttribute('src', xhr.response.data.creatures.food[i].image);
//         categoryText.textContent = xhr.response.data.creatures.food[i].category;
//         locationText.textContent = xhr.response.data.creatures.food[i].common_locations;
//         cookingEffectText.textContent = xhr.response.data.creatures.food[i].cooking_effect;
//         descriptionText.textContent = xhr.response.data.creatures.food[i].description;
//         heartsRecoveredText.textContent = xhr.response.data.creatures.food[i].hearts_recovered;
//         idText.textContent = xhr.response.data.creatures.food[i].id;
//         heartsRecovered.className = 'text-align-center';
//         heartsRecoveredText.className = 'text-align-center';

//         // what is being hidden 👇🏼
//         drops.className = 'text-align-center hidden';
//         dropsText.className = 'text-align-center hidden';
//       } else {
//         for (var j = 0; j < xhr.response.data.creatures.non_food.length; j++) {
//           if (name === xhr.response.data.creatures.non_food[j].name) {
//             h2.textContent = xhr.response.data.creatures.non_food[j].name;
//             image.setAttribute('src', xhr.response.data.creatures.non_food[j].image);
//             categoryText.textContent = xhr.response.data.creatures.non_food[j].category;
//             locationText.textContent = xhr.response.data.creatures.non_food[j].common_locations;
//             cookingEffectText.textContent = xhr.response.data.creatures.non_food[j].cooking_effect;
//             descriptionText.textContent = xhr.response.data.creatures.non_food[j].description;
//             heartsRecoveredText.textContent = xhr.response.data.creatures.non_food[j].hearts_recovered;
//             idText.textContent = xhr.response.data.creatures.non_food[j].id;
//             heartsRecovered.className = 'text-align-center';
//             heartsRecoveredText.className = 'text-align-center';

//             // what is being hidden 👇🏼
//             drops.className = 'text-align-center hidden';
//             dropsText.className = 'text-align-center hidden';
//           }
//           // what is being shown 👇🏼

//         }
//       }
//     }

//   });
//   xhr.send();
// }

// function returnEntry(name) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2/entry/' + name);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {

//     console.log('xhr status:', xhr.status);
//     console.log('xhr response:', xhr.response);
//     // image.setAttribute('src', xhr.response.data.image);
//     // if (xhr.response.data.attack !== null) {
//     //   attack.className = 'text-align-center';
//     //   attackText.className = 'text-align-center';
//     //   attackText.textContent = xhr.response.data.attack;
//     // } else {
//     //   attack.className = 'text-align-center hidden';
//     //   attackText.className = 'text-align-center hidden';
//     // }
//     // h2.textContent = xhr.response.data.name;
//     // categoryText.textContent = xhr.response.data.category;
//     // if (typeof xhr.response.data.location === 'array') {
//     //   locationText.textContent = xhr.response.data.common_locations.toString();
//     // }
//     // descriptionText.textContent = xhr.response.data.description;
//     // if (xhr.response.data.drops.length === 0) {
//     //   dropsText.textContent = 'None';
//     // } else if (xhr.response.data.drops.length !== 0) {
//     //   dropsText.textContent = xhr.response.data.drops;
//     // }
//     // idText.textContent = xhr.response.data.id;

//   });
//   xhr.send();
// }

// returnEntry('master sword');

// this function will allow the user to search for entries,
// and display the result on the 'search-result' view 👇🏼

form.addEventListener('click', function (event) {
  event.preventDefault();

  // 1.) "if the search term doesnt match any results, swap view to 'no results' page"

  // 2.)if the category of form.elements.searchbar.value === 'equipment',
  //    returnEquipment()

  // 3.) if the category of form.elements.searchBar.value === 'materials',
  //    returnMaterials()

  // 4.) if the category of form.elements.searchbar.value === 'monsters or treasure
  //    returnTheRest()

});

// NOTES 8/3/22!
// - you need to find a way to hide the "attack" h2 whenever an item is
// searched that is NOT equipment
