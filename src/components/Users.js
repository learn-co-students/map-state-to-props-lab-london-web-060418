import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user =>
            <li>Username: {user.username}, Hometown: {user.hometown}</li>
          )}
          Total {this.props.userCount} Users!
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  }
}

export default connect(mapStateToProps)(Users)
