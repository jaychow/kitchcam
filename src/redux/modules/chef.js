const FIND = 'kitchcam/chef/FIND';
const FIND_TOP_CHEFS = 'kitchcam/chef/FIND_TOP_CHEFS';
const FIND_SUCCESS = 'kitchcam/chef/FIND_SUCCESS';
const FIND_FAIL = 'kitchcam/chef/FIND_FAIL';
const EDIT_START = 'kitchcam/chef/EDIT_START';
const EDIT_STOP = 'kitchcam/chef/EDIT_STOP';
const SAVE = 'kitchcam/chef/SAVE';
const SAVE_SUCCESS = 'kitchcam/chef/SAVE_SUCCESS';
const SAVE_FAIL = 'kitchcam/chef/SAVE_FAIL';

const initialState = {
    loaded: false,
    editing: {},
    saveError: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FIND:
            return {
                ...state,
                loading: true
            };
        case FIND_TOP_CHEFS:
            console.log('hereeeee11111');
            return {
                ...state,
                loading: true
            };
        case FIND_SUCCESS:
            console.log('hereeeee poop');
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.result || [],
                error: null
            };
        case FIND_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                data: null,
                error: action.error
            };
        case EDIT_START:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    [action.id]: true
                }
            };
        case EDIT_STOP:
            return {
                ...state,
                editing: {
                    ...state.editing,
                    [action.id]: false
                }
            };
        case SAVE:
            return state; // 'saving' flag handled by redux-form
        case SAVE_SUCCESS:
            const data = [...state.data];
            data[action.result.id - 1] = action.result;
            return {
                ...state,
                data: data,
                editing: {
                    ...state.editing,
                    [action.id]: false
                },
                saveError: {
                    ...state.saveError,
                    [action.id]: null
                }
            };
        case SAVE_FAIL:
            return typeof action.error === 'string' ? {
                ...state,
                saveError: {
                    ...state.saveError,
                    [action.id]: action.error
                }
            } : state;
        default:
            return state;
    }
}

export function isLoaded(globalState) {
    return globalState.chef && globalState.chef.loaded;
}

export function find() {
    return {
        types: [FIND, FIND_SUCCESS, FIND_FAIL],
        promise: (client) => client.get('/chef/find/param1/param2') // params not used, just shown as demonstration
    };
}

export function findTopChefs() {
    console.log('in hereeeeee');
    return {
        types: [FIND_TOP_CHEFS, FIND_SUCCESS, FIND_FAIL],
        promise: (client) => client.get('/chef/find/param1/param2') // params not used, just shown as demonstration
    };
}

export function save(chef) {
    return {
        types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
        id: chef.id,
        promise: (client) => client.post('/chef/update', {
            data: chef
        })
    };
}

export function editStart(id) {
    return {type: EDIT_START, id};
}

export function editStop(id) {
    return {type: EDIT_STOP, id};
}
