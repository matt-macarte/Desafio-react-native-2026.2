import { theme, txtStyles } from "@/src/styles/theme";
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Options() {
    return (
        <ScrollView
            contentContainerStyle={{
                backgroundColor: theme.colors.background,
                padding: theme.spacing.d,
                flex: 1,
                gap: theme.spacing.e,
            }}
        >
            <View>
                <Text style={txtStyles.h1}>Menu</Text>
            </View>
            <View style={styles.user}>
                <Image src="" width={140} />
                <View style={styles.userInfo}>
                    <Text style={[txtStyles.p, styles.userName]}>
                        Matheus de Almeida Campos
                    </Text>
                    <Text style={txtStyles.sub}>Entrou em: 05/08/2026</Text>
                </View>
            </View>
            <View style={styles.optionsContainer}>
                <View>
                    <Text style={txtStyles.h2}>Opções</Text>
                    <Link href="/" style={txtStyles.p}>
                        Editar Perfil
                    </Link>
                    <Link href="/" style={txtStyles.p}>
                        Preferências
                    </Link>
                    <Link href="/" style={txtStyles.p}>
                        Gerenciar Ações
                    </Link>
                </View>

                <Link href="/" style={txtStyles.p}>
                    Excluir Conta
                </Link>
                <Link href="/" style={txtStyles.p}>
                    Sobre
                </Link>
                <Text style={txtStyles.sub}>Versão 0.0.8 alpha</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    user: {
        gap: theme.spacing.d,
        flexDirection: "row",
        alignItems: "center",
    },
    userPic: {
        width: 128,
        backgroundColor: theme.colors.primary,
    },
    userName: {
        fontSize: 20,
        fontWeight: 500,
    },
    userInfo: {
        gap: theme.spacing.b,
    },
    optionsContainer: {
        gap: theme.spacing.e,
    },
    about: {
        flex: 1,
        flexDirection: "column",
    },
});
