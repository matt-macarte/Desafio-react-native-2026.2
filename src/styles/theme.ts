export const theme = {
	colors: {
		background: "#0E182C",

		card: "#1b4ca019",
		cardShadow: "#0E182C6b",

		primary: "#E0E06E",
		secondary: "#1B4BA0",

		text: "#FBF5E9",
		textSecondary: "#2828b6",
		muted: "#A8A8B3",
	},

	gradients: {
		bgGradient: ["#0E182C", "#2E5092"] as const,
	},

	spacing: { a: 4, b: 8, c: 16, d: 24, e: 32 },

	borderRadius: { s: 4, m: 8, l: 16 },

	iconSize: { s: 16, m: 24, l: 32 },

	fonts: {
		hostGrotesk: {
			italic: "HostGrotesk-Italic",
			regular: "HostGrotesk-Regular",
			medium: "HostGrotesk-Medium",
			bold: "HostGrotesk-Bold",
		},
		quicksand: {
			italic: "Quicksand-Light",
			regular: "Quicksand-Regular",
			medium: "Quicksand-Medium",
			bold: "Quicksand-Bold",
		},
	},

	typography: {
		title: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 36,
			lineHeight: 44,
		},
		h1: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 42,
			lineHeight: 50,
		},
		h2: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 36,
			lineHeight: 44,
		},
		h3: {
			fontFamily: "HostGrotesk-Bold",
			fontSize: 30,
			lineHeight: 38,
		},

		// --- Quicksand (H4 em diante) ---
		h4: {
			fontFamily: "Quicksand-Bold",
			fontSize: 24,
			lineHeight: 30,
		},
		h5: {
			fontFamily: "Quicksand-Bold",
			fontSize: 20,
			lineHeight: 26,
		},
		p: {
			fontFamily: "Quicksand-Regular",
			fontSize: 16,
			lineHeight: 22,
		},
		h6: {
			fontFamily: "Quicksand-Light",
			fontSize: 14,
			lineHeight: 18,
		},
	},
};

export type Theme = typeof theme;
export type TypographyVariant = keyof typeof theme.typography;
