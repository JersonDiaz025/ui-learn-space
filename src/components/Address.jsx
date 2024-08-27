import Title from "./Title";
import useAddress from "../hooks/useAddress";

const Address = () => {
  const { address, handleChange, handleSubmit } = useAddress();
  return (
    <div>
      <div
        className="form-container"
        style={{ height: "auto", padding: "10px", backgroundColor: "red" }}
      >
        <Title title="Agregar dirección" />
        <form className="form" onSubmit={handleSubmit}>
          <label>Calle</label>
          <input
            type="text"
            name="street"
            required
            className="input"
            value={address.street}
            onChange={(ev) => handleChange(ev)}
            placeholder="Nombre de la calle"
          />
          <label>Número de calle</label>
          <input
            type="text"
            name="street_number"
            required
            className="input"
            value={address.street_number}
            onChange={(ev) => handleChange(ev)}
            placeholder="Número de calle"
          />
          <label>Sector</label>
          <input
            type="text"
            name="sector"
            required
            className="input"
            value={address.sector}
            onChange={(ev) => handleChange(ev)}
            placeholder="Nombre del sector"
          />
          <label>Ciudad</label>
          <input
            type="text"
            name="city"
            required
            className="input"
            value={address.city}
            onChange={(ev) => handleChange(ev)}
            placeholder="Nombre de la ciudad"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
