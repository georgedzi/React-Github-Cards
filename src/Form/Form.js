import React from "react";


class Form extends React.Component {

    state = { userName: '' }; // is this example of hook?
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    type="text"
                    placeholder="GitHub username"
                    required />
                <button>Add Card</button>
            </form>
        );
    }
}


export default Form