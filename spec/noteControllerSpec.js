function noteList() {
 
 var noteListdouble = new NoteList;
 var controller = new NoteController(noteListdouble)
 assert(controller instanceof NoteController,
   "returns a note list object as a string")
}

noteList()

function insertIntoHTMLtest() {
  var noteList = new NoteList
  var controller1 = new NoteController(noteList);
  var test = controller1.insertIntoHTML()
  assert(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: sel</div></li></ul>",
  "returns an item of the list on the HTML page")
}

insertIntoHTMLtest();