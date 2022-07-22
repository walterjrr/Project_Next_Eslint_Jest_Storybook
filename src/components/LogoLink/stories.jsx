import { LogoLink } from './index';
export default {
  title: 'LogoLink ',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
