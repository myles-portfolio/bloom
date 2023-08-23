import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import "server-only";

export const createClient = (reqHeaders, reqCookies) => {
	return createServerComponentClient(reqHeaders, reqCookies);
};
