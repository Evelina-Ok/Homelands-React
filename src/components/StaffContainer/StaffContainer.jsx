import style from "./StaffContainer.module.scss"

export function StaffContainer ({children}) {
    return (
        <section className={style.staffContainer}>
            {children}
        </section>
    )
}