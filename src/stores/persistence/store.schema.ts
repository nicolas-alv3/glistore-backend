import * as mongoose from "mongoose";

export const GMenuItem = new mongoose.Schema();
GMenuItem.add({
    href: String,
    text: String,
    subItems: [GMenuItem]
})

export const GColorPallette = new mongoose.Schema({
    primary: String,
    secondary: String,
    tertiary: String,
    quaternary: String,
    primaryFont: String,
    secondaryFont: String
})

export const StoreSchema = new mongoose.Schema({
    username: String, // Must be unique in the system
    companyName: String,
    description: String,
    instaUser: String,
    fbLink: String,
    phoneNumber: String,
    colorPalette: GColorPallette,
    logo: String,
    menu: [GMenuItem],
    userEmail: String
})
