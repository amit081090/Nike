// Nav.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
//import { ReactComponent as ArrowRight } from './arrow-right.svg';
//import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('Nav Component', () => {
  test('renders logo', () => {
    render(<Nav />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  test('renders sign-in and explore now links', () => {
    render(<Nav />);
    const signInLink = screen.getByText('Sign in');
    const exploreNowLink = screen.getByText('Explore now');
    expect(signInLink).toBeInTheDocument();
    expect(exploreNowLink).toBeInTheDocument();
  });

  test('renders hamburger icon', () => {
    render(<Nav />);
    const hamburgerIcon = screen.getByAltText('hamburger icon');
    expect(hamburgerIcon).toBeInTheDocument();
  });
});
