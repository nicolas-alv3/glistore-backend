interface GColorPallette {
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
    primaryFont: string,
    secondaryFont: string
}
interface GMenuItem {
    href: string,
    text: string,
    subItems: GMenuItem []
}

export interface Configuration {
    companyName: string;
    description: string;
    instaUser: string;
    fbLink: string;
    phoneNumber: string;
    colorPalette: GColorPallette;
    logo: string;
    menu: GMenuItem[];
    userEmail: string
}
