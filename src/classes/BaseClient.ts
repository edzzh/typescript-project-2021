import axios, {AxiosResponse} from "axios";

interface BaseClientDescriptor {
    baseUrl: string;
    path: string;
}

export class BaseClient implements BaseClientDescriptor {
    readonly baseUrl: string;
    path: string;

    constructor(baseUrl: string, path: string) {
        this.baseUrl = baseUrl;
        this.path = path;
    }

    async get<T = any>(): Promise<AxiosResponse<T>> {
        return await axios.get<T>(this.baseUrl + this.path);
    }
}