import React, {useState} from 'react'


const LegendaIcon = ({ icon, tooltip }) => {
    const [showTooltip, setShowTooltip] = useState(false);
      
    return (
      <div onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{ display: 'inline-block', position: 'relative' }} >
        {icon} {showTooltip && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '4px',
              borderRadius: '4px',
            }}
          >
            {tooltip}
          </div>
        )}
      </div>
    );
}

export default LegendaIcon