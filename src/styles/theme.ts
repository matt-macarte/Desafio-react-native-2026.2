export const theme = {
	colors: {
		bgGradient: ["#0E182C", "#2E5092"] as const,
		bgSolid: "#0E182C",

		card: "#FBF5E9",
		primary: "#E0E06E",
		secondary: "#1B4BA0",

		text: "#FBF5E9",
		textSecondary: "#2828b6",
		muted: "#A8A8B3",
	},
	spacing: { sm: 8, md: 16, lg: 24 },

	fonts: {
		hostGrotesk: {
			italic: "HostGrotesk-Italic",
			regular: "HostGrotesk-Regular",
			medium: "HostGrotesk-Medium",
			bold: "HostGrotesk-Bold",
		},
		quicksand: {
			italic: "Quicksand-Italic",
			regular: "Quicksand-Regular",
			medium: "Quicksand-Medium",
			bold: "Quicksand-Bold",
		},
	},

	typography: {
		// Títulos usando Host Grotesk
		headingLg: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 28,
			lineHeight: 34,
		},
		headingMd: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 22,
			lineHeight: 28,
		},
		headingSm: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 18,
			lineHeight: 24,
		},

		// Textos de corpo e ações usando Quicksand
		bodyLg: {
			fontFamily: "Quicksand-Medium",
			fontSize: 18,
			lineHeight: 24,
		},
		bodyMd: {
			fontFamily: "Quicksand-Regular",
			fontSize: 16,
			lineHeight: 22,
		},
		bodySm: {
			fontFamily: "Quicksand-Regular",
			fontSize: 14,
			lineHeight: 18,
		},
		caption: {
			fontFamily: "Quicksand-Medium",
			fontSize: 12,
			lineHeight: 16,
		},
	},
};

export type Theme = typeof theme;
export type TypographyVariant = keyof typeof theme.typography;
