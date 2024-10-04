// src/components/DatapacksPanel.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatapacksPanel from './DatapacksPanel';

const mockDatapacks = [
  { id: 1, name: 'Datapack One', description: 'Description One' },
  { id: 2, name: 'Datapack Two', description: 'Description Two' },
  { id: 3, name: 'Datapack Three', description: 'Description Three' },
];

describe('DatapacksPanel', () => {
  test('filters datapacks by text', () => {
    render(<DatapacksPanel datapacks={mockDatapacks} />);
    

    fireEvent.change(screen.getByLabelText(/Filter \(Name, Description\)/i), {
      target: { value: 'One' },
    });

    expect(screen.getByText('Datapack One')).toBeInTheDocument();
    expect(screen.queryByText('Datapack Two')).not.toBeInTheDocument();
    expect(screen.queryByText('Datapack Three')).not.toBeInTheDocument();
  });

  
});