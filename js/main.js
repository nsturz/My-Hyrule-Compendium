// var form = document.querySelector('form');
// var h2 = document.querySelector('h2');
// var image = document.getElementById('result-image');
// var attack = document.getElementById('attack');
// var attackText = document.getElementById('attack-text');
// var categoryText = document.getElementById('category-text');
// var locationText = document.getElementById('location-text');
// var defense = document.getElementById('defense');
// var defenseText = document.getElementById('defense-text');
// var cookingEffect = document.getElementById('cooking-effect');
// var cookingEffectText = document.getElementById('cooking-effect-text');
// var descriptionText = document.getElementById('description-text');
// var heartsRecovered = document.getElementById('hearts-recovered');
// var heartsRecoveredText = document.getElementById('hearts-recovered-text');
// var drops = document.getElementById('drops');
// var dropsText = document.getElementById('drops-text');
// var idText = document.getElementById('id-text');
// // var notesText = document.getElementById('notes-text');

// // this function searches the entire compendium - for research purposes 👇🏼
// function returnCompendium() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', function () {
//     // console.log('xhr response:', xhr.response);
//     // console.log('xhr response length:', xhr.response.datalength);
//   });
//   xhr.send();
// }

// // returnCompendium();

// // // this function searches for materials 👇🏼
// // // function returnMaterials(name) {
// // //   var xhr = new XMLHttpRequest();
// // //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// // //   xhr.responseType = 'json';
// // //   xhr.addEventListener('load', function () {
// // //     for (var i = 0; i < xhr.response.data.materials.length; i++) {
// // //       if (name === xhr.response.data.materials[i].name) {
// // //         // what is being shown 👇🏼
// // //         h2.textContent = xhr.response.data.materials[i].name;
// // //         image.setAttribute('src', xhr.response.data.materials[i].image);
// // //         categoryText.textContent = xhr.response.data.materials[i].category;
// // //         locationText.textContent = xhr.response.data.materials[i].common_locations;
// // //         cookingEffectText.textContent = xhr.response.data.materials[i].cooking_effect;
// // //         descriptionText.textContent = xhr.response.data.materials[i].description;
// // //         heartsRecoveredText.textContent = xhr.response.data.materials[i].hearts_recovered;
// // //         idText.textContent = xhr.response.data.materials[i].id;
// // //         heartsRecovered.className = 'text-align-center';
// // //         heartsRecoveredText.className = 'text-align-center';

// // //         // what is being hidden 👇🏼
// // //         drops.className = 'text-align-center hidden';
// // //         dropsText.className = 'text-align-center hidden';
// // //         attack.className = 'text-align-center hidden';
// // //         attackText.className = 'text-align-center hidden';
// // //         defense.className = 'text-align-center hidden';
// // //         defenseText.className = 'text-align-center hidden';

// // //       } else {
// // //         // view swap to the "your search did not match any results" page
// // //         // console.log('your search did not match any results');
// // //       }
// // //     }

// // //   });
// // //   xhr.send();
// // // }

// // // returnMaterials('hearty durian');

// // // this function searches for creatures 👇🏼

// // // this function searches for creatures that are categorized as food👇🏼
// // function returnCreaturesFood(name) {
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// //   xhr.responseType = 'json';
// //   xhr.addEventListener('load', function () {
// //     for (var i = 0; i < xhr.response.data.creatures.food.length; i++) {
// //       if (name === xhr.response.data.creatures.food[i].name) {
// //         // what is being shown 👇🏼
// //         h2.textContent = xhr.response.data.creatures.food[i].name;
// //         image.setAttribute('src', xhr.response.data.creatures.food[i].image);
// //         categoryText.textContent = xhr.response.data.creatures.food[i].category;
// //         locationText.textContent = xhr.response.data.creatures.food[i].common_locations;
// //         cookingEffectText.textContent = xhr.response.data.creatures.food[i].cooking_effect;
// //         descriptionText.textContent = xhr.response.data.creatures.food[i].description;
// //         heartsRecoveredText.textContent = xhr.response.data.creatures.food[i].hearts_recovered;
// //         idText.textContent = xhr.response.data.creatures.food[i].id;
// //         heartsRecovered.className = 'text-align-center';
// //         heartsRecoveredText.className = 'text-align-center';

