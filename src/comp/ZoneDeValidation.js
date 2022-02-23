import '../styles/App.css';

function ZoneDeValidation({descriptionCourante, majDescriptionCourante}) {
    return <div>
         <div style={{ padding: "15px" }}>
            <div className="texteStandard">
                {descriptionCourante.texte} 
            </div>
        </div>
    </div>
}

export default ZoneDeValidation