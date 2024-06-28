import "../styles/Footer.scss"

function Footer() {
    return (
        <>
            <div className="section-footer">
                <div className="container-footer">
                    <div className="site-info">
                        <div className="first-content-info">
                            <div className="infos">
                                <span className="title">Sobre nós</span>
                                <div className="description">
                                    <p className="description-title">CONHEÇA</p>
                                    <p className="description-title">COMO COMPRAR</p>
                                    <p className="description-title">INDICAÇÃO E DESCONTO</p>
                                </div>
                            </div>
                            <div className="social-media">
                                <a href=""> <img src={process.env.PUBLIC_URL + '/social-media/facebook.png'} alt="facebook" width={"24px"} height={"24px"} /></a>
                                <a href=""> <img src={process.env.PUBLIC_URL + '/social-media/instagram.png'} alt="instagram" width={"24px"} height={"24px"} /></a>
                                <a href=""> <img src={process.env.PUBLIC_URL + '/social-media/youtube.png'} alt="youtube" width={"26px"} height={"29px"} /></a>
                            </div>
                        </div>
                        <div className="content-info">
                            <span className="title">INFORMAÇÕES ÚTEIS</span>
                            <div className="description">
                                <p className="description-title">FALE CONOSCO</p>
                                <p className="description-title">DÚVIDAS</p>
                                <p className="description-title">PRAZOS DE ENTREGA</p>
                                <p className="description-title">FORMAS DE PAGAMENTO</p>
                                <p className="description-title">POLÍTICA DE PRIVACIDADE</p>
                                <p className="description-title">TROCAS E DEVOLUÇÕES</p>
                            </div>

                        </div>
                        <div id="content-info">
                            <span className="title">FORMAS DE PAGAMENTO</span>
                            <img src={process.env.PUBLIC_URL + '/bandeiras/formas_pagamento.png'} alt="content" />
                        </div>
                    </div>
                    <div className="section-contact">
                        <div className="container-contact">
                            <p className="title-p-contact">CADASTRE-SE E RECEBA NOSSAS <span className="span-h2">NOVIDADES E PROMOÇÕES</span></p>
                            <p className="p-title">Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                            <div className="input-email">
                                <input
                                    type="text"
                                    placeholder='DIGITE SEU E-MAIL' />
                                <button className='send-button'>OK</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="Copyright">
                    <p className="text-copyright">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <img src={process.env.PUBLIC_URL + '/img-footer/group_footer.png'} alt="content" width={"200px"} height={"40px"} />
                </div>
            </div>
        </>
    )
}
export default Footer