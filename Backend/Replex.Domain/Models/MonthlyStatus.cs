
using System.ComponentModel.DataAnnotations;

namespace Replex.Domain.Models
{
  public class MonthlyStatus
  {
    [Key]
    public virtual int MonthlyStatusId { get; set; }
    public virtual string MonthYear { get; set; }
    public virtual string Status { get; set; }
    public virtual string Icon { get; set; }
    public virtual string AnalysisName { get; set; }
    public virtual string AnalysisData { get; set; }
    public virtual decimal AnalysisValue { get; set; }
  }
}
