const PetsForm = ({
  petName,
  setPetName,
  petAge,
  setPetAge,
  petEmail,
  setPetEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        placeholder="Pet name"
      />
      <input
        type="text"
        value={petAge}
        onChange={(e) => setPetAge(e.target.value)}
        placeholder="Pet age"
      />
      <input
        type="email"
        value={petEmail}
        onChange={(e) => setPetEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default PetsForm;
