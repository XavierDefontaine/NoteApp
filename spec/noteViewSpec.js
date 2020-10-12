function noteListViewHtml() {
    var noteList = new NoteList
    noteList.create("hello")
    noteList.create("bye")

    var noteListView = new NoteListView(noteList)
    assert(noteListView.outputToHtml() === "<ul><li><div>hello</div></li><li><div>bye</div></li></ul>",
        "Can Test output to HTML")

}

noteListViewHtml();