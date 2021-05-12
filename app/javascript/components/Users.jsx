import React from "react";
import { Link } from "react-router-dom";
class Users extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      };
    }
    
    
  componentDidMount() {
    const url = "/api/v1/users/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ recipes: response }))
      .catch(() => this.props.history.push("/"));
    }

    render() {
        const { users } = this.state;
        const allUsers = users.map((user, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={user.image}
                className="card-img-top"
                alt={`${user.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <Link to={`/user/${user.id}`} className="btn custom-button">
                  View user
                </Link>
              </div>
            </div>
          </div>
        ));
        const noUser = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No user yet. Why not <Link to="/new_user">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-4">user for every occasion</h1>
                <p className="lead text-muted">
                  We’ve pulled together our most popular user, our latest
                  additions, and our editor’s picks, so there’s sure to be something
                  tempting for you to try.
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/recipe" className="btn custom-button">
                    Create New user
                  </Link>
                </div>
                <div className="row">
                  {users.length > 0 ? allUsers : noUser}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
    


  }
  export default Users;