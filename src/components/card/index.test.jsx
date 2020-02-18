import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';


describe('the Card component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Card text="Test text" img="img-src" alt="img-alt"> </Card>);

    expect(asFragment()).toMatchSnapshot();
  });
});
