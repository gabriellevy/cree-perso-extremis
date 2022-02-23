import '../styles/App.css';

function ZoneDeValidation({descriptionCourante, majDescriptionCourante}) {
    return <div>
         <div style={{ padding: "0px 15px 0px 15px" }}>
            <div className="texteStandard">
                {descriptionCourante.texte} 
            </div>
        </div>
    </div>
}

export default ZoneDeValidation