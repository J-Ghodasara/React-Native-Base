import {
    UPDATE_LOADING_STATE,
    UPDATE_OVERLAY_STATE,
    UPDATE_SEARCH_VIEW,
    UPDATE_PLACE_DATA,
    UPDATE_CURRENT_LOCATION,
    UPDATE_SELECTED_LOCATION,
    UPDATE_SEARCH_TEXT,
    UPDATE_FIRSTTIMESETLOCATION,
    SELECTED_POST_IMAGE
} from '../actions/ActionType';

const initialState = {
    isLoading: false,
    isOverLayLoading: false,
    isVisible: true,
    placeList: [],
    location: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 1.0,
        longitudeDelta: 1.0
    },
    selectedPlaceDetails: '',
    searchText: '',
    selectedPostImage: []
}


const commanReducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOADING_STATE:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case UPDATE_OVERLAY_STATE:
            return {
                ...state,
                isOverLayLoading: action.isOverlayLoading,
            }

        case UPDATE_SEARCH_VIEW:
            return {
                ...state,
                isVisible: action.isVisible,
            }
        case UPDATE_CURRENT_LOCATION:
            state.location = {};
            state.location = action.location;
            return state;

       case UPDATE_SELECTED_LOCATION:
            return {
                ...state,
                selectedPlaceDetails: action.selectedPlaceDetails,
            }
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText,
            }
        case UPDATE_FIRSTTIMESETLOCATION:

            return {
                ...state,
                isFirstTime: action.isFirstTime

            }

        case SELECTED_POST_IMAGE:

            return {
                ...state,
                selectedPostImage: action.selectedPostImage

            }

        default: return state
    }
}
export default commanReducers;



