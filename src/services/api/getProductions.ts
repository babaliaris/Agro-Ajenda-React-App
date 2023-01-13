import { Logger } from "../../core/logger";
import { ProductionModel } from "../../models/production.model";

export function getProductions(): Promise<ProductionModel[]>
{
    if (process.env.REACT_APP_MOCK_API === "true")
    {
        const productions: ProductionModel[] = [];

        for (let i = 0; i < 20; i++)
        {
            productions.push({id: i, name: `PRODUCTION ${i}`, year: 2022+i});
        }

        return new Promise((res, rej)=>
        {
            res(productions);
        });
    }

    else
    {
        return new Promise((res, rej)=>
        {
            Logger.warn("This function had not been implemented yet!");
            rej(new Error("Has not been implemented yet."));
        });
    }
}