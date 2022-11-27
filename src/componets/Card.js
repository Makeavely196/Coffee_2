function Card({ title, description, image }) {
  return (
    <div className='block__coffee coffee-block hide'>
      <img src={image} alt="" />
      <div className='coffee-block__content content-coffee'>
        <div class="content-coffee__title">{title}</div>
        <div class="content-coffee__text">{description}</div>
      </div>
    </div>
  )
}

export default Card;