import { Button } from "@/src/components/Button";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function About() {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={[layouts.dadContainer, styles.page]}>
            <View>
                <Button
                    name="arrow-left"
                    color={theme.colors.text}
                    onPress={() => router.back()}
                    style={styles.btn}
                    bgColor="transparent"
                />
                <Text style={txtStyles.h1}>Sobre</Text>
            </View>
            <View style={styles.app}>
                <Image
                    source={require("@/assets/images/alcoholism_has_got_me.jpg")}
                    style={styles.appPic}
                />
                <Text style={txtStyles.h1}>Rotineiro</Text>
                <Text style={txtStyles.sub}>Lançado em: 09/09/2026</Text>
                <Text style={txtStyles.subsub}>Versão 0.0.7 alpha</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={txtStyles.h3}>Desenvolvedor</Text>
                <View style={styles.info}>
                    <Text style={txtStyles.p}>Desenvolvido por</Text>
                    <Text style={txtStyles.p2}>Macarte</Text>
                </View>
                <View style={styles.infoSubContainer}>
                    <Text style={txtStyles.p2}>Contatos:</Text>
                    <View style={styles.info}>
                        <MaterialCommunityIcons
                            name="github"
                            size={theme.iconSize.m}
                            color={theme.colors.text}
                        />
                        <Text style={txtStyles.p}>matt-macarte</Text>
                    </View>
                    <View style={styles.info}>
                        <MaterialIcons
                            name="mail"
                            size={theme.iconSize.m}
                            color={theme.colors.text}
                        />
                        <Text style={txtStyles.p}>matheusac@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.infoSubContainer}>
                    <Text style={txtStyles.p2}>Me pague um café!</Text>
                    <View style={styles.info}>
                        <MaterialIcons
                            name="pix"
                            size={theme.iconSize.m}
                            color={theme.colors.text}
                        />
                        <Text style={txtStyles.p}>00dva0sd0ge0</Text>
                    </View>
                </View>
            </View>
            <View style={styles.reportBtn}>
                <Text
                    style={[txtStyles.p, { textDecorationLine: "underline" }]}
                >
                    Relatar problemas com o app
                </Text>
                <MaterialIcons
                    name="arrow-outward"
                    size={theme.iconSize.m}
                    color={theme.colors.text}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        // backgroundColor: theme.colors.background,
        // padding: theme.spacing.d,
        flex: 1,
        flexGrow: 1,
        // justifyContent: "space-between",
        gap: theme.spacing.g,
    },
    app: {
        alignItems: "center",
        gap: theme.spacing.a,
    },
    appPic: {
        width: 100,
        height: 100,
        backgroundColor: theme.colors.primary,
        borderRadius: 100,
    },
    infoContainer: {
        gap: theme.spacing.e,
    },
    infoSubContainer: {
        gap: theme.spacing.a,
    },
    info: {
        flexDirection: "row",
        alignContent: "center",
        gap: theme.spacing.b,
    },
    btn: {
        alignSelf: "baseline",
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    reportBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.b,
        // paddingHorizontal: theme.spacing.b,
        // backgroundColor: theme.colors.secondary50,
        // borderRadius: theme.borderRadius.m,
        width: "auto",
    },
});
