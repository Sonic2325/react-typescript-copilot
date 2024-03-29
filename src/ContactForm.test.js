// ContactForm.test.js

import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm and checks form submission', () => {
    render(<ContactForm />);

    const firstnameInput = screen.getByLabelText(/First Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const submitButton = screen.getByText(/Submit/i);

    // Check initial state
    expect(firstnameInput.value).toBe('');
    expect(emailInput.value).toBe('');

    // Fill out the form
    fireEvent.change(firstnameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    // Check that the form was filled out
    expect(firstnameInput.value).toBe('John');
    expect(emailInput.value).toBe('john@example.com');

    // Submit the form
    fireEvent.click(submitButton);

    // Add your assertions here to check the form submission
    // For example, you can check if an alert was called, or if the form data was sent to a server
});