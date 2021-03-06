import { Dictionary } from 'lodash';

export interface HomeData {
    header: HeaderSection;
    prices: PriceInfo[];
    pastEvents: Dictionary<Event>;
    upcomingEvents: Dictionary<Event>;
    categories: Dictionary<Category>;
    members: Dictionary<Member>;
    makes: Dictionary<Make>;
    facilities: Dictionary<Facility>;
    helpUs: HelpUs;
    supporters: Supporters;
}

export interface PriceInfo {
    price: string;
    fullPrice: string;
    discount: string;
    time: string;
}

export interface HeaderSection {
    gallery: Image[];
    logo: Image;
    name: string;
    motto: string;
    headline: string;
}

export interface Supporters {
    name: string;
    overview: string;
    partners: Supporter[];
    supporters: Supporter[];
    people: string[];
    howToHelp: string;
    howToHelpTitle: string;
}

export interface Supporter {
    name: string;
    url: string;
    image: Image;
}

export interface HelpUs {
    text: string;
    needs: Need[];
}
export interface Image {
    url: string;
    caption: string;
}

export interface Need {
    category: string;
    overview: string;
    wishlist: Tool[];
}

export interface Tool {
    name: string;
    description: string;
    image: Image;
}

export interface Facility {
    id: number;
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    category: number;
    tools: Tool[];
}

export interface Category {
    id: number;
    name: string;
    image: Image;
    upcomingEvents: number[];
    pastEvents: number[];
    members: number[];
    makes: number[];
    facilities: number[];
}

export interface Make {
    id: number;
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    category: number;
    maker: number;
    similarMakes: number[];
}

export interface Event {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    image: Image;
    gallery: Image[];
    memberPrice?: number;
    nonMemberPrice?: number;
    date: Date;
    dateFormatted: string;
    similarUpcomingEvents: number[];
    similarPastEvents: number[];
    category: number;
    host: number;
}

export interface Member {
    id: number;
    name: string;
    bio: string;
    image: Image;
    categories: number[];
    makes: number[];
    hostedEvents: number[];
    attendedEvents: number[];
    hostingEvents: number[];
    attendingEvents: number[];
}