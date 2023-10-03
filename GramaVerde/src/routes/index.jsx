import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Perguntas0 from '../pages/perguntas0';
import Perguntas1 from '../pages/perguntas1';
import Perguntas2 from '../pages/perguntas2';
import Main from '../pages/main';

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
            name="Perguntas0" 
            component= { Perguntas0 }
            options= { {headerShown: false} }
            />
            <Stack.Screen 
            name="Perguntas1" 
            component= { Perguntas1 }
            options= { {headerShown: false} }
            />
            <Stack.Screen 
            name="Perguntas2" 
            component= { Perguntas2 }
            options= { {headerShown: false} }
            />
            <Stack.Screen 
            name="Main" 
            component= { Main }
            options= { {headerShown: false} }
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}