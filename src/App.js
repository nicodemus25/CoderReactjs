import NavBar from './Components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
   
      <div>
        <NavBar texto='soy un texto'/> 
      </div>
        <div>
          preentrega1+feinsilber
          <ItemListContainer greeting='Bienvenidos a ItemListContainer' />
        </div>
    </>
  );
}

export default App;


