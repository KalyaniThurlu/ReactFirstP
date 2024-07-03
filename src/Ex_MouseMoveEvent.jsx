
import { useState } from "react";

export function ExMouseMove() {
    const [styleObj, setStyleObj] = useState({ position: '', top: '', left: '' });

    function getPosition(e) {
        setStyleObj({
            position: 'fixed',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        });
    }

    return (
        <div onMouseMove={getPosition}>
            <div style={{ height: '1000px' }}>
                <img style={styleObj} src="./flag.jpg" alt="flag" height={100} width={100} />
                <p>Move the mouse to see the flag move.</p>
            </div>
        </div>
    );
}
