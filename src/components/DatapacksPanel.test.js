import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatapacksPanel from './DatapacksPanel';

const mockDatapacks = [
  { id: 1, name: 'Datapack 1', description: 'Description 1' },
  { id: 2, name: 'Datapack 2', description: 'Description 2' },
  { id: 3, name: 'Datapack 3', description: 'Description 3' }
];

describe('DatapacksPanel', () => {
  test('renders the panel and filters datapacks correctly', () => {
    render(<DatapacksPanel datapacks={mockDatapacks} />);

    expect(screen.getByText('Datapack 1')).toBeInTheDocument();
    expect(screen.getByText('Datapack 2')).toBeInTheDocument();
    expect(screen.getByText('Datapack 3')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Enter name or description'), {
      target: { value: 'Datapack 1' },
    });

    expect(screen.getByText('Datapack 1')).toBeInTheDocument();
    expect(screen.queryByText('Datapack 2')).toBeNull();
    expect(screen.queryByText('Datapack 3')).toBeNull();
  });

  test('toggles check all and uncheck all', () => {
    render(<DatapacksPanel datapacks={mockDatapacks} />);

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });

    fireEvent.click(screen.getByText('Check all'));

    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });

    expect(screen.getByText('Uncheck all')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Uncheck all'));

    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });

    expect(screen.getByText('Check all')).toBeInTheDocument();
  });

  test('toggles check all label when manually checking boxes', () => {
    render(<DatapacksPanel datapacks={mockDatapacks} />);

    const checkboxes = screen.getAllByRole('checkbox');

    fireEvent.click(checkboxes[0]);

    expect(screen.getByText('Uncheck all')).toBeInTheDocument();

    fireEvent.click(checkboxes[0]);

    expect(screen.getByText('Check all')).toBeInTheDocument();
  });
});
