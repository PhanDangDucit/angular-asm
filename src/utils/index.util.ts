import { environment } from './../environments/environment';

export const getUrl = () => {
    const env = environment["NODE_ENV"];
    if(env === "development") {
        return "http://localhost:3000"
    }
    return environment["API_URL"];
}