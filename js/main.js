document.addEventListener('DOMContentLoaded', function (event) {
  appendLi();
  appendSearchResult(data);
  viewSwap(data.view);
});

var addToCompendiumButton = document.getElementById('add-to-compendium-button');
var myCompendiumButtons = document.querySelectorAll('.my-compendium-button');
// var backToSearch = document.querySelector('a');
var backToSeachButton = document.getElementById('back-to-search-button');
var backToSearchButtonFooter = document.getElementById('back-to-search-button-footer');
var searchForm = document.getElementById('search-form');
var loading = document.getElementById('loading');
var image = document.getElementById('result-image');
var attack = document.getElementById('attack');
var attackText = document.getElementById('attack-text');
var categoryText = document.getElementById('category-text');
var locationText = document.getElementById('location-text');
var defense = document.getElementById('defense');
var defenseText = document.getElementById('defense-text');
var cookingEffect = document.getElementById('cooking-effect');
var cookingEffectText = document.getElementById('cooking-effect-text');
var descriptionText = document.getElementById('description-text');
var heartsRecovered = document.getElementById('hearts-recovered');
var heartsRecoveredText = document.getElementById('hearts-recovered-text');
var drops = document.getElementById('drops');
var dropsText = document.getElementById('drops-text');
var idText = document.getElementById('id-text');
var mainTitle = document.getElementById('main-title');
// var searchBar = document.getElementById('search-bar');
var selectCategory = document.getElementById('select-category');
// var submitButton = document.getElementById('submit-button');
// var notesText = document.getElementById('notes-text');
var views = document.querySelectorAll('.views');
var ul = document.querySelector('ul');

var response;

// this function searches the entire compendium - for research purposes 👇🏼
function returnCompendium() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://botw-compendium.herokuapp.com/api/v2' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    response = xhr.response;

  });
  xhr.send();
}

returnCompendium();
// this function searches for materials 👇🏼

function returnMaterials(name) {
  var found = false;
  for (var i = 0; i < response.data.materials.length; i++) {
    if (name === response.data.materials[i].name) {
      found = true;
      // what is being shown 👇🏼
      loading.textContent = response.data.materials[i].name;
      image.setAttribute('src', response.data.materials[i].image);
      categoryText.textContent = response.data.materials[i].category;
      locationText.textContent = response.data.materials[i].common_locations;
      cookingEffectText.textContent = response.data.materials[i].cooking_effect;
      descriptionText.textContent = response.data.materials[i].description;
      heartsRecoveredText.textContent = response.data.materials[i].hearts_recovered;
      idText.textContent = response.data.materials[i].id;
      heartsRecovered.className = 'text-align-center';
      heartsRecoveredText.className = 'text-align-center';

      // what is being hidden 👇🏼
      drops.className = 'text-align-center hidden';
      dropsText.className = 'text-align-center hidden';
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
      defense.className = 'text-align-center hidden';
      defenseText.className = 'text-align-center hidden';
    }
  } if (!found) {
    viewSwap('no-result');
    document.querySelector('form').reset();
  } else if (found) {
    viewSwap('search-result');
  }
}
// // this function searches for creatures that are categorized as food👇🏼
function returnCreaturesFood(name) {
  var found = false;
  for (var i = 0; i < response.data.creatures.food.length; i++) {
    if (name === response.data.creatures.food[i].name) {
      found = true;
      // what is being shown 👇🏼
      loading.textContent = response.data.creatures.food[i].name;
      image.setAttribute('src', response.data.creatures.food[i].image);
      categoryText.textContent = response.data.creatures.food[i].category;
      locationText.textContent = response.data.creatures.food[i].common_locations;
      cookingEffectText.textContent = response.data.creatures.food[i].cooking_effect;
      descriptionText.textContent = response.data.creatures.food[i].description;
      heartsRecoveredText.textContent = response.data.creatures.food[i].hearts_recovered;
      idText.textContent = response.data.creatures.food[i].id;
      heartsRecovered.className = 'text-align-center';
      heartsRecoveredText.className = 'text-align-center';

      // what is being hidden 👇🏼
      drops.className = 'text-align-center hidden';
      dropsText.className = 'text-align-center hidden';
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
      defense.className = 'text-align-center hidden';
      defenseText.className = 'text-align-center hidden';
    }
  } if (!found) {
    viewSwap('no-result');
    document.querySelector('form').reset();
  } else if (found) {
    viewSwap('search-result');
  }
}

