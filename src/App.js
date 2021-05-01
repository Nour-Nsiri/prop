import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';


function App() {
  const handleName=name=>alert(name) ;
  const styleObject = { color:"red" , textAlign : 'center'}
  return (
    <div>
        <Profile fullName="nour" bio="mabiographie"  profession="etudiante"  handleName={handleName}>
           <img src="image.jpg"/>
        </Profile>
    </div>
  );
}

export default App;
