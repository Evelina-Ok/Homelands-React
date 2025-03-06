import { GridContainer } from "../GridContainer/GridContainer"
import style from "./StaffContainer.module.scss"

export function StaffContainer ({children}) {
    return (
        <section className={style.staffContainer}>
            <GridContainer column={4} gap={1}>
            {children}
        </GridContainer>
        </section>
    )
}