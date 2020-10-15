class NoteList{
    constructor(){
        this.list = []
        this.noteID = 0
    }


    returnList(){
        return this.list
    }

    create(string){
        var note = new Note(string, this.noteID)
        this.list.push(note)
        this.noteID++
    }

}