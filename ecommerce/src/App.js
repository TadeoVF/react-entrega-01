import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <header>    
         <NavBar />
      </header>
      <main>
        <ItemList greeting={'Bienvenidos a mi pagina'}/>
      </main>
 
    </div>
  );
}

export default App;
