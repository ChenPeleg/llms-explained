import type { ServiceInjectionMethod } from '../provider/ServiceResolverClass';
import { LocalStorageService } from '../LocalStorage.service.ts';
import { LoggingService } from '../Logging.service.ts';
import { VersionService } from '../Version.service.ts';
import { TranslationService } from '../Translation.service.ts';
import { ExceptionService } from '../Exception.service.ts';
import { WindowService } from '../Window.service.ts';

export const injectedServices: ServiceInjectionMethod[] = [
    TranslationService,
    LocalStorageService,
    LoggingService,
    VersionService,
    ExceptionService,
    WindowService,
];
