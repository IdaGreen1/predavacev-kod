import { Component } from "react";

export default class Simpson extends Component {

    state = {
        firstName: 'Lisa',
        bestFriend: 'Janney Powel',
        lovingSchool: 'love school',
        imgUrl: 'https://all-free-download.com/free-vector/download/lisa_simpson_01_the_simpsons_51462.html',
    }

    changeState = () => {
        this.setState({firstName:'Bart', bestFriend:'Milhouse Van Houte', lovingSchool:"don't"})
    }

    render() {
        return(
            <div>
                <SimpsonTalk firstName={this.state.firstName} bestFriend={this.state.bestFriend} lovingSchool={this.state.lovingSchool}/>
                <button onClick={this.changeState}>Change Character</button>
            </div>
        )
    }
}

function SimpsonTalk (props) {
    return (
        <div>
            <p> Hi, my name is {props.firstName}. My best friend is {props.bestFriend} and my mother is Marge Simpson. I really, really {props.lovingSchool} love school.
           </p>
        </div>
    )
}