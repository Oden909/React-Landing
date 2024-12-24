import style from './Button.module.css';
import classNames from 'classnames';

export function Button(props) {

    const { text, className, ...otherProps } = props;

    return (
        <button {...otherProps} className={classNames(style.button_elem, className)}>{text}</button>
    );
}