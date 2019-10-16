import React from 'react';
import './viewArticle.scss';
import star from '../../../public/assets/images/images/yellowStar.png';
import blankStar from '../../../public/assets/images/images/blankRateStar.png';
import userImage from '../../../public/assets/images/images/userIcon.png';
import testImage from '../../../public/assets/images/images/tests.png';
import programmingImage from '../../../public/assets/images/images/programming.jpg';

export const TopComponent = () => (
  <div className="top">
    <div className="top-p"><p>Authors haven</p></div>
    <div className="top-buttons">
      <div className="header-btn">
        <a href="./login.html">Login</a>
        <a href="./signup.html" className="submit-btn">Sign up</a>
      </div>
    </div>
  </div>
);

export const LeftSideBar = () => (
  <div className="left-side">
    <div className="icon">
      <img
        src={userImage}
        alt="user icon"
        width="40px"
        height="40px"
      />
      <button type="button" className="submit-btn">Follow</button>
    </div>
    <div className="userprofilename">
      <p>John Doe</p>
      <p>32 Publications</p>
    </div>
  </div>
);

export const ArticleContent = () => (
  <div className="middle-up">
    <div className="article-part">
      <div className="article-title">
        <h1>Testing Arrays and Objects with Chai.js</h1>
      </div>
      <div className="article-description">
        <h4>
              When it comes to testing arrays and objects with Chai.js sometimes
              the selection of flagging properties and assertions becomes
              confusing. nested? deep? own? include?
        </h4>
      </div>
      <div className="article-image">
        <img
          src={testImage}
          alt=""
          width="100%"
          height="200px"
        />
      </div>
      <div className="article-paragraph">
        <p>
              If you missed part 1, the differences between a flagging property
              and chainable method, it’s worth skimming through that article to
              catch up before proceeding.

          <br />
          <br />
          <strong>Equality</strong>
          <br />
          <br />

              At the heart of much of the confusion around making assertions on
              arrays and object is Javascript’s notion of equality. expect([1,
              2, 3]).to.equal([1, 2, 3]); // fails This can be surprising, and
              downright frustrating at times, especially for programmers coming
              to Javascript from other languages. The equality being expressed
              in the example above is actually a core mechanic of Javascript,
              not of Chai.js. Open up a node session and try the following: $
              node &gt; [1,2,3] === [1,2,3] false
        </p>
      </div>
      <div className="article-paragraph">
        <p>
                  If you missed part 1, the differences between a flagging property
                  and chainable method, it’s worth skimming through that article to
                  catch up before proceeding.

          <br />
          <br />
          <strong>Equality</strong>
          <br />
          <br />

                  At the heart of much of the confusion around making assertions on
                  arrays and object is Javascript’s notion of equality. expect([1,
                  2, 3]).to.equal([1, 2, 3]); // fails This can be surprising, and
                  downright frustrating at times, especially for programmers coming
                  to Javascript from other languages. The equality being expressed
                  in the example above is actually a core mechanic of Javascript,
                  not of Chai.js. Open up a node session and try the following: $
                  node &gt; [1,2,3] === [1,2,3] false
        </p>
      </div>
    </div>
    <div className="middle-line" />
    <div className="article-events">
      <div className="L">
        <div className="l-icon">
          <i className="fas fa-thumbs-up" />
          <p>15k</p>
        </div>
        <div className="l-icon">
          <i className="fas fa-thumbs-down" />
          <p>123</p>
        </div>
        <div className="l-icon">
          <i className="fas fa-star" />
        </div>
      </div>
      <div className="M">
        <p>
          <span>154</span>
          {' '}
comments
        </p>
        <div className="plus-circle">
          <i className="fas fa-plus-circle" />
        </div>
      </div>
      <div className="R">
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-linkedin-in" />
        <i className="fab fa-google" />
        <i className="far fa-bookmark" />
        <i className="fas fa-ellipsis-v" />
      </div>
    </div>
  </div>
);

