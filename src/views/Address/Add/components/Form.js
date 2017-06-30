import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { ADD_ADDRESS_FORM_NAME } from '../constants';
import './Form.css';

const renderField = ({ input, label, type = 'text', meta: { touched, error, warning } }) => {
    return (
        <div className="form-group">
            <label className="col-sm-2 control-label">{label}</label>
            <div className="col-sm-10">
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}

const Form = ({ handleSubmit, pristine, reset, submitting, onSubmit }) => {
    return (
        <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <Field name="address" component={renderField} label="Address" />
            <Field name="ward" component={renderField} label="Ward" />
            <Field name="district" component={renderField} label="District" />
            <Field name="city" component={renderField} label="City" />
            <Field name="country" component={renderField} label="Country" />

            <div>
                <button className="btn btn-primary btn-submit" type="submit" disabled={pristine || submitting}>
                    {submitting ? <i className="fa fa-spinner fa-spin" style={{ marginRight: '5px' }} /> : null}
                    Submit
                </button>
                <button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>
                    Reset
                </button>
                <Link to="/" className="btn btn-info btn-back"><i className="fa fa-hand-o-left" aria-hidden="true"/>&nbsp;Back to list</Link>
            </div>
        </form>
    );
};

export default reduxForm({
    form: ADD_ADDRESS_FORM_NAME // a unique identifier for this form
})(Form)