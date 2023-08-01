namespace test.Models
{
    public class Client
    {

        public int Id { get; set; }
        public string Name { get; set; }

        public string Phone { get; set; }
        
        public string Address { get; set; }

        public List<Project> Projects { get; set; }
    }
}