// // this function returns creatures that are categorized as non food 👇🏼
function returnCreaturesNonFood(name) {
  var found = false;
  for (var i = 0; i < response.data.creatures.non_food.length; i++) {
    if (name === response.data.creatures.non_food[i].name) {
      found = true;
      // what is being shown 👇🏼
      loading.textContent = response.data.creatures.non_food[i].name;
      image.setAttribute('src', response.data.creatures.non_food[i].image);
      categoryText.textContent = response.data.creatures.non_food[i].category;
      locationText.textContent = response.data.creatures.non_food[i].common_locations;
      descriptionText.textContent = response.data.creatures.non_food[i].description;
      drops.className = 'text-align-center';
      dropsText.className = 'text-align-center';
      dropsText.textContent = response.data.creatures.non_food[i].drops;
      heartsRecoveredText.textContent = response.data.creatures.non_food[i].hearts_recovered;
      idText.textContent = response.data.creatures.non_food[i].id;
      heartsRecovered.className = 'text-align-center';
      heartsRecoveredText.className = 'text-align-center';

      // what is being hidden 👇🏼
      cookingEffectText.className = 'text-align-center hidden';
      cookingEffect.className = 'text-align-center hidden';
      heartsRecovered.className = 'text-align-center hidden';
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
      defense.className = 'text-align-center hidden';
      defenseText.className = 'text-align-center hidden';
    }
  } if (!found) {
    viewSwap('no-result');
    document.querySelector('form').reset();
  } else if (found) {
    viewSwap('search-result');
  }
}

// // this function returns equipment 👇🏼
function returnEquipment(name) {
  var found = false;
  for (var i = 0; i < response.data.equipment.length; i++) {
    if (name === response.data.equipment[i].name) {
      // console.log('xhr response:', xhr.response.data.equipment[i]);
      found = true;
      // what is being shown 👇🏼
      viewSwap('search-result');
      loading.textContent = response.data.equipment[i].name;
      image.setAttribute('src', response.data.equipment[i].image);
      attackText.textContent = response.data.equipment[i].attack;
      categoryText.textContent = response.data.equipment[i].category;
      locationText.textContent = response.data.equipment[i].common_locations;
      defenseText.textContent = response.data.equipment[i].defense;
      descriptionText.textContent = response.data.equipment[i].description;
      idText.textContent = response.data.equipment[i].id;

      // what is being hidden 👇🏼
      drops.className = 'text-align-center hidden';
      dropsText.className = 'text-align-center hidden';
      cookingEffect.className = 'text-align-center hidden';
      cookingEffectText.className = 'text-align-center hidden';
      heartsRecovered.className = 'text-align-center hidden';
      heartsRecoveredText.className = 'text-align-center hidden';
    } if (!found) {
      viewSwap('no-result');
      document.querySelector('form').reset();
    } else if (found) {
      viewSwap('search-result');
    }
  }
}

// this function returns monsters 👇🏼
function returnMonsters(name) {
  var found = false;
  for (var i = 0; i < response.data.monsters.length; i++) {
    if (name === response.data.monsters[i].name) {
      found = true;
      // what is being shown 👇🏼
      loading.textContent = response.data.monsters[i].name;
      image.setAttribute('src', response.data.monsters[i].image);
      categoryText.textContent = response.data.monsters[i].category;
      locationText.textContent = response.data.monsters[i].common_locations;
      defenseText.textContent = response.data.monsters[i].defense;
      descriptionText.textContent = response.data.monsters[i].description;
      dropsText.textContent = response.data.monsters[i].drops;
      idText.textContent = response.data.monsters[i].id;

      // what is being hidden 👇🏼
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
      defense.className = 'text-align-center hidden';
      cookingEffect.className = 'text-align-center hidden';
      cookingEffectText.className = 'text-align-center hidden';
      heartsRecovered.className = 'text-align-center hidden';
      heartsRecoveredText.className = 'text-align-center hidden';
    }
  } if (!found) {
    viewSwap('no-result');
    document.querySelector('form').reset();
  } else if (found) {
    viewSwap('search-result');
  }
}

