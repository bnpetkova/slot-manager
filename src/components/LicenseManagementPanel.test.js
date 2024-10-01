import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LicenseManagementPanel from './LicenseManagementPanel';

describe('LicenseManagementPanel', () => {
  test('renders all input fields correctly', () => {
    render(<LicenseManagementPanel />);

    expect(screen.getByLabelText('License Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Expiration Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Platinium')).toBeInTheDocument();
    expect(screen.getByLabelText('Gold')).toBeInTheDocument();
    expect(screen.getByLabelText('Bronze')).toBeInTheDocument();
    expect(screen.getByLabelText('Portal')).toBeInTheDocument();
    expect(screen.getByLabelText('Portal Plus')).toBeInTheDocument();
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument();
    expect(screen.getByLabelText('PMV')).toBeInTheDocument();
    expect(screen.getByLabelText('SD Tenant ID')).toBeInTheDocument();
    expect(screen.getByLabelText('API Tier')).toBeInTheDocument();
    expect(screen.getByLabelText('API Discount Rate')).toBeInTheDocument();
    expect(screen.getByLabelText('API Price per 500K')).toBeInTheDocument();
  });

  test('allows user to input values', () => {
    render(<LicenseManagementPanel />);

    fireEvent.change(screen.getByLabelText('Expiration Date'), { target: { value: '2023-12-31' } });
    fireEvent.change(screen.getByLabelText('Platinium'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Gold'), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText('Bronze'), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText('Portal'), { target: { value: '40' } });
    fireEvent.change(screen.getByLabelText('Portal Plus'), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText('Mobile'), { target: { value: '60' } });
    fireEvent.change(screen.getByLabelText('PMV'), { target: { value: '70' } });
    fireEvent.change(screen.getByLabelText('SD Tenant ID'), { target: { value: 'tenant123' } });
    fireEvent.change(screen.getByLabelText('API Tier'), { target: { value: '80' } });
    fireEvent.change(screen.getByLabelText('API Discount Rate'), { target: { value: '90' } });
    fireEvent.change(screen.getByLabelText('API Price per 500K'), { target: { value: '100' } });

    expect(screen.getByLabelText('Expiration Date').value).toBe('2023-12-31');
    expect(screen.getByLabelText('Platinium').value).toBe('10');
    expect(screen.getByLabelText('Gold').value).toBe('20');
    expect(screen.getByLabelText('Bronze').value).toBe('30');
    expect(screen.getByLabelText('Portal').value).toBe('40');
    expect(screen.getByLabelText('Portal Plus').value).toBe('50');
    expect(screen.getByLabelText('Mobile').value).toBe('60');
    expect(screen.getByLabelText('PMV').value).toBe('70');
    expect(screen.getByLabelText('SD Tenant ID').value).toBe('tenant123');
    expect(screen.getByLabelText('API Tier').value).toBe('80');
    expect(screen.getByLabelText('API Discount Rate').value).toBe('90');
    expect(screen.getByLabelText('API Price per 500K').value).toBe('100');
  });
});