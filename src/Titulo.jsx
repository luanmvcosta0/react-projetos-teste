function Titulo({ nome, paragrafo, cor }) {

    return (
        <div>
            <h1 style={{color:cor}}>Oi eu sou {nome ? nome : "Fulano"}</h1>
            { paragrafo ? 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur ab commodi dolores placeat facilis non distinctio ut ipsa    nesciunt! Inventore repellat eveniet minima. Voluptate enim sed illum asperiores iusto.</p>
                :
                <p></p>
            }   
        </div>
    )
}

export default Titulo