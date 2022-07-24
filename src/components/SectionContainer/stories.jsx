import { SectionContainer } from './index';
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum, voluptas incidunt dolores, fugit voluptates
          illo numquam illum nesciunt, tenetur velit quis aut beatae iste voluptatibus ullam eos maiores consequuntur!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
