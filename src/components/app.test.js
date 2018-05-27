import React from 'react';
import App from './App';
import { render } from 'react-testing-library';

describe('Test App', () => {
  const { container, getByLabelText, getByText } = render(<App />);
  const tamagotchi = container.querySelector('main');
  const form = getByLabelText('Enter your Github username:');
  const heart = getByText('💜');
  const emoji = getByText('🐶');
  const star = getByText('⭐');

  test('displays Tamagotchi', () => {
    expect(tamagotchi).toBeTruthy();
  });
  test('displays Form in screen', () => {
    expect(form).toBeTruthy();
  });
  test('displays heart button', () => {
    expect(heart).toBeTruthy();
  });
  test('displays emoji button', () => {
    expect(emoji).toBeTruthy();
  });
  test('displays star button', () => {
    expect(star).toBeTruthy();
  });
});
