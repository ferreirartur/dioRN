import React from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/90856238?v=4';
const urlToMyGithub = 'https://github.com/ferreirartur';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link...');
            Linking.openURL(urlToMyGithub)
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={"light-content"} />
            <View style={style.content}>
                <Image
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                    accessibilityLabel="Foto close-up de Artur Ferreira" />
                <Text
                    accessibilityLabel="Nome Artur Ferreira"
                    style={[style.defaultText, style.name]}>Artur Ferreira
                </Text>
                <Text
                    accessibilityLabel="Nickname Artur Ferreira, que é ferreirartur"
                    style={[style.defaultText, style.nickname]}>github.com/ferreirartur
                </Text>
                <Text
                    accessibilityLabel="Descrição: Artur Ferreira, software engineer em formação / web developer"
                    style={[style.defaultText, style.description]}>software engineer em formação / web developer
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
