function returnNoteList(){
    var noteList = new NoteList;
    assert(noteList.returnList().length === 0, 
    "Test that list is empty")
}

function createNoteList(){
    var noteList = new NoteList
    var string = "This is a test"
    noteList.create(string)
    assert(noteList.returnList()[0].text === "This is a test", 
    "test that string can be created into NoteList" )
}

function createNoteListID(){
    var noteList = new NoteList
    var string = "This is a test"
    noteList.create(string)
    var string2 = "This is not a test"
    noteList.create(string2)
    assert(noteList.list[1].id === 1, 
    "should contain a new ID")
}

returnNoteList();
createNoteList();
createNoteListID();