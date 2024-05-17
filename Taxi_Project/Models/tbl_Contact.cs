using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Taxi_Project.Models
{
	public class tbl_Contact
	{
		[Required(ErrorMessage = "Please provide your name.")]
		public string ContName { get; set; }

		[Required(ErrorMessage = "Please provide your email address.")]
		[RegularExpression("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", ErrorMessage = "Invalid email format.")]
		public string ContEmail { get; set; }

		[Required(ErrorMessage = "Please provide your mobile number.")]
		[RegularExpression("[0-9]{10}", ErrorMessage = "Mobile number must be 10 digits.")]
		public string ContMobNo { get; set; }

		[Required(ErrorMessage = "Please enter your message.")]
		public string ContMessage { get; set; }
	}
}
