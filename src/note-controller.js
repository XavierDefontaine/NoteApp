var noteList;
var noteController;
document.addEventListener("DOMContentLoaded", function () {
  noteList = new NoteList();
  noteController = new NoteController(noteList);
  window.addEventListener("submit", function (event) {
    event.preventDefault();
    noteController.addNote(document.getElementById("new_note").value);
    noteController.insertIntoHTML();
  });
  window.addEventListener("hashchange", function () {
    noteController.insertIntoHTMLNote(
      "app",
      noteController.singleNoteHTML(
        noteController._getNoteModel(noteController._idFromURL())
      )
    );
  });
});

class NoteController {
  constructor(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  addNote(text) {
    this.noteList.create(text);
  }

  getSubmittedText(callback) {
    let message;
    document
      .getElementById("text")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        message = document.getElementById("new_note").value;
        console.log(message);
        callback(message);
      });
  }

  insertIntoHTML() {
    var html = this.noteListView.outputToHtml();
    var element = document.getElementById("app");
    element.innerHTML = html;
  }

  insertIntoHTMLNote(id, htmlString) {
    var element = document.getElementById(id);
    element.innerHTML = htmlString;
  }

  renderSingleNote() {
    //take our event listerner and callback function
    window.addEventListener(
      "hashchange",
      this.insertIntoHTMLNote(
        "app",
        this.singleNoteHTML(this._getNoteModel(this._idFromURL()))
      )
    );
  }

  _idFromURL() {
    return location.hash.split("/")[1];
  }

  _getNoteModel(id) {
    var note;
    for (let index = 0; index < this.noteList.list.length; index++) {
      const element = this.noteList.list[index];
      if (element.id == id) {
        note = element;
      } else {
        note = null;
      }
    }
    return note;
  }

  singleNoteHTML(noteModel) {
    var singleNoteView = new SingleNoteView(noteModel);
    return singleNoteView.outputAsHTML();
  }
}
