import React from 'react';
import { render } from '@testing-library/react';
import BollywoodContainer from './index';


xdescribe('the BollywoodContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BollywoodContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
