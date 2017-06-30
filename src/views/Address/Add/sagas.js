import { eventChannel } from 'redux-saga';
import { call, put, takeEvery, take } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

import { trim } from 'utils';
import { addressService } from 'services';

// eslint-disable-next-line
import { SUBMIT_ADDRESS_AJAX, ADD_ADDRESS_FORM_NAME, ADDED_NEW_ADDRESS } from './constants';
import { REQUEST_ADDRESSES_AJAX } from '../List/constants';
import { submitAddressSucceeded, submitAddressFailed } from './actions';



function* submitAddress({ address }) {
    try {
        yield put(startSubmit(ADD_ADDRESS_FORM_NAME));
        yield call(addressService.createAddress, trim(address));
        yield put(stopSubmit(ADD_ADDRESS_FORM_NAME));
        yield put(submitAddressSucceeded());
    } catch (e) {
        yield put(stopSubmit(ADD_ADDRESS_FORM_NAME));
        yield put(submitAddressFailed(e));
    }
}

export function* watchSubmitAddress() {
    yield takeEvery(SUBMIT_ADDRESS_AJAX, submitAddress);
}

function createChannel() {
    return eventChannel(emit => {
        const handler = (data) => {
            emit(data.val());
        };

        addressService.subscribeAddedAddress(handler);

        const unsubscribe = () => {
            addressService.unsubscribeAddedAddress(handler);
        };

        return unsubscribe;

        // const pingHandler = (event) => {
        //     emit(event.payload)
        // };

        // socket.on('ping', pingHandler);

        // const unsubscribe = () => {
        //     socket.off('ping', pingHandler)
        // };

        // return unsubscribe;
    })
}

export function* watchAddedAddress() {
    const channel = yield call(createChannel);

    while (true) {
        // TODO.
        // eslint-disable-next-line
        const address = yield take(channel);
        yield put({ type: REQUEST_ADDRESSES_AJAX });
        // yield put({ type: ADDED_NEW_ADDRESS, address: address })
    }
}