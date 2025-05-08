import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  function pegaNome(texto) {
    setNome(texto);
    if (texto.length > 0) {
      setMensagem(`Bem vindo ${texto}`);
    } else {
      setMensagem("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome"
        onChangeText={(text) => pegaNome(text)}
        value={nome}
      />
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 43,
    borderWidth: 1,
    margin: 10,
    padding: 17,
    fontSize: 20,
  },
  texto: {
    textAlign: "center",
  },
});

export default App;