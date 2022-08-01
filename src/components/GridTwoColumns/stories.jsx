import { GridTwoColumns } from './index';
export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur perspiciatis nobis vitae optio deserunt mollitia ut inventore minima, illum facilis quia repellendus officiis nisi at odit dolor rem temporibus!`,
    srcImg: 'assets/images/logo.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
