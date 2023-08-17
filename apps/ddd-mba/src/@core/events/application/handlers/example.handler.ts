import { IDomainEventHandler } from '../../../../../src/@core/common/application/domain-event-handler.interface';
import { PartnerCreated } from '../../domain/domain-events/partner-created.event';
import { IPartnerRepository } from '../../domain/repositories/partner-repository.interface';
import { DomainEventMediator } from '../../../../../src/@core/common/domain/domain-event-manager';

export class ExampleHandler implements IDomainEventHandler {
  constructor(
    private domainEventMediator: DomainEventMediator,
    private partnerRepository: IPartnerRepository,
  ) {}
  async handle(event: PartnerCreated): Promise<void> {
  }

  static listensTo(): string[] {
    return [PartnerCreated.name];
  }
}
