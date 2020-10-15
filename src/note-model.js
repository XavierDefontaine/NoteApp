class Note {
    constructor(string, id = null) {
        this.text = string
        this.id = id
    }

    returnText() {
        return this.text
    }
}