import { useState } from "react";
import { useForm } from "react-hook-form"
import FullButton from "@/components/Buttons/FullButton"
import InputN from "@/components/inputs/InputN";


const Mint = () => {
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        console.log(data, errors)
    }
    return (
        <div className="flex flex-col gap-y-5">
            <InputN id='tick' label='Tick' disabled={loading} register={register} errors={errors} required />
            <InputN id='repeatMint' label='RepeatMint' disabled={loading} register={register} errors={errors} required />
            <div className="flex flex-col items-center justify-between mt-5 md:flex-row">
                <div className="mb-4 md:mb-0">钱包地址余额：xxxx ETH</div>
                <FullButton onClick={handleSubmit(onSubmit)} sx={{
                    borderRadius: "25px",
                    padding: "12px 40px",
                    fontSize: "1rem",
                    bgcolor: " rgba(12, 175, 96, 1)",
                    "&:hover": {
                        bgcolor: " rgba(12, 175, 96, 1)",
                    }
                }} variant="text" >
                    <span className='text-white'>Mint </span>
                </FullButton>
            </div>
        </div>
    )
}

export default Mint;
