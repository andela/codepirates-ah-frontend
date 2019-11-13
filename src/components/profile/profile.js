import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
  updateProfile,
  fetchProfile,
  readReportedArticles,
} from '../../redux/actions/profile/fetchProfile';
import ProfileCard from './profileCard/profileCard';
import ProfileSideBar from './profileSideBar/profileSideBar';
import 'react-toastify/dist/ReactToastify.css';
import Report from '../common/report/report';
import './profile.scss';
import ProfileBio from './profileBio/profileBio';
import SpecificUserArticles from '../articles/allArticles/SpecificUserArticles';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioEditMode: false,
      profileCardEditMode: false,
      selectedTab: 'bio',
      readReportedArticles: '',
    };
    this.previewImage = React.createRef();
  }

  componentDidMount() {
    const { fetchProfile: getProfile, readReportedArticles: getReportedArticles } = this.props;
    getProfile();
    getReportedArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.profile !== nextProps.profile) {
      this.setState({
        bio: nextProps.profile.bio,
        username: nextProps.profile.username || nextProps.profile.userName,
        image: nextProps.profile.image,
        loading: nextProps.pending,
      });
    }
    if (this.props.reports !== nextProps.reports) {
      this.setState({
        readReportedArticles: nextProps.reports,
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ bioEditMode: false, profileCardEditMode: false });
    const { bio, image, username } = this.state;
    const { updateProfile: updateUserProfile } = this.props;
    updateUserProfile({ bio, image, username });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'file') {
      this.readURL(e.target);
      this.setState({ image: e.target.files[0] });
      return;
    }
    this.setState({ [name]: value });
  };

  handleUpdateBio = (e) => {
    e.preventDefault();
    const { bioEditMode: isEditEnabled } = this.state;
    return isEditEnabled
      ? this.setState({ bioEditMode: false })
      : this.setState({ bioEditMode: true });
  };

  handleChangeTabs = (tab) => {
    this.setState({ selectedTab: tab });
  }

  handleProfileCardUpdate = (e) => {
    e.preventDefault();
    const { profileCardEditMode: isEditEnabled } = this.state;
    return isEditEnabled
      ? this.setState({ profileCardEditMode: false })
      : this.setState({ profileCardEditMode: true });
  };

  readURL = (input) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const node = this.previewImage.current;
      node.style.cssText = `background-image: url(${e.target.result});`;
    };
    reader.readAsDataURL(input.files[0]);
  };

  render() {
    const {
      loading,
      image,
      username,
      bio,
      bioEditMode,
      profileCardEditMode,
      readReportedArticles,
      selectedTab,
    } = this.state;
    let activeContent;
    switch (selectedTab) {
      case 'bio':
        activeContent = (
          <ProfileBio
            onFormSubmit={this.handleSubmit}
            onInputChange={this.handleChange}
            bioData={bio || ''}
            bioEditMode={bioEditMode}
            onUpdatingBio={this.handleUpdateBio}
          />
        );
        break;
      case 'my blogs':
        activeContent = (
          <div>
            <h2>My articles</h2>
            <SpecificUserArticles />
          </div>
        );
        break;
      case 'report':
        activeContent = (
          <Report reportedArticles={readReportedArticles} />
        );
        break;
      default:
        activeContent = (
          <ProfileBio
            onFormSubmit={this.handleSubmit}
            onInputChange={this.handleChange}
            bioData={bio || ''}
            bioEditMode={bioEditMode}
            onUpdatingBio={this.handleUpdateBio}
          />
        );
    }
    return (
      <>
        <div
          className={classnames('ui', 'container', 'form', 'add', { loading })}
        >
          <div className="row">
            <div className="col-12 col-md-4">
              <ProfileCard
                onFormSubmit={this.handleSubmit}
                image={image || ''}
                previewImage={this.previewImage}
                onInputChange={this.handleChange}
                profileCardEditMode={profileCardEditMode}
                onEditModeChange={this.handleProfileCardUpdate}
                username={username || ''}
              />

              <ProfileSideBar
                currentTab={selectedTab}
                onChangeTab={this.handleChangeTabs}
              />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-12 profileBorder">
                  {activeContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Profile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  pending: PropTypes.bool.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, articles, article }) => ({
  error: user.error,
  profile: user.profile,
  pending: user.profilePending,
  articles: articles.data,
  reports: article,
});

export default connect(
  mapStateToProps,
  { fetchProfile, updateProfile, readReportedArticles },
)(Profile);
