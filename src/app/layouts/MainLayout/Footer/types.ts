export interface SocialLink {
  name: string;
  path: string;
  icon: string;
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}