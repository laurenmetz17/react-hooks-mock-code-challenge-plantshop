import React, {useState} from "react";

function NewPlantForm(plants, setPlants) {

  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState(0);


  function addPlant(e) {
    e.preventDefualt();
    const newPlant = {};
    newPlant.name = plantName;
    newPlant.image = plantImage;
    newPlant.price = plantPrice;
    console.log(newPlant);
    //setPlants(...plants, newPlant);

  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input onChange={(e) => setPlantName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setPlantImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPlantPrice(e.target.value)}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
