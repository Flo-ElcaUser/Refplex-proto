
namespace Replex.Domain.Models
{
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
