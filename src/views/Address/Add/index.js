import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitAddressAjax } from './actions';
import { Form } from './components';

class AddressFormContainer extends Component {

    submit = (model) => {        
        this.props.submitAddress(model);
    }

    render() {
        return (
            <Form onSubmit={this.submit} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAddress: (address) => dispatch(submitAddressAjax(address)),
    };
};

export default connect(null, mapDispatchToProps)(AddressFormContainer);
