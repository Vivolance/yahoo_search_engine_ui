export interface SearchResult {
    search_id: string;
    user_id: string;
    search_term: string;
    result: string | null;
}

export class YahooSearchService {
    /*
    * YahooSearchService that makes the following requests to the yahoo_search_engine backend
    * 
    * async search(query: string) {
    * 
    * } 
    * 
    * POST http://localhost:8080/search
    * 
    * Payload:
    * {
	*   "user_id": "858c49fc-1ff2-43bd-b08a-afdadbfa4df2",  # hard-coded for now
	*   "query": "tea"  # the search we want to send to yahoo
    * }
    * 
    * Returns:
    * 
    * {
	*   "search_id": string,
	*   "user_id": string,
	*   "search_term": string,
	*   "result": string | null
    * }
    */
    // define a private attribute baseUrl that is a string and set it to 'http://localhost:8080'
    // make the type ignore the possibility of this being undefined
    private base_url: string = import.meta.env.VITE_YAHOO_SEARCH_ENGINE_URL!;

    async search(query: string): Promise<SearchResult> {
        const response = await fetch(`${this.base_url}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                user_id: '858c49fc-1ff2-43bd-b08a-afdadbfa4df2',
                query: query
            })
        });
        return response.json();
    }

}

// Create a singleton, and share this across the repository
export const yahooSearchService = new YahooSearchService();
