import PropTypes from 'prop-types';
import { useEffect } from "react";

const Input= ({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    register,
    required,
    errors,
    isShowLable = true
}) => {

    useEffect(() => {
        console.log(errors,id);
    },[errors,id])

    return (
        <div className='relative w-full'>
            {isShowLable && <div className='mb-4 font-bold'>{label}</div>}
            <input id={id} {...register(id, { required })} disabled={disabled} placeholder={label} type={type} className={`w-full p-4 bg-mainBgC outline-none rounded-3xl border transition disabled:opacity-70 disabled:cursor-not-allowed ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? ' border-rose-500' : 'border-mainBgC'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-mainBgC'}`} />
        </div>
    )
};


Input.propTypes = {
    id: PropTypes.string.isRequired,
    register: PropTypes.any.isRequired,
    required: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    formatPrice: PropTypes.bool,
    isShowLable: PropTypes.bool,
    errors: PropTypes.any.isRequired,
};


export default Input