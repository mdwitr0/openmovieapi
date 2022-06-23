import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionModule } from './collection/collection.module';
import { FactModule } from './fact/fact.module';
import { ImageModule } from './image/image.module';
import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { PersonModule } from './person/person.module';
import { ReviewModule } from './review/review.module';
import { SeasonModule } from './season/season.module';

@Module({
  imports: [
    MovieModule,
    PersonModule,
    ReviewModule,
    SeasonModule,
    ImageModule,
    FactModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
