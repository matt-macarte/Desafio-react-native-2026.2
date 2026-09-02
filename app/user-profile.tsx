import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function UserProfile() {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={[layouts.dadContainer, styles.page]}>
            <View>
                <Text style={txtStyles.h1}>Perfil</Text>
            </View>
            <View style={styles.user}>
                <Image
                    source={require("@/assets/images/alcoholism_has_got_me.jpg")}
                    style={styles.userPic}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={txtStyles.h2}>Dados</Text>
                <View style={styles.inputItem}>
                    <Text style={txtStyles.p}>Nome de Usuário</Text>
                    <Input placeholder="Digite seu nome de usuário" />
                </View>
                <View style={styles.inputItem}>
                    <Text style={txtStyles.p}>E-mail</Text>
                    <Input placeholder="Digite seu e-mail" />
                </View>
                <View style={styles.inputItem}>
                    <Text style={txtStyles.p}>Senha</Text>
                    <Input placeholder="Digite sua senha" />
                </View>
            </View>
            <Button
                style={styles.btn}
                label="Excluir Conta"
                name="delete"
                color={theme.colors.danger}
            />
            <View style={styles.btnContainer}>
                <Button
                    label="Cancelar"
                    bgColor="transparent"
                    color={theme.colors.text}
                    onPress={() => router.back()}
                />
                <Button label="Salvar" />
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
    user: {
        alignItems: "center",
    },
    userPic: {
        width: 100,
        height: 100,
        backgroundColor: theme.colors.primary,
        borderRadius: 100,
    },
    inputContainer: {
        gap: theme.spacing.d,
    },
    inputItem: {
        gap: theme.spacing.b,
    },
    btn: {
        backgroundColor: "transparent",
        justifyContent: "flex-start",
        paddingHorizontal: 0,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: theme.spacing.c,
    },
});
