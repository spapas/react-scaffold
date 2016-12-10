
export function loadingChangedAction(isLoading) {
    return {
        type: "IS_LOADING",
        isLoading
    }
}

export function toggleSelection(student) {
    return {
        type: "TOGGLE_SELECTION",
        student
    }
}

export function toggleSorting(sorting) {
    return {
        type: "TOGGLE_SORTING",
        sorting
    }
}


export function setPage(page) {
    return {
        type: "SET_PAGE",
        page
    }
}

export function changeFilters(filters) {
    return {
        type: 'CHANGE_FILTERS',
        filters
    }
}

export function clearFilters(filters) {
    return {
        type: 'CLEAR_FILTERS'
    }
}


const formatFilters = (f) => {
    let ret = [];
    Object.keys(f).forEach(function (key) {
        let val = f[key];
        if(val) {
            ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(val));
        }
    });
    return ret.join("&");
}
