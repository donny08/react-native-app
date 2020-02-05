// import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../components/Home';
import MaterialIndicator from '../../components/MaterialIndicator';

import {
  TouchableWithoutFeedback
} from 'react-native';

jest.mock('../../services/addProduct');

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import addProduct from '../../services/addProduct';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('Home Component Test', () => {
  //  beforeEach(() => {
  //    homeService.mockClear();
  //  });

  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('tap on <TouchableWithoutFeedback /> and expect return <MaterialIndicator />', () => {
    const wrapper = shallow(<Home />);
    wrapper
      .find(TouchableWithoutFeedback)
      .first()
      .props()
      .onPressIn();
    expect(wrapper.find(MaterialIndicator).length).toBe(1);
  });

 /* it('tap on <TouchableWithoutFeedback /> and hit API call', async () => {
    const wrapper = shallow(<Home />);
    const mock = jest.fn();

  
    const response = {
      success: true,
      response: 'Applied for product successfully!',
    };

    // const payload = {
    //   productId: '82jqp008d2l00',
    //   emirate: 'Abu Dhabi',
    // };

    mock.mockClear();
    mock.mockReturnValueOnce(response);
    // addProduct(payload).mockClear();
    // addProduct(payload).mockReturnValueOnce(Promise.resolve(response));
    // fetch.mockClear();
    // fetch.mockReturnValueOnce(Promise.resolve(response));

    await wrapper
      .find(TouchableWithoutFeedback)
      .first()
      .props()
      .onPressIn();

    expect(mock).toHaveBeenCalledTimes(1);
    // expect(fetch).toHaveBeenCalledTimes(1);

    await Promise.resolve(response); // added it
    // expect(wrapper.find(MaterialIndicator).length).toBe(1);
    // expect(onPressEvent.mock.calls.length).toBe(1);
    // const responseJson = {
    //   message: 'Applied for product successfully!',
    // };
    // const response = {
    //   success: true,
    //   response: responseJson,
    // };
    // await homeService.addProduct.mockImplementation(() => {
    //   return Promise.resolve(response);
    // });
    // // homeService.addProduct.mockClear();
    // // homeService.addProduct.mockReturnValueOnce(Promise.resolve(response));
    // fetch.mockClear();
    // fetch.mockReturnValueOnce(Promise.resolve(responseJson));

    // wrapper.find(TouchableWithoutFeedback).simulate('press');

    // await flushPromises();

    // expect(homeService.addProduct).toHaveBeenCalledTimes(1);
    // expect(fetch).toHaveBeenCalledTimes(1);
    // expect(wrapper.find(MaterialIndicator).length).toBe(1);

    // await Promise.resolve(); // added it
    // expect(onUpload).toHaveBeenCalledTimes(1);
  });*/
});
