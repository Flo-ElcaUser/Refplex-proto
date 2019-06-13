using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Replex.Domain.Models
{
  public class ImportLog
  {
    [Key]
    public virtual int ImportId { get; set; }
    public virtual int? ImportedRows { get; set; }
    public virtual DateTime ImportDate { get; set; }
    public virtual string ImportType { get; set; }
    public virtual int? Error { get; set; }
    public virtual string ErrorMessage { get; set; }
    public virtual string Source { get; set; }
    public virtual string Status { get; set; }
  }

}
