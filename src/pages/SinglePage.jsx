import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import persons from "../data/personData";

const SinglePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const person = persons.find((person) => person.id === parseInt(id));

    return (
        <div>
            <h2>Single Page for {person.firstName} </h2>
            <p>Title: {person.title} </p>
            <p>Age: {person.age} </p>
            <p>Animal: {person.animal}</p>
            <Button text="Back to List" onClick={() => navigate("/")} />
        </div>
    );
};

export default SinglePage;