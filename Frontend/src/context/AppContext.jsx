import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [link,setLink]=useState("/");
  const value = [
    {
      _id: "1",
      image: "../doc1.png",
      available: "Available",
      name: "Dr. Richard James",
      spec: "General physician",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sequi quae expedita sint. Mollitia facere, ut distinctio necessitatibus praesentium veritatis?",
      address:"Lorem ipsum, dolor sit amet consectetur",
      degree:"MBBS",
      experience:"3 years",
      fees:"500 rs"
    },
    {
      _id: "2",
      image: "../doc2.png",
      available: "Available",
      name: "Dr. Emily Larson",
      spec: "Gynecologist",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sequi quae expedita sint. Mollitia facere, ut distinctio necessitatibus praesentium veritatis?",
      address:"Lorem ipsum, dolor sit amet consectetur",
      degree:"MBBS",
      experience:"3 years",
      fees:"500 rs"
    },
    {
      _id: "3",
      image: "../doc3.png",
      available: "Available",
      name: "Dr. Sarah Patel",
      spec: "Dermatologist",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sequi quae expedita sint. Mollitia facere, ut distinctio necessitatibus praesentium veritatis?",
      address:"Lorem ipsum, dolor sit amet consectetur",
      degree:"MBBS",
      experience:"3 years",
      fees:"500 rs"
    },
    {
      _id: "4",
      image: "../doc4.png",
      available: "Available",
      name: "Dr. Christopher Lee",
      spec: "Pediatricians",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sequi quae expedita sint. Mollitia facere, ut distinctio necessitatibus praesentium veritatis?",
      address:"Lorem ipsum, dolor sit amet consectetur",
      degree:"MBBS",
      experience:"3 years",
      fees:"500 rs"
    },
    {
      _id: "5",
      image: "../doc6.png",
      available: "Available",
      name: "Dr. Jennifer Garcia",
      spec: "Neurologist",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sequi quae expedita sint. Mollitia facere, ut distinctio necessitatibus praesentium veritatis?",
      address:"Lorem ipsum, dolor sit amet consectetur",
      degree:"MBBS",
      experience:"3 years",
      fees:"500 rs"
    },
  ];
  return (
    <AppContext.Provider value={{value,link,setLink}}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
