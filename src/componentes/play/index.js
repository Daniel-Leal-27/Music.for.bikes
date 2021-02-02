import React from 'react';
import { connect } from 'react-redux';


const Play = ({musica}) => {
  return (
    <div className="container">
      <h1 className="text-success bg-warning">Playing...</h1>
      <div className="cardPrincipal">
        {musica.titulo == null?<marquee direction='right' className="text-danger bg-succes">Nenhuma música tocando no momento..</marquee>:''}
        <div >
            <img src={musica.img}/>
        </div>
        <br/>
        <div className="container" >
          <h2 className="text-secondary text-center" id='title'>{musica.titulo}</h2>
          <span className="text-primary " id='subtitle'>{musica.cantor != null ? 'Cantor:':''} {musica.cantor}  {musica.ano != null ? '| Ano:':''}  {musica.ano}</span> 
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
    musica: state.musicas.musica
}))(Play);