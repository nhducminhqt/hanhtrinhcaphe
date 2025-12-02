import "./Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Home() {
  const [introRef, introVisible] = useScrollReveal({ triggerOnce: false });
  const [statsRef, statsVisible] = useScrollReveal({ triggerOnce: false });
  const [significanceRef, significanceVisible] = useScrollReveal({
    triggerOnce: false,
  });
  const [quoteRef, quoteVisible] = useScrollReveal({ triggerOnce: false });
  const [ctaRef, ctaVisible] = useScrollReveal({ triggerOnce: false });

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hành Trình Giọt Cà Phê
          </h1>
          <p className="hero-date">Kinh tế – Văn hoá – Trải nghiệm</p>
          <p className="hero-subtitle">
            "Mỗi giọt cà phê là một câu chuyện."
          </p>
          <p className="hero-author">- Giáo Viên Nguyễn Thị Ái Thùy</p>
        </div>
      </section>

      <section
        ref={introRef}
        className={`intro-section scroll-reveal ${
          introVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="intro-card">
            <h2> Hiểu Rõ Hành Trình Của Một Giọt Cà Phê</h2>
            <p className="intro-text">
              Hành trình giọt cà phê là toàn bộ quá trình từ trồng trọt, chăm sóc, thu hoạch, chế biến, rang xay, pha chế, thưởng thức thể hiện công sức của người nông dân và giá trị văn hoá của vùng trồng. Việc cho học sinh tham gia hành trình giúp các em hiểu rõ quá trình làm ra sản phẩm, rèn kỹ năng quan sát, lao động, hợp tác, trân trọng nông sản quê hương và nuôi dưỡng tinh thần trách nhiệm.
            </p>
            <div className="intro-image">
              <img src="/dbp1.jpg" alt="Hành trình cà phê" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={significanceRef}
        className={`significance-section scroll-reveal ${
          significanceVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <h2 className="section-title"> Các Khái Niệm Cơ Bản</h2>

          <div className="significance-grid">
            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">🌾</span>
                <h3>Trồng trọt</h3>
              </div>
              <ul>
                <li> Chọn giống phù hợp và chuẩn bị đất tơi xốp</li>
                <li> Chăm sóc đúng kỹ thuật: tưới nước, bón phân, cắt tỉa</li>
                <li> Theo dõi sâu bệnh và thay đổi thời tiết</li>
                <li> Tạo nền chất lượng ban đầu cho hạt cà phê</li>
              </ul>
            </div>

            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">🔥</span>
                <h3>Sơ chế – rang xay</h3>
              </div>
              <ul>
                <li> Thu hái quả chín đỏ đồng đều</li>
                <li> Phơi, lên men hoặc chế biến ướt đúng quy trình</li>
                <li> Sàng lọc và làm sạch hạt nhân</li>
                <li> Rang tạo hương thơm đặc trưng</li>
              </ul>
            </div>

            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">☕</span>
                <h3>Pha chế</h3>
              </div>
              <ul>
                <li> Pha bằng phin, pour-over hoặc máy</li>
                <li> Điều chỉnh lượng nước, nhiệt độ và độ xay</li>
                <li> Cảm nhận hương – vị – hậu vị từng mẻ rang</li>
                <li> Trân trọng công sức của người làm qua mỗi tách cà phê</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={quoteRef}
        className={`quote-section scroll-reveal ${
          quoteVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="quote-card">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Hành trình của giọt cà phê bắt đầu từ hạt giống nhỏ bé, được gieo xuống mảnh đất bazan, chăm sóc qua nắng mưa, rồi kết tinh trong từng mùa hoa, mùa quả. Từ khu vườn cà phê đến bàn tay người rang xay, mỗi công đoạn trồng trọt, thu hoạch, sơ chế, rang và pha chế đều in dấu mồ hôi, kinh nghiệm và niềm tự hào của người làm cà phê Đăk Hà.
            </p>
            <p className="quote-author">
              — Nhóm tác giả "Hành trình giọt cà phê"
            </p>
            <div className="intro-image">
              <img src="/dbp2.jpg" alt="Hành trình cà phê" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