// this function returns treasure 👇🏼
function returnTreasure(name) {
  var found = false;
  for (var i = 0; i < response.data.treasure.length; i++) {
    if (name === response.data.treasure[i].name) {
      found = true;
      // what is being shown 👇🏼
      loading.textContent = response.data.treasure[i].name;
      image.setAttribute('src', response.data.treasure[i].image);
      categoryText.textContent = response.data.treasure[i].category;
      locationText.textContent = response.data.treasure[i].common_locations;
      defenseText.textContent = response.data.treasure[i].defense;
      descriptionText.textContent = response.data.treasure[i].description;
      dropsText.textContent = response.data.treasure[i].drops;
      idText.textContent = response.data.treasure[i].id;

      // what is being hidden 👇🏼
      attack.className = 'text-align-center hidden';
      attackText.className = 'text-align-center hidden';
      defense.className = 'text-align-center hidden';
      cookingEffect.className = 'text-align-center hidden';
      cookingEffectText.className = 'text-align-center hidden';
      heartsRecovered.className = 'text-align-center hidden';
      heartsRecoveredText.className = 'text-align-center hidden';
    }
  } if (!found) {
    viewSwap('no-result');
    document.querySelector('form').reset();
  } else if (found) {
    viewSwap('search-result');
  }
}

// you may need to update this function once you add the ENTRIES VIEW👇🏼
function viewSwap(string) {
  for (var i = 0; i < views.length; i++) {
    if (views[i].getAttribute('data-view') === string) {
      views[i].classList.remove('hidden');
    } else {
      views[i].classList.add('hidden');
    }
  }
}

function resetSearchResult() {
  attackText.textContent = 'Data Unavailabe';
  categoryText.textContent = 'Data Unavailable';
  locationText.textContent = 'Data Unavailable';
  defenseText.textContent = 'Data Unavailable';
  cookingEffectText.textContent = 'Data Unavailable';
  descriptionText.textContent = 'Data Unavailable';
  heartsRecoveredText.textContent = 'Data Unavailable';
  dropsText.textContent = 'Data Unavailable';
  idText.textContent = 'Data Unavailable';
  image.setAttribute('src', 'images/triforce.png');
  loading.textContent = 'loading...';

}

// this funtion creates new entries for the DOM 👇🏼
function renderEntry(entry) {
  var li = document.createElement('li');
  li.className = 'column-one-third';
  li.setAttribute('entry-id', entry.entryId);
  var row = document.createElement('div');
  row.className = 'row justify-center image-wrapper';
  var img = document.createElement('img');
  img.setAttribute('src', entry.photo);
  img.className = 'entry-image';
  row.appendChild(img);
  li.appendChild(row);
  var secondRow = document.createElement('div');
  secondRow.className = 'row justify-center';
  var h4 = document.createElement('h4');
  h4.className = 'entry-title';
  h4.setAttribute('id', 'entry-title');
  h4.textContent = entry.name;
  secondRow.appendChild(h4);
  li.appendChild(secondRow);
  return li;
}

