import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import axios from 'axios';
import BrowseContainer from './index';


describe('the BrowseContainer component', () => {
  xit('should render correctly', () => {
    const { asFragment } = render(<BrowseContainer />);

    expect(asFragment()).toMatchSnapshot();
  });

  xit('should call axios.get', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { someData: 'some-data' } });
    render(<BrowseContainer />);
    await waitForDomChange();
    expect(mockAxios).toHaveBeenCalled();
  });
});
