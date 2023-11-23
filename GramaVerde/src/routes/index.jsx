import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Main from '../pages/main/index';
import Saidas from '../pages/saidas/index';
import Orcamento from '../pages/orcamento/index';
import Entradas from '../pages/entradas';
import Perfil from '../pages/perfil';
import FinanceManagerApp from '../pages/projetos';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saidas"
          component={Saidas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orcamento"
          component={Orcamento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Entradas"
          component={Entradas}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Projetos"
          component={FinanceManagerApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}