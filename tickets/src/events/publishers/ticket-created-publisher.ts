import { Publisher, Subjects, TicketCreatedEvent } from '@cwltickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
