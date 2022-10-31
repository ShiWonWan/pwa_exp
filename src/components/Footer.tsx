import logo from "../images/shiwon.png"

export const Footer = () => {
    return (
        <>
            {/* <BottomWaves /> */}
            <footer>
                <img src={logo} alt="my logo" className="logo" />
                <p className="leyend">Solving & creating things, <br />that's what I do.</p><br />
                <hr />
                <div className="signature">
                    <p>Developed by me © Emmanuel Campuzano</p>
                </div>
            </footer>
        </>
    )
}
