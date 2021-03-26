import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {NewComponent} from "./new-component";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('new test', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders new component', () => {
  const messageToTest = `Hello, i'm Jessy`
  render(<NewComponent>{messageToTest}</NewComponent>);
  expect(screen.queryByText(messageToTest)).toBeNull();
  fireEvent.click(screen.getByText(/My new component/i))
  expect(screen.queryByText(messageToTest)).toBeInTheDocument()
});
