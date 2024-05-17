using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Taxi_Project.Models
{
	public class tbl_BookingVehicle
	{
		[Required(ErrorMessage = "*")]
		[RegularExpression("[0-9]{10}", ErrorMessage = "Please enter a valid 10-digit phone number")]
		public string bookingPhone { get; set; }

		[Required(ErrorMessage = "*")]
		public string bookingLocation { get; set; }

		[Required(ErrorMessage = "*")]
		[DataType(DataType.Date)]
		[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		public string bookingDate { get; set; }

		[Required(ErrorMessage = "*")]
		public string bookingVehicalClass { get; set; }

		[Required(ErrorMessage = "*")]
		[Range(1, int.MaxValue, ErrorMessage = "Please enter a valid number")]
		public string noofpassenger { get; set; }

		[Required(ErrorMessage = "*")]
		[DataType(DataType.Time)]
		[DisplayFormat(DataFormatString = "{0:hh\\:mm}", ApplyFormatInEditMode = true)]
		public string bookingTime { get; set; }
	}
}
