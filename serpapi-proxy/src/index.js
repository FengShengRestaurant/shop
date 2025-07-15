/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export default {
	async fetch(request, env, ctx) {
		const url = "https://serpapi.com/search?engine=google_maps_reviews&api_key=66ef02937f96e6b9dd52649e3f616678e78085be8c10201b344e20c3adc556bc&place_id=ChIJ86wbzDxs2jERibqKtPyIII0&sort_by=newestFirst";

		const response = await fetch(url);
		const data = await response.text(); // forwarding raw response

		return new Response(data, {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*", // ✅ CORS enabled
				"Access-Control-Allow-Methods": "GET, OPTIONS",
				"Access-Control-Allow-Headers": "*"
			}
		});
	}
};

