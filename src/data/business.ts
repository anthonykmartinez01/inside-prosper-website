export const siteConfig = {
  name: 'Inside Prosper',
  description: 'Discover the best local businesses in Prosper, Texas.',
  siteUrl: 'https://insideprosper.com',
  email: 'anthonykmartinez01@gmail.com',
  phone: '(818) 798-8966',
  phoneRaw: '+18187988966',
  location: 'Prosper, Texas',
  city: 'Prosper',
  state: 'TX',
  zip: '75078',
};

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { name: 'Food & Fun', slug: 'food-fun', description: 'Restaurants, entertainment, and local eateries in Prosper, Texas.' },
  { name: 'Health & Fitness', slug: 'health-fitness', description: 'Gyms, wellness centers, and health professionals in Prosper, Texas.' },
  { name: 'Professionals', slug: 'professionals', description: 'Accountants, lawyers, real estate agents, and more in Prosper, Texas.' },
  { name: 'Shop', slug: 'shop', description: 'Boutiques, retail stores, and unique shopping experiences in Prosper, Texas.' },
  { name: 'Trades', slug: 'trades', description: 'Plumbers, electricians, contractors, and skilled tradespeople in Prosper, Texas.' },
];

export const navigation = categories.map((c) => ({
  label: c.name,
  href: `#${c.slug}`,
}));

export interface Business {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  quote?: string;
  phone?: string;
  address?: string;
  hours?: string;
  image: string;
}

