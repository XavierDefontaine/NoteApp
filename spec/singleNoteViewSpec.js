function showSingleNote(){
    var note = new Note("hello")
    var singleNoteView = new singleNoteView(note)
    assert(singleNoteView.outputAsHTML() === "<div>Favourite drink: seltzer</div>", "return the note as a string of HTML")

}