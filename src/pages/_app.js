import RootLayout from "@/layouts/layout";
import "@/styles/globals.css";

export async function getServerSideProps(context) {
	const supabase = createServerComponentClient({
		cookies: context.req.cookies,
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	const accessToken = session?.access_token || null;

	return { props: { accessToken } };
}

export default function App({ Component, pageProps, accessToken }) {
	return (
		<RootLayout accessToken={accessToken}>
			<Component {...pageProps} />
		</RootLayout>
	);
}
