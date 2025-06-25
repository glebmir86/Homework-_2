//Generate rundom number
export function generateRandomNumber(digits: number): number {
  if (digits <= 0) throw new Error('Digits must be positive');
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(min + Math.random() * (max - min + 1));
}

//Generate random email
export function generateRandomEmail(digits: number, prefix: string, domain: string): string {
  const rand = generateRandomNumber(digits);
  return `${prefix}${rand}@${domain}`;
}

//Generate random phone number
export function generateRandomPhone(digits: number): string {
  return generateRandomNumber(digits).toString();
}

export function generateRandomId(digits: number, prefix: string): string {
  return `${prefix}${generateRandomNumber(digits)}`;
}