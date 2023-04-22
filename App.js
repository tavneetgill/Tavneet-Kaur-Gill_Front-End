import logo from './logo.svg';
import './App.css';
import List from './list';

function App() {
  return (
    <List items={[{text: 'Choose 1'}, {text: 'Choose 2'}, {text: 'Choose 3'},{text: 'Choose 4'}]} />
  );
}

export default App;
