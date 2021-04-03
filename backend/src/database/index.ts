import { response } from 'express';
import { Connection, createConnection, getConnectionOptions } from 'typeorm'

export default async (): Promise<Connection> => {

    try {
        const defaultOptions = await getConnectionOptions();

        return createConnection(
            Object.assign(defaultOptions, {
                database: defaultOptions.database
            }))
    } catch (error) {
        error = console.log("Erro na conexão.");

    }
}
