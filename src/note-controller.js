// var element = document.getElementById("app")
// element.innerHTML = "howdy"
class NoteController {

  constructor (noteList){
    this.noteList = noteList;
    this.noteList.create("Favourite drink: seltzer")
    this.noteListView = new NoteListView(noteList)
  }

  insertIntoHTML(){
      var html = this.noteListView.outputToHtml()
      var element = document.getElementById("app")
      element.innerHTML = html
  }

}
