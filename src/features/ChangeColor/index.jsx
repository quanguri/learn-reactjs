import React, { useState } from 'react';
import PropTypes from 'prop-types';

ChangeColor.propTypes = {

};

function ChangeColor(props) {
    const [color, setColor] = useState('black');
    return (
        <div>
            <button id="btn-1" style={{ backgroundColor: color }} onClick={() => setColor('red')}>Change Color</button>
            <button id="btn-2" style={{ backgroundColor: color }} onClick={() => setColor('blue')}>Change Color</button>
        </div>
    );
}

export default ChangeColor;