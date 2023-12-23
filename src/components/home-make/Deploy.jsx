import { useState } from "react";
import { useForm } from "react-hook-form"
import InputN from "@/components/inputs/InputN";
import FullButton from "@/components/Buttons/FullButton"



const Deploy = () => {
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        console.log(data, errors)
    }
    return (
        <div className="flex flex-col gap-y-5">
            <InputN id='tick' label='Tick' disabled={loading} register={register} errors={errors} required />
            <InputN id='totalSupply' label='TotalSupply' disabled={loading} register={register} errors={errors} required />
            <InputN id='perMint' label='PerMint' disabled={loading} register={register} errors={errors} required />
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
                    <span className='text-white'>Deploy</span>
                </FullButton>
            </div>
        </div>
    )
}

export default Deploy;
