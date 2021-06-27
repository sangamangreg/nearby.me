import { render, screen } from '@testing-library/react';
import App from './components/App';
import Place from './components/place'

test('renders application without crash', () => {
  render(<App />);
  const linkElement = screen.getByText(/Locate nearest to me/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders place without crash', () => {
  const item = {
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    name: "ATM",
    vicinity: "King Street Wharf, 32 The Promenade, Sydney",
    opening_hours: {
      open_now: false
    }
  };
  const index = 1;

  render(<Place item={item} index={index} />);
  const nameEle = screen.getByText(/ATM/i);
  const vicinityEle = screen.getByText(/King Street Wharf, 32 The Promenade, Sydney/i);
  const closedEle = screen.getByText(/Closed/i);
  
  expect(nameEle).toBeInTheDocument();
  expect(vicinityEle).toBeInTheDocument();
  expect(closedEle).toBeInTheDocument();
});

test('renders place with open status', () => {
  const item = {
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
    name: "ATM",
    vicinity: "King Street Wharf, 32 The Promenade, Sydney",
    opening_hours: {
      open_now: true
    }
  };
  const index = 1;

  render(<Place item={item} index={index} />);
  const nameEle = screen.getByText(/ATM/i);
  const vicinityEle = screen.getByText(/King Street Wharf, 32 The Promenade, Sydney/i);
  const closedEle = screen.getByText(/Open right now/i);
  
  expect(nameEle).toBeInTheDocument();
  expect(vicinityEle).toBeInTheDocument();
  expect(closedEle).toBeInTheDocument();
});
