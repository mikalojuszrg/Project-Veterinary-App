const MedsForm = ({
  handleSubmit,
  medsName,
  medsDescription,
  setMedsDescription,
  setMedsName,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={medsName}
          placeholder="Name"
          onChange={(e) => setMedsName(e.target.value)}
        />
        <input
          type="text"
          value={medsDescription}
          placeholder="Description"
          onChange={(e) => setMedsDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default MedsForm;
