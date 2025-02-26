import { StaffCard } from "../components/StaffCard/StaffCard";
import { useGet } from "../hooks/useGet";
import { EstateContainer } from "../components/EstateContainer/EstateContainer";
import { EstateCard } from "../components/EstateCard/EstateCard";

export function FrontPage() {
  /* const { data, isLoading, error } = useGet (
        "https://api.mediehuset.net/homelands/staff"
    )
    if (error) {
        return <p>Error, can't load, try again later</p>
    }
    console.log("staff", data); */

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/homes"
  );
  if (error) {
    return <p>Error, can't load, try again later</p>;
  }
  console.log("housing", data);

  // const randomHousing = Math.floor(Math.random() - 0.5)

  return (
    <div>
      <h1>front page</h1>
      <section>
        <EstateContainer>
            {data?.items
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((item) => {
                return (
                  <EstateCard                    
                    key={item.id}
                    id={item.id}
                    imgSrc={item.images[0].filename.large}
                    address={item.address}
                    city={`${item.zipcode} ${item.city}`}
                    type={item.type}
                    energy={item.energy_label_name}
                    space={`${item.num_rooms}, ${item.floor_space}`}
                    price={item.price}
                  />
                );
              })}
        </EstateContainer>
      </section>
      <section>
        <StaffCard />
      </section>
      {/* <section>
        <h2>Mød vores ansatte</h2>

        <StaffContainer>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.items.map((item) => {
              return (
              <StaffCard 
                key={item.id}
                imgSrc={item.image}
                name={`${item.firstname} ${item.lastname}`} 
                occupation={item.position}
                email={item.email}
                phone={item.phone}
              />
            )
            })
          )}
        </StaffContainer>
      </section> */}
    </div>
  );
}
