namespace test.Models
{
    public class Sheet
    {

        public int Id { get; set; }

        public int Length { get; set; }

        public int Width { get; set; }

        public int JobId { get; set; }
        public List<Lines> Polylines { get; set; }

        public Job Job { get; set; }

        public List<Circle> Circles { get; set; }








    }
}
