import "./index.css";
import Button from "./components/atoms/boton";

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button /> {/* Este será el rojo por defecto */}
      <Button variant="purple" /> {/* Este se volverá morado */}
    </div>
  );
}

export default App;