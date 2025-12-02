import "./Practice.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Practice() {
  const [modernRef, modernVisible] = useScrollReveal({ triggerOnce: false });
  const [lessonsRef, lessonsVisible] = useScrollReveal({ triggerOnce: false });
  const [gratitudeRef, gratitudeVisible] = useScrollReveal({
    triggerOnce: false,
  });

  return (
    <div className="practice">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Giá Trị Văn Hoá
            <span className="star">☕</span>
          </h1>
          <p className="hero-subtitle">
            Nghề Cà Phê Trong Đời Sống & Văn Hoá Việt
          </p>
          <p className="hero-date">
            "Câu chuyện con người – giá trị lao động – bản sắc địa phương"
          </p>
        </div>
      </section>

      <div className="practice-container">
        <section
          ref={modernRef}
          className={`modern-section scroll-reveal ${
            modernVisible ? "revealed" : ""
          }`}
        >
          <h2>❤️ Cà Phê Trong Đời Sống Việt Nam</h2>
          <div className="intro-quote">
            <p>
              "Cà phê không chỉ là thức uống – mà là thói quen, nhịp sống và tinh thần kết nối của người Việt."
            </p>
          </div>

          <p className="section-intro">
            Việt Nam là quốc gia sản xuất cà phê lớn thứ 2 thế giới, nhưng điều đặc biệt nằm ở giá trị văn hoá: từ những quán cà phê nhỏ ven đường đến không gian cà phê yên tĩnh nơi thành phố. Hành trình giọt cà phê gắn liền với đời sống, lao động và câu chuyện của con người Việt qua nhiều thế hệ.
          </p>

          <div className="modern-aspects">
            <div className="aspect-card">
              <div className="aspect-icon">☕</div>
              <h3>Không Gian Cà Phê Việt Nam</h3>
              <p>
                Cà phê tại Việt Nam không chỉ là một thức uống mà còn là một nét văn hóa sống động, gắn với thói quen sinh hoạt, phong cách sống và sự giao thoa giữa các thế hệ. Mỗi vùng miền lại mang một bản sắc riêng, đóng góp vào sự đa dạng và chiều sâu của văn hóa cà phê Việt.
              </p>
              <div className="landmarks">
                <div className="landmark-item">
                  <span className="landmark-icon">💬</span>
                  <strong>Văn hóa ngồi cà phê</strong>
                  <p>Không gian gặp gỡ, chia sẻ, học tập và làm việc</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🍃</span>
                  <strong>Bản sắc địa phương</strong>
                  <p>Mỗi vùng như Đăk Hà, Cầu Đất có hương vị riêng</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">👥</span>
                  <strong>Kết nối cộng đồng</strong>
                  <p>Một ly cà phê gắn kết nhiều thế hệ</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🌱</span>
                  <strong>Phong cách đa dạng</strong>
                  <p>Phin, sữa đá, bạc xỉu, muối…</p>
                </div>
              </div>
              <p>
                Cà phê trở thành biểu tượng gần gũi trong nhịp sống Việt Nam, là nơi con người tìm thấy sự thư giãn, kết nối và cảm nhận bản sắc địa phương qua từng hương vị.
              </p>
            </div>

            <div className="aspect-card">
              <div className="aspect-icon">🧺</div>
              <h3>Cuộc Sống Người Trồng Cà Phê</h3>
              <p>
                Người trồng cà phê là lực lượng giữ vai trò quan trọng trong chuỗi giá trị cà phê Việt Nam. Họ làm việc giữa nắng mưa, phụ thuộc vào thời tiết, giá nông sản và điều kiện tự nhiên để duy trì mùa vụ.
              </p>
              <div className="activities">
                <div className="activity-badge">🏡 Đời sống nhà nông</div>
                <div className="activity-badge">🌦️ Điều kiện sản xuất</div>
                <div className="activity-badge">🤝 Hỗ trợ cộng đồng</div>
                <div className="activity-badge">💰 Biến động giá cả</div>
                <div className="activity-badge">🌱 Canh tác bền vững</div>
              </div>
              <p className="highlight-text">
                Đặc biệt, các chương trình như{" "}
                <strong>"Tín dụng nông nghiệp"</strong>,
                <strong>"Hỗ trợ giống, phân bón"</strong>, <strong>"Tập huấn kỹ thuật canh tác bền vững"</strong> giúp người trồng cà phê vượt qua khó khăn tự nhiên và cải thiện năng suất theo hướng ổn định và bền vững.
              </p>
            </div>

            <div className="aspect-card highlight">
              <div className="aspect-icon">🌾</div>
              <h3>Vai Trò Quan Trọng Của Người Trồng Cà Phê Trong Hành Trình Giọt Cà Phê</h3>
              <p>
                Trong hành trình cà phê Việt Nam, người nông dân không chỉ sản xuất mà còn giữ gìn bản sắc địa phương, chất lượng hạt nhân và truyền thống canh tác qua nhiều thế hệ.
              </p>
              <div className="youth-quote">
                <p>
                  <strong>
                    "Người trồng cà phê là nền tảng của toàn bộ hành trình cà phê, từ chất lượng hạt đến giá trị văn hóa."
                  </strong>
                </p>
                <p className="quote-detail">Ghi nhận từ thực tiễn vùng cà phê Tây Nguyên</p>
              </div>
              <p>
                Người nông dân góp phần gìn giữ cà phê Việt qua: Kinh nghiệm canh tác truyền thống, Sự bền bỉ với đất, với nghề, Tạo ra hương vị đặc trưng của từng vùng, Duy trì nguồn lực lao động cho ngành hơn 100 năm. Họ chính là người đặt "viên gạch đầu tiên" cho mọi sản phẩm cà phê mà học sinh được nhìn thấy, thưởng thức và trải nghiệm.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={lessonsRef}
          className={`lessons-section scroll-reveal ${
            lessonsVisible ? "revealed" : ""
          }`}
        >
          <h2>🌞 Thành Tựu & Thách Thức</h2>
          <p className="section-intro">
            Hành trình của cà phê Việt Nam không chỉ dừng lại ở nông trại. Đó là câu chuyện của sáng tạo, bản sắc địa phương, văn hóa cà phê và nỗ lực của người Việt trong việc nâng tầm hạt cà phê.
          </p>

          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-icon">🎉</div>
              <h3>Sản Phẩm Cà Phê Đa Dạng & Sáng Tạo</h3>
              <p className="lesson-subtitle">Thành tựu nổi bật của cà phê Việt Nam</p>
              <p>
                Hạt cà phê Việt Nam ngày nay được phát triển thành nhiều sản phẩm mới phù hợp xu hướng hiện đại: Cà phê rang xay thủ công, Cold brew, latte muối, bạc xỉu hiện đại, sản phẩm quà tặng từ cà phê: móc khoá, túi thơm, tranh làm từ sợi cà phê.
              </p>
              <div className="lesson-quote">
                <p>
                  <strong>
                    "Những sáng tạo này giúp cà phê Việt Nam bước vào phân khúc giá trị cao, không còn chỉ là nguyên liệu thô."
                  </strong>
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">❤️</div>
              <h3>Môi Trường Cà Phê Việt Nam Ngày Càng Cải Thiện</h3>
              <p className="lesson-subtitle">Bản sắc địa phương được tôn vinh</p>
              <p>
                Trong những năm gần đây, không gian cà phê Việt Nam thay đổi tích cực khi bản sắc địa phương, văn hoá thưởng thức và các mô hình trải nghiệm được chú trọng. Mỗi vùng cà phê mang một hương vị riêng, góp phần tạo nên sự đa dạng trong ngành cà phê Việt Nam.
              </p>
              <div className="modern-connection">
                <p>
                  <strong>Bản sắc vùng:</strong> Hạt cà phê được định danh theo vùng trồng như Đăk Hà, Cầu Đất hay Buôn Ma Thuột, tạo dấu ấn hương vị đặc trưng và nâng giá trị thương hiệu địa phương. "Văn hoá cà phê và bản sắc địa phương đang trở thành động lực mới giúp phát triển du lịch, dịch vụ và kinh tế sáng tạo tại Việt Nam."
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">🚩</div>
              <h3>Thách Thức Cần Giải Quyết</h3>
              <p className="lesson-subtitle">Vẫn còn nhiều vấn đề đặt ra</p>
              <p>
                Ngành cà phê Việt Nam vẫn đối mặt với nhiều khó khăn cần được quan tâm trong quá trình phát triển bền vững. Thời tiết thất thường, biến đổi khí hậu và rủi ro tự nhiên gây ảnh hưởng trực tiếp đến năng suất và chất lượng hạt cà phê. Bên cạnh đó, nghề trồng cà phê vẫn còn nhiều áp lực về lao động, thu nhập và thị trường.
              </p>
              <div className="lesson-quote">
                <p>
                  <strong>
                    "Những thách thức này đòi hỏi giải pháp dài hạn để bảo vệ người trồng cà phê và nâng cao giá trị sản phẩm."
                  </strong>
                </p>
              </div>
            </div>
          </div>

          <div className="vnr-responsibility">
            <h3>
              🎯 Bài Học Rút Ra Từ Thực Tiễn Cà Phê Việt Nam
            </h3>
            <p>
              Hành trình giọt cà phê mang lại nhiều bài học giá trị về lao động, bền vững và bản sắc địa phương. Từ người nông dân đến người thưởng thức, mỗi tách cà phê đều phản ánh công sức, văn hóa và sự sáng tạo của con người Việt Nam.
            </p>

            <div className="responsibilities">
              <div className="responsibility-item">
                <span className="resp-number">1</span>
                <div className="resp-content">
                  <strong>Lao động chân thật</strong>
                  <p>Mỗi tách cà phê là kết quả của sự chăm sóc, cần mẫn và nỗ lực thầm lặng của người trồng cà phê.</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">2</span>
                <div className="resp-content">
                  <strong>Bền vững & gìn giữ tài nguyên</strong>
                  <p>Giữ đất – giữ rừng – bảo vệ nguồn nước là nền tảng để cà phê tồn tại lâu dài.</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">3</span>
                <div className="resp-content">
                  <strong>Tự hào bản địa & sự chia sẻ</strong>
                  <p>
                    Mỗi vùng đều có câu chuyện và hương vị riêng; cà phê là nơi gặp gỡ, gắn kết và lan toả năng lượng tích cực.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="closing-message">
            <div className="closing-quote">
              <p>
                "Giữ trọn hương vị cà phê là giữ trọn giá trị của lao động và văn hóa Việt."
              </p>
            </div>
          </div>
        </section>

        <section
          ref={gratitudeRef}
          className={`gratitude-section scroll-reveal ${
            gratitudeVisible ? "revealed" : ""
          }`}
        >
          <h2>💝 Lời Cảm Ơn</h2>

          <div className="gratitude-content">
            <p>
              Với tất cả sự trân trọng, chúng em xin gửi lời cảm ơn sâu sắc đến những người đã đồng hành và hỗ trợ để "Hành trình của giọt cà phê" được hoàn thành trọn vẹn.
            </p>

            <p>
              Trong suốt quá trình thực hiện, mỗi lời động viên, sự chỉ dẫn và góp ý đều giúp chúng em trưởng thành hơn và thêm trân quý giá trị của lao động – của con người phía sau mỗi giọt cà phê Việt.
            </p>

            <div className="thanks-sections">
              <div className="thanks-item">
                <span className="thanks-icon">🏅</span>
                <p>
                  <strong>Xin trân trọng cảm ơn quý thầy cô</strong> - Những người đã tận tâm hướng dẫn, đồng hành và truyền cảm hứng để chúng em thực hiện dự án với tất cả sự cố gắng và đam mê.
                </p>
              </div>
              <div className="thanks-item">
                <span className="thanks-icon">🌱</span>
                <p>
                  <strong>Tri ân đặc biệt đến cô chú chủ vườn & các doanh nghiệp cà phê</strong> - Cảm ơn sự chia sẻ, đồng hành và ủng hộ từ những người trực tiếp tạo nên giá trị của hạt cà phê.
                </p>
              </div>
            </div>

            <p className="hope-message">
              "Sự giúp đỡ và động viên của mọi người là nguồn khích lệ lớn đối với chúng em trong suốt quá trình trải nghiệm và học hỏi."
            </p>

            <div className="final-quote">
              <p>
                "Nhờ sự đồng hành và tình cảm của tất cả mọi người, 'Hành trình của giọt cà phê' đã trở thành một trải nghiệm đẹp, giàu ý nghĩa và đầy tự hào đối với chúng em."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Practice;
