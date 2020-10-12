function returnNoteList(){
    var noteList = new NoteList;
    assert(noteList.returnList().length === 0, 
    "Test that list is empty")
}

function createNoteList(){
    var noteList = new NoteList
    var string = "This is a test"
    noteList.create(string)
    assert(noteList.returnList()[0] === "This is a test", "test that string can be created into NoteList" )
}



returnNoteList();
createNoteList();