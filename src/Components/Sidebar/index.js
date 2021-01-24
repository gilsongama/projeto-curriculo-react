import React, {useState} from 'react'

function Sidebar(prop) {
    const [exibirContato, setExibirContato] = useState(false)
    const {contatos, educacao} = prop.infor


    const mudar = () => {
        setExibirContato(!exibirContato)
    }
    return (
        <>
          <aside>
            <div className="sidebar">
              <h3>Contatos</h3>

              <button onClick={mudar}>Mostrar Contatos</button>
              {exibirContato &&
                
              <div className="lista-de-contatos">
                  {contatos.map(item => (
                <li key={item.id}>
                  <div className="item-contato">
                    <h4>{item.tipo}</h4>
                    <p>{item.contato}</p>
                  </div>
                </li>
            ))}

              </div>
            }
            </div>

            <div className="sidebar">
              <h3>Educação</h3>
              <div className="lista-de-formacao">
                  {educacao.map(item =>(

                <li key={item.id}>
                  <h4>{item.curso}</h4>
                  <p>{item.instituicao}</p>
                </li>
                  ))}
              </div>
            </div>
          </aside>
        </>
    )
}
export default Sidebar
