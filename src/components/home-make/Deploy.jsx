import { useForm } from "react-hook-form"


const Deploy = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            tick: '',
            totalSupply: '',
            perMint: ''
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
                    <input  placeholder="4 characters" maxLength={4} className={`w-[300px] h-full px-4 transition bg-white border-2  rounded-lg outline-none disabled:opacity-70 disabled:cursor-not-allowed ${errors['tick'] ? 'border-rose-400' : 'border-[rgba(138,138,160,0.3)]'}`}  {...register("tick", { required: true })} />
                </div>
            </div>
            <div className="flex justify-center w-[80%] mx-auto h-12 gap-x-5">
                <div className="w-[200px] text-right leading-[3rem]">Total Supply:</div>
                <div className="flex-shrink-0">
                    <input placeholder="please enter" className={`w-[300px] h-full px-4 transition bg-white border-2 rounded-lg outline-none disabled:opacity-70 disabled:cursor-not-allowed ${errors['totalSupply'] ? 'border-rose-400' : 'border-[rgba(138,138,160,0.3)]'}`} {...register("totalSupply", { required: true })} />
                </div>
            </div>
            <div className="flex justify-center w-[80%] mx-auto h-12 gap-x-5">
                <div className="w-[200px] text-right leading-[3rem]">Limit Per Mint:</div>
                <div className="flex-shrink-0">
                    <input placeholder="please enter" className={`w-[300px] h-full px-4 transition bg-white border-2 border-[rgba(138,138,160,0.3);] rounded-lg outline-none disabled:opacity-70 disabled:cursor-not-allowed ${errors['perMint'] ? 'border-rose-400' : 'border-[rgba(138,138,160,0.3)]'}`} {...register("perMint", { required: true })} />
                </div>
            </div>
            <div className="w-[520px] h-12 flex justify-center items-center rounded-3xl mx-auto cursor-pointer bg-[rgba(81,66,252,.1)] text-primary text-base" onClick={handleSubmit(onSubmit)}>Deploy</div>
        </>
    )
}

export default Deploy;
