import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ConnectionInfo from '../components/ConnectionInfo/ConnectionInfo';
import { BrowserRouter } from 'react-router-dom';

describe('ConnectionInfo Title 1 Rendertest', () => {
  test('should render title 1', () => {
    render(
      <BrowserRouter>
        <ConnectionInfo />
      </BrowserRouter>,
    );

    expect(screen.getByText('Online:')).toBeDefined();
  });
});

describe('ConnectionInfo Title 2 Rendertest', () => {
  test('should render title 2', () => {
    render(
      <BrowserRouter>
        <ConnectionInfo />
      </BrowserRouter>,
    );

    expect(screen.getByText('EffectiveType:')).toBeDefined();
  });
});
