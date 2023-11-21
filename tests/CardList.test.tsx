import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '../src/components/CardList';
import { ResultsListContext } from '../src/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { ISWAPIResource } from '../src/models';

const resultsList: ISWAPIResource[] = [
  {
    title: 'Item 1',
    info: 'lorem ipsum dolor 1',
    detailNum: '1',
    url: '',
  },
  {
    title: 'Item 12',
    info: 'lorem ipsum dolor 2',
    detailNum: '2',
    url: '',
  },
  {
    title: 'Item 12',
    info: 'lorem ipsum dolor 2',
    detailNum: '2',
    url: '',
  },
];

function MockCardListContext() {
  return (
    <BrowserRouter>
      <ResultsListContext.Provider
        value={{ resultsList, resultsCount: 4, isLoading: false }}
      >
        <CardList />
      </ResultsListContext.Provider>
    </BrowserRouter>
  );
}

describe('Card component render', () => {
  it('renders Card component', () => {
    render(<MockCardListContext />);
    expect(screen.queryByTestId('card')?.childElementCount).toBe(
      resultsList.length
    );
  });
});
