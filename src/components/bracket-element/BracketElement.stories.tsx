import type { Meta, StoryObj } from '@storybook/react';

import InputText from './BracketElement';

const meta = {
  component: InputText,
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Demi finale",
    bracketContent: [{"team":"Equipe1", "score":3},{"team":"Equipe2", "score":2}]
  }
};