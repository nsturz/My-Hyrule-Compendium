/* exported data */

var data = {
  editing: null,
  entries: [],
  nextEntryId: 1,
  view: 'form',
  currentInfo: {
    loading: 'test'
  }
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('ajax-project-local-storage', dataJSON);
});

var previousEntriesJSON = localStorage.getItem('ajax-project-local-storage');
if (previousEntriesJSON !== null) {
  data = JSON.parse(previousEntriesJSON);
}
