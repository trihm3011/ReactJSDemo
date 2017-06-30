import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import json2csv from 'json2csv';
import fileDownload from 'react-file-download';

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

    exportToCSV = (e) => {
        e.preventDefault();
        const { addresses } = this.props;
        var fields = ['address', 'ward', 'district', 'city', 'country'];

        var csv = json2csv({ data: addresses, fields });
        fileDownload(csv, 'filename.csv');
    }


    render() {
        const { addresses } = this.props;
        return (
            <section>
                <Link to="/add" className="btn btn-primary btn-add"><i className="fa fa-address-book-o" aria-hidden="true" />&nbsp;&nbsp;Add new address</Link>
                <button type="button" className="btn btn-info btn-export" disabled={!addresses.length} onClick={this.exportToCSV}><i className="fa fa-floppy-o" aria-hidden="true" />&nbsp;&nbsp;Export</button>
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