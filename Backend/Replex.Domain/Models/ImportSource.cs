using System.Collections.Generic;

namespace Replex.Domain.Models
{
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
}
