export const assetUrl = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

export const ASSETS = {
  logoDark: assetUrl('logo-dark.png'),
  logoWhite: assetUrl('logo-white.png'),
  defaultCover: assetUrl('default-cover.png'),
  icon192: assetUrl('icon-192.png'),
  icon512: assetUrl('icon-512.png'),
}
