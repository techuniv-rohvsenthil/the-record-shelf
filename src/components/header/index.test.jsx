import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';


describe('the button component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
