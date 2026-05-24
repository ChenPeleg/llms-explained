import type { ServiceInjectionMethod } from '../../src/services/provider/ServiceResolverClass.ts';
import { injectedServices } from '../../src/services/injection/injectedServices.ts';

export class InjectedServicesMock {
    private readonly _mockedServices: typeof injectedServices;
    constructor(override: ServiceInjectionMethod[] = []) {
        this._mockedServices = this.replaceServices(
            this.originalServices,
            override || []
        );
    }
    get originalServices() {
        return [...injectedServices];
    }
    public get services() {
        return this._mockedServices;
    }
    private replaceServices(
        originalList: ServiceInjectionMethod[],
        replacementList: ServiceInjectionMethod[]
    ): ServiceInjectionMethod[] {
        return originalList.map((original) => {
            const originalServiceIdentifier =
                this.getServiceIdentifier(original);
            const replacement = replacementList.find((r) => {
                return (
                    this.getServiceIdentifier(r) === originalServiceIdentifier
                );
            });
            if (replacement) {
                return replacement;
            }
            return original satisfies ServiceInjectionMethod;
        });
    }

    private getServiceIdentifier(service: ServiceInjectionMethod) {
        if ('useClass' in service) {
            return service.provide;
        } else if ('useFactory' in service) {
            return service.provide;
        } else if (service) {
            return service;
        } else {
            throw new Error(
                '[ServicesTestInjectedMocks] Invalid service definition'
            );
        }
    }
}
