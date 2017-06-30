import { call, put, takeLatest } from 'redux-saga/effects';
import { values } from 'lodash';

import { addressService } from 'services';
import { REQUEST_ADDRESSES_AJAX } from './constants';
import { SUBMIT_ADDRESS_SUCCEEDED } from '../Add/constants';

import { requestAddressesSucceeded, requestAddressesFailed } from './actions';

function* fetchAddresses() {
    try {
        const snapshot = yield call(addressService.getAddresses);
        const addresses = snapshot.val() || {};
        yield put(requestAddressesSucceeded(values(addresses)));
    } catch (e) {
        yield put(requestAddressesFailed(e));
    }
}

export function* watchRequestAddresses() {
    yield takeLatest([REQUEST_ADDRESSES_AJAX], fetchAddresses);
}