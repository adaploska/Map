import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import { data_list } from "../WholeMap/WholeMap";
import * as firebase from "firebase";
import axios from "axios";


const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        city: Yup.string()
            .min(2, "Wpisz miejscowość")
            .required("Nie podano miejscowości."),

        adress: Yup.string()
            .min(2, "Wpiszę adres")
            .required("Nie podano adresu."),
        content: Yup.string()
            .min(2, "content")
            .required("Opisz miejsce.")
    }),

    mapPropsToValues: ({ user }) => ({
        ...user
    }),

    handleSubmit: (payload, { setSubmitting }) => {
        const APP_ID_KEY = "G7AuOmU4lJlhsvu50hAAeoXDosMhXKBm";

        axios
            .get(
                `http://www.mapquestapi.com/geocoding/v1/address?key=${APP_ID_KEY}&location=${
                payload.city
                },${payload.adress} `
            )
            .then(result => {
                var usersRef = firebase.database().ref("places");
                console.log(result.data.results[0].locations[0]);
                usersRef.push({
                    content: payload.content,
                    lat: result.data.results[0].locations[0].latLng.lat,
                    lng: result.data.results[0].locations[0].latLng.lng,
                    city: payload.city,
                    adress: payload.adress
                });
                console.log(data_list);
            })
            .catch(err => {
                console.log("Error", err.message);
            });

        setSubmitting(false);
    }
});

const InputFeedback = ({ error }) => (error ? <div>{error}</div> : null);

const Label = ({ error, className, children, ...props }) => {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    );
};

const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
}) => {
    const classes = classnames(
        {
            error: !!error
        },
        className
    );

    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <input id={id} type={type} value={value} onChange={onChange} {...props} />
            <InputFeedback error={error} />
        </div>
    );
};
const MyForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return (
        <form onSubmit={handleSubmit} className="form-row form main-border-style">
            <h5>Dodaj miejsce na mapie</h5>
            <TextInput
                className="col"
                id="city"
                type="text"
                label="podaj miejscowosc "
                error={touched.city && errors.city}
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                className="col"
                id="adress"
                type="text"
                label="podaj nazwę ulicy i numer"
                error={touched.adress && errors.adress}
                value={values.adress}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <TextInput
                className="col"
                id="content"
                type="text"
                label="opisz miejsce "
                placeholder="pole do opisu miejsca"
                error={touched.content && errors.content}
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button className="btn pink lighten-1 z-depth-0" type="button" onClick={handleReset}>
                Reset
      </button>
            <button className="btn pink lighten-1 z-depth-0" type="submit" >Submit</button>
        </form>
    );
};

const AddPlace = formikEnhancer(MyForm);
export default AddPlace;