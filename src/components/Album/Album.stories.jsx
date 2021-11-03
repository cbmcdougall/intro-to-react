import React from "react";
import { Album } from '.';
import placeholder from './placeholder.jpg';

const songs = [
    "Test song 1",
    "Test song 2",
    "Test song 3",
    "Test song 4",
    "Test song 5",
    "Test song 6",
    "Test song 7",
    "Test song 8",
]

export default {
    title: 'Album',
    component: Album,
    argTypes: {
        size: {
            control: 'radio',
            options: [ 'small', 'medium', 'large' ]
        },
        title: {
            control: 'text'
        },
        year: {
            control: 'number'
        }
    }
}

const Template = args => <Album {...args}/>;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    image: placeholder,
    title: "Test Album",
    year: 2021,
    songs
}
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    image: placeholder,
    title: "Test Album",
    year: 2021,
    songs
}
export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    image: placeholder,
    title: "Test Album",
    year: 2021,
    songs
}
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     image: placeholder,
//     title: "Test Album",
//     year: 2021,
//     songs
// }