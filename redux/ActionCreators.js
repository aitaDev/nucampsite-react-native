import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'; //IP address

//wrapping action creator in an additional function so thunk can intercept before going to reducer
export const fetchComments = () => (dispatch) => {
	return fetch(baseUrl + 'comments')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json()) //creates another promise and creates object
		.then((comments) => dispatch(addComments(comments))) //dispatches action with object
		.catch((error) => dispatch(commentsFailed(error.message))); //dispatches error if failed
};

export const commentsFailed = (errMess) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errMess,
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments,
});

export const fetchCampsites = () => (dispatch) => {
	dispatch(campsitesLoading());

	return fetch(baseUrl + 'campsites')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((campsites) => dispatch(addCampsites(campsites)))
		.catch((error) => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
	type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMess) => ({
	type: ActionTypes.CAMPSITES_FAILED,
	payload: errMess,
});

export const addCampsites = (campsites) => ({
	type: ActionTypes.ADD_CAMPSITES,
	payload: campsites,
});

export const fetchPromotions = () => (dispatch) => {
	dispatch(promotionsLoading());

	return fetch(baseUrl + 'promotions')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((promotions) => dispatch(addPromotions(promotions)))
		.catch((error) => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
	type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
	type: ActionTypes.PROMOTIONS_FAILED,
	payload: errMess,
});

export const addPromotions = (promotions) => ({
	type: ActionTypes.ADD_PROMOTIONS,
	payload: promotions,
});

export const fetchPartners = () => (dispatch) => {
	dispatch(partnersLoading());

	return fetch(baseUrl + 'partners')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((partners) => dispatch(addPartners(partners)))
		.catch((error) => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
	type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = (errMess) => ({
	type: ActionTypes.PARTNERS_FAILED,
	payload: errMess,
});

export const addPartners = (partners) => ({
	type: ActionTypes.ADD_PARTNERS,
	payload: partners,
});
export const postFavorite = (campsiteId) => (dispatch) => {
	setTimeout(() => {
		dispatch(addFavorite(campsiteId));
	}, 2000);
};

export const addFavorite = (campsiteId) => ({
	type: ActionTypes.ADD_FAVORITE,
	payload: campsiteId,
});
