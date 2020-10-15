class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  returnListView() {
    return this.noteList.returnList();
  }

  formatter() {
    var listView = this.returnListView();
    var html = [];
    for (var i = 0; i < listView.length; i++) {
      html.push(listView[i].text.substring(0, 20));
    }
    return html;
  }

  outputToHtml() {
    var listView = this.returnListView();
    var html = [];
    for (var i = 0; i < listView.length; i++) {
      html.push(
        // <a href='#notes/0' id="0" '>
        "<li><div><a href='#notes/" +
          listView[i].id +
          "'"+ "id='" + listView[i].id + "'" + ">" +
          listView[i].text.substring(0, 20) +
          "</a></div></li>"
      );
    }
    return "<ul>" + html.join("") + "</ul>";
  }
}
