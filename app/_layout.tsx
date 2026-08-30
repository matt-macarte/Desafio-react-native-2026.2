import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Impede que a tela de splash suma antes das fontes carregarem
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		"HostGrotesk-Regular": require("../assets/fonts/HostGrotesk-Regular.ttf"),
		"HostGrotesk-Bold": require("../assets/fonts/HostGrotesk-Bold.ttf"),
		"HostGrotesk-BoldItalic": require("../assets/fonts/HostGrotesk-BoldItalic.ttf"),
		"HostGrotesk-ExtraBold": require("../assets/fonts/HostGrotesk-ExtraBold.ttf"),
		"HostGrotesk-Italic": require("../assets/fonts/HostGrotesk-Italic.ttf"),
		"HostGrotesk-Light": require("../assets/fonts/HostGrotesk-Light.ttf"),
		"HostGrotesk-LightItalic": require("../assets/fonts/HostGrotesk-LightItalic.ttf"),
		"HostGrotesk-Medium": require("../assets/fonts/HostGrotesk-Medium.ttf"),
		"HostGrotesk-SemiBold": require("../assets/fonts/HostGrotesk-SemiBold.ttf"),
		"HostGrotesk-MediumItalic": require("../assets/fonts/HostGrotesk-MediumItalic.ttf"),
		// quicksand
		"Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
		"Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
		"Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
		"Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
		"Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</SafeAreaProvider>
	);
}
