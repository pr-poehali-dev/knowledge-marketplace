import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 1,
    title: 'Университеты и колледжи',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/8af61e92-fb12-47f4-a8db-d442e2791308.jpg',
    count: 45
  },
  {
    id: 2,
    title: 'Профессиональная переподготовка',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/f4c5fc3f-d796-41e6-9407-6fab5f73a2ab.jpg',
    count: 128
  },
  {
    id: 3,
    title: 'Кружки и секции',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/86570395-07f5-4146-a6eb-698fb8006367.jpg',
    count: 89
  }
];

const bannerSlides = [
  {
    id: 1,
    title: 'Инвестируйте в себя',
    subtitle: 'Новая профессия уже сегодня'
  },
  {
    id: 2,
    title: 'Обучение на результат',
    subtitle: 'Навыки от ведущих экспертов'
  },
  {
    id: 3,
    title: 'Ваше время — ваши правила',
    subtitle: 'Учитесь в любом месте'
  },
  {
    id: 4,
    title: 'Знания, которые работают',
    subtitle: 'Применяйте сразу после обучения'
  }
];



const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-primary" size={28} />
            <span className="text-xl font-semibold">Logomo</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О платформе</a>
            <Button variant="ghost" size="sm">Войти</Button>
            <Button size="sm">Разместить курс</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      <section className="relative h-[400px] bg-gradient-to-r from-orange-500 to-amber-500 overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full flex items-center justify-center text-white px-4">
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                <p className="text-lg md:text-xl opacity-90 mb-8">{slide.subtitle}</p>
                <Button size="lg" variant="secondary">
                  Посмотреть курсы
                </Button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <Icon name="ChevronLeft" size={20} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <Icon name="ChevronRight" size={20} className="text-white" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-10 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Начните делиться своими знаниями
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Регистрируйтесь сейчас и пользуйтесь всеми возможностями тарифа Супер всего за 990 тенге весь год!
          </p>
          <Button size="lg" variant="secondary">
            Зарегистрироваться сейчас
          </Button>
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Каталог</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-white text-foreground border-0">
                  {category.count}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={24} />
                <span className="font-semibold">Logomo</span>
              </div>
              <p className="text-sm text-muted-foreground">Маркетплейс знаний</p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@logomo.kz</li>
                <li>+7 (777) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Logomo</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;