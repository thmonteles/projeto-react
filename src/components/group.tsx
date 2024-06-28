import "../styles/Group.scss"

function Group() {
  return (
    <>
      <div className='first-cards-section'>
        <div className='cards-group'>
          <img src={process.env.PUBLIC_URL + '/Group.png'} className="content-card" alt="card-content" />
          <img src={process.env.PUBLIC_URL + '/Group.png'} className="content-card" alt="card-content" />
        </div>
        <p className="title-text">Produtos relacionados</p>
        <button className='click-cards'>ver todos</button>
        <div className='cards-section'>
          <div className='cards-group'>
            <img src={process.env.PUBLIC_URL + '/Group.png'} className="content-card" alt="card-content" />
            <img src={process.env.PUBLIC_URL + '/Group.png'} className="content-card" alt="card-content" />
          </div>
        </div>
      </div>
      <p className="title-text">Navegue por marcas</p>
      <div className='section-marcas'>
        <div className='content-marcas'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={"50px"} height={"50px"} />
          <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
        </div>
        <div className='content-marcas'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={"50px"} height={"50px"} />
          <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
        </div>
        <div className='content-marcas'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={"50px"} height={"50px"} />
          <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
        </div>
        <div className='content-marcas'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={"50px"} height={"50px"} />
          <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
        </div>
        <div className='content-marcas'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" width={"50px"} height={"50px"} />
          <img src={process.env.PUBLIC_URL + '/v.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/t.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/e.png'} alt="My Image" width={"18px"} height={"20px"} />
          <img src={process.env.PUBLIC_URL + '/x.png'} alt="My Image" width={"18px"} height={"20px"} />
        </div>
      </div>
    </>
  )
}
export default Group
