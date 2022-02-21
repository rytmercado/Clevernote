export const getNotebooks = () => (
    $.ajax({
        url: 'api/notebooks',
        method: 'GET'
    })
);

export const getNotebook = notebookId => (
    $.ajax({
        url: `api/notebooks/${notebookId}`,
        method: 'GET'
    })
);

export const postNotebook = notebook => (
    $.ajax({
        url: 'api/notebooks',
        method: 'POST',
        data: { notebook }
    })
);

export const patchNotebook = notebook => (
    $.ajax({
        url: `api/notebooks/${notebook.id}`,
        method: 'PATCH',
        data: { notebook }
    })
);

export const deleteNotebook = notebookId => (
    $.ajax({
        url: `api/notebooks/${notebookId}`,
        method: 'DELETE'
    })
);