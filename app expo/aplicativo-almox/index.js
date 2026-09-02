import { registerRootComponent } from 'expo';

import App from './App';

import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/expooo.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          SISTEMA DE ALMOXARIFADO
        </Text>

        <Card style={styles.card}>
          <Card.Title title="LOGIN" titleStyle={styles.cardTitulo} />

          <Image source={require('../assets/image2.png')} style={styles.imagem2} />

          <Text style={styles.subtitle}>EMAIL:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.subtitle}>SENHA:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />

          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/tabela')}
          >
            <Text style={styles.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    padding: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  paragraph: {
    margin: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  cardTitulo: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#1D3273',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: '#1D3273',
    marginTop: 10,
  },
  imagem2: {
    height: 70,
    width: 110,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: 5,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#1D3273',
    paddingVertical: 12,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#1D3273',
    backgroundColor: 'transparent',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    color: '#1D3273',
  },
});
