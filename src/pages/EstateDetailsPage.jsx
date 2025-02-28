import { useParams } from "react-router";
import { useGet } from "../hooks/useGet";
import { useEffect } from "react";

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

  return (
    <>
      <section>
        <div>
            
        </div>
      </section>
    </>
  );
}
