import React, { Component } from 'react';
import Users from '../Users/Users';
class UserlistComponent extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            isFetching: true
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ users: result, isFetching: false })
            })
            .catch(e => {
                console.log(e);
                this.setState({ ...this.state, isFetching: false });
            });
    }
    
    render() {
        return (
            <div>
                UserlistComponent
                <div className="div_class">
                    {this.state.users.map(
                        user => (
                            <Users key={user.id} user={user}></Users>
                        )
                    )}
                </div>
            </div>
        )
    }
}
export default UserlistComponent