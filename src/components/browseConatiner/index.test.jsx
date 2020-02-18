import React from 'react';
import { render } from '@testing-library/react';
import BrowseContainer from './index';


xdescribe('the BrowseContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BrowseContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
