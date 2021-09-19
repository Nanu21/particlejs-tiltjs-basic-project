import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Panel from './components/panel/Panel';
import Footer from './components/footer/Footer';
import ParticleBackground from './ParticleBackground';


function App() {
  // data is to be fetched from the api so initially it is set to an emtpty object
  const [ data, setData ] = useState([]);

  // darktheme to be turned on/off according to the switch position, by default it is off 
  const [ darkTheme, setDarkTheme ] = useState(false);

  // async function to fetch data from the api and await is used so that the code will move forward only
  // when the data is fetched from the api    
    async function loadData() {
        await fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(receivedData => setData(receivedData.data))
        .catch(error => console.log(error));    
    }

    // loads the data once as the page loads {if [] => once and if [something] => when something changes}
    useEffect(() => {
        loadData();
    }, []);

    // console.log(data);

  return (
    <div className={"app " + (darkTheme && "dark")}> {/* when darktheme is active the className contains two classes card and dark */}
      <ParticleBackground darkTheme={darkTheme} /> 
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Panel darkTheme={darkTheme} data={data}/>
      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
