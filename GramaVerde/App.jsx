import Routes from './src/routes/index.jsx';
export const listaSaidas = [
  {
    id: 1,
    label: 'Conta de Água',
    value: 129.38,
    date: "15/11/2023",
    numero: 1,
    type: 0 //saídas
  },
  {
    id: 2,
    label: 'Conta de Energia',
    value: 184.21,
    date: "06/12/2023",
    numero: 1,
    type: 0 //saídas
  },
  {
    id: 3,
    label: 'Conta de Internet',
    value: 109.9,
    date: "15/11/2023",
    numero: 1,
    type: 0 //saídas
  },
  {
    id: 4,
    label: 'Salário',
    value: 4.99,
    date: "15/11/2023",
    numero: 1,
    type: 1 //saídas
  }
]

export default function App() {
  return (
      <Routes/>
  );
}