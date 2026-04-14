import React from 'react';
import { GridLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className=' flex flex-col justify-center items-center my-20'>
            <GridLoader
                color="#244D3F"
                size={25}
                width={9}
            />
        </div>
    );
};

export default Spinner;