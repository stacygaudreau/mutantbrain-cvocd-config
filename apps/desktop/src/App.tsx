import { useState } from "react";
import "./App.css";
import PresetPanel from './components/layout/PresetPanel';
import EditPanel from './components/layout/EditPanel';
import ConfigArea from './components/layout/ConfigArea';
import PresetPanelBottom from './components/layout/PresetPanelBottom';
import BottomBar from './components/layout/BottomBar';
import i_warn from './assets/img/i-warning.svg';
import i_send from './assets/img/i-send.svg';
import i_copy from './assets/img/i-copy.svg';
import i_paste from './assets/img/i-paste.svg';
import i_save from './assets/img/i-save.svg';
import i_x from './assets/img/i-x.svg';


function App() {
    const [count, setCount] = useState(0);
    return (
        <div className='App flex items-center h-screen'>
            <div className="app__grid-container w-full h-full">
                <div className="col-start-1 row-start-1">
                    <PresetPanel/>
                </div>
                <div className="col-start-2 row-start-1 overflow-auto h-full app__config-area">
                    <ConfigArea/>
                </div>
                <div className="col-start-3 row-start-1">
                    <EditPanel/>
                </div>
                <div className="col-start-1 col-span-1 row-start-2 p-0 border-solid border-0 border-t-2 border-border-orange/30">
                    <PresetPanelBottom/>
                </div>
                <div className="col-start-2 col-span-2 row-span-1 w-full ">
                    <BottomBar/>
                </div>
            </div>
        </div>
    );
}

export default App;


        //     {/* right area - always visible */}
        //     <div className="flex flex-col h-screen w-full">
        //         <div className="flex justify-center h-full">
        //             {/* property panel on right */}

        //         </div>
        //         {/* bottom bar */}

        //     </div>
