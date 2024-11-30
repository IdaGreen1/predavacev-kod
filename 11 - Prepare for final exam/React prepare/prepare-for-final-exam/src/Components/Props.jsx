export default function Props() {
    function ChildComponent(props) {
        return (
            <h2>Heloo from child component, my name is {props.name}</h2>
        );
    }

    function ParentComponent() {
        return (
            <div>
                <h1>Hello I'm ParentComponent</h1>
                <ChildComponent name='John Doe' />
            </div>
        );
    }

    return (
        <div>
            <ParentComponent />
            
        </div>
    )
}