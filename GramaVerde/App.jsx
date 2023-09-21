import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes/index.jsx';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});