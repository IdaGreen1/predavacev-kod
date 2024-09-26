export default function Student(props) {
    return (
        <div>
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>Student ID: {props.uid}</p>
        </div>
    );
}