import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Invalid Username').toLowerCase(),
  fullName: z
    .string()
    .min(3, 'Name too short.')
    .max(255, 'Name too long.')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().email('Email must be a valid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
