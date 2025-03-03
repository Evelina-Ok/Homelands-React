import style from "./EstateDetails.module.scss"

export function EstateDetails({
  address,
  zipcode,
  city,
  type,
  space,
  rooms,
  clicks,
  price,
  payout,
  cost,
  estateNum,
  floor,
  area,
  floors,
  basement,
  built,
  rebuilt,
  energy,
  time,
  brutto,
  netto,
  description,
  staff,
  position,
  phone,
  email,
  imgsrc,
}) {

    
  return (
    <>
    <h2>Details</h2>
    <div className={style.estateDetails}>

    <section className={style.sectionTop}>   
      <div>
        <h2>{address}</h2>
        <h4>{`${zipcode} ${city}`}</h4>
        <h4>{type} | {space} m<sup>2</sup> | {rooms} vær</h4>
        <h4></h4>
      </div>
      <div>
        <h4><b>Kontantpris</b></h4>
        <h2>{price}</h2>
        <h4>Udbetaling {payout}</h4>
        <h4>Ejerudgift per måned {cost}</h4>
      </div>
    </section>
    <section className={style.sectionMiddle}>
    <div>
        <span>
            <h4>Sagsnr.</h4>
            <h4><b>{estateNum}</b></h4>
        </span>
        <span>
            <h4>Boligareal</h4>
            <h4><b>{floor}</b></h4>
        </span>
        <span>
            <h4>Grundareal</h4>
            <h4><b>{area}</b></h4>
        </span>
        <span>
            <h4>Antal rum</h4>
            <h4><b>{rooms}</b></h4>
        </span>
        <span>
            <h4>Antal plan</h4>
            <h4><b>{floors}</b></h4>
        </span>
    </div>
    </section>
    <section className={style.sectionBottom}>
        <article>
            <p>{description}</p>
        </article>
        <div>
            <h2>Kontakt</h2>
            <img src={imgsrc} />
            <h4>{staff}</h4>
            <h4>{position}</h4>
            <h4>{phone}</h4>
            <h4>{email}</h4>
        </div>
    </section>

    </div>
    </>
  );
}
