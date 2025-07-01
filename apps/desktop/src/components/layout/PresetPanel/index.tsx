import Button from '@/components/buttons/Button';

type Props = {};

const PresetPanel = (props: Props) => {
    return (
        <div className='bg-bg-panel w-full h-full flex flex-col'>
            <div className='text-left h-[260px] p-8 panel-pattern'>
                <h1 className='text-4xl text-mutant-orange'>
                    MUTANT BRAIN SURGERY
                </h1>
                <p className='text-xl'>
                    Patch Builder for the Mutant Brain and CV.OCD
                </p>
            </div>
            <div className='flex items-center gap-4 justify-between px-8 py-4 gradient-vertical-edges-sm'>
                <Button>Presets</Button>
                <Button variant='dark' hasShadow>Dark</Button>
            </div>
            <div className='px-8 flex flex-col h-full gradient-vertical-bottom-sm'>
                <h3 className='text-2xl uppercase text-left m-4'>Presets</h3>
                <div className='flex flex-col items-start justify-center gap-1'>
                    <button className='text-off-white normal-case bg-bg-main w-full text-left py-2 px-4'>
                        Just drums
                    </button>
                    <button className='text-off-white normal-case bg-bg-main w-full text-left py-2 px-4'>
                        Mixed bag
                    </button>
                    <button className='text-off-white normal-case bg-bg-main w-full text-left py-2 px-4'>
                        Melodic play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PresetPanel;