// //         // what is being hidden 👇🏼
// //         drops.className = 'text-align-center hidden';
// //         dropsText.className = 'text-align-center hidden';
// //         attack.className = 'text-align-center hidden';
// //         attackText.className = 'text-align-center hidden';
// //         defense.className = 'text-align-center hidden';
// //         defenseText.className = 'text-align-center hidden';
// //       }
// //     }

// //   });
// //   xhr.send();
// // }

// // // returnCreaturesFood('fireproof lizard');

// // // this function returns creatures that are categorized as non food 👇🏼
// // function returnCreaturesNonFood(name) {
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// //   xhr.responseType = 'json';
// //   xhr.addEventListener('load', function () {
// //     for (var i = 0; i < xhr.response.data.creatures['non-food'].length; i++) {
// //       if (name === xhr.response.data.creatures['non-food'][i].name) {
// //         // what is being shown 👇🏼
// //         h2.textContent = xhr.response.data.creatures['non-food'][i].name;
// //         image.setAttribute('src', xhr.response.data.creatures['non-food'][i].image);
// //         categoryText.textContent = xhr.response.data.creatures['non-food'][i].category;
// //         locationText.textContent = xhr.response.data.creatures['non-food'][i].common_locations;
// //         descriptionText.textContent = xhr.response.data.creatures['non-food'][i].description;
// //         drops.className = 'text-align-center';
// //         dropsText.className = 'text-align-center';
// //         dropsText.textContent = xhr.response.data.creatures['non-food'][i].drops;
// //         heartsRecoveredText.textContent = xhr.response.data.creatures['non-food'][i].hearts_recovered;
// //         idText.textContent = xhr.response.data.creatures['non-food'][i].id;
// //         heartsRecovered.className = 'text-align-center';
// //         heartsRecoveredText.className = 'text-align-center';

// //         // what is being hidden 👇🏼
// //         cookingEffectText.className = 'text-align-center hidden';
// //         cookingEffect.className = 'text-align-center hidden';
// //         heartsRecovered.className = 'text-align-center hidden';
// //         attack.className = 'text-align-center hidden';
// //         attackText.className = 'text-align-center hidden';
// //         defense.className = 'text-align-center hidden';
// //         defenseText.className = 'text-align-center hidden';
// //       }
// //     }

// //   });
// //   xhr.send();
// // }
// // // returnCreaturesNonFood('cucco');

// // // this function returns equipment 👇🏼
// // function returnEquipment(name) {
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// //   xhr.responseType = 'json';
// //   xhr.addEventListener('load', function () {
// //     for (var i = 0; i < xhr.response.data.equipment.length; i++) {
// //       if (name === xhr.response.data.equipment[i].name) {
// //         // what is being shown 👇🏼
// //         h2.textContent = xhr.response.data.equipment[i].name;
// //         image.setAttribute('src', xhr.response.data.equipment[i].image);
// //         attackText.textContent = xhr.response.data.equipment[i].attack;
// //         categoryText.textContent = xhr.response.data.equipment[i].category;
// //         locationText.textContent = xhr.response.data.equipment[i].common_locations;
// //         defenseText.textContent = xhr.response.data.equipment[i].defense;
// //         descriptionText.textContent = xhr.response.data.equipment[i].description;
// //         idText.textContent = xhr.response.data.equipment[i].id;

// //         // what is being hidden 👇🏼
// //         drops.className = 'text-align-center hidden';
// //         dropsText.className = 'text-align-center hidden';
// //         cookingEffect.className = 'text-align-center hidden';
// //         cookingEffectText.className = 'text-align-center hidden';
// //         heartsRecovered.className = 'text-align-center hidden';
// //         heartsRecoveredText.className = 'text-align-center hidden';

// //       } else {
// //         // view swap to the "your search did not match any results" page
// //         // console.log('your search did not match any results');
// //       }
// //     }

// //   });
// //   xhr.send();
// // }

