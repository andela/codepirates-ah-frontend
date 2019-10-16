import React from 'react';
import { shallow } from 'enzyme';
import {
  TopComponent, LeftSideBar, RightSideBar, RecentArticles, Footer,
} from './viewArticleComponents';
import ViewArticle from './index';

describe('TopComponent component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<TopComponent />);
  });
});
describe('LeftSideBar component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<LeftSideBar />);
  });
});
describe('RightSideBar component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<RightSideBar />);
  });
});
describe('RecentArticles component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<RecentArticles />);
  });
});
describe('Footer component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});
describe('Footer component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<ViewArticle />);
  });
});
