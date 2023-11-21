import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card, { ICard } from '../src/components/Card';
import { AppContext } from '../src/AppContext';
import { BrowserRouter } from 'react-router-dom';

function MockCardContext({ title, info, detailNum }: ICard) {
    return (
        <BrowserRouter>
          <AppContext>
            <Card title={title} info={info} detailNum={detailNum}/>
          </AppContext>
        </BrowserRouter>
      );
}

describe('Card component render', () => {
  it('renders Card component', () => {
    render(<MockCardContext title='Great Work' info='lorem ipsum dolor set ament dewfwefew' detailNum='1'/>)
    expect(screen.getByRole('heading', {level: 2}).textContent).toEqual('Great Work')
    expect(screen.getByText('lorem ipsum dolor set ament dewfwefew')).toBeInTheDocument()
  });
});
