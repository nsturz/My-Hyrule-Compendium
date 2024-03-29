document.addEventListener('DOMContentLoaded', function (event) {
  appendLi();
  appendSearchResult(data);
  viewSwap(data.view);

});

var addToCompendiumButton = document.getElementById('add-to-compendium-button');
var myCompendiumButton1 = document.getElementById('my-compendium-button-1');
const myCompendiumButton2 = document.getElementById('my-compendium-button-2');
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
var selectCategory = document.getElementById('select-category');
var notesText = document.getElementById('notes-text');
const notesInput = document.getElementById('edit-note-box');
const overlay = document.getElementById('overlay');
const editModal = document.getElementById('edit-modal-form');
var views = document.querySelectorAll('.views');
var ul = document.querySelector('ul');
const editNoteButton = document.getElementById('edit-icon');
const deleteModal = document.getElementById('delete-modal');
const deleteEntryButton = document.getElementById('delete-entry-button');

var response;

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
      heartsRecovered.className = 'text-align-center hylia-font';
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

function returnEquipment(name) {
  var found = false;
  for (var i = 0; i < response.data.equipment.length; i++) {
    if (name === response.data.equipment[i].name) {
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
  var entryTitle = document.createElement('a');
  entryTitle.className = 'entry-title hylia-font grow';
  entryTitle.setAttribute('id', 'entry-title');
  entryTitle.textContent = entry.name;
  secondRow.appendChild(entryTitle);
  li.appendChild(secondRow);
  return li;
}

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
  editNoteButton.className = 'hidden';
  deleteEntryButton.className = 'delete-entry-button hidden';
  data.view = 'form';
  resetSearchResult();
  data.currentInfo = {};
  data.editing = null;

});

searchForm.addEventListener('submit', event => {
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
  data.currentInfo.notes = notesText.textContent;
  data.currentInfo.photo = image.getAttribute('src');
  data.currentInfo.creatureDetails = selectCategory.value;

  deleteKeys(data.currentInfo);

  data.view = 'search-result';
  document.querySelector('form').reset();
});

function deleteKeys(obj) {
  for (var keys in obj) {
    if ((obj[keys].textContent === 'Data Unavailable') || (obj[keys].textContent === null) ||
    (obj[keys].textContent === '') || (obj[keys].textContent === 'undefined')) {
      delete obj[keys];
    }
  } return obj;
}

myCompendiumButton1.addEventListener('click', function (event) {
  viewSwap('entries');
  data.view = 'entries';
});
myCompendiumButton2.addEventListener('click', function (event) {
  viewSwap('entries');
  data.view = 'entries';
});

