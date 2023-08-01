﻿namespace test.Models
{
    public class Job
    {

        public int Id { get; set; }

        public int MaterialId { get; set; }

        public int ProjectId { get; set; }

        public Project Project { get; set; }

        public List<Sheet> Sheets { get; set; }
    }
}
