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
  udbetaling,
  udgifter,
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

    </section>

    </div>
    </>
  );
}
