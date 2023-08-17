import { EntityManager } from '@mikro-orm/mysql';
import { IStoredEventRepository } from '../../../domain/repositories/stored-event.repository.interface';
import { IDomainEvent } from '../../../../common/domain/domain-event';
import {
  StoredEventId,
  StoredEvent,
} from '../../../domain/entities/stored-event.entity';

export class StoredEventMySqlRepository implements IStoredEventRepository {
  constructor(private entityManager: EntityManager) {}

  allBetween(
    lowEventId: StoredEventId,
    highEventId: StoredEventId,
  ): Promise<StoredEvent[]> {
    return this.entityManager.find(StoredEvent, {
      id: { $gte: lowEventId, $lte: highEventId },
    });
  }

  allSince(eventId: StoredEventId): Promise<StoredEvent[]> {
    return this.entityManager.find(StoredEvent, { id: { $gte: eventId } });
  }

  add(domainEvent: IDomainEvent): StoredEvent {
    console.log(domainEvent)
    const storedEvent = StoredEvent.create(domainEvent);
    this.entityManager.persist(storedEvent);
    return storedEvent;
  }
}
