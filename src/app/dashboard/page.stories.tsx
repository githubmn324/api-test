import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

// import { sleep, useErrorFunc } from './errorutil';
import DashBoardPage from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DashBoardPage> = {
  title: 'DashBoardPage/page',
  component: DashBoardPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DashBoardPage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ManualTest: Story = {};

export const ErrorTest: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('サインインに成功した場合', async () => {
      // try {
      // await userEvent.click(canvas.getByRole('button'));
      // } catch (error) {
      //   alert(error);
      //   expect(error).tobedefined;
      // }

      // const errorClick = async () => {
      //   await userEvent.click(canvas.getByRole('button'));
      // };
      // await expect(errorClick()).rejects.toThrow(new Error('dummy error test'));
      await userEvent.click(canvas.getByRole('button'));
      await waitFor(() => {
        expect(canvas.getByText('dummy error test')).toBeTruthy();
      });
    });
  },
};
