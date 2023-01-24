import { useState, createContext } from "react";

const DonationContext = createContext();

const DonationProvider = ({ children }) => {
  const [donated, setDonated] = useState(false);

  const toggleDonated = () => {
    setDonated(true);
  };

  return (
    <DonationContext.Provider value={{ donated, toggleDonated }}>
      {children}
    </DonationContext.Provider>
  );
};

export { DonationContext, DonationProvider };
