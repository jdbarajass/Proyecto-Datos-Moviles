import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import api from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Lógica de autenticación
    // Por ahora, simula login exitoso
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}
