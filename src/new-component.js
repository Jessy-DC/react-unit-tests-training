//1 Create component which display or hide text
//2 Hook state - show message
//3 create label
//4 create chekcbox

import React, {useState} from 'react'

export function NewComponent({children}) {
    const [showMessage, setShowMessage] = useState(false)

    return (
        <div>
            <label htmlFor={"toogle"}>My new component</label>
            <input
                id="toogle"
                type="checkbox"
                checked={showMessage}
                onChange={e => setShowMessage(e.target.checked)}
            />

            {showMessage ? children : null}
        </div>
    )
}