function noteListViewHtml() {
  var noteList = new NoteList();
  noteList.create("hello"); // also sets new noteID
  noteList.create("bye"); // also sets new noteID
  var noteListView = new NoteListView(noteList);
  assert(
    noteListView.outputToHtml() ===
      "<ul><li><div><a href='#notes/0'id='0'>hello</a></div></li><li><div><a href='#notes/1'id='1'>bye</a></div></li></ul>",
    "Can Test output to HTML"
  );
}

noteListViewHtml();

function checkHTMLlength() {
  var noteList = new NoteList();
  noteList.create(
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  );
  var noteListView = new NoteListView(noteList);
  assert(
    noteListView.formatter()[0].length <= 20,
    "Only print out 20 characters of the note"
  );
}
checkHTMLlength();

function checkHTMLlink() {
  var noteList = new NoteList();
  noteList.create(
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."
  );
  var noteListView = new NoteListView(noteList);
  assert(
    noteListView.outputToHtml() ===
      "<ul><li><div><a href='#notes/0'id='0'>Lorem ipsum, or lips</a></div></li></ul>",
    "Only print out 20 characters of the note"
  );
}
checkHTMLlink();
