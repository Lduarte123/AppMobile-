import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

function App() {
  const [img, setImg] = useState(require('../../src/biscoito.png'));
  const [textoFrase, setTextofrase] = useState('Clique em "Quebrar Biscoito" para revelar sua sorte.');

  const frases = [
    "Grandes surpresas estão a caminho.",
    "Você encontrará alegria onde menos espera.",
    "Um novo começo trará grandes oportunidades.",
    "Seu esforço será recompensado em breve.",
    "A sorte favorece os corajosos.",
    "Confie em sua intuição, ela sabe o caminho.",
    "Algo que você perdeu logo será encontrado.",
    "Sua gentileza abrirá portas importantes.",
    "Você está prestes a fazer uma descoberta valiosa.",
    "A vida sorrirá para você nas próximas 24 horas.",
    "Um encontro inesperado mudará sua perspectiva.",
    "Você é mais forte do que imagina.",
    "Em breve, você terá motivos para comemorar.",
    "Um pequeno gesto hoje trará grandes frutos amanhã.",
    "Boas notícias estão chegando pelo correio ou mensagem.",
    "O universo está conspirando a seu favor.",
    "Hoje é um bom dia para começar algo novo.",
    "Você será reconhecido por seu talento.",
    "Um desejo antigo está mais próximo de se realizar.",
    "Seu bom humor contagiará alguém especial."
  ];

  function quebraBiscoito() {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextofrase(`"${frases[numeroAleatorio]}"`);
    setImg(require('../../src/biscoitoAberto.png')); // só se você tiver essa imagem
  }

  function novoBiscoito() {
    setTextofrase('');
    setImg(require('../../src/biscoito.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { borderColor: "#121212" }]}
        onPress={novoBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>
            Novo Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 238,
    height: 238,
  },
  textofrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 5,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default App;
