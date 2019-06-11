using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Replex.Domain.Models;

namespace ReplexPosAPI.Models
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
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
        [ForeignKey("ChannelId")]
        public virtual Channel Channel { get; set; }
        [ForeignKey("DistributorId")]
        public virtual Distributor Distributor { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
        [ForeignKey("RepartitionStatusId")]
        public virtual RepartitionStatus RepartitionStatus { get; set; }
        [ForeignKey("TicketTypeId")]
        public virtual TicketType TicketType { get; set; }

    }

}

