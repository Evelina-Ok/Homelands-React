import { useGet } from "../hooks/useGet";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { GridContainer } from "../components/GridContainer/GridContainer";

export function EstatesPage () {

    const { data, isLoading, error } = useGet(
        "https://api.mediehuset.net/homelands/homes"
      );
      if (error) {
        return <p>Error, can't load, try again later</p>;
      }
      console.log("houses", data);

    return (
<div>
      <h1>Boliger til salg</h1>
      <section>
        <GridContainer column={3} gap={1}>
            {data?.items.map((item) => {
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
              </GridContainer>
      </section>
      </div>
    );
}