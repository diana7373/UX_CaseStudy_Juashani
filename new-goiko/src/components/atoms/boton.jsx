// Le decimos al botón que reciba la propiedad "variant"
function Button({ variant }) {
  // Si variant es "purple", usa el fondo morado; si no, usa el rojo por defecto
  const colorClass = variant === 'purple' ? 'bg-purple' : 'bg-red';

  return (
    <button className={`button font-pixel ${colorClass}`}>
      Comprar
    </button>
  );
}

export default Button;