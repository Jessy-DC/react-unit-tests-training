//1 Render component with a password <HidePassword>{Password}</HidePassword>
//2 test if value of mdp is hidden
//3 Simulate click on label 'Show password'
//4 check that the value is displayed on the screen

import { render, screen, fireEvent } from '@testing-library/react';
import HidePassword from "./hide-password";

test('test render of mdp component', () => {
    const mdp = 'azerty123'
    render(<HidePassword>{mdp}</HidePassword>);
    expect(screen.queryByText(mdp)).toBeNull();
    fireEvent.click(screen.getByLabelText('Show password'));
    expect(screen.getByText(mdp)).toBeInTheDocument();
})
