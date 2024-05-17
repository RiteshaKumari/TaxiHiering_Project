using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web.Mvc;
using Taxi_Project.Models;
using System.Configuration;

namespace Taxi_Project.Controllers
{
	public class HomeController : Controller
	{
		private string CS = ConfigurationManager.ConnectionStrings["dbcs"].ConnectionString;
		private UserDBContext db = new UserDBContext();

		public ActionResult Index()
		{
			var list = new List<string>() { "Select Vehicle Class", "Normal Car", "Business Class", "VIP Service" };
			ViewBag.list = list;
			return View();
		}

		[HttpPost]
		public ActionResult Index(tbl_BookingVehicle model)
		{
			try
			{
				if (ModelState.IsValid)
				{

					int rowsAffected = db.InsertBookingVehicle(model.bookingPhone, model.bookingLocation, model.bookingDate, model.bookingTime, model.bookingVehicalClass, model.noofpassenger);

					if (rowsAffected > 0)
					{
						ModelState.Clear();
						TempData["check"] = "True";
						return View();
					}

					else
					{
						TempData["message"] = "Something went wrong!";
					}
				}
			}
			catch (Exception ex)
			{
				TempData["message"] = ex.Message;
			}

			return View(model);
		}

		[Route("Contact")]
		public ActionResult Contact()
		{
			return View();
		}

		[HttpPost]
		[Route("Contact")]
		public ActionResult Contact(tbl_Contact model)
		{
			try
			{
				if (ModelState.IsValid)
				{
					int rowsAffected = db.InsertContact(model.ContName, model.ContEmail, model.ContMobNo, model.ContMessage);
					if (rowsAffected > 0)
					{
						TempData["check"] = "True";
						ModelState.Clear();
						return RedirectToAction("Contact");
					}
					else
					{
						TempData["message"] = "Something went wrong!";
					}
				}
			}
			catch (Exception ex)
			{
				TempData["message"] = ex.Message;
			}
			return View(model);
		}

		[Route("Gallery")]
		public ActionResult Gallery()
		{
			List<tbl_gallery> galleryImages = db.GetGalleryImages();
			return View(galleryImages);
		}

		[Route("About")]
		public ActionResult About()
		{
			ViewBag.Message = "Your application description page.";
			return View();
		}

		[Route("OurService")]
		public ActionResult OurService()
		{
			ViewBag.Message = "Your Service page.";
			return View();
		}

		[Route("OurFleet")]
		public ActionResult OurFleet()
		{
			ViewBag.Message = "Your FLEET.";
			return View();
		}

		[Route("Destination")]
		public ActionResult Destination()
		{
			ViewBag.Message = "Your FLEET.";
			return View();
		}

	
		[HttpPost]
		public ActionResult BookTour(tbl_BookingTour model)
		{
			try
			{
				if (ModelState.IsValid)
				{
					int rowsAffected = db.InsertBookingTour(model.url, model.bookingtourname, model.bookingtouremail, model.bookingtourphone, model.bookingtourRoom, model.bookingtourdate, model.bookingtourPackage, model.TourPackageName);

					if (rowsAffected > 0)
					{
						TempData["check"] = "True";
						ModelState.Clear();
						return RedirectToAction("Index");
					}
					else
					{
						TempData["message"] = "Something went wrong!";
					}
				}
			}
			catch (Exception ex)
			{
				TempData["message"] = ex.Message;
			}

			return View("Index", model);
		}

		[Route("Tour")]
		public ActionResult Tour()
		{
			List<tbl_tourPackage> tourPackages = db.GetTourPackages();
			return View(tourPackages);
		}


		[Route("TourPackage/TourDetails/{id}")]
		public ActionResult TourDetails(int id, string imageUrl)
		{
			var tourDetails = db.GetTourDetails(id);
			if (tourDetails != null && tourDetails.Any())
			{
				ViewBag.TourImage = imageUrl;
				return View(tourDetails);
			}
			return HttpNotFound();
		}



	}
}
