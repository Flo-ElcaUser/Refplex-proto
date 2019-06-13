using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Replex.Domain.Models
{
    public class TicketPrototype
    {
        public virtual int TicketProtoTypeId { get; set; }
        public virtual DateTime SalesDate { get; set; }
        public virtual DateTime ValidityDate { get; set; }
        public virtual string ChannelName { get; set; }
        public virtual string TicketTypeName { get; set; }
        public virtual string CategoryName { get; set; }
        public virtual int? CI { get; set; }
        public virtual string ProductName { get; set; }
        public virtual int NumberOfTickets { get; set; }
        public virtual decimal? Price { get; set; }
        public virtual DateTime AddedDate { get; set; }
        public virtual DateTime LastModifiedDate { get; set; }
        public virtual string DistributorName { get; set; }
        public virtual string Status { get; set; }
        public virtual string Source { get; set; }
    }
}
