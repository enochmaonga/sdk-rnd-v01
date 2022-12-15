import fetch from "isomorphic-unfetch";

//for apikey abstraction
type Config = {
    apiKey: string;
    baseUrl?: string;
};

export abstract class  Base {
    private apikey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apikey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com";
    }
    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;

        //we may not need apikey here but this is how it is done:
        const headers = {
            "Content-Type": "application/json",
            "api-key": this.apikey
        };
        const config = {
            ...options,
            headers,
        };

        return fetch(url, config).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        });
    }
}