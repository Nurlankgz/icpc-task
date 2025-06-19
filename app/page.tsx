import { Eye, Heart, ShoppingBasket, Star, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="education-platform">
      {/* Header */}
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <h2>LearnHub</h2>
          </div>
          <div className="nav-links">
            <div>
              <a href="#home">Главная</a>
            </div>
            <div>
              <a href="#courses">Курсы</a>
            </div>
            <div>
              <a href="#pricing">Цены</a>
            </div>
            <div>
              <a href="#contact">Контакты</a>
            </div>
          </div>
          <div className="nav-buttons">
            <a href="#login" className="login-btn">
              Войти
            </a>
            <button className="join-btn">Присоединиться</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Начни обучение</div>
            <h1 className="hero-title">
              30K+ СТУДЕНТОВ
              <br />
              ДОВЕРЯЮТ НАМ
            </h1>
            <p className="hero-description">
              Каждый день открывает новые возможности для обучения и развития
              профессиональных навыков.
            </p>
            <div className="hero-buttons">
              <button className="cta-primary">Получить предложение</button>
              <button className="cta-secondary">Узнать больше</button>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/img/main.jpeg" alt="dfsd" width={300} height={400} />
            <div className="hero-decorations">
              <div className="decoration-circle decoration-1"></div>
              <div className="decoration-circle decoration-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle icon-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <h3>Экспертное обучение</h3>
              <p>
                Получите знания от ведущих экспертов индустрии с многолетним
                опытом работы в своей области.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle icon-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <h3>Практические курсы</h3>
              <p>
                Изучайте реальные кейсы и применяйте полученные знания на
                практике уже во время обучения.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle icon-red">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V8.5C15 9.8 13.8 11 12.5 11S10 9.8 10 8.5V7.5L4 7V9C4 10.1 4.9 11 6 11V19H8V17H16V19H18V11C19.1 11 20 10.1 20 9H21Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <h3>Персональный подход</h3>
              <p>
                Индивидуальные планы обучения, адаптированные под ваши цели и
                текущий уровень знаний.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-badge">Практические советы</div>
              <h2>Наши эксперты-преподаватели</h2>
              <p>
                Мы решаем конфликт между теоретическими знаниями и практическими
                навыками, объединяя лучшие методики обучения с реальным опытом
                работы в индустрии.
              </p>
            </div>
            <div className="about-image">
              Картинка с изображением преподавателя, обучающего группу студентов
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="courses">
        <div className="container">
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">
                Картинка с изображением курса по веб-разработке
                <div className="course-badge">Популярно</div>
                <div className="course-actions">
                  <button className="action-btn">
                    <Heart className="icon" />
                  </button>
                  <button className="action-btn">
                    <ShoppingBasket className="icon" />
                  </button>
                  <button className="action-btn">
                    <Eye className="icon" />
                  </button>
                </div>
              </div>
              <div className="course-content">
                <div className="course-category">Веб-разработка</div>
                <h1 className="course-title">Современная веб-разработка</h1>
                <p>
                  Изучите современные технологии веб-разработки от основ до
                  продвинутых техник.
                </p>
                <div className="course-stats">
                  <span className="students">
                    <Users className="icon" /> 1,2К студентов
                  </span>
                  <span className="rating">
                    <Star className="icon" /> 4.8
                  </span>
                </div>
                <div className="course-price">
                  <span className="old-price">₽25,990</span>
                  <span className="new-price">₽19,990</span>
                </div>
                <button className="course-btn">Подробнее →</button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                Картинка с изображением курса по Data Science
                <div className="course-badge">Новинка</div>
                <div className="course-actions">
                  <button className="action-btn">
                    <Heart className="icon" />
                  </button>
                  <button className="action-btn">
                    <ShoppingBasket className="icon" />
                  </button>
                  <button className="action-btn">
                    <Eye className="icon" />
                  </button>
                </div>
              </div>
              <div className="course-content">
                <div className="course-category">Аналитика данных</div>
                <h1 className="course-title">
                  Data Science и машинное обучение
                </h1>
                <p>
                  Станьте экспертом в области анализа данных и машинного
                  обучения.
                </p>
                <div className="course-stats">
                  <span className="students">
                    <Users className="icon" /> 856 студентов
                  </span>
                  <span className="rating">
                    <Star className="icon" /> 4.9
                  </span>
                </div>
                <div className="course-price">
                  <span className="old-price">₽32,990</span>
                  <span className="new-price">₽24,990</span>
                </div>
                <button className="course-btn">Подробнее →</button>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                Картинка с изображением курса по UI/UX дизайну
                <div className="course-badge">Хит</div>
                <div className="course-actions">
                  <button className="action-btn">
                    <Heart className="icon" />
                  </button>
                  <button className="action-btn">
                    <ShoppingBasket className="icon" />
                  </button>
                  <button className="action-btn">
                    <Eye className="icon" />
                  </button>
                </div>
              </div>
              <div className="course-content">
                <div className="course-category">Дизайн</div>
                <h1 className="course-title">UI/UX дизайн с нуля</h1>
                <p>
                  Освойте профессию UI/UX дизайнера и создавайте удобные
                  интерфейсы.
                </p>
                <div className="course-stats">
                  <span className="students">
                    <Users className="icon" /> 2,1К студентов
                  </span>
                  <span className="rating">
                    <Star className="icon" /> 4.7
                  </span>
                </div>
                <div className="course-price">
                  <span className="old-price">₽28,990</span>
                  <span className="new-price">₽21,990</span>
                </div>
                <button className="course-btn">Подробнее →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
