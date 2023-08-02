namespace test.Models
{
    public class Sheet
    {

        public int Id { get; set; }

        public double Length { get; set; }

        public double Width { get; set; }

        public int? JobId { get; set; }
        public List<Lines>? Polylines { get; set; }

        public Job? Job { get; set; }

        public List<Circle>? Circles { get; set; }

        
    }
}
