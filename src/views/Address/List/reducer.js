import { REQUEST_ADDRESSES_SUCCEEDED } from './constants';
import { ADDED_NEW_ADDRESS } from '../Add/constants';

export function addressesReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_ADDRESSES_SUCCEEDED:
            state = action.addresses.slice();
            return state;
        case ADDED_NEW_ADDRESS:
            state.push(action.address);
            console.log('added_new_address', state);
            return state;
        default:
            return state;
    }
}