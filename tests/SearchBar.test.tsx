import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';
import '@testing-library/jest-dom';
import { AppContext } from '../src/AppContext';
import { BrowserRouter } from 'react-router-dom';

function MockBrowserRouter() {
  return (
    <BrowserRouter>
      <AppContext>
        <SearchBar />
      </AppContext>
    </BrowserRouter>
  );
}

describe('SearchBar', () => {
  it('Renders SearchBar component', () => {
    localStorage.setItem('search', '["MockVal1","MockVal3","MockVal2"]')
    const searchList = JSON.parse(localStorage.getItem('search') || '[]')
    // ARRANGE
    render(<MockBrowserRouter/>);
    // EXPECT
    const datalist = screen.getByTestId('search-list');
    expect(datalist).toBeInTheDocument();
    expect(datalist.childNodes.length).toEqual(searchList.length)
    expect(datalist.childNodes[2]).toHaveValue(searchList[2])
  });
});
