import { Link } from "react-router-dom";

import mainresim from "../images/fenasalfoto.jpg";
import süperresim1 from "../images/koltuktakimi.jpg"
import yemekmasa from "../images/yemekmas.jpg"
import koltuk from "../images/koltukve.jpg"

function Products() {
  return (
    <>
      {/* Sayfa Giriş Banner Alanı */}
      <div className="StarterProduct">
        <img src={mainresim} alt="FenasalFoto" />
        <h1>Ürünler</h1>
      </div>

      <div className="products">
        {/* Ürün 1 */}
        <div className="productimginvolved">
          <img src={süperresim1} alt="Modern Koltuk" className="product-image" />
          <div className="Product-script">
            <h1>SALON & OTURMA ODASI TAKIMI</h1>
            <p>
              Geniş hacimli konforlu kanepe, el işçiliği masif yemek masası ve tamamlayıcı dokulu berjer ile yaşam alanınızda dengeli, dingin ve eksiksiz bir atmosfer kurun.
            </p>
            <Link to="/products/1">İNCELE →</Link>
          </div>
        </div>

        {/* Ürün 2 */}
        <div className="productimginvolved">
          <div className="Product-script">
            <h1>Masif Meşe Sehpa</h1>
            <p>
              Doğal ahşabın organik hatlarını modern çizgilerle buluşturan, salonunuzun merkezine sıcaklık katan zamansız bir dokunuş.
            </p>
            <Link to="/products/2">İNCELE →</Link>
          </div>
          <img src={yemekmasa} alt="Ahşap Yemek Masası" className="product-image" />
        </div>

        {/* Ürün 3 */}
        <div className="productimginvolved">
          <img src={koltuk} alt="Luna Soft Koltuk" className="product-image" />
          <div className="Product-script">
            <h1>Luna Soft Koltuk</h1>
            <p>
              Yumuşak dokusu ve geniş oturma alanıyla konforu ön plana çıkaran Luna Soft, modern yaşam alanlarına sade ve şık bir atmosfer kazandırır.
            </p>
            <Link to="/products/3">İNCELE →</Link>
          </div>
        </div>
      </div>
        <Link to="/" className="back-to-home">
          ← Ana Sayfaya Dön
      </Link>
    </>

  );
}

export default Products;