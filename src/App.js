import React, { useState } from "react";
import "./App.css"
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Section from './Components/Section'


function App() {

  const fakeAPI =  
    {
      nome: 'Gilson Gama',
      ocupacao: 'Developer React Júnior',
      resumo: '48 anos, solteiro',
      perfilProfissional: 'Formado em Tecnologia de Redes computadores, tenho como objetivo ingressar na área de desenvolvimento',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 98995-7441'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'gilson.jedai@gmail.com'
        },
        {
          id: 3,
          tipo: 'Linkedin',
          contato: 'https://www.linkedin.com/in/gilsongama'
        },
        {
          id: 4,
          tipo: 'GitHub',
          contato: 'https://github.com/gilsongama'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Unimetrocamp',
          curso: 'Redes de Computadores'
        },
        {
          id: 2,
          instituicao: 'Digital Innovation',
          curso: 'Bootcamp Html Developer'
        },
        {
          id: 3,
          instituicao: 'Cloud Treinamentos',
          curso: 'Curso Especialização AWS'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Freelancer',
          periodo: 'Setembro 2019 - Atualmente',
          empresa: 'Giltech Tecnologia',
          local: 'Campinas',
          conteudo: 'Criação de sites e Blogs(Wordpress) - Manutenção preventiva de Desktops e notebooks Windows'
        },
        {
          id: 2,
          cargo: 'Analista de Suporte Sênior',
          periodo: 'Fevereiro 2011 - Setembro 2019',
          empresa: 'Ecovis BSP ',
          local: 'Valinhos',
          conteudo: 'Gerenciamento da rede, segurança e do parque tecnológico da empresa'
        }
      ]
  }
  
    const [infor] = useState(fakeAPI)
    console.log('infor', infor)

    return (
      <main>
        <Header infor={infor} />
        <Sidebar infor={infor} />
        <Section infor={infor} />

      </main>
    )
}

export default App;
