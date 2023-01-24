import { useState, createContext } from "react";

const DonationContext = createContext();

const DonationProvider = ({ children }) => {
  const [donated, setDonated] = useState([]);

  const toggleDonated = (newDonation) => {
    setDonated((prevArray) => [...prevArray, newDonation]);
  };

  return (
    <DonationContext.Provider value={{ donated, toggleDonated }}>
      {children}
    </DonationContext.Provider>
  );
};

export { DonationContext, DonationProvider };
