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
  controller1.insertIntoHTML()
  console.log(document.getElementById("app").innerHTML)
  assert(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>",
  "returns an item of the list on the HTML page")
}

insertIntoHTMLtest();