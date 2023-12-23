
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const list = [
    { title: "ARBS", number: 1000 },
    { title: "ARBS2", number: 1000 },
    { title: "ARBS3", number: 1000 },
]

const ArbScr = () => {
    return (
        <div className="p-10">
            <Grid container spacing={{ xs: 2, md: 3 }} >
                {list.map(it => (
                    <Grid key={it.title} item xs={12} sm={12} md={4} lg={4}>
                        <div className='transition-all rounded-lg cursor-pointer bg-mainBgC hover:shadow-md hover:bg-[rgba(49,58,73,0.24)] '>
                            <h3 className='h-[60px] leading-[60px] text-center border-b-2 text-xl border-main'>{it.title}</h3>
                            <div className='px-4 pb-4'>
                                <div className='flex items-center justify-center w-full h-20'>{it.number}</div>
                                <div className='flex items-center justify-between'>
                                    <Button sx={{
                                        borderRadius: "16px",
                                        fontSize: "12px",
                                        bgcolor: " rgba(12, 175, 96, 1)",
                                        "&:hover": {
                                            bgcolor: " rgba(12, 175, 96, 1)",
                                        }
                                    }} size="small" variant="text" >
                                        <span className='text-white'>Transfer</span>
                                    </Button>
                                    <Button sx={{
                                        borderRadius: "16px",
                                        fontSize: "12px",
                                        bgcolor: "  rgba(251, 119, 74, 1)",
                                        "&:hover": {
                                            bgcolor: "  rgba(251, 119, 74, 1)",
                                        }
                                    }} size="small"   >
                                        <span className='text-white'>List</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ArbScr
