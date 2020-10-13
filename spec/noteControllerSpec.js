function noteList() {
 
 var noteListdouble = new NoteList;
 noteListdouble.create("hello!")
 var controller = new NoteController(noteListdouble)
 assert(controller.noteList.returnList()[0] === noteListdouble,
   "returns a note list object as a string")
}

noteList()

function insertIntoHTMLtest() {
  var noteList = {text: ["Favourite drink: seltzer"]}
  var controller = new NoteController(noteList);
  controller.insertIntoHTML()
  assert(document.getElementById("app") === "Favourite drink: seltzer",
  "returns an item of the list on the HTML page")
}

insertIntoHTMLtest();