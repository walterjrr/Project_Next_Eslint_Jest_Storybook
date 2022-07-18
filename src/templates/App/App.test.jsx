/* eslint-disable no-unused-vars */
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './Index';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
