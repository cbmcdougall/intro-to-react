import React from 'react';
import { FaveButton } from '.';

export default {
    title: 'Album/FaveButton',
    component: FaveButton,
}

const Template = args => <FaveButton {...args} />

export const Default = Template.bind({});