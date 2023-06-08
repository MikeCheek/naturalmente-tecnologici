export const expires = 150;

export const CookiesNames = {
  functional: 'cmplz_functional',
  statistics: 'cmplz_statistics',
  marketing: 'cmplz_marketing',
};

export const options = {
  expires: expires,
  secure: true,
  sameSite: 'Lax' as 'lax' | 'strict' | 'Strict' | 'Lax' | 'none' | 'None' | undefined,
};
