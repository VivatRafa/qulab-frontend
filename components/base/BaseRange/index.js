import React, { useState } from 'react';
import { Range } from 'react-range';


const BaseRange = ({
    min,
    max,
    step,
    values,
    onChange,
}) => {

    return (
        <Range
            step={step}
            min={min}
            max={max}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
                <div className="range-track" {...props}>
                {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div className="drager" {...props} />
            )}
            />
    )
}

export default BaseRange
