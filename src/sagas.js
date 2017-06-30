import { fork, all } from 'redux-saga/effects';

import { watchRequestAddresses } from './views/Address/List/sagas';
import { watchSubmitAddress, watchAddedAddress } from './views/Address/Add/sagas';

export default function* root() {
    yield all([
        fork(watchRequestAddresses),
        fork(watchSubmitAddress),
        fork(watchAddedAddress),
    ]);
};