// this function  adds the new entry to the current list of
// entries 👇🏼
function appendLi() {
  for (var i = 0; i < data.entries.length; i++) {
    var newDomTree = renderEntry(data.entries[i]);

    ul.appendChild(newDomTree);

  }
}
function appendSearchResult(object) {
  if (data.currentInfo.category === 'equipment') {
    loading.textContent = object.currentInfo.loading;
    image.setAttribute('src', object.currentInfo.photo);
    attackText.textContent = object.currentInfo.attack;
    categoryText.textContent = object.currentInfo.category;
    locationText.textContent = object.currentInfo.locations;
    defenseText.textContent = object.currentInfo.defense;
    descriptionText.textContent = object.currentInfo.description;
    idText.textContent = object.currentInfo.id;

    // what is being hidden 👇🏼
    drops.className = 'text-align-center hidden';
    dropsText.className = 'text-align-center hidden';
    cookingEffect.className = 'text-align-center hidden';
    cookingEffectText.className = 'text-align-center hidden';
    heartsRecovered.className = 'text-align-center hidden';
    heartsRecoveredText.className = 'text-align-center hidden';
  } else if (data.currentInfo.category === 'monsters') {
    loading.textContent = data.currentInfo.loading;
    image.setAttribute('src', data.currentInfo.photo);
    categoryText.textContent = data.currentInfo.category;
    locationText.textContent = data.currentInfo.locations;
    defenseText.textContent = data.currentInfo.defense;
    descriptionText.textContent = data.currentInfo.description;
    dropsText.textContent = data.currentInfo.drops;
    idText.textContent = data.currentInfo.id;

    // what is being hidden 👇🏼
    attack.className = 'text-align-center hidden';
    attackText.className = 'text-align-center hidden';
    defense.className = 'text-align-center hidden';
    cookingEffect.className = 'text-align-center hidden';
    cookingEffectText.className = 'text-align-center hidden';
    heartsRecovered.className = 'text-align-center hidden';
    heartsRecoveredText.className = 'text-align-center hidden';
  } else if (data.currentInfo.category === 'materials') {
    loading.textContent = data.currentInfo.loading;
    image.setAttribute('src', data.currentInfo.photo);
    categoryText.textContent = data.currentInfo.category;
    locationText.textContent = data.currentInfo.locations;
    cookingEffectText.textContent = data.currentInfo.cookingEffect;
    descriptionText.textContent = data.currentInfo.description;
    heartsRecoveredText.textContent = data.currentInfo.heartsRecovered;
    idText.textContent = data.currentInfo.id;
    heartsRecovered.className = 'text-align-center';
    heartsRecoveredText.className = 'text-align-center';

    // what is being hidden 👇🏼
    drops.className = 'text-align-center hidden';
    dropsText.className = 'text-align-center hidden';
    attack.className = 'text-align-center hidden';
    attackText.className = 'text-align-center hidden';
    defense.className = 'text-align-center hidden';
    defenseText.className = 'text-align-center hidden';
  } else if (data.currentInfo.category === 'creatures') {
    // what is beign shown 👇🏼
    loading.textContent = data.currentInfo.loading;
    image.setAttribute('src', data.currentInfo.photo);
    categoryText.textContent = data.currentInfo.category;
    locationText.textContent = data.currentInfo.locations;
    cookingEffectText.textContent = data.currentInfo.cookingEffect;
    descriptionText.textContent = data.currentInfo.description;
    heartsRecoveredText.textContent = data.currentInfo.heartsRecovered;
    idText.textContent = data.currentInfo.id;
    // what is being hidden 👇🏼
    drops.className = 'text-align-center hidden';
    dropsText.className = 'text-align-center hidden';
    attack.className = 'text-align-center hidden';
    attackText.className = 'text-align-center hidden';
    defense.className = 'text-align-center hidden';
    defenseText.className = 'text-align-center hidden';
  } else if (data.currentInfo.category === 'treasure') {
    // what is being shown 👇🏼
    loading.textContent = data.currentInfo.loading;
    image.setAttribute('src', data.currentInfo.photo);
    categoryText.textContent = data.currentInfo.category;
    locationText.textContent = data.currentInfo.locations;
    defenseText.textContent = data.currentInfo.defense;
    descriptionText.textContent = data.currentInfo.description;
    dropsText.textContent = data.currentInfo.drops;
    idText.textContent = data.currentInfo.id;

    // what is being hidden 👇🏼
    attack.className = 'text-align-center hidden';
    attackText.className = 'text-align-center hidden';
    defense.className = 'text-align-center hidden';
    cookingEffect.className = 'text-align-center hidden';
    cookingEffectText.className = 'text-align-center hidden';
    heartsRecovered.className = 'text-align-center hidden';
    heartsRecoveredText.className = 'text-align-center hidden';
  }
}
backToSeachButton.addEventListener('click', function (event) {
  viewSwap('form');
  resetSearchResult();
});

mainTitle.addEventListener('click', function (event) {
  viewSwap('form');
  data.view = 'form';
  resetSearchResult();
  data.currentInfo = {};

});

