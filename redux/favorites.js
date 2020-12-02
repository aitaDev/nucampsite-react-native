import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_FAVORITE:
			if (state.includes(action.payload)) {
				return state;
			}
			return state.concat(action.payload);

		case ActionTypes.DELETE_FAVORITE:
			return state.filter((favorite) => favorite !== action.payload);
		// important, filters array, returns new array with actions that dont equal payload.
		default:
			return state;
	}
};
