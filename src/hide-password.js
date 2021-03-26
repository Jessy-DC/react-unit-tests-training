import React, {useState} from 'react'

const HidePassword = ({children}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <label htmlFor="togglePassword">Show password</label>
            <input
                id="togglePassword"
                checked={showPassword}
                type="checkbox"
                onChange={event => setShowPassword(event.target.checked)}
            />

            {showPassword ? children : null}
        </div>
    )
}

export default HidePassword;