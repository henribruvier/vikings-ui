import React from 'react';
import type {
	ComponentStory,
	ComponentMeta,
	ComponentStoryFn,
} from '@storybook/react';
import {
	Button,
	ButtonProps,
	FullButtonProps,
	Circular as CircularButton,
	CircularButtonProps,
} from '../src';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Button',
	component: Button,
	argTypes: {
		// Foo is the property we want to remove from the UI
		variant: {
			table: {
				disable: true,
			},
		},
		type: {
			table: {
				disable: true,
			},
		},
	},
} as FullButtonProps;

const TemplatePrimary: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="primary"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const Primary: ComponentStory<typeof Button> = TemplatePrimary.bind({});

const TemplateSecondary: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="secondary"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const Secondary = TemplateSecondary.bind({});

const TemplateWhite: ComponentStory<typeof Button> = ({
	size,
	isRounded,
	color,
	isDisabled,
}: ButtonProps) => (
	<Button
		size={size}
		color={color}
		isDisabled={isDisabled}
		variant="white"
		isRounded={isRounded}
	>
		Hello
	</Button>
);

export const White = TemplateWhite.bind({});

const TemplateCircular: ComponentStory<typeof Button> = ({
	size,
	color,
	isDisabled,
	icon,
}: CircularButtonProps) => (
	<CircularButton
		size={size}
		color={color}
		isDisabled={isDisabled}
		icon={icon}
	/>
);

export const DefaultCircular = TemplateCircular.bind({});
