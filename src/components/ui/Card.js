import cls from './Card.module.css'

function Card({ children }) {
    return (
        <div className={cls.card}>
            {/*default special prop for every component */}
            {children}
        </div>
    )
}

export default Card
