import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Impede que a tela de splash suma antes das fontes carregarem
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		"HostGrotesk-Regular": require("../assets/fonts/HostGrotesk-Regular.ttf"),
		"HostGrotesk-Bold": require("../assets/fonts/HostGrotesk-Bold.ttf"),
		"Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
		"Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
		"Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return <Stack screenOptions={{ headerShown: false }} />;
}
