'use client';

import { cn } from 'cn';
import React from 'react';

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { UserRoundKeyIcon } from 'lucide-react';

import { login } from '@/lib/api/auth';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  // form submit event handler function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Stop page reload

    // resolve the form data from target
    const formData = new FormData(event.currentTarget);

    // get the email and password from form data
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      // initiate a dynamic sonner/toaster with a promise
      toast.promise<string>(
        // provide the async login function as the promise
        login({ email, password }),
        // configure the content strings for various states
        {
          // while the data is still loading
          loading: 'Fetching login endpoint...',
          // after the data has been fetched, display it.
          success: (data) => data,
          // in case of fetch or server errors
          error: (error) => {
            // HTTP error 401 - Unauthorized from server
            if (error.message === 'API error: 401') {
              return 'Invalid login credentials.';
            }
            // internal server errors like 500(s)
            return 'Something went wrong!';
          },
        }
      );
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'Login failed');
    }
  };

  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      onSubmit={handleSubmit}
      {...props}
      autoComplete="on"
    >
      <FieldGroup>
        {/* Large welcome text shown in bold */}
        <div className="flex flex-col items-start gap-1 text-center">
          <h1 className="font-heading text-2xl">Let&apos;s get started! 👋</h1>
        </div>
        {/* Email address input field */}
        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input
            name="email"
            type="email"
            autoComplete="username"
            placeholder="someone@example.com"
            required
          />
        </Field>
        {/* Password input field */}
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            {/* TODO: Add forgot password mechanism */}
            <a
              href="#"
              className="ms-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••••••"
            required
          />
        </Field>
        {/* Primary form submit button */}
        <Field>
          <Button type="submit">Continue</Button>
        </Field>
        {/* Additional elements shown on screen */}
        <FieldSeparator>Quick Sign-in Options</FieldSeparator>
        <Field>
          {/* TODO: Sign-in with passkey option */}
          <Button variant="outline" type="button">
            <UserRoundKeyIcon className="size-5" />
            Sign-in with your Passkey
          </Button>
          {/* TODO: Add a proper sign-up option */}
          <FieldDescription className="text-center">
            Don&apos;t have an account?{' '}
            <a href="#" className="underline underline-offset-4">
              Sign up.
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
