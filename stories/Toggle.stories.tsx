import React, { useState } from 'react';
import { Toggle } from '../components';
import './bootswatch-darkly.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Altamoon/Toggle',
  component: Toggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({
  id, checkedLabel, uncheckedLabel, className,
}: Parameters<typeof Toggle>[0]) => {
  const [isChecked, onChange] = useState(false);

  return (
    <Toggle
      id={id}
      checkedLabel={checkedLabel}
      uncheckedLabel={uncheckedLabel}
      className={className}
      isChecked={isChecked}
      onChange={onChange}
    />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Primary.args = {
  checkedLabel: 'Checked',
  uncheckedLabel: 'Unchecked',
  className: '',
  id: 'toggle',
};
