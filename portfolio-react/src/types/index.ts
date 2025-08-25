export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export interface ContactInfo {
    name: string;
    email: string;
    message: string;
}

export interface About {
    bio: string;
    skills: string[];
}