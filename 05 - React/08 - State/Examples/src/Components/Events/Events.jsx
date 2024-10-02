export default function Events() {

    function handleClick() {
        alert('You have cliked the button!')
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Form was submittet');
    }
    return (
        <div>
            <h1>Events</h1>
            <button onClick={handleClick}>Click me</button>

            <hr />

            <form onSubmit={handleSubmit}>
                <button type="submit">Submit form</button>
            </form>
        </div>
    )
};