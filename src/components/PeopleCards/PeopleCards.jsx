import Card from '../../Card'
import personsData from "../../data/personData";
import './PeopleCards.css'


const PeopleCards = ({ props }) => {

    if (props) {
        return personsData.map((person) => (

            <Card key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                animal={person.animal}

            />

        ))


    }
    return;
}

export default PeopleCards;