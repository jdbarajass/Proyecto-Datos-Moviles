import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import api from '../services/api';

export default function TestConnection() {
  const [serverTime, setServerTime] = useState(null);
  const [error, setError] = useState(null);

  const fetchServerTime = async () => {
    try {
      const response = await api.get('/test/dbtest');
      setServerTime(response.data.time);
      setError(null);
    } catch (err) {
      setError('Error al conectar con backend: ' + err.message);
      setServerTime(null);
    }
  };

  useEffect(() => {
    fetchServerTime();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Prueba de Conexión Backend - Base de Datos:</Text>
      {serverTime && <Text>Hora actual en Base de Datos: {serverTime}</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Reintentar conexión" onPress={fetchServerTime} />
    </View>
  );
}
