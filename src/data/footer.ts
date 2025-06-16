import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Start building with Grit!.",
    quickLinks: [
        {
            text: "Blogs",
            url: "https://elidayjuma.com/blog"
        },
        {
            text: "Startups",
            url: "https://elidayjuma.com/category/startups/"
        },
        {
            text: "Resources",
            url: "https://elidayjuma.com/startup-resources/"
        },
    ],
    email: 'elidayjuma@gmail.com',
    telephone: 'not today',
    socials: {
        // github: 'https://github.com/elidayjuma',
        // x: 'https://twitter.com/x',
        twitter: 'https://x.com/elidayjuma',
        facebook: 'https://www.facebook.com/elidecj',
        // youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com/in/eliutherius-juma',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}