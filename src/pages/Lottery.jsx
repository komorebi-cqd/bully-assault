
import { useState } from "react";
import { useForm } from "react-hook-form"
import InputN from "@/components/inputs/InputN";
import FullButton from "@/components/Buttons/FullButton"


const Lottery = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            frequency: '',
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
        <div className="p-10">
            <div className="w-full min-h-[260px] rounded-3xl bg-slate-300"></div>
            <div className="flex flex-col gap-y-10">
                <h3 className="pt-16 text-2xl font-bold text-center">当前奖池：xxx ETH</h3>
                <div className="flex flex-col items-center justify-center gap-x-10 sm:flex-row">
                    <span>我的可抽奖次数：0次</span>
                    <span>累积获得的奖励：xxxETH</span>
                </div>
                <div>
                    <InputN id='frequency' label='请输入抽奖次数' isShowLable={false} disabled={loading} register={register} errors={errors} required />
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
                            <span className='text-white'>抽奖</span>
                        </FullButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lottery;
