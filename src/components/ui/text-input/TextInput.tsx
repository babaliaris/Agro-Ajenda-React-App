import React from "react";
import styles from './TextInput.module.css';

type TextInputProps = {
    icon?: string,
    type: React.HTMLInputTypeAttribute,
    placeholder: string
    style?: React.CSSProperties,
    error?: string,
    required?: boolean,
    value?: string | number | readonly string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>

};

function TextInput({icon, type, placeholder, style, error, required,
    value, onChange}:TextInputProps)
{
    return (
        <div
        style={style}
        className={styles.container}>
            
            <div className={styles.flexbox}>

                { icon &&
                    <i className={`${icon} ${styles.logo}`}/>
                }

                <input
                required
                value={value}
                onChange={onChange}
                className={`${styles.input}`}
                style={{borderColor: `${error ? 'var(--agro-color-danger)' : 'var(--agro-color-text-primary)'}`}}
                type={type}
                placeholder={placeholder}
                />

            </div>

            {
                error &&
                <label className={styles.error}>{required ? "*"+error : error}</label>
            }

        </div>
    );
}

export default React.memo(TextInput);