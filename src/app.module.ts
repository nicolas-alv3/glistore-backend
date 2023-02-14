import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from './products/products.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';
import { FeatureModule } from './features/feature.module';
import { ConfigurationsModule } from './configurations/configurations.module';


@Module({
  imports: [ProductsModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_CONNECTION as string), FeatureModule, ConfigurationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
