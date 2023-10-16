//imports dependencias, imagenes, componentes, estilos
import reactLogo from "../images/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.scss";

// Fichero src/components/App.jsx
// Fichero src/components/App.jsx
// Fichero src/components/App.jsx
import { useEffect, useState } from "react";

function App() {

const [countriesList, setCountriesList] = useState ([]);

const [nameSearch, setNameSearch] = useState("");


useEffect(()=> {
  fetch("https://restcountries.com/v3.1/all?fields=name,capital,flag,continents")
  .then((response)=>response.json())
  .then((dataApi)=>{
    setCountriesList(dataApi)
    console.log(dataApi)
  })
}, [])

const handleChange =(ev) => {
  setNameSearch(ev.target.value)
}

const paintContruntries = () => {
 return  countriesList.filter((eachCountry)=>eachCountry.name.common.toLowerCase().includes(nameSearch))

  .map((eachCountry, index)=><li className="country_item" key={index}><p>{eachCountry.flag}</p><h3>{eachCountry.name.common}</h3><p>{eachCountry.capital}</p><p>{eachCountry.continents}</p></li>)
}

 

  // Funciones de renderizado



  return (
  
  <>
  <h2>Filters</h2>
  <form >
    <input
    className="form"
    type="text"
    placeholder="Spain..."
    onChange={handleChange}
   
    
    />
  </form>

  <select className="select">
      <option value="">All</option>
      <option className="" value="">Africa</option>
      <option className="" value="">North America</option>
      <option className="" value="">South America</option>
      <option className="" value="">Asia</option>
      <option className="" value="">Europe</option>
      <option className="" value="">Oceania</option>
    </select>
  <ul>
   {paintContruntries()}
  </ul>
  </>
  );
}

export default App;
