import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private readonly connection: Connection) {}

  onApplicationBootstrap() {
    console.log(
      'Entities:',
      this.connection.entityMetadatas.map((meta) => meta.name)
    );
  }
}
