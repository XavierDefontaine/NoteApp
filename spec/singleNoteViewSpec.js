function showSingleNote(){
    var note = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(note)
    assert(singleNoteView.outputAsHTML() === "<div>Favourite drink: seltzer</div>", 
    "return the note as a string of HTML")

}

showSingleNote()