export const RecentArticles = () => (
  <div className="middle-down">
    <h1>Most recent on Author’s Haven</h1>
    <div className="popular-div">
      <div className="article-box">
        <div className="image-div">
          <img src={programmingImage} alt="kjkj" />
        </div>
        <div className="below-image-part">
          <div className="profile-div">
            <div className="side-with-icon">
              <div className="icon-img">
                <img src={userImage} alt="user icon" width="15px" height="15px" />
              </div>
              <div className="name-time">
                <p>Code pirates</p>
                <p className="p-2">
                  <span>2</span>
                  {' '}
                  <span>hours</span>
                  {' '}
ago
                </p>
              </div>
              <div className="read-time">
                <p>
                  <span>3</span>
                  {' '}
min read
                </p>
              </div>

            </div>
            <div className="side-with-rating">
              <div className="rate-p"><p>Rating:</p></div>
              <div className="stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="elipse-dots">
                <i className="fas fa-ellipsis-v" />
              </div>
            </div>
          </div>
          <div className="summary-div">
            <h1>Is computer programming hard?</h1>
            <p>
Programming is the process of creating a set of instructions that tell
a computer how to perform a task. Programming can be done
a computer how to perform a task. Programming can be
done When true, class properties are compiled to
use an assignment expression instead of Object.defineProperty.
For an explanation of the consequences of using either,
see Definition vs. Assignment (TL;DR in Part 5) ...
            </p>
          </div>
          <div className="middle-line" />
          <div className="lower-part-div">
            <div className="veiw-and-comment-div">
              <div className="view">
                <p>
                  <span>543</span>
                  {' '}
views
                </p>
              </div>
              <div className="write-comment">
                <p>Write comment</p>
              </div>
            </div>
            <div className="clap-div">
              <p>100</p>
              <i className="fas fa-sign-language" />
            </div>
          </div>
        </div>
      </div>
      <div className="article-box">
        <div className="image-div">
          <img src={programmingImage} alt="" />
        </div>
        <div className="below-image-part">
          <div className="profile-div">
            <div className="side-with-icon">
              <div className="icon-img">
                <img src={userImage} alt="user icon" width="15px" height="15px" />
              </div>
              <div className="name-time">
                <p>Code pirates</p>
                <p className="p-2">
                  <span>2</span>
                  {' '}
                  <span>hours</span>
                  {' '}
ago
                </p>
              </div>
              <div className="read-time">
                <p>
                  <span>3</span>
                  {' '}
min read
                </p>
              </div>

            </div>
            <div className="side-with-rating">
              <div className="rate-p"><p>Rating:</p></div>
              <div className="stars">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="elipse-dots">
                <i className="fas fa-ellipsis-v" />
              </div>
            </div>
          </div>
          <div className="summary-div">
            <h1>Is computer programming hard?</h1>
            <p>
Programming is the process of creating a set of instructions that tell
a computer how to perform a task. Programming ca
nment expression instead of Object.definePropertyFor an explanation
of the consequences of using either, see Definition vs. Assignment (TL;DR in Part 5) ...
            </p>
          </div>
          <div className="middle-line" />
          <div className="lower-part-div">
            <div className="veiw-and-comment-div">
              <div className="view">
                <p>
                  <span>543</span>
                  {' '}
views
                </p>
              </div>
              <div className="write-comment">
                <p>Write comment</p>
              </div>
            </div>
            <div className="clap-div">
              <p>100</p>
              <i className="fas fa-sign-language" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pagination-div">
      <div className="pag-circles">
        <div className="pag-circle active" />
        <div className="pag-circle" />
        <div className="pag-circle" />
        <div className="pag-circle" />
      </div>
    </div>
  </div>
);

export const RightSideBar = () => (
  <div className="right-side">
    <div className="rating-pub-read-time">
      <p>
Published:
        <span>10th July, 2019</span>
      </p>
      <p>4 read min</p>
    </div>
    <div className="article-rates">
      {/* <div className="rate-p"><p>Rating:</p></div> */}
      <div className="rate-stars">
      Rating:
        {' '}
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={star}
          alt="yellow rating start"
          height="12px"
          width="12px"
        />
        <img
          src={blankStar}
          alt="blankrating start"
          height="12px"
          width="12px"
        />
        <img
          src={blankStar}
          alt="blankrating start"
          height="12px"
          width="12px"
        />
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <div className="bottom">
    <div className="middle-line" />
    <div className="footer">
      <div className="footer-icons">
        <i className="fab fa-twitter" />
        <i className="fab fa-facebook-f" />
        <i className="fab fa-linkedin-in" />
        <i className="fab fa-google" />
      </div>
      <div className="at-authors-haven">
        <h3>&apos; Authors haven Andela</h3>
      </div>
    </div>
  </div>
);