// // // returnEquipment('cobble crusher');

// // // this function returns monsters 👇🏼
// // function returnMonsters(name) {
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// //   xhr.responseType = 'json';
// //   xhr.addEventListener('load', function () {
// //     for (var i = 0; i < xhr.response.data.monsters.length; i++) {
// //       if (name === xhr.response.data.monsters[i].name) {
// //         // what is being shown 👇🏼
// //         h2.textContent = xhr.response.data.monsters[i].name;
// //         image.setAttribute('src', xhr.response.data.monsters[i].image);
// //         categoryText.textContent = xhr.response.data.monsters[i].category;
// //         locationText.textContent = xhr.response.data.monsters[i].common_locations;
// //         defenseText.textContent = xhr.response.data.monsters[i].defense;
// //         descriptionText.textContent = xhr.response.data.monsters[i].description;
// //         dropsText.textContent = xhr.response.data.monsters[i].drops;
// //         idText.textContent = xhr.response.data.monsters[i].id;

// //         // what is being hidden 👇🏼
// //         attack.className = 'text-align-center hidden';
// //         attackText.className = 'text-align-center hidden';
// //         defense.className = 'text-align-center hidden';
// //         cookingEffect.className = 'text-align-center hidden';
// //         cookingEffectText.className = 'text-align-center hidden';
// //         heartsRecovered.className = 'text-align-center hidden';
// //         heartsRecoveredText.className = 'text-align-center hidden';

// //       } else {
// //         // view swap to the "your search did not match any results" page
// //         // console.log('your search did not match any results');
// //       }
// //     }

// //   });
// //   xhr.send();
// // }

// // // returnMonsters('sentry');

// // // this function returns treasure 👇🏼
// // function returnTreasure(name) {
// //   var xhr = new XMLHttpRequest();
// //   xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
// //   xhr.responseType = 'json';
// //   xhr.addEventListener('load', function () {
// //     for (var i = 0; i < xhr.response.data.treasure.length; i++) {
// //       if (name === xhr.response.data.treasure[i].name) {
// //         // what is being shown 👇🏼
// //         h2.textContent = xhr.response.data.treasure[i].name;
// //         image.setAttribute('src', xhr.response.data.treasure[i].image);
// //         categoryText.textContent = xhr.response.data.treasure[i].category;
// //         locationText.textContent = xhr.response.data.treasure[i].common_locations;
// //         defenseText.textContent = xhr.response.data.treasure[i].defense;
// //         descriptionText.textContent = xhr.response.data.treasure[i].description;
// //         dropsText.textContent = xhr.response.data.treasure[i].drops;
// //         idText.textContent = xhr.response.data.treasure[i].id;

// //         // what is being hidden 👇🏼
// //         attack.className = 'text-align-center hidden';
// //         attackText.className = 'text-align-center hidden';
// //         defense.className = 'text-align-center hidden';
// //         cookingEffect.className = 'text-align-center hidden';
// //         cookingEffectText.className = 'text-align-center hidden';
// //         heartsRecovered.className = 'text-align-center hidden';
// //         heartsRecoveredText.className = 'text-align-center hidden';

// //       } else {
// //         // view swap to the "your search did not match any results" page
// //         // console.log('your search did not match any results');
// //       }
// //     }

// //   });
// //   xhr.send();
// // }

// // // returnEntry('master sword');

// // // this function will allow the user to search for entries,
// // // and display the result on the 'search-result' view 👇🏼

// // form.addEventListener('click', function (event) {
// //   event.preventDefault();

// //   // 1.) "if the search term doesnt match any results, swap view to 'no results' page"

// //   // 2.)if the category of form.elements.searchbar.value === 'equipment',
// //   //    returnEquipment()

// //   // 3.) if the category of form.elements.searchBar.value === 'materials',
// //   //    returnMaterials()

// //   // 4.) if the category of form.elements.searchbar.value === 'monsters or treasure
// //   //    returnTheRest()

// // });

// // // NOTES 8/3/22!
// // // - you need to find a way to hide the "attack" h2 whenever an item is
// // // searched that is NOT equipment
