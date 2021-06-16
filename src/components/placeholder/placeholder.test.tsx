import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Placeholder } from './placeholder.component';

test('Renders Placeholding text', () => {
    const testMessage = 'Placeholding';
    render(<Placeholder />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
});
