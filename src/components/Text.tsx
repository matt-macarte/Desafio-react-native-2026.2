// src/components/Text.tsx

import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { theme, TypographyVariant } from "../styles/theme";

interface TextProps extends RNTextProps {
	variant?: TypographyVariant;
	color?: keyof typeof theme.colors;
	/** Permite alternar a variação da fonte para regular, medium ou italic */
	fontStyle?: "regular" | "medium" | "italic" | "bold";
}

export function Text({
	variant = "p",
	color = "text",
	fontStyle,
	style,
	children,
	...rest
}: TextProps) {
	const typographyStyle = theme.typography[variant];
	const textColor = theme.colors[color];

	// Se o estilo de fonte for especificado, identificamos se a variante atual usa HostGrotesk ou Quicksand
	let customFontFamily: string | undefined = undefined;

	if (fontStyle) {
		const isHostGrotesk =
			typographyStyle.fontFamily.includes("HostGrotesk");
		const fontGroup = isHostGrotesk
			? theme.fonts.hostGrotesk
			: theme.fonts.quicksand;
		customFontFamily = fontGroup[fontStyle];
	}

	return (
		<RNText
			style={[
				typographyStyle,
				{ color: textColor },
				customFontFamily ? { fontFamily: customFontFamily } : null,
				style,
			]}
			{...rest}
		>
			{children}
		</RNText>
	);
}
