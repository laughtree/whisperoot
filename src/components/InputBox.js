
import React, { useState } from 'react';

function InputBox({ type, hint, onChange, value }) {

    return (
        <div className="input-box">
            <input
                type={type || "text"}
                value={value}
                onChange={onChange}
                placeholder={hint}
            />
        </div>
    );
}

export default InputBox;