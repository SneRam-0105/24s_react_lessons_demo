import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import personData from "../data/personData";




const List = () => {

    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/${id}`);
    };



    return (

        <div>
            <main>
                <>
                    <h2>Employee Data</h2>
                    <div className="list">

                        {personData.map((person) => (

                            <Card key={person.id}
                                firstName={person.firstName}
                                title={person.title}
                                age={person.age}
                                animal={person.animal}
                                onClick={() => handleNavigate(person.id)}
                            />
                        ))}
                    </div>
                </>
            </main>
        </div>
    );
};


export default List;