import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';


xdescribe('the Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card />);

    expect(asFragment()).toMatchSnapshot();
  });
});
