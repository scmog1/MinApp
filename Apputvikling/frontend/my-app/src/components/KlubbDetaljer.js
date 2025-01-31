import '../css/pages/Klubber.css';

const KlubbDetaljer = ({ klubb, onDelete }) => {
  const handleClick = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${klubb.klubbNavn}?`
    );
    if (!confirmed) return;

    const response = await fetch('/api/klubber/' + klubb._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      onDelete(klubb._id);
    }
  };

  return (
    <div className='klubb-detaljer'>
      <h3>{klubb.klubbNavn}</h3>
      <p>
        <strong>Lokasjon: </strong>
        {klubb.lokasjon}
      </p>
      <p>
        <strong>Mail: </strong>
        {klubb.mail}
      </p>
      <p>
        <strong>Kontakt Person: </strong>
        {klubb.kontaktPerson}
      </p>
      <p>{new Date(klubb.createdAt).toLocaleDateString()}</p>
      <button className='delete-button' onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default KlubbDetaljer;
