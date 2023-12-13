import { useForm } from "react-hook-form"


const Mint = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            tick: '',
            repeatMint: '',
        }
    })

    const onSubmit = (data) => {
        console.log(data, errors)
    }
    return (
        <>
            <div className="flex justify-center w-[80%] mx-auto h-12 gap-x-5">
                <div className="w-[200px] text-right leading-[3rem]">Tick:</div>
                <div className="flex-shrink-0">
                    <input maxLength={6} placeholder="4-6 characters"  className={`w-[300px] h-full px-4 transition bg-white border-2  rounded-lg outline-none disabled:opacity-70 disabled:cursor-not-allowed ${errors['tick'] ? 'border-rose-400' : 'border-[rgba(138,138,160,0.3)]'}`}  {...register("tick", { required: true })} />
                </div>
            </div>
            <div className="flex justify-center w-[80%] mx-auto h-12 gap-x-5">
                <div className="w-[200px] text-right leading-[3rem]">repeatMint:</div>
                <div className="flex-shrink-0">
                    <input placeholder="please enter" className={`w-[300px] h-full px-4 transition bg-white border-2 rounded-lg outline-none disabled:opacity-70 disabled:cursor-not-allowed ${errors['repeatMint'] ? 'border-rose-400' : 'border-[rgba(138,138,160,0.3)]'}`} {...register("repeatMint", { required: true })} />
                </div>
            </div>
             <div className="w-[520px] h-12 flex justify-center items-center rounded-3xl mx-auto cursor-pointer bg-[rgba(81,66,252,.1)] text-primary text-base" onClick={handleSubmit(onSubmit)}>Mint</div>
        </>
    )
}

export default Mint;
