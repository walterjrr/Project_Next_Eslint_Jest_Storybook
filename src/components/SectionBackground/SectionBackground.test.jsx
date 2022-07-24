import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('should render', () => {
    renderTheme(<SectionBackground>Children</SectionBackground>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
