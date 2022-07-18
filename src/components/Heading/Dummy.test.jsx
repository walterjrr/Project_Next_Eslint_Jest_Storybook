import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('should render', () => {
    renderTheme(<Heading>Children</Heading>);
    expect(screen.getAllByRole('heading')).toBeInTheDocument();
  });
});
