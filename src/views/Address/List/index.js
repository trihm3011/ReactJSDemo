import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
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
            <section>
                <Link to="/add" className="btn btn-primary btn-add">Add new address</Link>
                <section>
                    {addresses.length ? <Table addresses={addresses} /> : null}
                </section>
            </section>
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