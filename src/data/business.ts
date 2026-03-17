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

export const nearbyCities = ['Celina', 'Frisco', 'McKinney', 'Little Elm', 'Aubrey'];

export interface Category {
  name: string;
  slug: string;
  urlPath: string;
  description: string;
  longDescription: string;
  metaDescription: string;
}

export const categories: Category[] = [
  {
    name: 'Food & Fun',
    slug: 'food-fun',
    urlPath: 'food-and-fun',
    description: 'Restaurants, entertainment, and local eateries in Prosper, Texas.',
    longDescription: 'Prosper, Texas has quietly become one of the best dining destinations in Collin County. From specialty coffee shops brewing fresh pour-overs to authentic Tex-Mex joints and globally inspired kitchens, the local food scene reflects the diversity and pride of this growing community. Whether you are craving handmade sushi, Southern Indian favorites, or a perfectly crafted espresso after a Saturday morning walk, Prosper has something for every palate. These are the restaurants and eateries that neighbors recommend to each other — the kind of places where the owners know your name and the food keeps you coming back. Residents from nearby Celina, Frisco, and McKinney regularly make the drive to eat here, and once you try them, you will too.',
    metaDescription: 'Discover the best restaurants, cafes, and eateries in Prosper, TX. Locally owned food spots recommended by your neighbors — from coffee to Tex-Mex to sushi.',
  },
  {
    name: 'Health & Fitness',
    slug: 'health-fitness',
    urlPath: 'health-and-fitness',
    description: 'Gyms, wellness centers, and health professionals in Prosper, Texas.',
    longDescription: 'Staying active in Prosper, Texas means more than just hitting a treadmill — it means joining a community that pushes you to be your best. From high-intensity CrossFit boxes and functional training studios to results-driven personal training facilities, Prosper has fitness options for every level and goal. What makes these gyms special is the people behind them: coaches who learn your name, trainers who build programs around your life, and communities that celebrate every milestone with you. Residents across Prosper, Celina, and Frisco trust these fitness professionals to help them build strength, confidence, and lasting healthy habits.',
    metaDescription: 'Find the best gyms, fitness studios, and wellness centers in Prosper, TX. CrossFit, personal training, group classes — trusted by the local community.',
  },
  {
    name: 'Professionals',
    slug: 'professionals',
    urlPath: 'professionals',
    description: 'Accountants, lawyers, real estate agents, and more in Prosper, Texas.',
    longDescription: 'When you need an accountant, attorney, or financial advisor in Prosper, Texas, nothing beats working with someone who understands the local community. The professional service providers featured here have earned their reputation through years of dedicated work serving families and businesses across Prosper, Celina, Frisco, and the surrounding area. Whether you are planning your estate, navigating a real estate transaction, or looking for a CPA to manage your taxes, these professionals combine deep expertise with a personal, small-town approach. They are the kind of people your neighbors recommend at the soccer field or over the backyard fence.',
    metaDescription: 'Find trusted lawyers, CPAs, and professional services in Prosper, TX. Estate planning, tax preparation, real estate law — recommended by your neighbors.',
  },
  {
    name: 'Shop',
    slug: 'shop',
    urlPath: 'shop',
    description: 'Boutiques, retail stores, and unique shopping experiences in Prosper, Texas.',
    longDescription: 'Downtown Prosper is home to a growing collection of boutiques, gift shops, and specialty stores that make shopping here feel personal. From curated women\'s fashion and artisanal home decor to locally arranged flower bouquets, the shops in Prosper reflect the character and creativity of this community. Broadway Street and Main Street are the heart of the shopping scene, where you can browse unique finds, discover the perfect gift, and support small business owners who pour their hearts into their storefronts. Visitors from Frisco, McKinney, and Celina frequently make the trip to explore what downtown Prosper has to offer.',
    metaDescription: 'Shop local boutiques, florists, and unique stores in Prosper, TX. Curated fashion, home decor, and gifts on Broadway Street — support small business.',
  },
  {
    name: 'Trades',
    slug: 'trades',
    urlPath: 'trades',
    description: 'Plumbers, electricians, contractors, and skilled tradespeople in Prosper, Texas.',
    longDescription: 'Finding a reliable plumber, electrician, or contractor in Prosper, Texas should not feel like a gamble. The skilled tradespeople featured here have earned the trust of homeowners across Prosper, Little Elm, Frisco, and the surrounding communities through consistent, high-quality work. Whether you need an emergency plumbing repair at midnight, a panel upgrade for your new home, or routine HVAC maintenance, these professionals show up on time, do the job right, and stand behind their work. In a fast-growing area where new homes are going up every day, having a trusted tradesperson on speed dial is worth its weight in gold.',
    metaDescription: 'Find trusted plumbers, electricians, and contractors serving Prosper, TX. 24/7 emergency service, honest pricing — recommended by local homeowners.',
  },
];

export const navigation = categories.map((c) => ({
  label: c.name,
  href: `/${c.urlPath}/`,
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

// ── Helper functions ──

export function getBusinessesByCategory(categorySlug: string): Business[] {
  return businesses.filter((b) => b.category === categorySlug);
}

export function getRecentBusinesses(count: number = 6): Business[] {
  return businesses.slice(0, count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByUrlPath(urlPath: string): Category | undefined {
  return categories.find((c) => c.urlPath === urlPath);
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getCategoryUrl(category: Category): string {
  return `/${category.urlPath}/`;
}

export function getBusinessUrl(business: Business): string {
  const category = getCategoryBySlug(business.category);
  return `/${category?.urlPath || business.category}/${business.slug}/`;
}

export function getCategoryDisplayName(slug: string): string {
  const cat = getCategoryBySlug(slug);
  return cat?.name || slug;
}

/** Map category slug to schema.org @type for individual business pages */
export function getSchemaType(categorySlug: string): string {
  const map: Record<string, string> = {
    'food-fun': 'Restaurant',
    'health-fitness': 'HealthAndBeautyBusiness',
    'professionals': 'ProfessionalService',
    'shop': 'Store',
    'trades': 'HomeAndConstructionBusiness',
  };
  return map[categorySlug] || 'LocalBusiness';
}
