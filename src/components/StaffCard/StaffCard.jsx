import { useGet } from "../../hooks/useGet";
import { StaffContainer } from "../StaffContainer/StaffContainer";
import style from "./StaffCard.module.scss"


export function StaffCard () {

    const { data, isLoading, error } = useGet (
            "https://api.mediehuset.net/homelands/staff"
        )
        if (error) {
            return <p>Error, can't load, try again later</p>
        }
        const staff = data?.items;
        console.log("staff", data);

    return (
        <>     
        <section>
        <h2>Mød vores ansatte</h2>

        <StaffContainer>
          {staff?.map((item) => {
              return (
                <div 
                className={style.staffCard}
                key={item.id}>
                <img src={item.image}></img>
                <h3>{`${item.firstname} ${item.lastname}`}</h3>
                <p>{item.position}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                </div>
            )
            })
          }
        </StaffContainer>
      </section>

        </>
    )
}