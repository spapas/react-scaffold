/* GLOBAL STATE
{
    table: {
        page: Int
    },
    filters: {
        ...
    },
    ui: {
        isLoading: boolean,
        page
        sorting
    }    
}

*/


const UI_INITIAL = {
    page: 1,
    isLoading: false 
}

export const filters = (state={}, action) => {
    switch (action.type) {
        case 'CHANGE_FILTERS':
            let { filters } = action
            return Object.assign({}, state, filters)
        case 'CLEAR_FILTERS':
            return {}
    }
    return state;
}

export const ui = (state=UI_INITIAL, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
            break;
        case 'SET_PAGE':
            return Object.assign({}, state, {
                page: action.page
            });
            break;
        case 'TOGGLE_SORTING':
            return Object.assign({}, state, {
                sorting: (state.sorting==action.sorting)?('-'+action.sorting):action.sorting
            });
        break
        
    }
    return state;
}
