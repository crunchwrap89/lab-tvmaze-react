import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShowNotFound from '../components/ShowDetails/ShowNotFound';

describe('ShowNotFound test', () => {
  test('should show not found text', () => {
    render(
      <BrowserRouter>
        <ShowNotFound />
      </BrowserRouter>,
    );

    expect(
      screen.getByText('It seems you are trying to locate an ID that does not exist in the TV Maze DB.'),
    ).toBeDefined();
  });
});
