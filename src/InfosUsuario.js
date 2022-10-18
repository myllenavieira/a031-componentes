import React from "react";

export default function InfosUsuario(props){
    return (
    <div className="info">
    <img src={props.infos.imagem} alt="" className="user"/>
    <p>{props.infos.user}</p>
    </div>
    )
}
