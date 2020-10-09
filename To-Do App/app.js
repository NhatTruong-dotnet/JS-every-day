class Note{
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
}

class UI{
    static displayNotes() {
        const notes = Store.getNotes();

        notes.forEach((note) => UI.addNoteToList(note));
    }

    static addNoteToList(note){
        let list = document.querySelector('#note-list');

        let row = document.createElement('tr');
        row.innerHTML = `
                <td>${note.title}</td>
                <td>${note.content}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                `;

        list.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#content').value = '';
    }

    static deleteNote(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}
window.addEventListener('load',UI.displayNotes);

function addNote(){
    
    //Get the form value
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    
    //validate
    if(title ==='' || content ===''){

    }
    else{
        //instance note
        const note = new Note(title,content);
        //add note to UI
        UI.addNoteToList(note);
        //add note to store
        Store.addNote(note);
        //clear fields already submit before
        UI.clearFields();
    }
    
};
const noteList = document.querySelector("#note-list");
if(noteList)
{
    noteList.addEventListener('click',(e) => {
        e.preventDefault();
        UI.deleteNote(e.target);
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    });
}

class Store{
    static getNotes(){
        let notes;
        if(localStorage.getItem('notes') === null){
            notes = [];
        }
        else{
            notes = JSON.parse(localStorage.getItem('notes'));
        }
        return notes;
    }
    static addNote(note){
        const notes = Store.getNotes();
        notes.push(note);

        localStorage.setItem('notes',JSON.stringify(notes));
    }
    static removeBook(content){
        const notes = Store.getNotes();

        notes.forEach((note,index) => {
            if(note.content === content){
                notes.splice(index,1);
            }
        });

        localStorage.setItem('notes', JSON.stringify(notes));
    }
}