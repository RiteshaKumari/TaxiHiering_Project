using System;
using System.ComponentModel.DataAnnotations;

namespace Taxi_Project.Models
{
	public class tbl_TourDetail
	{
		public int ID { get; set; }
		public int tourPDetailid { get; set; }
		public string Tourimg { get; set; }
		public string TourIntro { get; set; }
		public string TourTheme { get; set; }
		public string sts { get; set; }
		public string TourInclusion { get; set; }
		public string Itenary { get; set; }
		public string Placeid { get; set; }
		public string Placeimg { get; set; }
		public string PLaceTitle { get; set; }
		public string Placeinfor { get; set; }
		public string DayPlaceid { get; set; }
		public string Dayno { get; set; }
		public string DayPlaceTitle { get; set; }
		public string DayPLaceDetail { get; set; }
		public string DayPlaceInfor { get; set; }
		public string dayid { get; set; }
		public string DayTitle { get; set; }
		public string DayDetails { get; set; }
		public string url { get; set; }

		[Required(ErrorMessage = "Booking tour name is required")]
		public string bookingtourname { get; set; }

		[Required(ErrorMessage = "Booking tour email is required")]
		[RegularExpression("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", ErrorMessage = "Invalid email format")]
		public string bookingtouremail { get; set; }

		[Required(ErrorMessage = "Booking tour phone is required")]
		[RegularExpression("[0-9]{10}", ErrorMessage = "Invalid phone number format")]
		public string bookingtourphone { get; set; }

		[Required(ErrorMessage = "Booking tour room is required")]
		public string bookingtourRoom { get; set; }

		[Required(ErrorMessage = "Booking tour date is required")]
		public string bookingtourdate { get; set; }

		[Required(ErrorMessage = "Booking tour package is required")]
		public int bookingtourPackage { get; set; }

		public string TourPackageName { get; set; }
	}
}
