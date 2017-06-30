import { getAll, create, subscribeChildAdded, unsubscribeChildAdded } from './data';

const addressPath = 'addresses';

const getAddresses = () => getAll(addressPath);

const createAddress = (model) => { create(addressPath, model); };

const subscribeAddedAddress = (func) => { subscribeChildAdded(addressPath, func); };

const unsubscribeAddedAddress = (func) => { unsubscribeChildAdded(addressPath, func); };

export default { getAddresses, createAddress, subscribeAddedAddress, unsubscribeAddedAddress };