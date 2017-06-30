import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { ADD_ADDRESS_FORM_NAME } from '../constants';

const renderField = ({ input, label, type = 'text', meta: { touched, error, warning } }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}

const Form = ({ handleSubmit, pristine, reset, submitting, onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field name="address" component={renderField} label="Address" />
            <Field name="ward" component={renderField} label="Ward" />
            <Field name="district" component={renderField} label="District" />
            <Field name="city" component={renderField} label="City" />
            <Field name="country" component={renderField} label="Country" />

            <div>
                <button type="submit" disabled={pristine || submitting}>
                    {submitting ? <i className="fa fa-spinner fa-spin" style={{ marginRight: '5px' }} /> : null}
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
            </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: ADD_ADDRESS_FORM_NAME // a unique identifier for this form
})(Form)