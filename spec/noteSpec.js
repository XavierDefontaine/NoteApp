(function (exports) {
    function testNewNote() {
        var string = 'This is a test';
        var note = new Note(string);
        if (string !== note.returnText()) {
            throw new Error("Note is not the same as string")
        } else {
            console.log("Note contains the string")
        }
    }
    testNewNote();

})(this);