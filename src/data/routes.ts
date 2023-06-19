// {Path: route to page, name: The page name identifier, icon?: not necesary but maybe nice to have}
export const availableRoutes : {path: string, name: string, icon?: string}[] = [
    {path: "/", name: "Home"},
    {path: "/test", name: "Test"},
    {path: "/x", name: "404" }
];

const dom : string = "localhost"
const port:string = ":5173"

export function getCurrentRoute() : string {
    let path = document.baseURI.replace("http://","").replace(dom,"").replace(port,"");       
    return path;
}