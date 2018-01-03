import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function (state={}, action) {
    switch (action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            break;
        case FETCH_POST:
            return {...state,[action.payload.data.id]: action.payload.data};
            break;
        case DELETE_POST:
        //return _.omit(state, action.payload);
            console.log( action.payload);
            return _.omit(state, action.payload);
            break;
        default:
            return state;
    }
}