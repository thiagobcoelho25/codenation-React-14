import React from "react";


import Contact from "./Contact";


const Contacts = ({data}) => (

  <div className="container" data-testid="contacts">

    <section className="contacts">

      <article className="contact">

        <span className="contact__avatar" />

        <span className="contact__data">Nome</span>

        <span className="contact__data">Telefone</span>

        <span className="contact__data">País</span>

        <span className="contact__data">Admissão</span>

        <span className="contact__data">Empresa</span>

        <span className="contact__data">Departamento</span>

      </article>

      {data.users === undefined ? '--' :
        data.users.filter((usr) => usr[data.sortBy].toLowerCase().includes(data.query.toLowerCase()))
          .sort(function (a, b) {
            if (a[data.sortBy] > b[data.sortBy]) {
              return 1;
            }
            if (a[data.sortBy] < b[data.sortBy]) {
              return -1;
            }
            return 0;
          }).map(usr => (
            <Contact key={usr.id} data={usr} />
          ))
      }

    </section>

  </div>

);


export default Contacts;