using System;
using System.Collections.Generic;

namespace Replex.Domain.Models
{
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

}
