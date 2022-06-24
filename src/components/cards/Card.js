import cardStyle from './card.module.scss';

export const Card = ({title,image,desc}) => {
  return (
    <div className={cardStyle.unit}>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p className={cardStyle.desc}>{desc}</p>
    </div>
  )
}