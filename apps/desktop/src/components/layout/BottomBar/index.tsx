import i_warn from "@/assets/img/i-warning.svg";
import i_send from "@/assets/img/i-send.svg";
import i_save from "@/assets/img/i-save.svg";

type Props = {};

const BottomBar = (props: Props) => {
    return (
        <div className='bg-black w-full h-full'>
            <div className='flex justify-between items-center bg-black px-4'>
                <div className='flex items-center text-mutant-orange'>
                    <div className='flex items-center justify-center w-8 h-8'>
                        <img src={i_warn} alt='' className='w-4 h-4' />
                    </div>
                    <span className='text-warning'>
                        <strong className='text-bold'>WARNING</strong>: patch
                        has been modified!
                    </span>
                </div>
                <div className='flex justify-center items-center h-[4.25rem] gap-4'>
                    <button className='flex items-center justify-center gap-2 text-off-white'>
                        <img src={i_save} alt='' className='w-4 h-4' />
                        Save
                    </button>
                    <button className='flex items-center justify-center gap-2 text-off-white'>
                        <img src={i_send} alt='' className='w-4 h-4' />
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;