export const businesses: Business[] = [
  // Food & Fun
  {
    name: '1418 Coffee',
    slug: '1418-coffee',
    category: 'food-fun',
    shortDescription: 'Locally owned specialty coffee shop serving fresh-baked pastries, espresso drinks, and pour-overs in a cozy atmosphere.',
    longDescription: '1418 Coffee is a locally owned specialty coffee shop right here in Prosper, Texas. We\'re passionate about serving expertly crafted espresso drinks, smooth pour-overs, and fresh-baked pastries made in-house daily. Our cozy space is designed to be a gathering spot for the community\u2014whether you\'re catching up with friends, getting some work done, or just enjoying a quiet moment with a great cup of coffee. We source our beans from quality roasters and take pride in every drink we serve. Stop by and taste the difference that local love makes.',
    quote: 'We wanted to create a coffee shop that feels like home for the Prosper community.',
    phone: '(469) 598-1418',
    address: '1418 N Preston Rd, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 6am\u20135pm, Sat\u2013Sun 7am\u20134pm',
    image: '/images/1418-coffee.png',
  },
  {
    name: 'Salsa Tex-Mex',
    slug: 'salsa-tex-mex',
    category: 'food-fun',
    shortDescription: 'Upbeat restaurant providing familiar Tex-Mex standards and margaritas in many flavors. A Prosper favorite since opening.',
    longDescription: 'Salsa Tex-Mex is an upbeat restaurant providing familiar Tex-Mex standards and margaritas in many flavors. A Prosper favorite since opening, we pride ourselves on great food, friendly service, and a welcoming atmosphere for families and friends.',
    phone: '(972) 346-4643',
    address: '1170 N Preston Rd, Ste 190, Prosper, TX 75078',
    hours: 'Mon\u2013Thu 11am\u20139:30pm, Fri\u2013Sat 11am\u201310pm, Sun 11am\u20139pm',
    image: '/images/salsa-tex-mex.png',
  },
  {
    name: "Prema's Kitchen",
    slug: 'premas-kitchen',
    category: 'food-fun',
    shortDescription: 'Authentic Indian restaurant offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites.',
    longDescription: "Prema's Kitchen is an authentic Indian restaurant offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites. Our recipes are crafted with care, bringing the rich flavors of India to the Prosper community.",
    address: '1921 N Preston Rd, Prosper, TX 75078',
    hours: 'Daily 10am\u20132:30pm, 4:30pm\u201310pm',
    image: '/images/premas-kitchen.png',
  },
  {
    name: 'Sake Sushi & Hibachi',
    slug: 'sake-sushi-hibachi',
    category: 'food-fun',
    shortDescription: 'Japanese restaurant offering fresh sushi, sashimi, hibachi grills, and a full bar in a modern setting.',
    longDescription: 'Sake Sushi & Hibachi is a Japanese restaurant offering fresh sushi, sashimi, hibachi grills, and a full bar in a modern setting. We bring the art of Japanese cuisine to Prosper with quality ingredients and skilled chefs.',
    phone: '(469) 260-3200',
    address: '4580 W University Dr, Suite 50, Prosper, TX 75078',
    hours: 'Mon\u2013Thu 11am\u20139:30pm, Fri 11am\u201310:30pm, Sat 12pm\u201310:30pm, Sun 12pm\u20139:30pm',
    image: '/images/sake-sushi-hibachi.png',
  },
  // Health & Fitness
  {
    name: 'CrossFit Prosper',
    slug: 'crossfit-prosper',
    category: 'health-fitness',
    shortDescription: 'Premier CrossFit gym offering group classes, personal training, and a supportive community for all fitness levels.',
    longDescription: 'CrossFit Prosper is a premier CrossFit gym offering group classes, personal training, and a supportive community for all fitness levels. We believe fitness is for everyone and our coaches are dedicated to helping you reach your goals.',
    quote: 'We believe fitness is for everyone. Our community will push you to be your best.',
    phone: '(469) 842-0667',
    address: '4295 S Coit Rd, Building 140, Prosper, TX 75078',
    hours: 'Mon\u2013Sat 5am\u20139pm',
    image: '/images/crossfit-prosper.png',
  },
  {
    name: 'Apex Fitness Prosper',
    slug: 'apex-fitness-prosper',
    category: 'health-fitness',
    shortDescription: 'Results-based fitness facility with expert trainers, modern equipment, and a community-focused approach to wellness.',
    longDescription: 'Apex Fitness Prosper is a results-based fitness facility with expert trainers, modern equipment, and a community-focused approach to wellness. We help you build strength, confidence, and lasting healthy habits.',
    phone: '(469) 277-9532',
    address: '750 Richland Blvd, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 6am\u201312pm & 4pm\u20138pm, Sat 6am\u201312pm, Sun Closed',
    image: '/images/apex-fitness-prosper.png',
  },
  {
    name: 'F45 Training Prosper',
    slug: 'f45-training-prosper',
    category: 'health-fitness',
    shortDescription: 'Functional group fitness classes with 5,000+ dynamic movements, team energy, and real results for every body.',
    longDescription: 'F45 Training Prosper offers functional group fitness classes with 5,000+ dynamic movements, team energy, and real results for every body. Our innovative workouts combine cardio and resistance training for maximum impact.',
    phone: '(972) 427-4002',
    address: '1061 N Coleman St, Ste 150, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 5:15am\u20136:30pm, Sat 8am\u201311:45am, Sun 9am\u20133pm',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  // Professionals
  {
    name: 'Greg Hall Law',
    slug: 'greg-hall-law',
    category: 'professionals',
    shortDescription: 'Estate planning and probate attorney serving Prosper families with personalized, compassionate legal guidance.',
    longDescription: 'Greg Hall Law is an estate planning and probate attorney serving Prosper families with personalized, compassionate legal guidance. We make the legal process as comfortable and clear as possible.',
    quote: 'Most people never want to meet with a lawyer. I make the process as comfortable and clear as possible.',
    phone: '(214) 295-7000',
    address: '290 S Preston Rd, Suite 300, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 9am\u20135pm',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    name: 'Henry & Peters CPAs',
    slug: 'henry-peters-cpas',
    category: 'professionals',
    shortDescription: 'Established CPA firm providing comprehensive tax, audit, and business advisory services to Prosper individuals and businesses.',
    longDescription: 'Henry & Peters CPAs is an established CPA firm providing comprehensive tax, audit, and business advisory services to Prosper individuals and businesses. We bring decades of experience to help you navigate your financial future.',
    phone: '(469) 956-5400',
    address: '8000 Warren Pkwy, Ste 103, Frisco, TX 75034',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    name: 'The Cawlfield Law Firm',
    slug: 'cawlfield-law-firm',
    category: 'professionals',
    shortDescription: 'Real estate attorney serving Prosper, Frisco, and Celina with residential and commercial legal services.',
    longDescription: 'The Cawlfield Law Firm is a real estate attorney serving Prosper, Frisco, and Celina with residential and commercial legal services. We guide you through every step of your real estate transaction with expertise and care.',
    phone: '(972) 382-5400',
    address: '129 N Ohio St, Celina, TX 75009',
    hours: 'Mon\u2013Fri 8am\u20135pm',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  // Shop
  {
    name: 'Lily Claire',
    slug: 'lily-claire',
    category: 'shop',
    shortDescription: 'Boutique shop on Broadway offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch.',
    longDescription: 'Lily Claire is a boutique shop on Broadway offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch. Step in and discover curated collections that make every visit special.',
    phone: '(214) 649-4806',
    address: '201 S Main St, Suite C, Prosper, TX 75078',
    hours: 'Mon 1:30pm\u20136pm, Tue\u2013Sat 11am\u20136pm, Sun Closed',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    name: 'Prosper Blooms',
    slug: 'prosper-blooms',
    category: 'shop',
    shortDescription: "Prosper's leading florist since 2014, creating expertly crafted arrangements for every occasion with local delivery.",
    longDescription: "Prosper Blooms has been Prosper's leading florist since 2014, creating expertly crafted arrangements for every occasion with local delivery. From weddings to everyday bouquets, we bring beauty to your doorstep.",
    phone: '(469) 481-9294',
    address: '210 W Broadway St, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 9am\u20135pm, Sat 10am\u20132pm, Sun Closed',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80',
  },
  {
    name: 'Dawson + Claire',
    slug: 'dawson-claire',
    category: 'shop',
    shortDescription: "Adorable women's boutique on Broadway Street offering curated clothing, accessories, and gifts in downtown Prosper.",
    longDescription: "Dawson + Claire is an adorable women's boutique on Broadway Street offering curated clothing, accessories, and gifts in downtown Prosper. We love helping you find pieces that feel uniquely you.",
    quote: 'We love helping women feel confident and beautiful. Shopping here is an experience, not just a transaction.',
    phone: '(214) 305-3461',
    address: '113 W Broadway St, Prosper, TX 75078',
    hours: 'Mon\u2013Sat 10am\u20136pm, Closed Sunday',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
  },
  // Trades
  {
    name: 'Cody & Sons Plumbing, Heating & Air',
    slug: 'cody-sons-plumbing',
    category: 'trades',
    shortDescription: 'Full-service plumbing, heating, and air conditioning company serving Prosper with expert care and 24/7 live answering.',
    longDescription: 'Cody & Sons Plumbing, Heating & Air is a full-service plumbing, heating, and air conditioning company serving Prosper with expert care and 24/7 live answering. We treat every home like our own.',
    phone: '(214) 339-3401',
    address: '701 E Plano Pkwy, Suite 400, Plano, TX 75074',
    hours: 'Mon\u2013Fri 8am\u20136pm, Sat 8am\u20133pm',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
  },
  {
    name: 'Top Notch Electrician',
    slug: 'top-notch-electrician',
    category: 'trades',
    shortDescription: 'Locally owned electrical contractor serving Prosper with reliable, affordable services and 24/7 fast responses.',
    longDescription: 'Top Notch Electrician is a locally owned electrical contractor serving Prosper with reliable, affordable services and 24/7 fast responses. We handle everything from panel upgrades to troubleshooting with professionalism.',
    phone: '(972) 379-8646',
    address: 'Serving Prosper, TX and surrounding areas',
    hours: 'Open 24/7',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
  {
    name: 'Legacy Plumbing',
    slug: 'legacy-plumbing',
    category: 'trades',
    shortDescription: 'Expert plumbing services in Prosper with a mission to spread good by doing good. Trusted by the community.',
    longDescription: 'Legacy Plumbing provides expert plumbing services in Prosper with a mission to spread good by doing good. Trusted by the community, we bring integrity and skill to every job.',
    phone: '(972) 801-9798',
    address: '1101 E Eldorado Pkwy, Little Elm, TX 75068',
    hours: 'Mon\u2013Fri 7am\u20138pm, Sat\u2013Sun 7am\u20135:30pm',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80',
  },
];

export function getBusinessesByCategory(categorySlug: string): Business[] {
  return businesses.filter((b) => b.category === categorySlug);
}

export function getRecentBusinesses(count: number = 6): Business[] {
  return businesses.slice(0, count);
}
