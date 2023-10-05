import React from "react";

const MenuForDinner = () => {
  const menuFunction = () => {
    const data = ["Yabloko", "Grusha", "Banan"];
    functionMenu(data);
  };
  const functionMenu = (data) => {
    data.forEach((item) => {
      console.log(item);
    });
  };
  return (
    <div>
      <button onClick={menuFunction}>вывести все элементы массива</button>
    </div>
  );
};

export default MenuForDinner;
