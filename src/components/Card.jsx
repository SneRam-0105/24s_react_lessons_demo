import { useState } from 'react';
import Button from './Button'

function Card({ firstName, title, age, animal, onClick }) {

  const [animalValue, setAnimalValue] = useState(animal);

  const [isEditing, setIsediting] = useState(false);

  const toggleEdit = () => setIsediting((prev) => !prev);
  const handlechange = (e) => {
    console.log(e.target)
    setAnimalValue(e.target.value)
  }
  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      {/* <p>Animal: {animal}</p> */}
      {isEditing ? (
        <input type="text" value={animalValue} onChange={handlechange} />
      ) : (
        <p>Animal:{animalValue}</p>
      )
      }

      <Button variant="secondary" onClick={toggleEdit} text={isEditing ? "Save" : "Edit Animal"} />
      <Button text="See More" onClick={onClick} />
    </div>
  );
}

export default Card;