import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { responseGraph } from '../../utils/teamsItems';
import ChartComponent from '../chart';
const data = responseGraph[0];
describe('ChartComponent', () => {
  it('should render "No data available" when no data is provided', () => {
    render(<ChartComponent data={undefined}/>);

    const noDataElement = screen.getByText('No data available');
    expect(noDataElement).toBeInTheDocument();
  });

  it('should render the fixtures chart when fixtures data is provided', () => {
    
    render(<ChartComponent data={data} />);

    const fixturesChart = screen.getByTestId('Fixtures');
    expect(fixturesChart).toBeInTheDocument();
  });

  it('should render the goals chart when goals data is provided', () => {
    
    render(<ChartComponent data={data} />);

    const goalsChart = screen.getByTestId('Goals');
    expect(goalsChart).toBeInTheDocument();
  });

  it('should render the biggest chart when biggest data is provided', () => {

    render(<ChartComponent data={data} />);

    const biggestChart = screen.getByTestId('Biggest');
    expect(biggestChart).toBeInTheDocument();
  });
});