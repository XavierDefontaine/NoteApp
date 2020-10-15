
    function testNewNote() {
        var string = 'This is a test';
        var note = new Note(string);
        assert(note.returnText() === string,
        "This will test we can see the text inside the Note");
    }
    testNewNote();

    function testNewNoteID() {
        var string = 'This is a test';
        var note = new Note(string, 0);
        assert(note.id === 0,
        "This will test an ID is set to a new Note");
    }

    testNewNoteID()