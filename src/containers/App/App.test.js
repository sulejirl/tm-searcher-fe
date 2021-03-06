import '@testing-library/jest-dom'
import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import App from './index';

it('render Search Player', async () => {
  // Render new instance in every test to prevent leaking state
  const { getAllByText } = render(<App />);
  await waitForElement(() => getAllByText(/Search Player/i));
});
