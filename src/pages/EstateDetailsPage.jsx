import { useParams } from "react-router";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";
import { EstateDetails } from "../components/EstateDetails/EstateDetails";

export function EstateDetailsPage() {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/homelands/homes/${id}`
  );
  if (error) {
    return <p>Error, can't load, try again later</p>;
  }
  console.log(data);
  // console.log(data?.item);

  const detail = data?.item;
  return (
    <>
      <section>
        <div>
         {detail && 
         <EstateDetails 
              key={detail.id}
              address={detail.address}
              zipcode={detail.zipcode}
              city={detail.city}
              type={detail.type}
              space={detail.floor_space}
              rooms={detail.num_rooms}
              clicks={detail.num_clicks}

              price={Number(detail.price).toLocaleString("da-DK")}
              payout={Number(detail.payout).toLocaleString("da-DK")}
              cost={`${Number(detail.cost).toLocaleString("da-DK")},00`}
              estateNum={detail.id}
              floor={detail.floor_space}
              area={detail.ground_space}
              floors={detail.num_floors}
              basement={detail.basement_space}
              built={detail.year_construction}
              rebuilt={detail.year_rebuilt}
              energy={detail.energy_label_name}

              time={detail.date_friendly}
              brutto={Number(detail.gross).toLocaleString("da-DK")}
              netto={Number(detail.net).toLocaleString("da-DK")}
              description={detail.description}
              staff={`${detail.staff.firstname} ${detail.staff.lastname}`}
              position={detail.staff.position}
              phone={detail.staff.phone}
              email={detail.staff.email} 
              imgsrc={detail.staff.image}
              /> 
            }
        </div>
      </section>
    </>
  );
}
