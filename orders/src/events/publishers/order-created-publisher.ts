import { Publisher, OrderCreatedEvent, Subjects } from '@cwltickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
