import "../Styles/Banner.css";

export default function Banner(props) {

    const pathname = props.pathname

    return (
        <>{
            pathname === '/A-Propos' ? (
                <div className="banner-apropos">
                </div>
            ) : (
                <div className="banner">
                    <h1 id="title-banner">Chez vous, partout et ailleurs</h1>
                </div>)
        }
        </>

    )
}