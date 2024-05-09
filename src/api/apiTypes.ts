export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description PageAPI is a generic interface that represents the structure of a API response.
 * @template Data - The type of the data that the API will return.
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}
