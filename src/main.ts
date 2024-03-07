import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function main() {
    const app = await NestFactory.create(AppModule)
    const PORT = process.env.PORT

    app.setGlobalPrefix('api/v2')

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true
            }
        })
    )

    await app.listen(PORT)
    console.log(`App running on port ${PORT}`);
}
main()
