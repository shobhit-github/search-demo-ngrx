

import { InjectionToken } from '@angular/core';

export let SESSION_CONFIG = new InjectionToken('session.config');

export interface SessionInterface {
    JWT_TOKEN: string;
}

export const Session: SessionInterface = {
    JWT_TOKEN: null
};
