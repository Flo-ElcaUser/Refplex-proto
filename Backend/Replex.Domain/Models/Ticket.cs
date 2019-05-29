using System;

namespace Replex.Domain.Models
{
  public class Ticket
  {
    public virtual int TicketId { get; set; }
    public virtual DateTime SalesDate { get; set; }
    public virtual DateTime ValidityDate { get; set; }
    public virtual int? ChannelId { get; set; }
    public virtual int? TicketTypeId { get; set; }
    public virtual int? CategoryId { get; set; }
    public virtual int? CI { get; set; }
    public virtual int? ProductId { get; set; }
    public virtual int NumberOfTickets { get; set; }
    public virtual decimal? Price { get; set; }
    public virtual DateTime AddedDate { get; set; }
    public virtual DateTime LastModifiedDate { get; set; }
    public virtual int? DistributorId { get; set; }
    public virtual int? RepartitionStatusId { get; set; }
    public virtual Category Category { get; set; }
    public virtual Channel Channel { get; set; }
    public virtual Distributor Distributor { get; set; }
    public virtual Product Product { get; set; }
    public virtual RepartitionStatus RepartitionStatus { get; set; }
    public virtual TicketType TicketType { get; set; }

  }

}

