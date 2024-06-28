
import "../styles/ProductList.scss"

function ProductItens() {
  return (
    <>
      <div className="product-section">
        <div className="dynamic-access-cards">
          <span className="card-element-selected">
            <img src={process.env.PUBLIC_URL + '/icons-select/tech.png'} alt="tech" width={"35px"} />
            <p>Tecnologia</p>
          </span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/supermercados.png'} alt="tech" width={"35px"} />
            <p>Supermercado</p>
          </span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/whiskey.png'} alt="tech" width={"35px"} />
            <p>Bebidas</p>
          </span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/ferramentas.png'} alt="tech" width={"35px"} />
            <p>Ferramentas</p>
          </span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/saude.png'} alt="tech" width={"35px"} />
            <p>Saúde</p></span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/corrida.png'} alt="tech" width={"35px"} />
            <p>Esportes e Fitness</p></span>
          <span className="card-element">
            <img src={process.env.PUBLIC_URL + '/icons-select/moda.png'} alt="tech" width={"35px"} />
            <p>Moda</p></span>
        </div>
        <div className="section-recommendations">
          <p className="first-title-text">Produtos relacionados</p>
          <div className="itens-content">
            <p className="component-title-active">CELULAR</p>
            <p className="component-title">ACESSÓRIOS</p>
            <p className="component-title">TABLETS</p>
            <p className="component-title">NOTBOOKS</p>
            <p className="component-title">TVS</p>
            <p className="component-title">VER TODOS</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProductItens;