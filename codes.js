import { Component } from "react";
import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/users";
export default class RestApp extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    return axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    return (
      <div>
        <p>User Data</p>

        {this.state.users.map((user) => (
          <div>
            {user.name} --- {user.email}
          </div>
        ))}
      </div>
    );
  }
}