backToSearchButtonFooter.addEventListener('click', function (event) {
  viewSwap('form');
  editNoteButton.className = 'hidden';
  deleteEntryButton.className = 'delete-entry-button hidden';
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
  const resultNotes = notesText.textContent;

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
  newEntry.creatureDetails = data.currentInfo.creatureDetails;
  newEntry.notes = resultNotes;
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

ul.addEventListener('click', event => {
  editNoteButton.className = 'edit-icon edit-note-button hylia-font grow';
  data.view = 'search-result';
  if (event.target.matches('#entry-title')) {
    deleteEntryButton.className = 'delete-entry-button hylia-font grow';
    for (let i = 0; i < data.entries.length; i++) {
      if (event.target.textContent === data.entries[i].name &&
      data.entries[i].category === 'equipment') {
        returnEquipment(event.target.textContent);
        data.editing = data.entries[i];
        notesText.textContent = data.entries[i].notes;
      } else if (event.target.textContent === data.entries[i].name &&
        data.entries[i].category === 'monsters') {
        returnMonsters(event.target.textContent);
        data.editing = data.entries[i];
        notesText.textContent = data.entries[i].notes;
      } else if (event.target.textContent === data.entries[i].name &&
        data.entries[i].category === 'materials') {
        returnMaterials(event.target.textContent);
        data.editing = data.entries[i];
        notesText.textContent = data.entries[i].notes;
      } else if (event.target.textContent === data.entries[i].name &&
        data.entries[i].category === 'creatures') {
        if (data.entries[i].creatureDetails === 'critters') {
          returnCreaturesFood(event.target.textContent);
          data.editing = data.entries[i];
          notesText.textContent = data.entries[i].notes;
        } else if (data.entries[i].creatureDetails === 'non-critters') {
          returnCreaturesNonFood(event.target.textContent);
          data.editing = data.entries[i];
          notesText.textContent = data.entries[i].notes;
        }
      } else if (event.target.textContent === data.entries[i].name &&
        data.entries[i].category === 'treasure') {
        returnTreasure(event.target.textContent);
        data.editing = data.entries[i];
        notesText.textContent = data.entries[i].notes;
      }
    } data.currentInfo.loading = loading.textContent;
    data.currentInfo.attack = attackText.textContent;
    data.currentInfo.category = categoryText.textContent;
    data.currentInfo.locations = locationText.textContent;
    data.currentInfo.defense = defenseText.textContent;
    data.currentInfo.cookingEffect = cookingEffectText.textContent;
    data.currentInfo.description = descriptionText.textContent;
    data.currentInfo.heartsRecovered = heartsRecoveredText.textContent;
    data.currentInfo.drops = dropsText.textContent;
    data.currentInfo.id = idText.textContent;
    data.currentInfo.photo = image.getAttribute('src');
    data.currentInfo.creatureDetails = selectCategory.value;

    deleteKeys(data.currentInfo);
  }
});

editNoteButton.addEventListener('click', event => {
  overlay.className = 'overlay';
  editModal.className = 'edit-modal-wrapper column-full absolute';
  notesInput.value = notesText.textContent;

});

// this event listener allows you to edit notes on entries 👇🏼
editModal.addEventListener('click', event => {
  if (event.target.matches('#edit-cancel-button')) {
    overlay.className = 'overlay hidden';
    editModal.className = 'views edit-modal-wrapper column-full absolute hidden';
  }
  if (event.target.matches('#edit-confirm-button')) {
    const editedEntry = {};
    editedEntry.name = data.currentInfo.loading;
    editedEntry.attack = data.currentInfo.attack;
    editedEntry.category = data.currentInfo.category;
    editedEntry.cookingEffect = data.currentInfo.cookingEffect;
    editedEntry.creatureDetails = data.currentInfo.creatureDetails;
    editedEntry.defense = data.currentInfo.defense;
    editedEntry.description = data.currentInfo.description;
    editedEntry.drops = data.currentInfo.drops;
    editedEntry.entryId = data.editing.entryId;
    editedEntry.heartsRecorvered = data.currentInfo.heartsRecovered;
    editedEntry.id = data.currentInfo.id;
    editedEntry.locations = data.currentInfo.locations;
    editedEntry.notes = notesInput.value;
    editedEntry.photo = data.currentInfo.photo;

    notesText.textContent = notesInput.value;
    deleteKeys(editedEntry);

    for (let i = 0; i < data.entries.length; i++) {
      if (data.editing.entryId === data.entries[i].entryId) {
        data.entries[i] = editedEntry;
      }
    }
    overlay.className = 'overlay hidden';
    editModal.className = 'edit-modal-wrapper column-full absolute hidden';
  }
});

deleteEntryButton.addEventListener('click', event => {
  overlay.className = 'overlay';
  deleteModal.className = 'delete-modal-wrapper column-full absolute';
});

// this event listener allows you to delete entries 👇🏼
deleteModal.addEventListener('click', event => {
  if (event.target.matches('#delete-cancel-button')) {
    overlay.className = 'overlay hidden';
    deleteModal.className = 'delete -modal - wrapper column - full absolute hidden';
  } else if (event.target.matches('#delete-confirm-button')) {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        const lis = document.querySelectorAll('li');
        const toBeDeleted = lis[i];
        ul.removeChild(toBeDeleted);
        data.entries.splice(i, 1);
        overlay.className = 'overlay hidden';
        deleteModal.className = 'delete-modal-wrapper column-full absolute hidden';
        data.editing = null;
        viewSwap('entries');
        data.view = 'entries';
      }
    }
  }
});
