class NoteListView {
    constructor(noteList) {
        this.noteList = noteList
    }

    returnListView() {
        return this.noteList.returnList()
    }


    outputToHtml() {
        var listView = this.returnListView()
        var html = ""
        for (var i = 0; i <= listView.length; i++) {
            html += "<ul><li><div>" + listView[i] + "</div></li></ul>"
        }
        return html
    }
}