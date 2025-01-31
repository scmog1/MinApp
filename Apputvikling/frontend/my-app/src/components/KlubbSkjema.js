import { useState } from 'react';
import '../css/pages/Klubber.css';

const KlubbSkjema = ({ onAdd }) => {
  const [klubbNavn, setKlubbNavn] = useState('');
  const [lokasjon, setLokasjon] = useState('');
  const [mail, setMail] = useState('');
  const [kontaktPerson, setKontaktPerson] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const klubb = { klubbNavn, lokasjon, mail, kontaktPerson };

    const response = await fetch('/api/klubber', {
      method: 'POST',
      body: JSON.stringify(klubb),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setKlubbNavn('');
      setLokasjon('');
      setMail('');
      setKontaktPerson('');
      setError(null);
      onAdd(json);
    }
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Legg til en ny Klubb</h3>

      <label>Klubb Navn</label>
      <input
        type='text'
        placeholder='Stavanger Discgolf'
        onChange={(e) => setKlubbNavn(e.target.value)}
        value={klubbNavn}
      />

      <label>Lokasjon</label>
      <input
        type='text'
        placeholder='Stavanger'
        onChange={(e) => setLokasjon(e.target.value)}
        value={lokasjon}
      />

      <label>Epost</label>
      <input
        type='text'
        placeholder='stavanger@noreply.com'
        onChange={(e) => setMail(e.target.value)}
        value={mail}
      />

      <label>Kontakt Person</label>
      <input
        type='text'
        placeholder='John Helland'
        onChange={(e) => setKontaktPerson(e.target.value)}
        value={kontaktPerson}
      />

      <button>Legg til klubb</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default KlubbSkjema;
