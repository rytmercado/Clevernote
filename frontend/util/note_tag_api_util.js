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

export const postNoteTag = note_tag => (
    $.ajax({
        url: 'api/note_tags',
        method: 'POST',
        data: { note_tag }
    })
);

export const patchNoteTag = note_tag => (
    $.ajax({
        url: `api/note_tags/${note_tag.id}`,
        method: 'PATCH',
        data: { note_tag }
    })
);

export const deleteNoteTag = noteTagId => (
    $.ajax({
        url: `api/note_tags/${noteTagId}`,
        method: 'DELETE'
    })
);