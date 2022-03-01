import { Injectable, Logger } from '@nestjs/common';

export const LOGGER = {
    INIT: '[INIT]',
    END: '[END]',
    ERROR: '[ERROR]',
};

@Injectable()
export class LoggerCustomService extends Logger {
    private readonly nameClazz: string;

    constructor(clazz: string) {
        super();
        this.nameClazz = clazz;
    }

    /**
     * Configuracion de Log de informacion custom para la aplicacion.
     *
     * @param {string} method nombre del metodo que se desea loggear
     * @param {string} [message] mensaje opcional del log
     * @param {*} [data] data asociada al log.
     * @memberof LoggerCustomService
     */
     info(method: string, message?: string, data?: any): void {
        let logger = `: [${method}] `;
        if (message !== null) {
            logger += `-> ${message}`;
        }
        if (data !== null && data !== undefined) {
            logger += ` -> data = ${JSON.stringify(data)}`;
        }
        super.log(logger, this.nameClazz);
    }

    /**
     * Configuracion de Log de informacion custom para la aplicacion.
     *
     * @param {string} method nombre del metodo que se desea loggear
     * @param {string} [message] mensaje opcional del log
     * @param {*} [data] data asociada al log.
     * @memberof LoggerCustomService
     */
     debug(method: string, message?: string, data?: any): void {
        let logger = `: [${method}] `;
        if (message !== null) {
            logger += `-> ${message}`;
        }
        if (data !== null && data !== undefined) {
            logger += ` -> data = ${JSON.stringify(data)}`;
        }
        super.debug(logger, this.nameClazz);
    }

    /**
     * Configuracion de Log de error custom para la aplicacion.
     *
     * @param {string} method nombre del metodo que se desea loggear
     * @param {*} [message] message del error o excepcion.
     * @param {*} [trace] trace del error o excepcion.
     * @memberof LoggerCustomService
     */
     errors(method: string, message?: any, trace?: any): void {
        super.error(
            `[${method}] -> ${LOGGER.ERROR} -> ${JSON.stringify(message)}`,
            `${trace}`,
            this.nameClazz,
        );
    }
}
