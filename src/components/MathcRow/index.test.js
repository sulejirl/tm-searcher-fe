import '@testing-library/jest-dom'
import React from 'react'
import {render, waitForElement} from '@testing-library/react'
import MatchRow from './index';

const item = {
  competition:'Competition',
  matches:[
    {}
  ]
}
it('render without crash', async () => {
  // Render new instance in every test to prevent leaking state
render(<MatchRow item= {item} />);
});
 