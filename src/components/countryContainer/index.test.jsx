import React from 'react';
import { render } from '@testing-library/react';
import CountryContainer from './index';


xdescribe('the CountryContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CountryContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
