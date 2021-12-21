import './App.css'
import MagicBall from './components/magicBall/MagicBall'
import { useState, useEffect } from 'react';

const App = () => {
  const [tirada, setTirada] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const VALUES = ["Sí", 
  "No", 
  "Tal vez", 
  "Quizás", 
  "Lo más probable", 
  "Sin lugar a dudas", 
  "Definitivamente no",
  "Mejor no contestar"];


  useEffect(() => {
    const aleat = Math.floor(Math.random() * 8);
    setMensaje(VALUES[aleat]);
  }, [])


  useEffect(() => {
    if(tirada){
      const aleat = Math.floor(Math.random() * 8);
      setMensaje(VALUES[aleat]);
      setTirada(false);
    }
   
  }, [tirada])
  
  




  return (
    <div className="a-main">
      <h2 className="a-title">The Magic Ball</h2>
      <h3 className="a-subtitle">Conoce tu futuro</h3>
      <MagicBall result={mensaje} setTirada={setTirada}/>
      <div className="footer">
        <div className="footer-info">Todos los derechos reservados</div>
        <div className="footer-info">MDG Dev</div>
      </div>
    </div>
  )
}

export default App
