// src/components/Button.jsx
import { Link } from 'react-router-dom';

export default function Button({ to, onClick, children, className }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{ textDecoration: 'none' }}
      className={className}
    >
      {children}
    </Link>
  );
}
