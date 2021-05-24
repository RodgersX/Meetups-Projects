import cls from './layout.module.css'
import MainNav from './MainNav'

function Layout({ children }) {
    return (
        <div>
            <MainNav />
            <main className={cls.main}>
                { children }
            </main>
        </div>
    )
}

export default Layout
