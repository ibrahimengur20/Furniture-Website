import { Link } from "react-router-dom";
import AnaEkran from "../images/AnaEkran.jpg"

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-small-title">
                    LUME HOME
                </p>

                <h1>
                    Yaşam alanınız için
                    <br />
                    zamansız tasarımlar
                </h1>

                <p>
                    Modern tasarım, kaliteli malzeme ve
                    yaşam alanınıza uyum sağlayan mobilyalar.
                </p>

                <div className="hero-buttons">
                    <Link to="/products">
                        Ürünleri Keşfet
                    </Link>

                    <Link to="/about">
                        Bizi Tanıyın
                    </Link>
                </div>

            </div>

            <div className="hero-image">
                <img
                    src={AnaEkran}
                    alt="Modern yaşam alanı"
                />
            </div>

        </section>
    );
}

export default Hero;