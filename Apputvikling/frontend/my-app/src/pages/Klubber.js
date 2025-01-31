import React, { useEffect, useState } from 'react';
import '../css/pages/Klubber.css';

// components
import KlubbDetaljer from '../components/KlubbDetaljer';
import KlubbSkjema from '../components/KlubbSkjema';

const Klubber = () => {
  const [klubber, setKlubber] = useState(null);

  useEffect(() => {
    const fetchKlubber = async () => {
      const response = await fetch('/api/klubber');
      const json = await response.json();

      if (response.ok) {
        setKlubber(json);
      }
    };

    fetchKlubber();
  }, []);

  const handleDelete = (id) => {
    setKlubber(klubber.filter((klubb) => klubb._id !== id));
  };

  const handleAdd = (newKlubb) => {
    setKlubber([newKlubb, ...klubber]);
  };

  return (
    <div className='klubb-container'>
      <div>
        {klubber &&
          klubber.map((klubb) => (
            <KlubbDetaljer
              key={klubb._id}
              klubb={klubb}
              onDelete={handleDelete}
            />
          ))}
      </div>
      <div>
        <KlubbSkjema onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default Klubber;
