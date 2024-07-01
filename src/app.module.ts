import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MessageModule } from './message/message.module';
import { UniversityModule } from './university/university.module';
import { CourseModule } from './course/course.module';


@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   autoSchemaFile: true,
    //   driver: ApolloDriver,
    // }),
    UserModule, 
    GroupModule, 
    MessageModule, 
    UniversityModule, 
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
