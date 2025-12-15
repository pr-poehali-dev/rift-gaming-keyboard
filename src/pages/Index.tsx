import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedConfig, setSelectedConfig] = useState<'base' | 'pro'>('base');

  const techFeatures = [
    {
      icon: 'Zap',
      title: 'Отклик 5мс',
      description: 'Минимальная задержка для профессиональной игры',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: 'Wifi',
      title: 'Беспроводная',
      description: 'Свобода движений без проводов, стабильное соединение',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'Battery',
      title: '3 недели работы',
      description: 'Автономность для длительных игровых сессий',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: 'Volume2',
      title: 'Бесшумная',
      description: 'Сенсорная поверхность без звуков нажатий',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const specs = [
    { label: 'Тип', value: 'Полностью сенсорная' },
    { label: 'Отклик', value: '5 миллисекунд' },
    { label: 'Подключение', value: 'Беспроводное 2.4GHz' },
    { label: 'Батарея', value: 'До 3 недель' },
    { label: 'Подсветка', value: 'RGB регулируемая' },
    { label: 'Материал', value: 'Анодированный алюминий' },
    { label: 'Вес', value: '680 грамм' },
    { label: 'Размеры', value: '440 × 135 × 25 мм' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background pointer-events-none" />
      
      <div className="relative">
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl w-full">
            <div className="text-center space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase">Профессиональный уровень</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black tracking-tight">
                <span className="gradient-text">RIFT</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Полностью сенсорная игровая клавиатура с откликом <span className="text-cyan-400 font-bold">5 миллисекунд</span>
              </p>

              <div className="relative max-w-4xl mx-auto my-16">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
                <img 
                  src="https://cdn.poehali.dev/projects/7dd498fa-1e3e-4215-9314-761b3b3b9b62/files/eb96b068-ea99-46f8-a2b5-26a13a888c0c.jpg" 
                  alt="RIFT Keyboard"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-8 py-6 glow-cyan"
                >
                  <Icon name="ShoppingCart" className="mr-2" size={24} />
                  Купить за 40 000 ₽
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold text-lg px-8 py-6"
                >
                  <Icon name="Play" className="mr-2" size={24} />
                  Смотреть видео
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
                {[
                  { value: '5мс', label: 'Отклик' },
                  { value: '3 недели', label: 'Батарея' },
                  { value: '0дБ', label: 'Шум' },
                  { value: '680г', label: 'Вес' }
                ].map((stat, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="text-4xl font-black gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Технологии</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">Передовые решения</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Каждый элемент разработан для максимальной производительности
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techFeatures.map((feature, i) => (
                <Card 
                  key={i} 
                  className="bg-card/50 backdrop-blur border-2 border-border hover:border-cyan-400/50 transition-all duration-300 p-8 group hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-gradient-to-b from-purple-900/10 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-purple-400 font-mono text-sm uppercase tracking-wider">Характеристики</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">Премиум материалы</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Анодированный алюминий, закаленное стекло и RGB подсветка
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur border-2 border-purple-500/30 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <Icon name="Layers" size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Сенсорная поверхность</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Закаленное стекло с нанопокрытием обеспечивает идеальное скольжение пальцев и мгновенный отклик на каждое касание
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-2 border-cyan-500/30 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon name="Sparkles" size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">RGB подсветка</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    16.8 миллионов цветов, регулируемая яркость и синхронизация с игрой для полного погружения
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-2 border-yellow-500/30 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                      <Icon name="Grip" size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Эргономика</h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Угол наклона 5° и магнитная подставка для запястий снижают усталость в длительных сессиях
                  </p>
                </Card>
              </div>

              <Card className="bg-card/50 backdrop-blur border-2 border-border p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Полные характеристики</h3>
                <div className="space-y-4">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-border/50">
                      <span className="text-gray-400 font-medium">{spec.label}</span>
                      <span className="text-white font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Купить</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">Выберите комплектацию</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 ${
                  selectedConfig === 'base' 
                    ? 'border-4 border-cyan-400 bg-cyan-400/5 scale-105' 
                    : 'border-2 border-border hover:border-cyan-400/50'
                }`}
                onClick={() => setSelectedConfig('base')}
              >
                <div className="text-center space-y-6">
                  <div className="inline-block px-4 py-2 bg-cyan-400/10 rounded-full">
                    <span className="text-cyan-400 font-bold uppercase text-sm">Base</span>
                  </div>
                  <div>
                    <div className="text-5xl font-black mb-2">40 000 ₽</div>
                    <div className="text-gray-400">Стандартная комплектация</div>
                  </div>
                  <ul className="space-y-3 text-left">
                    {[
                      'Клавиатура Rift',
                      'USB-C кабель для зарядки',
                      'Беспроводной адаптер',
                      'Документация',
                      'Гарантия 2 года'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedConfig === 'pro' 
                    ? 'border-4 border-purple-400 bg-purple-400/5 scale-105' 
                    : 'border-2 border-border hover:border-purple-400/50'
                }`}
                onClick={() => setSelectedConfig('pro')}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                  <span className="text-white font-bold uppercase text-xs">Популярный</span>
                </div>
                <div className="text-center space-y-6">
                  <div className="inline-block px-4 py-2 bg-purple-400/10 rounded-full">
                    <span className="text-purple-400 font-bold uppercase text-sm">Pro</span>
                  </div>
                  <div>
                    <div className="text-5xl font-black mb-2 gradient-text">60 000 ₽</div>
                    <div className="text-gray-400">Расширенная комплектация</div>
                  </div>
                  <ul className="space-y-3 text-left">
                    {[
                      'Клавиатура Rift',
                      'USB-C кабель для зарядки',
                      'Беспроводной адаптер',
                      'Магнитная подставка для запястий',
                      'Чехол для транспортировки',
                      'Дополнительные накладки',
                      'Гарантия 3 года + страховка'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                className={`font-bold text-lg px-12 py-7 text-white ${
                  selectedConfig === 'base'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-cyan'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 glow-purple'
                }`}
              >
                <Icon name="ShoppingCart" className="mr-2" size={24} />
                Купить {selectedConfig === 'base' ? 'Base' : 'Pro'} за {selectedConfig === 'base' ? '40 000' : '60 000'} ₽
              </Button>
              <p className="text-gray-400 mt-6">
                Бесплатная доставка по России • Оплата при получении • Возврат 30 дней
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/50 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Поддержка</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Гарантия</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Контакты</a>
            </div>
            <p className="text-sm">© 2024 Rift Keyboard. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;