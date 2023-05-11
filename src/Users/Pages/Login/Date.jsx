import React from 'react';

const date = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()
const DateNow = () => {
    return (
        <>
            <span style={{
                position: 'absolute',
                left: 60,
                height: 24,
                width: 400,
                lineHeight : 12,
                color : '#1B212D',
                fontFamily: 'kumbh Sans',
                fontSize : 30,
                fontStyle: 'normal',
                fontWeight: 300

            }}>
            {time} {date}
        </span>


        </>



    );
}

export default DateNow;