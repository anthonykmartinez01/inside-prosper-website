export const siteConfig = {
  name: 'Inside Prosper',
  description: 'Discover the best local businesses in Prosper, Texas.',
  siteUrl: 'https://insideprosper.com',
  email: 'anthonykmartinez01@gmail.com',
  location: 'Prosper, Texas',
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
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
  },
  {
    name: 'Salsa Tex-Mex',
    slug: 'salsa-tex-mex',
    category: 'food-fun',
    shortDescription: 'Upbeat restaurant providing familiar Tex-Mex standards and margaritas in many flavors. A Prosper favorite since opening.',
    longDescription: 'Salsa Tex-Mex is an upbeat restaurant providing familiar Tex-Mex standards and margaritas in many flavors. A Prosper favorite since opening, we pride ourselves on great food, friendly service, and a welcoming atmosphere for families and friends.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
  },
  {
    name: "Prema's Kitchen",
    slug: 'premas-kitchen',
    category: 'food-fun',
    shortDescription: 'Authentic Indian restaurant offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites.',
    longDescription: "Prema's Kitchen is an authentic Indian restaurant offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites. Our recipes are crafted with care, bringing the rich flavors of India to the Prosper community.",
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  },
  {
    name: 'Sake Sushi & Hibachi',
    slug: 'sake-sushi-hibachi',
    category: 'food-fun',
    shortDescription: 'Japanese restaurant offering fresh sushi, sashimi, hibachi grills, and a full bar in a modern setting.',
    longDescription: 'Sake Sushi & Hibachi is a Japanese restaurant offering fresh sushi, sashimi, hibachi grills, and a full bar in a modern setting. We bring the art of Japanese cuisine to Prosper with quality ingredients and skilled chefs.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80',
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
    address: 'Prosper, TX 75078',
    hours: 'Mon\u2013Sat 5am\u20139pm',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    name: 'Apex Fitness Prosper',
    slug: 'apex-fitness-prosper',
    category: 'health-fitness',
    shortDescription: 'Results-based fitness facility with expert trainers, modern equipment, and a community-focused approach to wellness.',
    longDescription: 'Apex Fitness Prosper is a results-based fitness facility with expert trainers, modern equipment, and a community-focused approach to wellness. We help you build strength, confidence, and lasting healthy habits.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
  },
  {
    name: 'F45 Training Prosper',
    slug: 'f45-training-prosper',
    category: 'health-fitness',
    shortDescription: 'Functional group fitness classes with 5,000+ dynamic movements, team energy, and real results for every body.',
    longDescription: 'F45 Training Prosper offers functional group fitness classes with 5,000+ dynamic movements, team energy, and real results for every body. Our innovative workouts combine cardio and resistance training for maximum impact.',
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
    address: 'Prosper, TX 75078',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    name: 'Henry & Peters CPAs',
    slug: 'henry-peters-cpas',
    category: 'professionals',
    shortDescription: 'Established CPA firm providing comprehensive tax, audit, and business advisory services to Prosper individuals and businesses.',
    longDescription: 'Henry & Peters CPAs is an established CPA firm providing comprehensive tax, audit, and business advisory services to Prosper individuals and businesses. We bring decades of experience to help you navigate your financial future.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    name: 'The Cawlfield Law Firm',
    slug: 'cawlfield-law-firm',
    category: 'professionals',
    shortDescription: 'Real estate attorney serving Prosper, Frisco, and Celina with residential and commercial legal services.',
    longDescription: 'The Cawlfield Law Firm is a real estate attorney serving Prosper, Frisco, and Celina with residential and commercial legal services. We guide you through every step of your real estate transaction with expertise and care.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  // Shop
  {
    name: 'Lily Claire',
    slug: 'lily-claire',
    category: 'shop',
    shortDescription: 'Boutique shop on Broadway offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch.',
    longDescription: 'Lily Claire is a boutique shop on Broadway offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch. Step in and discover curated collections that make every visit special.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    name: 'Prosper Blooms',
    slug: 'prosper-blooms',
    category: 'shop',
    shortDescription: "Prosper's leading florist since 2014, creating expertly crafted arrangements for every occasion with local delivery.",
    longDescription: "Prosper Blooms has been Prosper's leading florist since 2014, creating expertly crafted arrangements for every occasion with local delivery. From weddings to everyday bouquets, we bring beauty to your doorstep.",
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
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
  },
  {
    name: 'Top Notch Electrician',
    slug: 'top-notch-electrician',
    category: 'trades',
    shortDescription: 'Locally owned electrical contractor serving Prosper with reliable, affordable services and 24/7 fast responses.',
    longDescription: 'Top Notch Electrician is a locally owned electrical contractor serving Prosper with reliable, affordable services and 24/7 fast responses. We handle everything from panel upgrades to troubleshooting with professionalism.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
  {
    name: 'Legacy Plumbing',
    slug: 'legacy-plumbing',
    category: 'trades',
    shortDescription: 'Expert plumbing services in Prosper with a mission to spread good by doing good. Trusted by the community.',
    longDescription: 'Legacy Plumbing provides expert plumbing services in Prosper with a mission to spread good by doing good. Trusted by the community, we bring integrity and skill to every job.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80',
  },
];

export function getBusinessesByCategory(categorySlug: string): Business[] {
  return businesses.filter((b) => b.category === categorySlug);
}

export function getRecentBusinesses(count: number = 6): Business[] {
  return businesses.slice(0, count);
}
