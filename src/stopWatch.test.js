/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import StopWatch from './stopWatch';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('reader StopWatch component', () => {
  act(() => {
    render(<StopWatch />, container);
  });

  expect(container.textContent).toBe('');
});

it('click start button', () => {
  act(() => {
    render(<StopWatch />, container);
  });

  const button = document.querySelector('#start');
  expect(button.textContent).toBe('start');

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(button.textContent).toBe('stop');
});

it('click reset button', () => {
  act(() => {
    render(<StopWatch />, container);
  });
  const button = document.querySelector('#reset');
  expect(button.textContent).toBe('reset');
});
