export const fetchCategories = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories')
        .then(resp => resp.json())
        .then(responseJSON => dispatch({ type: 'FETCH_CATEGORIES', categories: responseJSON }))
    }
}

export const addCategory = category => {
    console.log("category in action", category)
    return dispatch => {
        // dispatch({ type: 'LOADING_CATEGORIES' })
        fetch('http://localhost:3090/categories', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(category)
        })
        .then(resp => resp.json())
        .then(category => dispatch({ type: 'ADD_CATEGORY', category}))
    }
}