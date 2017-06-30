import {
    SUBMIT_ADDRESS_AJAX,
    SUBMIT_ADDRESS_SUCCEEDED,
    SUBMIT_ADDRESS_FAILED
} from './constants';

export function submitAddressAjax(address) {
    return {
        type: SUBMIT_ADDRESS_AJAX,
        address
    };
}

export function submitAddressSucceeded() {
    return {
        type: SUBMIT_ADDRESS_SUCCEEDED,
    };
}

export function submitAddressFailed(error) {
    return {
        type: SUBMIT_ADDRESS_FAILED,
        error,
    };
}