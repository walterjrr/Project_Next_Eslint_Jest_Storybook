/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './Index';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const HeadingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;

  expect(HeadingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(HeadingContainer).toMatchSnapshot();
});
