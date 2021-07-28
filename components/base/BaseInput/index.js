import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss';

const BaseInput = forwardRef(
    (
        {
            name,
            value,
            placeholder,
            label,
            readonly,
            hasError,
            onChange,
            required,
            labelIcon,
            className,
            inputClassName,
            error,
            icon,
            onIconClick,
        },
        ref
    ) => (
            <div className={className}>
                <div className={styles.labelWrap}>
                    {labelIcon && <img src={labelIcon} className={styles.icon} alt="icon" />}
                    {label && (
                        <div>
                            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                            <label className={styles.label}>{label}</label>
                        </div>
                    )}
                </div>
                <div>
                    <input
                        className={`${styles.input} ${inputClassName}`}
                        name={name}
                        ref={ref}
                        value={value}
                        readOnly={readonly}
                        placeholder={placeholder}
                        onChange={onChange}
                        type=""
                    />
                    {/* eslint-disable-next-line */}
                    {/* <img src={icon} onClick={onIconClick} alt="icon" /> */}
                </div>
                {error && <div className="">{error}</div>}
            </div>
        )
)

BaseInput.propTypes = {

}

export default BaseInput
