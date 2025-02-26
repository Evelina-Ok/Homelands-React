import { useParams } from "react-router"

export function EstateDetailsPage () {

    const {id} = useParams()
    console.log(id);

const { data, isLoading, error } = useGet (
            "https://api.mediehuset.net/homes/{id}"
        )
        if (error) {
            return <p>Error, can't load, try again later</p>
        }
        const home = data?.items;
        console.log("home", home);

    

    return (
        <div></div>
    )
}