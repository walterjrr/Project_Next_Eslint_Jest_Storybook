import { TextComponent } from './index';
export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'TextComponentLorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam veritatis laudantium rem, possimus ratione quis? Illum, ipsum dignissimos soluta quis aliquid voluptas officiis pariatur accusantium autem repudiandae tempore sit veniam.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
