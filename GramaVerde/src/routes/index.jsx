import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import perguntas0 from '../pages/perguntas0';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Login"
            component= { Login }
            options= { {headerShown: false} }
            />
            <Stack.Screen 
            name="Cadastro" 
            component= { Cadastro }
            options= { {headerShown: false} }
            />
            <Stack.Screen 
            name="perguntas0" 
            component= { perguntas0 }
            options= { {headerShown: false} }
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}