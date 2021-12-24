import React, { useState } from 'react';
import { Intervals } from '../components';
import { CandlestickChartInterval } from '../components/Intervals';
import './bootswatch-darkly.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Altamoon/Intervals',
  component: Intervals,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
  const [interval, onChange] = useState<CandlestickChartInterval>('1m');

  return (
    <Intervals
      value={interval}
      onChange={onChange}
    />
  );
};

export const Primary = Template.bind({});
