import React from "react";

export default class PropsKlase extends React.Component{
    render() {
        class ChildComponent extends React.Component {
            render() {
                return (
                    <h1>
                        Ja sam {this.props.name}
                    </h1>
                );
            }
        
        }

        class ParentComponent extends React.Component{
            render() {
                return (
                    <div>
                        <h1>Ja sam Parent Component</h1>
                        <ChildComponent name='Child component' />
                    </div>
                );
            }
        }
        return (
            <div>
                <ParentComponent />
            </div>
        )
     }
 }
