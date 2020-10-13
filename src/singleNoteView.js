class SingleNoteView {

  constructor (note) {
    this.note = note;
  }

  outputAsHTML(){
    return("<div>" + this.note.text + "</div>")
  }

}