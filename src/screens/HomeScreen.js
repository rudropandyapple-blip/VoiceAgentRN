import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [isListening, setIsListening] = useState(false);
  const [responseText, setResponseText] = useState('আমি আপনার কথা শুনছি...');

  const handleVoice = () => {
    setIsListening(!isListening);
    setResponseText('কল সংযোগ হচ্ছে...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="robot" size={40} color="#00f0ff" />
        <Text style={styles.title}>J.A.R.V.I.S.</Text>
      </View>

      <View style={styles.responseBox}>
        <Text style={styles.responseText}>{responseText}</Text>
      </View>

      <TouchableOpacity 
        style={[styles.micButton, isListening && styles.micActive]} 
        onPress={handleVoice}
      >
        <Icon name="microphone" size={40} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: '#00f0ff',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#00f0ff',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  responseBox: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#00f0ff',
  },
  responseText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  micButton: {
    backgroundColor: '#00f0ff',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#00f0ff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  micActive: {
    backgroundColor: '#ff0040',
    shadowColor: '#ff0040',
  },
});

export default HomeScreen;