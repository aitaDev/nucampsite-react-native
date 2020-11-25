import * as ActionTypes from './ActionTypes';

export const campsites = (
	state = { isLoading: true, errMess: null, campsites: [] }, //default param syntax if state has not been init
	action
) => {
	//possible actions. if no match returns prev state, same as other reducers
	switch (action.type) {
		case ActionTypes.ADD_CAMPSITES:
			return {
				...state,
				isLoading: false,
				errMess: null,
				campsites: action.payload,
			};

		case ActionTypes.CAMPSITES_LOADING:
			return { ...state, isLoading: true, errMess: null, campsites: [] };

		case ActionTypes.CAMPSITES_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		default:
			return state;
	}
};
