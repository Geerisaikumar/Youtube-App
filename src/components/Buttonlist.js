import React from "react";
import Button from "./Button";

let buttonName = [
  "All",
  "Pawan Kalyan",
  "Cricket",
  "Javascript",
  "Dhoni",
  "IPL",
  "React",
  "Music",
  "Virat",
  "Namste React",
  "Cricket",
  //"Football",
  // "Cristiano Ronaldo",
  // "Amigos"
];

const Buttonlist = () => {
  return (
    <div className="flex h-11 rounded sticky top-[3.6rem] bg-white pl-3 ">
      {buttonName.map((name, indx) => (
        <Button key={indx} name={name} />
      ))}
    </div>
  );
};

export default Buttonlist;
