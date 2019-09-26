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

export const updateFirstTimeSetLocation = (isFirstTime) => {
    return { type: UPDATE_FIRSTTIMESETLOCATION, isFirstTime }
}

export const updateOverLayState = (isOverlayLoading) => {
    return { type: UPDATE_OVERLAY_STATE, isOverlayLoading }
}
export const updateSearchView = (isVisible) => {
    return { type: UPDATE_SEARCH_VIEW, isVisible }
}

export const updateAutoCompleteData = (placeList) => {
    return { type: UPDATE_PLACE_DATA, placeList }
}

export const updateCurrentLocation = (location) => {
    return { type: UPDATE_CURRENT_LOCATION, location }
}

export const updateSelectedLocation = (selectedPlaceDetails) => {
    return { type: UPDATE_SELECTED_LOCATION, selectedPlaceDetails }
}

export const updateSearchText = (searchText) => {
    return { type: UPDATE_SEARCH_TEXT, searchText }
}
export const updateSelectedPostImage = (selectedPostImage) => {
    return { type: SELECTED_POST_IMAGE, selectedPostImage }
}

