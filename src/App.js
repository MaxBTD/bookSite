import './App.css';
import Book from './Books.jsx';

function App() {
  return (
    <div className='App'>
      <h1>Księgarnia Konrada</h1>
      <Book name="Granica" author="Zofia Nałkowska" genre="Kryminał, Powieść Psychologiczna"/>
      <Book name="1984" author="George Orwell" genre="Dystopia, Polityczna, Naukowa" />
      <Book name="Iliada" author="Homer" genre="Poezja Epicka, Epopeja"/>
      <Book name="Lalka" author="Bolesław Prus" genre="Społeczno-Obyczajowa, Społeczna"/>
      <Book name="Pan Tadeusz" author="Adam Mickiewicz" genre="Poezja Epicka, Epopeja"/>
      <Book name="Zbrodnia i Kara" author="Fiodor Dostojewski" genre="Kryminał, Psychologiczna, Filozoficzna"/>
    </div>
  );
}

export default App;
