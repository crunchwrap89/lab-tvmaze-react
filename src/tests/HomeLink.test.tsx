import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeLink from '../components/Navigation/HomeLink';
import { BrowserRouter } from 'react-router-dom';

describe('HomeLink test', () => {
  test('should show home text', () => {
    render(
      <BrowserRouter>
        <HomeLink />
      </BrowserRouter>,
    );

    expect(screen.getByText('Go Back')).toBeDefined();
  });
});
