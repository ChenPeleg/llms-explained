import { ExtendedTestsServicesResolver } from './ServicesTestBedResolver';

import type {
    ServiceConstructorClass,
    ServiceInjectionMethod,
} from '../../src/services/provider/ServiceResolverClass.ts';
import { InjectedServicesMock } from './InjectedServicesMock.ts';

export class ServicesTestBed {
    public serviceResolver: ExtendedTestsServicesResolver;
    constructor(overrideServices: Array<ServiceInjectionMethod>) {
        const initialServicesList = new InjectedServicesMock(overrideServices)
            .services;
        this.serviceResolver = new ExtendedTestsServicesResolver(
            initialServicesList
        );
    }
    getServiceToTest<T extends ServiceConstructorClass>(service: T) {
        return this.serviceResolver.getService(
            service
        ) satisfies InstanceType<T>;
    }
}
