import Card from "../components/Card";
import personData from "../data/personData"
import './PeopleCards.css'


const List = () => {





    return (

        <div>
            <main>
                <>
                    <h2>Employees</h2>
                    <div className="list">

                        {personData.map((person) => (

                            <Card key={person.id}
                                firstName={person.firstName}
                                title={person.title}
                                age={person.age}
                                animal={person.animal}

                            />
                        ))}
                    </div>
                </>
            </main>
        </div>
    );
};


export default List;