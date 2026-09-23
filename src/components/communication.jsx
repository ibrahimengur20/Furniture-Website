import { Link } from "react-router-dom";

function Communication() {


return (
    <main className="communication-page">

        <section className="communication-hero">

            <div className="communication-intro">

                <span>Lume Home</span>

                <h1>
                    Hayalinizdeki
                    <br />
                    yaşam alanını
                    <br />
                    birlikte tasarlayalım.
                </h1>

                <p>
                    Projeniz, ürünlerimiz veya özel üretim talepleriniz
                    hakkında bizimle iletişime geçin. Size en uygun
                    çözümleri birlikte değerlendirelim.
                </p>

            </div>

            <div className="communication-form-area">

                <div className="communication-form-title">

                    <span>TEKLİF ALIN</span>

                    <h2>
                        Projenizden
                        <br />
                        bahsedin.
                    </h2>

                </div>

                <form className="communication-form">

                    <div className="form-group">
                        <label>İsim / Soyisim</label>
                        <input type="text" placeholder="Adınız ve soyadınız" />
                    </div>

                    <div className="form-group">
                        <label>E-posta Adresi</label>
                        <input type="email" placeholder="ornek@mail.com" />
                    </div>

                    <div className="form-group">
                        <label>Telefon Numarası</label>
                        <input type="tel" placeholder="05XX XXX XX XX" />
                    </div>

                    <div className="form-group">
                        <label>Mesajınız</label>
                        <textarea
                            rows="5"
                            placeholder="Projeniz veya talebiniz hakkında bize bilgi verin..."
                        ></textarea>
                    </div>

                    <button type="submit">
                        TEKLİF TALEP ET →
                    </button>

                </form>

            </div>

        </section>

        <section className="communication-info">

            <div className="communication-info-item">
                <span>TELEFON</span>
                <p>+90 555 555 55 55</p>
            </div>

            <div className="communication-info-item">
                <span>E-POSTA</span>
                <p>info@LumeHome.com</p>
            </div>

            <div className="communication-info-item">
                <span>ÇALIŞMA SAATLERİ</span>
                <p>Pzt - Cmt / 09:00 - 18:00</p>
            </div>

        </section>

        <section className="communication-bottom">

            <span>Lume Home</span>

            <h2>
                Yaşam alanınıza
                <br />
                karakter katın.
            </h2>

            <Link to="/products">
                ÜRÜNLERİ KEŞFET →
            </Link>

            <br />

            <Link to="/">
                Ana Sayfaya Geri Dön →
            </Link>

        </section>

    </main>
);


}

export default Communication;
