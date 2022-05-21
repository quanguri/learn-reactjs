import React from 'react';
import ReactDOM from 'react-dom';
class ClassChangeColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'red',
        }

    }
    render() {
        return (
            <div>
                <button style={{ backgroundColor: this.state.color }} onClick={() => this.setState({ color: 'blue' })}>Change Color</button>
                <button style={{ backgroundColor: this.state.color }} onClick={() => this.setState({ color: 'black' })}>Change Color</button>
            </div>
        );
    }
}
ReactDOM.render(
    <ClassChangeColor />,
    document.getElementById('btn-2')
);