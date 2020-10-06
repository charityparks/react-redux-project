export const categoriesReducer = (state = { categories: [], loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_CATEGORIES': 
            return {
                ...state,
                categories: [...state.categories],
                loading: true
            }
        case 'ADD_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
                loading: false
            }
        case 'ADD_CATEGORY': 
        console.log("action in add category", action)
            // return [...state, action.category]
            // return [
            //     ...state,
            //     {
            //         id: action.id,
            //         name: action.name,
            //         description: action.description
            //     }
            // ]
            return Object.assign({}, state, {
                categories: [
                    ...state.categories, action.category
                ]
            })
        default: 
            return state
    }
}