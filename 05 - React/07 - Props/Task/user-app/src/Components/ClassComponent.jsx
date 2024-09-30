import React from 'react';

class ClassComponent extends React.Component{
    render(){
        return (
            <div>
               <p>Name:{this.props.name}</p>
               <p>Age:{this.props.years}</p>
            </div>
        )
    }
}

export default ClassComponent;