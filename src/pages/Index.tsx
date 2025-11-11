import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const categories = [
  {
    id: 1,
    title: 'Университеты и колледжи',
    description: 'Высшее и среднее профессиональное образование',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/8af61e92-fb12-47f4-a8db-d442e2791308.jpg',
    count: 45
  },
  {
    id: 2,
    title: 'Профессиональная переподготовка',
    description: 'Курсы повышения квалификации и новые специальности',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/f4c5fc3f-d796-41e6-9407-6fab5f73a2ab.jpg',
    count: 128
  },
  {
    id: 3,
    title: 'Кружки и секции',
    description: 'Дополнительное образование для детей и взрослых',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/86570395-07f5-4146-a6eb-698fb8006367.jpg',
    count: 89
  }
];

const bannerSlides = [
  {
    id: 1,
    title: 'Инвестируйте в себя',
    subtitle: 'Начните путь к новой профессии уже сегодня',
    bgGradient: 'from-orange-500 to-amber-600'
  },
  {
    id: 2,
    title: 'Обучение на результат',
    subtitle: 'Практические навыки от ведущих экспертов',
    bgGradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    title: 'Ваше время — ваши правила',
    subtitle: 'Гибкий график обучения в любом месте',
    bgGradient: 'from-orange-600 to-amber-500'
  },
  {
    id: 4,
    title: 'Знания, которые работают',
    subtitle: 'Применяйте навыки сразу после обучения',
    bgGradient: 'from-amber-600 to-orange-600'
  }
];

const sampleCourses = [
  {
    id: 1,
    title: 'Веб-разработка с нуля',
    author: 'Марат Асанов',
    price: 45000,
    rating: 4.8,
    students: 1200,
    category: 'Профессиональная переподготовка',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/f4c5fc3f-d796-41e6-9407-6fab5f73a2ab.jpg'
  },
  {
    id: 2,
    title: 'MBA в Казахстане',
    author: 'Университет Нархоз',
    price: 1200000,
    rating: 4.9,
    students: 340,
    category: 'Университеты и колледжи',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/8af61e92-fb12-47f4-a8db-d442e2791308.jpg'
  },
  {
    id: 3,
    title: 'Шахматы для детей',
    author: 'Айдос Смагулов',
    price: 15000,
    rating: 4.7,
    students: 580,
    category: 'Кружки и секции',
    image: 'https://cdn.poehali.dev/projects/52a9d9d4-0b4b-49ce-b94d-91aed5e90778/files/86570395-07f5-4146-a6eb-698fb8006367.jpg'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-primary">Logomo</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О платформе</a>
            <Button variant="outline">Войти</Button>
            <Button>Разместить курс</Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="relative h-[500px] overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center text-white`}>
              <div className="container mx-auto px-4 text-center animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Выбрать курс
                </Button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <Icon name="ChevronLeft" size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <Icon name="ChevronRight" size={24} className="text-white" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white text-center animate-scale-in">
          <Icon name="Sparkles" size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Начните делиться своими знаниями
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Регистрируйтесь сейчас и пользуйтесь всеми возможностями тарифа Супер всего за 990 тенге весь год!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Зарегистрироваться сейчас
          </Button>
        </div>
      </section>

      <section id="catalog" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Каталог курсов</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-primary">{category.count} курсов</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-6">Популярные курсы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {course.price.toLocaleString()} ₸
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} />
                <h3 className="text-xl font-bold">Logomo</h3>
              </div>
              <p className="text-gray-400">Маркетплейс знаний для всех</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@logomo.kz</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (777) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Logomo. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedCourse?.title}</DialogTitle>
            <DialogDescription>Автор: {selectedCourse?.author}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={selectedCourse?.image}
              alt={selectedCourse?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{selectedCourse?.category}</Badge>
              <div className="flex items-center gap-1">
                <Icon name="Star" size={20} className="text-amber-500 fill-amber-500" />
                <span className="font-semibold">{selectedCourse?.rating}</span>
                <span className="text-muted-foreground ml-2">({selectedCourse?.students} студентов)</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Описание курса</h4>
              <p className="text-muted-foreground">
                Этот курс предоставит вам все необходимые знания и навыки для успешного старта в выбранной области.
                Вы получите практический опыт работы над реальными проектами под руководством опытных преподавателей.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Что вы получите</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Доступ ко всем материалам курса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Сертификат о прохождении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Поддержка преподавателя</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-primary">
                {selectedCourse?.price.toLocaleString()} ₸
              </span>
              <Button size="lg" className="px-8">Записаться на курс</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
