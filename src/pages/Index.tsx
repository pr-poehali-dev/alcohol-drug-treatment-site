import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");

  const doctors = [
    {
      name: "Анна Сергеевна Иванова",
      specialization: "Нарколог-психиатр",
      experience: "15 лет",
      education: "ВГМУ, высшая категория",
      rating: 4.9
    },
    {
      name: "Михаил Александрович Петров", 
      specialization: "Психотерапевт",
      experience: "12 лет",
      education: "СПбГМУ, кандидат мед. наук",
      rating: 4.8
    },
    {
      name: "Елена Викторовна Сидорова",
      specialization: "Реабилитолог",
      experience: "10 лет", 
      education: "МГМУ им. Сеченова",
      rating: 4.9
    }
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Благодаря профессиональной помощи врачей смог преодолеть зависимость. Очень благодарен всему коллективу.",
      date: "Сентябрь 2024"
    },
    {
      name: "Ирина К.", 
      rating: 5,
      text: "Деликатный подход, конфиденциальность и эффективное лечение. Рекомендую всем, кто нуждается в помощи.",
      date: "Август 2024"
    },
    {
      name: "Владимир С.",
      rating: 4,
      text: "Прошел полный курс реабилитации. Врачи помогли не только избавиться от зависимости, но и найти новый смысл жизни.",
      date: "Июль 2024"
    }
  ];

  const services = [
    { name: "Детоксикация", price: "от 5 000 ₽" },
    { name: "Кодирование", price: "от 8 000 ₽" },
    { name: "Психотерапия", price: "от 3 000 ₽" },
    { name: "Реабилитация", price: "от 15 000 ₽" },
    { name: "Семейная терапия", price: "от 4 000 ₽" },
    { name: "Медикаментозное лечение", price: "от 2 000 ₽" }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-medical-blue" size={32} />
              <h1 className="text-2xl font-bold text-medical-dark">Центр "Исцеление"</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('main')} className="text-medical-gray hover:text-medical-blue transition-colors">Главная</button>
              <button onClick={() => scrollToSection('doctors')} className="text-medical-gray hover:text-medical-blue transition-colors">Врачи</button>
              <button onClick={() => scrollToSection('reviews')} className="text-medical-gray hover:text-medical-blue transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('prices')} className="text-medical-gray hover:text-medical-blue transition-colors">Цены</button>
              <button onClick={() => scrollToSection('faq')} className="text-medical-gray hover:text-medical-blue transition-colors">Вопросы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-medical-gray hover:text-medical-blue transition-colors">Контакты</button>
            </nav>
            <Button className="bg-medical-blue hover:bg-medical-blue/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-medical-dark mb-6 leading-tight">
                Помощь в лечении алкоголизма и наркомании в Воронеже
              </h1>
              <p className="text-xl text-medical-gray mb-8">
                Профессиональная медицинская помощь с индивидуальным подходом. 
                Конфиденциально, эффективно, с заботой о каждом пациенте.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-medical-blue hover:bg-medical-blue/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('doctors')}>
                  <Icon name="Users" size={20} className="mr-2" />
                  Наши специалисты
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-medical-green mr-2" />
                  <span className="text-medical-gray">Круглосуточно</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={20} className="text-medical-green mr-2" />
                  <span className="text-medical-gray">Анонимно</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-medical-green mr-2" />
                  <span className="text-medical-gray">Лицензировано</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/5a748136-8321-446a-bde2-8f03264102de.jpg" 
                alt="Медицинский центр"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Zap" size={48} className="text-medical-blue mx-auto mb-4" />
                <CardTitle>Детоксикация</CardTitle>
                <CardDescription>Безопасное очищение организма под медицинским контролем</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Brain" size={48} className="text-medical-green mx-auto mb-4" />
                <CardTitle>Психотерапия</CardTitle>
                <CardDescription>Индивидуальная и групповая работа с психологом</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="text-medical-healing mx-auto mb-4" />
                <CardTitle>Реабилитация</CardTitle>
                <CardDescription>Комплексная программа восстановления</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">Наши врачи</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={40} className="text-medical-blue" />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-medical-blue font-medium">
                    {doctor.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-medical-gray">Стаж: {doctor.experience}</p>
                  <p className="text-medical-gray text-sm">{doctor.education}</p>
                  <div className="flex items-center justify-center space-x-1 pt-2">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">Отзывы пациентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-medical-gray italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">Цены на услуги</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-medical-dark">{service.name}</span>
                      <Badge variant="secondary" className="bg-medical-blue/10 text-medical-blue">
                        {service.price}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="text-center">
                  <p className="text-medical-gray mb-4">Точная стоимость определяется после консультации</p>
                  <Button className="bg-medical-blue hover:bg-medical-blue/90">
                    Получить индивидуальный расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-dark mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" size={24} className="text-medical-blue mr-3" />
                  Анонимно ли лечение?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Да, мы гарантируем полную конфиденциальность. Ваши данные не передаются третьим лицам.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={24} className="text-medical-blue mr-3" />
                  Сколько длится лечение?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Продолжительность зависит от степени зависимости. От 3-7 дней детоксикации до нескольких месяцев реабилитации.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Shield" size={24} className="text-medical-blue mr-3" />
                  Есть ли противопоказания?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Перед началом лечения проводится полное медицинское обследование для выявления возможных противопоказаний.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-medical-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-medical-green mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p>г. Воронеж, ул. Медицинская, 15</p>
                  <p className="text-sm opacity-90">Остановка "Поликлиника №1"</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-medical-green mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-xl font-bold">+7 (473) 123-45-67</p>
                  <p className="text-sm opacity-90">Круглосуточно, без выходных</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-medical-green mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p>info@medcentr-vrn.ru</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-medical-dark">
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input type="tel" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue/90">
                  Отправить заявку
                </Button>
                <p className="text-xs text-medical-gray">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" size={24} className="text-medical-green" />
              <span className="text-xl font-bold">Центр "Исцеление"</span>
            </div>
            <div className="text-sm text-gray-400">
              <p>© 2024 Медицинский центр "Исцеление". Лицензия №ЛО-36-01-004567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;