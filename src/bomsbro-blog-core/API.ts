import axios from "axios";
import qs from "qs";

// 백엔드 응답 형식
export interface CommonResponse<T> {
  headers: string;
  status: string;
  statusText: string;
  config?: string;
  error?: string;
  data: T;
}

export interface Pageable {
  size?: number;
  page?: number;
  sort?: string;
}

const API = {
  async get<ResT, QueryT = undefined>(
    url: string,
    query?: QueryT
  ): Promise<ResT> {
    const response = await axios.get(
      url,
      query && {
        params: query,
        paramsSerializer: (params) => qs.stringify(params),
      }
    );
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  },

  async post<ReqT, ResT>(url: string, payload: ReqT): Promise<ResT> {
    const response = await axios.post(url, payload);
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  },

  async delete<ResT, QueryT = undefined>(url: string, query?: QueryT) {
    const response = await axios.delete(
      url,
      query && {
        params: query,
        paramsSerializer: (params) => qs.stringify(params),
      }
    );
    const body: CommonResponse<ResT> = response.data;

    return body.data;
  },

  async patch<ReqT, ResT, QueryT = undefined>(
    url: string,
    payload?: ReqT,
    query?: QueryT
  ): Promise<ResT> {
    const response = await axios.patch(
      url,
      payload,
      query && {
        params: query,
        paramsSerializer: (params) => qs.stringify(params),
      }
    );
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  },
};

export default API;
