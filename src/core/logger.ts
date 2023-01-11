export class Logger
{
    public static readonly error: (...data: any[])=>void = process.env.NODE_ENV === "development" ? console.error.bind(console): ()=>{};
    public static readonly warn: (...data: any[])=>void = process.env.NODE_ENV === "development" ? console.warn.bind(console): ()=>{};
    public static readonly info: (...data: any[])=>void = process.env.NODE_ENV === "development" ? console.info.bind(console): ()=>{};
}