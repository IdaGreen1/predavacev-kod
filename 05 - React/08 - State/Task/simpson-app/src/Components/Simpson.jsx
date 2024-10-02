import { Component } from "react";

export default class Simpson extends Component {

    state = {
        firstName: 'Lisa',
        bestFriend: 'Janney Powel',
        lovingSchool: true,
        imgUrl:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
    }

    changeState = () => {
        this.setState({ firstName: 'Bart', bestFriend: 'Milhouse Van Houte', lovingSchool: false, imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png' }) 
      
    }


    render() {
        return(
            <div>
                <SimpsonTalk imgUrl={this.state.imgUrl} firstName={this.state.firstName} bestFriend={this.state.bestFriend} lovingSchool={this.state.lovingSchool}/>
                <button onClick={this.changeState}>Change Character</button>
            </div>
        )
    }
}

function SimpsonTalk (props) {
    return (
        <div>
            <img src={props.imgUrl} alt={props.firstName}/>
            <p> Hi, my name is {props.firstName}. My best friend is {props.bestFriend} and my mother is Marge Simpson. I really, really {props.lovingSchool} love school.
           </p>
        </div>
    )
}