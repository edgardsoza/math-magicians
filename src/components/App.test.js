import React from 'react';
import renderer from 'react-test-renderer';
import Mainpage from './mainpage';
import Quote from './quotes';
import Calculator from './calculator';

describe("testing the components", () => {
  it('renders mainpage correctly', () => {
    const tree = renderer
      .create(<Mainpage />)
      .toJSON;
    expect(tree).toMatchSnapshot();  
  });

  it('renders mainpage correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON;
    expect(tree).toMatchSnapshot();  
  });
  
  it('renders calculator correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON;
    expect(tree).toMatchSnapshot();  
  });
})
