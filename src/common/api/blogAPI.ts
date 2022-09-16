import axios from "axios";
import qs from "qs";

// 백엔드 응답 형식
export interface CommonResponse<T> {
  code: number;
  status: string;
  resultMessage: string;
  error?: string;
  path?: string;
  data: T;
}

// TODO : 전역 Error 처리 어떻게 할 것인가
class BlogAPI {
  private readonly PREFIX: string;

  constructor() {
    this.PREFIX = "https://bomsbro.com";
  }

  public async get<ResT, QueryT = undefined>(url: string, query?: QueryT): Promise<ResT> {
    const response = await axios.get(
      this.PREFIX + url,
      query && {
        params: query,
        paramsSerializer: params => qs.stringify(params),
      },
    );
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  }

  public async post<ReqT, ResT>(url: string, payload: ReqT): Promise<ResT> {
    const response = await axios.post(this.PREFIX + url, payload);
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  }

  public async delete<ResT, QueryT = undefined>(url: string, query?: QueryT) {
    const response = await axios.delete(
      this.PREFIX + url,
      query && {
        params: query,
        paramsSerializer: params => qs.stringify(params),
      },
    );
    const body: CommonResponse<ResT> = response.data;

    return body.data;
  }

  public async patch<ReqT, ResT, QueryT = undefined>(
    url: string,
    payload?: ReqT,
    query?: QueryT,
  ): Promise<ResT> {
    const response = await axios.patch(
      this.PREFIX + url,
      payload,
      query && {
        params: query,
        paramsSerializer: params => qs.stringify(params),
      },
    );
    const body: CommonResponse<ResT> = response.data;
    return body.data;
  }
}

export const blogApi = new BlogAPI();
