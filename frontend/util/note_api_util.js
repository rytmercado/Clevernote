export const getNotes = () => (
    $.ajax({
        url: 'api/notes',
        method: 'GET'
    })
);

export const getNote = noteId => (
    $.ajax({
        url: `api/notes/${noteId}`,
        method: 'GET'
    })
);

export const postNote = note => (
    $.ajax({
        url: 'api/notes',
        method: 'POST',
        data: { note }
    })
);

export const patchNote = note => (
    $.ajax({
        url: `api/notes/${note.id}`,
        method: 'PATCH',
        data: { note }
    })
);

export const deleteNote = noteId => (
    $.ajax({
        url: `api/notes/${noteId}`,
        method: 'DELETE'
    })
);