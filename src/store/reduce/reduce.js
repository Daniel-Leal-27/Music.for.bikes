const ESTADO_INICIAL = {
    musica: [{}],
    playlist: [
      {
        id: 1,
        titulo: "Nem um dia",
        cantor: "Djavan",
        ano: 2002,
        img:"https://media.giphy.com/media/LUQRG2wtCTTdMPtDMO/giphy.gif",
      },
      {
        id: 2,
        titulo: "Menino da porteira",
        cantor: "Daniel",
        ano: 1996,
        img:"https://media.giphy.com/media/LUQRG2wtCTTdMPtDMO/giphy.gif",
      },
      {
        id: 3,
        titulo: "Sinônimos",
        cantor: "Chitãozinho e Xororó",
        ano: 2004,
        img:"https://media.giphy.com/media/LUQRG2wtCTTdMPtDMO/giphy.gif",
      },
      {
        id: 4,
        titulo: "Céu azul",
        cantor: "Charlie Brown Junior",
        ano: 2012,
        img:"https://media.giphy.com/media/LUQRG2wtCTTdMPtDMO/giphy.gif",
      },
      {
        id: 5,
        titulo: "Ciumenta",
        cantor: "César Menotti e Fabiano",
        ano: 2008,
        img:"https://media.giphy.com/media/LUQRG2wtCTTdMPtDMO/giphy.gif",
      }
    ],
  };
  
  export default function musicas(state = ESTADO_INICIAL, action) {
    if (action.type === "TOCAR_MUSICA") {
      return {
        ...state,
        musica: action.musicas,
      };
    }
    if (action.type === "PARAR_MUSICA") {
      return {
        ...state,
        musica: ESTADO_INICIAL,
      };
    }
    return state;
  }