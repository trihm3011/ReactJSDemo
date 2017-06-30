import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAddressListContainer } from './selectors';
import { requestAddressesAjax, requestAddressesSucceeded } from './actions';
import { Table } from './components';

class AddressListContainer extends Component {
    componentDidMount() {
        this.props.requestAddresses();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(nextProps.addresses) !== JSON.stringify(this.props.addresses);
    }

    componentWillUnmount() {
        this.props.cleanAddresses();
    }

    render() {
        const { addresses } = this.props;
        return (
            <div>
                {addresses.length ? <Table addresses={addresses} /> : null}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAddresses: () => dispatch(requestAddressesAjax()),
        cleanAddresses: () => dispatch(requestAddressesSucceeded([])),
    };
};

export default connect(selectAddressListContainer, mapDispatchToProps)(AddressListContainer);