// // // this function will allow the user to search for entries,
// // // and display the result on the 'search-result' view 👇🏼

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var searchBarInput = searchForm.elements['search-bar'].value;
  searchBarInput.toLowerCase();

  if (selectCategory.value === 'monsters') {
    returnMonsters(searchBarInput);
  } else if (selectCategory.value === 'equipment') {
    returnEquipment(searchBarInput.toLowerCase());
  } else if (selectCategory.value === 'materials') {
    returnMaterials(searchBarInput.toLowerCase());
  } else if (selectCategory.value === 'critters') {
    returnCreaturesFood(searchBarInput.toLowerCase());
  } else if (selectCategory.value === 'non-critters') {
    returnCreaturesNonFood(searchBarInput.toLowerCase());
  } else if (selectCategory.value === 'treasure') {
    returnTreasure(searchBarInput.toLowerCase());
  }
  data.currentInfo.loading = loading.textContent;
  data.currentInfo.attack = attackText.textContent;
  data.currentInfo.category = categoryText.textContent;
  data.currentInfo.locations = locationText.textContent;
  data.currentInfo.defense = defenseText.textContent;
  data.currentInfo.cookingEffect = cookingEffectText.textContent;
  data.currentInfo.description = descriptionText.textContent;
  data.currentInfo.heartsRecovered = heartsRecoveredText.textContent;
  data.currentInfo.drops = dropsText.textContent;
  data.currentInfo.id = idText.textContent;
  // data.currentInfo.notesText = notesText.textContent;
  data.currentInfo.photo = image.getAttribute('src');

  deleteKeys(data.currentInfo);

  data.view = 'search-result';
  document.querySelector('form').reset();
});

// this function deletes unneeded keys from an object👇🏼
function deleteKeys(obj) {
  for (var keys in obj) {
    if ((obj[keys].textContent === 'Data Unavailable') || (obj[keys].textContent === null) ||
    (obj[keys].textContent === '') || (obj[keys].textContent === 'undefined')) {
      delete obj[keys];
    }
  } return obj;
}

// this for loop allows the "my compendium" buttons to do the same thing 👇🏼
for (var i = 0; i < myCompendiumButtons.length; i++) {
  myCompendiumButtons[i].addEventListener('click', function (event) {
    viewSwap('entries');
    data.view = 'entries';
  });
}

// this for loop allows the "back to search" buttons in the footer
// to do the same thing 👇🏼 its a 'j' because the loop above is using 'i'

backToSearchButtonFooter.addEventListener('click', function (event) {
  viewSwap('form');
  data.view = 'form';
  resetSearchResult();
});

addToCompendiumButton.addEventListener('click', function (event) {

  var resultName = loading.textContent;
  var resultCategory = categoryText.textContent;
  var resultLocation = locationText.textContent;
  var resultDefense = defenseText.textContent;
  var resultCookingeffect = cookingEffectText.textContent;
  var resultDescription = descriptionText.textContent;
  var resultHeartsRecovered = heartsRecoveredText.textContent;
  var resultDrops = dropsText.textContent;
  var resultId = idText.textContent;
  var resultImage = image.getAttribute('src');

  // you will eventually need to re structure this callback function to include
  // this conditional 👇🏼
  // if(data.editing !== null){

  // } else{

  // }

  var newEntry = {};
  newEntry.name = resultName;
  newEntry.category = resultCategory;
  newEntry.location = resultLocation;
  newEntry.defense = resultDefense;
  newEntry.cookingEffect = resultCookingeffect;
  newEntry.description = resultDescription;
  newEntry.heartsRecovered = resultHeartsRecovered;
  newEntry.drops = resultDrops;
  newEntry.id = resultId;
  newEntry.photo = resultImage;
  newEntry.entryId = data.nextEntryId;
  data.nextEntryId++;
  deleteKeys(newEntry);
  data.entries.push(newEntry);
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  appendLi();
  viewSwap('entries');
  data.view = 'entries';
});

// ul.addEventListener('click', event => {
//   if (event.target.matches('#entry-title')) {
//     console.log('clicked');
//     console.log(event.target.textContent);
//     returnMonsters('calamity ganon');
//     // for (let i = 0; i < data.entries.length; i++) {
//     //   if (event.target.textContent === data.entries[0] &&
//     //   data.entries[i].category === 'equipment') {
//     //     returnEquipment(event.target.textContent);
//     //   }
//     // }
//   }
// });
