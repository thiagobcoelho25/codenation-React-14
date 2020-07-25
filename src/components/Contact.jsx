import React from "react";


const Contact = ({ data }) => {

  const formatDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const [{ value: dd }, , { value: mm }, , { value: yyyy }] = formatDate.formatToParts(new Date(data.admissionDate));
  return (

    <article className="contact" data-testid="contact">

      <span className="contact__avatar">
        {data === undefined ? '--'
          : <img src={data.avatar} alt={data.name} />}
      </span>

      <span className="contact__data" data-testid="contact-name">{
      data === undefined ? '--' : data.name
      }</span>

      <span className="contact__data" data-testid="contact-phone">{
      data === undefined ? '--' : data.phone
      }</span>

      <span className="contact__data" data-testid="contact-country">{
      data === undefined ? '--' : data.country
      }</span>

      <span className="contact__data" data-testid="contact-date">{
      data === undefined ? '--' : ` ${yyyy}-${mm}-${dd}`//Format for search
      }</span>

      <span className="contact__data" data-testid="contact-company">{
      data === undefined ? '--' : data.company
      }</span>

      <span className="contact__data" data-testid="contact-department">{
      data === undefined ? '--' : data.department
      }</span>

    </article>

  );

};


export default Contact;
