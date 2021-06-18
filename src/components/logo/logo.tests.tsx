import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Logo } from './logo.component';

test('Logo Snapshot', () => {
    const { asFragment } = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
});
