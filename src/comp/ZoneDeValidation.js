import { useState } from 'react'

function ZoneDeValidation({descriptionCourante, majDescriptionCourante}) {
    return <div>
         <div style={{ 
            padding: "15px"
            }}>
                 <div style={{ 
                    backgroundColor: "white", 
                    color: "black",
                    padding: "8px"
                    }}>
                    {descriptionCourante.texte} 
                </div>
            </div>
    </div>
}

export default ZoneDeValidation