import { useState } from "react";
import "./Quiz.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizRef, quizVisible] = useScrollReveal({ triggerOnce: false });

  const questions = [
    {
      question: "Bộ phận nào của cây cà phê cần theo dõi thường xuyên để phòng sâu bệnh?",
      options: [
        "Rễ cây",
        "Lá và cành",
        "Hoa rụng",
        "Quả rụng",
      ],
      correctAnswer: 1,
      explanation:
        "Lá và cành là bộ phận cần theo dõi thường xuyên vì đây là nơi dễ phát hiện dấu hiệu sâu bệnh như lá vàng, lá héo, bị đốm, cành khô. Phát hiện sớm giúp kịp thời xử lý và bảo vệ cây khỏe mạnh.",
    },
    {
      question: "Vì sao phải phơi hạt cà phê ngay sau khi tách vỏ?",
      options: [
        "Để hạt thơm hơn",
        "Để hạt khô đều và không bị mốc",
        "Để tiết kiệm thời gian",
        "Để hạt đổi màu đẹp hơn",
      ],
      correctAnswer: 1,
      explanation:
        "Phơi hạt ngay sau khi tách vỏ giúp hạt khô đều, giảm độ ẩm và tránh bị mốc hoặc lên men không mong muốn. Hạt khô tốt sẽ bảo quản lâu hơn và giữ được chất lượng hương vị.",
    },
    {
      question: "Quả cà phê chín thường có màu gì?",
      options: [
        "Xanh",
        "Vàng",
        "Đỏ",
        "Nâu",
      ],
      correctAnswer: 2,
      explanation:
        "Quả cà phê chín có màu đỏ tươi (một số giống có màu vàng). Hái quả đỏ chín đồng đều đảm bảo độ ngọt, hương vị đặc trưng và chất lượng hạt tốt nhất cho các công đoạn chế biến tiếp theo.",
    },
    {
      question: "Khi rang cà phê, điều gì quan trọng nhất?",
      options: [
        "Mở lửa thật lớn",
        "Đảo hạt liên tục và canh nhiệt độ",
        "Cho thêm nước khi rang",
        "Rang càng lâu càng tốt",
      ],
      correctAnswer: 1,
      explanation:
        "Đảo hạt liên tục và canh nhiệt độ chính xác là yếu tố quan trọng nhất khi rang cà phê. Điều này giúp hạt chín đều, không bị cháy và tạo ra hương vị đặc trưng theo từng mức độ rang mong muốn.",
    },
    {
      question: "Khi pha cà phê phin, bước đầu tiên thường làm gì?",
      options: [
        "Đổ đầy nước ngay",
        "Lắc mạnh phin",
        "Rót ít nước cho cà phê nở",
        "Đậy nắp rồi chờ",
      ],
      correctAnswer: 2,
      explanation:
        "Rót ít nước nóng vừa đủ để cà phê nở (bloom) là bước đầu quan trọng. Bước này giúp cà phê giải phóng khí CO2, mở rộng bột và chuẩn bị cho quá trình chiết xuất hương vị đầy đủ khi rót nước tiếp theo.",
    },
    {
      question: "Hoạt động nào thuộc quá trình chăm sóc cây cà phê?",
      options: [
        "Phơi hạt",
        "Cắt tỉa cành",
        "Rang hạt",
        "Pha cà phê",
      ],
      correctAnswer: 1,
      explanation:
        "Cắt tỉa cành là hoạt động quan trọng trong chăm sóc cây cà phê, giúp tạo hình cây, loại bỏ cành yếu, cành bệnh, tạo điều kiện cho cây sinh trưởng khỏe mạnh và tập trung dinh dưỡng vào quả.",
    },
    {
      question: "Vì sao không nên hái quả cà phê xanh?",
      options: [
        "Vì khó hái",
        "Vì chưa đủ độ ngọt và hương vị",
        "Vì quả xanh nặng hơn",
        "Vì màu không đẹp",
      ],
      correctAnswer: 1,
      explanation:
        "Quả cà phê xanh chưa chín đủ, chưa tích lũy đủ đường và chất thơm tự nhiên. Hái quả xanh sẽ cho hạt có vị chua, đắng không dễ chịu và thiếu hương thơm đặc trưng của cà phê chất lượng.",
    },
    {
      question: "Khi phơi cà phê, cần làm gì để hạt khô đều?",
      options: [
        "Để nguyên một chỗ",
        "Đảo hạt thường xuyên",
        "Phơi trong phòng kín",
        "Trộn với quả xanh",
      ],
      correctAnswer: 1,
      explanation:
        "Đảo hạt thường xuyên (2-3 lần/ngày) giúp hạt khô đều mọi mặt, tránh ẩm mốc, và đảm bảo chất lượng đồng nhất. Hạt khô đều sẽ dễ bảo quản và giữ được hương vị tốt hơn.",
    },
    {
      question: "Tại sao người trồng cà phê phải dậy sớm?",
      options: [
        "Để kịp xem thời tiết và chăm cây",
        "Vì trời sáng đẹp",
        "Vì phải tưới nước cả ngày",
        "Vì cây ngủ sớm",
      ],
      correctAnswer: 0,
      explanation:
        "Người trồng cà phê dậy sớm để quan sát thời tiết (mưa, nắng, sương), kiểm tra tình trạng cây, phát hiện sâu bệnh kịp thời và thực hiện các công việc chăm sóc trong điều kiện thời tiết mát mẻ nhất.",
    },
    {
      question: "Một ly cà phê ngon phản ánh điều gì?",
      options: [
        "Màu ly đẹp",
        "Công sức của người trồng và người chế biến",
        "Giá bán cao",
        "Ly lớn hay ly nhỏ",
      ],
      correctAnswer: 1,
      explanation:
        "Một ly cà phê ngon là kết quả của cả hành trình: từ công sức người trồng chăm sóc cây, người thu hoạch chọn quả chín, người sơ chế cẩn thận, người rang đúng kỹ thuật đến người pha chế tỉ mỉ. Đó là tổng hoà của lao động và tâm huyết.",
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="quiz">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">☕</span> Kiểm Tra Kiến Thức
          </h1>
          <p className="hero-subtitle">
            Trồng trọt • Sơ chế • Rang xay • Pha chế
          </p>
          <p className="hero-date">Thử thách hiểu biết của bạn về cà phê nhé!</p>
        </div>
      </section>

      <div
        ref={quizRef}
        className={`quiz-container scroll-reveal ${
          quizVisible ? "revealed" : ""
        }`}
      >
        {showScore ? (
          <div className="score-section">
            <h2>🎉 Hoàn thành!</h2>
            <div className="score-display">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <p className="score-message">
              {score === questions.length &&
                "⭐ Xuất sắc! Bạn là chuyên gia về hành trình giọt cà phê!"}
              {score >= questions.length * 0.8 &&
                score < questions.length &&
                "☕ Rất tốt! Bạn hiểu rõ về trồng trọt và chế biến cà phê!"}
              {score >= questions.length * 0.6 &&
                score < questions.length * 0.8 &&
                "👍 Khá tốt! Hãy tìm hiểu thêm về cà phê nhé!"}
              {score < questions.length * 0.6 &&
                "📚 Hãy đọc lại phần lý thuyết để hiểu rõ hơn về cà phê!"}
            </p>
            <div className="score-actions">
              <button onClick={restartQuiz} className="btn-restart">
                🔄 Làm lại
              </button>
              <a href="/theory" className="btn-learn">
                📚 Học thêm
              </a>
            </div>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-header">
              <div className="question-count">
                <span className="current">{currentQuestion + 1}</span>
                <span className="total">/{questions.length}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="question-text">
              {questions[currentQuestion].question}
            </div>

            <div className="options-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`option-button ${
                    selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  } ${
                    showExplanation &&
                    index === questions[currentQuestion].correctAnswer
                      ? "correct"
                      : ""
                  }`}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showExplanation &&
                    index === questions[currentQuestion].correctAnswer && (
                      <span className="checkmark">✓</span>
                    )}
                  {selectedAnswer === index &&
                    index !== questions[currentQuestion].correctAnswer && (
                      <span className="crossmark">✗</span>
                    )}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation-section">
                <h3>💡 Giải thích:</h3>
                <p>{questions[currentQuestion].explanation}</p>
                <button onClick={handleNextQuestion} className="btn-next">
                  {currentQuestion === questions.length - 1
                    ? "🏁 Xem kết quả"
                    : "➡️ Câu tiếp theo"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
