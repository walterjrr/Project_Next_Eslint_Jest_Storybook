import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';
import { screen } from '@testing-library/react';

describe('<SectionContainer />', () => {
  it('should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
