import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "cliftona2",
    database: "rest_api",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: [],
    subscribers: [],
})
