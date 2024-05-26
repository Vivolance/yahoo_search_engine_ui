import { useEffect, useState } from 'react'
import { yahooSearchService, SearchResult } from '../services/YahooSearchService'


function YahooSearchServiceComponent() {
  /**
   * Calls yahooSearchService.search("Coffee Bean Tea Leaf") and show the results as a component
   *
   */

  let [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    yahooSearchService.search("Coffee Bean Tea Leaf")
      .then((result: SearchResult) => {
        setSearchResult(result);
      })
      .catch(error => {
        console.error("Error fetching search result:", error);
      });
  }, []);

  return (
    <>
      <h1>Yahoo Search Service</h1>
      <p>Search for "Coffee Bean Tea Leaf"</p>
      <p>Result:</p>
      {searchResult ? (
        <div>
          <h2>Search ID: {searchResult.search_id}</h2>
          <p>User ID: {searchResult.user_id}</p>
          <p>Search Term: {searchResult.search_term}</p>
          <p>Result: {searchResult.result ? searchResult.result : "No result found."}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default YahooSearchServiceComponent
