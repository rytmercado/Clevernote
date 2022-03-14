export const getTags = () => (
    $.ajax({
        url: 'api/tags',
        method: 'GET'
    })
);

export const getTag = tagId => (
    $.ajax({
        url: `api/tags/${tagId}`,
        method: 'GET'
    })
);

export const postTag = tag => (
    $.ajax({
        url: 'api/tags',
        method: 'POST',
        data: { tag }
    })
);

export const patchTag = tag => (
    $.ajax({
        url: `api/tags/${tag.id}`,
        method: 'PATCH',
        data: { tag }
    })
);

export const deleteTag = tagId => (
    $.ajax({
        url: `api/tags/${tagId}`,
        method: 'DELETE'
    })
);