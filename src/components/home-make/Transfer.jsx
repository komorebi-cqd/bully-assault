import { useState } from "react";
import { useForm } from "react-hook-form"
import FullButton from "@/components/Buttons/FullButton"
import InputN from "@/components/inputs/InputN";

const Transfer = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            tick: '',
            amount: '',
            receivingAddress: ''
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
            <InputN id='amount' label='Amount' disabled={loading} register={register} errors={errors} required />
            <InputN id='receivingAddress' label='ReceivingAddress' disabled={loading} register={register} errors={errors} required />
            <div className="flex items-center justify-end mt-5">
                <FullButton onClick={handleSubmit(onSubmit)} sx={{
                    borderRadius: "25px",
                    padding: "12px 40px",
                    fontSize: "1rem",
                    bgcolor: " rgba(12, 175, 96, 1)",
                    "&:hover": {
                        bgcolor: " rgba(12, 175, 96, 1)",
                    }
                }} variant="text" >
                    <span className='text-white '>Transfer</span>
                </FullButton>
            </div>
        </div>
    )
}

export default Transfer;
