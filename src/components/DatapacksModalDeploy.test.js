import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatapacksModal from './DatapacksModal';

describe('DatapacksModal', () => {
  const mockOnClose = jest.fn();
  const mockOnDeploy = jest.fn();
  const tenantName = "Test Tenant";
  const datapacks = [{ id: 1, name: "Datapack 1" }];

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnDeploy.mockClear();
  });

  test('Deploy button calls onDeploy with tenant and datapacks info', () => {
    render(
      <DatapacksModal
        datapacks={datapacks}
        tenantName={tenantName}
        open={true}
        onClose={mockOnClose}
        onDeploy={mockOnDeploy}
      />
    );

    const checkbox = screen.getByLabelText('Confirm Deployment');
    fireEvent.click(checkbox);

    const deployButton = screen.getByText('Deploy');
    fireEvent.click(deployButton);

    expect(mockOnDeploy).toHaveBeenCalledWith(tenantName, datapacks);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

});