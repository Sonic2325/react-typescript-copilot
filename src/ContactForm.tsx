import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    //q: what is the type of e?
    //a: e is of type React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.firstname && form.email) {
            alert('Form submitted');
        } else {
            alert('Firstname and Email are required');
        }
    };

    // create a method to calculate then number of characters in first name
    const firstNameLength = form.firstname.length;

    // Create concise documentation of this component
    //q: What is the purpose of this component?
    //a: This component is a form that allows users to submit their contact information.
    //q: What props does this component accept?
    //a: This component does not accept any props.

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>First Name (required):</label>
                    <input className="input" type="text" name="firstname" value={form.firstname} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Last Name:</label>
                    <input className="input" type="text" name="lastname" value={form.lastname} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label>Email (required):</label>
                    <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Phone Number:</label>
                    <input className="input" type="tel" name="phone" value={form.phone} onChange={handleChange} />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;