import React from 'react';
import { render } from '@testing-library/react';
import PopContainer from './index';


xdescribe('the PopContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<PopContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
