export default function ChildrenProps() {

    function Component1(props) {
        return <h3>{props.children}</h3>
    };

    function Component2() {
        return (
            <Component1>
                <h1>Naslov</h1>
                <p>Paragraf</p>
            </Component1>
        )
    }

    return (
        <div>
            <Component2 />
        </div>
    );
}