function noteList() {
 
 var noteListdouble = new NoteList;
 var controller = new NoteController(noteListdouble)
 assert(controller instanceof NoteController,
   "returns a note list object as a string")
}

noteList()


function renderSingleNotetest() {
  var noteList = new NoteList
  noteList.create("this a test which is more than 20 char")
  var controller1 = new NoteController(noteList);
  controller1.insertIntoHTML()
  document.getElementById("0").click()
  controller1.renderSingleNote()
  assert(document.getElementById("app").innerHTML == "<div>this a test which is more than 20 char</div>", 
  "render a single note clicked")
}

renderSingleNotetest()