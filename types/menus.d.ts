export interface MenuFooterLink {
    label: string;
    href: string;
}

export interface MenuFooter {
    login_links: MenuFooterLink[];
    home_links: MenuFooterLink[];
}
