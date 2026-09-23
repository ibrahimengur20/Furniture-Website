import { Link } from "react-router-dom";
function About() {
    return(
        <div>
            <section className="product-about">

<div className="product-about-intro">

    <span className="product-about-label">
        Lume Home
    </span>

    <h2>
        Yaşam alanları için
        <br />
        zamansız tasarım.
    </h2>

    <p>
        Lume Home, modern yaşam alanlarını sade,
        kaliteli ve karakter sahibi tasarımlarla buluşturmak
        için kuruldu. Her parça, estetik görünümün yanında
        uzun yıllar kullanılabilecek bir deneyim sunmak
        amacıyla tasarlanır.
    </p>

</div>

<div className="product-about-values">

    <div className="about-value">

        <span>01</span>

        <h3>
            Zamansız Tasarım
        </h3>

        <p>
            Geçici trendlere bağlı kalmadan, uzun yıllar
            değerini koruyacak sade ve modern tasarımlar.
        </p>

    </div>

    <div className="about-value">

        <span>02</span>

        <h3>
            Kaliteli Malzeme
        </h3>

        <p>
            Her ürünümüzde dayanıklılığı, dokuyu ve
            kullanım konforunu ön planda tutuyoruz.
        </p>

    </div>

    <div className="about-value">

        <span>03</span>

        <h3>
            Özenli Üretim
        </h3>

        <p>
            Tasarımdan üretime kadar her aşamada detaylara
            önem veriyor, yaşam alanınıza özel parçalar
            ortaya çıkarıyoruz.
        </p>

    </div>

</div>

<div className="product-about-bottom">

    <div>
        <span>
            Lume Home
        </span>

        <h3>
            Evinizin hikâyesine
            <br />
            yeni bir parça ekleyin.
        </h3>
    </div>

    <Link to="/products">
        TÜM ÜRÜNLERİ KEŞFET →
    </Link>

    <br />

    <Link to="/">
        Ana Sayfaya Geri Dön →
     </Link>


</div>


</section>

        </div>
    );
}
export default About