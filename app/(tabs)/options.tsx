import { Button } from "@/src/components/Button";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Options() {
    const router = useRouter();
    return (
        <ScrollView
            contentContainerStyle={[
                layouts.dadContainer,
                {
                    // backgroundColor: theme.colors.background,
                    // padding: theme.spacing.d,
                    flex: 1,
                    flexGrow: 1,
                    gap: theme.spacing.f,
                },
            ]}
        >
            <View>
                <Text style={txtStyles.h1}>Menu</Text>
            </View>
            <View style={styles.user}>
                <Image
                    source={require("@/assets/images/alcoholism_has_got_me.jpg")}
                    style={styles.userPic}
                />
                <View style={styles.userInfo}>
                    <Text style={[txtStyles.p, styles.userName]}>
                        Matheus de Almeida Campos
                    </Text>
                    <Text style={txtStyles.sub}>Entrou em: 05/08/2026</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.options}>
                    <Text style={txtStyles.h2}>Opções</Text>
                    <Button
                        style={styles.btn}
                        label="Editar Perfil"
                        name="person"
                        color={theme.colors.text}
                        onPress={() => router.push("/user-profile")}
                    />
                    <Button
                        style={styles.btn}
                        label="Preferências"
                        name="settings"
                        color={theme.colors.text}
                    />
                    <Button
                        style={styles.btn}
                        label="Gerenciar Ações"
                        name="dashboard"
                        color={theme.colors.text}
                    />
                </View>

                <Button
                    style={styles.btn}
                    label="Sair"
                    name="logout"
                    color={theme.colors.danger}
                />
                <View>
                    <Button
                        style={styles.btn}
                        label="Sobre"
                        name="info"
                        color={theme.colors.primary}
                    />
                    <Text style={txtStyles.sub}>Versão 0.0.8 alpha</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    user: {
        gap: theme.spacing.d,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: theme.spacing.b,
    },
    userPic: {
        width: 92,
        height: 92,
        backgroundColor: theme.colors.primary,
        borderRadius: 100,
    },
    userName: {
        fontSize: 22,
    },
    userInfo: {
        gap: theme.spacing.c,

        flexShrink: 1,
    },
    // baixo
    optionsContainer: {
        gap: "48",
    },
    options: {
        gap: theme.spacing.c,
    },
    btn: {
        flexDirection: "row",
        paddingHorizontal: 0,

        justifyContent: "flex-start",
        backgroundColor: "transparent",
    },
    about: {
        flex: 1,
        flexDirection: "column",
    },
});
