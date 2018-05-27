import React from 'react';
import Tamagotchi from './Tamagotchi';
import Form from './form/Form';
import Game from './game/Game';
import ButtonList from './buttons/ButtonList';
import mockData from '../../../__mocks__/fetchMockData.json';
import fetch from 'fetch-mock';
import {
  renderIntoDocument,
  cleanup,
  fireEvent,
  waitForElement,
  prettyDOM
} from 'react-testing-library';

afterAll(cleanup);

describe('Test Tamagotchi', () => {
  fetch.mock(`https://api.github.com/users/vlbee`, mockData);
  const {
    container,
    getByLabelText,
    getByText,
    getAllByText,
    getByTestId
  } = renderIntoDocument(<Tamagotchi />);

  test('Test three buttons display', () => {
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(3);
  });

  test('Test game loads on successful form submission', () => {
    const form = container.querySelector('form');
    const input = getByLabelText('Enter your Github username:');
    input.value = 'vlbee';
    fireEvent.change(input);
    fireEvent.submit(form);
    return waitForElement(() => getByText('vlbee')).then(game => {
      expect(game).toBeTruthy();
    });
  });

  test('Test motivation levels start at 7', () => {
    const motivation = container.querySelectorAll('[data-testid="motivation"]');
    expect(motivation).toHaveLength(7);
  });

  // explore simulating fake timers with Jest!
  jest.setTimeout(15000);
  test('Test motivation levels drop over time', done => {
    setTimeout(() => {
      const level = container.querySelectorAll('[data-testid="motivation"]')
        .length;
      expect(level).toBe(5);
      done();
    }, 5000);
  });

  test('Test motivation levels reach 0 after 14sec', done => {
    setTimeout(() => {
      const level = container.querySelectorAll('[data-testid="motivation"]')
        .length;
      expect(level).toBe(0);
      done();
    }, 14000);
  });

  jest.clearAllTimers();

  test('Test burnt out when motivation level reaches 0', () => {
    const burnOut = getByTestId('burn_out');
    expect(burnOut.textContent).toBe('vlbee has burnt out!');
  });

  test('Test star button loads up motivation level by 1', () => {
    const starButton = getByText('⭐'); // value 1
    fireEvent.click(starButton);
    const level = container.querySelectorAll('[data-testid="motivation"]')
      .length;
    expect(level).toBe(1);
  });

  test('Test emoji button loads up motivation level by 2', () => {
    const starButton = getByText('🐶'); // value 1
    fireEvent.click(starButton);
    const level = container.querySelectorAll('[data-testid="motivation"]')
      .length;
    expect(level).toBe(3);
  });
});
