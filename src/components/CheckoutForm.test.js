import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstnameInput = screen.getByLabelText(/first name/i);
    const lastnameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole('button');

    userEvent.type(firstnameInput, 'Tony');
    userEvent.type(lastnameInput, 'Lu');
    userEvent.type(addressInput, '1234 Street Ct');
    userEvent.type(cityInput, 'Townsville');
    userEvent.type(stateInput, 'ST');
    userEvent.type(zipInput, '12345');
    userEvent.click(checkoutButton);

    const successMessageDisplay = screen.getByTestId('successMessage');
    expect(successMessageDisplay).toBeInTheDocument();
    expect(successMessageDisplay).toBeTruthy();
});
