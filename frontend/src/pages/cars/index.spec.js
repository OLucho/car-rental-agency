import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { findByText, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import CarsPage from './index';
import Providers from '../../hooks/providers';

const carsMock = [
  {
    air_conditioning: 'no',
    brand: 'asdasd',
    color: '23123',
    id: 1,
    image: 'In construction',
    kms: '123213',
    model: 'asdasd',
    passengers: 123123,
    price: 12321321,
    year: 21321,
  },
  {
    air_conditioning: 'no',
    brand: 'asdasd',
    color: '23123',
    id: 1,
    image: 'In construction',
    kms: '123213',
    model: 'asdasd',
    passengers: 123123,
    price: 12321321,
    year: 21321,
  },
];

const getCarsMock = jest.fn();

const server = setupServer(
  rest.get('http://localhost:3000/car', (req, res, ctx) => {
    const result = getCarsMock();
    return res(ctx.json(result || []));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<CarsPage/>', () => {
  it('Renders table if there are at least one car', async () => {
    getCarsMock.mockReturnValueOnce(carsMock);
    const component = render(
      <Router>
        <Providers>
          <CarsPage />
        </Providers>
      </Router>
    );
  });
});
