import Card from '../../Card'
import personsData from "../../data/personData";
import './PeopleCards.css'


const PeopleCards = ({ props }) => {

    const handleClick = (id) => {
        console.log("I was clicked", id)
    }

    if (props) {



        return personsData.map((person) => (

            <Card key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                animal={person.animal}
                click={() => handleClick(person.id)}

            />

        ))


    }
    return;
}

export default PeopleCards;