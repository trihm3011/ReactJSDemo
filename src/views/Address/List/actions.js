import {
    REQUEST_ADDRESSES_AJAX,
    REQUEST_ADDRESSES_SUCCEEDED,
    REQUEST_ADDRESSES_FAILED
} from './constants';

export function requestAddressesAjax() {
    return {
        type: REQUEST_ADDRESSES_AJAX,
    };
}

export function requestAddressesSucceeded(addresses) {
    return {
        type: REQUEST_ADDRESSES_SUCCEEDED,
        addresses,
    };
}

export function requestAddressesFailed(error) {
    return {
        type: REQUEST_ADDRESSES_FAILED,
        error,
    };
}