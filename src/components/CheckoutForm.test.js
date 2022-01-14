import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const submit = screen.getByRole('button');
    userEvent.type(firstName, 'aaa');
    userEvent.type(lastName, 'bbb');
    userEvent.type(address, 'ccc');
    userEvent.type(city, 'ddd');
    userEvent.type(state, 'eee');
    userEvent.type(zip, 'fff');
    userEvent.click(submit);
    const success = screen.queryByText('You have ordered some plants! Woo-hoo!')
    const firstNameSucc = screen.queryByText(/aaa/);
    const lastNameSucc = screen.queryByText(/bbb/);
    const addressSucc = screen.queryByText(/ccc/);
    const citySucc = screen.queryByText(/ddd/);
    const stateSucc = screen.queryByText(/eee/);
    const zipSucc = screen.queryByText(/fff/);
    
    expect(success).toBeInTheDocument();
    expect(firstNameSucc).toBeInTheDocument();
    expect(lastNameSucc).toBeInTheDocument();
    expect(addressSucc).toBeInTheDocument();
    expect(citySucc).toBeInTheDocument();
    expect(stateSucc).toBeInTheDocument();
    expect(zipSucc).toBeInTheDocument();

});
