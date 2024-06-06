import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'Username too short.')
    .regex(userNameRegex, 'invalid username.')
    .toLowerCase(),
  firstName: z
    .string()
    .min(3, 'Name too short.')
    .max(255, 'Name too long.')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(3, 'Name too short.')
    .max(255, 'Name too long.')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('Email must be a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
