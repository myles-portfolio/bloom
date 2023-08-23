"use client";

import { useState } from "react";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { createClient } from "@/supabase/supabase-browser";

const SignUpSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string().required("Required"),
});

const SignUp = () => {
	const supabase = createClient();
	const [errorMsg, setErrorMsg] = useState(null);
	const [successMsg, setSuccessMsg] = useState(null);

	async function signUp(formData) {
		const { error } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
			// redirectTo: `${window.location.origin}/pages/api/callback`,
		});

		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg(
				"Success! Please check your email for further instructions."
			);
		}
	}

	return (
		<div className="centered-container">
			<div className="card">
				<h2 id="h2" className="w-full text-center">
					Create Account
				</h2>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					validationSchema={SignUpSchema}
					onSubmit={signUp}
				>
					{({ errors, touched }) => (
						<div>
							<Form className="column">
								<label className="form-label" htmlFor="email">
									Email:
									<Field
										className={cn("form-input", errors.email && "bg-red-50")}
										id="email"
										name="email"
										placeholder="youremail@domain.com"
										type="email"
									/>
								</label>
								{errors.email && touched.email ? (
									<div className="text-red-600">{errors.email}</div>
								) : null}

								<label className="form-label" htmlFor="email">
									Password:
									<Field
										className={cn(
											"form-input",
											errors.password && touched.password && "bg-red-50"
										)}
										id="password"
										name="password"
										type="password"
									/>
								</label>
								{errors.password && touched.password ? (
									<div className="text-red-600">{errors.password}</div>
								) : null}

								<button className="button" type="submit">
									Submit
								</button>
							</Form>
						</div>
					)}
				</Formik>
				{errorMsg && <div className="text-red-600">{errorMsg}</div>}
				{successMsg && <div className="text-black">{successMsg}</div>}
				<Link href="/sign-in" className="link">
					Already have an account? Sign In.
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
