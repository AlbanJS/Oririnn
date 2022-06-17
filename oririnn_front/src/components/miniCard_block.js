import styles from '../styles/miniCard.module.css';


function MiniCard(prop) {

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.images}
          src={`http://localhost:8000/static/images/${prop.id}/image1.jpg`}          
          alt="offer images"
          />

        <div className={styles.content}>
          <div>{prop.title}</div>
          <div>{prop.city}</div>
          <div>{prop.date_start} - {prop.date_end}</div>
        </div>
      </div>
    </>
  );
}

export default MiniCard