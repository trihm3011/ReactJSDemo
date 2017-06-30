import { createSelector } from 'reselect';

const selectAddressListSelector = state => state.addressList;

export const selectAddressListContainer = createSelector(selectAddressListSelector, (addresses) => {
    console.log('selectAddressListContainer', addresses);
    return { addresses };
});