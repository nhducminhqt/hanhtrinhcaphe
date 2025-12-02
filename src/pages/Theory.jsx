import "./Theory.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Theory() {
  const [section1Ref, section1Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section2Ref, section2Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section3Ref, section3Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section4Ref, section4Visible] = useScrollReveal({
    triggerOnce: false,
  });

  return (
    <div className="theory">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">☕</span> Lý Thuyết
          </h1>
          <p className="hero-subtitle">Hành Trình Giọt Cà Phê</p>
          <p className="hero-date">
            "Từ hạt cà phê đến tách – Câu chuyện của lao động và trải nghiệm"
          </p>
        </div>
      </section>

      <div className="theory-timeline">
        {/* Section 1: Trồng trọt */}
        <section
          ref={section1Ref}
          className={`content-section scroll-reveal ${
            section1Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">01</div>
          <h2>🌱 Trồng Trọt Trong Hành Trình Giọt Cà Phê</h2>

          <div className="content-body">
            <div className="timeline-container">
              {/* --- item 1 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3> Khái Niệm Trồng Trọt</h3>
                  <p>
                    Trồng trọt cà phê là giai đoạn đầu tiên của hành trình, bao gồm việc gieo hạt, chăm sóc cây qua từng giai đoạn sinh trưởng nhằm tạo nền tảng cho chất lượng hạt.
                  </p>
                  <p>
                    Trong giai đoạn này, người làm cà phê cần kết hợp kỹ thuật nông nghiệp, sự tỉ mỉ và kinh nghiệm thực tế để cây phát triển khỏe mạnh.
                  </p>
                  <div className="highlight-box">
                    <strong>👨‍🌾 Bản chất:</strong> Đây là bước quan trọng tạo ra điều kiện sinh trưởng ban đầu quyết định hương vị của hạt cà phê về sau.
                  </div>
                </div>
              </div>

              {/* --- item 2 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Các Hoạt Động Chính</h3>
                  <p>
                    Quy trình trồng trọt cà phê bao gồm nhiều công đoạn liên quan đến đất, nước và kỹ thuật chăm sóc:
                  </p>
                  <div className="strategy-box">
                    <div className="strategy-item">
                      <span className="icon"></span>{" "}
                      <strong>Chuẩn bị đất, chọn giống phù hợp:</strong> Cải tạo đất tơi xốp, lựa chọn giống khỏe.
                    </div>
                    <div className="strategy-item">
                      <span className="icon"></span>{" "}
                      <strong>Tưới nước – bón phân – cắt tỉa:</strong> Điều chỉnh lượng nước, bón phân hợp lý và tạo hình cây đúng kỹ thuật.
                    </div>
                    <div className="strategy-item">
                      <span className="icon"></span>{" "}
                      <strong>Theo dõi sâu bệnh – thời tiết:</strong> Quan sát cây thường xuyên để phát hiện kịp thời các vấn đề môi trường và dịch hại.
                    </div>
                  </div>
                </div>
              </div>

              {/* --- item 3 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3> Vai Trò Hai Mặt Của Giai Đoạn Trồng Trọt</h3>
                  <ul>
                    <li>
                       <strong>Tạo nền cho hương vị:</strong> Mọi chất lượng về sau đều bắt nguồn từ giai đoạn chăm sóc ban đầu.
                    </li>
                    <li>
                       <strong>Giúp học sinh hiểu giá trị lao động:</strong> Trải nghiệm thực tế giúp các em nhận ra công sức đằng sau mỗi hạt cà phê.
                    </li>
                    <li>
                       <strong>Rèn kỹ năng quan sát & ghi chép:</strong> Học sinh học cách theo dõi, mô tả và phân tích sự phát triển của cây.
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- item 4 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3> Kết Quả Của Giai Đoạn Trồng Trọt</h3>
                  <p>
                    Trồng trọt tốt tạo nên bộ rễ khỏe, cây cân đối, hạt phát triển đồng đều và đảm bảo chất lượng cho các công đoạn tiếp theo như thu hoạch, sơ chế và rang xay.
                  </p>
                </div>
              </div>
            </div>

            <div className="quote-box special">
              <p>
                <strong>
                  "Chăm sóc từng cây cà phê không chỉ là công việc nông nghiệp, mà còn là cách gìn giữ hương vị và linh hồn của mảnh đất nơi những hạt cà phê được sinh ra."
                </strong>
              </p>
            </div>

            <div className="section-image">
              <img src="/trong_trot.jpg" alt="Trồng trọt cà phê" />
            </div>
          </div>
        </section>

        {/* Section 2: Thu hoạch - Sơ chế - Rang xay */}
        <section
          ref={section2Ref}
          className={`content-section scroll-reveal ${
            section2Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">02</div>
          <h2>🧺 Thu Hoạch – Sơ Chế – Rang Xay</h2>

          <div className="content-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3> Khái Niệm</h3>
                  <p>
                    Thu hoạch quả chín, tách vỏ, phơi hoặc chế biến ướt, rang và xay để giữ trọn hương vị.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3> Hoạt Động Chính</h3>
                  <ul>
                    <li>Hái quả chín đỏ</li>
                    <li>Phơi/ủ men/chế biến ướt, sàng lọc và rang ở nhiệt độ phù hợp</li>
                    <li>Xay theo độ mịn cần thiết</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3> Vai Trò</h3>
                  <ul>
                    <li>Quyết định hương vị cuối cùng</li>
                    <li>Rèn tính tỉ mỉ, cẩn thận</li>
                    <li>Giúp học sinh khám phá quy trình chế biến</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3> Nhận Xét Chung</h3>
                  <p>
                    "Giai đoạn xử lý và rang xay không chỉ biến đổi trạng thái của hạt cà phê, mà còn là bước hình thành hương vị đặc trưng quyết định chất lượng ly cà phê cuối cùng".
                  </p>
                </div>
              </div>
            </div>

            <div className="section-image">
              <img src="/thu_hoach.jpg" alt="Thu hoạch cà phê" />
            </div>
          </div>
        </section>

        {/* Section 3: Pha chế - Thưởng thức */}
        <section
          ref={section3Ref}
          className={`content-section scroll-reveal ${
            section3Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">03</div>
          <h2>☕ Pha Chế – Thưởng Thức</h2>

          <div className="content-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3> Khái Niệm</h3>
                  <p>
                    Pha chế là giai đoạn biến hạt cà phê rang xay thành tách cà phê hoàn chỉnh, kết hợp tỷ lệ nước, cà phê, nhiệt độ và phương pháp chiết để làm nổi bật hương vị đặc trưng của từng mẻ rang.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3> Các Yếu Tố Quan Trọng Trong Pha Chế</h3>
                  <ul>
                    <li><strong>Phương pháp pha:</strong> phin, pour-over, espresso, máy pha tự động…</li>
                    <li><strong>Tỷ lệ cà phê – nước:</strong> quyết định độ đậm nhạt và hậu vị.</li>
                    <li><strong>Nhiệt độ nước & thời gian chiết:</strong> ảnh hưởng mùi thơm, vị chua, vị đắng.</li>
                    <li><strong>Độ xay của bột cà phê:</strong> phải phù hợp với từng phương pháp pha.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3> Liên Hệ Với Trải Nghiệm Học Sinh</h3>
                  <ul>
                    <li>Hiểu rằng hương vị tách cà phê là kết quả của cả chuỗi lựa chọn kỹ thuật chứ không chỉ từ một bước đơn lẻ.</li>
                    <li>Học cách lắng nghe cảm nhận của người uống, biết điều chỉnh công thức dựa trên phản hồi.</li>
                    <li>Rèn luyện sự tự tin khi giới thiệu sản phẩm của nhóm với thầy cô, bạn bè và khách tham quan.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3> Bài Học Rút Ra</h3>
                  <p>
                    Pha chế và thưởng thức giúp hoàn thiện hành trình giọt cà phê: từ cây cà đến tách cà phê trên tay người uống. Mỗi tách cà phê ngon không chỉ là kết quả của kỹ thuật pha, mà còn là cách chúng ta trân trọng lao động của người trồng, người chế biến và biết chia sẻ câu chuyện cà phê với cộng đồng.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-image">
              <img src="/pha_che.webp" alt="Pha chế cà phê" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Theory;
