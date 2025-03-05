import { GridContainer } from "../GridContainer/GridContainer"
import style from "./StaffContainer.module.scss"

export function StaffContainer ({children}) {
    return (
        <GridContainer column={4} gap={1}>
        <section className={style.staffContainer}>
            {children}
        </section>
        </GridContainer>
    )
}