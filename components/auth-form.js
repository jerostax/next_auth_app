'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { signup } from '../actions/auth-actions';

// This component handles both login and signup forms

export default function AuthForm() {
  const [formState, formAction] = useFormState(signup, {});
  return (
    <form id='auth-form' action={formAction}>
      <div>
        <img src='/images/auth-icon.jpg' alt='A lock icon' />
      </div>
      <p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </p>
      <p>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </p>
      {formState.errors && (
        <ul id='form-errors'>
          {Object.values(formState.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <button type='submit'>Create Account</button>
      </p>
      <p>
        <Link href='/'>Login with existing account.</Link>
      </p>
    </form>
  );
}
