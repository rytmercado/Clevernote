export const getNoteTags = () => (
    $.ajax({
        url: 'api/note_tags',
        method: 'GET'
    })
);

export const getNoteTag = noteTagId => (
    $.ajax({
        url: `api/note_tags/${noteTagId}`,
        method: 'GET'
    })
);

export const postNoteTag = noteTag => (
    $.ajax({
        url: 'api/note_tags',
        method: 'POST',
        data: { noteTag }
    })
);

export const patchNoteTag = noteTag => (
    $.ajax({
        url: `api/note_tags/${noteTag.id}`,
        method: 'PATCH',
        data: { noteTag }
    })
);

export const deleteNoteTag = noteTagId => (
    $.ajax({
        url: `api/note_tags/${noteTagId}`,
        method: 'DELETE'
    })
);