import { Module } from "@nestjs/common";
import { CustomTaskController } from "./controllers/Custom-Tasks.controllers";
import { CustomTasksService } from "./services/Custom-Models.Services";

@Module({
  imports :[],
  controllers : [CustomTaskController],
  providers : [CustomTasksService]
})

export class AppModule{}