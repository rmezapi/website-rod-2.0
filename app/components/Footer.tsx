import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} rodrigo meza pineda</p>
    </footer>
  );
}
