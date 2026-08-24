import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { theme, TypographyVariant } from "../styles/theme";

interface TextProps extends RNTextProps {
	variant?: TypographyVariant;
	color?: keyof typeof theme.colors | string;
}

export function Text({
	variant = "p",
	color = theme.colors.text,
	style,
	children,
	...rest
}: TextProps) {
	const typographyStyle = theme.typography[variant];

	return (
		<RNText style={[typographyStyle, { color }, style]} {...rest}>
			{children}
		</RNText>
	);
}
