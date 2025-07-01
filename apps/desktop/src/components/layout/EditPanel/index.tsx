import i_copy from "@/assets/img/i-copy.svg";
import i_paste from "@/assets/img/i-paste.svg";
import i_x from "@/assets/img/i-x.svg";

type Props = {};

const EditPanel = (props: Props) => {
    return (
        <div className='bg-mutant-grey w-full h-full'>
            <div className='flex flex-col justify-start bg-mutant-grey w-[330px] h-full mr-0 ml-auto'>
                <div className='h-[105px] bg-off-white/20 text-left flex flex-col justify-end'>
                    <h3 className='text-2xl uppercase px-8'>Gate Out 5</h3>
                </div>
            </div>
            <button className='flex items-center justify-center gap-2 text-off-white'>
                <img src={i_copy} alt='' className='w-4 h-4' />
                Copy
            </button>
            <button
                disabled
                className='flex items-center justify-center gap-2 text-off-white'
            >
                <img src={i_paste} alt='' className='w-4 h-4' />
                Paste
            </button>
        </div>
    );
};

export default EditPanel;
