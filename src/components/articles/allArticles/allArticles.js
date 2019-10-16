import React, { Component } from 'react';
import './allArticles.scss';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
class GetArticles extends Component {
  state = {
    articles: []
  };

  addArticle = article => {
    this.setState(prevState => ({
      articles: [...prevState.articles, article]
    }));
  };

  componentDidMount() {
    fetch('https://codepirates-ah-backend.herokuapp.com/api/v1/articles')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ articles: data.data });
        console.log(this.state.articles);
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state.articles);

    return (
      <div className='container main '>
        <div className='col-xs-12'>
          {this.state.articles.map(article => (
            <CardDeck key={article.slug} className='spinner'>
              <Card>
                <Card.Img
                  variant='top'
                  src={
                    article.images
                      ? article.images[0]
                      : 'https://res.cloudinary.com/nshuti-jonathan/image/upload/v1561010981/vawgqff1561l2msh2nxi.jpg'
                  }
                />
                <Card.Body>
                  <Card.Title
                    dangerouslySetInnerHTML={{ __html: article.title }}
                  />

                  <Card.Text
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />

                  <Card.Text
                    className='article-content'
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
                </Card.Body>
                <Card.Footer>
                  <small className='text-unmuted'>
                    Last updated 3 mins ago
                  </small>
                </Card.Footer>
              </Card>
            </CardDeck>
          ))}
        </div>
      </div>
    );
  }
}
export default GetArticles;
