import i_bin from "@/assets/img/i-bin.svg";
import i_export from "@/assets/img/i-export.svg";
import i_import from "@/assets/img/i-import.svg";
import i_pencil from "@/assets/img/i-pencil.svg";
import i_new from "@/assets/img/i-new.svg";

type Props = {};

const PresetPanelBottom = (props: Props) => {
    return (
        <div
            className='flex justify-center items-center gap-4 h-full
                       '
        >
            <button className='flex items-center justify-center w-8 h-8 p-0 m-0'>
                <img src={i_new} className='w-4 h-4' />
            </button>
            <button className='flex items-center justify-center w-8 h-8 p-0 m-0'>
                <img src={i_pencil} className='w-4 h-4' />
            </button>
            <button className='flex items-center justify-center w-8 h-8 p-0 m-0'>
                <img src={i_bin} className='w-4 h-4' />
            </button>
            <button className='flex items-center justify-center w-8 h-8 p-0 m-0'>
                <img src={i_import} className='w-4 h-4' />
            </button>
            <button className='flex items-center justify-center w-8 h-8 p-0 m-0'>
                <img src={i_export} className='w-4 h-4' />
            </button>
        </div>
    );
};

export default PresetPanelBottom;
