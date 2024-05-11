import "./about.css";

function AboutMe () {
    const infoCard = {
        myName: "Patricia Cuevas",
        studies: "Licenciada en Relaciones Internacionales y Desarrolladora Full Stack Junior",
        description: "Con experiencia en investigación y ahora incursionando en el mundo tech",
    };
    return (
        <div className="card">
            <h3>{AboutMe.myName}</h3>
            <h4>{AboutMe.studies}</h4>
            <p>{AboutMe.description}</p>
        </div>
    )
}

export default AboutMe;