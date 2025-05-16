import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";



export default function App() {
  const [numero, setNumero] = useState('00:00:00')
  const [botao, setBotao] = useState('Vai')
  const [ultimo, setUltimo] = useState(null)
  const ss = useRef(0);
  const mm = useRef(0);
  const hh = useRef(0);
  const timer = useRef(null);

  function vai() {
    if (timer.current !== null) {
      // Se o cronômetro estiver rodando, para ele
      clearInterval(timer.current);
      timer.current = null;
      setBotao('Vai');
    } else {
      // Inicia o cronômetro
      // Inicia o cronômetro com precisão real de 1 segundo
  timer.current = setInterval(() => {
  ss.current++;

  if (ss.current === 60) {
    ss.current = 0;
    mm.current++;
  }

  if (mm.current === 60) {
    mm.current = 0;
    hh.current++;
  }

  let format = 
    `${hh.current < 10 ? '0' + hh.current : hh.current}:` +
    `${mm.current < 10 ? '0' + mm.current : mm.current}:` +
    `${ss.current < 10 ? '0' + ss.current : ss.current}`;

  setNumero(format);
}, 100); // Agora o cronômetro atualiza a cada 1 segundo real

  
      setBotao('Parar');
    }
  }
  
  function limpar(){
    if(timer.current !== null){
      clearInterval(timer.current);
      timer.current = null;
    }
  
    setUltimo(numero);
    setNumero('00:00:00');
    ss.current = 0;
    mm.current = 0;
    hh.current = 0;
    setBotao('Vai');
  }
  

  return(
    <View style={styles.conteiner}>
      
      <Image style={styles.imagem}
     source={require('../../src/cronometro.png'
     )}
      />
      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
        
        
      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>{ultimo ? 'Ultimo Tempo: ' + ultimo : ''}</Text>

      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  conteiner:{
    backgroundColor:'#00aeef',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  timer:{
    marginTop: -238,
    fontSize:45,
    color:"white"

  },
  imagem:{
    width:400,
    height:500
  },
  btnArea:{
    flexDirection: "row",
    marginTop: 200,
    height:40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height: 40,
    width:70,
    margin: 17,
    borderRadius:10
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima:{
    marginTop:40,
  },
  textoCorrida:{
    fontSize: 25,
    color:'white',
    fontStyle:'italic'
  }
})