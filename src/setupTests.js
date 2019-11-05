import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.cloudinary = {
  createUploadWidget: (response) => {
    // eslint-disable-next-line no-unused-expressions
    response;
  },
};
