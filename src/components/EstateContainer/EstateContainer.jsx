import style from "./EstateContainer.module.scss"

export function EstateContainer ({children}) {
    return (
        <section className={style.estateContainer}>
            {children}
        </section>
    )
}