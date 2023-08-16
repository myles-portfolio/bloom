import AuthProvider from "@/auth/AuthProvider";
import Meta from "@/app/components/Meta";
import Navbar from "@/app/components/Navbar";
import "@/styles/globals.css";

export default function RootLayout({ children, accessToken }) {
	return (
		<>
			<Meta />
			<Navbar />
			<AuthProvider accessToken={accessToken}>{children}</AuthProvider>
		</>
	);
}
