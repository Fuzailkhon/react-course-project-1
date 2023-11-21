import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../src/components/SearchBar';
import '@testing-library/jest-dom';
import { AppContext } from '../src/AppContext';
import { BrowserRouter } from 'react-router-dom';

function MockCardBrowserRouter() {
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
    render(<MockCardBrowserRouter/>);
    // EXPECT
    const datalist = screen.getByTestId('search-list');
    expect(datalist).toBeInTheDocument();
    expect(datalist.childNodes.length).toEqual(searchList.length)
    expect(datalist.childNodes[2]).toHaveValue(searchList[2])
  });
  it('Should change value when typing', () => {
    render(<MockCardBrowserRouter/>);
    const searchBar: HTMLInputElement = screen.getByPlaceholderText('Type to find')
    fireEvent.change(searchBar, {target: {value: 'Anakin Skywalker'}})
    expect(searchBar.value).toBe('Anakin Skywalker')
  })
});
