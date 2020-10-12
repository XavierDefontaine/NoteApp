
    function testNewNote() {
        var string = 'This is a test';
        var note = new Note(string);
        assert(note.returnText() === string,
        
        "This will test we can see the text inside the Note");
        /* if (string !== note.returnText()) {
             throw new Error("Note is not the same as string")
         } else {
             console.log("Note contains the string")
         } */
    }
    testNewNote();
