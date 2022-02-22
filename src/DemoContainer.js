import { useState } from 'react';

const DemoContainer = (props) => {
    const [showContent, setShowContent] = useState(true);
    return (
        <div className='demo-container'>
            <div>
                <h2>{props.header}</h2>
                <button onClick={() => setShowContent(!showContent)}>
                    {showContent ? 'hide' : 'show'}
                </button>
            </div>
            {showContent && props.children}
        </div>
    );
};
export default DemoContainer;