import React from 'react';
import { render } from '@testing-library/react';
import RecordShelfContainer from './index';


describe('the RecordShelfContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<RecordShelfContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
