import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
import { theme } from "../styles/theme";
import { Text } from "./Text";

type ButtonVariant = "primary" | "secondary" | "danger" | "icon";

interface ButtonProps {
	title?: string;
	onPress: () => void;
	variant?: ButtonVariant;
	icon?: keyof typeof FontAwesome.glyphMap;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

const variantBackgrounds: Record<ButtonVariant, string> = {
	primary: theme.colors.primary,
	secondary: theme.colors.secondary,
	danger: "#e63946",
	icon: "transparent",
};

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	variant = "primary",
	icon,
	style,
	disabled = false,
}) => {
	const backgroundColor = disabled ? "#ccc" : variantBackgrounds[variant];

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			disabled={disabled}
			style={[styles.button, { backgroundColor }, style]}
		>
			{icon && (
				<FontAwesome
					name={icon}
					size={
						variant === "icon" ? theme.iconSize.m : theme.iconSize.s
					}
					color={theme.colors.text}
				/>
			)}
			{title ? (
				<Text variant="p" style={styles.text}>
					{title}
				</Text>
			) : null}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: theme.spacing.b,
		paddingHorizontal: theme.spacing.c,
		borderRadius: theme.borderRadius.m,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing.b,
	},
	text: {
		fontWeight: "600",
	},
});
