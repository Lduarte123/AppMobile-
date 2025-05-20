
# 📜 Estudo sobre ScrollView – React Native

## O que é `ScrollView`?

O `ScrollView` é um componente do React Native que permite rolar o conteúdo da tela quando ele ultrapassa o tamanho da tela visível.

---

## 🧩 Propriedades estudadas

### ✅ `horizontal`

- **Descrição:** Define a direção da rolagem como horizontal.
- **Tipo:** `boolean`
- **Valor padrão:** `false`
- **Exemplo de uso:**

```jsx
<ScrollView horizontal={true}>
  {/* Componentes filhos aqui */}
</ScrollView>
```

- **Resultado esperado:** Os elementos dentro do `ScrollView` serão exibidos lado a lado, e o usuário poderá deslizar para a esquerda ou direita.

---

### ✅ `showsVerticalScrollIndicator`

- **Descrição:** Controla se a barra de rolagem vertical será exibida ou não.
- **Tipo:** `boolean`
- **Valor padrão:** `true`
- **Exemplo de uso:**

```jsx
<ScrollView showsVerticalScrollIndicator={true}>
  {/* Componentes filhos aqui */}
</ScrollView>
```

- **Quando `true`:** A barra de rolagem vertical aparece quando o conteúdo ultrapassa a altura da tela.
- **Quando `false`:** A barra de rolagem vertical **não** será exibida, mesmo que o conteúdo seja rolável.

---

## 🧪 Exemplo prático:

```jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View>
        {Array.from({ length: 30 }).map((_, index) => (
          <Text key={index}>Item {index + 1}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
```

---

## 💡 Observações

- `ScrollView` é útil para conteúdos pequenos ou médios. Para listas grandes, prefira usar `FlatList`.
- Você pode combinar as propriedades `horizontal={true}` com `showsHorizontalScrollIndicator={false}` se quiser uma rolagem lateral sem barra visível.
