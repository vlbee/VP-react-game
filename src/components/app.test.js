import React from 'react';
import App from './App';
import { render } from 'react-testing-library';

jest.mock('./app.css', () => jest.fn());

test('Jest works ok', () => {
  jest.fn();
  expect(true).toBeTruthy();
});

describe('Test App', () => {
  jest.fn();
  test('displays Tamagotchi', () => {
    const { container } = render(<Tamagotchi />);
    const actual = container.querySelector('main');
    expect(actual).toBeTruthy();
  });
});
