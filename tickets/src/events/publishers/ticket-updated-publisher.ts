import { Publisher, Subjects, TicketUpdatedEvent } from '@cwltickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
