import { useState } from 'react'

function ZoneDeValidation({descriptionCourante, majDescriptionCourante}) {
    return <div>
        <div style={{ 
            backgroundColor: "white", 
            color: "black",
            padding: "15px"
            }}>
            {descriptionCourante.texte} 
        </div>
        
    </div>
}

export default ZoneDeValidation