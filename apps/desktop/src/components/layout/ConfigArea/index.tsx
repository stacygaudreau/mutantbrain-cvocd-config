import './configarea.css';

type Props = {};

const ConfigArea = (props: Props) => {
    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='h-48 bg-mutant-green/20' />
            <div className='h-48 bg-mutant-green/20' />
            <div className='h-48 bg-mutant-green/20' />
        </div>
    );
};

export default ConfigArea;
