class NoteList{
    constructor(){
        this.list = []
    }


    returnList(){
        return this.list
    }

    create(string){
        var note = new Note(string)
        this.list.push(note.returnText())
    }

}