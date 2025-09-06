'use client';

import Link from 'next/link';
import { Clock, Star, ArrowRight } from 'lucide-react';
import ServiceFilter, { FilterState } from './ServiceFilter';
import { useState } from 'react';

const services = [
  {
    id: 1,
    name: 'Money piece/face frame foils',
    description: 'Face-framing highlights for a bright, dimensional look.',
    duration: '1 hr 30 min',
    price: '$100.00',
    features: ['Face-framing highlights', 'Dimensional color', 'Bright, natural look'],
    popular: false,
    squareServiceId: '2BOVTV746DAE2HSYHHDTCL4C',
  },
  {
    id: 2,
    name: 'Bang trim',
    description: 'Quick bang trim service.',
    duration: '10 min',
    price: '$7.00',
    features: ['Quick service', 'Bang maintenance', 'Precision trim'],
    popular: false,
    squareServiceId: '2KAIJLCL7JAPR4WOC4RE5NJY',
  },
  {
    id: 3,
    name: 'All over color and haircut',
    description: 'Full color application with haircut.',
    duration: '2 hr',
    price: '$130.00',
    features: ['Full color', 'Includes haircut', 'Professional application'],
    popular: false,
    squareServiceId: '36H2N7JYOQDKXODHM54SEKCJ',
  },
  {
    id: 4,
    name: 'Extension Consultation',
    description: 'Free consultation for hair extensions.',
    duration: '30 min',
    price: 'Free',
    features: ['Free consultation', 'Extension planning', 'Professional advice'],
    popular: false,
    squareServiceId: '6E6N4FMJ5MXMY6MMIDBIULOP',
  },
  {
    id: 5,
    name: 'Blowout',
    description: 'Hair is washed, Blow dried and styled.',
    duration: '45 min',
    price: '$40.00',
    features: ['Wash and style', 'Professional blowout', 'Quick service'],
    popular: false,
    squareServiceId: '7EVCTGFMQXLLHYTRG3VGILHL',
  },
  {
    id: 6,
    name: 'Kids cut',
    description: 'Professional haircut for children.',
    duration: '30 min',
    price: '$30.00',
    features: ['Children\'s styling', 'Quick service', 'Professional cut'],
    popular: false,
    squareServiceId: '7MY4BCGX3K6ASAWUZMBH4KSL',
  },
  {
    id: 7,
    name: 'The Half and Haircut',
    description: 'Partial highlight/Crown, part and hairline colored. Hair on nape is left out. Great for a maintenence appointment in between a full highlight.',
    duration: '2 hr 30 min',
    price: '$180.00',
    features: ['Partial highlights', 'Maintenance service', 'Includes haircut'],
    popular: false,
    squareServiceId: 'BB2XP5JF4DW6HY6BLUSM6XIT',
  },
  {
    id: 8,
    name: 'Hand tied extension install',
    description: 'Professional hand-tied weft extensions installation.',
    duration: '3 hr',
    price: '$300.00',
    features: ['Hand-tied wefts', 'Professional installation', 'Long-lasting results'],
    popular: true,
    squareServiceId: 'FTO7ZKCNT6ITNDA3CZLG2CJP',
  },
  {
    id: 9,
    name: 'Women\'s haircut',
    description: 'Professional women\'s haircut and styling.',
    duration: '1 hr',
    price: '$50.00',
    features: ['Professional cut', 'Styling included', 'Consultation'],
    popular: false,
    squareServiceId: 'LS3LRO7ZUX2FEQ2JUI3YZJ2A',
  },
  {
    id: 10,
    name: 'Formal Event style/Updo',
    description: 'Special occasion styling and updos.',
    duration: '1 hr',
    price: '$75.00',
    features: ['Special occasion', 'Professional styling', 'Updo options'],
    popular: false,
    squareServiceId: 'OTXIQILGWDEQ6C43JDWE7VZ3',
  },
  {
    id: 11,
    name: 'Root Retouch and Haircut',
    description: 'Grey retouch with color on roots, no foils.',
    duration: '2 hr 20 min',
    price: '$120.00',
    features: ['Grey coverage', 'Root touch-up', 'Includes haircut'],
    popular: false,
    squareServiceId: 'QIZWFBUULJ6Q5GAFFEDCCEXS',
  },
  {
    id: 12,
    name: 'Hair Tinsel',
    description: 'Tinsel is installed with a bead and stays as long as you want until you take it out! Great for birthdays and holidays!',
    duration: '30 min',
    price: '$20.00',
    features: ['Tinsel installation', 'Festive styling', 'Temporary decoration'],
    popular: false,
    squareServiceId: 'RXU2TISTRDZJQ2IDEVFXIM34',
  },
  {
    id: 13,
    name: 'Men\'s cut',
    description: 'Professional men\'s haircut.',
    duration: '30 min',
    price: '$30.00',
    features: ['Men\'s styling', 'Quick service', 'Professional cut'],
    popular: false,
    squareServiceId: 'TCRVF3RQZRN7IGR6LIO2ZORL',
  },
  {
    id: 14,
    name: 'The Full and Haircut',
    description: 'Any type of full blonding or full color transformation that involves foils or special sectioning.',
    duration: '3 hr',
    price: '$220.00',
    features: ['Full transformation', 'Blonding service', 'Includes haircut'],
    popular: false,
    squareServiceId: 'TII6J5IRRTEKOLYKUCGF5IQY',
  },
  {
    id: 15,
    name: 'Womens short pixie',
    description: 'Short pixie cut for women.',
    duration: '30 min',
    price: '$30.00',
    features: ['Short styling', 'Pixie cut', 'Quick service'],
    popular: false,
    squareServiceId: 'TM2FIRYTKSEHTMZ6ZSFG4D6I',
  },
  {
    id: 16,
    name: 'Teen girls cut',
    description: 'Ages 13-17.',
    duration: '1 hr',
    price: '$40.00',
    features: ['Ages 13-17', 'Professional styling', 'Age-appropriate cuts'],
    popular: false,
    squareServiceId: 'U2Z6ZVRIDKVOQEJNWEV7IR7Z',
  },
  {
    id: 17,
    name: 'Hand tied extension move-up',
    description: 'Every 8-10 weeks. Extensions are taken out, I give you a good scalp scrub and we move them back up.',
    duration: '2 hr 30 min',
    price: '$250.00',
    features: ['Maintenance service', 'Scalp treatment', 'Extension care'],
    popular: false,
    squareServiceId: 'WHTIDY25FIEBGCMZYXW7S25T',
  },
  {
    id: 18,
    name: 'Toner/Gloss and Haircut',
    description: 'A Toner/Gloss is usually applied at the bowl and sits for around 10 minutes. Toners can be used to make blonde hair look less yellow or to richen up your dark. Great if you dont have time/money for a full service but still want to freshen up your look',
    duration: '1 hr 30 min',
    price: '$80.00',
    features: ['Toner application', 'Gloss treatment', 'Includes haircut'],
    popular: false,
    squareServiceId: 'WZMRBDZM3VQP7M3HIKSXMSAP',
  },
  {
    id: 19,
    name: 'Toner/Gloss & Blowout (No Haircut)',
    description: 'Toner/Gloss treatment with blowout styling, no haircut included.',
    duration: '1 hr 15 min',
    price: '$60.00',
    features: ['Toner treatment', 'Blowout styling', 'No haircut'],
    popular: false,
    squareServiceId: 'ZIIXG6RVJO4SHPW2YDW4PYDU',
  },
];

