using System;
using System.Collections.Generic;

namespace Replex.Models
{
  public class Category
  {
    public virtual int CategoryId { get; set; }
    public virtual string CategoryName { get; set; }
  }

  public class Channel
  {
    public virtual int ChannelId { get; set; }
    public virtual string ChannelName { get; set; }
    public virtual string ChannelDescription { get; set; }
  }

  public class Distributor
  {
    public virtual int DistributorId { get; set; }
    public virtual string DistributorName { get; set; }
    public virtual string ContactPersonName { get; set; }
  }

  public class TicketType
  {
    public virtual int TicketTypeId { get; set; }
    public virtual string TicketTypeName { get; set; }
    public virtual string TicketTypeDescription { get; set; }
  }

  public class RepartitionStatus
  {
    public virtual int RepartitionStatusId { get; set; }
    public virtual string RepartitionStatusName { get; set; }
  }

  public class Product
  {
    public virtual int ProductId { get; set; }
    public virtual string ProductName { get; set; }
  }

  public class ImportSource
  {
    public ImportSource()
    {
      ImportLog = new HashSet<ImportLog>();
    }

    public virtual int SourceId { get; set; }
    public virtual string SourcelName { get; set; }
    public virtual ICollection<ImportLog> ImportLog { get; set; }
  }

  public class ImportLog
  {
    public ImportLog()
    {
      ImportError = new HashSet<ImportError>();
    }

    public virtual int ImportId { get; set; }
    public virtual int ImportedRows { get; set; }
    public virtual DateTime ImportDate { get; set; }
    public virtual string ImportType { get; set; }
    public virtual int? SourceId { get; set; }
    public virtual ImportSource Source { get; set; }
    public virtual ICollection<ImportError> ImportError { get; set; }
  }

  public class ImportError
  {
    public virtual int ErrorId { get; set; }
    public virtual int? ImportId { get; set; }
    public virtual string ErrorDescription { get; set; }
    public virtual ImportLog Import { get; set; }
  }

  public class MonthlyStatus
  {
    public virtual int MonthlyStatusId { get; set; }
    public virtual string ProcessingMonth { get; set; }
    public virtual string ProcessingYear { get; set; }
    public virtual bool RepartitionDone { get; set; }
    public virtual bool ValidationOv { get; set; }
    public virtual bool ValidationCr { get; set; }
    public virtual bool CorrectionsRequired { get; set; }
  }

}
