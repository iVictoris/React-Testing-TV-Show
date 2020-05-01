import React from 'react';
import {
    render,
    waitFor,
    fireEvent,
    act,
    waitForElementToBeRemoved,
    screen,
} from '@testing-library/react';
import App from '../App';

test('should render ok', () => {
    render(<App />);
});

test(`should finish fetching and display not show that it's fetching`, async () => {
    const { getByText } = render(<App />);
    // debug();
    await waitForElementToBeRemoved(() => {
        return getByText(/fetching/i);
    });
    // after above ^ regular html-like structure is shown
    // screen.debug();
});

test('clicking on a season will load season', async () => {
    // ARRANGE
    const { getByText } = render(<App />);
    await waitForElementToBeRemoved(() => {
        return getByText(/fetching/i);
    });

    fireEvent.click(getByText(/select a season/i));
    screen.debug();
    // ACT

    // ASSERT
});
