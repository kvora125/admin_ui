import { render, screen } from '@testing-library/react';
import App from './App';
import EditMember from './Components/EditMember';
import Pagination from './Components/Pagination';
import SearchBar from './Components/SearchBar';
import UserTable from './Components/UserTable';
test('APP', () => {
  render(<App />);
});

test('search bar', () => {
  render(<SearchBar />);
  const linkElement = screen.getByPlaceholderText(/search by name email role/i);
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();
});

describe('Table', () => {
  it('renders table component', () => {
    render(<UserTable />);
  });
});

test('Edit Modal', () => {
  render(<EditMember />);
});

test('Pagination', () => {
  render(<Pagination />);
});