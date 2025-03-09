"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInSchema, signUpSchema } from "../validation/authValidation";
import Link from "next/link";

interface AuthFormProps {
  isSignUp?: boolean;
  role: "doctor" | "patient";
}

export default function AuthForm({ isSignUp = false, role }: AuthFormProps) {
  const [loading, setLoading] = useState(false);

  const initialValues = isSignUp
    ? { name: "", email: "", password: "" }
    : { email: "", password: "" };

  const validationSchema = isSignUp ? signUpSchema : signInSchema;

  const handleSubmit = (values:typeof initialValues) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted:", values);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          {isSignUp ? `Register as ${role}` : `Login as ${role}`}
        </h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <Field name="name" type="text" className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-blue-500" />
                  <ErrorMessage name="name" component="div" className="text-xs text-red-500" />
                </div>
              )}

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                <Field name="email" type="email" className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-blue-500" />
                <ErrorMessage name="email" component="div" className="text-xs text-red-500" />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                <Field name="password" type="password" className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-blue-500" />
                <ErrorMessage name="password" component="div" className="text-xs text-red-500" />
              </div>

              <button type="submit" disabled={loading || isSubmitting} className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
              </button>

              <p className="mt-3 text-center text-sm text-gray-500">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <Link href={isSignUp ? "/login" : "/register"} className="text-blue-600 hover:underline">
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
