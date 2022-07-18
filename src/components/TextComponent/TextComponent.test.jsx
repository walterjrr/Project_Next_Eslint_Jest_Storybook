import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });
});
