import React, { Component } from 'react';
import { toast } from 'react-toastify';

class FollowUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followed: 'unfollow',
    };
    this.handleclick = this.handleclick.bind(this);
  }

  async handleclick() {
    const token = localStorage.getItem('token');
    const label = this.state.followed ? 'unfollow' : 'follow';
    if (label === 'follow') {
      await fetch(
        `https://codepirates-ah-backend-staging.herokuapp.com/api/v1/users/profiles/${this.props.userId}/follow`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-access-token': `Bearer ${token}`,
          },
          body: JSON.stringify(),
        },
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 'error') {
            toast.error('You cannot follow yourself');
          }
        });
      this.setState({
        followed: !this.state.followed,
      });
    }
    if (label !== 'follow') {
      await fetch(
        `https://codepirates-ah-backend-staging.herokuapp.com/api/v1/users/profiles/${this.props.userId}/follow`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-access-token': `Bearer ${token}`,
          },
          body: JSON.stringify(),
        },
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 'error') {
            toast.error('You cannot follow yourself');
          }
        });
      this.setState({
        followed: !this.state.followed,
      });
    }
  }

  render() {
    const text = this.state.followed ? 'followed' : 'have not followed';
    const label = this.state.followed ? 'unfollow' : 'follow';

    return (
      <div>
        <button
          variant="primary"
          onClick={this.handleclick}
        >
          {label}
        </button>
      </div>
    );
  }
}

export default FollowUserComponent;
