import { Link,useParams } from "react-router-dom";

import YemekMas from "../images/yemekmas.jpg";
import koltuktakimi from "../images/koltuktakimi.jpg";
import koltuk from "../images/koltukve.jpg";

function ProductsDetail() {

    const { id } = useParams();

    const products = {
        1: {
            name: "Modern Koltuk Takımı",
            description:
                "Modern çizgileri ve konforlu yapısıyla yaşam alanınıza şıklık katan özel tasarım koltuk takımı.",
            price: "34.900 TL",
            image: koltuktakimi,
            material: "Kadife kumaş",
            size: "280 × 180 cm",
            color: "Krem",
            production: "15-20 iş günü"
        },

        2: {
            name: "Modern Ahşap Yemek Masası",
            description:
                "Doğal ahşap dokusunu modern tasarımla buluşturan, yemek alanınıza karakter kazandıran özel üretim masa.",
            price: "24.900 TL",
            image: YemekMas,
            material: "Doğal meşe",
            size: "180 × 90 cm",
            color: "Doğal meşe",
            production: "15-20 iş günü"
        },

        3: {
            name: "Premium Salon Koltuğu",
            description:
                "Sade ve zarif tasarımıyla modern yaşam alanları için tasarlanmış premium koltuk.",
            price: "18.900 TL",
            image: koltuk,
            material: "Premium kumaş",
            size: "220 × 100 cm",
            color: "Bej",
            production: "10-15 iş günü"
        }
    };

    const product = products[id];

    if (!product) {
        return (
            <div className="product-not-found">
                <h1>Ürün bulunamadı</h1>
                <p>Aradığınız ürün mevcut değil.</p>
            </div>
        );
    }

    return (
        <main className="product-detail">
            
            <section className="product-detail-main">

                <div className="product-detail-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-detail-info">

                    <div className="product-detail-category">
                        <span>Lume Home</span>

                        <div className="comebackbtn">
                            <Link to="/products" className="back-to-products">
                                ← Ürünlere Dön
                            </Link>
                        </div>
                    </div>
                    

                    <h1>{product.name}</h1>

                    <p className="product-detail-description">
                        {product.description}
                    </p>

                    <div className="product-detail-price">
                        {product.price}
                    </div>

                    <div className="product-detail-features">

                        <div>
                            <span>✓</span>
                            Özel üretim
                        </div>

                        <div>
                            <span>✓</span>
                            Kaliteli malzeme
                        </div>

                        <div>
                            <span>✓</span>
                            2 yıl garanti
                        </div>

                    </div>

                    <button className="product-detail-button">
                        TEKLİF AL
                    </button>

                </div>

            </section>

            <section className="product-specifications">

                <div className="section-title">
                    <span>ÜRÜN DETAYLARI</span>
                    <h2>Teknik Özellikler</h2>
                </div>

                <div className="specifications-grid">

                    <div className="specification">
                        <span>Malzeme</span>
                        <strong>{product.material}</strong>
                    </div>

                    <div className="specification">
                        <span>Ölçüler</span>
                        <strong>{product.size}</strong>
                    </div>

                    <div className="specification">
                        <span>Renk</span>
                        <strong>{product.color}</strong>
                    </div>

                    <div className="specification">
                        <span>Üretim</span>
                        <strong>{product.production}</strong>
                    </div>

                </div>

            </section>


            <section className="product-about">

                <div className="product-about-content">

                    <span>Lume Home</span>

                    <h2>
                        Yaşam alanınıza
                        karakter katın.
                    </h2>

                    <p>
                        Her ürünümüz, modern tasarım anlayışı ve kaliteli
                        malzemeler kullanılarak özenle hazırlanır. Yaşam
                        alanınıza uzun yıllar eşlik edecek zamansız
                        mobilyalar tasarlıyoruz.
                    </p>

                </div>

            </section>

        </main>
    );
}

export default ProductsDetail;