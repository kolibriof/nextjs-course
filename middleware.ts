export const middleware = (request: any) => {
	return Response.redirect(new URL("/", request.url));
};

export const config = {
	matcher: ["/about/:path*"],
};
