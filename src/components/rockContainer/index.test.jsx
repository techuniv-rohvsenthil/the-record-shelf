import React from 'react';
import { render } from '@testing-library/react';
import RockContainer from './index';


xdescribe('the RockContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<RockContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
