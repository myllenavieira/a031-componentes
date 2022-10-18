import React from "react"
import InfosUsuario from "./InfosUsuario";

export default function CardVideo(props) {

    const titulo = "Título do vídeo";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    const usuario = {
        imagem: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        user: "Myllena"
    };
    return (
        <>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.info.imagem} alt="" />
                <h4>{props.info.titulo}</h4>
                <InfosUsuario infos={usuario}/>
            </div>
        </>
    )
}