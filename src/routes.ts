import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',

  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  Characters = '/characters',
  Maps = '/maps',
  Commands = '/commands',
  Codes = '/codes',
  Play = '/play',
  Status = '/status',
  OfficialLinks = '/official-links',
  HowToPlayGuide = '/guides/how-to-play-deltarune-connected',
  CharacterSelectorGuide = '/guides/character-selector-and-actions',
  HiddenCharactersGuide = '/guides/hidden-characters',
  RoaringKnightGuide = '/guides/roaring-knight',
  WoodyGuide = '/guides/woody-friend-inside-me',
  LightnersLiveGuide = '/guides/lightners-live-update',
  PlatformGuide = '/guides/mobile-and-console',
  ConsoleGraphicsGuide = '/guides/console-graphics-fix',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
