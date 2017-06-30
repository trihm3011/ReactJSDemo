import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectAddressListContainer } from './selectors';
import { requestAddressesAjax } from './actions';
import { Table } from './components';

class AddressListContainer extends Component {
    
    constructor(props) {
        super(props);
        
    }
    

    componentDidMount() {
        this.props.requestAddresses();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('nextProps.addresses', nextProps.addresses);
    //     console.log('this.props.addresses', this.props.addresses);
    //     console.log(JSON.stringify(nextProps.addresses) !== JSON.stringify(this.props.addresses));
    //     return JSON.stringify(nextProps.addresses) !== JSON.stringify(this.props.addresses);
    // }

    render() {
        const { addresses } = this.props;
        console.log('addresses', addresses);
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
    };
};

export default connect(selectAddressListContainer, mapDispatchToProps)(AddressListContainer);
// export default connect((state) => {
//     console.log('state', state);
//     return {
//         addresses: state.addressList
//     };
// }, mapDispatchToProps)(AddressListContainer);
