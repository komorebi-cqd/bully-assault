import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';

const Input= ({
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    register,
    required,
    errors,
}) => {
    return (
        <div className='relative w-full '>
            {formatPrice && (
                <BiDollar size={24} className='absolute text-neutral-700 top-5 left-2' />
            )}
            <input id={id} {...register(id, { required })} disabled={disabled} placeholder=' ' type={type} className={` peer w-full p-4 pt-6 bg-mainBgC outline-none rounded-3xl transition disabled:opacity-70 disabled:cursor-not-allowed ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}`} />
            <label className={` absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${formatPrice ? 'left-9' : 'left-4'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>{label}</label>
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
    errors: PropTypes.any.isRequired,
};


export default Input