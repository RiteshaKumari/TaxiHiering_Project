using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Taxi_Project.Models
{
    public class tbl_BookingTour
    {
        public string url { get; set; }

        [Required(ErrorMessage = "*")]
        public string bookingtourname { get; set; }
        [Required(ErrorMessage = "*")]
        [RegularExpression("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]
        public string bookingtouremail { get; set; }
        [Required(ErrorMessage = "*")]
        [RegularExpression("[0-9]{10}")]
        public string bookingtourphone { get; set; }
        [Required(ErrorMessage = "*")]
        public string bookingtourRoom { get; set; }
        [Required(ErrorMessage = "*")]
        public string bookingtourdate { get; set; }
        public string bookingtourPackage { get; set; }
        public string TourPackageName { get; set; }
    }
}