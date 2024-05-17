using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Taxi_Project.Models
{
    public class tbl_tourPackage
    {
		public int ID { get; set; }
		public string PackageImage { get; set; }
		public string PackageTitle { get; set; }
		public string Duration { get; set; }
		public string Location { get; set; }
	}
}