import React from 'react';
import Card from 'react-bootstrap/Card';
import style from './following.scss';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      data: {
        following: [],
      },
    };
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  async componentDidMount() {
    const { userId } = this.state;
    const token = localStorage.getItem('token');
    const data = await fetch(
      'https://codepirates-ah-backend-staging.herokuapp.com/api/v1/users/profiles/following',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'x-access-token': `Bearer ${token}`,
        },
        body: JSON.stringify(),
      },
    ).then((res) => res.json());
    this.setState({ data });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { userId, data } = this.state;
    return (
      <div>
        <h3 className="titles">Following</h3>
        <div className="col-sm-6 box" style={style}>
          {data.following.map((follower) => (
            <Card key={follower.username} style={{ margin: '10px' }}>
              <Card.Body>
                <Card.Title style={{ cursor: 'pointer' }} as="a" href="">
                  {follower.username}
                </Card.Title>
                <Card.Text>{follower.username}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  {follower.lastname}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {follower.email}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
export default Following;
