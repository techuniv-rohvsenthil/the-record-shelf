import React from 'react';
import { render } from '@testing-library/react';
import SyncContainer from './index';


xdescribe('the SyncContainer component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<SyncContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
