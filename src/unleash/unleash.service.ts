import { Injectable } from '@nestjs/common';
import { initialize, isEnabled } from 'unleash-client';

@Injectable()
export class UnleashService {
    constructor(){
        initialize({
            url: 'http://localhost:4242/api',
            appName: 'fintrack-api',
            customHeaders: { Authorization: 'fake-token' },
            disableMetrics: true,
            bootstrap: {
                data: [
                    {
                        enabled: true,
                        name: 'summary-report',
                        description: 'Ativa o endpoit de resumo mensal',
                        strategies: [{ name: 'default', parameters: {}, constraints:[] }],
                        variants: [],
                        impressionData: false,
                    },
                ],
            },
        });
    }

    isEnabled(feature: string): boolean {
        return isEnabled(feature)
    }
}