const Services = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: 'all',
    duration: 'all',
    search: '',
  });

  // Service categorization for filtering
  const categorizedServices = services.map(service => {
    let category = 'haircuts';
    if (service.name.toLowerCase().includes('color') || service.name.toLowerCase().includes('highlight') || service.name.toLowerCase().includes('toner') || service.name.toLowerCase().includes('gloss')) {
      category = 'color';
    } else if (service.name.toLowerCase().includes('extension')) {
      category = 'extensions';
    } else if (service.name.toLowerCase().includes('style') || service.name.toLowerCase().includes('updo') || service.name.toLowerCase().includes('event')) {
      category = 'styling';
    }

    let durationCategory = 'standard';
    if (service.duration.includes('10') || service.duration.includes('30')) {
      durationCategory = 'quick';
    } else if (service.duration.includes('2') || service.duration.includes('3')) {
      durationCategory = 'extended';
    }

    const priceNumber = parseInt(service.price.replace('$', '').replace('.00', ''));
    let priceRange = '0-50';
    if (priceNumber > 50 && priceNumber <= 100) priceRange = '51-100';
    else if (priceNumber > 100 && priceNumber <= 200) priceRange = '101-200';
    else if (priceNumber > 200) priceRange = '201+';

    return { ...service, category, durationCategory, priceRange, priceNumber };
  });

  // Filter services based on active filters
  const filteredServices = categorizedServices.filter(service => {
    const matchesCategory = filters.category === 'all' || service.category === filters.category;
    const matchesPrice = filters.priceRange === 'all' || service.priceRange === filters.priceRange;
    const matchesDuration = filters.duration === 'all' || service.durationCategory === filters.duration;
    const matchesSearch = !filters.search || 
      service.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      service.description.toLowerCase().includes(filters.search.toLowerCase());

    return matchesCategory && matchesPrice && matchesDuration && matchesSearch;
  });

  return (
    <section id="services" className="py-20 bg-seamless section-transition">
      <div className="section-divider"></div>
      <div className="container-custom">
        {/* Service Filter */}
        <ServiceFilter onFilterChange={setFilters} activeFilters={filters} />

        {/* Anchor sections for footer links */}
        <div id="haircuts" className="sr-only">Haircuts Section</div>
        <div id="color" className="sr-only">Color Section</div>
        <div id="extensions" className="sr-only">Extensions Section</div>
        <div id="styling" className="sr-only">Styling Section</div>
        <div id="treatments" className="sr-only">Treatments Section</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`relative seamless-card rounded-2xl overflow-hidden flex flex-col floating-element ${
                service.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-heading text-h3 font-semibold text-text flex-1 pr-4">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-small font-medium flex-shrink-0">
                      Most Popular
                    </div>
                  )}
                </div>
                
                <p className="text-body text-text/70 mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-small text-text/60 flex-1">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{service.duration}</span>
                  </div>
                  <div className="text-heading text-xl font-bold text-accent flex-shrink-0 whitespace-nowrap">
                    {service.price}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-small text-text/70">
                      <Star className="w-3 h-3 text-accent fill-current flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://book.squareup.com/appointments/dliuybdwgxv87d/location/L81AYV9NYYW19/services/${service.squareServiceId}?buttonTextColor=000000&color=e8b4b8&locale=en&referrer=so`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full group whitespace-nowrap flex items-center justify-center mt-auto"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 