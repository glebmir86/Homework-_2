import { APIRequestContext, APIResponse } from '@playwright/test';


    export async function doPostRequest(
        request: APIRequestContext,
        url: string,
        data: object = {},
        params?: Record<string, string | number | boolean>,
    ): Promise<APIResponse> {
        return await request.post(url, {
            data,
            params
        });
    }
    



