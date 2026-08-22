import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { theme, TypographyVariant } from "../styles/theme";

interface TextProps extends RNTextProps {
	variant?: TypographyVariant;
	color?: keyof typeof theme.colors;
}

export function Text({
	variant = "bodyMd",
	color = "text",
	style,
	children,
	...rest
}: TextProps) {
	const typographyStyle = theme.typography[variant];
	const textColor = theme.colors[color];

	return (
		<RNText
			style={[typographyStyle, { color: textColor }, style]}
			{...rest}
		>
			{children}
		</RNText>
	);
}
