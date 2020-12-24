import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function Additions({
  availableAdditions,
  selectedAdditions,
  setSelectedAdditions, 
  priceOfAdditions, 
  setPriceOfAdditions
}) {
  const [additions, setAdditions] = useState([]);
  useEffect(() => {
    fetch("https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/additionals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((result) => setAdditions(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
      setPriceOfAdditions(selectedAdditions.reduce(function (acc, elem) {
          return (acc + (additions.find(addition => addition.id === elem)).price)
        }, 0));
  }, [selectedAdditions, additions, setPriceOfAdditions]);

  const handleChange = (val) => setSelectedAdditions(val)

  return (
      <>
        <ToggleButtonGroup type="checkbox" vertical value={selectedAdditions} onChange={handleChange}>
        {additions.map(function (addition) {
          return (
              <ToggleButton
                key={`additional-${addition.id}`}
                type="checkbox"
                value={addition.id}
                variant="secondary"
          >{addition.name} (цена - {addition.price} руб)</ToggleButton>
          );
        })}   
        </ToggleButtonGroup>     
      </>
  );
}

export default Additions;
